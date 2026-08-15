---
layout: relation
title: 'expl'
shortdef: 'expletive'
udver: '2'
---

The `expl` relation is used in UD Greek for cases of clitic doubling. As a rule of thumb, clitics are assigned the [expl]() dependency when a coreferring core argument of the verb (object, indirect object, ccomp) exists, otherwise clitics are assigned the core dependencies [obj]() and [iobj](). 

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

This also applies when the coreferring core argument is dislocated rather than appearing in its canonical argument position. In such cases, the full NP is attached with the [dislocated]() relation, while the coreferential clitic is still assigned [expl](). For example, in *Αυτήν την ερώτηση δυσκολεύομαι να την απαντήσω* "This question, I find it difficult to answer", *Αυτήν την ερώτηση* is a dislocated object and the coreferential clitic *την* is analysed as `expl`. 

~~~ sdparse
Αυτήν την ερώτηση δυσκολεύομαι να την απαντήσω.
det(ερώτηση, Αυτήν)
det(ερώτηση, την-2)
dislocated(δυσκολεύομαι, ερώτηση)
xcomp(δυσκολεύομαι, απαντήσω)
mark(απαντήσω, να)
expl(απαντήσω, την-6)
~~~
<!-- Interlanguage links updated Út 30. června 2026, 11:00:07 CEST -->
