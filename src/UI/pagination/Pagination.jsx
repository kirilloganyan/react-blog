import React from 'react';
import {getPagesArray} from "../../utils/pagesFind";
import MyButton from "../button/MyButton";

const Pagination = ({totalPages,page,changePage}) => {
    const pagesArray = getPagesArray(totalPages)
    return (
        <div style={{margin:'15px' ,display:'flex',justifyContent:"center",alignItems:'center'}}>
            {pagesArray.map(p =>
                <MyButton
                    onClick={()=>changePage(p)}
                    key={p}
                >{p }</MyButton>
            )}
        </div>
    );
};

export default Pagination;