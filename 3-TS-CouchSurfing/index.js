"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewTotalDisplay = void 0;
// Write a function that will only accept numbers and attend to
// all TypeScript weakness flags.
exports.reviewTotalDisplay = document.querySelector("#reviews");
var reviews = [
    {
        name: "Sheia",
        stars: 5,
        loyaltyUser: true,
        date: "01-04-2021",
    },
    {
        name: "Andrzej",
        stars: 3,
        loyaltyUser: false,
        date: "28-03-2021",
    },
    {
        name: "Omar",
        stars: 4,
        loyaltyUser: true,
        date: "27-03-2021",
    },
];
var displayReviewTot = function (x) {
    exports.reviewTotalDisplay.innerHTML = "review total: " + x.toString();
};
displayReviewTot(reviews.length);
