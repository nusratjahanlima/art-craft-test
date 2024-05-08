import { useState } from 'react';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import './Home.css';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

const Home = () => {

    const [category,setCategory] = useState("All");

    return (
        <div>
            <ExploreMenu category={category} setCategory={setCategory}/>
            <FoodDisplay category={category}/>
        </div>
    );
};

export default Home;