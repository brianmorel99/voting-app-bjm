# Application Running on Docker

* This has only been tested on Linux, but should work on Windows & Mac OS.

1.  Install Docker & Docker Compose
    *   https://docs.docker.com/engine/install/

2. Clone the git repository with the voting-app project

```
git clone https://github.com/brianmorel99/voting-app-bjm.git
```

3. Change into the project directory

```
cd voting-app-bjm
```

4. Run the below command to start all containers.

```
docker compose up
```

![Screenshot](/docs/images/docker-1.PNG)

5.  Open a web browser and navigate to the below address to see the vote page
    * (http://localhost:5000)

![Screenshot](/docs/images/docker-2.PNG)

6. Navigate to the below address to see the results page
    * (http://localhost:5000)

![Screenshot](/docs/images/docker-3.PNG)

## Cleanup

7. Run the below command to shut down the docker containers.

```
docker compose down
```