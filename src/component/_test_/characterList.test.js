import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import CharacterList from '../characterList';
import store from '../../redux/configureStore';

describe('CharacterList test', () => {
  test('snapshot', () => {
    const characters = [
      {
        id: 1,
        image: 'fge.jpeg',
        name: 'hekko',
      },
      {
        id: 2,
        image: 'fllge.jpeg',
        name: 'hekko',
      },
    ];
    const tree = TestRenderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <CharacterList characters={characters} />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
