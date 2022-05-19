import OurTable, { _ButtonColumn } from "main/components/OurTable"; 
import { _useBackendMutation } from "main/utils/useBackend";
import { _cellToAxiosParamsDelete, _onDeleteSuccess } from "main/utils/reviewUtils"
// import { useNavigate } from "react-router-dom";
import { _hasRole } from "main/utils/currentUser";

export default function ReviewTable({ reviews, _currentUser }) {

    // const navigate = useNavigate();

    // const editCallback = (cell) => {
    //     navigate(`/ucsbdates/edit/${cell.row.values.id}`)
    // }

    // Stryker disable all : hard to test for query caching
    // const deleteMutation = useBackendMutation(
    //     cellToAxiosParamsDelete,
    //     { onSuccess: onDeleteSuccess },
    //     ["/api/MenuItemReview/all"]
    // );
    // // Stryker enable all 

    // // Stryker disable next-line all : TODO try to make a good test for this
    // const deleteCallback = async (cell) => { deleteMutation.mutate(cell); }

    // "code": 1,
    // "comments": "this sucked",
    // "dateReviewed": "2022-05-18T04:38:35.614Z",
    // "id": 1,
    // "reviewerEmail": "urmom@hotmail.com",
    // "stars": 1
    const columns = [
        {
            Header: 'id',
            accessor: 'id', // accessor is the "key" in the data
        },
        {
            Header: 'Code',
            accessor: 'code',
        },
        {
            Header: 'Date Reviewed',
            accessor: 'dateReviewed',
        },
        {
            Header: 'Comments',
            accessor: 'comments',
        },
        {
            Header: 'Reviewer Email',
            accessor: 'reviewerEmail',
        },
        {
            Header: 'Stars',
            accessor: 'stars',
        }
    ];

    // const columnsIfAdmin = [
    //     ...columns,
    //     // ButtonColumn("Edit", "primary", editCallback, "ReviewTable"),
    //     // ButtonColumn("Delete", "danger", deleteCallback, "ReviewTable")
    // ];

    // const columnsToDisplay = hasRole(currentUser, "ROLE_ADMIN") ? columnsIfAdmin : columns;
    const columnsToDisplay = columns;

    return <OurTable
        data={reviews}
        columns={columnsToDisplay}
        testid={"ReviewTable"}
    />;
}; 