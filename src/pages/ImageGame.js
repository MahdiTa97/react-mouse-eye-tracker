import React, { useEffect, useState } from "react";
import {
  ModalProvider,
  Modal,
  useModal,
  ModalTransition,
} from "react-simple-hook-modal";
import { Chicken } from "../components/Chicken";
import calculateDistance from "../utils/calculateDistance";
import factorial from "../utils/factorial";

const ImageGame = () => {
  const [distance, setDistance] = useState(0);
  const { isModalOpen, openModal, closeModal } = useModal();
  const [factNumber, setFactNumber] = useState();
  const [result, setResult] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(factorial(factNumber));
  };

  const handleChange = (e) => {
    e.preventDefault();
    setResult(null);
    setFactNumber(e.target.value);
  };

  const handleClose = (e) => {
    closeModal(e);
    setFactNumber();
    setResult();
  };

  const handleCursor = (e) => {
    let calculatedDistance = calculateDistance(
      document.querySelector(".chicken-container"),
      e.pageX,
      e.pageY
    );
    setDistance(calculatedDistance);
    openModal();
  };

  useEffect(() => {
    const container = document.querySelector(".chicken-container");
    container.addEventListener("mousemove", (e) => {
      const eyes = document.querySelectorAll(".eye");
      [].forEach.call(eyes, function (eye) {
        let mouseX = eye.getBoundingClientRect().right;
        if (eye.classList.contains("eye-left")) {
          mouseX = eye.getBoundingClientRect().left;
        }
        let mouseY = eye.getBoundingClientRect().top;
        let radianDegrees = Math.atan2(e.pageX - mouseX, e.pageY - mouseY);
        let rotationDegrees = radianDegrees * (180 / Math.PI) * -1 + 180;
        eye.style.transform = `rotate(${rotationDegrees}deg)`;
      });
    });
  }, []);

  return (
    <div
      className="chicken-container bg-blue-300 min-h-screen"
      onClick={handleCursor}
    >
      <ModalProvider>
        <Modal isOpen={isModalOpen} transition={ModalTransition.SCALE}>
          <button className="text-red-900 font-bold" onClick={handleClose}>
            Close
          </button>
          <h2 className="text-3xl font-extrabold text-center md:p-7 my-7 text-gray-700 cursor-default capitalize">
            Your point is: {distance}
          </h2>
          <div class="relative text-gray-700">
            <form onSubmit={handleSubmit}>
              <input
                class="w-full h-10 pl-3 pr-8 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline focus:border-red-300 "
                type="number"
                placeholder="Number input"
                onChange={handleChange}
              />
              <button class="absolute inset-y-0 right-0 flex items-center px-4 font-bold text-white bg-red-300 rounded-r-lg hover:bg-red-500 focus:bg-red-700">
                Calculate Factorial Number
              </button>
            </form>
          </div>

          <h2 className="text-base my-7 md:text-3xl font-bold text-center md:p-7 text-yellow-900 cursor-default capitalize">
            {result ?? "Please Enter The Button For Result"}
          </h2>
        </Modal>
      </ModalProvider>
      <div className="container mx-auto flex flex-col justify-items-center justify-center items-center relative">
        <h1 className="text-3xl font-semibold text-gray-700 text-center p-7 cursor-default capitalize">
          click anywhere on the page that you like!
        </h1>
        <Chicken className="my-32" />
      </div>
    </div>
  );
};

export default ImageGame;
