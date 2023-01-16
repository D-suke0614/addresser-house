# Addresser House

##  Usage
```
// web-appをcloneした時（自動化できないか検討）
 → ローカルにnode_modulesがインストールされないため
$ cd web-app
$ npm install
$ cd ../

// web-app（Front）環境のみ立ち上げる場合
初回：
$ docker-compose up -d --build web-app
２回目以降：
$ docker-compose up -d

Storybookの開き方
（ちょっと設定がよくわからんくて、開けるけどmaterial-uiとかが使えんから気が向いたらなおす）
$ docker-compose exec -it web-app sh
$ npm run storybook

// コンテナ確認
$ docker-compose ps

// コンテナ停止
$ docker-compose stop

// コンテナ削除
$ docker-compose down
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
  - materialui
  - Storybook

### BacK
- Java 16
  - Spring boot2.7
  - Soring Framework5.3

## Front Developer
 - Daisuke Kida

## API Developer
 - Yugawa Shota
 - Hama Yuki
