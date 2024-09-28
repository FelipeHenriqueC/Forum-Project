import styles from './Comment.module.css';
import caio from '../imagens/caio.png';

import { ThumbsUp, Trash, TrashSimple } from 'phosphor-react';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({ content, onDeleteComment }) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
     }

     function handleLikeComment(){
        setLikeCount(likeCount + 1);
     }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src={caio} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Caio 'Kekeu' Fernando</strong>
                            <time title='Segundo Maior Fã'>Publicado há 1 hora</time>
                        </div>

                        <button
                            onClick={handleDeleteComment}
                            title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Curtir <span>{likeCount}</span>
                    </button>
                </footer>

            </div>
        </div>

    )
}