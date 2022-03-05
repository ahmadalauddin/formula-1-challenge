import React from "react";
import {shallow} from "enzyme";
import ChampionsList from "../../../components/championsList/championsList";

let wrapper;

beforeEach(()=>{
  wrapper = shallow(<ChampionsList/>);
  
})

describe("Testing champions list component", () => {
  it("Checking the snapshot of the component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
