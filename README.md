Elevator pitch:
Have you ever struggled to coordinate with your team to win pokemon tournaments? Have you ever found that your team of pokemon has a glaring flaw that you didn't catch when building your team? This is where having a website to refer to helps greatly with coordinationg and planning. I will create a competitive pokemon website for the BYU esports club. It will be useful in building teams and then seeing what threats our teams can counter and what we are weak too. It will be a critical reasource to  help us win against other colleges in our CVL tournaments this semester and next. 

Key Features: 
-A login and account feature to allow for teams to be saved and created.
-A section to add common pokemon and move sets to see what we might be up against.
-A place where we can see a type chart and see weakness for our teams.
-A scoreboard to see win/losses in our tournaments. 

Description of technology used:
-Authentication: Will use login/authenticate for account creation.
-Database: Will store all the pokemon teams and player details in a database. 
-Websocket data: Scoreboard will be update in real-time.

Pokemon type chart example: 

![Pokemon_Type_Chart svg](https://github.com/jrp244/startup/assets/83414799/ba0bf1a1-a65f-4e53-88fb-00080ced1ce9)

Example website: 
![image](https://github.com/jrp244/startup/assets/83414799/0ff789e2-df14-41a9-bc3f-5915cfe78bc6)

Example login tab:
![image](https://github.com/jrp244/startup/assets/83414799/89519442-a349-4569-a082-42135d1a4a82)

HTML deliverables: 


Properly structured HTML

    20% HTML pages for each component of your application
    Yes. 
    
    10% Links between pages as necessary
    Yes all my pages link together
    
    10% Application textual content
    All the pages have text that describes what is important for pokemon pvp.
    
    10% Placeholder for 3rd party service calls
    There is a login placeholder on my home page and login page.
    
    10% Application images
    Images are done for the type chart and for a few pokemon. 
    
    10% Login placeholder, including user name display
    Login page has been created and linked and it displays the username after login.
    
    10% Database data placeholder showing content stored in the database
    Database is actually kinda done with some js at this point, but it still has bugs. Sometimes the pokemon teams will not display correctly under the play page.
    
    10% WebSocket data placeholder showing where realtime communication will go
    Play page has the realtime communication with saved teams and descriptions of those teams.

10% - Multiple Git commits with meaningful comments.
Yes. There are a bunch of git commits with meaningful comments.

Service deliverable

For this deliverable I added backend endpoints that receives votes and returns the voting totals.

    Node.js/Express HTTP service - done
    Static middleware for frontend - done
    Calls to third party endpoints - I didn't implement this yet.
    Backend service endpoints - Placeholders for login that stores the current user on the server. Stores it in RAM. No database yet.
    Frontend calls service endpoints - I did this using the get function.


DB deliverable

For this deliverable I stored the votes in the database.

    MongoDB Atlas database created - done!
    Endpoints for data - My stubbed out endpoints now process the data and send it to Mongo.
    Stores data in MongoDB - done!

Login deliverable

For this deliverable I associate the votes with the logged in user.

    User registration - Creates a new account in the database.
    existing user - Stores the user and user info.
    Use MongoDB to store credentials - Stores the user and their username/password.
    I fixed the login issues when I go the websocket and react deliverable done so backend is also done.

WebSocket deliverable

For this deliverable I used webSocket to update the votes on the frontend in realtime.

    Backend listens for WebSocket connection - done!
    Frontend makes WebSocket connection - done!
    Data sent over WebSocket connection - done!
    WebSocket data displayed - All user votes display in realtime. I'm really proud that this is working. Way cool!

React deliverable

For this deliverable I converted the application over to use Vue. I know it is supposed to use React, but the instructor said I could use Vue because I already have extensive experience with React.

    Bundled and transpiled - done!
    Components - Login, voting list, vote are all components.
    Router - Routing between login and voting components.
    Hooks - Vue uses class properties instead of UseState to track changes in vote state.





