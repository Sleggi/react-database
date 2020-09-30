import React, { useEffect, useState } from 'react';
import axios from 'axios'
import UserData from './components/UserData'
import OnLoadingUserData from './components/OnLoadingUserData'

function App() {

  const DataLoading = OnLoadingUserData(UserData);

  const [appState, setAppState] = useState(
    {
      loading: false,
      persons: null,
    }
  )

  useEffect(() => {
    setAppState({ loading: true })
    axios.get('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
      .then(resp => {
        const persons = resp.data
        setAppState({ loading: false, persons: persons })
      })

  }, [setAppState])



  return (
    <div className="app">
      <DataLoading isLoading={appState.loading} persons={appState.persons} />
    </div>
  );
}

export default App;
