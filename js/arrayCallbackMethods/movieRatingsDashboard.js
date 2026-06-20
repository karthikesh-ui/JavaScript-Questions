/*
Q5. Movie Ratings Dashboard

Arrange the ratings from highest to lowest.
*/

const ratings = [4.2, 3.8, 4.9, 2.5, 4.5, 3.2];

const sortedRatings = ratings.sort(function(a, b) {
    return b - a;
});

console.log(sortedRatings);

/*
Output:

[4.9, 4.5, 4.2, 3.8, 3.2, 2.5]
*/