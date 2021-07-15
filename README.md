# Repro for Vanilla and TreatCSS Issues

```bash
# install deps
yarn

# start watch for core packages
yarn start
```

In a separate terminal:

```bash
cd packages/gatsby-site

touch .env
```

Add the following:

```text
#
# NodeJS
#
NODE_OPTIONS='--max-old-space-size=6096 --inspect'
NODE_ENV=development
#
# Debugging
#
DEBUG=vanilla-extract*
#
# Application
#
APP_ENV=local
APP_PROTOCOL=http
APP_SUBDOMAIN=''
APP_DOMAIN=localhost
APP_PORT=9000
```

Then start the build:

```bash
yarn start
```
