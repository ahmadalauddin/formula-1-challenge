import  { shallow } from 'enzyme';

import PageNotFound from '../../pages/notFound';


let wrapper;

beforeEach(()=>{
  wrapper = shallow(<PageNotFound/>);
})


it("Checking snapshots", ()=>{
  expect(wrapper).toMatchSnapshot();
});

it("Checking if padding is applied on top", ()=>{
  expect(wrapper.exists(".pt-88")).toEqual(true);
});

