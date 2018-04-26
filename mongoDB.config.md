# mongoDB install

### mongoDB download center
[mongoDB download center](https://www.mongodb.com/download-center?jmp=tutorials&_ga=2.66475880.791483123.1524724280-601065987.1524214311&_gac=1.207742374.1524554461.EAIaIQobChMIuNbl9K_S2gIVFgYqCh1Yvgx1EAAYASAAEgIcJvD_BwE#atlas
Community Server)

* 서버 업로드 및 압축 해제
* mongodb 폴더 mkdir data, log 생성
* mongo.conf 생성

* 실행
<pre><code>
$ ./bin/mongod --config mongo.conf
$ ps -elf | grep mongo
$ ./bin/mongo
</code></pre>