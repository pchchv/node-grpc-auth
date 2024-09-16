# node-grpc-auth

*Simple application with gRPC communications.*   
The gRPC client and server communicate over the network using the gRPC protocol, which is based on HTTP/2. The client makes a remote procedure call (RPC) to the server by calling a method in a stub on the client side. This method corresponds to the method defined in the server service definition (auth.proto file). The client and server use protocol buffers (protobuf) to serialize and deserialize the input and output data of the method.

## Running server
```sh
yarn start
```

## Running client
```sh
yarn start:client
```

## Compiling proto file
After any change in `auth.proto` file it needs to be recompiled by running the following command:
```sh
protoc --plugin=node_modules\ts-proto\protoc-gen-ts_proto --ts_proto_out=. ./protos/auth.proto --ts_proto_opt=outputServices=grpc-js,env=node,esModuleInterop=true --experimental_allow_proto3_optional

```