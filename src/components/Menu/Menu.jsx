import styles from './Menu.module.css';

export default function Menu (props) {
    return (
            <article className={styles.menu_body}>
            <h2 className={styles.h2_menu}>Our menu 😋</h2>
                {props.items.map(item => (
                    <p key={item.id} className={styles.list_text}>{item.tittel}</p>
                ))}
            </article>
    )
}