import { jobListSearchEl } from "../common.js";

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

export default renderJobList;
