import {
    getJobs,
    API_URL,
    searchFormEl,
    searchInputEl,
    numberEl
} from "../common.js";

//The instructor added a SUBMIT event listener to the search form while I added an INPUT handler to the search input 
const searchInputHandler = async () =>{
    let searchTerm = searchInputEl.value;
    console.log(searchTerm);
    
    try{
        const jobs = await getJobs(`${API_URL}?search=${searchTerm}`);

        //destructre job items
        const { jobItems } = jobs;
        console.log(jobItems);

        //count and display number of search results
        numberEl.textContent = jobItems.length;
    } catch(error){
        console.log("Error: " + error)
    }

    //remove focus from input after typing search term
    searchInputEl.blur();
}

searchInputEl.addEventListener('input', searchInputHandler);
