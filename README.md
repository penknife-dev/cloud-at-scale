# An entry point for a new branded amdocs document / whitepaper

## Getting Started

Get the dependencies

```bash
yarn
# or
npm i
```

Then, run the development server:

```bash
yarn dev
# or
npm run dev
```

### Make sure the correct endpoint is set in the next config before building and exporting (if you are statically building to serve on your own server)

In next.config.js

```bash
assetPrefix: "path/to/domain",
basePath: "path/to/domain",
```

Then

```bash
yarn build
# or
npm run build

# (By default the next export command is also part of the build command, can be changed in package.json)

```

## If you are editing the files

To update or create a new page, see the 'pages' folder. Styles are written in the same file as the page / component.

Every page is made up from a default page template, contating individual page parts which can be found under:
`/components/PageComponents`
