# Calendar for SocialWow

This is a calendar using FullCalendar for JavaScript. You could display your events and also create some new when you click on the day you choose. 

<img src='https://res.cloudinary.com/jorgemaram/image/upload/v1611684197/fotos-webuild/muestra_Social_Wow_ch5vj0.jpg' alt='SocialWow example'>


## Endpoints table

| Id | Method | Path | Description|
| ------ | ------ | ------ | ------ |
| 1 | get | /api/event/getAllEvents | Show different events from the database |
| 2 | post | /api/event/newEvent | Send the information of the new event to the database |


### Instructions
First of all, you should `fork` and `clone` this repo.

#### Client
- In your terminal, you should go to `client` folder in this repo and then you should run the following commands: 

```bash
$ npm install
$ npm start

```
After that, client will be running in `port 3000` through  <http://localhost:3000/> .

#### Server
- In your terminal, you should go to `server` folder in the repository and then run the following commands:

```bash
$ npm install
$ npm run dev

```
When you do that, database in Mongo Atlas will be being used. 


##### Technologies

- FullCalendar
- HTML5
- CSS
- React Bootstrap
- JavaScript
- React
- MongoDB
- AXIOS
- React Bootstrap