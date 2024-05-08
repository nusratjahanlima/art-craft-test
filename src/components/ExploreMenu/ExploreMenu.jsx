/* eslint-disable react/prop-types */
import './ExploreMenu.css'
import { category_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
    return (
        <div className='explore-menu' id='explore-menu'>
           <h1>Explore our category</h1>
           <p className="explore-menu-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit consequatur doloribus impedit, dolores repellat magni ullam iure debitis? Aliquam, illum.</p> 
            <div className="explore-menu-list">
                {category_list.map((item,index)=>{
                    return(
                        <div onClick={()=>setCategory(prev=>prev===item.category_name?"All":item.category_name)} key={index} className='explore-menu-list-item'>
                            <img className={category===item.category_name?"active":""} src={item.category_image} alt="" />
                            <p>{item.category_name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default ExploreMenu;