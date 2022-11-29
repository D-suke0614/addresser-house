FROM apache/beam_java17_sdk
ADD target/authservice.jar authservice.jar
EXPOSE 7001
ENTRYPOINT ["java", "-jar", "authservice.jar"]
