---
layout: relation
title: 'obl'
shortdef: '<shortdef>'
udver: '2'
---

Oblique relations are flagged by adpositions in Middle Persian. An exception are adverbial expressions of time (`obl:tmod`) and space (`obl:lmod`) as well as possessors, experiencers and, possibly, beneficiaries. What figures as an indirect object in many languages appears as a prepositional phrase in Middle Persian (usually with *ō* 'to').

- "And may you get the same degree of kindness and benevolence from the gods as your own!"
~~~ sdparse
u =t az yazdān ham paymān dōstīh ud hučašmīh xwēš bawēd \n and you.OBL from gods same measure kindness and benevolence own becomes
cc(bawēd, u)
obl(bawēd, =t)
obl(bawēd, yazdān)
case(yazdān, az)
nsubj(bawēd, paymān)
det(paymān, ham)
nmod(paymān, dōstīh)
conj(dōstīh, hučašmīh)
cc(hučašmīh, ud)
advcl(bawēd, xwēš)
~~~

- "That (which) is done after (his) decease reaches the peace of (his) soul at the moment the good deed is effected."
~~~ sdparse
ān pas az widordagīh kunīhēd pad hangām ī kirbag rawāgīhēd bē ō rāmišn ī ruwān rasēd \n that after from decease is_done at time REL good_deed is_effected forth to peace EZ soul reaches
nsubj(rasēd, ān)
advmod(widordagīh, pas)
case(widordagīh, az)
obl(kunīhēd, widordagīh)
rel:acl(ān, kunīhēd)
obl(rasēd, hangām)
case(hangān, pad)
acl:relcl(hangām, rawāgīhēd)
mark(rawāgīhēd, ī-8)
nsubj(rawāgīhēd, kirbag)
obl(rasēd, rāmišn)
advmod(rāmišn, bē)
case(rāmišn, ō)
nmod(rāmišn, ruwān)
det(ruwān, ī-14)
~~~

- "He has a son of high status as well as an adopted (son)."
~~~ sdparse
ā =š ud pus ī pāduxšāyīhā ud padīriftag ast \n there him and son EZ high_status and adopted is
advmod(ast, ā)
obl(ast, =š)
nsubj(ast, pus)
~~~

<!-- Interlanguage links updated Út 30. června 2026, 11:00:30 CEST -->
