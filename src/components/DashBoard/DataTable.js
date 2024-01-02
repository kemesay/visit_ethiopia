import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

function DataTable({
  rows,
  columns,
  getRowId,
  rowModesModel,
  handleRowModesModelChange,
  handleRowEditStop,
  processRowUpdate,
  EditToolbar,
  setRows,
  setRowModesModel,
}) {
  return (
    <Box sx={{ height: 700, width: "100%" }}>
      <DataGrid
        editMode="row"
        rows={rows}
        columns={columns}
        getRowId={getRowId}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },  
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={{
          toolbar: EditToolbar,
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
      />
    </Box>
  );
}

export default DataTable;
