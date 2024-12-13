//Objects for each game


var stardewValley = {
    "title": "Stardew Valley",
    "description": "",
    "divID":"game_card_stardew_valley", // make sure this is consistent with the html!
    "themes": ["small town"],
    "gameplayStyles":["farming","life sim","co-op play"],
    "combatStyles":["moderate combat"]
};

var animalCrossing ={
    "title": "Animal Crossing: New Horizons",
    "description":"",
    "divID":"game_card_animal_crossing",
    "themes":["island","calm"],
    "gameplayStyles":["farming","life sim", "collecting","co-op play"],
    "combatStyles":["no combat"]
};

var moonstoneIsland = {
    "title":"Moonstone Island",
    "description":"",
    "divID":"game_card_moonstone_island",
    "themes":["island","magic","alchemist"],
    "gameplayStyles":["farming", "life sim", "collecting"],
    "combatStyles":["card based combat"]
};

var myTimeAtPortia = {
    "title":"My Time At Portia",
    "description":"",
    "divID":"game_card_mytime_at_portia",
    "themes":["small town","open world","calm"],
    "gameplayStyles":["life sim", "collecting","building"],
    "combatStyles":["moderate combat"]
};
var aShortHike ={
    "title":"A Short Hike",
    "description":"",
    "divID":"game_card_short_hike",
    "themes":["calm","open world"],
    "gameplayStyles":["adventure", "life sim"],
    "combatStyles":["no combat"]
};

var fireEmblem ={
    "title":"Fire Emblem: Three Houses",
    "divID":"game_card_fire_emblem",
    "themes":["calm","medieval fantasy"],
    "gameplayStyles":["roleplay","strategy"],
    "combatStyles":["turn based combat"]
}

var zeldaBotw={
"title":"Zelda: Breath of the Wild",
"divID":"game_card_zelda_botw",
"themes":["calm","open world"],
"gameplayStyles":["roleplay","adventure"],
"combatStyles":["moderate combat", "challenging combat"]
};
var dreamlightValley = {
"title": "Disney Dreamlight Valley",
"divID":"game_card_dreamlight_valley",
"themes":["open world","magic","calm"],
"gameplayStyles":["farming","collecting","building"],
"combatStyles":["no combat"]
};

var bearAndBreakfast = {
    "title":"Bear and Breakfast",
    "divID":"game_card_bear_and_breakfast",
    "themes":["open world", "calm"],
    "gameplayStyles":["collecting","life sim","adventure"],
    "combatStyles":["no combat"]
};

var fieldsOfMistria = {
    "title":"Fields of Mistria",
    "divID":"game_card_fields_of_mistria",
    "themes":["small town","magic","calm"],
    "gameplayStyles":["farming","life sim","building","collecting"],
    "combatStyles":["minimal combat","moderate combat"]
};

var aLittleToTheLeft = {
    "title":"A Little to the Left",
    "divID":"game_card_a_little_to_the_left",
    "themes":["calm"],
    "gameplayStyles":["puzzles"],
    "combatStyles":["no combat"]
}

var unpacking = {
    "title":"Unpacking",
    "divID":"game_card_unpacking",
    "themes":["calm"],
    "gameplayStyles":["puzzles"],
    "combatStyles":["no combat"]
}

//Put all games into an array to then search through them -- Via loop
var games =[stardewValley, animalCrossing,moonstoneIsland,myTimeAtPortia,aShortHike,fireEmblem,zeldaBotw,dreamlightValley,bearAndBreakfast,fieldsOfMistria,aLittleToTheLeft,unpacking];


//Empty arrays to hold onto the selected filters, this will hold onto the CURRENT 
//selections of each filter type
var selectedThemes = [];
var selectedGameplayStyles = [];
var selectedCombatStyles = [];

//Grab each button by id from the HTML THEN::: Create a function for each selected option!
    //****THEMES ***** */
    // var game_card = document.getElementsByClassName("game_card");
    // game_card.style.display = "none";
