//CONSTANTS or  immutable global variables
export const API_URL = "https://bytegrad.com/course-assets/js/2/api/jobs";


//STATE


//SELECTORS


//UTILITY FUNCTIONS
//get jobs from api
//for search all jobs == API_URL?searchTerm=inputValue
//for one selected job item == API_URL/id
export const getJobs = async () => {
    try{
        const response = await fetch(`${API_URL}`);
        const data = await response.json();
        return data
    } catch (error){
        console.log("Error: " + error)
        //there is an error component to be used later
    }
};

console.log(getJobs());


