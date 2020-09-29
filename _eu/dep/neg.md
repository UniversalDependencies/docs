---
layout: relation
title: 'neg'
shortdef: 'negation modifier'
---

The negation modifier (`neg`) is the relation between a negation word and the word it modifies. Modifiers labeled neg depend either on a noun (group “noun dependents”) or on a predicate (group “non-core dependents of clausal predicates”).

* Predicate negation:

***Ez** da inolako hazkunderik antzematen euskararen erabileran .*

*It has **not** perceived any growth in the use of Basque .*

~~~ sdparse
Ez da inolako hazkunderik antzematen euskararen erabileran .\n  Not has any growth perceived Basque_of use_the_in .

neg(antzematen-5, Ez-1)
aux(antzematen-5, da-2)
amod(hazkunderik-4, inolako-3)
nsubj(antzematen-5, hazkunderik-4)
nmod(erabileran-7, euskararen-6)
nmod(antzematen-5, erabileran-7)
punct(antzematen-5, .-6)
~~~

*Agian **ez** zela hain beharrezkoa .*

*That maybe it was **not** so necessary .*

~~~ sdparse
Agian ez zela hain beharrezkoa .\n  Maybe not was_that so necessary .

advmod(zela-3, Agian-1)
neg(zela-3, ez-2)
adv(beharrezkoa-5, hain-4)
cop(beharrezkoa-5, zela-3)
punct(zela-3, .-6)
~~~


* Noun negation:

*Gune **ez** hiritarretan bizi dira nagusiki .*

*(They) mainly live in **non** urban areas .*

~~~ sdparse
Gune ez hiritarretan bizi_dira nagusiki .\n  Areas non_urban_in live imainly .

nmod(bizi_dira-4, Gune-1)
neg(hiritarretan-3, ez-2)
amod(Gune-1, hiritarretan-3)
advmod(bizi_dira-4, nagusiki-5)
punct(bizi_dira-4, .-6)
~~~

<!-- Interlanguage links updated Út zář 29 18:41:26 CEST 2020 -->
