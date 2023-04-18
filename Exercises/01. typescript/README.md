# Basic Typescript - Exercise

## Overview
In this exercise we will practice the basics of typescript:
* How to create a work environment
* How to use **npm** packages
* How to run and debug our code using **VS Code**
* How to create basic classes, interfaces, and other types
* How to write async code using `Promise`s


### Steps
1. Create a work environment as we done in the session
   1. `package.json` using `npm init`
   2. `tsconfig` using `tsc --init`
   3. create the scripts to build and to start the app
   4. create `launch.json` file with debug profile
2. Install the packages `inquirer` and `@types/inquirer`
   1. These packages allow you to get user input in console applications.
   2. Read the documentation [here](https://www.npmjs.com/package/inquirer)
3. Create data model for netflix application
   1. `Show` interface will have information about TV show (name, language, genres, number of seasons, length of each episode)
   2. There should a a list of possible genres (`Action`, `Drama`, `Comedy`, `Thriller`, `Documentary`, `True Story`, and so on)
   3. Note that each show may have more than one genre.
   4. Create a list of such shows as constant
   5. `User` interface will hold information about the user: (name, language, favorite genres)
   6. Favorite genres is a collection of generes that the user likes, for each genre, a number from 1 to 5 representing how much the user like the genre. Nore that not all genres are neccessary in this collection. 
4. This is a console application, so the user interacts using a menu
   1. Present a menu with list of possible user actions
   2. The user enters a number of action to perform
   3. According to the selected action - he gets follow up questions
   4. Create the main interface loop - where you present a menu and then get a user input of the action to perform
5. Action One - allow the user to state his favorite genres
   1. The user selects the genre
   2. The user selects a number from 1 - 5 representing how much he likes the genre
6. Action Two - present the user information
   1. Presents the user info as json
7. Action Three - get list of suggested show
   1. The score for each show, is calculated by matching the genres of the show with the user favorite genres, and summing the scores of each such genre for that user


For example, if the user marked: {Drama: 1, Comedy: 5, Action: 3}, and one show has the genres [Drama, Comedy, True Story], then the score of that show for that user is Drama (1) + Comedy (5) = 6
    2. Find the 3 shows with the highest score for that user, and present them




