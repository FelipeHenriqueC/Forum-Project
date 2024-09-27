import { PencilLine} from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

import eu from '../imagens/eu.jpeg';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
             className={styles.cobertura}
             src="https://dotesports.com/wp-content/uploads/2023/05/Forsaken_operator.jpg?w=400"/>
            
            <div className={styles.perfil}>
                <Avatar src={eu} />

                <strong>Felipe "Kauski" Henrique</strong>
                <span>Olhos de Águia</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={18}/>
                    Saiba Mais do Player
                    </a>
            </footer>
        </aside>
    );

}