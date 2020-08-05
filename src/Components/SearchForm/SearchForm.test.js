import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { SearchForm } from './SearchForm';

function cards() {
    return { cards: {
        cards: [],
        filter: '',
        sortOption: ''}
    }
}

const store = createStore(cards);

test('renders Search component', () => {
    const component = render(<Provider store={store}>
        <SearchForm ></SearchForm>
    </Provider>)
    expect(component).toMatchSnapshot();
});
