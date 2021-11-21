let eventsContainer = Array.from(document.querySelectorAll('.carousel-inner .carousel-item'))

const fetchEvents = () => {
  fetch(`http://catreloaded.org:8000/event/?page=1&page_size=16`)
    .then(data => data.json())
    .then(res => {
      console.log(res)
      renderEvents(res.results)
    })
}

const renderEvents = (data) => {
  for (let i = 0; i < 4; i++) {
    let slideElement = ''
    for (let j = 4 * i; j < 4 * i + 4; j++) {
      let event = ` <div
      class="card wow animate__fadeIn"
      data-wow-duration="1.5s"
    >
      <div class="row g-0">
        <div class="col-md-12 col-lg-4">
          <img
            src="https://catreloaded.org/media/${data[j].image_file_name}"
            class="img-fluid rounded"
            alt="event"
          />
        </div>
        <div class="col-md-12 col-lg-8">
          <div class="card-body">
            <h4 class="card-title">${data[j].title}</h4>
            <ul class="row list-unstyled detail">
              <li
                class="col-5 col-sm-5 col-md-6 col-lg-4 col-xl-3"
              >
                <i class="fas fa-calendar-alt" style='padding-right: 4px'></i>${data[j].date.substring(0, 10)}
              </li>
            </ul>
            <p class="card-text lead">
              ${data[j].description}
            </p>
            <a class="btn outline-cat-button"
              target = "_blank"
              href= ${data[j].url}
            > Read More </a>
          </div>
        </div>
      </div>
    </div>`
      slideElement += event;
    }
    eventsContainer[i].innerHTML = slideElement;
  }
}

fetchEvents();
