import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import CharacterDetails from '../CharacterDetails';
import store from '../../redux/configureStore';

describe('CharacterDetails test', () => {
  test('snapshot', () => {
    const tree = TestRenderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <CharacterDetails />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
