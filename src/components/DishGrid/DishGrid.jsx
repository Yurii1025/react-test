import Dish from "../Dish/Dish"
import styles from "./DishGrid.module.css"
import deco from "../../assets/decoration/deco2.png"

function DishGrid (props) {
    //We received a complete array of objects.
    let dishes = props.dishes;
    //Received all categories (with repetitions)
    let categories = [];
    dishes.map((dish) => {
        categories.push(dish.kategori);
    })
    //Received all categories (without duplicates)
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
                        <h2 className={styles.category_title}>{category}
                            <img className={styles.deco} src={deco} alt="decoration"/>
                        </h2>

                        <div className={styles.category_grid}>
                            {dishesInCategory.map( function (dish) {
                                return (
                                    <Dish
                                        key={dish.id}
                                        tittel={dish.tittel}
                                        ingredienser={dish.ingredienser}
                                        pris={dish.pris}
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