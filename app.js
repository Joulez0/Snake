document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const scoreDisplay = document.querySelector('span')
    const startBtn = document.querySelector('.start')

    const width = 10
    let currentIndex = 0
    let appleIndex = 0
    let currentSnake = [2, 1, 0]
    let direction = 1
    let score = 0
    let speed = 0.5
    let intervalTime = 0
    let interval = 0

    function startGame(){
        currentSnake.forEach(index => squares[index].classList.remove('snake'))
        squares[appleIndex].classList.currentIndex('apple')
        clearInterval(interval)
        score = 0
        randomApple()
        direction = 1
        scoreDisplay.innerText = score
        intervalTime = 1000
        currentSnake = [2, 1, 0]
        currentIndex = 0
        currentSnake.forEach(index => squares[index].classList.add('snake'))
        interval= setInterval(moveOutcomes, intervalTime)

        function moveOutcomes(){
            if(
                (currentSnake[0] + width >= (width * width) && direction === width) || // Snake hits bottom
                (currentSnake[0] % width === width - 1 && direction === 1) || // Snake hits right wall
                (currentSnake[0] % width === 0 && direction === -1) || // Snake hits left wall
                (currentSnake[0] - width < 0 && direction === -width) || // Snake hits top
                squares[currentSnake[0] + direction].classList.contains('snake') // Snake hits itel
                
                ) {
                    return clearInterval(interval)
                }

            const tail = currentSnake.pop()
             squares[tail].classList.remove('snake')
            currentSnake.unshift(currentSnake[0] + direction)

            if(squares[currentSnake[0]].classList.contains('apple')){
                squares[currentSnake[0]].classList.remove('apple')
                square[tail].classList.add('snake')
                currentSnake.push(tail)

                score++
                scoreDisplay.textContent = score

                clearInterval(interval)
                intervalTime = intervalTime * speed
                interval = setInterval(moveOutcomes, intervalTime)
            }
            squares[currentSnake[0]].classList.add('snake')
        }
        
        function randomApple() {
            do{
                appleIndex = Math.floor(Math.random() * squares.length)
            } while(squares[appleIndex].classList.contains('snake'))
            squares[appleIndex].classList.add('apple')
        }
    }

    function control(e){
        squares[currentIndex].classList.remove('snake')
        if (e.keyCode == 68){ // Move Right
            direction = 1
        }
        else if (e.keyCode == 87){ //Move Up
            direction = -width
        }
        else if (e.keyCode == 65){ //Move Left
            direction = -1
        }
        else if (e.keycode == 83){ //Move Down
            direction = +width
        }
    }

    document.addEventListener('keyup', control)
    startBtn.addEventListener('click', startGame)

})