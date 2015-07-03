---
layout: base
title:  'Syntax'
permalink: tr/overview/specific-syntax.html
---

# Specific constructions


## Noun compounds

Turkish noun compounds are generally classified into three classes:

1. **Bare compounds:** *tahta kapı* 'wooden door', 
   *kadın subay* 'woman army officer', 
   *İspanyol ressam* 'Spanish painter', 
   *Güniz Sokak* 'Güniz street'
2. **-(s)I compounds**, possessive marked head with bare complements:
   *otobüs bileti* 'bus ticket',
   *Tuz Gölü* 'Salt Lake',
   *Asya ülkesi* 'Asian country'.
3. **genitive-posssessive** construction:
   *arabanın motoru* 'engine of the car/car's engine',
   *babamın işi* 'my father's job',
   *Ali'nin arabası* 'Ali's car',
   *Benim arkadaşlarım* 'My friends'.

We link the first kind with `compound`, while the other two are linked
with `nmod:poss`.

Note that the compounds can be complex with arbitrary structure, as in
'[[İstanbul üniversites-i]-nin [tahta kapı]-sı]'.

Furthermore, the nominals can include subordinate clauses, like
*[Ali'nin henüz görmediği] film* 'the movie (that) Ali hasn't seen
yet'. In these cases, the relation is `ccomp` `xcomp`.

**We need more specific guidelines**, or maybe a new relation for marking compounds with subordinate clauses. 

## Question particle

Yes-no questions in Turkish is formed by question particle -mI
(mı/mi/mu/mü). UD currently does not have a clear way of marking
question particles.

We mark question particles as `AUX`, and (for now) introduce a new
feature `Question` that is set for question particles as well as
other words that introduce questions (`PronType=Int` is also used, but
likely it is not sufficient/suitable in this case).

The relation between the main predicate and the question mark is `aux`
(although we may want to subtype the relation and use `aux:q` in the future).

If the *-mI* is attached to a copula, we chain the relations (the
question particle is headed by the copula, not the main predicate).

## Person names and honorifics

The person names are linked with `name` relation, and headed by the last part of the name.

Turkish honorifics normally follow the (first) name, *Ahmet Bey*
'Mr. Ahmet', *Necla Hanım* 'Ms. Necla', *Ayşe öğretmen* 'Teacher
Ayşe'. A few others introduced later, *Sayın*/*Bay*/*Bayan*, precede
the last name or first and last name.
We use the relation `compound` and always mark the proper name as the head of the compound. The title/honorific is always attached to the head.

## Noun-verb compounds / light verbs

A number of verbs in Turkish combine with nouns or adjectives to form predicates.
Most common verbs used in constructions are verbs, *et-*, *yap-* and *ol-*, but others such as *gel-*, *dur-*, *kal-*, *çık-*, *düş-*, *çek-* may be used to form compound verbs.
The usage of these verbs is not restricted to this 'light' usage,
they may also be used as normal (heavy) verbs.
For example, *çek-* 'pull' is used as a light verb in *fotoğraf çek-* 'take photo', but as a 'heavy' verb in *saç çek-* 'pull hair'.

The copula/auxiliary  *ol-* should only marked as part of a light-verb compound in clear lexicalized cases, e.g., *sebep ol-* 'cause' but not *hasta ol-* 'be/become ill'.

The relation between a light verb and the noun it modifies noun is `compound`.
The noun should be marked as the head of the compound.

~~~~ sdparse
Ali Ahmet'e yardım etti. \n Ali helped ahmet
compound(yardım, etti)
nsubj(yardim, Ali)
dobj(yardim, Ahmet)
~~~~


## Noun compounds

If numbers are spelled out completely, we use a combination of `conj`
and `coord` to mark it in a head-final fashion.

~~~~ sdparse
iki yüz otuz üç 
comp(yüz, iki)
conj(üç, otuz)
conj(üç, yüz)

~~~~




