import  { shallow } from 'enzyme';

import Header from "../../../components/appHeader/appHeader";

let wrapper;

beforeEach(()=>{
  wrapper = shallow(<Header/>);
})


it("Checking whether the header displays the title", ()=>{
    expect(wrapper.find("div").text()).toContain("F1 Champions");
});

