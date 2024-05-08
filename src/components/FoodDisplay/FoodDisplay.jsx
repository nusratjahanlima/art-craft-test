import { useContext } from 'react';
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({category}) => {

    const {item_list} = useContext(StoreContext)

    return (
        <div className='food-display' id='food-display'>
            <h1>All products</h1>
            <div className="food-display-list">
                {item_list.map((item,index)=>{
                    if(category==="All" || category===item.category){
                        return <FoodItem key={index} id={item.name} name={item.name} description={item.description} price={item.price} image={item.image}/>
                    }
                })}
            </div>
        </div>
    );
};

export default FoodDisplay;