## Minimal Repository to reproduce Concerto Issue 331
https://github.com/accordproject/concerto/issues/331

```
# Install dependencies
$ npm i

# Generate the TypeScript class from model.cto
$ npm run codegen

# Build the TypeScript
$ npm run build

# Start
$ npm run start
```

You should then see the following error reported in the Terminal

```
ValidationException: Model violation in the "undefined" instance. The field "timestamp" has a value of ""2022-05-31T14:09:11.799Z"" (type of value: "object"). Expected type of value: "DateTime".
```

Then make the following changes 
1. concerto331.ts, Line 9
`timestamp: Date;` becomes `timestamp: String;`

2. index.ts, Line 6
`    timestamp = new Date();` becomes `    timestamp = new Date().toISOString();`



```
# Build the TypeScript
$ npm run build

# Start
$ npm run start
```