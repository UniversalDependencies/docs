---
layout: relation
title: 'det'
shortdef: 'determiner'
udver: '2'
---

Function label for determiners, including definite and indefinite articles governed by their noun, but also the postposed ⲛⲓⲙ ‘any’ and the determiner ⲕⲉ ‘other’, which is unique in being allowed to stand for an article. 


~~~ sdparse
ⲣⲱⲙⲉ/NOUN ⲛⲓⲙ/PRON \n any man

det(ⲣⲱⲙⲉ, ⲛⲓⲙ)
~~~

~~~ sdparse
ⲕⲉ/DET ⲣⲱⲙⲉ/NOUN \n another man

det(ⲣⲱⲙⲉ, ⲕⲉ)
~~~

## Double determiners

If a noun has both a normal article and ⲕⲉ, both are marked as `det`:

~~~ sdparse
ϩⲉⲛ/DET ⲕⲉ/DET ϩⲛⲁⲁⲩ/NOUN \n some other matters

det(ϩⲛⲁⲁⲩ, ⲕⲉ)
det(ϩⲛⲁⲁⲩ, ϩⲉⲛ)
~~~

## Possessive determiners

Both pre-posed possessives and the old suffix pronouns are treated as determiners:

~~~ sdparse
ⲡⲉⲥ/DET ⲏⲓ/NOUN \n her house

det(ⲏⲓ, ⲡⲉⲥ)
~~~

Note that the suffix possessors are pure pronouns, and are therefore tagged as PRON (but the relation is still `det`):

~~~ sdparse
ⲣⲛⲧ/NOUN ⲕ/PRON \n your name

det(ⲣⲛⲧ, ⲕ)
~~~

## The p-et relative construction

Articles expanded by a relative clause in the p-et construction are actually stand-ins for a full NP head, so they are **not** labeled using the function label `det`. Rather, they are given whatever function that NP has in the sentence, see for instance both 'articles' in this example:

~~~ sdparse
ⲃⲁⲥⲓⲙⲟⲥ/PROPN ⲡ/DET ⲉⲧ/SCONJ ϣⲟⲟⲡ/VERB ϩⲛ/ADP ⲛ/DET ⲉⲧ/SCONJ ⲟⲩⲁⲁⲃ/VERB \n Basimos, the one who is among the ones who are holy

appos(ⲃⲁⲥⲓⲙⲟⲥ,ⲡ-2)
acl(ⲡ,ϣⲟⲟⲡ)
mark(ϣⲟⲟⲡ,ⲉⲧ-3)
acl(ⲛ,ⲟⲩⲁⲁⲃ)
mark(ⲟⲩⲁⲁⲃ,ⲉⲧ-7)
obl(ϣⲟⲟⲡ,ⲛ)
~~~
<!-- Interlanguage links updated Út zář 29 20:43:16 CEST 2020 -->
