---
layout: relation
title: 'csubjpass'
shortdef: 'clausal passive subject'
---

The dependency type `csubjpass` is used for clausal subjects of passive verbs.

~~~ sdparse
言っ た の が 悔やま れる 。 \n say PAST that NOM regret PASSIVE .
csubjpass(悔やま, 言っ)
auxpass(悔やま, れる)
aux(言っ, た)
mark(言っ, の)
case(言っ, が)
punct(悔やま, 。)
~~~
