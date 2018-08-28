cd vjapp
docker build -t vjapp .
docker tag vjapp vdonthireddy/vjapp:4.0
docker push vdonthireddy/vjapp:4.0
cd ../vjnodeservice
docker build -t vjnodeservice .
docker tag vjnodeservice vdonthireddy/vjnodeservice:4.0
docker push vdonthireddy/vjnodeservice:4.0
cd ..
docker-compose up
#kubectl apply -f aks.yml
#kubectl get services --watch
