import React, { useState, useEffect } from 'react';
import './Game.css';

// Import topping images
import pizzaBase from '../Assets/EmptypPizza-Photoroom.png';
import tomatoSauceImg from '../Assets/TomatoSoauce-Photoroom.png';
import sauceBlancheImg from '../Assets/SauceBlounchPhotoroom.png';
import cheeseImg from '../Assets/cheese-Photoroom.png';
import pepperoniImg from '../Assets/New Project_prev_ui.png';
import mushroomsImg from '../Assets/Screenshot 2024-09-12 200131_prev_ui.png';
import olivesImg from '../Assets/olivs_prev_ui.png';
import PizzaBoard from '../Assets/Board-Photoroom.png';

// Import ingredient images
import tomatoSauceIngredientImg from '../Assets/TomatoSoauce-Photoroom.png';
import sauceBlancheIngredientImg from '../Assets/SauceBlounchPhotoroom.png';
import cheeseIngredientImg from '../Assets/cheese-Photoroom.png';
import pepperoniIngredientImg from '../Assets/pepperoni.jpg';
import mushroomsIngredientImg from '../Assets/mashrum.jpg';
import olivesIngredientImg from '../Assets/olives.jpg';

function Game() {
  const [pizza, setPizza] = useState([]); // Toppings added to the pizza
  const [order, setOrder] = useState([]); // Required toppings for the order
  const [score, setScore] = useState(0); // Player's score
  const [timeLeft, setTimeLeft] = useState(30); // Timer (30 seconds)
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false); // Track if game has started
  
  // Available ingredients with separate display and topping images
  const ingredients = [
    { 
      name: 'Tomato Sauce', 
      displayImage: tomatoSauceIngredientImg,  // Ingredient image
      toppingImage: tomatoSauceImg  // Topping image on pizza
    },
    { 
      name: 'Sauce Blanche', 
      displayImage: sauceBlancheIngredientImg, 
      toppingImage: sauceBlancheImg 
    },
    { 
      name: 'Cheese', 
      displayImage: cheeseIngredientImg, 
      toppingImage: cheeseImg 
    },
    { 
      name: 'Pepperoni', 
      displayImage: pepperoniIngredientImg, 
      toppingImage: pepperoniImg 
    },
    { 
      name: 'Mushrooms', 
      displayImage: mushroomsIngredientImg, 
      toppingImage: mushroomsImg 
    },
    { 
      name: 'Olives', 
      displayImage: olivesIngredientImg, 
      toppingImage: olivesImg 
    },
  ];

  // Generate a random order
  const generateOrder = () => {
    const numberOfToppings = Math.floor(Math.random() * (ingredients.length - 2)) + 1; // Random toppings count
    const newOrder = [];
    
    // Ensure one sauce is present
    const sauces = ingredients.filter(ingredient => ingredient.name.includes('Sauce'));
    const randomSauce = sauces[Math.floor(Math.random() * sauces.length)];
    newOrder.push(randomSauce);

    // Add random toppings excluding sauces
    const toppings = ingredients.filter(ingredient => !ingredient.name.includes('Sauce'));
    for (let i = 0; i < numberOfToppings; i++) {
      const randomTopping = toppings[Math.floor(Math.random() * toppings.length)];
      if (!newOrder.includes(randomTopping)) {
        newOrder.push(randomTopping);
      }
    }
    return newOrder;
  };

  // Initialize the game with a random order
  const initializeGame = () => {
    setOrder(generateOrder());
    setPizza([]);
    setScore(0);
    setTimeLeft(30);
    setGameOver(false);
  };

  // Start the game
  const startGame = () => {
    initializeGame();
    setGameStarted(true);
  };

  useEffect(() => {
    if (timeLeft > 0 && !gameOver && gameStarted) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    } else if (timeLeft === 0) {
      setGameOver(true);
    }
  }, [timeLeft, gameOver, gameStarted]);

  const handleDrop = (e, ingredient) => {
    e.preventDefault();
    // Check if the ingredient is already added to the pizza
    if (!pizza.some(topping => topping.name === ingredient.name)) {
      setPizza([...pizza, ingredient]);
    }
  };
  
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragStart = (e, ingredient) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(ingredient));
  };

  // Handle touch events for mobile
  const handleTouchStart = (e, ingredient) => {
    e.preventDefault();
    if (!pizza.includes(ingredient)) {
      setPizza([...pizza, ingredient]);
    }
  };

  // Check the player's pizza against the order when the "Confirm Order" button is clicked
  const handleConfirmOrder = () => {
    // Create a set to hold the unique toppings from the pizza
    const uniquePizzaToppings = new Set(pizza.map(topping => topping.name));
    let correctToppings = 0;
  
    // Count how many of the order's toppings match the unique toppings on the pizza
    uniquePizzaToppings.forEach((toppingName) => {
      if (order.some(orderItem => orderItem.name === toppingName)) {
        correctToppings += 1;
      }
    });
  
    // Award points based on the correct toppings
    const scoreIncrement = correctToppings * 10; // 10 points per correct topping
    setScore(score + scoreIncrement);
  
    // Reset the pizza for the next round
    setPizza([]);
    setOrder(generateOrder()); // Generate a new order
  };
  
  

  return (
    <div className="App">
      <h1>Pizza Game</h1>
      <div className="game-info">
        <h2>Time Left: {timeLeft} seconds</h2>
        <h2>Score: {score}</h2>
      </div>

      {!gameStarted ? (
        <div className="start-screen">
          <h2>Welcome to the Pizza Game!</h2>
          <button className="start-button" onClick={startGame}>
            Start Game
          </button>
        </div>
      ) : (
        <>
          {gameOver ? (
            <div>
              <h2>Game Over! Final Score: {score}</h2>
              <button className="restart-button" onClick={initializeGame}>
                Restart Game
              </button>
            </div>
          ) : (
            <div className="game-area">
              <div className="ingredients">
                <h3>Ingredients</h3>
                {ingredients.map((ingredient) => (
                  <div
                    key={ingredient.name}
                    className="ingredient"
                    draggable
                    onDragStart={(e) => handleDragStart(e, ingredient)}
                    onTouchStart={(e) => handleTouchStart(e, ingredient)}
                  >
                    <img src={ingredient.displayImage} alt={ingredient.name} />
                    <span>{ingredient.name}</span>
                  </div>
                ))}
              </div>

              <div className="pizza-container">
                <div
                  className="pizza"
                  onDrop={(e) => {
                    const ingredient = JSON.parse(e.dataTransfer.getData("text/plain"));
                    handleDrop(e, ingredient);
                  }}
                  onDragOver={handleDragOver}
                >
                  <img src={pizzaBase } alt="Pizza Base" className="pizza-base" />
                  <img src={PizzaBoard} alt="Pizza board" className="pizza-board" />
                  {pizza.map((topping, index) => (
                    <img
                      key={index}
                      src={topping.toppingImage}
                      alt={topping.name}
                      className={`topping-image topping-${topping.name.replace(/\s+/g, '-').toLowerCase()}`}
                    />
                  ))}
                </div>
              </div>

              <div className="order">
                <h3>Current Order:</h3>
                <ul>
                  {order.map((ingredient, index) => (
                    <li key={index}>
                      <img src={ingredient.displayImage} alt={ingredient.name} className="order-image" />
                      <span>{ingredient.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="confirm-button" onClick={handleConfirmOrder}>
                Confirm Order
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Game;
