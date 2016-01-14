angular.module('game', [])

.controller('GameCtrl', function($scope, $rootScope, $location) {

    // =================================================
    // Necessary datas
    // =================================================

    // Recuperate board width and height
    var boardViewport = {
        width  : $('#board-wrapper').width(),
        height : $('#board-wrapper').height()
    };

    var cellValues = $rootScope.cellValues;

    $scope.gameEnded = false;

    // =================================================
    // Board initialization
    // =================================================

    // Function to append all necessary cells to DOM depending on rootScope cellValues
    $scope.createBoard = function(){

        for(y = 0; y < cellValues.yValue; y++){

            // Append as many rows as necessary
            var cellContainer = $('<ul class="cell-container"></ul>');
            $('#board-wrapper').append(cellContainer);


            for(x = 0; x < cellValues.xValue; x++){
                // Append as many columns as necessary in a row
                cellContainer.append('<li class="cell" data-x="'+x+'" data-y="'+y+'" data-occupation-type="0">a</li>');
            }
        }

        // Attribuer la height et la width pour l'ensemble des cellules et leur conteneurs
        $('.cell').css('width', 'calc(100% / '+$rootScope.cellValues.xValue+')');
        $('.cell-container').css('height', 'calc(100% / '+$rootScope.cellValues.yValue+')');
    };

    // =================================================
    // Create panws and other
    // =================================================

    // Create and place the king
    $scope.createKing = function(){

        // Get central position of board
        var kingPositionX = Math.floor(cellValues.xValue / 2);
        var kingPositionY = Math.floor(cellValues.yValue / 2);

        // Append the king to the DOM
        var king = $('<div class="king" data-type="1"><img src="img/king.svg"></img></div>');
        $('#game-wrapper #pawn-wrapper').append(king);

        // Define width and height of element depending on cell width and height
        king.css('width', 'calc(100% / '+$rootScope.cellValues.xValue+')');
        king.css('height', 'calc(100% / '+$rootScope.cellValues.yValue+')');

        // Move the king to it's position
        $scope.moveToCell(king, 1, kingPositionX, kingPositionY);
    };

    // Create an enemy
    // Return the enemy DOM element
    $scope.createEnemy = function(){

        // Append an enemy to the DOM
        var enemy = $('<div class="enemy" data-type="2"><img src="img/pawn.svg"></img></div>');
        $('#game-wrapper #pawn-wrapper').append(enemy);

        // Define width and height of element depending on cell width and height
        enemy.css('width', 'calc(100% / '+$rootScope.cellValues.xValue+')');
        enemy.css('height', 'calc(100% / '+$rootScope.cellValues.yValue+')');

        // Return the enemy DOM element
        return enemy;
    };

    // Create an obstacle
    // Return the obstacle DOM element
    $scope.createObstacle = function(){

        // Append an obstacle to the DOM
        var obstacle = $('<div class="obstacle" data-type="3"><img src="img/sword.svg"></img></div>');
        $('#game-wrapper #pawn-wrapper').append(obstacle);

        // Define width and height of element depending on cell width and height
        obstacle.css('width', 'calc(100% / '+$rootScope.cellValues.xValue+')');
        obstacle.css('height', 'calc(100% / '+$rootScope.cellValues.yValue+')');

        // Return the obstacle DOM element
        return obstacle;
    };

    // Create a bomb
    // Return the bomb DOM element
    $scope.createBomb = function(){

        // Append an bomb to the DOM
        var bomb = $('<div class="bomb" data-type="5"><img src="img/unlit-bomb-black.svg"></img></div>');
        $('#game-wrapper #pawn-wrapper').append(bomb);

        // Define width and height of element depending on cell width and height
        bomb.css('width', 'calc(100% / '+$rootScope.cellValues.xValue+')');
        bomb.css('height', 'calc(100% / '+$rootScope.cellValues.yValue+')');

        // Return the bomb DOM element
        return bomb;
    };


    // Créer et placer un bonus de vie
    // Return the bonus DOM element
    $scope.createBonus = function(){

        // Append an bonus to the DOM
        var bonus = $('<div class="bonus" data-type="4"><img src="img/heart-bottle.svg"></img></div>');
        $('#game-wrapper #pawn-wrapper').append(bonus);

        // Define width and height of element depending on cell width and height
        bonus.css('width', 'calc(100% / '+$rootScope.cellValues.xValue+')');
        bonus.css('height', 'calc(100% / '+$rootScope.cellValues.yValue+')');

        // Return the bonus DOM element
        return bonus;
    };

    // =================================================
    // Initialization and placement of pawns and other
    // The number of elements initialized depends on the difficulty defined in rootScope
    // =================================================

    // Init enemies
    $scope.initEnemies = function(enemyNb){

        for(e = 0; e < enemyNb; e++){

            // Get a random coordinate
            var randEnemyPos = $scope.createRandCoord();

            // Create a new enemy
            var newEnemy = $scope.createEnemy();

            // Move the enemy to a random coordinate
            $scope.moveToCell(newEnemy, 2, randEnemyPos.x, randEnemyPos.y);
        }

    };

    // Init obstacles
    $scope.initObstacle = function(obstacleNb){

        for(e = 0; e < obstacleNb; e++){

            // Get a random coordinate
            var randObstaclePos = $scope.createRandCoord();

            // Create a new enemy
            var newObstacle = $scope.createObstacle();

            // Move the enemy to a random coordinate
            $scope.moveToCell(newObstacle, 3, randObstaclePos.x, randObstaclePos.y);
        }

    };

    // Init bonuses
    $scope.initBonus = function(bonusNb){

        for(e = 0; e < bonusNb; e++){

            // Get a random coordinate
            var randObstaclePos = $scope.createRandCoord();

            // Create a new enemy
            var newBonus = $scope.createBonus();

            // Move the enemy to a random coordinate
            $scope.moveToCell(newBonus, 4, randObstaclePos.x, randObstaclePos.y);
        }

    };

    // Init bombs
    $scope.initBomb = function(bonusNb){

        for(e = 0; e < bonusNb; e++){

            // Get a random coordinate
            var randObstaclePos = $scope.createRandCoord();

            // Create a new enemy
            var newBomb = $scope.createBomb();

            // Move the enemy to a random coordinate
            $scope.moveToCell(newBomb, 5, randObstaclePos.x, randObstaclePos.y);
        }

    };

    // =================================================
    // Tools functions
    // =================================================

    // Create a random coordinate where cell is free
    // Returns an object with x and y properties
    $scope.createRandCoord = function(){

        // Get all free cells
        var freeCells = $('.cell[data-occupation-type="0"]');

        // Select a random cell within free cells
        var randomId = Math.floor(Math.random() * (freeCells.length -1)) + 0;

        var selectedCell = freeCells[randomId];

        // Create coord object with x and y properties
        var coord = {
            x : $(selectedCell).data('x'),
            y : $(selectedCell).data('y'),
        };

        // Return the coord object
        return coord;
    };

    // Verify the existence of a cell depending on x and y
    // Return bools
    $scope.verifyCellExistence = function(x, y){

        // Target a cell with x and y datas
        var checkedCell = $('.cell[data-x="'+x+'"][data-y="'+y+'"]');

        // Return bool depending on cell length
        if(checkedCell.length > 0){
            return true;
        } else{
            return false;
        }
    };

    // Check all possible moves depending on current elem position
    // Takes an element as parameter
    // Returns and object with the name of the move, a bool if the move is allowed and the position after move
    $scope.checkMovesPossibilities = function(elem){

        // Get current element x and y datas
        var elemX = elem.data('x');
        var elemY = elem.data('y');

        // For each position, check if cell exists
        var allowedPos = {
            topleft: {
                allowed: $scope.verifyCellExistence(elemX - 1, elemY - 1),
                value: [elemX - 1, elemY -1]
            },
            top: {
                allowed: $scope.verifyCellExistence(elemX, elemY - 1),
                value: [elemX, elemY - 1]
            },
            topright: {
                allowed: $scope.verifyCellExistence(elemX + 1, elemY - 1),
                value: [elemX + 1, elemY - 1]
            },
            centerleft: {
                allowed: $scope.verifyCellExistence(elemX - 1, elemY),
                value: [elemX - 1, elemY]
            },
            center: {
                allowed: $scope.verifyCellExistence(elemX, elemY),
                value: [elemX, elemY]
            },
            centerright: {
                allowed: $scope.verifyCellExistence(elemX + 1, elemY),
                value: [elemX + 1, elemY]
            },
            bottomleft: {
                allowed: $scope.verifyCellExistence(elemX - 1, elemY + 1),
                value: [elemX - 1, elemY + 1]
            },
            bottom: {
                allowed: $scope.verifyCellExistence(elemX, elemY + 1),
                value: [elemX, elemY +1]
            },
            bottomright: {
                allowed: $scope.verifyCellExistence(elemX + 1, elemY + 1),
                value: [elemX + 1, elemY +1]
            }
        };

        // Return the object
        return allowedPos;
    };

    // Calculate the distance between and element and it's target
    // Returns an object with the name of the move and the position after the move
    $scope.calculateObjectPath = function(elem, targetElem){

        // Get target x and y datas
        var targetX = targetElem.data('x');
        var targetY = targetElem.data('y');

        // Check all available moves for an element
        var availMoves = $scope.checkMovesPossibilities(elem);

        // Define the closestMove object
        var closestMove = {
            value: 9999,
            name: "",
            finalPosition: []
        };

        // For each moves that exist in available moves
        for(var moves in availMoves){

            // If the move is allowed
            if(availMoves[moves].allowed === true){

                // To calculate the distance between cartesian coordinates, we rely on pythagoras theorem
                // To see the formula : https://fr.wikipedia.org/wiki/Distance_entre_deux_points_sur_le_plan_cart%C3%A9sien
                var distance = Math.sqrt(Math.pow(availMoves[moves].value[0] - targetX, 2) + Math.pow(availMoves[moves].value[1] - targetY, 2));

                // If the distance found is smaller than the current distance value in the closestMove object, replace it
                if(distance < closestMove.value){

                    closestMove.value = distance;

                    // Replace the name of the move and the x and y coordinates
                    closestMove.name = moves;
                    closestMove.finalPosition = availMoves[moves].value;
                }
            }
        }

        // Return the closestMove object
        return closestMove;
    };

    // Determine if game is ended or life remains
    $scope.endGame = function(){
        if($scope.lifeNb > 1){
            $scope.gameEnded = false;
            $rootScope.initGame(true);
            $scope.lifeNb = $scope.lifeNb - 1;
        } else{
            $rootScope.lastScore = $scope.currentScore;
            $location.path('/score');
        }
    };

    // Determine if there is a collision when an element gets to a certain cell position
    // Elem types : 0 = not occupied / 1 = king / 2 = ennemy / 3 = obstacle / 4 = lives / 5 bombs
    $scope.determineCollision = function(elem, targetPos){

        if($scope.gameEnded === true){
            return;
        }

        // Check targeted cell
        var targetedCell = $('.cell[data-x="'+targetPos[0]+'"][data-y="'+targetPos[1]+'"]');

        var occType = targetedCell.data('occupation-type');

        // If cell is not occupied return
        if(occType <= 0){
            return false;
        }
        // If cell is occupied
        else{

            // Only kings and pawns can move
            // only theses elements have data-type defined
            var elemType = elem.data('type');
            // If king is elem
            if(elemType == '1'){
                switch(occType){

                    // If king meets ennemy : Kill king and end game
                    case 2:
                        $scope.removeElement(elem);
                        $scope.gameEnded = true;
                        return false;
                    // If king meets obstacle : Kill king and end game
                    case 3:
                        $scope.removeElement(elem);
                        $scope.removeElement($('#pawn-wrapper div[data-type="3"][data-x="'+targetPos[0]+'"][data-y="'+targetPos[1]+'"]'));
                        $scope.gameEnded = true;
                        return false;
                    // If king meets life bonus : Add life to total life
                    case 4:
                        $scope.removeElement($('#pawn-wrapper div[data-type="4"][data-x="'+targetPos[0]+'"][data-y="'+targetPos[1]+'"]'));
                        $scope.lifeNb = $scope.lifeNb + 1;
                        break;
                    // If king meets bombs : Add bomb to total bombs
                    case 5:
                        $scope.removeElement($('#pawn-wrapper div[data-type="5"][data-x="'+targetPos[0]+'"][data-y="'+targetPos[1]+'"]'));
                        $scope.bombNb = $scope.bombNb + 1;
                        break;
                }
            }

            // If pawn is elem
            else if(elemType =='2'){

                switch(occType){
                    // If pawn meets king : Kill king and end game
                    case 1:
                        $scope.removeElement($('#pawn-wrapper div[data-type="1"]'));
                        $scope.gameEnded = true;
                        return false;
                    // If pawn meets pawn : Kill both pawns
                    case 2:
                        $scope.removeElement(elem);
                        $scope.currentScore = $scope.currentScore + (10 * $rootScope.userparams.difficulty);
                        $scope.removeElement($('#pawn-wrapper div[data-type="2"][data-x="'+targetPos[0]+'"][data-y="'+targetPos[1]+'"]'));
                        return true;
                    // If pawn meets obstacle : Kill pawn and remove obstacle
                    case 3:
                        $scope.removeElement(elem);
                        $scope.currentScore = $scope.currentScore + (10 * $rootScope.userparams.difficulty);
                        $scope.removeElement($('#pawn-wrapper div[data-type="3"][data-x="'+targetPos[0]+'"][data-y="'+targetPos[1]+'"]'));
                        return true;
                    // If pawn meets life bonus : Remove life bonus
                    case 4:
                        $scope.removeElement($('#pawn-wrapper div[data-type="4"][data-x="'+targetPos[0]+'"][data-y="'+targetPos[1]+'"]'));
                        break;
                    // If pawn meets bomb : Remove bomb
                    case 5:
                        $scope.removeElement($('#pawn-wrapper div[data-type="5"][data-x="'+targetPos[0]+'"][data-y="'+targetPos[1]+'"]'));
                        break;
                }
            }

            return true;
        }
    };

    // =================================================
    // Action functions
    // =================================================

    // Move all the enemies at once
    $scope.moveEnemies = function(){

        // Find all the enemies on the board
        var allEnemies = $('#pawn-wrapper').find('.enemy');

        for(m = 0; m < allEnemies.length; m++){

            var currentEnemy = $(allEnemies[m]);

            // Check the closestEnemyMove by using the calculateObjectPath method
            var closestEnemyMove = $scope.calculateObjectPath(currentEnemy, $('.king'));

            // Move the enemy to the cell
            $scope.moveToCell(currentEnemy, 2, closestEnemyMove.finalPosition[0], closestEnemyMove.finalPosition[1]);
        }
    };

    // Move to a target cell
    // The type parameter is used to determine what kind of element is occupying the cell
    // Types :
    // 0 = not occupied / 1 = king / 2 = ennemy / 3 = obstacle / 4 = lives / 5 bombs
    $scope.moveToCell = function(elem, type, x, y){

        // Save old position in temp variables
        var oldPosX = elem.data('x');
        var oldPosY = elem.data('y');

        // Unoccupy old position cell
        if(oldPosX !== undefined && oldPosY !== undefined){

            // Find old cell by position
            var oldCell = $('.cell[data-x='+oldPosX+'][data-y='+oldPosY+']');

            // Unoccupy it
            if(oldCell.length > 0 && oldCell.data('occupation-type') > 0){
                oldCell.data('occupation-type', 0);
                oldCell.attr('data-occupation-type', 0);
            }
        }

        // Calculate left an top positions
        var xValue = (100 / $rootScope.cellValues.xValue) * x;
        var yValue = (100 / $rootScope.cellValues.yValue) * y;

        // Position the element
        elem.css({
            'top': yValue+'%',
            'left': xValue+'%'
        });

        // Pass the current position datas to the element
        elem.data('x', x);
        elem.data('y', y);
        elem.attr('data-x', x);
        elem.attr('data-y', y);

        var collision = $scope.determineCollision(elem, [x, y]);

        // Pass the occupation type of current element in specifig cell;
        var getCurrentElem = $('#pawn-wrapper div[data-x='+x+'][data-y='+y+']');

        if(getCurrentElem.length > 0){
            $('.cell[data-x='+x+'][data-y='+y+']').data('occupation-type', getCurrentElem.data('type'));
            $('.cell[data-x='+x+'][data-y='+y+']').attr('data-occupation-type', getCurrentElem.data('type'));
        } else{
            $('.cell[data-x='+x+'][data-y='+y+']').data('occupation-type', 0);
            $('.cell[data-x='+x+'][data-y='+y+']').attr('data-occupation-type', 0);
        }

        if($scope.gameEnded === true){
            $scope.endGame();
            return;
        }
    };

    // Removes an element from the DOM
    $scope.removeElement = function(elem){

        // Get element coordinates
        var elemX = elem.data('x');
        var elemY = elem.data('y');

        // Get old cell
        var oldCell = $('.cell[data-x="'+elemX+'"][data-y="'+elemY+'"]');

        // Unoccupy current cell
        oldCell.data('occupation-type', 0);
        oldCell.attr('data-occupation-type', 0);

        // Destroy element
        elem.remove();
    };

    // =================================================
    // Footer Tabs Actions
    // =================================================

    // Bomb a random enemy
    $scope.bomb = function(){

        if($scope.bombNb <= 0){
            return;
        }

        $scope.bombNb = $scope.bombNb - 1;

        // Get all enemies
        var enemies = $('.enemy');

        // Select a random cell within free cells
        var randomId = Math.floor(Math.random() * (enemies.length -1)) + 0;

        // Selected enemy
        var selectedEnemy = $(enemies[randomId]);

        // Destroy enemy
        $scope.removeElement(selectedEnemy);

        // Move enemies
        $scope.moveEnemies();
    };

    // Restart game
    $scope.restart = function(){
        $rootScope.initGame();
    };

    // Teleport the king in random coordinates
    $scope.teleport = function(){
        // Get a random coordinate
        var randTeleCoord = $scope.createRandCoord();

        // Move the king to the generated coordinates
        $scope.moveToCell($('.king'), 1, randTeleCoord.x, randTeleCoord.y);

        // Move enemies
        $scope.moveEnemies();
    };

    // Leave the game and reinitialize the board
    $scope.quit = function(){
        $location.path("/home");
        $rootScope.initGame();
    };

    // =================================================
    // User actions
    // =================================================

    // Move the king
    $scope.moveKing = function(position){

        var trigerrer = $('#'+position+'');

        var getKingPositions = $scope.checkMovesPossibilities($('.king'));

        if(getKingPositions[position].allowed === true){

            $scope.moveToCell($('.king'), 1, getKingPositions[position].value[0], getKingPositions[position].value[1]);

            $scope.moveEnemies();

            trigerrer.addClass('clicked');

            trigerrer.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
                trigerrer.removeClass('clicked');
                //$('#direction-controls').removeClass('active');
            });

        } else{
            return;
        }
    };

    // =================================================
    // Game initialization
    // =================================================

    // initGame is defined in rootScope so it can be called in any view
    $rootScope.initGame = function(e){

        // Initialize the board
        $scope.createBoard();

        // Empty the pawn wrapper
        $('#pawn-wrapper').empty();

        // Create the king an place it
        $scope.createKing();

        // Create as many enemies as defined in rootScope
        $scope.initEnemies($rootScope.userparams.enemyNumber);

        // Create as many obstacles as defined in rootScope
        $scope.initObstacle($rootScope.userparams.obstacleNumber);

        // Create as many life bonuses as defined in rootScope
        $scope.initBonus($rootScope.userparams.lifeOnMap);

        // Create as many bombs as defined in rootScope
        $scope.initBomb($rootScope.userparams.bombOnMap);

        // Don't change user stats if life remains
        if(e !== true){
            // Init score
            $scope.currentScore = 0;

            // Init number of lives
            $scope.lifeNb = $rootScope.userparams.lifeNb;

            // Init number of bombs
            $scope.bombNb = $rootScope.userparams.bombNb;
        }
    };

    $rootScope.initGame();
});
