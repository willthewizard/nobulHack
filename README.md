# chat-hyperledger

chat app network


to deploy locally after set up the stuffm do the following:

1. composer archive create -t dir -n .


2.
composer network start --networkName chat-hyperledger --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card --networkVersion 0.0.1
