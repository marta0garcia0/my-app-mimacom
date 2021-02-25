import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Pagination from './Pagination';
import { mount, configure } from 'enzyme';
import { mockApiResponse } from '../../__mocks__/mockUsers';

configure({adapter: new Adapter()});

/** @test {Pagination Component} */
describe('Pagination Component', () => {

  it('should render without crashing', () => {
    const usersApiData = mockApiResponse;
    const wrapper = mount(<Pagination onAddUsers={() => {}}
      usersApiData={usersApiData} isDisabled={false} />);
      expect(wrapper.find('button')).toHaveLength(2);
      expect(wrapper.text()).toContain('Page1of 2')
  });
});