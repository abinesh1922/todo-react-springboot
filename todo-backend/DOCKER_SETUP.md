# Todo Backend - Docker Setup Guide

## Project Analysis

Your Todo Backend is a **Spring Boot 4.0.2** application with the following characteristics:

- **Java Version**: 21
- **Build Tool**: Maven
- **Database**: PostgreSQL
- **Authentication**: JWT (JSON Web Tokens)
- **Key Dependencies**: Spring Data JPA, Lombok, Spring Web

## Files Created

### 1. **Dockerfile**

A multi-stage Docker build file that:

- **Stage 1**: Uses Maven 3.9 with Java 21 to compile and build the application
- **Stage 2**: Uses Alpine Linux with Java 21 JRE for a lightweight runtime environment
- Creates an executable JAR file
- Exposes port 8080 (default Spring Boot port)
- Includes environment variables for PostgreSQL configuration
- Implements health checks

### 2. **docker-compose.yml**

Orchestrates the entire application stack:

- **PostgreSQL Service**: Database with persistent volume
- **Todo Backend Service**: Spring Boot application linked to the database
- Automatic service health checks
- Network isolation for secure inter-service communication
- Environment variable configuration

### 3. **.dockerignore**

Excludes unnecessary files from the Docker build context to reduce build size

## How to Use

### Option 1: Using Docker Compose (Recommended)

Build and run the entire application stack (backend + PostgreSQL):

```bash
# Navigate to todo-backend directory
cd todo-backend

# Build and start services
docker-compose up --build

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Option 2: Using Docker Only

Build just the backend image:

```bash
docker build -t todo-backend:latest .
docker run -p 8080:8080 \
  -e SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/tododb \
  -e SPRING_DATASOURCE_USERNAME=postgres \
  -e SPRING_DATASOURCE_PASSWORD=abinesh1922 \
  todo-backend:latest
```

## Configuration

Database credentials and connection settings can be overridden using environment variables:

| Variable                      | Default                                | Purpose                 |
| ----------------------------- | -------------------------------------- | ----------------------- |
| SPRING_DATASOURCE_URL         | jdbc:postgresql://postgres:5432/tododb | Database URL            |
| SPRING_DATASOURCE_USERNAME    | postgres                               | Database user           |
| SPRING_DATASOURCE_PASSWORD    | abinesh1922                            | Database password       |
| SPRING_JPA_HIBERNATE_DDL_AUTO | update                                 | DDL generation strategy |

## Security Recommendations for Production

1. **Database Credentials**: Move sensitive data to environment variables or secret management tools
2. **JPA DDL Auto**: Change from `update` to `validate` in production
3. **SQL Logging**: Disable SQL logging (`SPRING_JPA_SHOW_SQL=false`)
4. **JWT Configuration**: Ensure JWT secrets are properly configured
5. **Network Security**: Use docker networks and implement API gateway/reverse proxy

## Building and Running Steps

1. Ensure Docker and Docker Compose are installed
2. Navigate to the `todo-backend` directory
3. Run `docker-compose up --build`
4. Access the API at `http://localhost:8080`

## Troubleshooting

- **Port Already in Use**: Change the ports in docker-compose.yml
- **Database Connection Issues**: Verify PostgreSQL container is healthy using `docker-compose ps`
- **Build Failures**: Check Maven dependencies with `mvn dependency:resolve`
