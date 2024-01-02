import { Container } from "@material-ui/core";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import CountrySelect from "./CountrySelect";

import { useState } from "react";
import DestinationList from "./destinationList";
import { useFormik } from "formik";
import usePostData from "../../services/api/usePostData";
import usePutData from "../../services/api/usePutData";
import axios from "axios";

function TouristInputForm({
  title,
  name,
  endpoint,
  isEditing,
  apitoken,
  open,
  setOpen,
  initialData,
}) {
  const [selectedCountry, setSelectedCountry] = useState("Ethiopia");
  const [selectedDestination, setSelectedDestination] = useState([]);
  const [destinations, setDestinations] = React.useState([]);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100",
    bgcolor: "background.paper",
    //   border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const gender = [
    {
      value: "Male",
      label: "Male",
    },
    {
      value: "Female",
      label: "Female",
    },
  ];

  const touristType = [
    {
      value: "International",
      label: "International",
    },

    {
      value: "Demostic",
      label: "Demostic",
    },
  ];

  const initialValues = isEditing
    ? {
        fullName: initialData.fullName,
        country: initialData.country,
        city: initialData.city,
        email: initialData.email,
        subCity: initialData.subCity,
        phoneNumber: initialData.phoneNumber,
        gender: initialData.gender,
        tourCategory: initialData.tourCategory,
        touristType: initialData.touristType,
        birthDate: initialData.birthDate,
        durationOfStay: initialData.durationOfStay,
        passportId: initialData.passportId,
        zipcode: initialData.zipcode,
      }
    : {
        fullName: "",
        country: "",
        city: "",
        email: "",
        subCity: "",
        phoneNumber: " ",
        gender: " ",
        touristType: " ",
        birthDate: " ",
        tourCategory: [],
        durationOfStay: " ",
        passportId: " ",
        zipcode: " ",
      };

  const InputData = useFormik({
    initialValues,
    // ... other form configuration options
  });

  const touristPayload = {
    fullName: InputData.values.fullName,
    country: selectedCountry,
    city: InputData.values.city,
    subCity: InputData.values.subCity,
    gender: InputData.values.gender,
    touristType: InputData.values.touristType,
    birthDate: InputData.values.birthDate.split("-").join(""),
    email: InputData.values.email,
    phoneNum: InputData.values.phoneNumber,
    visits: [
      {
        durationOfStay: InputData.values.durationOfStay,
      },
    ],
    passportId: InputData.values.passportId,
    zipcode: InputData.values.zipcode,
    // destinations: [{ name: InputData.values.destination }],
  };

  const {
    mutate: postMutate,
    isLoading: postIsLoading,
    isSuccess: postIsSuccess,
    isError: postIsError,
    error: postError,
  } = usePostData(endpoint, apitoken, InputData);
  const {
    mutate: putMutate,
    isLoading: putIsLoading,
    isSuccess: putIsSuccess,
    isError: putIsError,
    error: putError,
  } = usePutData(endpoint, apitoken, InputData);

  const handleSave = (e) => {
    e.preventDefault();
    isEditing ? putMutate(touristPayload) : postMutate(touristPayload);

    console.log(touristPayload);
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    const result = await axios.get(
      "http://localhost:9010/destination/getDestinations"
    );
    setDestinations(result.data);
  };

  return (
    <div>
      <Box sx={style}>
        <Typography my={3} id="modal-modal-title" variant="h6" component="h2">
          Please fill the following information to register Tourist
        </Typography>

        <Container
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <TextField
            style={{ margin: "10px" }}
            value={InputData.values.fullName}
            name="fullName"
            onChange={InputData.handleChange}
            fullWidth
            helperText="fullName"
          />
          <CountrySelect
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
        </Container>

        <Container
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginBottom: "10px",
          }}
        >
          <TextField
            style={{ margin: "10px" }}
            value={InputData.values.city}
            name="city"
            onChange={InputData.handleChange}
            fullWidth
            helperText="city"
          />
          <TextField
            style={{ margin: "10px" }}
            value={InputData.values.subCity}
            name="subCity"
            onChange={InputData.handleChange}
            fullWidth
            helperText="subCity"
          />

          <TextField
            style={{ margin: "10px" }}
            fullWidth
            id="outlined-select-gender"
            value={InputData.values.gender}
            name="gender"
            onChange={InputData.handleChange}
            select
            label="Select"
            defaultValue="Male"
            helperText="Please select gender"
          >
            {gender.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Container>
        <Container
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <TextField
            value={InputData.values.email}
            style={{ margin: "10px" }}
            name="email"
            onChange={InputData.handleChange}
            fullWidth
            helperText="email"
          />
          <TextField
            value={InputData.values.phoneNumber}
            style={{ margin: "10px" }}
            name="phoneNumber"
            onChange={InputData.handleChange}
            fullWidth
            helperText="phoneNumber"
          />
        </Container>

        <Container
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <TextField
            style={{ margin: "10px" }}
            value={InputData.values.durationOfStay}
            name="durationOfStay"
            onChange={InputData.handleChange}
            fullWidth
            type="number"
            helperText="Please select duration of stay"
          ></TextField>
          <TextField
            style={{ margin: "10px" }}
            value={InputData.values.birthDate}
            name="birthDate"
            onChange={InputData.handleChange}
            fullWidth
            type="date"
            helperText="Please select birth date"
          ></TextField>
          <TextField
            style={{ margin: "10px" }}
            fullWidth
            id="outlined-select-touristType"
            value={InputData.values.touristType}
            name="touristType"
            onChange={InputData.handleChange}
            select
            label="Select"
            defaultValue="International"
            helperText="Please select Touriist Type"
          >
            {touristType.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Container>
        {/* <Container>
          <FormControl sx={{ width: "50%" }}>
            <InputLabel id="demo-simple-select-label">
              Assign Destination
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name={"destination"}
              onChange={InputData.handleChange}
              label="Destination"
            >
              {destinations.map((destination, index) => (
                <MenuItem key={index} value={destination.name}>
                  {destination.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Container> */}
        <Container
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          {/* <DestinationList setSelectedDestination={setSelectedDestination} selectedDestination={selectedDestination} /> */}

          <TextField
            style={{ margin: "10px" }}
            value={InputData.values.passportId}
            name="passportId"
            onChange={InputData.handleChange}
            fullWidth
            label="PassportId"
          />
          <TextField
            style={{ margin: "10px" }}
            value={InputData.values.zipcode}
            name="zipcode"
            onChange={InputData.handleChange}
            fullWidth
            label="zipcode"
          />
        </Container>

        <Container
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSave}>
            {postIsLoading || putIsLoading ? "Saving.." : "Save"}
          </Button>
          <h3>
            {postIsSuccess || putIsSuccess ? "SuccessFull registered" : ""}
          </h3>
        </Container>
      </Box>
    </div>
  );
}

export default TouristInputForm;
