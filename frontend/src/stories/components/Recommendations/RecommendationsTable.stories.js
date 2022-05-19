import React from 'react';

import RecommendationsTable from 'main/components/Recommendations/RecommendationsTable';
import { recommendationFixtures } from 'fixtures/recommendationFixtures';

export default {
    title: 'components/Recommendations/RecommendationsTable',
    component: RecommendationsTable
};

const Template = (args) => {
    return (
        <DiningCommonsTable {...args} />
    )
};

export const Empty = Template.bind({});

Empty.args = {
    recommentations: []
};

export const ThreeRecommendations = Template.bind({});

ThreeRecommendations.args = {
    recommentations: recommendationFixtures.threeRecommendations
};


