import React from 'react';

import HelpRequestsTable from "main/components/HelpRequests/HelpRequestsTable";
import { helpRequestFixtures } from 'fixtures/helpRequestFixtures';

export default {
    title: 'components/HelpRequest/HelpRequestsTable',
    component: HelpRequestTable
};

const Template = (args) => {
    return (
        <HelpRequestsTable {...args} />
    )
};

export const Empty = Template.bind({});

Empty.args = {
    helprequests: []
};

export const ThreeRequests = Template.bind({});

ThreeRequests.args = {
    dates: helpRequestsFixtures.threeRequests
};




