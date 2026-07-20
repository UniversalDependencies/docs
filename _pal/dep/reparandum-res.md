---
layout: relation
title: 'reparandum:res'
shortdef: '<shortdef>'
udver: '2'
---

In the special case when a pronoun is doubled (e.g. the subject), the first is taken as relevant for the syntax and the second is set in `reparandum:res` relation to the respective head (i.e. resuming a referent for the sake of "repairing" the syntactic structure or in order to yield a well-formed structure).

- "And she, your sister, my wife, she has never said a lie!"
~~~ sdparse
u =š tō xwāh man zan ud u =š hagriz drō nē guft \n and her you sister I woman and and her ever lie not said
cc(guft, u-1)
nsubj(guft, =š-2)
det:poss(xwāh, tō)
appos(=š-2, xwāh)
det:poss(zan, man)
conj(xwāh, zan)
cc:nc(guft, ud)
cc:nc(guft, u-8)
reparandum:res(guft, =š-9)
advmod:tmod(guft, hagriz)
obj(guft, drō)
advmod(guft, nē)
~~~
<!-- Interlanguage links updated Út 30. června 2026, 11:00:43 CEST -->
