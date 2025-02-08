import { useEffect, useState } from 'react'
import './App.css';
import Post from './Posts/Post'

function App() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch data from api
    const fetData = async () => {
      setLoading(true);
      try {
        await fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
          return res.json();
        }).then((jsonData) => {
          setData(jsonData);
          setLoading(false);
        }).catch ((error) => {
         console.log(error);
      });
    } catch {
      console.log('errors');
      
    }
  }
    fetData();
  }, [])
  console.log(data)
  return (
    <>
     <section className='pagination'>
        <h2>Pagination Section</h2>
        {
          <Post posts={data} loading={loading} />
        }
     </section>
    </>
  )
}

export default App