window.onload = pageReady;
function pageReady(){
   
    var btnSmallTown = document.getElementById("small_town_btn");
    btnSmallTown.onclick=function(event){
        event.preventDefault();
        onThemeToggled("small town", btnSmallTown);
    }

    var btnOpenWorld = document.getElementById("open_world_btn");
    btnOpenWorld.onclick = function(event){
        event.preventDefault();
        onThemeToggled("open world", btnOpenWorld);
    }

    var btnIsland = document.getElementById("island_btn");
    btnIsland.onclick = function(event){
        event.preventDefault();
        onThemeToggled("island", btnIsland);
    }

    var btnAdventurer = document.getElementById("adventurer_btn")
    btnAdventurer.onclick = function(event){
        event.preventDefault();
        onThemeToggled("adventurer",btnAdventurer);
    }
    var btnMagic = document.getElementById("magic_btn")
    btnMagic.onclick = function(event){
        event.preventDefault();
        onThemeToggled("magic",btnMagic);
    }
    var btnMedivalFantasy = document.getElementById("medieval_fantasy_btn")
    btnMedivalFantasy.onclick=function(event){
        event.preventDefault();
        onThemeToggled("medieval fantasy",btnMedivalFantasy);
    }

    var btnAlchemist = document.getElementById("alchemist_btn");
    btnAlchemist.onclick = function(event){
        event.preventDefault();
        onThemeToggled("alchemist", btnAlchemist);
    }
    var btnCalm = document.getElementById("calm_btn");
    btnCalm.onclick=function(event){
        event.preventDefault();
        onThemeToggled("calm",btnCalm);

    }


        //****GAME PLAY STYLES */
    var btnAdventure = document.getElementById("adventure_btn");
    btnAdventure.onclick = function(event){
        event.preventDefault();
        onGameplayStyleToggled("adventure",btnAdventure);
    }
    var btnBuilding = document.getElementById("building_btn");
    btnBuilding.onclick = function(event){
        event.preventDefault();
        onGameplayStyleToggled("building",btnBuilding);
    }

    var btnFarming = document.getElementById("farming_btn");
    btnFarming.onclick = function(event){
        event.preventDefault();
        onGameplayStyleToggled ("farming",btnFarming);
    }

    var btnCollecting = document.getElementById("collecting_btn");
    btnCollecting.onclick = function(event){
        event.preventDefault();
        onGameplayStyleToggled ("collecting",btnCollecting);
    }
    var btnLifeSim = document.getElementById("life_sim_btn");
    btnLifeSim.onclick = function (event){
        event.preventDefault();
        onGameplayStyleToggled("life sim",btnLifeSim);
    }

    var btnPuzzles = document.getElementById("puzzle_btn");
    btnPuzzles.onclick = function (event){
        event.preventDefault();
        onGameplayStyleToggled("puzzles", btnPuzzles);
    }

    var btnRoleplayGame = document.getElementById("roleplay_btn");
    btnRoleplayGame.onclick = function(event){
        event.preventDefault();
        onGameplayStyleToggled("roleplay",btnRoleplayGame);
    }

    var btnMultiPlayer = document.getElementById("co-op_btn");
    btnMultiPlayer.onclick = function(event){
        event.preventDefault();
        onGameplayStyleToggled("co-op play",btnMultiPlayer)
    }

        //COMBAT STYLES*****
    var btnNoCombat = document.getElementById("no_combat_btn");
    btnNoCombat.onclick = function(event){
        event.preventDefault();
        onCombatStyleToggled("no combat",btnNoCombat);
    }

    var btnMinimalCombat = document.getElementById("minimal_btn");
    btnMinimalCombat.onclick = function(event){
        event.preventDefault();
        onCombatStyleToggled ("minimal combat",btnMinimalCombat);
    }
    var btnCardBasedCombat = document.getElementById("card_based_btn");
    btnCardBasedCombat.onclick = function(event){
        event.preventDefault();
        onCombatStyleToggled ("card based combat",btnCardBasedCombat);
    }

    var btnTurnBasedCombat = document.getElementById("turn_based_btn");
    btnTurnBasedCombat.onclick = function(event){
        event.preventDefault();
        onCombatStyleToggled("turn based combat", btnTurnBasedCombat);
    }

    var btnModerateCombat = document.getElementById("moderate_btn");
    btnModerateCombat.onclick = function(event){
        event.preventDefault();
        onCombatStyleToggled("moderate combat",btnModerateCombat);
    }

    var btnChallengingCombat = document.getElementById("challenging_btn");
    btnChallengingCombat.onclick = function(event){
        event.preventDefault();
        onCombatStyleToggled("challenging combat", btnChallengingCombat);
    }

    //Submit selection button
    var btnApplySelection = document.getElementById("apply_selection_btn");
    btnApplySelection.onclick = applyFilters;
}
//FUNCTION: 
// Theme Toggled: Checks if themeID exists in selected themes. 
function onThemeToggled(themeID,button){
    button.style.background = "#616161";
    if(selectedThemes.includes(themeID))
    {
        //toggle button off or remove the selected theme from selectedThemes. 
        selectedThemes.splice(selectedThemes.indexOf(themeID), 1);
        button.style.background = "#F4F2F2";
    }
    else
    {
        selectedThemes.push(themeID);
    }
}

