# redis

### redis gate korea
* http://redisgate.kr/redis/introduction/redis_intro.php

<pre><code>
$ redis-cli
127.0.0.1:6379> auth password
</code></pre>

##### STRINGS
* http://redisgate.kr/redis/command/strings.php
<pre><code>
127.0.0.1:6379> SET key value
127.0.0.1:6379> DEL key
127.0.0.1:6379> GET key
</code></pre>

##### LISTS
* http://redisgate.kr/redis/command/lists.php
<pre><code>
127.0.0.1:6379> LPUSH key value
127.0.0.1:6379> RPOP key
127.0.0.1:6379> LPOP key
127.0.0.1:6379> RPUSH key value
</code></pre>

##### SETS
* http://redisgate.kr/redis/command/sets.php

##### SORTED SETS
* http://redisgate.kr/redis/command/zsets.php

##### HASHES
* http://redisgate.kr/redis/command/hashes.php
<pre><code>
127.0.0.1:6379> HSET key field
127.0.0.1:6379> HDEL key field
127.0.0.1:6379> HGET key field
</code></pre>