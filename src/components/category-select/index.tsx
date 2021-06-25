import React from 'react';
import {ContainerScroll} from "./style";
import {CategoryList} from  '../../util/category';
import Category from '../category';

interface ICategorySelectedProps{
     categorySelected: string;
     setCategory: (categoryId: string ) => void;
     hasCheckBox?: boolean;
}

const CategorySelected:React.FC<ICategorySelectedProps> = ({
    categorySelected,
    setCategory,
    hasCheckBox = false,
}) => (
    <ContainerScroll
       horizontal
       showsHorizontalScrollIndicator={false}
       contentContainerStyle={{paddingRight:20}}  
    >
     {CategoryList.map(category =>{
        const {id,title,icon} = category;
        return(
            <Category 
               key={id}
               title={title}
               icon={icon}
               checked={id  ===  categorySelected}
               onPress={()=> setCategory(id) }
               hasCheckBox={hasCheckBox}
            />
        ) 

     })}   
    </ContainerScroll>

)

export default CategorySelected
