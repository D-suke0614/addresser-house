FROM apache/beam_java17_sdk
ADD target/apartowner.jar apartowner.jar
EXPOSE 7002
ENTRYPOINT ["java", "-jar", "apartowner.jar"]
