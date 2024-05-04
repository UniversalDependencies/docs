---
layout: base
title:  'Location Predication and Presentation'
udver: '2'
---

# Clauses with Predication or Presentation of Location

Locational clauses are one of the types of nonprototypical clauses. Some of
the strategies they use are similar to [object](object_predication.html) and
[property predication](property_predication.html).

In locative predication, an entity (typically, but not necessarily, denoted
by a definite nominal) is predicated to be at a particular location
(typically denoted by a cased nominal or an adverb). Example: _The food is in
the fridge._ (Presumably the _food_ has already been introduced to the
discourse and now its location is specified.)

The strategies used by locative predication may also overlap with
presentational location, which is a separate construction (and in some
languages it will use strategies that differ significantly from predication).
Example: _There is food in the fridge._ (Both the food and its location are
new concepts in the discourse.)

The exact UD analysis of the construction depends on the strategy used by the
language to express it. In some cases, the phrase denoting the location will
be treated as the main predicate and the entity that is at that location will
be attached as the subject. In other cases though, the phrase denoting the
location will be just a modifier of another predicate.

## Zero Strategy

In some languages, the subject and the locative predicate are simply
juxtaposed. “Zero” refers to the absence of any verbal inflection and any
linking morpheme between the subject and the predicate.

Russian [ru] uses the zero strategy in present indicative:

~~~ sdparse
Иван/PROPN в/ADP Москве/PROPN ./PUNCT \n Ivan v Moskve . \n Ivan in Moscow .
nsubj(Москве, Иван)
nsubj(Moskve, Ivan-6)
nsubj(Moscow, Ivan-11)
case(Москве, в)
case(Moskve, v)
case(Moscow, in)
punct(Москве, .-4)
punct(Moskve, .-9)
punct(Moscow, .-14)
~~~

Arabic [ar]: Here the construction is rather presentational because the
subject nominal is indefinite.

~~~ sdparse
وَفدٌ/NOUN مِن/ADP اَلوَكَالَةِ/NOUN فِي/ADP إِيرَانَ/PROPN ./PUNCT \n wafdun min al-wakālati fī ʾīrāna . \n A.delegation from the-agency in Iran .
nmod(وَفدٌ, اَلوَكَالَةِ)
nmod(wafdun, al-wakālati)
nmod(A.delegation, the-agency)
case(اَلوَكَالَةِ, مِن)
case(al-wakālati, min)
case(the-agency, from)
nsubj(إِيرَانَ, وَفدٌ)
nsubj(ʾīrāna, wafdun)
nsubj(Iran, A.delegation)
case(إِيرَانَ, فِي)
case(ʾīrāna, fī)
case(Iran, in)
punct(إِيرَانَ, .-6)
punct(ʾīrāna, .-13)
punct(Iran, .-20)
~~~

## Verbal Copula Strategy

Many languages use a verbal copula to link the subject with the predicated
location and to add verbal features (e.g., [Tense]()) where needed. In UD we
treat such copulas as auxiliaries ([AUX]()) and attach them to the locative
predicate as [cop]().

Russian [ru] uses the zero strategy in the present indicative, but it uses a
verbal copula in other tenses and moods:

~~~ sdparse
Иван/PROPN был/AUX в/ADP Москве/PROPN ./PUNCT \n Ivan byl v Moskve . \n Ivan was in Moscow .
nsubj(Москве, Иван)
nsubj(Moskve, Ivan-7)
nsubj(Moscow, Ivan-13)
cop(Москве, был)
cop(Moskve, byl)
cop(Moscow, was)
case(Москве, в)
case(Moskve, v)
case(Moscow, in)
punct(Москве, .-5)
punct(Moskve, .-11)
punct(Moscow, .-17)
~~~

English [en]

~~~ sdparse
Ivan/PROPN is/AUX in/ADP Moscow/PROPN ./PUNCT
nsubj(Moscow, Ivan)
cop(Moscow, is)
case(Moscow, in)
punct(Moscow, .)
~~~

