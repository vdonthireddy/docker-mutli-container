cd vjapp
docker build -t vjapp .
docker tag vjapp vdonthireddy/vjapp:1.0
docker push vdonthireddy/vjapp:1.0
cd ../vjnodeservice
docker build -t vjnodeservice .
docker tag vjnodeservice vdonthireddy/vjnodeservice:1.0
docker push vdonthireddy/vjnodeservice:1.0
cd ..
docker-compose up