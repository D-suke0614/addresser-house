FROM maven:3.8.3-openjdk-17
WORKDIR /usr/src/apartowner
COPY ../ApartOwner .
RUN mvn package
EXPOSE 7002
ENTRYPOINT ["java", "-jar", "target/apartowner.jar"]
