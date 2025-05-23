import React from 'react'

export default function Slider() {
  return (
    <div class="row">
    <div class="col-sm-12 p-0">
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="images/fruit-vegetable-health-food-to-maintain-healthy-heart-super-foods-high-antioxidants-anthocyanins-fibre-vitamins-114358390.webp" class="d-block w-100" alt="..."height="600"/>
          </div>
          <div class="carousel-item">
            <img src="images/istockphoto-1164088769-612x612.jpg" class="d-block w-100" alt="..." height="600"/>
          </div>
          <div class="carousel-item">
            <img src="images/istockphoto-1829241109-612x612.jpg" class="d-block w-100" alt="..."height="600"/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
  );
}
