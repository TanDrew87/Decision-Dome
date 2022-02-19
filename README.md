# Decision Dome
# Self-Made Web Application Project by An Nguyen
# Starting Date: 2/11/2022

## Table of Contents
1. [Client Requirements](#client-requirements)
2. [Specifications](#specifications)
3. [Technologies](#technologies)
4. [Coding Languages](#coding-languages)
5. [Collaboration](#collaboration) 
6. [Download](#download)
7. [Upload](#upload)

<a name="client-requirements"></a>
## Client Requirements
**"I want a web application that lets me spin a wheel, roll a die, flip a coin, and pick from a deck of cards so that I can make choices from certain numbers of items. For example, if I want to choose between what meat to buy for dinner (beef, pork, chicken, fish), I can input them into a list, spin the wheel, and the wheel can choose one of the choices and make the decision for me. Any other additional decision maker is optional but very much appreciated."**

<a name="specifications"></a>
## Specifications
- Home Page: Main page of the website which contains links to all other pages, has the page name, and brief information. The name/logo of the page should always be present on all pages and should lead back to the home page when clicked on.
- About Page: This page has full information about this website. It can be either on its own page or be a part of the home page.
- Signup and Login Page: This page should just be a basic signup and login page that lets a user create an account. 
- Activity Log Page: This page should keep track of all of the users activity. Every coin flip, die roll, wheel spin, and card pick is logged on this page. Only logged in users are able to use this page. Any usage of the decision makers by a user who is not logged in will not be listed in the log.
- Coin Flip: This page is the most simple out of the four required decision makers. The user is simply able to flip a coin and the result should either be heads or tails. The user should have the option to associate what heads and tails represent. The coin could optionally have customizable colors and images.
- Dice Roll: On this page, the user can roll a die, which should have various number of sides, including 4, 6, 8, 12, and 20 sided dice and the user can freely switch between them. Each side of the die should be a number ranging from 1 to the amount of sides on the die.
- Wheel Spin: This page asks the user to input a list of items. The user can then spin the wheel and the wheel will randomly stop on an item. The wheel should have a set of colors for each section. 
- Deck of Cards: This page functions similarly to the Wheel Spinner in that an item is randomly chosen from a list of items, but the difference is that after the card has been selected, that card is removed from the list. The user can choose to either keep it to the side, put the card back into the deck, or discard it.

<a name="technologies"></a>
## Technologies
- Visual Studio Code: Where the coding takes place.
- Paint.NET: Where logos and icons are drawn.

<a name="coding-languages"></a>
## Coding Languages
- HTML
- CSS
- JavaScript

<a name="collaboration"></a>
## Collaboration
- Current members of project: An Nguyen (Owner)
- If one desires to join this project, email Mr. Nguyen at an1645584@gmail.com, requesting to join "Decision Dome"

<a name="download"></a>
## To Download This Repository From Github To Local Machine
1. Install Git on your computer and open the Bash executable file. Download here: https://git-scm.com/downloads
2. Move to the directory where you want the download to happen using "cd folder1/folder2/folder3/etc."
3. Download repository to the folder using "git clone linkOfRepository other-name". Omit other-name if you want to keep the original name of the repository.

<a name="upload"></a>
## To Upload/Update This Repository From Local Machine To Github
1. Open the Git Bash and move to the directory of the repository using "cd folder1/folder2/folder3/etc."
2. Initialize the local directory as a Git repository using "git init -b main". *Skip this step if the repository already exists on Github.*
3. Stage all the files in the project for commit with "git add ." To unstage a file, use "git reset HEAD filename".
4. Name the commit those files with "git commit -am 'some message'". To uncommit the project, type "git reset --soft HEAD~1". To recommit, repeat to step 3 first
5. Type "git remote add origin remote_url" -> "git remote -v" to set and verify the location of the remote repository on Github. *Skip this step if the repository already exists on Github.*
6. Type "git push origin main" to push the projects and all of its changes to the repository on Github.
7. You'll be asked to enter username and password for the GitHub account tied to the project. Once entered, the push will be completed and the new changes will be uploaded!

