
import './App.css';
// import './mycss.css'
// import * as classstyle from './mycs.module.css'
import React, { useEffect, useState } from 'react';
import { Card } from 'antd'

function App() {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])



  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => {
        if (res && Array.isArray(res) && res.length > 0) {
          setUsers(res)
        } //typeof res == 'array'
      })
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(res => {
        if (res && Array.isArray(res) && res.length > 0) {
          setPosts(res)
        } //typeof res == 'array'
      })

  }


  useEffect(()=>{
    getData()
  }, [])

  


  return(
    <>
      <h2 style ={{marginLeft: 50}}>Пользователи:</h2>
      <div style={{marginLeft: 50, display: 'grid'}}>
        {users.length > 0 &&
          users.map(user => {
            let x = 1;
            return <Card title={user.name} key={Math.random()} style={{width: 500, backgroundColor: '#fff7e6',marginBottom: 15}}>
            <p style={{margin:0}}>Почта: {user.email}</p>
            <p style={{margin:0}}>Телефон: {user.phone}</p>
            <h2 style={{marginBottom:10, marginTop:0}}>Посты:</h2>
            {posts.map(post => {
              if(post.userId === user.id) 
              {return <Card type="inner" style={{marginBottom: 15}}><h3 style={{marginBottom: 10, marginTop:0}}>#{x++} {post.title}</h3> <p>{post.body}</p> </Card>}
              else{
                return ''
              }})}
            </Card>
          })
        }
      </div>
    </>
  )
}

export default App;