---
layout: base
title:  'Syntax'
permalink: fi/overview/specific-syntax.html
---

# Specific constructions

Please note: this language-specific overview of guidelines for
specific constructions is a work in progress.

---

## Subjects and objects
<!-- this section originally from TDT guidelines section 5.1 -->

Finnish subjects and objects are straightforward to recognize in their
prototypical cases, but both phenomena also have some difficult cases,
which are discussed here.

The subject is the primary complement of the verb, usually denoting
the entity doing something. In addition to the *basic subject* (see
[ISK §910](http://scripta.kotus.fi/visk/sisallys.php?p=910)), also
*existential subjects* (eksistentiaalisubjekti, e-subjekti) are
considered subjects in UD Finnish.

<!-- fname:nsubj_existential.pdf -->
~~~ sdparse
Tien vieressä on talo . \n Road beside is house .
case(Tien-1, vieressä-2)
nmod(on-3, Tien-1)
nsubj(on-3, talo-4)
punct(on-3, .-5)
~~~

Possessive clauses (omistuslause) are considered a subtype of
existential clauses, and analyzed similarly. The owner in possessive
clauses is marked using the type [`nmod:own`]().

<!-- fname:nsubj_possessive.pdf -->
~~~ sdparse
Hänellä on oma asunto . \n At_him is own apartment .
nmod:own(on-2, Hänellä-1)
nsubj(on-2, asunto-4)
amod(asunto-4, oma-3)
punct(on-2, .-5)
~~~

Also the genitive subject in for instance necessive structures 
<!-- TODO restore: (see Section 5.14) -->
is annotated as [`nsubj`](). (This is not to be confused with the
genitive subject of a noun, [nmod:gsubj]())

<!-- fname:nsubj_necessive.pdf -->
~~~ sdparse
Minun on pakko mennä kotiin . \n I(gen.) is obligation go home .
nsubj(mennä-4, Minun-1)
cop(pakko-3, on-2)
ccomp:nf(pakko-3, mennä-4)
nmod(mennä-4, kotiin-5)
punct(pakko-3, .-6)
~~~

In UD Finnish, subjects are allowed to be in the *nominative*,
*genitive* and *partitive* [cases](Case), and in addition, also an
*accusative* subject is possible (the accusative case only exists for
certain pronouns). Two notable situations where a complement in the
accusative form is analyzed as the subject are:

1. Nonfinite clausal complements (*Sain hänet itkemään.* "I made him
   cry.")
2. Possessive clauses (*Minulla on sinut.* "I have you.")

The same cases are allowed for objects as for subjects: the
nominative, the partitive, the genitive and the accusative.
Complements in other cases are analyzed as *nominal modifiers*
([`nmod`]()), despite their complement status.

*Object cased amount adverbials* (objektin sijainen määrän
adverbiaali, OSMA
[ISK,§972](http://scripta.kotus.fi/visk/sisallys.php?p=972)), which,
as the name implies, use the same cases as objects, are analyzed as
nominal modifiers. However, certain verbs are considered such that
they can take as their object an expression that would otherwise be
considered an amount adverbial. Examples where an amount is considered
the object are for instance:

#### Examples

* [fi] *Juoksin kilometrin.* "I ran a kilometer."
* [fi] *Moottori pyöri kymmenen kierrosta.* "The motor ran ten rounds."
* [fi] *Maitotölkki painaa kilon.* "A milk jar weighs a kilogram."

Passive verbforms take a direct object and not a passive subject, as
in for instance English.

**FIGURE MISSING**

However, there are certain verbs, so called *derived passives*
[ISK, §336](http://scripta.kotus.fi/visk/sisallys.php?p=336), which
may resemble passive verbforms in meaning, but which in fact take a
subject, not an object. (In English, the Finnish derived passives
generally correspond to intransitive uses of a verb, such as *the door
opens*, sometimes termed *inchoative*.).

**FIGURE MISSING**

#### References

* http://scripta.kotus.fi/visk/sisallys.php?p=910 (in Finnish)
* http://scripta.kotus.fi/visk/sisallys.php?p=972 (in Finnish)
* http://scripta.kotus.fi/visk/sisallys.php?p=336 (in Finnish)

## Appositions and appellation modifiers
<!-- this section originally from TDT guidelines section 5.3 -->

The Finnish Grammar (see ISK
[§1059](http://scripta.kotus.fi/visk/sisallys.php?p=1059),
[§1062](http://scripta.kotus.fi/visk/sisallys.php?p=1062))
distinguishes between three similar phenomena: the apposition, the
appellation modifier (*nimikemääarite*) and the supporting noun
(*tukisubstantiivi*). Out of these, the apposition and the appellation
modifier ([compound:nn]()) are distinguished in TDT, and supporting
noun structures are considered appositions.

All of these structures have in common that they all include two
(usually adjacent) elements, most often noun phrases, which refer to
the same entity or entities and have the same function in the
sentence. Thus, in order to be considered an apposition, an
appellation modifier or a supporting noun structure, a structure has
to fulfill the following criteria (the same as in the Finnish
grammar [§1059](http://scripta.kotus.fi/visk/sisallys.php?p=1059)):

1. Both elements of the structure must refer to the same entity
    or group of entities.
2. Both elements of the structure must have the same function
    in the sentence (for instance, the subject).

These criteria are interpreted rather loosely, and there are no
restrictions on the part of speech of the elements involved. Most
appositions (and appellation modifiers) in TDT consist of noun
phrases, but there are occurrences of different parts of speech as
appositions; notably the fiction section of the treebank contains
few examples of verbal appositions.

Among the expressions that fulfill criteria 1 and 2, six common
cases can be distinguished according to inflection and punctuation.

1. singular, both elements in nominative, no punctuation: _professori Matti Tamminen_ "professor Matti Tamminen"
2. singular, first element in nominative, second element inflected: _professori Matti Tammisen mukaan_ "according to professor Matti Tamminen"
3. singular, both elements in nominative, punctuation in between: _professori, Matti Tamminen_ "the professor, Matti Tamminen"
4. singular, first element inflected, second element in nominative: _romaanissa Putkinotko_ "in the novel Putkinotko"
5. singular, both elements inflected: _professorin, Matti Tammisen, mukaan_ "according to the professor, Matti Tamminen"
6. plural, elements either in nominative or inflected: _professorit Matti Tamminen ja Erkki Koivunen_ "the professors Matti Tamminen and Erkki Koivunen" or _professoreiden, Matti Tammisen ja Erkki Koivusen, mukaan_ "according to the professors, Matti Tamminen and Erkki Koivunen" or _professoreiden Matti Tamminen and Erkki Koivunen mukaan_ "according to the professors Matti Tamminen and Erkki Koivunen"

Out of these six cases, the first two are considered appellation
modifiers, and thus marked with the dependency type `nn`. Note that
the governor of the dependency in appellation modifiers is the latter
of the two words.

<!-- fname:nn_appellation.pdf -->
~~~ sdparse
Professori Matti Tamminen pitää puheen . \n Professor Matti Tamminen gives a_speech .
nn(Tamminen-3, Professori-1)
name(Tamminen-3, Matti-2)
nsubj(pitää-4, Tamminen-3)
dobj(pitää-4, puheen-5)
punct(pitää-4, .-6)
~~~

The remaining four cases are all considered appositions and marked
with the type `appos`. Contrary to appellation modifiers, in
apposition structures the first word is considered the governor.

<!-- fname:appos1.pdf -->
~~~ sdparse
Professori , Matti Tamminen , luennoi tänään . \n The_professor , Matti Tamminen , lectures today .
appos(Professori-1, Tamminen-4)
punct(Tamminen-4, ,-2)
punct(Tamminen-4, ,-5)
name(Tamminen-4, Matti-3)
nsubj(luennoi-6, Professori-1)
advmod(luennoi-6, tänään-7)
punct(luennoi-6, .-8)
~~~

It should be noted that case number 4 is in fact an example of a
supporting noun structure, but in TDT, these are marked as
appositions. In plural (case number 6), all possible case
combinations are considered appositions.

The only difference between the cases 1 and 3 is the presence or
absence of punctuation. Often, said punctuation is a comma, but also
parentheses, a dash or a colon are possible. As can be seen from the
examples above, the punctuation produces a semantic difference,
which is taken into account in the annotation. Punctuation
variations of the cases 2, 4, and 5 need not be considered, as these
variations are ungrammatical. (Naturally, ungrammatical phenomena
can and do occur in a corpus of actual language, but these cases are
resolved on a case-by-case basis.)

#### Examples

* [fi] \*_professori, Matti Tammisen mukaan_ "according to professor, Matti Tamminen"
* [fi] \*_romaanissa, Putkinotko_ "in the novel, Putkinotko"
* [fi] \*_professorin Matti Tammisen mukaan_ "according to the professor's Matti Tamminen"
  (unless a possessive reading is intended)

#### References

* <http://scripta.kotus.fi/visk/sisallys.php?p=567> (in Finnish)
* <http://scripta.kotus.fi/visk/sisallys.php?p=1059> (in Finnish)
* <http://scripta.kotus.fi/visk/sisallys.php?p=1062> (in Finnish)

## Comparatives and superlatives
<!-- this section originally from TDT guidelines section 5.9 -->

This section describes the annotation of comparative and superlative
structures, which, in UD Finnish, are considered to include also
certain similar structures that do not contain a comparative or
superlative wordform.

### Comparatives
<!-- this section originally from TDT guidelines section 5.9.1 -->

Structures with comparative adjectives and adverbs may be difficult
to annotate: they are often elliptical, and it may be difficult to
tell what is being compared with what. In the Finnish-specific
version of the SD scheme, there are two dependency types that are
reserved for comparative structures, `compar` and
`comparator`. Both of these types are new types not present
in the original SD scheme.

The basic usage of these two types is as follows. The comparative
adjective or adverb acts as the head for a `compar`
dependency, and *the element being compared* is its
dependent. The element being compared also acts as the head for a
`comparator` dependency, the dependent of which is a
comparative conjunction, nearly always *kuin*.

<!-- fname:comparatives.pdf -->
~~~ sdparse
Keittiö on pienempi kuin olohuone . \n Kitchen is smaller than livingroom .
nsubj-cop(pienempi-3, Keittiö-1)
cop(pienempi-3, on-2)
compar(pienempi-3, olohuone-5)
comparator(olohuone-5, kuin-4)
punct(pienempi-3, .-6)
~~~

Note that the comparative adjective or adverb remains the head of
the `compar` dependency even if the word order is such that
the dependency becomes non-projective.

<!-- fname:comparatives_non-projective.pdf -->
~~~ sdparse
Matilla on isompi auto kuin Pekalla . \n At_Matti is bigger car than Pekka .
nmod(on-2, Matilla-1)
nsubj(on-2, auto-4)
amod(auto-4, isompi-3)
compar(isompi-3, Pekalla-6)
comparator(Pekalla-6, kuin-5)
punct(on-2, .-7)
~~~

From the previous example it can also be seen that comparative
structures are often elliptical in some way. Strictly speaking, the
example does not compare Matti and Pekka, but rather their cars, and
the car owned by Pekka is not explicitly present in the sentence. As
a general rule of thumb, the different kinds of ellipsis present in
comparative structures are not marked with null tokens, but rather
the available elements are used wherever possible.

It is also possible to make comparisons without the comparative
conjunction *kuin*. In these cases, only the dependency type
`compar` is used, marking the comparative adjective or
adverb as the head, and the element compared as the dependent, just
as in the case with the comparative conjunction present.

<!-- fname:compar_no_comparator.pdf -->
~~~ sdparse
Olohuone on keittiötä suurempi . \n Livingroom is (than_)kitchen bigger .
nsubj-cop(suurempi-4, Olohuone-1)
cop(suurempi-4, on-2)
compar(suurempi-4, keittiötä-3)
punct(suurempi-4, .-5)
~~~

In TDT, also some structures not involving a comparative adjective or
adverb can be marked as comparatives. In order to qualify as a
comparative construction, a structure has to contain either a
comparative word form or a word form that otherwise semantically
entails comparison, such as _samanlainen_ "similar", _sama_ "same",
_erilainen_ "different" or _eri_ "differing, separate". (Note that for
example the word _sama_ "same" is in fact a pronoun in Finnish.)

<!-- fname:comparative_sama.pdf -->
~~~ sdparse
Luin saman kirjan kuin Pekka . \n I_read same book as Pekka .
dobj(Luin-1, kirjan-3)
det(kirjan-3, saman-2)
compar(saman-2, Pekka-5)
comparator(Pekka-5, kuin-4)
punct(Luin-1, .-6)
~~~

An additional difficulty is posed by the fact that in Finnish, the
comparative conjunction _kuin_ can also appear as a subordinating
conjunction as well as an adverb. Borderline situations are resolved
on a case-by-case basis, considering whether or not there is a
comparison involved in the structure and, secondarily, whether the
dependent structure is a clause. (Comparative structures can also
occasionally be full clauses.)

### Superlatives
<!-- this section originally from TDT guidelines section 5.9.2 -->

Superlatives are less problematic than comparatives but deserve some
attention nevertheless. The basic case with superlatives is simple:
a lone superlative modifying a noun. The superlative form in this
case is not marked in any particular way in the syntax annotation,
but the structure is annotated similarly to any adjective modifying
a noun. The same strategy of not marking the superlative in any
particular way is also used in cases where the superlative acts as a
predicative.

<!-- fname:superlative_basic.pdf -->
~~~ sdparse
Suurin paketti oli muiden takana . \n Biggest package was others behind .
amod(paketti-2, Suurin-1)
nsubj(oli-3, paketti-2)
nmod(oli-3, muiden-4)
case(muiden-4, takana-5)
punct(oli-3, .-6)
~~~

Often a superlative is modified by nominal in some manner. A very
common phenomenon is a genitive modifier modifying a superlative.
For instance, in an expression such as

<!-- fname:super1.pdf -->
~~~ sdparse
Suomen paras kokki \n Finland's best cook
poss(paras-2, Suomen-1)
amod(kokki-3, paras-2)
~~~

the cook is the best *of those in/of Finland* and thus the correct
head word for the genitive modifier is _paras_ "best". Similarly, an
ordinal number can act as the head of a genitive modifier. For
example, in

<!-- fname:super2.pdf -->
~~~ sdparse
Virtasen kuudes mestaruus \n Virtanen's sixth championship
poss(kuudes-2, Virtasen-1)
num(mestaruus-3, kuudes-2)
~~~

the championship is the sixth out of *those of Virtanen*, and thus the
genitive modifier should modify the ordinal number.

However, it is still possible for the noun to act as the head word in
some cases. For instance, in

<!-- fname:super3.pdf -->
~~~ sdparse
Rusakon pahin vihollinen \n The_hare's worst enemy
poss(vihollinen-3, Rusakon-1)
amod(vihollinen-3, pahin-2)
~~~

the enemy is not the worst *of the hare*, but rather it is an enemy of
the hare, and it is the worst enemy. Thus, the head word should be
*hare*.

As a rule of thumb, if the noun phrase containing the genitive
modifier can be turned into a copular clause in the following
fashion, then the genitive modifier should modify the superlative or
ordinal number.

#### Examples

* [fi] _Kokki on Suomen paras_ "The cook is the best in Finland"
* [fi] _Mestaruus on Virtasen kuudes_ "The championship is the sixth for Virtanen"

are perfectly valid, but

#### Examples

* [fi] ?_Vihollinen on rusakon pahin_ ?"The enemy is the worst of
  the hare"

is questionable at best. Thus, in _Suomen paras kokki_ and _Virtasen
kuudes mestaruus_, the genitive modifier is considered to modify the
superlative adjective, but in _rusakon pahin vihollinen_, it is
considered to modify the noun directly.

In this context, it should also be noted that in addition to
superlatives, also certain other adjectives can also act as the head
of a genitive modifier. These adjectives can be semantically
superlative-like _viimeinen_ "last", but there are also many others,
such as _oma_ "own", _kaltainen_ "-like", _välinen_ "between (adj.)",
and _vastainen_ "against (adj.)".

Also other nominal modifiers are possible, expressing the set of
beings from which the objects are drawn when making the
comparison. These are treated similarly to the genitive modifiers,
making the superlative wordform the head of the modifier if the
modifier expresses the set of beings to draw from.

<!-- fname:superlative_nommod.pdf -->
~~~ sdparse
Kukista kaunein oli ikkunalaudalla . \n From_the_flowers most_beautiful was on_windowsill .
nmod(kaunein-2, Kukista-1)
nsubj(oli-3, kaunein-2)
nmod(oli-3, ikkunalaudalla-4)
punct(oli-3, .-5)
~~~

Note how in the previous example the phrase _kukista kaunein_ can act
as a noun phrase (it is the subject of the clause), even though its
head word is an adjective.

<!-- TODO See Section~\ref{sec-NP-no-N} on nounless noun phrases.-->
