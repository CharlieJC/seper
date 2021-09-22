import { Dropdown } from "./Dropdown"

const tablecolumns = [
    {
      Header: 'Title',
      accessor: 'title',
      Filter: false
    }, {
      Header: 'Authors',
      accessor: 'authors',
      Filter: false
    }, {
      Header: 'Source',
      accessor: 'source',
      Filter: false
    }, {
      Header: 'Pub. Year',
      accessor: 'pubyear',
      Filter: false
    },{
      Header: 'DOI',
      accessor: 'doi',
      Filter: false
    },,{
      Header: 'Claimed Benefit',
      accessor: 'claim',
      Filter: false
    },{
      Header: 'Level of Evidence',
      accessor: 'evidence',
      Filter: false
    },{
      Header: 'Practice',
      accessor: 'practice',
      Filter: Dropdown
    }
  ]

export default tablecolumns;