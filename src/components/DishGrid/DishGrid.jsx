import Dish from "../Dish/Dish"
import styles from "./DishGrid.module.css"

// const DishGrid = ({ dishes }) => {
//     return (
//         <div className={styles.grid_container}>
//             {dishes.map((dish) => (
//                 <Dish
//                     key={dish.id}
//                     tittel={dish.tittel}
//                     pris={dish.pris}
//                     ingredienser={dish.ingredienser}
//                     kategori={dish.kategori}
//                 />
//             ))}
//         </div>
//     )
// }

const DishGrid = ({ dishes }) => {
    // Группируем блюда по категориям
    const dishesByCategory = dishes.reduce((acc, dish) => {
        if (!acc[dish.kategori]) {
            acc[dish.kategori] = [];
        }
        acc[dish.kategori].push(dish);
        return acc;
    }, {});

    return (
        <div className={styles.grid_container}>
            {Object.entries(dishesByCategory).map(([category, dishesInCategory]) => (
                <div key={category} className={styles.category_section}>
                    <h2 className={styles.category_title}>{category}</h2>
                    <div className={styles.category_grid}>
                        {dishesInCategory.map((dish) => (
                            <Dish
                                key={dish.id}
                                tittel={dish.tittel}
                                pris={dish.pris}
                                ingredienser={dish.ingredienser}
                                kategori={dish.kategori}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DishGrid;