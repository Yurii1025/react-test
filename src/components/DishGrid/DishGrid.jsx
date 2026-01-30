import Dish from "../Dish/Dish"
import styles from "./DishGrid.module.css"

function DishGrid (props) {
    //We received a complete array of objects.
    let dishes = props.dishes;
    //Received all categories (with repetitions)
    let categories = [];
    dishes.map((dish) => {
        categories.push(dish.kategori);
    })
    //Received all categories (without duplicates)
    // const newCategories = [...new Set(categories)];
    const newCategories = categories.filter((item, index) => {
        return categories.indexOf(item) === index;
    })
    return (
        <div className={styles.grid_container}>
            {newCategories.map(function (category) {
                //We get 3 arrays of objects (distributed by categories)
                let dishesInCategory = dishes.filter(function(dish) {
                    return dish.kategori === category;
                });

                return (
                     <div key={category} className={styles.category_section}>
                        <h2 className={styles.category_title}>{category}</h2>

                        <div className={styles.category_grid}>
                            {dishesInCategory.map( function (dish) {
                                return (
                                    <Dish
                                        key={dish.id}
                                        tittel={dish.tittel}
                                        pris={dish.pris}
                                        ingredienser={dish.ingredienser}
                                    />
                                );
                            })}

                        </div>
                     </div>
                );
            })}
        </div>
    );
    

}

export default DishGrid;