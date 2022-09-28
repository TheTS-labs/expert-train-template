# Expert-Train Template

Webpack template for a quick start (TypeScript, React, Jest)

## Features

-   Docker
-   Prettier
-   ESlint
-   React 18
-   Webpack 5
-   Typescript 4.8.3
-   Jest 29
-   Type Guard (io-ts)
-   Webpack Merge
-   Depcheck
-   `package.json` commands
-   Support for images (`.png`, `.svg`, `.jpg`, `.jpeg`, `.gif`)
-   Support for wonts (`.woff`, `.woff2`, `.eot`, `.ttf`, `.otf`)

## Installation

### Bash

Install `nodejs`, `npm`, `git` and `yarn` in your system, and then run:

```bash
    git clone git@github.com:TheTS-labs/expert-train-template.git
    cd expert-train-template
    yarn install
```

### Docker

```bash
    docker pull tsecret/expert-train-template:v1.1.0
    docker run -d -t expert-train-template -p 8080:8080 tsecret/expert-train-template:v1.1.0
```

## Usage

### Commands

-   `yarn run build` - Build prodaction version
-   `yarn run build:dev` - Build develeopment version
-   `yarn run build:dev:serve` - Start develeopment server
-   `yarn run test` - Run Jest testing
-   `yarn run test:watch` - Run Jest testing in watch mode
-   `yarn run lint` - Run ESlint
-   `yarn run lint:fix` - Run ESlint and fix fixable errors
-   `yarn run prettier` - Run Prettier

### Usage of Docker

Open shell: `docker exec -it expert-train-template /bin/bash`

Or copy from container to local filesystem: `docker cp expert-train-template:/expert-train-template /local/path`

You can also [open container in VSCode](https://code.visualstudio.com/docs/remote/containers)

## Support

For support:

-   Email romantovt31@gmail.com
-   Or open an Issue

## Feedback

If you have any feedback, please reach out to us at romantovt31@gmail.com

## License

[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)

## Authors

-   [@TheTS-labs](https://www.github.com/TheTS-labs)([Twitter](https://twitter.com/__TheTS__))
