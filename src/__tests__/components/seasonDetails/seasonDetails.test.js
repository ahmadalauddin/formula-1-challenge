import React from "react";
import {shallow} from "enzyme";
import SeasonDetails from "../../../components/seasonDetails/seasonDetails";

//mock to handle useNavigate used in the component
const mockedUsedLocation = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => mockedUsedLocation,
}));

let wrapper;
const seasonYear = ""

beforeEach(()=>{
  wrapper = shallow(<SeasonDetails year={seasonYear}/>);
})

describe("Testing season details", () => {
  it("Checking the snapshot of the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("Checking if no records message shown", () => {
    expect(wrapper.find("DataNotFound")).toBeTruthy();
  });

  it("Checking if thr right season is passed, show Loader", () => {
    expect(wrapper.find("Loader")).toBeTruthy()
  });


});
