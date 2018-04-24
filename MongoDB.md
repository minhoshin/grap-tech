# mongoDB

### compact

Primary
db:PRIMARY> db.runCommand ( { compact: ‘collection’, force: true } )

Secondary
db:SECONDARY> rs.slaveOk()
db:SECONDARY> db.runCommand ( { compact: 'collection', force: false } )

### index

인덱스 확인
db.collection.getIndexes()

전체 인덱스 삭제
db.collection.dropIndexes()

인덱스 삭제
db.collection.dropIndex({'key': 1})

TLL 인덱스 생성
db.collection.createIndex({'key': 1}, {expireAfterSeconds: seconds})