import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReportCard from "../ReportCard";
import { host, configHeader } from "../../constants";
import axios from "axios";
import ApexChart from "../DashboardGraph";
import PieChart from "../PieChart";

function Reports() {
  const [cardData, setCardData] = useState({});
  const [graphData, setGraphData] = useState(null);
  const [ageRangePieChartData, setAgeRangePieChartData] = useState([]);
  const [genderBasedPieChartData, setGenderBasedPieChartData] = useState([]);
  const {
    destinations,
    packages,
    tourOperators,
    tourists,
    employee,
  } = cardData;
  let getReportEndpoint = `${host}/report/getCardData`;
  useEffect(() => {
    getData();
    getGraphData();
    getAgeRangePieChartData();
    getGenderBasedPieChart();
  }, []);
  console.log(cardData);

  const getData = async () => {
    await axios.get(getReportEndpoint, configHeader).then((res) => {
      setCardData(res.data);
    });
  };
  const getGraphData = async () => {
    const result = await axios.get(
      `${host}/tourist/get-tourist-graph-data`,
      configHeader
    );
    setGraphData(result.data);
  };
  const getAgeRangePieChartData = async () => {
    const result = await axios.post(
      `${host}/tourist/getAgeRangeCount`,
      [
        {
          start: 0,
          end: 29,
        },

        {
          start: 30,
          end: 45,
        },
        {
          start: 46,
          end: 60,
        },
        {
          start: 61,
          end: 200,
        },
      ],
      configHeader
    );
    setAgeRangePieChartData(result.data);
  };
  const getGenderBasedPieChart = async () => {
    const result = await axios.get(
      `${host}/tourist/findFemaleAndMaleCount`,
      configHeader
    );
    setGenderBasedPieChartData([
      result.data.male_count,
      result.data.female_count,
    ]);
  };
  return (
    <div>
      {destinations && (
        <Box>
          <Grid container sx={{ mt: 2 }} spacing={6}>
            <Grid item xs={12} md={2.4}>
              <ReportCard
                title={tourists.title}
                value={tourists.value}
                cardBackground={"#44804A"}
                titleBackground={"#60A66A"}
              />
            </Grid>

            <Grid item xs={12} md={2.4}>
              <ReportCard
                title={destinations.title}
                value={destinations.value}
                cardBackground={"#009CDF"}
                titleBackground={"#05648B"}
              />
            </Grid>

            <Grid item xs={12} md={2.4}>
              <ReportCard
                title={packages.title}
                value={packages.value}
                cardBackground={"#C81810"}
                titleBackground={"#B25E5E"}
              />
            </Grid>

            <Grid item xs={12} md={2.4}>
              <ReportCard
                title={employee.title}
                value={employee.value}
                cardBackground={"#F7C913"}
                titleBackground={"#9DA450"}
              />
            </Grid>

            <Grid item xs={12} md={2.4}>
              <ReportCard
                title={tourOperators.title}
                value={tourOperators.value}
                cardBackground={"#373737"}
                titleBackground={"#5B5B5B"}
              />
            </Grid>
            <Grid item xs={12}>
              {graphData && <ApexChart graphData={graphData} />}
            </Grid>
            <Grid item xs={12} container justifyContent={"space-around"}>
              <Stack direction={"column"} spacing={2} alignItems={"center"}>
                <Typography>Age Range</Typography>
                {ageRangePieChartData && (
                  <PieChart
                    pieChartData={ageRangePieChartData}
                    label={["0-29", "30-45", "46-60", ">=61"]}
                  />
                )}
              </Stack>
              <Stack direction={"column"} spacing={2} alignItems={"center"}>
                <Typography>Gender </Typography>
                {genderBasedPieChartData && (
                  <PieChart
                    pieChartData={genderBasedPieChartData}
                    label={["Male", "Female"]}
                  />
                )}
              </Stack>
            </Grid>
          </Grid>
        </Box>
      )}
    </div>
  );
}

export default Reports;
