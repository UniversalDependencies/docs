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
and Thompson 1981:143–144; Croft 2022:300). In the copular function, 很 should
be tagged [AUX]() and attached as [cop](); however, it may be difficult for
the annotators to distinguish the copular function from a normal [advmod]()
function.

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

German [de] uses an uninflected form of adjectives when they are used
predicatively (cf. _Das auto ist klein_ “The car is small” with attributive
_das kleine Auto, ein kleines Auto_ “the small car, a small car”).

~~~ sdparse
Das/DET Auto/NOUN ist/AUX klein/ADJ ./PUNCT \n The car is small .
det(Auto, Das)
det(car, the)
nsubj(klein, Auto)
nsubj(small, car)
cop(klein, ist)
cop(small, is)
punct(klein, .-5)
punct(small, .-11)
~~~

Russian [ru] uses the zero strategy in the present indicative, but it uses a
verbal copula in other tenses and moods. It also marks the adjective with the
instrumental case.

~~~ sdparse
Иван/PROPN был/AUX умным/ADJ ./PUNCT \n Ivan byl umnym . \n Ivan was smart .
nsubj(умным, Иван)
nsubj(umnym, Ivan-6)
nsubj(smart, Ivan-11)
cop(умным, был)
cop(umnym, byl)
cop(smart, was)
punct(умным, .-4)
punct(umnym, .-9)
punct(smart, .-14)
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