This way the zero strategy and the verbal copula strategy receive parallel
annotations both within a language (e.g., Russian) and between languages
(Russian vs. English). However, the copula analysis is quite different from
constructions with non-copular verbs. Here, the location is attached to the
verb as [obl]() or [advmod]():

~~~ sdparse
Ivan/PROPN dances/VERB in/ADP Moscow/PROPN ./PUNCT
nsubj(dances, Ivan)
obl(dances, Moscow)
case(Moscow, in)
punct(dances, .)
~~~

### Multiple Copular Verbs?

By default the guidelines assume that at most one lemma can serve as copula
in a language; but there are exceptions.

Since the analysis of locative predicate with copula is so different from
locative modifier of a non-copular verb, the dividing line between these two
constructions is important. UD draws the line as soon as possible, i.e.,
between the most neutral verb (“to be”) that only adds verbal features to the
predication but no extra shade of meaning, and all other verbs.

For example, posture verbs (“to stand, sit, lie, hang” etc.) are often used
in clauses where the location is more important than the posture, but they
are not analyzed as copulas if the language also allows using the more
neutral “to be”.

Dutch [nl] is one of the languages where posture verbs are the more typical
strategy for simple locative predication, although the verbal copula _zijn_
“be” is possible, but less idiomatic, alternative in some cases (van Oosten
1986:138,139; Croft 2022:304). We do not distinguish cases where the posture
verb predicates the posture from cases where it simply supports a locative
predicate. We analyze the posture verb as the head of the clause in all
contexts.

~~~ sdparse
Het/DET boek/NOUN ligt/VERB op/ADP de/DET tafel/NOUN ./PUNCT \n The book lies on the table .
det(boek, Het)
det(book, The)
nsubj(ligt, boek)
nsubj(lies, book)
obl(ligt, tafel)
obl(lies, table)
case(tafel, op)
case(table, on)
det(tafel, de)
det(table, the)
punct(ligt, .-7)
punct(lies, .-15)
~~~

On the other hand, it is possible that one of the posture verbs
grammaticalizes as the neutral copula. This is the case of Amele [aey]
(Roberts 1987:186,65; Stassen 1997:149), where the verb whose original
meaning is “to sit” became a copula that is used not only with locative
predicates but also for [property predication](property_predication.html).
Example: _Uqa jo na bilia._ “He is in the house.” (Compare with _Uqa me
bilia._ “He is well.”)

~~~ sdparse
Uqa/PRON jo/NOUN na/ADP bilia/AUX ./PUNCT \n He house in sits .
nsubj(jo, Uqa)
nsubj(house, He)
case(jo, na)
case(house, in)
cop(jo, bilia)
cop(house, sits)
punct(jo, .-5)
punct(house, .-11)
~~~

The circumstances to consider when deciding whether a verb is a copula
include:

* Does the language employ the zero strategy in one tense and is this the
default verb that will be used to signal other tenses? If yes, then it could
be the copula.

* Is this the semantically most neutral verb available for location
predication in the language, such that does not add meaning to the
predication? If yes, then it could be the copula. (Posture verbs deserve
special attention. Even if the verb can be used purely locatively, are there
also other uses where the posture plays a role – e.g. “the book lies on the
table” vs. “the man lies on the floor”? If so, then it may be better not to
treat the verb as copula.)

* Is this verb also used as copula in other nonprototypical predications,
such as object predication or property predication? If yes, then the verb may
have grammaticalized as copula even if it is historically a posture verb. If
no, then maybe the language does not use a copula strategy for locations? A
possible solution in such cases is to always treat locative expressions as
modifiers of a main verb.

Finally, there are situations where a language should exceptionally be
allowed more than one verbal copula. Typically there is some kind of
deficient paradigm where one stem has only past tense forms and the other
only present tense; or one has affirmative and the other negative forms; or
one is in default imperfective aspect while the other is iterative. Depending
on the language-specific lemmatization rules, the forms may or may not be
grouped under one lemma. If each of them has its own lemma, both/all such
lemmas can be registered as copulas.

