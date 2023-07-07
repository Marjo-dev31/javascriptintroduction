let course = {
    name: 'JS pour les Nuls',
    price: 300,
    goals: ['Revoir les bases', ' Progresser', ' Approfondir'],
};

/*alert(course.name);
alert(course.price);
alert(course.goals[1]);*/

function getListItem(array, arrayIndex) {
    let arrayElement = array[arrayIndex];
return arrayElement
}

let firstGoal = getListItem(course.goals, 0);

alert(firstGoal);

let secondGoal = getListItem(course.goals, 1);

alert(secondGoal);
