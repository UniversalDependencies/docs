---
layout: relation
title:  'cc:preconj'
shortdef : 'preconjunct'
udver: '2'
---

The `cc:preconj` relation is used for the first part of a multi-word coordinating conjunction which appears before the head of a coordinated structure, as is the case with multi-word expressions, such as **_tako**-kot_ (_both-and_), **_niti**-niti_, **_ne**-ne_ (_neither-nor_), **_ali**-ali_ (_either-or_). The second element is considered to be the coordinating conjunction ([cc]()) and attaches to the following conjunct.

~~~ sdparse
Tudi zato s tovrstnim nasiljem ne ravnatelji ne učitelji nimajo izkušenj .
cc(učitelji,ne-8)
cc:preconj(ravnatelji,ne-6)
conj(ravnatelji,učitelji)
~~~
