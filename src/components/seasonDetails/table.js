import { React, useEffect, useState } from "react";

import "./table.scss";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import { green, yellow } from '@mui/material/colors';

import { columns } from "./columns";

const SeasonsTable = (props) => {
  const [listData, setListData] = useState([]);
 
  useEffect(() => {
    setListData(props.ListData);
  }, [props.ListData]);

  return (
    
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer className="seasonsListHeight" sx={{}}>
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
            {props.ListData.map((item) => (
              <TableRow
                id="data_row"
                key={item.round + item.grid}
                sx={
                  { "&:last-child td, &:last-child th": { border: 0 }, "background": item.driverId === props.champion && green[50] }}
              >
                <TableCell component="th" scope="item" sx={{fontWeight: 700}}>
                  {item.raceName}
                </TableCell>
                <TableCell align="center">{item.round}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell align="center">{item.grid}</TableCell>
                <TableCell sx={{fontWeight: 700}}>{item.winner} {item.driverId === props.champion && <EmojiEventsTwoToneIcon sx={{ color: yellow[500] }}/>}</TableCell>
                <TableCell align="center">{item.laps}</TableCell>
                <TableCell align="center">{item.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default SeasonsTable;
