# fastest-server-check
Node module to find fastest available server with minimum priority among the list given list of servers with priority

## params
```
    [ 
       { url: "http://google.com", priority: 4 }, 
       { url: "http://doesNotExist.boldtech.co", priority: 1 }, 
       { url: "http://boldtech.co", priority: 7 }, 
       { url: "http://offline.boldtech.co", priority: 2 } 
     ]
```

## usage

```
var fastestServerCheck = require('./index');  # path to the module

const check = async () => {
  let servers = [ {url:"http://google.com", priority:4}, {url:"http://doesNotExist.boldtech.co", priority:1},{url:"http://boldtech.co", priority:7},{url:"http://offline.boldtech.co", priority:2},{url:"https://github.com/AamirAlam/fastest-server-check",priority:5}]
  try {
    var result = await fastestServerCheck(servers);
    console.log(result);  
  } catch (error) {
    console.log(error)
  }
  
}
check();
```

## response
```
If any online server found
{
  url: 'http://google.com',
  priority: 4,
  success: true,
  message: 'Server found',
  response_time: 917
}
If no server is online
{
  message: 'All servers are offline',
  success: false,
}
```
