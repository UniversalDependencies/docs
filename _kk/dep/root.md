---
layout: relation
title:  'root'
shortdef : 'root'
udver: '2'
---

The `root` grammatical relation points to the root of the sentence. A
fake node `ROOT` is used as the governor.

~~~ sdparse
ROOT Азамат ағашқа қарай жүгірді . \n ROOT Azamat tree-to towards ran .
root(ROOT-1, жүгірді-5)
nsubj(жүгірді-5, Азамат-2)
case(ағашқа-3, қарай-4)
punct(жүгірді-5, .-6)
obl(жүгірді-5, ағашқа-3)
~~~

<!-- Interlanguage links updated St lis 3 20:59:10 CET 2021 -->
