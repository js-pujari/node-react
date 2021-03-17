# What is this ?

Static server to serve your js builds. It will work for client side routing also.

## Installation

`npm i -g ind-js-server`

## How to use ?

```
ind-serve [Build folder path*]
```

* Build folder path : is path to parent directory of build folder
* example: my folder path is **D:\personal\average\js-utils\build** then **Build folder path** becomes 
 **D:\personal\average\js-utils**

## Troubleshooting

* If **ind-serve** commond doesn't work then it could be linking issue.
* type `npm link` then use `ind-serve [Build folder path*]`
