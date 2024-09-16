# node-grpc-auth
A simple Node application with gRPC communication.

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