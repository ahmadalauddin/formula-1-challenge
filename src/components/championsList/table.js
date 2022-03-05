import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./table.scss";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { columns } from "./columns";

const DataTable = (props) => {
  const [listData, setListData] = useState([]);
  const navigate = useNavigate();
  const rows = props.ListData;

  useEffect(() => {
    setListData(props.ListData);
  }, [props.ListData]);

  const handleRowClick = (row) => {
    navigate(`/season/${row.season}`, { state: { driverId: row.id } });
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer className="championsListHeight" sx={{}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  className="tableHeader"
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((item, index) => (
              <TableRow
                id={`data_row`}
                onClick={() => handleRowClick(item)}
                hover={true}
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell sx={{ fontWeight: 700 }} component="th" scope="item">
                  {item.name}
                </TableCell>
                <TableCell>{item.nationality}</TableCell>
                <TableCell align="center" sx={{ fontWeight: 700 }}>
                  {item.season}
                </TableCell>
                <TableCell align="center">{item.round}</TableCell>
                <TableCell align="center">{item.wins}</TableCell>
                <TableCell align="right">{item.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default DataTable;
