import React from "react";
import "./ModalGallery.css";

const myArray = [
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8-P87Fqsgi7Nd0e-fJH4vMr7saqkjGho9g&usqp=CAU",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8-P87Fqsgi7Nd0e-fJH4vMr7saqkjGho9g&usqp=CAU",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8-P87Fqsgi7Nd0e-fJH4vMr7saqkjGho9g&usqp=CAU",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8-P87Fqsgi7Nd0e-fJH4vMr7saqkjGho9g&usqp=CAU",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUIbgfg9vZrfRRrlBNAYzWr8XYpyL2pF736g&usqp=CAU",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8-P87Fqsgi7Nd0e-fJH4vMr7saqkjGho9g&usqp=CAU",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8-P87Fqsgi7Nd0e-fJH4vMr7saqkjGho9g&usqp=CAU",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8-P87Fqsgi7Nd0e-fJH4vMr7saqkjGho9g&usqp=CAU",
  },
  // {
  //   src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8-P87Fqsgi7Nd0e-fJH4vMr7saqkjGho9g&usqp=CAU",
  // },
  // {
  //   src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8-P87Fqsgi7Nd0e-fJH4vMr7saqkjGho9g&usqp=CAU",
  // },
  // {
  //   src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8-P87Fqsgi7Nd0e-fJH4vMr7saqkjGho9g&usqp=CAU",
  // },
  // {
  //   src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8-P87Fqsgi7Nd0e-fJH4vMr7saqkjGho9g&usqp=CAU",
  // },
  // {
  //   src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8-P87Fqsgi7Nd0e-fJH4vMr7saqkjGho9g&usqp=CAU",
  // },
  // {
  //   src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8-P87Fqsgi7Nd0e-fJH4vMr7saqkjGho9g&usqp=CAU",
  // },
];

// while (0 < myArray.length) {
//   const lists = myArray.splice(0, 4);
//   array.push(lists);
//   while (0 < array.length) {
//     array.map((item, i) => item);
//   }
// }

// let array = [];
// let newArray = [];
// for (let i = 0; i < myArray.length; i++) {
//   const lists = myArray.splice(0, 4);
//   array.push(lists);
//   for (let j = 0; array[j] < array.length; j++) {
//     array.map((item) => {
//       if (array.index(item) % 4 == 0) {
//         let temporaryArray = [];
//         temporaryArray.push(item);
//         newArray.push(temporaryArray);
//       }
//     });
//   }
// }

// let NewArray = [];
// for (let i = 0; i < myArray.length; i++) {
//   let temporaryArray = [];
//   myArray.map((item) => {
//     if (myArray.index(item) % 4 == 0) {
//       temporaryArray.push(item);
//     }
//     NewArray.push(temporaryArray);
//   });
// }

// console.log("array", newArray);
export const matrixMaker = (list, elementsPerSubArray) => {
  var matrix = [],
    i,
    k;

  for (i = 0, k = -1; i < list.length; i++) {
    if (i % elementsPerSubArray === 0) {
      k++;
      matrix[k] = [];
    }

    matrix[k].push(list[i]);
  }

  return matrix;
};

const ModalGallery = () => {
  return (
    <div className="col-10  ">
      <div className="col-6  ">
        <div className="col-12 d-flex" style={{ flexWrap: "wrap " }}>
          <div class="row">
            {matrixMaker([...myArray, ...myArray], 4).map((subArray, index) => (
              <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                {subArray.map((item) => (
                  <>
                    <img
                      src={item.src}
                      class="w-100  rounded mb-4"
                      alt="Boat on Calm Water"
                    />
                  </>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalGallery;
