import { React } from "react";
import EmojiEventsTwoToneIcon from "@mui/icons-material/EmojiEventsTwoTone";

import { columns } from "./columns";

const SeasonsTable = (props) => {
  const { listData, champion } = props;

  return (
    <div className="championsListHeight">
      <table id="responsive-table-seasons">
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
              key={item.date}
              className={item.driverId === champion ? "hightlightChampion": ''}
            >
              <td>{item.raceName}</td>
              <td>{item.round}</td>
              <td>{item.date}</td>
              <td>{item.grid}</td>
              <td>
                {item.winner}
                {item.driverId === champion && (
                  <EmojiEventsTwoToneIcon className="trophy" />
                )}
              </td>
              <td>{item.laps}</td>
              <td>{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SeasonsTable;
