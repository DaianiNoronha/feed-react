import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import styles from './App.module.css';
import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/DaianiNoronha.png',
      name: 'Daiani Noronha',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz na trilha de React da Rocketseat. O nome do projeto é Feed Ignite 🚀'},
      { type: 'link', content: 'daiani.dev/feedignite'},            
    ],
    publishedAt: new Date('2024-05-03 20:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/ViniciusLima7.png',
      name: 'Vinicius Lima',
      role: 'Full-Stack Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz na trilha de React da Rocketseat. O nome do projeto é Feed Ignite 🚀'},
      { type: 'link', content: 'vinicius.dev/feedignite'},            
    ],
    publishedAt: new Date('2024-05-15 20:00:00'),
  },
];

//Iteração (criar uma estrutura de repetição)

export function App() {
  return (
    <div> 
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
            <Post
            key={post.id}
            post={post}
            
            />)
          })}

        </main>
      </div>
    </div>    
  )
}


