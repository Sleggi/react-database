import React, { useState, useEffect } from 'react';
import axios from 'axios'
import UserData from './components/UserData'
import OnLoadingUserData from './components/OnLoadingUserData'

function App() {

  const DataLoading = OnLoadingUserData(UserData);

  const [appState, setAppState] = useState(
    {
      loading: false,
      posts: null,
    }
  )



  useEffect(() => {
    setAppState({ loading: true })
    axios.get('https://jsonplaceholder.typicode.com/comments').then((resp) => {
      const posts = resp.data;
      setAppState({
        loading: false,
        posts: posts
      })
      console.log(posts)
    })
  }, [setAppState]);





  return (
    <div className="app">
      <DataLoading isLoading={appState.loading} posts={appState.posts} />
    </div>
  );
}

export default App;
