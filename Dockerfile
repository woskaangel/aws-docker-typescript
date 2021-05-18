# nodejs LTS v14.16.1 설치
FROM node:14.16.1-alpine

# App directory 생성
WORKDIR /var/app/current/

# Project 코드 복사
COPY ./dist/ ./
COPY ./package*.json ./

# yarn package 설치
RUN npm install yarn --g --force

# Project 모듈 설치
RUN yarn install --production

# 컨테이너 포트 8080으로 내보냄
EXPOSE 8080

# Command 실행
CMD ["yarn", "run", "start"]