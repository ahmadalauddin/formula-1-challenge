import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";

import "./table.scss";
import { columns } from "./columns";

const DataTable = (props) => {
  const navigate = useNavigate();
  const { listData } = props;

  useEffect(() => {}, [listData]);

  const handleRowClick = (row) => {
    navigate(`/season/${row.season}`, { state: { driverId: row.id } });
  };

  return (
    <div>
      <table id="responsive-table-champions">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.id}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {listData.map((item) => (
            <tr
              id="data_row"
              key={item.season}
              className="hoverRow"
              onClick={() => handleRowClick(item)}
            >
              <td className="font-500">{item.name}</td>
              <td>
                {item.nationality} &nbsp;
                <ReactCountryFlag
                  countryCode={item.countryCode}
                  title={item.countryCode}
                  svg
                />
              </td>
              <td>{item.season}</td>
              <td>{item.round}</td>
              <td className="font-500">{item.wins}</td>
              <td className="font-500">{item.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
