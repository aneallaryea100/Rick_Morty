import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import CharacterCard from '../CharacterCard';
import store from '../../redux/configureStore';

describe('CharacterCard test', () => {
  test('snapshot', () => {
    const tree = TestRenderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <CharacterCard />
        </Provider>
        ,
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
