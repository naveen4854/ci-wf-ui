
const data = [
    {
        id: 0,
        stage: "Protrack",
        categoryId: 1,
        pId: null,
        status: "completed",
        x: 0,
        y: 0,
        text: {
            startDate: "29-3-1993",
            endDate: "5-3-2001",
            info: "This gives us the info about the project status"
        }
    },
    {
        id: 1,
        stage: "STG",
        categoryId: 2,
        pId: [0],
        status: "completed",
        x: 0,
        y: 0,
        text: {
            startDate: "29-3-1993",
            endDate: "5-3-2001",
            info: "This gives us the info about the project status"
        }
    },
    {
        id: 2,
        stage: "ConfirmIt",
        categoryId: 2,
        pId: [0],
        status: "Progress",
        x: 0,
        y: 0,
        text: {
            startDate: "29-3-1993",
            endDate: "5-3-2001",
            info: "This gives us the info about the project status"
        }
    },
    {
        id: 3,
        stage: "STG",
        categoryId: 3,
        pId: [1],
        status: "progress",
        x: 0,
        y: 0,
        text: {
            startDate: "29-3-1993",
            endDate: "5-3-2001",
            info: "This gives us the info about the project status"
        }
    },
    {
        id: 4,
        stage: "ConfirmIt",
        categoryId: 3,
        pId: [2],
        status: "completed",
        x: 0,
        y: 0,
        text: {
            startDate: "29-3-1993",
            endDate: "5-3-2001",
            info: "This gives us the info about the project status"
        }
    },
    {
        id: 5,
        stage: "Decipher",
        categoryId: 3,
        pId: [8],
        status: "delayed",
        x: 0,
        y: 0,
        text: {
            startDate: "29-3-1993",
            endDate: "5-3-2001",
            info: "This gives us the info about the project status"
        }
    },
    {
        id: 6,
        stage: "ConfirmIt",
        categoryId: 4,
        pId: [3, 4, 5],
        status: "progress",
        x: 0,
        y: 0,
        text: {
            startDate: "29-3-1993",
            endDate: "5-3-2001",
            info: "This gives us the info about the project status"
        }
    },
    {
        id: 7,
        stage: "ConfirmIt",
        categoryId: 5,
        pId: [6],
        status: "progress",
        x: 0,
        y: 0,
        text: {
            startDate: "29-3-1993",
            endDate: "5-3-2001",
            info: "This gives us the info about the project status"
        }
    },
    {
        id: 8,
        stage: "Decipher",
        categoryId: 2,
        pId: [0],
        status: "Completed",
        x: 0,
        y: 0,
        text: {
            startDate: "29-3-1993",
            endDate: "5-3-2001",
            info: "This gives us the info about the project status"
        }
    }
    
].sort((a,b)=>a.categoryId-b.categoryId);

export default data;