// MOCK DB
const quotes = [
'Eu não desperdiçarei giz', 'Eu não andarei de skate nos corredores', 'Eu não arrotarei na aula',
'Eu não instigarei revoluções', 'Eu não vou desenhar mulheres nuas na sala de aula', 'Eu não vi Elvis',
'Eu não chamarei minha professora de Bolo Quente', 'Chiclete de alho não é engraçado',
'Eles estão rindo de mim, e não comigo.', 'Eu não gritarei “Fogo” em uma sala de aula cheia',
'Eu não incentivarei os outros a voarem', 'Alcatrão não é brincadeira', 'Eu não vou xerocar meu traseiro',
'Eu não trocarei de calças com os outros', 'Eu não sou uma velha de 32 anos',
'Eu não vou fazer aquela coisa com minha língua', 'Eu não dirigirei o carro do diretor',
'Eu não vou jurar fidelidade ao Bart', 'Eu não venderei propriedades da escola', 'Não devo dar jeitinhos',
'Eu não irei muito longe com essa atitude', 'Eu não farei barulhos de pum na sala de aula',
'Eu não venderei terras da florida', 'Eu não engordurarei as barras do macaco',
'Eu não me esconderei atrás da quinta emenda', 'Eu não farei nada de mau nunca mais', 'Não serei exibido',
'Eu não vou dormir durante minha educação'];

// ELEMNTS

const blackBoard = document.getElementById('blackBoard');
const userInput = document.getElementById('iterationsQuantity');
const submitButton = document.getElementById('submitButton');
const erasedCounterDisplay = document.getElementById('erasedDisplay');
const lastLinesCounterDisplay = document.getElementById('lastIterationLinesCount');


//console.log(selectedQuote);

// GLOBAL VARIABLES

const selectedQuote = quotes[(quotes.length)-3];
let maxColumns = 0;

// LISTENERS

//window.addEventListener('resize', bbLength);
submitButton.addEventListener('click', writeIt);

// FUNCTIONS

/*
function bbLength() {
    let renderedWidth = blackBoard.getBoundingClientRect().width; //get the element rendered width
    console.log(Math.floor(renderedWidth));
    let currentLength = Math.round((renderedWidth * 11) / 20.4);
    console.log(currentLength);
    blackBoard.setAttribute('maxlength', currentLength);
}
*/

function writeIt() {
    probeWidth();
    setTimeout(()=>{
        i = userInput.value;
        fullColumnsQuantity = Math.floor(i/11);
        incompleteColumnLines = + (i%11);
        columnsQuantity = fullColumnsQuantity + Math.ceil(incompleteColumnLines/100);
        console.log(i);
        console.log(columnsQuantity);
        while (i>0){
        blackBoard.innerHTML += `<li class="bartText">${selectedQuote}</li>`;
        i--;
    }
    },10)
    
}

function probeWidth() {
    blackBoard.innerHTML += `<li class="bartText">${selectedQuote}</li>`;
    //needed for font style to render prior geting the width, else we get the with for cursive...
    setTimeout(()=>{
        let testElement = document.querySelector('.bartText');
        testElement.style.position = 'absolute';
        let blackBoardSize = blackBoard.offsetWidth;
        let testElementSize = testElement.offsetWidth;
        console.log(testElementSize);
        console.log(blackBoardSize);

        if (testElementSize > blackBoardSize){
            console.log('deu ruim!');
            maxColumns  = 1;
        }else{
            maxColumns = Math.floor(blackBoardSize / testElementSize);
            console.log(maxColumns);
        }

        blackBoard.innerHTML = "";
    }, 3);
    
}
