import OurTable from "main/components/OurTable";
// import { useBackendMutation } from "main/utils/useBackend";
// import { cellToAxiosParamsDelete, onDeleteSuccess } from "main/utils/UCSBDateUtils"
// import { useNavigate } from "react-router-dom";
import { hasRole } from "main/utils/currentUser";

export default function RecommendationsTable({ recommendations, currentUser }) {

    // const navigate = useNavigate();

    // const editCallback = (cell) => {
    //     navigate(`/ucsbdates/edit/${cell.row.values.id}`)
    // }

    // // Stryker disable all : hard to test for query caching
    // const deleteMutation = useBackendMutation(
    //     cellToAxiosParamsDelete,
    //     { onSuccess: onDeleteSuccess },
    //     ["/api/ucsbdates/all"]
    // );
    // // Stryker enable all 

    // // Stryker disable next-line all : TODO try to make a good test for this
    // const deleteCallback = async (cell) => { deleteMutation.mutate(cell); }

    const columns = [
        {
            Header: 'ID',
            accessor: 'id',
        },
        {
            Header: 'Professor Email',
            accessor: 'professorEmail',
        },
        {
            Header: 'Requester Email',
            accessor: 'requesterEmail',
        },
        {
            Header: 'Date Needed',
            accessor: 'dateNeeded', 
        },
        {
            Header: 'Date Requested',
            accessor: 'dateRequested',
        },
        {
            Header: 'Explanation',
            accessor: 'explanation',
        },
        {
            Header: 'Done',
            accessor: 'done',
        },
    ];

    // const columnsIfAdmin = [
    //     ...columns,
    //     ButtonColumn("Edit", "primary", editCallback, "UCSBDatesTable"),
    //     ButtonColumn("Delete", "danger", deleteCallback, "UCSBDatesTable")
    // ];

    const columnsToDisplay = hasRole(currentUser, "ROLE_ADMIN") ? columnsIfAdmin : columns;

    return <OurTable
        data={recommendations}
        columns={columnsToDisplay}
        testid={"RecommendationsTable"}
    />;
};