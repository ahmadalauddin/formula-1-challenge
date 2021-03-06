import { shallow } from "enzyme";
import React from "react";

import { columns } from "../../../components/championsList/columns";
import DataTable from "../../../components/championsList/table";

//mock to handle useNavigate used in the component
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

const mockColumnsLength = columns.length;
const mockProps = [
  {
    id: "alonso",
    name: "Fernando Alonso",
    nationality: "Spanish",
    points: "133",
    round: "19",
    season: "2005",
    wins: "7",
  },
  {
    id: "alonso",
    name: "Fernando Alonso",
    nationality: "Spanish",
    points: "183",
    round: "16",
    season: "2006",
    wins: "9",
  },
];

let wrapper;

beforeEach(() => {
  wrapper = shallow(<DataTable listData={mockProps} />);
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
    expect(wrapper.find(`#data_row`)).toHaveLength(mockProps.length);
  });

  it("Checking if columns passed are greater than 0", () => {
    expect(wrapper.find("thead").children().find("th").length > 0).toEqual(
      true
    );
  });

  it("Checking if no data items passed are greater than 0", () => {
    expect(wrapper.find("tbody").children().find("td").length > 0).toEqual(
      true
    );
  });
});
