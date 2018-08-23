cd ~/work/multi-container/docker-mutli-container/vjapp
docker build -t vjapp .
docker tag vjapp dtr.predix.io/212368581/vjapp:1.0
docker push dtr.predix.io/212368581/vjapp:1.0
cd ~/work/multi-container/docker-mutli-container/vjnodeservice
docker build -t vjnodeservice .
docker tag vjnodeservice dtr.predix.io/212368581/vjnodeservice:1.0
docker push dtr.predix.io/212368581/vjnodeservice:1.0
cd ~/work/multi-container/docker-mutli-container
docker-compose up