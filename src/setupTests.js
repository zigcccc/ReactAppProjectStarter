import 'jest-enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  const useHistoryMock = jest.fn();

  return {
    __esModule: true,
    ...originalModule,
    useLocation: () => ({
      pathname: '/some-route',
      search: '',
      hash: '',
      state: {},
      key: '5nvxpbdafa',
    }),
    useParams: jest.fn(),
    useHistory: useHistoryMock.mockReturnValue({
      push: jest.fn(),
      replace: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      go: jest.fn(),
      replaceState: jest.fn(),
    }),
  };
});

/**
 * Mock functions for localStorage API
 * @constant {Object}
 */
export const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

global.localStorage = localStorageMock;
global.scrollTo = jest.fn();
