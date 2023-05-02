# Solita_assingment_2023
This is my solution to the solita [dev-academy-2023 pre-assignment](https://github.com/solita/dev-academy-2023-exercise). 
In this assignment I have used docker to run the server of the code and in the frontend/client side I have used React.

### Installing the project
You should be able just to clone the project from GitHub with command
```
git clone https://github.com/MikkoVasankari/Solita_assingment_2023.git 
```

### To run the server 
1. The backend has a docker container implementation so it requires you to have docker
So if you dont have it might want to install it https://www.docker.com/

2. When you have docker running you should first change your directory to the server side of the project 
```
cd ../Solita_assingment_2023/server
```
3. When you are in the server directory you can just run the server with:
```
docker compose up -d
```
4. When you want to shutdown the server you can use command:
```
docker compose down
```

### To run the client

1. change your directory to the client directory:
```
cd ../Solita_assingment_2023/client
```
2. Install dependencies
```
 npm install
```
3. Then in the client directory you can start the client with:
```
 npm start
```


### Using the web application
After you have your server and client running you should be able to use application
```
http://localhost:3000
```


