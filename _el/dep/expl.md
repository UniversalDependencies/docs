---
layout: relation
title: 'expl'
shortdef: 'expletive'
udver: '2'
---

The `expl` relation is used in UD Greek for cases of clitic doubling and in certain Verbal Multiword Expressions (VMWE):

1. Clitic doubling.

As a rule of thumb, clitics are assigned the [expl]() dependency when a coreferring core argument of the verb (object, indirect object, ccomp) exists, otherwise clitics are assigned the core dependencies [obj]() and [iobj](). 

~~~ sdparse
Της τον έδωσε της Καίτης τον αναπτήρα.
expl(έδωσε, Της-1)
iobj(έδωσε, Καίτης)
expl(έδωσε, τον-2)
dobj(έδωσε, αναπτήρα)
~~~

~~~ sdparse
Κι εγώ το προτιμώ που είμαστε όλοι μαζί:
ccomp(προτιμώ, μαζί)
expl(προτιμώ, το)
mark(μαζί, που)
~~~

~~~ sdparse
Της τον έδωσε.
iobj(έδωσε, Της)
obj(έδωσε, τον)
~~~


Modern Greek has the so-called Dative Genitive that also allows for clitic doubling. Dative Genitives are assigned the dependency [obl](). Similarly to the case of core arguments of verbs, when a coreferring dative genitive NP exists,  it is assigned the [obl]() dependency and the clitic the [exlp]() one,  otherwise the clitic is assigned the dependency [obl](). 

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
~~~

An [exlp]() dependency is also used when the coreferring core argument is dislocated, i.e., it does not  appear close to the head on which it depends. In such cases, the head of the dislocated phrase depends with the [dislocated]() relation on a suitable head, while the coreferential clitic depends with the relation [expl]() on the head that requires the dislocated phrase as an argument. For example, in *Αυτήν την ερώτηση δυσκολεύομαι να την απαντήσω* "This question, I find it difficult to answer", *Αυτήν την ερώτηση* is a dislocated direct object and the coreferential clitic *την* is assigned the relation [expl](). 

~~~ sdparse
Αυτήν την ερώτηση δυσκολεύομαι να την απαντήσω.
det(ερώτηση, Αυτήν)
det(ερώτηση, την-2)
dislocated(δυσκολεύομαι, ερώτηση)
xcomp(δυσκολεύομαι, απαντήσω)
mark(απαντήσω, να)
expl(απαντήσω, την-6)
~~~

2. VMWE

There are many Modern Greek VMWE where a clitic with no reference at all is a lexicalised word, i.e., a necessary constituent of the MWE. In the example below *Κι εγώ την άκουσα, μέθυσαν τα γραπτά μου.* 'And I it heard, got-drunk my writings' "Αnd I was tripping, even my writings got drunk." the clitic  *την*, which is assigned the relation [expl](), is necessary to obtain the meaning of the VMWE, which is "I am tripping" and not the compositional meaning, which is "I heard her". 

~~~ sdparse
Κι εγώ την άκουσα, μέθυσαν τα γραπτά μου.
expl(άκουσα, την-3)
nsubj((άκουσα, εγώ-2)
parataxis((άκουσα, μέθυσαν-6)
~~~


<!-- Interlanguage links updated Út 30. června 2026, 11:00:07 CEST -->
