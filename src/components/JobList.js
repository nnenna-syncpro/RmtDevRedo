import {
  jobListSearchEl,
  jobDetailsEl,
  getJobs,
  API_URL,
  jobDetailsContentEl,
} from "../common.js";

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
    const jobDetailsHTML = `
        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&h=348&q=100" alt="#" class="job-details__cover-img">

        <a class="apply-btn" href="https://fictionalversonetworkswebsite.com" target="_blank">Apply <i class="fa-solid fa-square-arrow-up-right apply-btn__icon"></i></a>

        <section class="job-info">
            <div class="job-info__left">
                <div class="job-info__badge">${jobItem.badgeLetters}</div>
                <div class="job-info__below-badge">
                    <time class="job-info__time">${jobItem.daysAgo}</time>
                    <button class="job-info__bookmark-btn">
                        <i class="fa-solid fa-bookmark job-info__bookmark-icon"></i>
                    </button>
                </div>
            </div>
            <div class="job-info__right">
                <h2 class="second-heading">${jobItem.title}</h2>
                <p class="job-info__company">${jobItem.company}</p>
                <p class="job-info__description">${jobItem.description}</p>
                <div class="job-info__extras">
                    <p class="job-info__extra"><i class="fa-solid fa-clock job-info__extra-icon"></i> ${
                      jobItem.duration
                    }</p>
                    <p class="job-info__extra"><i class="fa-solid fa-money-bill job-info__extra-icon"></i> ${
                      jobItem.salary
                    }</p>
                    <p class="job-info__extra"><i class="fa-solid fa-location-dot job-info__extra-icon"></i> ${
                      jobItem.location
                    }</p>
                </div>
            </div>
        </section>

        <div class="job-details__other">
            <section class="qualifications">
                <div class="qualifications__left">
                    <h4 class="fourth-heading">Qualifications</h4>
                    <p class="qualifications__sub-text">Other qualifications may apply</p>
                </div>
                <ul class="qualifications__list">${jobItem.qualifications
                  .map(
                    (qualification) =>
                      `<li class="qualifications__item">${qualification}</li>`
                  )
                  .join("")}
                    
                </ul>
            </section>

            <section class="reviews">
                <div class="reviews__left">
                    <h4 class="fourth-heading">Company reviews</h4>
                    <p class="reviews__sub-text">Recent things people are saying</p>
                </div>
                <ul class="reviews__list">${jobItem.reviews
                  .map((review) => `<li class="reviews__item">${review}</li>`)
                  .join("")}
                    
                </ul>
            </section>
        </div>`;

    jobDetailsContentEl.innerHTML = jobDetailsHTML;
  } catch (error) {
    console.log("Error: " + error);
  }
};

jobListSearchEl.addEventListener("click", jobClickHandler);

export default renderJobList;
