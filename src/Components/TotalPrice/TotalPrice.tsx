import {useAppSelector} from "../../app/hooks";
import {UserSelectDishes} from "../../store/UserDishSlice";
import {AdminSelectDishes} from "../../store/AdminDishSlice";

const TotalPrice = () => {

    const order = useAppSelector(UserSelectDishes).order;

    const dishes = useAppSelector(AdminSelectDishes).dishes;

    let Total = 0;

    if(order){
        Object.keys(order).map(key => {
            const index = dishes.findIndex((value) => key === value.id);
            return Total += order[key] * parseInt(dishes[index].price);
        })
        return Total;
    }
    }



export default TotalPrice;