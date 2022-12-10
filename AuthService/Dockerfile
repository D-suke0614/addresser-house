FROM maven:3.8.3-openjdk-17
WORKDIR /usr/src/authservice
COPY ../AuthService .
RUN mvn package
EXPOSE 7001
ENTRYPOINT ["java", "-jar", "target/authservice.jar"]
