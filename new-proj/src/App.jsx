import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './Components/Posts/Post';
import CircleBgChange from './Components/CircleBgChange/CircleBgChange';
import Pagination from './Components/Pagination/Pagination'


function App() {
 const [data, setData] = useState();
 const [loading, setLoading] = useState(false);
 const [postPerPage, setPostPerPage] = useState(10);
 const [currentPage, setCurrentPage] = useState(1);

   const getData = async () => {
    setLoading(true)
    await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => {
      return res.json();
    }).then((json) => {
      setData(json);
      loading(false)
    })
    .catch((err) => {
      return `error from Api: ${err}`
    })
   }
 useEffect(() => {
  getData();
 }, [])
 
 const handlePagination = (pageNumber) => {
  setCurrentPage(pageNumber)
 }
 const indexOfLastPost = currentPage * postPerPage;
 const indexOfFirsPost = indexOfLastPost - postPerPage;
 const currentPageData = data?.slice(indexOfFirsPost, indexOfLastPost);
  return (
    <>
      
      <section>
        <h3>Paggination section</h3>
        <Post posts={currentPageData} loading={loading} postPerPage={postPerPage} handlePagination={handlePagination} />

        { data?.length &&
                 <Pagination postPerPage={postPerPage} length={data?.length} handlePagination={handlePagination} loading={loading} />
            }
       
      </section>
      
      <section className='circle-section'>
          <h3>Circle With Background Color change effect</h3>
          <br /><br />
          <div>
            <CircleBgChange />
          </div>
      </section>
    </>
  )
}

export default App
