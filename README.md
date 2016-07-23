# cardfactory
Cardfactory project

# 세팅
- 노드 설치 (https://nodejs.org/en/download/)

- npm 글로벌 모듈 설치

```
    $ npm install -g express
    $ npm install -g bower
    $ npm install -g apidoc
```

- npm, bower 모듈 설치

```
    $ cd cardfactory
    $ npm install
    $ bower install
```

- 개발 모드로 시작 (터미널 2개 띄워서)

```
    $ node ./bin/www
    $ gulp watch
```

- 개발 모드로 시작 (터미널 1개로)

```
    $ npm start
```

- API 문서 만들기

```
    $ gulp apidoc
```