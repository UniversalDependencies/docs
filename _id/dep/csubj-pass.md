---
layout: relation
title: 'csubj:pass'
shortdef: 'clausal passive subject'
udver: '2'
---

A clausal passive subject is a clausal syntactic subject of a passive clause. Examples in Indonesian:

~~~ sdparse
ROOT Bermain seri di kandang sendiri sangat tidak diharapkan nya . \n  Playing a tie at home is not what he expected .
csubj:pass(Bermain, diharapkan)
advmod(Bermain, seri)
root(ROOT, diharapkan)
obl:agent(diharapkan, nya)
~~~

~~~ sdparse
ROOT Menyelenggarakan pesta pernikahan selama masa pandemi telah dilarang oleh pemerintah . \n Organizing wedding parties during the-pandemic has been-banned by the-government .
csubj:pass(Menyelenggarakan, dilarang)
root(ROOT, dilarang)
obl(Menyelenggarakan, pesta)
obl:agent(dilarang, pemerintah)
~~~


