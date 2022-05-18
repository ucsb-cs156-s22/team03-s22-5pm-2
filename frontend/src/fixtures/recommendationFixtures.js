const recommendationFixtures = {
    oneReview: {
        "requesterEmail": "cgaucho@ucsb.edu",
        "professorEmail": "phtcon@ucsb.edu",
        "explanation": "BS/MS program",
        "dateRequested": "2022-04-20T00:00:00",
        "dateNeeded": "2022-05-01T00:00:00",
        "done": true
    },
    threeReviews: [
        {
            "requesterEmail": "cgaucho@ucsb.edu",
            "professorEmail": "phtcon@ucsb.edu",
            "explanation": "BS/MS program",
            "dateRequested": "2022-04-20T00:00:00",
            "dateNeeded": "2022-05-01T00:00:00",
            "done": true
        },
        {
            "requesterEmail": "ldelplaya@ucsb.edu",
            "professorEmail": "richert@ucsb.edu",
            "explanation": "PhD CS Stanford",
            "dateRequested": "2022-04-20T00:00:00",
            "dateNeeded": "2022-05-01T00:00:00",
            "done": false
        },
        {
            "requesterEmail": "cgau@ucsb.edu",
            "professorEmail": "pon@ucsb.edu",
            "explanation": "BS/MS program",
            "dateRequested": "2022-04-20T00:00:00",
            "dateNeeded": "2022-04-23T00:00:00",
            "done": true
        }
    ]
};


export { recommendationFixtures };