function onGameplayStyleToggled(gameplayID,button){

    button.style.background = "#616161";
    if(selectedGameplayStyles.includes(gameplayID)){

        //toggle button off or remove the selected gameplay style from selectedGameplayStyles
        selectedGameplayStyles.splice(selectedGameplayStyles.indexOf(gameplayID), 1);
        button.style.background = "#F4F2F2";
    }
    else{
        selectedGameplayStyles.push(gameplayID);
    }

    console.log(selectedGameplayStyles);
}

// function onCombatStyleToggled(combatID,button)
function onCombatStyleToggled(combatID,button){
    button.style.background = "#616161";
    if(selectedCombatStyles.includes(combatID)){
        selectedCombatStyles.splice(selectedCombatStyles.indexOf(combatID), 1);
        button.style.background = "#F4F2F2";
    }
    else{
        selectedCombatStyles.push(combatID);
    }
    console.log(selectedCombatStyles);
}
//Function for applying filters
function applyFilters(){
    for (var i = 0; i < games.length; i++){
        var currentGame = games[i];
        var currentGameDivID = currentGame.divID;

        //setting current game div to be visible:
        var currentGameDiv = document.getElementById(currentGameDivID);
        
        var gameMeetsFilters = false;

        // Does this game have any of the selected themes?
        for (var j = 0; j < selectedThemes.length; j++)
        {
            var currentTheme = selectedThemes[j];

            if (currentGame.themes.includes(currentTheme))
            {
                gameMeetsFilters = true;
            }
        }

        // Does this game have any of the selected gameplay styles?
        for (var k = 0; k < selectedGameplayStyles.length; k++)
        {
            var currentGameplayStyle = selectedGameplayStyles[k];

            if(currentGame.gameplayStyles.includes(currentGameplayStyle))
            {
                gameMeetsFilters = true;
            }
        }
        // Does this game have any of the selected combat styles?
        for (var l = 0; l < selectedCombatStyles.length; l++)
        {
            var currentCombatStyle = selectedCombatStyles[l];

            if(currentGame.combatStyles.includes(currentCombatStyle))
            {
                gameMeetsFilters = true;
            }
        }
        // If it does, allow it to display. If not, hide it.
        if (gameMeetsFilters === true)
        {
            currentGameDiv.style.display = "block";
        }
        else
        {
            currentGameDiv.style.display = "none";
        }
    }
}