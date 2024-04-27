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
said to belong to that category is attached to it as the subject. Equational
constructions are analyzed analogously but see below on how to decide which
nominal is the subject.

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

### Multiple Copular Verbs?

By default the guidelines assume that at most one lemma can serve as copula
in a language; but there are exceptions.

Some languages that have verbal copulas also have other verbs where “being X”
is part of the predication, but it is accompanied by some other bit of
meaning, for example dynamic (“to become X”, “to stop being X”) or
relativizing (“to resemble X”, “to be considered X”). Some grammatical
descriptions regard some of these verbs as copulas but UD does not. Instead,
UD analyzes them as instances of secondary predication where the verb heads
the main clause and the nominal predicate is attached as its open complement
([xcomp]()). Note that an additional [nsubj]() relation between the nominal
predicate and a nominal in the main clause can be added in the [enhanced UD
representation](/u/overview/enhanced-syntax.html).

English [en] secondary predication: basic representation on the left,
enhanced representation on the right.

<table id="rc-example1"> <!--Ivan became a dancer . -->
<tbody><tr><td width="480">
<div class="conllu-parse">
1 Ivan   _ PROPN _ _ 2 nsubj _ _
2 became _ VERB  _ _ 0 root _ _
3 a      _ DET   _ _ 4 det _ _
4 dancer _ NOUN  _ _ 2 xcomp _ _
5 .      _ PUNCT _ _ 2 punct _ _
</div>
</td><td width="480">
<div class="conllu-parse">
# visual-style 4 1 nsubj color:blue
1 Ivan   _ PROPN _ _ 2 nsubj 4:nsubj _
2 became _ VERB  _ _ 0 root _ _
3 a      _ DET   _ _ 4 det _ _
4 dancer _ NOUN  _ _ 2 xcomp _ _
5 .      _ PUNCT _ _ 2 punct _ _
</div>
</td></tr></tbody>
</table>

<table id="rc-example1"> <!--The president appointed him a general . -->
<tbody><tr><td width="480">
<div class="conllu-parse">
1 The       _ DET   _ _ 2 det _ _
2 president _ NOUN  _ _ 3 nsubj _ _
3 appointed _ VERB  _ _ 0 root _ _
4 him       _ PRON  _ _ 3 obj _ _
5 a         _ DET   _ _ 6 det _ _
6 general   _ NOUN  _ _ 3 xcomp _ _
7 .         _ PUNCT _ _ 3 punct _ _
</div>
</td><td width="480">
<div class="conllu-parse">
# visual-style 6 4 nsubj color:blue
1 The       _ DET   _ _ 2 det _ _
2 president _ NOUN  _ _ 3 nsubj _ _
3 appointed _ VERB  _ _ 0 root _ _
4 him       _ PRON  _ _ 3 obj 6:nsubj _
5 a         _ DET   _ _ 6 det _ _
6 general   _ NOUN  _ _ 3 xcomp _ _
7 .         _ PUNCT _ _ 3 punct _ _
</div>
</td></tr></tbody>
</table>

Nevertheless, there are situations where a language should exceptionally be
allowed more than one verbal copula. Typically there is some kind of
deficient paradigm where one stem has only past tense forms and the other
only present tense; or one has affirmative and the other negative forms; or
one is in default imperfective aspect while the other is iterative. Depending
on the language-specific lemmatization rules, the forms may or may not be
grouped under one lemma. If each of them has its own lemma, both/all such
lemmas can be registered as copulas.

The boundaries here are somewhat blurry and must be specified at the
language-specific level (while maximizing parallelism at least between
closely related languages). For example, one could claim that the difference
between English _to be_ and _to become_ is aspectual and they qualify to be
two deficient parts of one verbal paradigm; but as English verbs do not
normally have such an opposition in their paradigms, it would be misguided to
pretend that _to become_ is just an aspect-marked form of the copula _to be_.
On the other hand, the same could be said about the opposition between _ser_
and _estar_ in Spanish (and their cognates in other Romance languages): the
former is used for permanent, the latter for temporary state. Nevertheless,
the UD guidelines explicitly say that both these verbs are allowed as
copulas, as both of them mean just “to be” and it would not be practical to
arbitrarily pick one of them as THE copula.

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

Language-specific word segmentation may play a role in distinguishing the
verbal strategy from verbal copulas. In Turkish [tr], the surface
representation looks either like the zero strategy (in present tense) or like
the verbal strategy (when past-tense suffix _-DI_ is attached to the nominal
predicate). But as of UD v2, the suffix is analyzed as a form of encliticized
copula _i_ and is treated as a separate syntactic word. Consequently, the
sentence is analyzed as using the verbal copula strategy.

~~~ sdparse
Necla/PROPN öğretmen/NOUN =di/AUX ./PUNCT \n Necla teacher was .
nsubj(öğretmen, Necla-1)
nsubj(teacher, Necla-6)
cop(öğretmen, =di)
cop(teacher, was)
punct(öğretmen, .-4)
punct(teacher, .-9)
~~~


# TO DO:

Perhaps each of the following should have its own page in the documentation. Or at least location+existence+possession should be separate.

* Property predication: Not at the same level of detail. Refer to object predication, quickly show examples where property predication works the same.
  * Some languages (Chinese) may use different strategies for property predication (zero) vs. object predication (copula).
  * In Chinese it may be difficult to establish whether the copula is verbal, as there is no verbal morphology.
  * The property can be a numeral.
  * The property can be a case-marked nominal ("for him", "in shape").
* Object-like predication with a clause instead of the object nominal (_the problem is that he is missing_).
* Location + existence.
* Possession + existence.
