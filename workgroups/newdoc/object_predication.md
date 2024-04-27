---
layout: base
title:  'Object Predication'
udver: '2'
---

# Clauses with Predication of Object Concepts and Equational Clauses

Prototypical predication is predication of action concepts, where the 
predicate is a verb. Here we consider one type of nonprototypical 
predication, namely predication of an object (entity) concept. One entity 
(typically, but not necessarily, denoted by a definite nominal) is predicated 
to belong to a category of entities (typically denoted by an indefinite 
noun). Example: _Ivan is a dancer._

This construction is similar but not necessarily identical to equational 
clauses where two definite nominals are said to refer to the same entity. 
Example: _Ivan is the winner of this dancing competition._

The exact UD analysis of the construction depends on the strategy used by the 
language to express it. What the analyses have in common is that the category 
being predicated (e.g., _dancer_) is the root of the clause, while the entity 
said to belong to that category is attached to it as the subject.

## Zero Strategy

In some languages, the subject and the categorial predicate are simply 
juxtaposed. “Zero” refers to the absence of any verbal inflection and any 
linking morpheme between the subject and the predicate. 

Waskia [wsk] (Ross and Natu Paol 1978:10; Stassen 1997:144; Croft 2022:299)

~~~ sdparse
Aga/PRON bawa/NOUN taleng-duap/NOUN ./PUNCT \n My brother policeman .
nmod(bawa, Aga)
nmod(brother, My)
nsubj(taleng-duap, bawa)
nsubj(policeman, brother)
punct(taleng-duap, .-4)
punct(policeman, .-9)
~~~

Russian [ru]

~~~ sdparse
Иван/PROPN танцор/NOUN ./PUNCT \n Ivan tancor . \n Ivan dancer .
nsubj(танцор, Иван)
nsubj(tancor, Ivan-5)
nsubj(dancer, Ivan-9)
punct(танцор, .-3)
punct(tancor, .-7)
punct(dancer, .-11)
~~~

The same strategy may be used in equational constructions. The main 
difference is that, due to the symmetrical nature of these constructions, it 
may not be clear which of the nominals should be the predicate and which one 
is the subject (one can say either _Ivan is the winner_ or _The winner is 
Ivan_). Language-specific documentation should say whether there are any 
criteria to make this distinction consistently; if no such criteria are 
available, the first nominal should be subject and the second one is 
predicate.

Maltese [mt] (Borg 1987/88:63; Stassen 1997:211; Croft 2022:298)

~~~ sdparse
Pietru/PROPN l-/DET eżaminatur/NOUN ./PUNCT \n Pietru the examiner .
nsubj(eżaminatur, Pietru-1)
nsubj(examiner, Pietru-6)
det(eżaminatur, l-)
det(examiner, the)
punct(eżaminatur, .-4)
punct(examiner, .-9)
~~~

## Nonverbal Copula Strategy

Some languages use a word or morpheme that signals the predication and/or 
links the subject to the predicate. This linking element may be a special 
verb (see Verbal Copula below) or it may lack verbal inflection. In the 
latter case we call it ‘nonverbal copula’. In good many languages a personal 
or demonstrative pronoun is used for this purpose and then it keeps the UPOS 
tag that it uses in other functions (that is, [PRON]() or [DET]()). Otherwise 
it is tagged [AUX](). Its relation to the predicate is [cop](). 

Maltese [mt] optionally uses a personal pronoun as copula (Borg 1987/88:63;
Stassen 1997:211; Croft 2022:298):

~~~ sdparse
Pietru/PROPN hu/PRON l-/DET eżaminatur/NOUN ./PUNCT \n Pietru he the examiner .
nsubj(eżaminatur, Pietru-1)
nsubj(examiner, Pietru-7)
cop(eżaminatur, hu)
cop(examiner, he)
det(eżaminatur, l-)
det(examiner, the)
punct(eżaminatur, .-5)
punct(examiner, .-11)
~~~

Polish [pl] uses a demonstrative pronoun instead:
<!-- In fact, as of UD 2.13, the Polish treebanks tag _to_ as `AUX` but I believe that it is a mistake. -->

