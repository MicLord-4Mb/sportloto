# **🎲 Educational Project: Sportloto "5 out of 36"**

An interactive React-based web application for generating random lottery numbers with detailed statistics, history saving, and multi-language support. The project is developed using **Atomic Design** principles.

## **🚀 Features**

According to the technical requirements, the following features are implemented in the project:

1. **Number Generation:**  
   * Random generation of 5 unique numbers in the range from 1 to 36\.  
   * Automatic descending sorting of the drawn numbers.  
2. **Mathematical Statistics (Higher-Order Functions):**  
   * Calculation of the minimum (Min value) and maximum (Max value) values.  
   * Calculation of the arithmetic mean (Average).  
   * Counting the number of even (Even count) and odd (Odd count) numbers.  
   * *Note:* A generic Statistic function is used for calculations, which accepts other functions (getMin, getMax, getAverage) as arguments.  
3. **History Storage:**  
   * Saving the last 5 generated combinations.  
4. **User Interface (UI/UX):**  
   * Support for three languages (Russian, English, Hebrew) with dynamic text direction adjustments (LTR / RTL).  

## **🛠 Tech Stack**

* **Framework:** React 18 (Vite)  
* **Styling:** Tailwind CSS  
* **UI Components:** Ant Design (AntD)  
* **Architecture:** Atomic Design

## **📂 Project Structure (Atomic Approach)**

The project is divided into logical modules for easy scaling:

src/  
├── components/  
│   ├── atoms/         \# Basic UI components (LotteryBall, StatBox)  
│   ├── molecules/     \# Composite elements (history cards, etc.)  
│   └── organisms/     \# Large interface blocks  
├── locales/  
│   └── translations.js \# Dictionaries for multi-language support (RU, EN, HE)  
├── utils/  
│   ├── math.js        \# Higher-order math functions  
│   └── storage.js     \# Functions for storage data  
├── App.jsx            \# Main container component  
├── main.jsx           \# React entry point  
└── index.css          \# Global styles and Tailwind imports

## **⚙️ Installation and Setup**

To run the project locally, follow these steps in your terminal:

1. **Clone the repository:**  
   git clone \<your\_repository\_url\>  
   cd \<folder\_name\>

2. **Install dependencies:**  
   Ensure you have [Node.js](https://nodejs.org/) installed.  
   npm install

3. **Start the development server:**  
   npm run dev

4. **Open the application:**  
   Navigate in your browser to http://localhost:5173.

## **🎓 Educational Goals of the Project**

This project was created to practice the following skills:

* Working with React hooks (useState, useEffect, useCallback).  
* Separating business logic from the UI (extracting functions into the utils folder).  
* Using callbacks and higher-order functions in JavaScript.  
* Integrating third-party component libraries (Ant Design) and utility CSS frameworks (Tailwind).  
* Building a scalable frontend application architecture.
