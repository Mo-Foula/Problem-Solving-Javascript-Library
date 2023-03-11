# __Problem Solving JavaScript Library__
# Why?
When I started learning JavaScript I was motivated to start solving problems with it, but it wasn't so easy as I had experience with C++ and I was struggling in each line compared to writing 100s of lines of C++ in a text file.

After almost 7 months of working with JavaScript, I decided to try solving problems using it but now I won't struggle.

<br>

# Why solve problems with JavaScript?
I came across a usecase at work where I wanted to implement a depth-first traversal on a graph and I was shocked that I didn't know what are the conventions of creating a graph in JavaScript.

As I'm learning JavaScript and I work with it on a daily basis, I decided to take my knowledge to the next levels and challenge myself again to solve problems with it as I believe that solving problems gives new use cases that let you be confident with the language you're using.

<br>

# Repository Role
This repository's main purpose is to provide easy access to common algorithms that don't need to be implemented everytime, it is not made to **SKIP** the algorithm it is made to have the algorithm as a reference, if you need to use it and you're not sure you can implement it again without help then you should consider trying to build it yourself before looking up and using the algorithm provided.

Also writing the algorithm and challenging it in different problems can get corner cases that weren't covered in previous problems that could open improvements to the reference algorithms.

<br>

# How to contribute
Contributing is easy, create a branch and create a PR:

## Code structure
```
topic (In plural) or Verb (with ing)-> subtopic -> file 
```
The file should exports the **needed** functions not all functions, we are not exporting everything we want to use the algorithm as end users.

## Naming conventions
Use snake_case in files naming, and provide description for each function usage and importance in a readme file with every leaf file (if not there, create one) [Example](libraries/searching/binary_search.md).

### Titles
Pr title (and commit message) in following format:
```
feat(topic): message
```
or
```
fix(topic): message
```
or
```
doc(topic/subtopic): message
```
### Steps
To make a pull request on a GitHub repository that you are not a collaborator in, you will need to follow these steps:

1. Fork the repository: Click on the "Fork" button located at the top right corner of the repository's page. This will create a copy of the repository in your own GitHub account.

2. Clone the forked repository: Go to your forked repository and click on the "Code" button. Copy the HTTPS or SSH link and use it to clone the repository to your local machine.

3. Create a new branch: Switch to a new branch on your local machine using git checkout -b new-branch-name.

4. Make changes and commit them: Make the changes that you want to contribute to the project and commit them using git add and git commit.

5. Push the changes to your forked repository: Push the changes to the new branch you just created using git push origin new-branch-name.

6. Create a pull request: Go to the original repository and click on the "Pull requests" tab. Click on the "New pull request" button and select your forked repository and the new branch you created. Fill in the details of your pull request, including a title and description of your changes.

7. Submit the pull request: Click on the "Create pull request" button to submit your pull request to the repository. The repository owner or collaborators can review your changes and decide whether to merge them into the main codebase.


<br>

# Why not TypeScript?
No big reason for that, might convert existing algorithms to typescript soon, might not.


Pros  | Cons
:---: | :---:
Better interface for user  | User will not look at the algorithm to understand types and returns

Still adding up to pros and cons, if pros gave strong reasons, let's move to TypeScript (I personally love it).


