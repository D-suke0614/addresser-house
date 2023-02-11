# This is Addresser-House

## Demo
[Addresser House](https://addresser-house.vercel.app/)<br />
You can check in this demo site is the main branch.
## Requirement
- Node.js 14.6.0 or newer
- macOS, Windows, Linux

<p class="warn">We have only tested it on macOS.</p>

## Framework and Libraries
- Next.js 13.1.4
- react 18.2.0
- eslint 8.32.0
- material-ui 5.11.5

## Directories
```
src/
├─ common/
├─ components/
│  ├─ features/
│  ├─ ui/
│  │  ├─ button/
│  │  │  ├─ Button.tsx
│  │  ├─ index.ts
├─ pages/
├─ lib/
```
### pages
url単位で分けられたページ群<br/>
featuresで作られた機能を呼び出し、１つのページとする<br>
あるボタンを押したら、urlが代わり別のページが表示されるなどの制御はここで行う

### common
プロジェクト内の様々な場所で呼び出される変数や肩などをここで定義しておく

### lib
ライブラリの初期設定などが必要な場合は、このディレクトリ内で行う

### features
ページの中に表示される機能群<br/>
ログイン機能やシステム設定、お知らせ投稿など

### ui
MUIのコンポーネントをラップし、独自のスタイルを当てたコンポーネント群<br/>
index.tsxでuiは以下にあるコンポーネントを全て一気にexportする<br>

[ディレクトリ構成で困ったときはここを参照](https://tech-blog.rakus.co.jp/entry/20230208/frontend)

## DevDependencies
<p>返り値の方を明示的にするため</p>
- @typescript-eslint/eslint-plugin ^5.48.2<br>
<p>使用していないimportが入り込むのを防ぐため</p>
- eslint-plugin-unused-imports ^2.0.0<br>
<p>prettier</p>
- prettier ^2.8.3
- eslint-config-prettier: ^8.6.0

## Usage
```
$ git clone https://github.com/D-suke0614/addresser-house.git
$ yarn install
$ yarn dev

format & lint
$ yarn format
$ yarn lint --fix

storybook
$ yarn storybook
```

## Gitmoji
### 機能実装系
- ✨ sparkles: Introduce new features
  - 新規機能の実装時
- ⚡️ zap: Improve performance
  - 既存の機能に、別機能を追加したとき
- 🔥 fire: Remove code or files
  - 機能を削除したとき
- 🚧 construction: Work in progress.
  - WIP、作業途中でcommitするとき

### バグ修正系
- 🐛 bug: Fix a bug
  - バグ修正したとき
- 🩹 adhesive_bandage: Simple fix for a non-critical issue
  - 一瞬で修正できるような、軽微な修正をしたとき

[そのほかのGitmoji](https://ascii.jp/elem/000/004/081/4081225/)

## Author
- Daisuke Kida
- Shota Yugawa
- Yuki Hama
