// import React from 'react'
// import { useBackend } from 'main/utils/useBackend'; // use prefix indicates a React Hook

import BasicLayout from "main/layouts/BasicLayout/BasicLayout";
// import UCSBDatesTable from 'main/components/UCSBDates/UCSBDatesTable';
// import { useCurrentUser } from 'main/utils/currentUser' // use prefix indicates a React Hook

export default function ReviewIndexPage() {

  return (
    <BasicLayout>
      <div className="pt-2">
        <h1>Reviews</h1>
        <p>
          This is where the index page will go
        </p>
      </div>
    </BasicLayout>
  )
}