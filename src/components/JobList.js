import {
  jobListSearchEl,
  jobDetailsEl,
  getJobs,
  API_URL,
  jobDetailsContentEl,
} from "../common.js";
import renderJobDetails from "./JobDetails.js";

const renderJobList = (jobItems) => {
  jobItems.slice(0, 7).forEach((jobItem) => {
    const jobItemHTML = `
              <li class="job-item">
                  <a class="job-item__link" href="${jobItem.id}">
                      <div class="job-item__badge">${jobItem.badgeLetters}</div>
                      <div class="job-item__middle">
                          <h3 class="third-heading">${jobItem.title}</h3>
                          <p class="job-item__company">${jobItem.company}</p>
                          <div class="job-item__extras">
                              <p class="job-item__extra"><i class="fa-solid fa-clock job-item__extra-icon"></i> ${jobItem.duration}</p>
                              <p class="job-item__extra"><i class="fa-solid fa-money-bill job-item__extra-icon"></i> ${jobItem.salary}</p>
                              <p class="job-item__extra"><i class="fa-solid fa-location-dot job-item__extra-icon"></i> ${jobItem.location}</p>
                          </div>
                      </div>
                      <div class="job-item__right">
                          <i class="fa-solid fa-bookmark job-item__bookmark-icon"></i>
                          <time class="job-item__time">${jobItem.daysAgo}</time>
                      </div>
                  </a>
              </li>
          `;
    jobListSearchEl.insertAdjacentHTML("beforeend", jobItemHTML);
  });
};

const jobClickHandler = async () => {
  event.preventDefault();

  //when an li is clicked find target
  const selectedJob = event.target.closest(".job-item");
  console.log(selectedJob);

  //retrieve id from li href
  const selectedJobId = selectedJob.children[0].getAttribute("href");
  console.log(selectedJobId);

  //add id as a paramenter in url
  try {
    const job = await getJobs(`${API_URL}/${selectedJobId}`);
    //We dont need to .find() id match since id is in the url

    //destructure job item
    const { jobItem } = job;
    console.log(jobItem);

    //clear current job details
    jobDetailsContentEl.innerHTML = "";
    //display job details
    renderJobDetails(jobItem);
  } catch (error) {
    console.log("Error: " + error);
  }
};

jobListSearchEl.addEventListener("click", jobClickHandler);

export default renderJobList;
