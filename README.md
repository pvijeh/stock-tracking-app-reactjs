# Basic Store Stock Item Tracking Application 

>This is a demo single page application.  This application is used by store owners to track their stock items. 

## How to install and run: 

> git clone https://github.com/pvijeh/stock-tracking-app-reactjs  
> npm install   
> npm run   


### Objective:  

> Build a simple single page application that can track store stock items for the following attributes:  
> name  
> description  
> price  
> available date  
> Taxability   

> Users should be able to view all existing stock items as well as add new stock items 

### Discussion:

#### Libraries and Frameworks Used: 

> For this application I used the [React Isomorphic Starter Kit ](https://github.com/kriasoft/react-starter-kit)
> the starter kit includes react.js, Babel, webpack, postcss and a well organized directory structure as well as isomorphic rendering 
> In addition to the starter kit, I also used the following libraries:  
> [faker](https://github.com/marak/Faker.js/) - used to generate fake data 
> [Event Emitter 3](https://github.com/primus/eventemitter3) - used in conjunction with Flux
> [Flux](https://github.com/facebook/flux),  used to communicate  between components and manage state 
> [React Datepicker Component](https://www.npmjs.com/package/react-datepicker) - a data table component for react.js
> [React Data Fixed Table](https://facebook.github.io/fixed-data-table/) -- a data table component for react.js

#### Scalability 

> This application should scale to track tens of thousands of items and the starter kit includes 
> routing functionally as well as an http request library to interact with an API 

#### Maintainability 
> Thanks to the React Isomorphic Starter Kit, the app has a organized and maintainable directory structure.   Components are organized into individual folders along side accompanying CSS   

#### Potential Pain Points
> This project leverages the  [React Isomorphic Starter Kit ](https://github.com/kriasoft/react-starter-kit).  There is no easy way to take advantage of continued development of the starter kit as it would require manually merging the projects, which can be time consuming and error prone.  Additionally,  this project introduces some unnecessary complexity (isomorphic rendering) and must be run on a server-- which introduce additional obstacles that would not be present if this were purely a client side app.  

See [demo](http://demo.reactstarterkit.com) &nbsp;|&nbsp;
[docs](https://github.com/kriasoft/react-starter-kit/tree/master/docs) &nbsp;|&nbsp;
[bugs & feature requests](https://waffle.io/kriasoft/react-starter-kit) &nbsp;|&nbsp;
join [#react-starter-kit](https://gitter.im/kriasoft/react-starter-kit) chatroom to stay up to date &nbsp;|&nbsp;
visit our sponsors:

