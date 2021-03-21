import App from './App';

import { 
  render, 
  fireEvent, 
  waitFor,
  screen 
} from 'utils/tests/utils'

// Router testing
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'


// initial render test
test('Check - Frontpage render', () => {

  const history = createMemoryHistory()
 
  render(<Router basename="/#/" history={history}><App /></Router>, {});

  const welcomeText = screen.getByText(/Welcome to my demo page./i);
  expect(welcomeText).toBeInTheDocument();
});


// check for some application data 
test('Check - Data from redux', () => {
  
  const history = createMemoryHistory()
 

  render(<Router basename="/#/" history={history}><App /></Router>, {});

  const reduxText = screen.getByText(/Welcome, Guest/i);
  expect(reduxText).toBeInTheDocument();
});


// test navigation route
test('Check - /some-bad-route', () => {
  
  const history = createMemoryHistory()
  history.push('/some-bad-route')

  render(<Router basename="/#/" history={history}><App /></Router>, {});
  
  const notfoundText = screen.getByText(/The page you requested was not found!/i);
  expect(notfoundText).toBeInTheDocument();
});


// test remote loaded data
test('Check  - Remote API DATA LOAD', async () => {
  
  const history = createMemoryHistory()
  history.push('/spacex')

  render(<Router basename="/#/" history={history}><App /></Router>, {});

  await waitFor(() => {
    expect( screen.getByText(/Satelite name, version & launch date/i)).toBeInTheDocument();
  });
});

