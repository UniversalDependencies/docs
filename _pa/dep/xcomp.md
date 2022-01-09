---
layout: relation
title:  'xcomp'
shortdef : 'open clausal complement'
udver: '2'
---

Some verbs (e.g. ਚਾਹੁਣਾ *cāhuṇā* "to want") can select a clausal complement that does not have its own subject, instead with the subject being a sister of that complement (e.g. the object of the verb).

~~~ sdparse
ਮੈਂ ਜਾਣਾ ਚਾਹੁੰਦਾ ਹਾਂ \n I to.go want am
nsubj(ਚਾਹੁੰਦਾ, ਮੈਂ)
nsubj(want, I)
xcomp(ਚਾਹੁੰਦਾ, ਜਾਣਾ)
xcomp(want, to.go)
~~~

Such complemenets can also take genitive, ablative, or accusative case licensed by the verb.

~~~ sdparse
ਰਾਮ ਨੇ ਜਾਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਿੱਤੀ \n Ram ERG going GEN trying did
nsubj(ਕਿੱਤੀ, ਰਾਮ)
nsubj(did, Ram)
xcomp(ਕਿੱਤੀ, ਜਾਣ)
xcomp(did, going)
mark(ਜਾਣ, ਦੀ)
mark(going, GEN)
compound:lvc(ਕਿੱਤੀ, ਕੋਸ਼ਿਸ਼)
compound:lvc(did, trying)
~~~

~~~ sdparse
ਮੈਂ ਉਸਨੂੰ ਘਰ ਜਾਣ ਨੂੰ ਆਖਿਆ \n I to.her home going ACC told
nsubj(ਆਖਿਆ, ਮੈਂ)
nsubj(told, I)
iobj(ਆਖਿਆ, ਉਸਨੂੰ)
iobj(told, to.her)
xcomp(ਆਖਿਆ, ਜਾਣ)
xcomp(told, going)
~~~