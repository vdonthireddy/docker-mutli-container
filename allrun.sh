cd ~/code/multicontainer/vjapp
docker build -t vjapp .
docker tag vjapp vdonthireddy/vjapp:1.0
docker push vdonthireddy/vjapp:1.0
cd ~/code/multicontainer/vjservice
spring jar hello.jar hello.groovy
docker build -t vjservice .
docker tag vjservice vdonthireddy/vjservice:1.0
docker push vdonthireddy/vjservice:1.0
cd ~/code/multicontainer
docker-compose up -d
