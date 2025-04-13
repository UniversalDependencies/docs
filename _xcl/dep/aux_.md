---
layout: relation
title: 'aux'
shortdef: 'auxiliary'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "xcl/dep/aux.html"
udver: '2'
---

An `aux` (auxiliary) of a clause is a function word associated with a verbal predicate that expresses categories such as tense, mood, aspect, voice or evidentiality.

The Classical Armenian, the relation is ascribed to some [AUX](), which function as parts of analytical verb forms. These include: եմ/_em_ “to be”, its perfective counterpart լինիմ/_linim_ “to become”, and տամ/_tam_ “to give”. The auxiliaries եմ and լինիմ are used in the following constructions:
* The copula with non-verbal predicates, including predicates of location.
* Periphrastic past tenses (present form of եմ + past participle, imperfect form of եմ + past participle, aorist form of լինիմ + past participle of the main verb).
* Periphrastic future/subjunctive tenses (present subjunctive form of եմ + past participle, present subjunctive form of լինիմ + past participle, aorist subjunctive form of լինիմ + past participle of the main verb).

~~~ sdparse
այսպէս գրեալ է ի ձեռն մարգարէին ։ \n thus it is written by the prophet .
aux(գրեալ, է)
aux(written, is)
~~~

The auxiliary տամ is used to form periphrastic causative and is labelled [aux:caus]().

### References

Jensen, Hans. 1959. _Altarmenische Grammatik._ Heidelberg: Winter.

Kölligan, Daniel. 2021. The perfect in Classical Armenian. In: R. Crellin, Th. Jügel (eds.), _Perfects in Indo-European Languages and Beyond_. Benjamins: 352–376.
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:27 CET -->
