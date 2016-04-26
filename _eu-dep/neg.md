---
layout: relation
title: 'neg'
shortdef: 'negation modifier'
---

The negation modifier (`neg`) is the relation between a negation word and the word it modifies. Modifiers labeled neg depend either on a noun (group “noun dependents”) or on a predicate (group “non-core dependents of clausal predicates”).

* Predicate negation:

***ez** da inolako hazkunderik antzematen euskararen erabileran*

***not** is       any   growth       perceived any of the Basque in the use* 

*it is **not** perceived any growth in the use of Basque*

~~~ sdparse
ez da inolako hazkunderik antzematen euskararen erabileran \n  it is not perceived any growth in the use of Basque

neg(antzematen, ez)
aux(antzematen, da)
amod(hazkunderik, inolako)
nsubj(antzematen, hazkunderik)
nmod(erabileran, euskararen)
nmod(antzematen, erabileran)
~~~

*agian **ez** zela hain beharrezkoa*

*maybe **not** that_was so necessary*

*that maybe it was **not** so necessary*

~~~ sdparse
agian ez zela hain beharrezkoa \n  that maybe it was not so necessary

advmod(zela, agian)
neg(zela, ez)
adv(beharrezkoa, hain)
cop(zela, beharrezkoa)
~~~


* Noun negation:

*Gune **ez** hiritarretan bizi dira nagusiki*

***non** urban areas (they) live mainly*

*(they) mainly live in **non** urban areas*

~~~ sdparse
Gune ez hiritarretan bizi dira nagusiki \n  mainly live in non urban areas

nmod(bizi_dira, Gune)
neg(hiritarretan, ez)
amod(Gune, hirritarretan)
advmod(bizi_dira, nagusiki)
~~~

