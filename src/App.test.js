import  { shallow } from 'enzyme';

import App from './App';

let wrapper;

beforeEach(()=>{
  wrapper = shallow(<App/>);
})

it("Check the right css styling applied", ()=>{
  expect(wrapper.exists(".App")).toEqual(true);
});
