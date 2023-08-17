<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Exec in Dev
1. Clone the repository
2. Exec
```
yarn install
```
3. Nest CLI installed
```
npm i -g @nestjs/cli
```

4. Up the BD with docker-compose.yaml
```
docker-compose up -d
```
5. Clone file __.env.template__ and rename the copy to __.env__

6. Fill in the defined environment variables on ```.env```

7. Execute in dev:
```
yarn start:dev
```

8. Rebuild the BD with the seed
```
http://localhost:3000/api/v2/seed
```

## Stack used
* MongoDB
* Nest

# Production Build
1. Create the fila ```.env.prod```
2. Fill the env variables of prod
3. Create the new image
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```
