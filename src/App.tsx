import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/luizcarlosgoulart.png',
      name: 'Luiz Carlos Goulart',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Lorem ipsum dolor', },
      {type: 'paragraph', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto deleniti similique repudiandae architecto, nulla aperiam minima ipsam voluptas qui, beatae quibusdam quam laudantium ipsa ullam. Odit velit maiores illo sapiente!'},
      {type: 'link', content: 'https://www.github.com/luizcarlosgoulart/' },
    ],
    publishedAt: new Date('2022-05-03 20:05:03')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/caiotheodoro.png',
      name: 'Caio Theodoro',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Lorem ipsum dolor', },
      {type: 'paragraph', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto deleniti similique repudiandae architecto, nulla aperiam minima ipsam voluptas qui, beatae quibusdam quam laudantium ipsa ullam. Odit velit maiores illo sapiente!'},
      {type: 'link', content: 'https://www.github.com/caiotheodoro/' },
    ],
    publishedAt: new Date('2022-03-13 15:03:00')
  },
]

export function App() {
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
          <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              <Post
              key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />)
          })}
        </main>
      </div>
    </>
  )
}