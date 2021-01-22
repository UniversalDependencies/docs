---
layout: relation
title: 'expl:subj'
shortdef: 'expletive'
udver: '2'
---

The `expl:subj` relation is used for expletive in a surface subject position.

It can be used in case of repeated subject in interrogatives:

~~~ sdparse
Ces chiffres sont -ils élevés ? \n Are these numbers high?
expl:subj(sont,-ils)
~~~

And for other impersonal subjects:

~~~ sdparse
Il existe des variantes dialectales \n There are dialectal variations
expl:subj(existe,il)
~~~
