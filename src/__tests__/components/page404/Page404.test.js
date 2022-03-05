import React from "react";
import {shallow} from "enzyme";
import Page404 from "../../../components/page404/Page404";

let wrapper;

beforeEach(()=>{
  wrapper = shallow(<Page404/>);
  
})

describe("Testing champions list component", () => {
  it("Checking the snapshot of the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("Checking if button is displayed properly", () => {
    expect(wrapper.find('Link').text()).toContain("Go Home");
  });

  it("Checking if not found image is displayed properly", () => {
    expect(wrapper.find('img').prop('src') ).toBe('not_found.svg');
  });

  it("Checking if the right text message is displayed", () => {
    expect(wrapper.find('p').text()).toBe('This is not the page that you are looking for!');
  });


});
