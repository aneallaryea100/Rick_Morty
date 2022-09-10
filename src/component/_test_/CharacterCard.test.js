import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import CharacterCard from '../CharacterCard';
import store from '../../redux/configureStore';

describe('CharacterCard test', () => {
  const setCharId = store.state;
  const handleDetails = (event) => {
    const btn = event.target.id;
    setCharId(Number(btn));
  };
  test('snapshot', () => {
    const tree = TestRenderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <CharacterCard handleDetails={handleDetails} />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
