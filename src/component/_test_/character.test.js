import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import Character from '../character';
import store from '../../redux/configureStore';

describe('Character test', () => {
  test('snapshot', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <Character />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
