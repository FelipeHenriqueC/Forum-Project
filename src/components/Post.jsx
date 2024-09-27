import { Avatar } from './Avatar';
import { Comment } from './Comment';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR'

import styles from './Post.module.css';
import { useState } from 'react';


export function Post({ author, publishedAt, content }) {

    const [comments, setComments] = useState([
        'Concordo com tudo dito.'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,

    });

    function handleCreateNewComment() {
        event.preventDefault() // evita o evento padrão da linguagem, ou seja HTML

        setComments([...comments, newCommentText]);   //spread, copia tudo e adiciona o newcommentext
        setNewCommentText('');    // para apagar o texto e limpar a textarea
    }

    function handleNewComenntChange (){

        setNewCommentText ( event.target.value);
    }

    return (
        <article className={styles.post}>
            <header className={styles.cabeca}>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorinfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title="{publishedDateFormatted}" dateTime={publishedAt.toISOString("27-09-2024")}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p>{line.content}</p>;

                    } else if (line.type === 'link') {
                        return <p><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.comentario}>
                <strong>Fale algo</strong>

                <textarea
                    name='comment'
                    placeholder="Comente Aqui..."
                    value={newCommentText}
                    onChange={handleNewComenntChange}
                />

                <footer>
                    <button type='submit'>Enviar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment content={comment} />
                })}
            </div>
        </article >

    )

}