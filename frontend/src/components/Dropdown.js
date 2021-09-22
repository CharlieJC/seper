import React from 'react';
import SEPractices from './SEPractices';


export const Dropdown = ({ column })=> {
 const { filterValue, setFilter } = column

 const optionItems = SEPractices.map((SEPractice) =>
 <option key={SEPractice.practice}>{SEPractice.practice}</option>
);

console.log(optionItems);

 return (
    <select
        value={optionItems}
        onChange={e => {setFilter(e.target.value)}}
    >
    <option value="">All</option>
       {optionItems}
    </select>
    )
    // <div>
    //     <select>
    //         {optionItems}
    //     <input value={filterValue || ''} onChange={(e) => setFilter(e.target.value)}/>
    //     </select>
    // </div>
}