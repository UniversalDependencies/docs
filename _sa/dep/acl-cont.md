---
layout: relation
title: 'acl:cont'
shortdef: 'content clause as clausal modifier'
udver: '2'
---

Subordinate clauses introduced by relative adverbs such as *yátra* ‘where’ or *yátas* ‘from where’ and dependent on *verba sentiendi* or *verba dicendi* are to be interpreted as interrogative content clauses, and annotated with `acl:cont`.

Where on earth he might have been born, that he should want to make known (MS 2.5.5.31).
~~~ sdparse
yátra tū́ bhū́mes jā́yeta tád prájijñāseta \n where PTCL of-earth he-might-be-born that he-should-want-declare

discourse(jā́yeta, tū́)
nmod(yátra, bhū́mes)
acl:cont(tád, jā́yeta)
mark(jā́yeta, yátra)
obj(prájijñāseta, tád)
~~~
