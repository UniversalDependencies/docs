---
layout: relation
title:  'cc:preconj'
shortdef : 'preconjunct'
udver: '2'
---

The `cc:preconj` relation is used for the first part of a multi-word coordinating conjunction which appears before the head of a coordinated structure, as is the case with multi-word expressions, such as _**tako**_ - _kot_ , _**niti**_ - _niti_ , _**ne**_ - _ne_ , _**ali**_ - _ali_ , _**bodisi**_ - _bodisi_ , _**ne le**_ - _ampak tudi_ , _**ne**_ - _temveč_ , _**ali**_ - _če ne pa_ . The second element is considered to be the coordinating conjunction ([cc]()) and attaches to the following conjunct.

~~~ sdparse
Tudi zato s tovrstnim nasiljem ne ravnatelji ne učitelji nimajo izkušenj . \n Also because-of-this with such violence neither principals nor teachers have experience .
cc(učitelji,ne-8)
cc:preconj(ravnatelji,ne-6)
conj(ravnatelji,učitelji)
cc(teachers,nor)
cc:preconj(principals,neither)
conj(principals,teachers)
~~~
<!-- Interlanguage links updated Ne 5. května 2024, 18:20:53 CEST -->
