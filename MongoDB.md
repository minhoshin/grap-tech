# mongoDB

### compact

##### Primary
<pre><code>
db:PRIMARY> db.runCommand ( { compact: ‘collection’, force: true } )
</code></pre>

##### Secondary
<pre><code>
db:SECONDARY> rs.slaveOk()
db:SECONDARY> db.runCommand ( { compact: 'collection', force: false } )
</code></pre>

### index

##### index 확인
<pre><code>
db:PRIMARY> db.collection.getIndexes()
</code></pre>

##### 전체 index 삭제
<pre><code>
db:PRIMARY> db.collection.dropIndexes()
</code></pre>

##### index 삭제
<pre><code>
db:PRIMARY> db.collection.dropIndex({'key': 1})
</code></pre>

##### TLL index 생성
<pre><code>
db:PRIMARY> db.collection.createIndex({'key': 1}, {expireAfterSeconds: seconds})
</code></pre>