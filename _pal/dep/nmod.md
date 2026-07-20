---
layout: relation
title: 'nmod'
shortdef: '<shortdef>'
udver: '2'
---

Nominal modifiers can be linked by means of the *ezāfe* particle to their head word and appear before or after it. They include nouns, pronouns, proper names including adpositional phrases headed by such parts-of-speech.

- "in the name of the gods"
~~~ sdparse
pad nām ī yazadān \n in name Ezafe gods
case(nām, pad)
det(yazadān, ī)
nmod(nām, yazadān)
~~~

- "fear of pain"
~~~ sdparse
tars ī az dard \n fear EZ from pain
det(dard, ī)
case(dard, az)
nmod(tars, dard)
~~~

- "on that one path of righteousness"
~~~ sdparse
pad ēk ān ī ahlāyīh rāh \n in one that EZ righteousness way
case(rāh, pad)
nummod(rāh, ēk)
det(rāh, ān)
det(ahlāyīh, ī)
nmod(rāh, ahlāyīh)
~~~

- "by the mercifulness of the gods"
~~~ sdparse
pad yazdān xwābarīh \n by gods mercifulness
case(xwābarīh, pad)
nmod(xwābarīh, yazdān)
~~~

A peculiarity is the clausal noun phrase in Middle Persian. Deverbal nouns can be embedded like any other noun but inherited the verbal structure of their base, as if a whole clause is derived. For now, the dependents of such deverbal nouns are annotated as nominal dependents, which unfortunately ignores their respective syntactic embedding.

- "And the guardian and the mistress of the house take legal action as to **whether the mistress of the house but not the guardian shall take the oath**." (lit. about the guardian-not-but-mistress-of-the-house-oath-taking-ness)
~~~ sdparse
sālār ud kadagbānūg sālār nē bē kadagbānūg war warzišnīh rāy pahikārēnd \n guardian and house_lady guardian not but house_lady oath taking.NOUN for litigate
nsubj(pahikārēnd, sālār-1)
cc(kadagbānūg-3, ud)
conj(sālār-1, kadagbānūg-3)
nmod(warzišnīh, sālār-4)
advmod(warzišnīh, nē)
cc(kadagbānūg-7, bē)
conj(sālār-4, kadagbānūg-7)
nmod(warzišnīh, war)
obl(pahikārēnd, warzišnīh)
case(warzišnīh, rāy)
~~~
<!-- Interlanguage links updated Út 30. června 2026, 11:00:16 CEST -->
