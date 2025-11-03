Lab 4

* *Date Created*: 03 Nov 2025
* *Last Modification Date*: 03 Nov 2025
* *Lab URL*: <http://example.com/>


## Authors
* Sidhant Kumar(B00961444)


## Built With

* [Express.js](https://expressjs.com/) – Server framework used for backend API routing  
* [Bootstrap 4](https://getbootstrap.com/docs/4.4/getting-started/introduction/) – Styling and responsive design  
* [Node.js](https://nodejs.org/en/) – Backend runtime environment  
* [Jest](https://jestjs.io/) – Testing framework for backend and frontend tests  
* [Supertest](https://www.npmjs.com/package/supertest) – Used for endpoint testing of Express routes  
* [JSDOM](https://github.com/jsdom/jsdom) – Used for DOM testing of the frontend  
* [Memegen.link API](https://api.memegen.link/) – External API used to generate meme images dynamically  



## Sources Used
### Server.js

*Line 22*

```
memeURl = `https://api.memegen.link/images/${template}/${top}/${bottom}.png`;

```

The code above was created by adapting the code in [Server.js](https://api.memegen.link/docs) as shown below: 

```
/images/{template_id}/{text_filepath}

```

- <!---How---> The code in [Server.js](https://api.memegen.link/docs) was implemented by...
- <!---Why---> [Server.js](https://api.memegen.link/docs)'s Code was used because it was given in the API docs to how a meme is generated.
- <!---How---> [Server.js](https://api.memegen.link/docs)'s Code was modified by template value which could be random, or any of the other two predefined value.



## Artificial Intelligence Tools Used
No AI used for this lab

##Testing
* Backend test : 2 Tests check if meme url is valid and also if it is set to random then does it work with random pics.
* frontend tests: 2 tests check if meme from exists and also if the button exists and the button text matches.

##Accessibility Features
* Added aria-labels attributes to form controls.
* Preserved proper heading hierarchy
* Ensure all form field have a corresponding label element


## Acknowledgments

* Referred some things from lab 4 project setup guide.
* Memegen.link API for meme
