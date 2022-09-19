import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div class="container-md ">
      <div
        class="d-inline-flex  "
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        type="button"
      >
        <div class="col-auto px-1 ">
          <div class="row py-1">
            <div class=" ">
              <img
                class="rounded"
                height="170px"
                width="275.85"
                alt="picture"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8-P87Fqsgi7Nd0e-fJH4vMr7saqkjGho9g&usqp=CAU"
              />
            </div>
          </div>
          <div class="row ">
            <div class="py-1 ">
              <img
                class="rounded "
                height="170px"
                width="275.85"
                alt="picture"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8-P87Fqsgi7Nd0e-fJH4vMr7saqkjGho9g&usqp=CAU"
              />
            </div>
          </div>
        </div>
        <div class="col-auto ">
          <div class="padding-5  py-1 ">
            <img
              class="rounded "
              height="347px"
              width="535.29"
              alt="picture"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8-P87Fqsgi7Nd0e-fJH4vMr7saqkjGho9g&usqp=CAU"
            />
          </div>
        </div>
      </div>
      <div
        class="row-auto d-inline-flex   "
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        type="button"
      >
        <div class="row  gx-1 py-1 ">
          <div class="col-auto padding-5 ">
            <img
              class="rounded "
              height="110px"
              width="78.09"
              alt="picture"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8-P87Fqsgi7Nd0e-fJH4vMr7saqkjGho9g&usqp=CAU"
            />
          </div>
          <div class="col-auto padding-5">
            <img
              class="rounded "
              height="110px "
              width="175.73"
              alt="picture"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8-P87Fqsgi7Nd0e-fJH4vMr7saqkjGho9g&usqp=CAU"
            />
          </div>
          <div class="col-auto padding-5 ">
            <img
              class="rounded "
              height="110px"
              width="175.73"
              alt="picture"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrF-cYJFx81b3HQEnUT1Onu8IxUjq6THMi5w&usqp=CAU"
            />
          </div>
          <div class="col-auto padding-5 ">
            <img
              class="rounded "
              height="110px"
              width="175.73"
              alt="picture"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUIbgfg9vZrfRRrlBNAYzWr8XYpyL2pF736g&usqp=CAU"
            />
          </div>
          <div class="col-auto img-text padding-5 ">
            <img
              class="rounded shadow-img "
              height="110px"
              width="175.73"
              alt="picture"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUIbgfg9vZrfRRrlBNAYzWr8XYpyL2pF736g&usqp=CAU"
            />
            <span class="text-in-img">+49 photos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
