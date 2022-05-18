import OurTable, { ButtonColumn } from "main/components/OurTable";
import { useBackendMutation } from "main/utils/useBackend";
import { cellToAxiosParamsDelete, onDeleteSuccess } from "main/utils/UCSBDateUtils"
//import { useNavigate } from "react-router-dom";
import { hasRole } from "main/utils/currentUser";

export default function UCSBOrganizationTable({ organization, currentUser }) {

    //const navigate = useNavigate();

    //const editCallback = (cell) => {
    //    navigate(`/ucsborganization/edit/${cell.row.values.id}`)
    //}

    // Stryker disable all : hard to test for query caching
    const deleteMutation = useBackendMutation(
        cellToAxiosParamsDelete,
        { onSuccess: onDeleteSuccess },
        ["/api/ucsborganization/all"]
    );
    // Stryker enable all 

    // Stryker disable next-line all : TODO try to make a good test for this
    const deleteCallback = async (cell) => { deleteMutation.mutate(cell); }

    const columns = [
        {
            Header: 'Org Code',
            accessor: 'orgCode', // accessor is the "key" in the data
        },
        {
            Header: 'Organization Translation Short',
            accessor: 'orgTranslationShort',
        },
        {
            Header: 'Organization Translation',
            accessor: 'orgTranslation',
        },
        {
            Header: 'Inactive',
            id: 'inactive', // needed for tests
            accessor: (row, _rowIndex) => String(row.inactive) // hack needed for boolean values to show up
        }
    ];

    const columnsIfAdmin = [
        ...columns,
        //ButtonColumn("Edit", "primary", editCallback, "UCSBOrganizationTable"),
        ButtonColumn("Delete", "danger", deleteCallback, "UCSBOrganizationTable")
    ];

    const columnsToDisplay = hasRole(currentUser, "ROLE_ADMIN") ? columnsIfAdmin : columns;

    return <OurTable
        data={organization}
        columns={columnsToDisplay}
        testid={"UCSBOrganizationTable"}
    />;
};