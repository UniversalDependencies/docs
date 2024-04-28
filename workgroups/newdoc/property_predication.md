---
layout: base
title:  'Property Predication'
udver: '2'
---

# Clauses with Predication of Property Concepts

Property predication uses similar strategies as [object
predication](object_predication.html). It is recommended to read about object
predication first, as not all details are repeated here.

Even though the inventory of strategies is similar, a concrete language may
use different strategies for object and property predication.

Properties are typically expressed with adjectives. Example: _John is smart._

The exact UD analysis of the construction depends on the strategy used by the
language to express it. What the analyses have in common is that the property
(e.g., _smart_) is the root of the clause, while the entity said to have the
property is attached to it as the subject.

## Zero Strategy

The subject and the property are juxtaposed.

Waskia [wsk] (Ross and Natu Paol 1978:10; Stassen 1997:144; Croft 2022:299)

~~~ sdparse
Kawam/NOUN mu/DET ititi/ADJ ./PUNCT \n House the new.PL .
det(Kawam, mu)
det(House, the)
nsubj(ititi, Kawam)
nsubj(new.PL, House)
punct(ititi, .-4)
punct(new.PL, .-9)
~~~

Russian [ru]

~~~ sdparse
Иван/PROPN умный/ADJ ./PUNCT \n Ivan umnyj . \n Ivan smart .
nsubj(умный, Иван)
nsubj(umnyj, Ivan-5)
nsubj(smart, Ivan-9)
punct(умный, .-3)
punct(umnyj, .-7)
punct(smart, .-11)
~~~

Chinese [zh] uses a verbal copula for object predication but that copula is
not used for property predication. Properties use either zero strategy (Li
and Thompson 1981:148,143; Croft 2022:300) or a new nonverbal copula (see
below).

~~~ sdparse
她/PRON 胖/ADJ 。/PUNCT \n Tā pàng . \n She fat .
nsubj(胖, 她)
nsubj(pàng, Tā)
nsubj(fat, She)
punct(胖, 。)
punct(pàng, .-7)
punct(fat, .-11)
~~~

## Nonverbal Copula Strategy

Maltese [mt]

~~~ sdparse
Pietru/PROPN huwa/PRON intelliġenti/ADJ ./PUNCT \n Pietru he intelligent .
nsubj(intelliġenti, Pietru-1)
nsubj(intelligent, Pietru-6)
cop(intelliġenti, huwa)
cop(intelligent, he)
punct(intelliġenti, .-4)
punct(intelligent, .-9)
~~~

Contemporary Chinese [zh] has come to use 很 / _hěn_ “very” in a copula-like
function with properties (i.e., intensive meaning is not always entailed; Li
and Thompson 1981:143–144; Croft 2022:300).

~~~ sdparse
她/PRON 很/AUX 胖/ADJ 。/PUNCT \n Tā hěn pàng . \n She very fat .
nsubj(胖, 她)
nsubj(pàng, Tā)
nsubj(fat, She)
cop(胖, 很)
cop(pàng, hěn)
cop(fat, very)
punct(胖, 。)
punct(pàng, .-9)
punct(fat, .-14)
~~~

## Verbal Copula Strategy

German [de]: predicative form _klein_ vs. attributive _das kleine Auto, ein kleines Auto_

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

Classical Nahuatl [nci] “I am a doctor” (Croft 2022:294; compare to _Ni-chōca_ “I am crying”):

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
