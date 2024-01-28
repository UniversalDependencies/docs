---
layout: relation
title: 'acl:attr'
shortdef: 'attributive clausal modifier'
udver: '2'
---

`acl:attr` marks such clausal modifiers of a noun that are participles or exocentric compounds used as attributes.

Having drunk of it, of its exhilarating drinks, Indra smashed the unopposable obstacles . (RV 9.23.7; trans. Jamison & Brereton).
~~~ sdparse
asyá pītvā́ mádānām índras vr̥trā́ṇi apratí jaghā́na . \n of-it having-drunk exhilarating Indra obstacles unopposable smashed

obj(jaghā́na, vr̥trā́ṇi)
acl:attr(vr̥trā́ṇi, apratí)
nsubj(jaghā́na, índras)
advcl:temp(jaghā́na, pītvā́)
obj(pītvā́, asyá)
nmod:appos(asyá, mádānām)
~~~

Make the eager gods drink the oblation!
~~~ sdparse
devā́n uśatás pāyaya havís \n gods eager make-drink oblation\\

iobj(pāyaya, devā́n)
obj(pāyaya, havís)
acl:attr(devā́n, uśatás)
~~~
