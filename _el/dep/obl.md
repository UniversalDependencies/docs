---
layout: relation
title: 'obl'
shortdef: 'oblique nominal'
udver: '2'
---

In Modern Greek, the [obl]() relation is used for a nominal (noun, pronoun, noun phrase, nominalised phrase) functioning as a non-core (oblique) argument or 
adjunct. This means that it functionally corresponds to an adverbial attaching to a verb, adjective or other adverb.

The [obl]() relation can be further specified by the case. In conjunction with the [case]() relation, it provides a uniform
analysis for:

- Verbs selecting an obligatory prepositional complement:

~~~ sdparse
Οι Έλληνες πολέμησαν με τους Πέρσες σε τον Μαραθώνα. 
obl(πολέμησαν, Πέρσες)
case(Έλληνες, με)
nsubj(πολέμησαν, Έλληνες)
~~~



- Modern Greek has the so-called Dative Genitive that is assigned the dependency [obl](). 

~~~ sdparse
Της Ελένης της βάφτισε το παιδί. 
expl(βάφτισε, της-3)
obl(βάφτισε, Eλένης)
det(Ελένης, Της-1)
obj(βάφτισε, παιδί)
~~~

~~~ sdparse
Της βάφτισε το παιδί. 
obl(βάφτισε, της)
obj(βάφτισε, παιδί)
~~~

[obl]()  is used with multiword expressions (because sometimes it is not clear whether the dative genitive stands for an [iobj]() or for a genitive denoting inalienable possession.)

~~~ sdparse
Tης έκαψε την καρδιά.
obl(έκαψε, της)
obj(έκαψε, καρδιά)
root(έκαψε)
~~~

`
- [obl]() is also used for temporal and locational nominal modifiers introduced with an adposition or just bare:

~~~ sdparse
Οι Έλληνες πολέμησαν με τους Πέρσες σε τον Μαραθώνα.
obl(πολέμησαν, Πέρσες)
case(Έλληνες, με)
nsubj(πολέμησαν, Έλληνες)
obl(πολέμησαν, Μαραθώνα)
case(Μαραθώνα, σε)
~~~


~~~ sdparse
## trans = “I go to school”
Πάω σχολείο 
obl(πάω, σχολείο)
~~~

In the second example, the word *σχολείο* cannot be inflected or modified.

- The agent of a passive verb (with the optional subtype obl:agent):

~~~ sdparse
Ο Καίσαρας δολοφονήθηκε από τον Βρούτο.
nsubj:pass(δολοφονήθηκε, Καίσαρας)
obl:agent(δολοφονήθηκε, Βρούτο)
~~~

<!-- Interlanguage links updated Po 11. listopadu 2024, 20:11:15 CET -->
