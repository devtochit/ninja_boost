import styles from "@/styles";
import { MenuItemProps } from "@/types/nav";
import React from 'react'

export const MenuItem: React.FC<MenuItemProps> = ({ icon, title, description }) => {
    return (
        <div className="flex items-center gap-10 ">
        <figure className="flex  justify-center">{icon}</figure>
        <div className="flex flex-col justify-center mt-4">
          <h6 className="">{title}</h6>
          <p className="">{description}</p>
        </div>
      </div>
      
      
    );
  };
  
 
  