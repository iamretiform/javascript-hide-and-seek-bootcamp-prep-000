function getFirstSelector(selector) {
    return document.querySelector(selector)
};

function nestedTarget() {
    return document.getElementById('nested')
};

function increaseRankBy(n) {
    var ranks = document.querySelectorAll('ul.ranked-list li');
        for (let i = 0; i < ranks.length; i++) {
            ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n;
    }
}
function deepestChild(){
 return document.querySelectorAll('#grand-node')[0]
};
