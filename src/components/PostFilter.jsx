import React from 'react';
import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/select/MySelect";

const PostFilter = ({filter,setFiler}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e=>setFiler({...filter,query:e.target.value})}
                placeholder='поиск'
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort=>setFiler({...filter,sort:selectedSort})}
                defaultValue='Сортировка'
                options={[
                    {value:'title',name:'По названию'},
                    {value:'body',name:'По Описанию'}
                ]}
            />
        </div>
    );
};

export default PostFilter;