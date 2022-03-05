import  { shallow } from 'enzyme';

import Home from '../../pages/home';


let wrapper;

beforeEach(()=>{
  wrapper = shallow(<Home/>);
})

it("Checking snapshots", ()=>{
  expect(wrapper).toMatchSnapshot();
});

it("Checking if padding is applied on top", ()=>{
  expect(wrapper.exists(".pt-88")).toEqual(true);
});
