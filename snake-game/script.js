document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('game-board');
    const gridSize = 15;
    const snakeSize = 20;

    let snake = [{ x: 0, y: 0 }];
    let food = getRandomPosition();
    let direction = 'right';

    function getRandomPosition() {
        const x = Math.floor(Math.random() * gridSize) * snakeSize;
        const y = Math.floor(Math.random() * gridSize) * snakeSize;
        return { x, y };
    }

    function draw() {
        board.innerHTML = '';
        snake.forEach(segment => {
            const snakeElement = document.createElement('div');
            snakeElement.classList.add('snake');
            snakeElement.style.left = `${segment.x}px`;
            snakeElement.style.top = `${segment.y}px`;
            board.appendChild(snakeElement);
        });

        const foodElement = document.createElement('div');
        foodElement.classList.add('food');
        foodElement.style.left = `${food.x}px`;
        foodElement.style.top = `${food.y}px`;
        board.appendChild(foodElement);
    }

    function move() {
        const head = { ...snake[0] };
        switch (direction) {
            case 'up':
                head.y -= snakeSize;
                break;
            case 'down':
                head.y += snakeSize;
                break;
            case 'left':
                head.x -= snakeSize;
                break;
            case 'right':
                head.x += snakeSize;
                break;
        }

        snake.unshift(head);

        if (head.x === food.x && head.y === food.y) {
            food = getRandomPosition();
        } else {
            snake.pop();
        }

        if (
            head.x < 0 ||
            head.x >= gridSize * snakeSize ||
            head.y < 0 ||
            head.y >= gridSize * snakeSize ||
            collisionWithItself()
        ) {
            alert('Game Over!');
            resetGame();
        }

        draw();
    }

    function collisionWithItself() {
        const [head, ...body] = snake;
        return body.some(segment => segment.x === head.x && segment.y === head.y);
    }

    function resetGame() {
        snake = [{ x: 0, y: 0}];
        food = getRandomPosition();
        direction = 'right';
        draw();
    }

    function handleKeyPress(event) {
        switch (event.key) {
            case 'ArrowUp':
                direction = 'up';
                break;
            case 'ArrowDown':
                direction = 'down';
                break;
            case 'ArrowLeft':
                direction = 'left';
                break;
            case 'ArrowRight':
                direction = 'right';
                break;
        }
    }

    draw();
    setInterval(move, 150);
    document.addEventListener('keydown', handleKeyPress);
});
