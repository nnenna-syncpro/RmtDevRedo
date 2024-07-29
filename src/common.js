//CONSTANTS or  immutable global variables
export const API_URL = "https://bytegrad.com/course-assets/js/2/api/jobs";


//STATE


//SELECTORS
export const searchFormEl = document.querySelector(".search");
export const searchInputEl = document.querySelector(".search__input");
export const numberEl = document.querySelector(".count__number");

//UTILITY FUNCTIONS
//get jobs from api
//for search all jobs == API_URL?searchTerm=inputValue
//for one selected job item == API_URL/id
export const getJobs = async (jobsUrl) => {
    try{
        const response = await fetch(jobsUrl);
        const data = await response.json();
        return data

        // if (!response.ok) {
        //     throw new Error(data.description);
        // }
    } catch (error){
        console.log("Error: " + error)
        //there is an error component to be used later
    }
};

