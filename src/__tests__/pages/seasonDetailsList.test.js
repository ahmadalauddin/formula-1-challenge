import { shallow } from "enzyme";

import SeasonDetailsList from "../../pages/seasonDeatilsList";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<SeasonDetailsList />);
});

it("Checking snapshot", () => {
  expect(wrapper).toMatchSnapshot();
});

it("Checking if padding is applied on top", () => {
  expect(wrapper.exists(".pt-88")).toEqual(true);
});
