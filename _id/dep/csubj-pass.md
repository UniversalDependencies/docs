---
layout: relation
title: 'csubj:pass'
shortdef: 'clausal passive subject'
udver: '2'
---

A clausal passive subject is a clausal syntactic subject of a passive clause. Examples in Indonesian:

~~~ sdparse
ROOT Bermain seri di kandang sendiri sangat tidak diharapkan nya . \n  Playing a-tie at home was not expected by-him .
csubj:pass(Bermain, diharapkan)
advmod(Bermain, seri)
root(ROOT, diharapkan)
obl:agent(diharapkan, nya)
csubj:pass(expected, Playing)
~~~

~~~ sdparse
ROOT Mengadakan pesta pernikahan selama masa pandemi telah dilarang oleh pemerintah . \n Organizing wedding parties during the-pandemic has been banned by the-government .
csubj:pass(Mengadakan, dilarang)
root(ROOT, dilarang)
obj(Mengadakan, pesta)
obl:agent(dilarang, pemerintah)
csubj:pass(Organizing, banned)
~~~


