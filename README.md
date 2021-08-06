# Password Generator CLI Tool

A simple password generator CLI tool written in [TypeScript](https://www.typescriptlang.org/) and [Node.JS](https://nodejs.org/).
The newly generated password is copied to clipboard automatically.

This is based from Traversy Media [tutorial video](https://www.youtube.com/watch?v=3Xx83JAktXk).  
And some of the password requirements are based from [https://passwordsgenerator.net](https://passwordsgenerator.net)

## Install dependencies
```yarn install```

## Start app
```yarn start```

## Generating a password

### Generating a password using all the defaults.
```password-generator```

### Generating a password with a specific length.
```password-generator --length <length>```

### Generating a password with uppercases only.
```password-generator --uppercase```

### Generating a password with lowercases only.
```password-generator --lowercase```

### Generating a password with no numbers.
```password-generator --no-numbers```

### Generating a password with no symbols.
```password-generator --no-symbols```

### Generating a password including ambiguous symbols. *Note: This only works if `--no-symbols` is `false`*.
```password-generator --ambiguous-symbols```

### Store password to a file.
```password-generator --save <filename>```
