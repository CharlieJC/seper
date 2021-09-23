import React from 'react';

export function Dropdown({
    column: { filterValue, setFilter, preFilteredRows, id },
  }) {
    // Calculate the options for filtering
    // using the preFilteredRows
    const options = React.useMemo(() => {
      const options = new Set()
      preFilteredRows.forEach(row => {
        options.add(row.values[id])
      })
      return [...options.values()]
    }, [id, preFilteredRows])
  
    // Render a multi-select box
    return (
      <select
        value={filterValue}
        onChange={e => {
          setFilter(e.target.value || undefined)
        }}
      >
        <option value="">All</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    )
// export const Dropdown = ({ column })=> {
//  const { setFilter, preFilteredRows } = column

//  const optionItems = SEPractices.map((SEPractice) =>
//  <option key={SEPractice.practice}>{SEPractice.practice}</option>
// );

// console.log(optionItems);

//  return (
//     <select
//         value={optionItems}
//         onChange={e => {setFilter(e.target.value)}}
//     >
//     <option value="">All</option>
//        {optionItems}
//     </select>
//     )
}