# API Platform POC for Montessori project


How to start the docker environment for development purpose ?

```
docker-compose up
```

How to access then the main ressources ?

(you will need to accept the certificate exception as it is self-signed ones)

- [https client](https://localhost/)
- [http client](http://localhost/)
- [https api](https://localhost:8443/) contains also the API documentation !
- [http api](http://localhost:8080/) contains also the API documentation !
- [cached https api](https://localhost:8444/) contains also the API documentation !
- [cached http api](http://localhost:8081/) contains also the API documentation !
- [https api](https://localhost:8443/) contains also the API documentation !
- [https admin panel](http://localhost:444/)
- [http admin panel](http://localhost:81/)

# Useful commands

- `docker-compose exec php bin/console doctrine:schema:update --force` to update the DB schema
- `docker-compose exec php composer ...` to run composer command
- `docker-compose exec db psql -U api-platform -d api` to run SQL queries
- `docker-compose exec client yarn add something ` to add a front end dep


# Load fixtures

- `docker-compose exec php bin/console doctrine:fixture:load`
