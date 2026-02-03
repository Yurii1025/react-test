import styles from './Dish.module.css';

const Dish = ({ tittel, pris, ingredienser, kategori }) => {
    return (
        <div className={styles.dish_card}>
            <div className={styles.div_div_div_div_DDD}>
                <h3 className={styles.dish_title}>{tittel}</h3>
                <p className={styles.dish_ingr}>{ingredienser}</p>
                <p className={styles.dish_price}><span>Pris:</span> {pris}</p>
            </div>
            <p className={styles.dish_cat}>{kategori}</p>
        </div>
    )
}

export default Dish;