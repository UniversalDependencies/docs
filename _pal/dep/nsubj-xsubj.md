---
layout: relation
title: 'nsubj:xsubj'
shortdef: 'raised subject'
udver: '2'
---

The controlled or raised subject relation indicates the relation of a controlled verb and its controller or between an embedded verb and its raised subject.

It commonly applies to constructions with modal verbs and depictive adjectives.

- "For in the end you have to abandon everything."
~~~ sdparse
čē =t pad frazām hamāg abāyēd hištan \n because you.OBL in end all must.3SG let
obl(abāyēd, =t)
nsubj:xsubj(hištan, =t)
xcomp(abāyēd, hištan)
~~~

- "The (soul) of the righteous people becomes happy because of (its) escaping from Ahreman."
~~~ sdparse
ān ī ahlawān pad bōxtan az ahreman šād bawēd \n that EZ righteous.PL by escaping from Ahreman happy becomes
nsubj(bawēd, ān)
obl(bawēd, bōxtan)
xcomp(bawēd, šād)
nsubj:xsubj(šād, ān)
~~~

- "Then that body is called a corpse for that reason."
~~~ sdparse
ēg ān tan pad ān čim xwānīhēd nasāy \n then that body by that reason is_called corpse
advmod(xwānīhēd, ēg)
det(tan, ān)
nsubj(xwānīhēd, tan)
case(čim, pad)
det(čim, ān)
obl(xwānīhēd, čim)
xcomp(xwānīhēd, nasāy)
nsubj:xsubj(nasāy, tan)
~~~
