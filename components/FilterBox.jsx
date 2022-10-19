import React from 'react'
import {SelectOption} from '.'

const FilterBox = ({option}) => {
    const color = ['red', 'black', 'yellow', 'blue', 'white','gray'];
    const size = ['xs', 'sm', 'md', 'lg', 'lx'];
    const sort = ['newest', 'price low to high', 'price high to low'];

  return (
    <div className='filterBox'>
        <div className="wrapper">
            <div className="left">
                {option !== "show" && <h4>Product Filters: </h4>}
                <SelectOption filter={color} title="color" />
                <SelectOption filter={size} title="size" />
            </div>
            {option !== "show" && <div className="right">
                <h4>Product Sort: </h4>
                <SelectOption filter={sort} title="sort" />
            </div>}
        </div>
    </div>
  )
}

export default FilterBox