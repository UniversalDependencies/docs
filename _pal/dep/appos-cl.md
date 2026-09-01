---
layout: relation
title: 'appos:cl'
shortdef: '<shortdef>'
udver: '2'
---

An appositional clause explains a single word, a phrase or clause in form of a clause. It does not contribute new information. As such, it is similar to the [parataxis:trans](/qtd/dep/parataxis-trans.html) tag.

Its usage is restricted to a context, which frequently occurs in Avestan-Middle Persian texts. Scribes use a Middle Persian equivalent for an Avestan expression and this equivalent may not be fully intelligible, either because it is an uncommon word or its syntactic embedding is ambiguous. The Middle Persian scribes insert words or phrases directly after the problematic passage and introduce them with one of the three explanatory particles *kū*, *hād*, or *ay*. This insertion is not properly integrated into the Middle Persian syntax and can be compared to a footnote in modern use.

The inner structure of the appositional clause is annotated like any other subclause but linked to its head by `appos:cl`. The antecedent can be a single word or a clause. If it is a clause, the clausal head is also heading the appositional clause.

- "Through his acting (happens) the augmentation of the world of living beings of righteousness, i.e., due to his deeds (it) prospers."
~~~ sdparse
pad ān ī ōy kunišn gēhān ī ahlāyīh frādahišnīh kū az kird ī ōy be abzāyēd \n by that EZ he doing living_beings EZ righteousness augmentation that from done EZ he PFV propsers
case(kunišn, pad)
det(kunišn, ān)
det(ōy-4, ī-3)
nmod(kunišn, ōy-4)
det(ahlāyīh, ī-7)
nmod(gēhān, ahlāyīh)
nmod(frādahišnīh, gēhān)
mark(abzāyēd,
obl(abzāyēd, kird)
case(kird, az)
det(ōy-14, ī-13)
nmod(kird, ōy-14)
advmod(abzāyēd, be)
apposcl(frādahišnīh, abzāyēd)
~~~

- "Unitl the time of Rapihwin the scoundrel heated, i.e. he started to feel hot, (he) perspired, i.e. (he) became quick on his feet."
~~~ sdparse
tā ō rapihwinzamān taft mar kū =š garm būd xwīst kū dōpāy būd \n until to Rapihwin_time heated scoundrel that him warm became sweated that two_footed became
advmod(rapihwinzamān, tā)
case(rapihwinzamān, ō)
obl:tmod(taft, rapihwinzamān)
nsubj(taft, mar)
mark(būd-10, kū-7)
obl(būd-10, =š)
xcomp(būd-10, garm)
apposcl(taft, būd-10)
conj(taft, xwīst)
apposcl(xwīst, būd-14)
mark(būd-14, kū-12)
xcomp(būd-14, dōpāy)
~~~
