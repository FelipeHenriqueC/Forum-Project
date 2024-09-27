import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

import arthur from '../imagens/arthur.png';


export function Post() {
    return (
        <article className={styles.post}>
            <header className={styles.cabeca}>
                <div className={styles.author}>
                    <Avatar src={arthur} alt='manotuts' />
                    <div className={styles.authorinfo}>
                        <strong>Arthur 'BlueJacket' Macena</strong>
                        <span>(Suporte)</span>
                    </div>
                </div>

                <time className={styles.time} title='LipegreenFan' dateTime='26-09-2024'>Publicado há 2 horas</time>
            </header>

            <div className={styles.content}>
                <p>Que time incrível!! Dar suporte para um dos melhores duelistas que é o Kauski se torna moleza com tanta skill que ele tem xD.</p>
                <p>Nada entra no bomb A da Acent quando estou com o Kauski.</p>
                <p>Tenho sorte de jogar com ele no meu time.</p>
                <p><a href='#'>#GoFinalAce</a></p>
            </div>

            <form className={styles.comentario}>
                <strong>Fale algo</strong>

                <textarea
                    placeholder="Comente Aqui..."
                />

                <footer>
                    <button type='submit'>Enviar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
            </div>
        </article >

    )

}