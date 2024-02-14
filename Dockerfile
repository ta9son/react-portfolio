# ベースイメージを指定
FROM node:16

# アプリケーションの作業ディレクトリを設定
WORKDIR /app

# アプリケーションの依存関係ファイルをコピー
COPY package.json .
COPY package-lock.json .

# 依存関係をインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# アプリケーションがリッスンするポートを指定
EXPOSE 3000

# アプリケーションを起動
CMD ["npm", "start"]