For example the Czech [cs] lemmas _být, bývat, bývávat_ are all variants of
“to be”, the longer forms being iterative or habitual alternatives. The
morphological proces from the shorter to the longer forms is considered
derivation, therefore each has its own lemma but all three are treated as
copulas. All three are also used in property predication and object
predication.

~~~ sdparse
V/ADP pondělí/NOUN bývám/AUX v/ADP kanceláři/NOUN ./PUNCT \n On Monday I.(usually).am in office .
case(pondělí, V)
case(Monday, On)
obl(kanceláři, pondělí)
obl(office, Monday)
cop(kanceláři, bývám)
cop(office, I.(usually).am)
case(kanceláři, v)
case(office, in)
punct(kanceláři, .-6)
punct(office, .-13)
~~~

On the other hand, Czech also has the verb _nacházet se_ “to be found”, which
is still fairly neutral with respect to locative predication. But it is not
the canonical “be”-copula (it is derived from _nacházet_ “to find”) and it is
treated as normal verb:

~~~ sdparse
Třeboň/PROPN se/PRON nachází/VERB v/ADP jižních/ADJ Čechách/PROPN ./PUNCT \n Třeboň REFL is.located in southern Bohemia .
nsubj(nachází, Třeboň-1)
nsubj(is.located, Třeboň-9)
expl:pv(nachází, se)
expl:pv(is.located, REFL)
obl(nachází, Čechách)
obl(is.located, Bohemia)
case(Čechách, v)
case(Bohemia, in)
amod(Čechách, jižních)
amod(Bohemia, southern)
punct(nachází, .-7)
punct(is.located, .-15)
~~~

## Verbal Strategy

Finally, some languages will treat the locative predicate as a verb rather
than a noun, and apply verbal inflection to it. As a consequence, the
predicate will be analyzed in UD as a [VERB]() and the construction will be
unrecognizable from normal predication of action concepts. (Note that the
MISC column can optionally carry information about the verb being derived
from a noun, but this is neither required nor regulated by the UD
guidelines.)

Kalispel [fla] “I am here” (Vogt 1940:69; Stassen 1997:143; Croft 2022:305):

~~~ sdparse
Čin-es-əlʹéi/VERB ./PUNCT \n 1SG-CONT-here .
punct(Čin-es-əlʹéi, .-2)
punct(1SG-CONT-here, .-5)
~~~

Language-specific word segmentation may play a role in distinguishing the
verbal strategy from verbal copulas. In Turkish [tr], the surface
representation looks either like the zero strategy (in present tense) or like
the verbal strategy (when past-tense suffix _-DI_ is attached to the locative
predicate). But as of UD v2, the suffix is analyzed as a form of encliticized
copula _i_ and is treated as a separate syntactic word. Consequently, the
sentence is analyzed as using the verbal copula strategy.

~~~ sdparse
Murat/PROPN banyoda/NOUN =ydı/AUX ./PUNCT \n Murat bathroom-in was .
nsubj(banyoda, Murat-1)
nsubj(bathroom-in, Murat-6)
cop(banyoda, =ydı)
cop(bathroom-in, was)
punct(banyoda, .-4)
punct(bathroom-in, .-9)
~~~

## Presentational or Existential Constructions

In some languages, predication of location is very similar to presentational
constructions where a new entity is introduced to the discourse together with
its location. The presentational constructions, in turn, overlap with
existential ones (where the mere existence of an entity is asserted). The
entity being introduced may be accompanied by its location, by some other bit
of information, or by nothing at all.

Czech [cs] can distinguish predicational and presentational location by word
order in otherwise identical clauses. Word order is a standard means for
pragmatic distinctions of known vs. new information in Czech (while from the
syntactic perspective the word order is quite free).

_Mandarinky jsou v ledničce._ “The tangerines are in the fridge.”

_V ledničce jsou mandarinky._ “There are tangerines in the fridge.”

_Jsou mandarinky, které nemají jadérka._ “There are tangerines that do not
have seeds.”

_Mandarinky už nejsou._  “There are no more tangerines.”


# TO DO:


TODO: Multiple adverbial modifiers? Which one is the predicate?

TODO: More comparison to presentational constructions.
