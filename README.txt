웹앱 개발을 위한 스터디 단계 1
=====
외계어 스터디 웹서버 개발 실습을 위한 예제 프로젝트의 첫 번째 버전입니다.

## 환경 구성

실습을 위해 node.js (또는 io.js), git 등이 설치되어 있어야합니다. 설치되지 않았다면 아래 링크에서 사용자의 실습 컴퓨터 구성 환경에 맞는 버전으로 설치하세요.

* [Git](http://git-scm.com/download/)
* [NodeJS](https://nodejs.org/download/)
* [IO.js](https://iojs.org)

## 설치

환경 구성이 완료되었다면 현재 저장소를 아래와 같이 다운로드 받습니다. 편의를 위해 실행 환경은 커맨드라인 도구로 가정합니다. (OS X : Terminal, Windows : 명령실행기)

```bash
$ git clone https://github.com/ibare/node-webapp-step1.git
$ cd node-webapp-step1
```

node 구성 요소를 설치합니다.

```bash
$ npm install
```

## 웹서버 버전 v0

아래와 같이 서버를 실행시킵니다. (모든 버전의 실행 방법은 동일하며 실행할 파일명만이 달라집니다.)

서버에 접속하기 위해서 브라우저를 실행시킨 후 http://localhost:8080 주소로 연결하면 실행된 서버가 응답합니다.

```bash
$ node server-v1.js
Server Running
```

## 웹서버 버전 v1

8080 포트로 실제 응답 요청 가능한 상태에서 서버 구동 메세지가 표시되도록 개선.

## 웹서버 버전 v2

index.html 과 about.html 요청을 처리하도록 기능 구현.
실제 index.html 파일과 about.html 파일을 읽어 요청자에게 전달.

## 웹서버 버전 v3

express 웹 프레임워크를 사용하여 v1 과 동일한 기능 구현.

## 웹서버 버전 v4

express 웹 프레임워크를 사용하여 v2 와 동일한 기능 구현.

## 웹서버 버전 v5

index.html, about.html 파일등을 직접 읽어 전달하전 방식에서 express 가 제공하는 기능을 사용하여 코드 개선.
