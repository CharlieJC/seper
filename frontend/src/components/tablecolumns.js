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
      Filter: false,
      disableSortBy: true
    },,{
      Header: 'Claimed Benefit',
      accessor: 'claim',
      Filter: Dropdown,
      disableSortBy: true
    },{
      Header: 'Level of Evidence',
      accessor: 'evidence',
      Filter: Dropdown,
      disableSortBy: true
    },{
      Header: 'Practice',
      accessor: 'practice',
      Filter: Dropdown,
      disableSortBy: true
    }
  ]

export default tablecolumns;