
import RestaurantCard from "./RestaurantCard";
 
import resList from "../utils/mockData";

 import { useState } from "react";

 

//  State Variables - super powerful variables



//  Normal JS Variable

// let listOfRestaurantsJs =[
//     {
    
//     data: {
      
//       id: "334475",
//       name: "KFC",
//       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
//        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
//        costForTwo: 40000,
//        avgRating: "3.8",
//        deliveryTime: 36,
//     }
// },
// {
    
//     data: {
      
//       id: "334476",
//       name: "Dominos",
//       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
//        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
//        costForTwo: 40000,
//        avgRating: "4.5",
//        deliveryTime: 36,
//     }
// },
// {
    
//     data: {
      
//       id: "334477",
//       name: "MCD",
//       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
//        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
//        costForTwo: 40000,
//        avgRating: "4.1",
//        deliveryTime: 36,
//     }
// },
// ]

const Body =() =>{

     const [listOfRestaurants, setListOfRestaurant]= useState(resList);

   
    
     
    return(
        <div className='body'>
            <div className='filter'>
                <button className="filter-btn" 
                onClick={() => {

                     
                //     filter logic here
                 const filteredList = listOfRestaurants.filter(
                    (res)=>res.data.avgRating>4
                    );
                     setListOfRestaurant(filteredList)

                    // console.log(listOfRestaurants);

                } }
                 
                >
                    Top Rated Restaurants</button>
            </div>
            <div className='res-conatiner'>
            
            {
                listOfRestaurants.map((restaurant,index)=>(
                <RestaurantCard key={restaurant.data.id} resData={restaurant}/>)
           ) };
           
 
                 
                
            </div>

        </div>
    )

}



 
export default Body;