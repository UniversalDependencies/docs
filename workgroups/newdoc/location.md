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

Russian [ru] uses the zero strategy (or a nonverbal copula) in the present
indicative, but it uses a verbal copula in other tenses and moods:

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

TODO: Multiple adverbial modifiers? Which one is the predicate?

TODO: More comparison to presentational constructions.

## Verbal Strategy

Finally, some languages will treat the object predicate as a verb rather than
a noun, and apply verbal inflection to it. As a consequence, the predicate
will be analyzed in UD as a [VERB]() and the construction will be
unrecognizable from normal predication of action concepts. (Note that the
MISC column can optionally carry information about the verb being derived
from a noun, but this is neither required nor regulated by the UD
guidelines.)

Classical Nahuatl [nci] “I am a doctor” (Croft 2022:294; compare to
_Ni-chōca_ “I am crying”):

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

Each of the following should have its own page in the documentation.

* Location + existence.
* Possession + existence.
* Other types of noncanonical predication.
  * The property can be a numeral.
  * The property can be a case-marked nominal ("for him", "in shape").
  * "Location" can be on time axis ("the concert was on Monday" vs. "the concert was in Paris on Monday" vs. "he was tired on Monday")
  * Object-like predication with a clause instead of the object nominal (_the problem is that he is missing_).
