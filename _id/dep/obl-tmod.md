---
layout: relation
title: 'obl:tmod'
shortdef: 'temporal modifier of verb/adjective'
udver: '2'
---

Examples of the used of deprel [obl:tmod]() in Indonesian:

 * _Kali ini saya setuju._ "This time I agree."
 * _Dia menulisnya tahun lalu._ "He wrote it last year."

~~~ sdparse
ROOT Kali ini saya setuju . \n This time I agree .
obl:tmod(Kali, setuju)
det(Kali, ini)
nsubj(setuju, saya)
root(ROOT, setuju)
punct(setuju, .)
~~~

~~~ sdparse
ROOT Dia menulis nya tahun lalu . \n He wrote it last year .
nsubj(Dia, menulis)
obj(menulis, nya)
root(ROOT, menulis)
obl:tmod(menulis, tahun)
acl(tahun, lalu)
punct(menulis, .)
~~~


