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

- The dative alternation where the prepositional construction gets a similar analysis to the double object construction:

~~~ sdparse
έδωσε του μωρού γάλα
obj(έδωσε, γάλα)
iobj(έδωσε, μωρού)
~~~


~~~ sdparse
του έδωσε  γάλα
obj(έδωσε, γάλα)
obl(έδωσε, του)
~~~

~~~ sdparse
έδωσε γάλα σε το μωρό
obj(έδωσε, γάλα)
obl(έδωσε, μωρό)
case(μωρό, σε)
~~~

~~~ sdparse
δόθηκε γάλα σε το μωρό
nusbj:pass(δόθηκε, γάλα)
obl(δόθηκε, μωρό)
case(μωρό, σε)
~~~

~~~ sdparse
του δόθηκε γάλα
nusbj:pass(δόθηκε, γάλα)
obl(δόθηκε, του)
~~~
- Modern Greek has the so-called Dative Genitive that is assigned the dependency [obl](). 

~~~ sdparse
Της Ελένης της βάφτισε το παιδί. 
expl(βάφτισε, της-3)
obl(έδωσε, Eλένης)
det(Ελένης, Της-1)
obj(βάφτισε, παιδί)
~~~

~~~ sdparse
Της βάφτισε το παιδί. 
obl(βάφτισε, της)
obj(βάφτισε, παιδί)


`
- [obl]() is also used for temporal and locational nominal modifiers:

~~~ sdparse
Οι Έλληνες πολέμησαν με τους Πέρσες σε τον Μαραθώνα.
obl(πολέμησαν, Πέρσες)
case(Έλληνες, με)
nsubj(πολέμησαν, Έλληνες)
obl(πολέμησαν, Μαραθώνα)
case(Μαραθώνα, σε)
~~~

- The agent of a passive verb (with the optional subtype obl:agent):

~~~ sdparse
Ο Καίσαρας δολοφονήθηκε από τον Βρούτο.
nsubj:pass(δολοφονήθηκε, Καίσαρας)
obl:agent(δολοφονήθηκε, Βρούτο)
~~~
<!-- Interlanguage links updated Po 6. listopadu 2023, 21:43:16 CET -->

