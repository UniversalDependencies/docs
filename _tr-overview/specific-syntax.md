---
layout: base
title:  'Syntax'
permalink: tr/overview/specific-syntax.html
---

# Specific constructions

## Existential sentences

In Turkish, existential sentences are (primarily) formed using *var* 'there is/are' and its negative counterpart *yok*. Although they do not exactly function like adjectives, following METU-Sabancı treebank, we mark them as `ADJ` and treat them like other nominals that require a copular suffix to function as predicates.  Note that, in the most common use, the 3rd person singular present copular marker is null. In general, we indicate this wit an additional IG, which marks the "predicatehood" of the verb, and also is in parallel with the other copular constructions.

We analyze this constructions like nominal predicates. *var* and *yok*
act as the head of the predicate, the thing that "exists" is the
subject:

~~~~ sdparse
Evde bira var -0 . \n There is beer at home.
cop(var, -0)
nsubj(var, beer)
nmod(var, evde)
~~~~

The same construction is used for expressing someone 'have/has' something or not. In this case, we mark the possessor with `nmod:own` (not to be confused with ``nmod:poss` used for nominal compounds with possessive marking).

~~~~ sdparse
Benim hiç param yok -tu . \n I did not have any money (lit: there was no money of mine)
cop(yok, -tu)
nsubj(yok, param)
advmod(yok, hiç)
nmod:own(yok, benim)
~~~~

Note that when possessor is not expressed, whether the sentence is an
existential ('there is/are') or a possession statement ('something
has') can be understood from the possessive marking (or lack of it) on
the subject. (**Q: should this be indicated by the dependency
relations**)

In subordinate clauses the copula *ol-* is used in existential predicates. In this case, we mark *ol-* as the head of the subordinate (existential) clause.

~~~~ sdparse
Evde ekmek olma -dığını bilmiyordum \n I did not know that there was no bread at home
nsubj(olma, ekmek)
nmod(olma, evde)
mark(olma, -dığını)
ccomp(bilmiyordum, olma)
~~~~

~~~~ sdparse
Ali'nin parası ol -duğu gün \n the day that Ali has/had money
nsubj(ol, parası)
nmod:own(ol, Ali'nin)
mark(ol, -düğü)
acl(gün, ol)
~~~~

Besides subordinate clauses, the copula *ol-* can be used in a similar
way (the meaning is slightly different than the cases where *var* or
*yok* is used). Again, in these cases, we mark *ol-* as the head of
the clause.

~~~~ sdparse
Bunun bir bedeli olur. \n This would have a consequence
nsubj(olur, bedeli)
det(bedeli, bir)
nmod:own(olur, bunun)
~~~~

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

## Yes/no questions an the question particle

Yes-no questions in Turkish is formed by question particle -mI
(mı/mi/mu/mü). UD currently does not have a clear way of marking
question particles.

We mark question particles as `AUX`, and (for now) introduce a new
feature `Question` that is set for question particles as well as
other words that introduce questions (`PronType=Int` is also used, but
likely it is not sufficient/suitable in this case).

The relation between the main predicate and the question mark is `aux`
(although we may want to subtype the relation and use `aux:q` in the future).

(**??**) If the *-mI* is attached to a copula, we chain the relations (the
question particle is headed by the copula, not the main predicate).

Besides forming general yes/no questions by attaching to a predicate,
question particle also attaches to the other constituents in a
sentence. For example,

Declarative sentence

~~~~ sdparse
Yarın siz Ankara'ya gideceksiniz. \n You will go to Ankara tomorrow.
~~~~

~~~~ sdparse
Yarın siz Ankara'ya gidecek misiniz. \n Will you go to Ankara tomorrow?
~~~~

~~~~ sdparse
Siz Ankara'ya yarın mı gideceksiniz. \n Will you go to Ankara TOMORROW? 
~~~~

~~~~ sdparse
Siz yarın Ankara'ya mı gideceksiniz. \n Will you go TO ANKARA tomorrow?
~~~~

~~~~ sdparse
Yarın Ankara'ya siz mi gideceksiniz. \n Will YOU go to Ankara tomorrow?
~~~~

Although there is a preference to place the question particle and the
word modifies close to the verb, other word orders are also possible:

~~~~ sdparse
Yarın siz mi Ankara'ya gideceksiniz. \n Will YOU go to Ankara tomorrow?
~~~~
or, 
~~~~ sdparse
Siz mi yarın Ankara'ya gideceksiniz. \n Will YOU go to Ankara tomorrow?
~~~~

In these cases, we attach the question particle to the word/phrase it
modifies, not to the predicate. Currently, we keep the same POS tag
and relation label.

Above covers the use of *-mI* as question particle. *-mI* may also be
used as a subordinating conjunction as in *Okulu bitirdin mi işin
hazız* 'when/if you finish the school, your job is waiting for you'.
In this case, we treat it like a `SCONJ` introducing a conditional
adverbial clause. It is attached to the head of the clause with
`mark`.

Another use of *-mI* is in emphatic reduplication, such as *güzel mi
güzel* 'very beautiful', *hızlı mı hızlı* 'very fast'. In these cases
it is attached to the preceding word with relation `advmod:emph`.

## Person names and honorifics

The person names are linked with `name` relation, and headed by the last part of the name.

Turkish honorifics normally follow the (first) name, *Ahmet Bey*
'Mr. Ahmet', *Necla Hanım* 'Ms. Necla', *Ayşe öğretmen* 'Teacher
Ayşe', *Mustafa Kemal Paşa* 'general Mustafa Kemal'. 
A few others introduced later, *Sayın*/*Bay*/*Bayan*, precede the last name or first and last name.
We use the relation `compound` and always mark the proper name as the head of the compound (although it is tempting to mark the title as head in the first case).

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


## Numbers

If numbers are spelled out completely, we use a combination of `conj`
and `coord` to mark it in a head-final fashion.

~~~~ sdparse
iki yüz otuz üç 
comp(yüz, iki)
conj(üç, otuz)
conj(üç, yüz)

~~~~




