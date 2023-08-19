### How this apps starts ?
Command - npm start

### How watch start for development ?
Command - npm run watch or (cmd/alt + shoft + b) -> select npm: watch 

### How build start for prod ?
Command - npm run build or (cmd/alt + shoft + b) -> select npm: build 

### From which file this app starts ?
1. server starts from app.js.
2. servers runs at 3001 port.
3. Node js api - server apis routes starts from app.use routes line in app.js.
const routes = require("./src/server/routes");
app.use("/api", routes);
Above lines in app.js starts node js apis.

3. React app starts - it hits through app.js through app.use(express.static(`${__dirname}/public`)); line and starts with index.html in public folder.
4. In index.html, we have given id=root, which we are accessing in index.jsx file and then react application starts.

