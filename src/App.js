import React, { useState, useEffect } from 'react';
import axios from 'axios'
import UserData from './components/UserData'
import OnLoadingUserData from './components/OnLoadingUserData'

function App() {

  // Компонент проверки loading 
  const DataLoading = OnLoadingUserData(UserData);
  // Состояние приложения
  const [appState, setAppState] = useState(
    {
      loading: false,
      posts: null,
    }
  )
  // Состояние серверного поиска
  const [search, setSearch] = useState('');
  // Состояние сортировки
  const [sorted, setSorted] = useState(false)
  // стейт инпута поиска
  const [searchInput, setSearchInput] = React.useState('')
  // Отправление поискового запроса
  const handleSearch = () => {
    setSearch(searchInput);

  }


  useEffect(() => {
    setAppState({ loading: true })
    axios.get(`https://jsonplaceholder.typicode.com/comments?q=${search}&${sorted ? `_sort=email&order=asc` : ''}`).then((resp) => {
      const posts = resp.data;
      setAppState({
        loading: false,
        posts: posts
      })
    })
  }, [search, sorted]);





  return (
    <div className="app">
      <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className='search-input' />
      <button onClick={handleSearch}>Поиск</button>
      <DataLoading isLoading={appState.loading} posts={appState.posts} sorted={sorted} setSorted={setSorted} />
    </div>
  );
}

export default App;
