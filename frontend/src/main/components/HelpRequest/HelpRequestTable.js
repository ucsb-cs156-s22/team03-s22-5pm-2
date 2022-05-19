import OurTable from "main/components/OurTable";
//import { useBackendMutation } from "main/utils/useBackend";
//import { cellToAxiosParamsDelete, onDeleteSuccess } from "main/utils/UCSBDateUtils"
//import { useNavigate } from "react-router-dom";
//import { hasRole } from "main/utils/currentUser";

export function cellToAxiosParamsDelete(cell) {
    return {
        url: "/api/helprequest",
        method: "DELETE",
        params: {
            explanation: cell.row.values.explanation
        }
    }
}



export default function HelpRequestTable({ helprequests, _currentUser }) {

   // const navigate = useNavigate();

   
    // const editCallback = (cell) => {
    //     navigate(`/ucsbdates/edit/${cell.row.values.id}`)
    // }

    // Stryker disable all : hard to test for query caching
    // const deleteMutation = useBackendMutation(
    //     cellToAxiosParamsDelete,
    //     { onSuccess: onDeleteSuccess },
    //     ["/api/ucsbdates/all"]
    // );
    // Stryker enable all 

    // Stryker disable next-line all : TODO try to make a good test for this
    //const deleteCallback = async (cell) => { deleteMutation.mutate(cell); }


    // {
    //     "explanation": "string",
    //     "id": 0,
    //     "requestTime": "2022-05-18T23:18:21.837Z",
    //     "requesterEmail": "string",
    //     "solved": true,
    //     "tableOrBreakoutRoom": "string",
    //     "teamId": "string"
    //   }


    const columns = [
        {
            Header: 'explanation',
            accessor: 'explanation', // accessor is the "key" in the data
        },
        {
            Header: 'id',
            accessor: 'id',
        },
        {
            Header: 'requestTime',
            accessor: 'requestTime',
        },
        {
            Header: 'requesterEmail',
            accessor: 'requesterEmail',
        },
        {
            Header: 'solved',
            accessor: 'solved',
        },
        {
            Header: 'tableOrBreakoutRoom',
            accessor: 'tableOrBreakoutRoom',
        },
        {
            Header: 'teamId',
            accessor: 'teamId',
        }
    ];

    // const columnsIfAdmin = [
    //     ...columns,
    //     ButtonColumn("Edit", "primary", editCallback, "UCSBDatesTable"),
    //     ButtonColumn("Delete", "danger", deleteCallback, "UCSBDatesTable")
    // ];

   // const columnsToDisplay = hasRole(currentUser, "ROLE_ADMIN") ? columnsIfAdmin : columns;
   const columnsToDisplay = columns
    return <OurTable
        data={helprequests}
        columns={columnsToDisplay}
        testid={"HelpRequestTable"}
    />;
};