~~~ sdparse
Moja/DET miesięczna/ADJ pensja/NOUN to/DET czterysta/NUM peso/NOUN ./PUNCT \n My monthly salary that four-hundred pesos .
det(pensja, Moja)
det(salary, My)
amod(pensja, miesięczna)
amod(salary, monthly)
nsubj(peso, pensja)
nsubj(pesos, salary)
cop(peso, to)
cop(pesos, that)
nummod(peso, czterysta)
nummod(pesos, four-hundred)
punct(peso, .-7)
punct(pesos, .-15)
~~~

Russian [ru] can also use a demonstrative pronoun instead of the zero strategy:
<!-- In fact, as of UD 2.13, the Russian treebanks attach _это_ as `expl` but I believe that it is a mistake. -->

~~~ sdparse
Отмена/NOUN недействующих/ADJ функций/NOUN –/PUNCT это/DET формальный/ADJ акт/NOUN ./PUNCT \n Otmena nedejstvujuščix funkcij – èto formal'nyj akt . \n Canceling inactive functions – that formal act .
nmod(Отмена, функций)
nmod(Otmena, funkcij)
nmod(Canceling, functions)
amod(функций, недействующих)
amod(funkcij, nedejstvujuščix)
amod(functions, inactive)
punct(Отмена, –-4)
punct(Otmena, –-13)
punct(Canceling, –-22)
nsubj(акт, Отмена)
nsubj(akt, Otmena)
nsubj(act, Canceling)
cop(акт, это)
cop(akt, èto)
cop(act, that)
amod(акт, формальный)
amod(akt, formal'nyj)
amod(act, formal)
punct(акт, .-8)
punct(akt, .-17)
punct(act, .-26)
~~~

Awtuw [kmn] (Osborne 1974:60; Stassen 1997:144; Croft 2022:295) uses a 
nonverbal copula that originates in a focus marker rather than a pronoun:

~~~ sdparse
Wan/PRON po/AUX rumeyæn/NOUN ./PUNCT \n I FOC human-being .
nsubj(rumeyæn, Wan)
nsubj(human-being, I)
cop(rumeyæn, po)
cop(human-being, FOC)
punct(rumeyæn, .-4)
punct(human-being, .-9)
~~~

## Verbal Copula Strategy

In many languages the copula has verb-like inflection and behavior (it may be 
even used as a main verb in other contexts). In UD we treat such copulas as 
auxiliaries whose function is to provide verbal features (e.g., [Tense]()) to 
the nominal predicate. They are tagged [AUX]() and attached to the nominal 
predicate as [cop]().

English [en]

~~~ sdparse
Ivan/PROPN is/AUX a/DET dancer/NOUN ./PUNCT
nsubj(dancer, Ivan)
cop(dancer, is)
det(dancer, a)
punct(dancer, .)
~~~ 

Russian [ru] uses the zero strategy (or a nonverbal copula) in the present 
indicative, but it uses a verbal copula in other tenses and moods. It also 
marks the nominal predicate with the instrumental case, while the subject 
stays in the nominative and the copula agrees with it in [Number]() and 
[Gender]().

~~~ sdparse
Иван/PROPN был/AUX танцором/NOUN ./PUNCT \n Ivan byl tancorom . \n Ivan was dancer .
nsubj(танцором, Иван)
nsubj(tancorom, Ivan-6)
nsubj(dancer, Ivan-11)
cop(танцором, был)
cop(tancorom, byl)
cop(dancer, was)
punct(танцором, .-4)
punct(tancorom, .-9)
punct(dancer, .-14)
~~~

## Verbal Strategy

Finally, some languages will treat the object predicate as a verb rather than 
a noun, and apply verbal inflection to it. As a consequence, the predicate 
will be analyzed in UD as a [VERB]() and the construction will be 
unrecognizable from normal predication of action concepts. (Note that the 
MISC column can optionally carry information about the verb being derived 
from a noun, but this is neither required nor regulated by the UD 
guidelines.) 

Classical Nahuatl [nci] “I am a doctor” (compare to _Ni-chōca_ “I am crying”):

~~~ sdparse
Ni-tīcitl/VERB ./PUNCT \n 1SG-doctor .
punct(Ni-tīcitl, .-2)
punct(1SG-doctor, .-5)
~~~

# Other Remarks: Secondary predication, deficient paradigms, property predication, clause as a predicate...

Is the Turkish strategy Verbal, or Verbal Copula?
In languages like Chinese it may be difficult to decide that the copula is verbal because the Chinese verbs do not inflect.

