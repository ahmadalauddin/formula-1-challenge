import { shallow } from "enzyme";
import React from "react";

import { columns } from "../../../components/seasonDetails/columns";
import DataTable from "../../../components/seasonDetails/table";

//mock to handle useNavigate used in the component
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

const mockColumnsLength = columns.length;
const mockPropList = [
  {
    date: "2006-03-12",
    driverId: "alonso",
    grid: "4",
    laps: "57",
    points: "10",
    raceName: "Bahrain Grand Prix",
    round: "1",
    status: "Finished",
    time: "1:29:46.205",
    winner: "Fernando Alonso",
  },
  {
    date: "2006-03-12",
    driverId: "hamilton",
    grid: "4",
    laps: "57",
    points: "10",
    raceName: "Australian Grand Prix",
    round: "1",
    status: "Finished",
    time: "1:29:46.205",
    winner: "Lewis Hamilton",
  },
];

const championId = "alonso";

let wrapper;

beforeEach(() => {
  wrapper = shallow(
    <DataTable listData={mockPropList} champion={championId} />
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("Checking the func of data table component", () => {
  it("Checking if only one table is present", () => {
    expect(wrapper.find("table")).toHaveLength(1);
  });

  it("Checking if only the rendered columns are equal to the no. passed", () => {
    expect(wrapper.find("thead").children().find("th")).toHaveLength(
      mockColumnsLength
    );
  });

  it("Checking if right no. of rows are being populated", () => {
    expect(wrapper.find(`#data_row`)).toHaveLength(mockPropList.length);
  });

  it("Checking if columns passed are greater than 0", () => {
    expect(wrapper.find("thead").children().find("th").length > 0).toEqual(
      true
    );
  });

  it("Checking if no data items passed, are greater than 0", () => {
    expect(wrapper.find("tbody").children().find("td").length > 0).toEqual(
      true
    );
  });

  it("Checking if UI is atleast highlighting one row with world champion", () => {
    expect(
      wrapper.find("tbody").children().find("td").exists(".trophy")
    ).toEqual(true);
  });
});
