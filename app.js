const naturalEmoji = document.querySelector('.natural')
const enhancedEmoji =document.querySelector('.enhanced')

//eventListener

naturalEmoji.addEventListener('click', () => {
    if (enhancedEmoji.classList.contains('enhanced')) {
    enhancedEmoji.classList.add('active');
    naturalEmoji.classList.remove('active');
    }
});

enhancedEmoji.addEventListener('click', () => {
    if(naturalEmoji.classList.contains('natural')) {
    naturalEmoji.classList.add('active');
    enhancedEmoji.classList.remove('active');
    }
});