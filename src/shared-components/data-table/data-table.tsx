import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

interface DataTableProps {
    value: any[],
    paginator: boolean,
    rows: number,
    selectionMode: string,
    onRowClick: any,//Function
    emptyMessage: string,
    columns: { field: string, header: string }[]
}

const DataTableComponent: React.FC<DataTableProps> = (props) => {
    return (
        <DataTable value={props.value}
            paginator={props.paginator} rows={props.rows}
            selectionMode={props.selectionMode}
            onRowClick={props.onRowClick}
            emptyMessage={props.emptyMessage}>

            {
                props.columns.map(column =>
                    <Column field={column.field} header={column.header} sortable={true} />
                )
            }
        </DataTable>
    )
}

export default DataTableComponent;