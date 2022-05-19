import { _fireEvent, render, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";
import RecommendationsIndexPage from "main/pages/Recommendations/RecommendationsIndexPage";


import { apiCurrentUserFixtures } from "fixtures/currentUserFixtures";
import { systemInfoFixtures } from "fixtures/systemInfoFixtures";
import { _recommendationFixtures } from "fixtures/recommendationFixtures";
import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import _mockConsole from "jest-mock-console";


const mockToast = jest.fn();
jest.mock('react-toastify', () => {
    const originalModule = jest.requireActual('react-toastify');
    return {
        __esModule: true,
        ...originalModule,
        toast: (x) => mockToast(x)
    };
});

describe("RecommendationIndexPage tests", () => {

    const axiosMock =new AxiosMockAdapter(axios);

    const testId = "RecommendationsTable";

    const setupUserOnly = () => {
        axiosMock.reset();
        axiosMock.resetHistory();
        axiosMock.onGet("/api/currentUser").reply(200, apiCurrentUserFixtures.userOnly);
        axiosMock.onGet("/api/systemInfo").reply(200, systemInfoFixtures.showingNeither);
    };

    const setupAdminUser = () => {
        axiosMock.reset();
        axiosMock.resetHistory();
        axiosMock.onGet("/api/currentUser").reply(200, apiCurrentUserFixtures.adminUser);
        axiosMock.onGet("/api/systemInfo").reply(200, systemInfoFixtures.showingNeither);
    };

    test("renders without crashing for regular user", () => {
        setupUserOnly();
        const queryClient = new QueryClient();
        axiosMock.onGet("/api/recommendations/all").reply(200, []);

        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter>
                    <RecommendationsIndexPage />
                </MemoryRouter>
            </QueryClientProvider>
        );


    });

    test("renders without crashing for admin user", () => {
        setupAdminUser();
        const queryClient = new QueryClient();
        axiosMock.onGet("/api/recommendations/all").reply(200, []);

        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter>
                    <RecommendationsIndexPage />
                </MemoryRouter>
            </QueryClientProvider>
        );


    });

    // test("renders three recommendations without crashing for regular user", async () => {
    //     setupUserOnly();
    //     const queryClient = new QueryClient();
    //     axiosMock.onGet("/api/recommendations/all").reply(200, recommendationFixtures.threeRecommendations);

    //     const { getByTestId } = render(
    //         <QueryClientProvider client={queryClient}>
    //             <MemoryRouter>
    //                 <RecommendationsIndexPage />
    //             </MemoryRouter>
    //         </QueryClientProvider>
    //     );

    //     await waitFor(  () => { expect(getByTestId(`${testId}-cell-row-0-col-explanation`)).toHaveTextContent("BS/MS program"); } );
    //     expect(getByTestId(`${testId}-cell-row-1-col-explanation`)).toHaveTextContent("PhD CS Stanford");
    //     expect(getByTestId(`${testId}-cell-row-2-col-explanation`)).toHaveTextContent("BS/MS program");

    // });

    // test("renders three recommendations without crashing for admin user", async () => {
    //     setupAdminUser();
    //     const queryClient = new QueryClient();
    //     axiosMock.onGet("/api/recommendations/all").reply(200, recommendationFixtures.threeRecommendations);

    //     const { getByTestId } = render(
    //         <QueryClientProvider client={queryClient}>
    //             <MemoryRouter>
    //                 <RecommendationsIndexPage />
    //             </MemoryRouter>
    //         </QueryClientProvider>
    //     );

    //     await waitFor(  () => { expect(getByTestId(`${testId}-cell-row-0-col-explanation`)).toHaveTextContent("BS/MS program"); } );
    //     expect(getByTestId(`${testId}-cell-row-1-col-explanation`)).toHaveTextContent("PhD CS Stanford");
    //     expect(getByTestId(`${testId}-cell-row-2-col-explanation`)).toHaveTextContent("BS/MS program");

    // });

    test("renders empty table when backend unavailable, user only", async () => {
        setupUserOnly();
        const queryClient = new QueryClient();
        axiosMock.onGet("/api/recommendations/all").timeout();

        const { queryByTestId, getByText } = render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter>
                    <RecommendationsIndexPage />
                </MemoryRouter>
            </QueryClientProvider>
        );

        await waitFor(() => { expect(axiosMock.history.get.length).toBeGreaterThanOrEqual(3); });

        const expectedHeaders = ['ID',  'Professor Email', 'Requester Email','Date Needed','Date Requested','Explanation','Done'];
    
        expectedHeaders.forEach((headerText) => {
          const header = getByText(headerText);
          expect(header).toBeInTheDocument();
        });

        expect(queryByTestId(`${testId}-cell-row-0-col-requesterEmail`)).not.toBeInTheDocument();
    });
});