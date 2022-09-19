import React from "react";
import "./Modal.css";
import { AiFillStar } from "react-icons/ai";
import ModalGallery from "./ModalGallery";
import { IoMdArrowRoundDown } from "react-icons/io";

const Modal = () => {
  return (
    <div>
      <div
        class="modal img-gallery fade modal-xl "
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content ">
            <div class="modal-header modal-title  ">
              <div class=" col-7 mx-4 d-inline-flex justify-content-end align-items-center div-btn">
                <h6 class="mt-2 " id="exampleModalLabel  ">
                  Generator London
                </h6>
                <div class="mx-1 ">
                  <AiFillStar style={{ color: "#febb02" }} />
                  <AiFillStar style={{ color: "#febb02" }} />
                  <AiFillStar style={{ color: "#febb02" }} />
                </div>
                <button
                  type="button"
                  class="btn btn-primary btn-primary-dark"
                  data-bs-dismiss="modal"
                >
                  Reserve now
                </button>
              </div>
              <div class=" col-1 d-flex justify-content-center ">
                <div>
                  <span>Close</span>
                  <button
                    type="button "
                    class="btn-close "
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
              </div>
            </div>
            <div class="modal-body d-flex ">
              <ModalGallery />
              <div class="col-2 margin-sidebar">
                <div class="d-flex justify-content-start row shadow-sm w-100">
                  <div class="col-auto mt-1 ">
                    <span class="badge  badge-sidebar m-0">7.1</span>
                  </div>
                  <div class="col-auto p-0 ">
                    <h6 class="m-0 d-flex justify-content-start align-items-start">
                      Good
                    </h6>
                    <p class="p-sidebar ">4,871 reviews</p>
                  </div>
                </div>
                <div class="row w-100">
                  <div class="shadow-sm pb-3 ">
                    <h6 class="d-flex justify-content-start  my-3">
                      similar guest photos
                    </h6>
                    <img
                      class="img-fluid d-block "
                      width="55"
                      height="55"
                      alt="picture"
                      src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/91731097.jpg?k=fa35dab87aced1afe6233c160e6e5c787b2d360f4ce0bac1a55459503a6626c1&o=&hp=1"
                    ></img>
                  </div>
                </div>
                <div class="row">
                  <h6 style={{ fontSize: "14px" }} class="mb-3 pt-3">
                    Categories:
                  </h6>
                  <span
                    style={{
                      fontSize: "14px",
                      width: "190px ",
                    }}
                  >
                    Staff
                  </span>
                  <div class="d-inline-flex  align-items-center pb-3">
                    <div class="progress ">
                      <div
                        class="progress-bar  width-81 "
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow="81"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <label class="progress-value">8.1</label>
                  </div>{" "}
                  <label style={{ fontSize: "14px", width: "190px" }}>
                    Facilities
                  </label>
                  <div class="d-inline-flex   pb-3 align-items-center">
                    <div class="progress ">
                      <div
                        class="progress-bar  width-71  "
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow="71"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <label class="progress-value">7.1</label>
                  </div>{" "}
                  <label style={{ fontSize: "14px", width: "190px" }}>
                    Cleanliness
                  </label>
                  <div class="d-inline-flex  align-items-center pb-3">
                    <div class="progress ">
                      <div
                        class="progress-bar  width-71 "
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow="71"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <label class="progress-value">7.1</label>
                  </div>{" "}
                  <label style={{ fontSize: "14px", width: "190px" }}>
                    Comfort <IoMdArrowRoundDown class="svg-down" />
                  </label>
                  <div class="d-inline-flex  align-items-center pb-3">
                    <div class="progress p-danger ">
                      <div
                        class="progress-bar  width-70 p-bg-danger "
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <label class="progress-value">7</label>
                  </div>{" "}
                  <label style={{ fontSize: "14px", width: "190px" }}>
                    Value for money
                  </label>
                  <div class="d-inline-flex  align-items-center pb-3">
                    <div class="progress ">
                      <div
                        class="progress-bar  w-75  "
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <label class="progress-value">7.5</label>
                  </div>{" "}
                  <label style={{ fontSize: "14px", width: "190px" }}>
                    Location
                  </label>
                  <div class="d-inline-flex  align-items-center pb-3">
                    <div class="progress ">
                      <div
                        class="progress-bar width-87 "
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow="87"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <label class="progress-value">8.7</label>
                  </div>{" "}
                  <label style={{ fontSize: "14px", width: "190px" }}>
                    Free WiFi
                  </label>
                  <div class="d-inline-flex  align-items-center pb-3">
                    <div class="progress ">
                      <div
                        class="progress-bar  width-77 "
                        role="progressbar"
                        aria-label="Basic example"
                        aria-valuenow="77"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <label class="progress-value">7.7</label>
                  </div>
                  <div
                    class="d-inline-flex align-items-center  justify-content-end  "
                    style={{ marginLeft: "20px", marginTop: "10px" }}
                  >
                    <IoMdArrowRoundDown class="svg-down " />
                    <span style={{ width: "160px", fontSize: "12px" }}>
                      Low score for London
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
