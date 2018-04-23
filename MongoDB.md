rs.slaveOk()

Primary
db.runCommand ( { compact: ‘notices’, force : true } )

Slave
db.runCommand ( { compact: 'notices', force : false } )