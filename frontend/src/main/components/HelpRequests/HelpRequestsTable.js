import OurTable from "main/components/OurTable";
// import { useBackendMutation } from "main/utils/useBackend";
// import { cellToAxiosParamsDelete, onDeleteSuccess } from "main/utils/UCSBDateUtils"
//import { useNavigate } from "react-router-dom";
//import { hasRole } from "main/utils/currentUser";

export default function HelpRequestsTable({ helprequests, _currentUser }) {

    //const navigate = useNavigate();

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


// String requesterEmail
// String teamId
// String tableOrBreakoutRoom
// LocalDateTime requestTime
// String explanation
// boolean solved



    const columns = [
        {
            Header: 'requesterEmail',
            accessor: 'requesterEmail', // accessor is the "key" in the data
        },
        {
            Header: 'teamID',
            accessor: 'teamId',
        },
        {
            Header: 'tableOrBreakoutRoom',
            accessor: 'tableOrBreakoutRoom',
        },

        {
            Header: 'requestTime',
            accessor: 'requestTime',
        },

        {
            Header: 'explanation',
            accessor: 'explanation',
        },

        {
            Header: 'solved',
            accessor: 'solved',
        }

    
    ];

    // const columnsIfAdmin = [
    //     ...columns,
    //     ButtonColumn("Edit", "primary", editCallback, "UCSBDatesTable"),
    //     ButtonColumn("Delete", "danger", deleteCallback, "UCSBDatesTable")
    // ];

    //const columnsToDisplay = hasRole(currentUser, "ROLE_ADMIN") ? columnsIfAdmin : columns;
    const columnsToDisplay = columns;
    return <OurTable
        data={helprequests}
        columns={columnsToDisplay}
        testid={"HelpRequestsTable"}
    />;

};