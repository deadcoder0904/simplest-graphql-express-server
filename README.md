# simplest-graphql-express-server

> Easiest GraphQL :art: example with Express & Fake JSON server :wink:

# Configuration

(1) Start Fake JSON server in 1 Terminal Window

`yarn run json:server`

(2) Start Express server in another Terminal Window

`yarn run dev`

(3) Open `http://localhost:1337/graphql` & enter the following

```
{
  user(id: "57") {
    name,
    gender,
    age
  }
}
```

## License

[MIT](LICENSE.md) © [Akshay Kadam](https://github.com/deadcoder0904)

### Made by A2K

<img src="http://imgur.com/jfmA33n.png" alt="Sign" width=250 height=130 />
