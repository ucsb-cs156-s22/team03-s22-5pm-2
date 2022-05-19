import OurTable, { ButtonColumn} from "main/components/OurTable";
import { useBackendMutation } from "main/utils/useBackend";
import {  onDeleteSuccess } from "main/utils/UCSBDateUtils"
// import { useNavigate } from "react-router-dom";
import { hasRole } from "main/utils/currentUser";


export function cellToAxiosParamsDelete(cell) {
    return {
        url: "/api/helprequest",
        method: "DELETE",
        params: {
            id: cell.row.values.id
        }
    }
}

export default function HelpRequestTable({ helprequests, currentUser }) {

    // const navigate = useNavigate();

    // const editCallback = (cell) => {
    //     navigate(`/ucsbdates/edit/${cell.row.values.id}`)
    // }

    // Stryker disable all : hard to test for query caching
    
    const deleteMutation = useBackendMutation(
        cellToAxiosParamsDelete,
        { onSuccess: onDeleteSuccess },
        ["/api/helprequest/all"]
    );
    
    // Stryker enable all 

    // Stryker disable next-line all : TODO try to make a good test for this
    const deleteCallback = async (cell) => { deleteMutation.mutate(cell); }

    const columns = [
        {
            Header: 'explanation',
            accessor: 'explanation'
        },
        {
            Header: 'id',
            accessor: 'id'
        },
        {
            Header: 'requestTime',
            accessor: 'requestTime'
        },
        {
            Header: 'solved',
            id: 'solved',
            accessor: (row, _rowIndex) => String(row.solved) // hack needed for boolean values to show up
        },
        {
            Header: 'tableOrBreakoutRoom',
            accessor: 'tableOrBreakoutRoom'
        },
        {
            Header: 'teamId',
            accessor: 'teamId'
        },
    ];

    const testid = "HelpRequestTable";

    const columnsIfAdmin = [
        ...columns,
        ButtonColumn("Delete", "danger", deleteCallback, testid)
    ];

    const columnsToDisplay = hasRole(currentUser, "ROLE_ADMIN") ? columnsIfAdmin : columns;

    return <OurTable
        data={helprequests}
        columns={columnsToDisplay}
        testid={testid}
    />;
};