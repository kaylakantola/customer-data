import {DataGrid} from '@mui/x-data-grid';

// const rows = [
//     {id: 1, col1: 'Greta Thunberg', col2: 'gretat@future.com', col3: 'sailboat', col4: 'Fridays For Future', col5: 32},
//     {id: 2, col1: 'Greta Zhunberg', col2: 'gretaz@future.com', col3: 'yacht', col4: 'Fridays For Future', col5: 52},
//     {id: 3, col1: 'Greta Ahunberg', col2: 'gretaa@future.com', col3: 'catamaran', col4: 'Fridays For Future', col5: 10},
//     {id: 4, col1: 'Greta Bhunberg', col2: 'gretab@future.com', col3: 'sunfish', col4: 'Fridays For Future', col5: 5},
//
// ];

const columns = [
    {field: 'col1', headerName: 'Full Name', width: 150},
    {field: 'col2', headerName: 'Email', width: 150},
    {field: 'col3', headerName: 'Vehicle Type', width: 150},
    {field: 'col4', headerName: 'Vehicle Name', width: 150},
    {field: 'col5', headerName: 'Vehicle Length', width: 150},
];

export default function CustomerGrid({customers}) {
    return (
        <div style={{height: '75vh'}}>
            <div style={{display: 'flex', height: '100%'}}>
                <div style={{flexGrow: 1}}>
                    <DataGrid rows={customers} columns={columns}/>
                </div>
            </div>
        </div>
    )
}
