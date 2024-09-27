import styles from './Comment.module.css';

import caio from '../imagens/caio.png';
import { ThumbsUp, Trash, TrashSimple } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Comment() {
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

                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Tenho que concordar, esse cara aumenta muito o nível!!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Curtir <span>5</span>
                    </button>
                </footer>

            </div>
        </div>

    )
}