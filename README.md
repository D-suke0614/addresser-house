# Addresser House

##  Usage
```
// web-app（Front）環境のみ立ち上げる場合
初回：
$ docker-compose up -d --build web-app
２回目以降：
$ docker-compose up -d

Storybookの開き方
（ちょっと設定がよくわからんくて、開けるけどmaterial-uiとかが使えんから気が向いたらなおす）
$ docker-compose exec -it web-app sh
$ npm run storybook
```

# Access
```
local:
http://localhost:3000

storybook:
http://localhost:6006
```

## Development
### Front
- React
  - TypeScript
  - material ui

### BacK
- Java 16
  - Spring boot2.7
  - Soring Framework5.3

## Developer
 - Yugawa Shota
 - Daisuke Kida
 - Hama Yuki
