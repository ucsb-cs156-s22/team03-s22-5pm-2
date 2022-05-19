import OurTable, { _ButtonColumn} from "main/components/OurTable";
import { _useBackendMutation } from "main/utils/useBackend";
//import {  onDeleteSuccess } from "main/utils/UCSBDateUtils"
// import { useNavigate } from "react-router-dom";
import { _hasRole } from "main/utils/currentUser";


// export function cellToAxiosParamsDelete(cell) {
//     return {
//         url: "/api/articles",
//         method: "DELETE",
//         params: {
//             id: cell.row.values.id
//         }
//     }
// }

export default function ArticlesTable({ articles, _currentUser }) {

    // const navigate = useNavigate();

    // const editCallback = (cell) => {
    //     navigate(`/ucsbdates/edit/${cell.row.values.id}`)
    // }

    // Stryker disable all : hard to test for query caching
    //const deleteMutation = useBackendMutation(
    //    cellToAxiosParamsDelete,
    //    { onSuccess: onDeleteSuccess },
    //    ["/api/ucsbdiningcommons/all"]
    //);
    // Stryker enable all 

    // Stryker disable next-line all : TODO try to make a good test for this
    //const deleteCallback = async (cell) => { deleteMutation.mutate(cell); }

    const columns = [
        {
            Header: 'Id',
            accessor: 'id',
        },
        {
            Header: 'Title',
            accessor: 'title'
        },
        {
            Header: 'Url',
            accessor: 'url',
        },
        {
            Header: 'Explanation',
            accessor: 'explanation', 
        },
        {
            Header: 'Email',
            accessor: 'email',
        },
        {
            Header: 'Date Added',
            accessor: 'dateAdded', 
        }
    ];

    const testid = "ArticlesTable";

    //const _columnsIfAdmin = [
    //    ...columns,
        // ButtonColumn("Edit", "primary", editCallback, testid),
        //ButtonColumn("Delete", "danger", deleteCallback, testid)
    //];

    //const columnsToDisplay = hasRole(currentUser, "ROLE_ADMIN") ? columnsIfAdmin : columns;

    const columnsToDisplay = columns;

    return <OurTable
        data={articles}
        columns={columnsToDisplay}
        testid={testid}
    />;
};
