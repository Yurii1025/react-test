import styles from './Dish.module.css';

const Dish = ({ tittel, pris, ingredienser, kategori }) => {
    return (
        <div className={styles.dish_card}>
            <div className={styles.div_div_div_div_DDD}>
                <h3 className={styles.dish_title}>{tittel}</h3>
                <p className={styles.dish_price}><span>Pris:</span> {pris}</p>
                <p className={styles.dish_ingr}><span>Ingredienser:</span> {ingredienser}</p>
            </div>
            <p className={styles.dish_cat}>{kategori}</p>
        </div>
    )
}

export default Dish;


// export default function Dish ({ dish }) {
//     return (
//             <article className={styles.dish_card}>
//                 <h3 className={styles.dish_title}>{dish.tittel}</h3>
//                 <p className={styles.dish_price}>{dish.pris}</p>
//                 <p className={styles.dish_ingri}>Ingredienser: {dish.ingredienser}</p>
//                 <p className={styles.dish_kategori}>Kategori: {dish.kategori}</p>
//             </article>
//     )
// }