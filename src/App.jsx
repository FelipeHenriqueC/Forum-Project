import { Header } from './components/Header.jsx'; // Importanto o Componente Header 
import { Post } from './components/Post.jsx'//  Importanto o Post.jsx
import { Sidebar } from './components/Sidebar.jsx';


import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://media.licdn.com/dms/image/v2/C4D03AQGlBpvLiDd9_A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1582065538002?e=2147483647&v=beta&t=g7I0rVIqZPTSyD7X7I_D-j7QIkcuSpz77zAIql_6l0k',
      name: 'Arthur "Blue Jacket" Macena',
      role: '(Torcedor)'
    },
    content: [
      { type: 'paragraph', content: 'Que time incrível!! Dar suporte para um dos melhores duelistas que é o Kauski se torna moleza com tanta skill que ele tem xD.' },
      { type: 'paragraph', content: 'Nada entra no bomb A da Acent quando estou com o Kauski.' },
      { type: 'paragraph', content: 'Tenho sorte de jogar com ele no meu time.' },
      { type: 'link', content: '#GoFinalAce' },
    ],

    publishedAt: new Date('2024-09-26  22:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/121573495?v=4',
      name: 'Felipe Matias',
      role: '(Cara das BANGS)'
    },
    content: [
      { type: 'paragraph', content: 'De fato o time apresentou resultados incríveis porem o destaque é realmente dele.' },
      { type: 'paragraph', content: 'O Kauski "Felipe" realmente é diferenciado, nem se eu tivesse 5 bracetas das minhas eu conseguiria fazer igual :O' },
      { type: 'paragraph', content: 'Ele entra no bomb mesmo sem minhas bangs, as vezes até o deixo cego rsrs...' },
      { type: 'link', content: '#GoFinalAce' },
    ],

    publishedAt: new Date('2024-08-26  22:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}

              />
            )

          })}

        </main>

      </div>


    </div>
  );
}
