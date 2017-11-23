---
layout: base
title:  'Working Group on Expletives'
udver: '2'
---

# Working Group on Expletives

As a tentative definition of expletives, we can characterize them as pro-forms (typically third person pronouns or locative pro-adverbs) that occur in core argument positions but are non-referential (and therefore not assigned a semantic role). There are two main issues regarding expletives in UD:

1. In which constructions are expletives found?
2. Should expletives be treated as core arguments or not?

Below we first review the range of constructions where expletives have been claimed to exist and then discuss the relation between expletives and core arguments. 

## Subject Expletives

Expletives in subject position have traditionally been postulated in (at least) three types of constructions:

1. Weather verbs
2. Existential sentences
3. Extraposition of clausal subjects

Weather verbs are 0-place predicates like "rain" and "snow", which typically take an expletive pronoun as their subject in languages that do not allow pro-drop. In this case, the predicate never assigns a semantic role to its subject and there is no other potential argument in the clause. The Swedish and Norwegian UD treebanks currently use `expl` for the subject of weather verbs, while Dutch uses `nsubj`.

~~~ sdparse
det regnar \n it rains
expl(regnar, det)
~~~

Existential sentences (sometimes called presentation sentences) are sentences that involve an intransitive verb and an indefinite noun phrase that is interpreted as the logical subject of the verb but does not occur in the canonical subject position, which is instead filled by an expletive. 

~~~ sdparse
en katt sitter på mattan \n a cat sits on the mat
nsubj(sitter, katt)
obl(sitter, mattan)
~~~
~~~ sdparse
det sitter en katt på mattan \n it sits a cat on the mat
expl(sitter, det)
nsubj(sitter, katt)
obl(sitter, mattan)
~~~

The Swedish and Norwegian UD treebanks treat the dummy pronoun as an expletive and analyzes the indefinite noun phrase as `nsubj` to capture the parallelism to the simple intransitive sentence. However, there are good arguments that the indefinite noun phrase syntactically behaves as an object in the second sentence. The Dutch UD treebank also treats the indefinite noun phrase as `nsubj` (and it seems to behave like a subject in Dutch) but analyzes the putative expletive as `advmod` (which is a pronominal adverb similar to English "there"). 

Extraposition of clausal subjects exhibit a similar parallelism to simple clausal subjects:

~~~ sdparse
att hon kom förvånade mig \n that she came surprised me
csubj(förvånade, kom)
obj(förvånade, mig)
~~~
~~~ sdparse
det förvånade mig att hon kom \n it surprised me that she came
expl(förvånade, det)
csubj(förvånade, kom)
obj(förvånade, mig)
~~~

Swedish, Norwegian and Dutch all follow English in using `expl` for the expletive pronoun and `csubj` for the clause. English uses the same type of annotation for expletives with raising verbs, even though they have no parallel construction without the expletive.

~~~ sdparse
it seems that she came
csubj(seems, came)
expl(seems, it)
~~~
~~~ sdparse
* that she came seems
~~~

## Object Expletives

Expletives in object position have been assumed in (at least) two types of constructions:

1. Extraposed complement clauses
2. Inherent reflexives

Extraposed complement clauses, with or without a corresponding expletive pronoun, typically occur together with a predicative `xcomp` as in the following examples.

~~~ sdparse
jag fann förvånande att hon kom \n I found surprising that she came
nsubj(fann, jag)
xcomp(fann, förvånande)
ccomp(fann, kom)
~~~
~~~ sdparse
jag fann det förvånande att hon kom \n I found it surprising that she came
nsubj(fann, jag)
expl(fann, det)
xcomp(fann, förvånande)
ccomp(fann, kom)
~~~

Inherent reflexives are verbs that can only be used with a reflexive pronoun in object position and do not occur as transitive verbs with ordinary objects. UD currently assumes that the reflexive pronoun in this case is non-referental and therefore should be analysed as an expletive.

~~~ sdparse
hon kände sig sjuk \n she felt (herself) sick
nsubj(känd, hon)
expl(kände, sig)
~~~
~~~ sdparse
*hon kände honom sjuk \n she felt him sick
~~~

## Expletives and Core Arguments

Expletives typically behave like core arguments syntactically in that they satisfy many of the standard tests for subjecthood and objecthood. In some constructions (weather verbs, inherent reflexives), they are the only candidates for the given core argument relation and differ from a normal argument only in being non-referential and lacking a semantic role. In other constructions (existentials, extraposition of subject/complement clauses), the core argument properties are split between the expletive, which often satisfy most of the formal criteria, and a referential phrase that is assigned the semantic role normally associated with the core argument relation.

The current UD taxonomy treats expletives as distinct from core arguments, which implies that `nsubj` and `obj` are restricted to referential subjects and object, respectively. 
