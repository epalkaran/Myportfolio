# Stage 1: Build frontend
FROM node:20-alpine AS frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# Stage 2: Build backend with frontend assets
FROM maven:3.9-eclipse-temurin-21 AS backend-build
WORKDIR /app
COPY backend/ ./backend/
COPY --from=frontend-build /app/frontend/dist ./backend/src/main/resources/static/
RUN cd backend && mvn package -DskipTests -Dmaven.frontend.skip=true

# Stage 3: Run
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
COPY --from=backend-build /app/backend/target/backend-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
