---
layout: base
title:  'Ditransitive Clauses'
udver: '2'
---

# Ditransitive Clauses

Some [verbs](/u/pos/VERB.html) in some languages allow three core arguments.
Clauses with three core arguments are called _ditransitive_ or _trivalent._
They are often associated with verbs of giving and the semantic roles of
actor (the one who gives), theme/patient (the thing that is given) and
recipient/goal (the one who receives the given thing). Ditransitive clauses
may also be used for concepts related to giving, for example teaching
(which can be understood as giving knowledge).

All languages have means to express giving but not all languages have
ditransitive clauses. In some languages, either recipient or the theme must
be coded as an oblique argument, therefore the verb has only two core arguments
and is _(mono)transitive_ or _bivalent._ And then there are languages like
English, where both options are available:
_I gave John a book_ is ditransitive, while
_I gave a book to John_ is monotransitive.

For more details on the distinction between core and oblique arguments, see
[Simple Verbal Clauses](simple_verbal_clauses.html).

* [Coding strategies](#coding-strategies)
  * [English](#english)
  * [Spanish](#spanish)
  * [Czech](#czech)
  * [Basque](#basque)
  * [Yidiɲ](#yidiɲ)
  * [Tagalog](#tagalog)
  * [Plains Cree](#plains-cree)
* [Summary of relations](#summary-of-relations)

<span style="color:red">TO DO: The text about coding strategies is just a
placeholder (copied from simple verbal clauses). Replace it with real text
about ditransitives that I have written for the core-oblique working group.</span>



## Coding Strategies



<!---------------------------------------------------------------------------->

### English

Some English verbs allow two objects (i.e., two core arguments following
the verb):

* _Peter gave Kate a book._
* _Tom teaches me mathematics._

The traditional approach outside UD is to call the first object _indirect_
and the second object _direct;_ it is often defined in terms of semantic
roles, saying that the recipient is the indirect object. UD avoids referring
to semantic roles and says instead that [indirect object](/u/dep/iobj.html)
is a core argument of the verb that is not its subject or direct
[object](/u/dep/obj.html); the (direct) object is then defined as
“the second most core argument of a verb after the subject.”
In the above examples, the recipient _(Kate, me)_ is arguably more core than
the theme _(book, mathematics)_ because the recipient can be promoted in
passivization more readily than the theme (promotion of the theme is not
completely ungrammatical though; some speakers of some dialects of English
accept it):

* _Kate was given a book by Peter. (?A book was given Kate by Peter.)_ <!--
   <span style="color: orange"><b>Nathan:</b> "A book was given Kate"
   sounds unusual or archaic but not completely ungrammatical to me.
   You can find examples on the web of "advice was given him/her",
   for example. Some COCA examples: "how do you feel about John Poindexter
   and the sentence that was given him today?" (1990 spoken),
   "But when the rooms had been shown and the paper was given him to sign,
   Frisch hesitated, clutching the pen." (1990 fiction).
   Not many COCA examples with by-phrases—only found this one from a 2012
   interview with Sarah Palin, who is known for her colorful use of English:
   "And he got a standing ovation at the end of the speech, and that was
   given him by those who paid attention and stayed to the end, if you will,
   and heard what he had to say." No examples in EWT of a passive verb with
   `iobj`, though.</span> -->
* _I am taught mathematics by Tom. (*Mathematics is taught me by Tom.)_

The second object can be promoted more smoothly if both the subject and the first object
are recoded as oblique arguments (in the case of _to give_) or the first object
is removed (in the case of _to teach_):

* _A book was given by Peter to Kate._
* _Mathematics is taught by Tom. (*Mathematics is taught by Tom to me.)_

Therefore, we have identified one property of core objects that works better
with the first object (the recipient) than with the second object (the theme);
thus the UD v2 guidelines actually require that the second object
be labeled `iobj`. Yet in the current English data (UD 2.1), it is still
the first object that is labeled `iobj`, and the second object is `obj`.
This has to be resolved by either modifying the guidelines, or the data
(diverging from what people traditionally understand under indirect object).

~~~ conllu
# text = Peter gave Kate a book.
1	Peter	Peter	PROPN	_	Number=Sing	2	nsubj	_	_
2	gave	give	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	Kate	Kate	PROPN	_	Number=Sing	2	obj	_	_
4	a	a	DET	_	Definite=Ind|PronType=Art	5	det	_	_
5	book	book	NOUN	_	Number=Sing	2	iobj	_	SpaceAfter=No
6	.	.	PUNCT	_	_	2	punct	_	_

~~~

~~~ conllu
# text = Kate was given a book by Peter.
1	Kate	Kate	PROPN	_	Number=Sing	3	nsubj:pass	_	_
2	was	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
3	given	give	VERB	_	Tense=Past|VerbForm=Part	0	root	_	_
4	a	a	DET	_	Definite=Ind|PronType=Art	5	det	_	_
5	book	book	NOUN	_	Number=Sing	3	iobj	_	_
6	by	by	ADP	_	_	7	case	_	_
7	Peter	Peter	PROPN	_	Number=Sing	3	obl:agent	_	SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	_

~~~

<span style="color:green"><b>Dan:</b> If we do not accept that the less
accepted passivization of the theme is enough to say that the second object
is inferior to the first one, then we will have to label both objects as `obj`.
There is no way of saying that the first object should be `iobj` without
resorting to semantic role labeling. Admittedly it would be advantageous for
some downstream tasks to be able to always identify the recipient; however,
it is not a goal of the basic UD representation to resolve such
syntax-semantic clashes. There are several other options how downstream tasks
are helped with these: 1. relation subtypes within basic UD (for example,
we could use `obj:rcpt` here); 2. same as 1, but only done in the enhanced
representation, where labels of oblique dependents are extended too, for the
same reason; 3. full-fledged semantic-role labeling, done as a stand-off
extension on top of UD.</span>

<span style="color: blue"><b>Joakim:</b> I don't think this is specified by the v2 guidelines.
I tried to
[argue for it on GitHub](https://github.com/UniversalDependencies/UD_English-EWT/issues/55#issuecomment-361508801),
based on syntactic criteria, but people pushed back saying that
it is convenient for NLP applications to have the same relation for the recipient role in both cases.
This needs to be resolved.</span>

<span style="color:green"><b>Chris</b> had some comments on `iobj` at the end
of [this section](http://universaldependencies.org/v2_prelim/core_dependents.html#what-are-core-arguments)
of our discussion before UD v2. There are references (LFG, Huddleston and Pullum 2002)
that we may want to consult before making a final judgment; nevertheless, the
summary there still sounds to me like “UD does not do semantic role labeling,
except for cases where it does.”</span>



<!---------------------------------------------------------------------------->

### Spanish

The behavior of Spanish core arguments is somewhat similar to English but there
are differences. Like in English, it is typical for a core argument to be
a bare nominal without preposition. However, prepositions are not completely
excluded. If the object is [animate](Animacy), it is marked by the preposition _a_:

* _Vimos a alguien._ “We saw somebody.”

The subject's person and number is cross-referenced by verbal inflection.
Spanish is a pro-drop language, meaning that the subject can be omitted if it
is a personal pronoun.

* _(Yo) bebo vino._ “I drink wine.”
* _(Tú) bebes vino._ “You drink wine.” (singular)
* _El hombre bebe vino._  “The man drinks wine.”
* _(Nosotros) bebemos vino._ “We drink wine.”
* _(Vosotros) bebéis vino._ “You drink wine.” (plural)
* _Los hombres beben vino._ “The men drink wine.”

~~~ conllu
# text = Vimos a alguien.
# text_en = We saw somebody.
1	Vimos	ver	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Imp|VerbForm=Fin	0	root	_	Gloss=we-saw
2	a	a	ADP	_	_	3	case	_	Gloss=OBJ
3	alguien	alguien	PRON	_	Number=Sing|PronType=Ind	1	obj	_	Gloss=somebody|SpaceAfter=No
4	.	.	PUNCT	_	_	1	punct	_	Gloss=.

~~~

~~~ conllu
# text = El hombre bebe vino.
# text_en = The man drinks wine.
1	El	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	Gloss=the
2	hombre	hombre	NOUN	_	Gender=Masc|Number=Sing	3	nsubj	_	Gloss=man
3	bebe	beber	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=drinks
4	vino	vino	NOUN	_	Gender=Masc|Number=Sing	3	obj	_	Gloss=wine|SpaceAfter=No
5	.	.	PUNCT	_	_	3	punct	_	Gloss=.

~~~

If the arguments are realized as personal pronouns, the subject is in the
nominative form _(yo, tú, él, nosotros, vosotros, ellos)_ and the object is in the accusative
_(me, te, lo, nos, os, los)._ Nouns do not inflect for case in Spanish.

If both core arguments are present and if they are realized as full noun
phrases, the prototypical word order is the same as in English: the subject
precedes the verb and the object follows it. However, if the object is realized
as a pronominal clitic (and if the verb is finite indicative), the object
precedes the verb.

* _El hombre lo bebe._ “The man drinks it.”

~~~ conllu
# text = El hombre lo bebe.
# text_en = The man drinks it.
1	El	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	Gloss=the
2	hombre	hombre	NOUN	_	Gender=Masc|Number=Sing	4	nsubj	_	Gloss=man
3	lo	él	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	obj	_	Gloss=it
4	bebe	beber	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=drinks|SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	Gloss=.

~~~

Both coding strategies that are used for core arguments can also appear with
adjuncts. Bare nominal adjuncts are rare, the exception being
temporal adjuncts. In contrast, the preposition _a_ can be used with various
directional and temporal adjuncts.

* _Él trabaja toda la semana._ “He works the whole week.”
* _Subiremos al tren a las cinco._ “We will be boarding the train at five.”

~~~ conllu
# text = Él trabaja toda la semana.
# text_en = He works the whole week.
1	Él	él	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	Gloss=he
2	trabaja	trabajar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=works
3	toda	todo	DET	_	Gender=Fem|Number=Sing|PronType=Tot	5	det	_	Gloss=all
4	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	Gloss=the
5	semana	semana	NOUN	_	Gender=Fem|Number=Sing	2	obl:tmod	_	Gloss=week|SpaceAfter=No
6	.	.	PUNCT	_	_	2	punct	_	Gloss=.

~~~

~~~ conllu
# text = Subiremos al tren a las cinco.
# text_en = We will be boarding the train at five.
1	Subiremos	subir	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin	0	root	_	Gloss=we-will-board
2-3	al	_	_	_	_	_	_	_	_
2	a	a	ADP	_	_	4	case	_	Gloss=on
3	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	Gloss=the
4	tren	tren	NOUN	_	Gender=Masc|Number=Sing	1	obl	_	Gloss=train
5	a	a	ADP	_	_	7	case	_	Gloss=at
6	las	el	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	7	det	_	Gloss=the
7	cinco	cinco	NUM	_	NumType=Card	1	obl:tmod	_	Gloss=five|SpaceAfter=No
8	.	.	PUNCT	_	_	1	punct	_	Gloss=.

~~~

Neither _toda la semana_ nor _al tren_ or _a las cinco_ can be promoted via passivization.
Furthermore, they are inanimate, and only animate direct objects take the preposition.
None of the adjuncts can be replaced by an accusative pre-verbal clitic:
_*Él la trabaja._



<!---------------------------------------------------------------------------->

### Czech

Classification of verbal arguments in Czech depends on [case morphology](/u/feat/Case.html).
There are certain anomalies of the case system when the argument is a quantified
phrase (with a cardinal number or a pronominal quantifier, the head noun
may have different case than the entire phrase). We exclude quantified phrases
from the following overview.

The coding strategy most typical for Czech core arguments is bare noun phrase
in nominative or accusative.
Some authors claim that core arguments are not marked for case. This is not
true and Czech is one of the counter-examples. The nominative can be considered
unmarked in the vague sense that it is the default case that is used if
there are no external factors requiring another case. However, it is not
unmarked in the morphological sense: many nouns must use suffixes to form
the nominative (and the same holds for the accusative).

The nominative argument is the subject, the
accusative is object.
The subject's person, number, and sometimes also gender and animacy are
cross-referenced by verbal inflection.
Czech is a pro-drop language, meaning that the subject can be omitted if it is
a personal pronoun.

* _Snědl jsem jablko._ “I ate an apple.” (masculine)
* _Snědla jsem jablko._ “I ate an apple.” (feminine)
* _Snědl jsi jablko._ “You ate an apple.” (masculine singular)
* _Snědla jsi jablko._ “You ate an apple.” (feminine singular)
* _Chlapec snědl jablko._ “The boy ate an apple.”
* _Snědl jablko._ “He ate an apple.”
* _Snědla jablko._ “She ate an apple.”
* _Snědlo jablko._ “It ate an apple.”
* _Snědli jsme jablko._ “We ate an apple.” (masculine animate)
* _Snědly jsme jablko._ “We ate an apple.” (feminine)
* _Snědli jste jablko._ “You ate an apple.” (masculine animate plural)
* _Snědly jste jablko._ “You ate an apple.” (feminine plural)
* _Snědli jablko._ “They ate an apple.” (masculine animate)
* _Snědly jablko._ “They ate an apple.” (feminine or masculine inanimate)
* _Snědla jablko._ “They ate an apple.” (neuter)

~~~ conllu
# text = Chlapec snědl jablko.
# text_en = The boy ate an apple.
1	Chlapec	chlapec	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	2	nsubj	_	Gloss=boy
2	snědl	sníst	VERB	_	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	_	Gloss=eaten
3	jablko	jablko	NOUN	_	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	2	obj	_	Gloss=apple|SpaceAfter=No
4	.	.	PUNCT	_	_	2	punct	_	_

~~~

Czech word order is free and while the SVO order is preferred by default, other
permutations are possible and may be required to distinguish topic and focus.

* _Chlapec snědl jablko._ “The/a boy ate an apple.”
* _Jablko snědl chlapec._ “It was a/the boy who ate the apple.”
* _Chlapec jablko snědl._ “What the boy did to the apple was that he ate it.”
* _Jablko chlapec snědl._ “As for the apple, what the boy did to it was that he ate it.”
* _Snědl chlapec jablko._ “A boy ate an apple.”
* _Snědl jablko chlapec._ “It was a boy who ate an apple.”

It is not guaranteed that a bare accusative nominal is a core argument. It can
also be a temporal adjunct, as in:

* _Pracuje celý týden._ “He works the whole week.”
* _Přichází každou středu._ “She comes every Wednesday.”

~~~ conllu
# text = Pracuje celý týden.
# text_en = He works the whole week.
1	Pracuje	pracovat	VERB	_	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=works
2	celý	celý	ADJ	_	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	3	amod	_	Gloss=whole
3	týden	týden	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	1	obl:tmod	_	Gloss=week|SpaceAfter=No
4	.	.	PUNCT	_	_	1	punct	_	Gloss=.

~~~

The nominal _celý týden_ cannot be promoted to subject via passivization, which
supports the claim that it is not an object; however, this test is not sufficient
because of some transitive verbs that cannot passivize (_dostat_ “to get”, _mít_ “to have”).
Therefore, accusative temporal adjuncts have to be stated as an exception and
the argument/adjunct distinction cannot be avoided in this case.

Many two-argument verbs in Czech specify the second argument as a bare noun
phrase in a case other than accusative (namely in the dative, genitive or
instrumental). Whether these arguments are core
arguments is a point of disagreement among different authors.
The current (UD 2.1) approach in UD for Czech and several similar Indo-European
languages is to analyze them as core; however, it is less easy to find examples
that could qualify as primary transitive verbs, and there are more confusions
with dependents that would be better described as oblique arguments or adjuncts.
Also, the treatment of these arguments by the grammatical rules such as
passivization is different from the treatment that accusatives receive.
Thus it might be better to say that only bare nominative and accusative
arguments are core, while all the rest is oblique.
Consequently, such two-argument clauses are intransitive.

* _Zuzka pomohla Martinovi._ “Zuzka helped Martin.”

~~~ conllu
# text = Zuzka pomohla Martinovi.
# text_en = Zuzka helped Martin.
1	Zuzka	Zuzka	PROPN	_	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	2	nsubj	_	Gloss=Zuzka
2	pomohla	pomoci	VERB	_	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	_	Gloss=helped
3	Martinovi	Martin	PROPN	_	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos	2	obl:arg	_	Gloss=Martin|SpaceAfter=No
4	.	.	PUNCT	_	_	2	punct	_	Gloss=.

~~~

Note that this is a shift away from the recommendation published in
Daniel Zeman (2017): [Core Arguments in Universal Dependencies](http://www.aclweb.org/anthology/W17-6532),
in Proceedings of the Fourth International Conference on Dependency Linguistics
(Depling 2017), pp. 287–296, Pisa, Italy.



<!---------------------------------------------------------------------------->

### Basque

See also:
Fernando Zúñiga, Beatriz Fernández (draft 26.6.2014):
[Grammatical relations in Basque](http://basdisyn.net/pdf/Zuniga%20&%20Fernandez%202014%20Basque%20GRs%20270614.pdf)

In Basque, like in Czech, nominal case morphology is essential for recognition
of core argument relations. However, instead of nominative-accusative, the
core pair of cases in Basque is ergative-absolutive.
Most two-argument verbs have one argument in the ergative and the other in
the absolutive case (but see below for other possibilities).
The ergative argument is labeled as subject, the absolutive argument is object.
With primary transitive verbs, the ergative argument corresponds to the agent
and the absolutive argument to the patient.

* _Ekaitzak itsasontzia hondoratu du._ “The storm has sunk the ship.”

~~~ conllu
# text = Ekaitzak itsasontzia hondoratu du.
# text_en = The storm has sunk the ship.
1	Ekaitzak	ekaitz	NOUN	_	Animacy=Inan|Case=Erg|Definite=Def|Number=Sing	3	nsubj	_	Gloss=storm
2	itsasontzia	itsasontzi	NOUN	_	Animacy=Inan|Case=Abs|Definite=Def|Number=Sing	3	obj	_	Gloss=ship
3	hondoratu	hondoratu	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	Gloss=sunk
4	du	*edun	AUX	_	Mood=Ind|Number[abs]=Sing|Number[erg]=Sing|Person[abs]=3|Person[erg]=3|VerbForm=Fin	3	aux	_	Gloss=has|SpaceAfter=No
5	.	.	PUNCT	_	_	3	punct	_	Gloss=.

~~~

The single argument of intransitive verbs takes mostly the absolutive
but sometimes the ergative form. It is labeled as subject in both cases.

* _Gizona hil da._ “The man has died.” (absolutive)

~~~ conllu
# text = Gizona hil da.
# text_en = The man has died.
1	Gizona	gizon	NOUN	_	Animacy=Anim|Case=Abs|Definite=Def|Number=Sing	2	nsubj	_	Gloss=the-man
2	hil	hil	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	Gloss=died
3	da	izan	AUX	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Person[abs]=3|VerbForm=Fin	2	aux	_	Gloss=has|SpaceAfter=No
4	.	.	PUNCT	_	_	2	punct	_	Gloss=.

~~~

* _Urak irakin du._ “The water has boiled.” (ergative)

~~~ conllu
# text = Urak irakin du.
# text_en = The water has boiled.
1	Urak	ura	NOUN	_	Animacy=Inan|Case=Erg|Definite=Ind|Number=Sing	2	nsubj	_	Gloss=water
2	irakin	irakin	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	Gloss=boiled
3	du	*edun	AUX	_	Mood=Ind|Number[abs]=Sing|Number[erg]=Sing|Person[abs]=3|Person[erg]=3|VerbForm=Fin	2	aux	_	Gloss=has|SpaceAfter=No
4	.	.	PUNCT	_	_	2	punct	_	Gloss=.

~~~

The third core case is the dative. Arguments in all three core cases are
cross-referenced on finite verbs. Thanks to cross-referencing, the arguments
can be omitted if they are just personal pronouns.

Some two-argument verbs take dative+absolutive, instead of ergative+absolutive:

* _(Niri) ardoa gustatzen zait._ “I like wine.” (lit. “To-me the-wine pleasing is.”)

~~~ conllu
# text = Niri ardoa gustatzen zait.
# text_en = I like wine.
1	Niri	ni	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	Gloss=to-me
2	ardoa	ardo	NOUN	_	Animacy=Inan|Case=Abs|Definite=Def|Number=Sing	3	obj	_	Gloss=wine
3	gustatzen	gustatzen	VERB	_	Aspect=Imp|VerbForm=Part	0	root	_	Gloss=pleasing
4	zait	izan	AUX	_	Mood=Ind|Number[abs]=Sing|Number[dat]=Sing|Person[abs]=3|Person[dat]=1|VerbForm=Fin	3	aux	_	Gloss=is|SpaceAfter=No
5	.	.	PUNCT	_	_	3	punct	_	Gloss=.

~~~

In the current data (UD 2.1), the dative argument seems to be labeled `iobj`
even in dative-absolutive constructions. However, Zúñiga and Fernández (2014)
write that the dative encodes the A function in such constructions; that
would mean that it should be `nsubj`.
Some supporting evidence is also provided by causativization, a
[valency-changing operation](valency_changing_operations.html) that takes a
transitive clause, adds a third, ergative argument, and switches the original
subject to the dative (unless it already was in dative). The fact that
causativization is available for dative-absolutive clauses supports our
treatment of the dative argument as the subject.

Some two-argument verbs take ergative+dative, instead of ergative+absolutive:

* _Irakasleak haserre begiratu die ikasleei._ “The teacher has looked angrily at the students.”

~~~ conllu
# text = Irakasleak haserre begiratu die ikasleei
# text_en = The teacher has looked angrily at the students.
1	Irakasleak	irakasle	NOUN	_	Animacy=Anim|Case=Erg|Definite=Def|Number=Sing	3	nsubj	_	Gloss=the-teacher
2	haserre	haserre	ADV	_	_	3	advmod	_	Gloss=angrily
3	begiratu	begiratu	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	Gloss=looked
4	die	*edun	AUX	_	Mood=Ind|Number[abs]=Sing|Number[dat]=Plur|Number[erg]=Sing|Person[abs]=3|Person[dat]=3|Person[erg]=3|VerbForm=Fin	3	aux	_	Gloss=has
5	ikasleei	ikasle	NOUN	_	Animacy=Anim|Case=Dat|Definite=Def|Number=Plur	3	obj	_	Gloss=to-students|SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	Gloss=.

~~~

In the current data (UD 2.1), the dative argument seems to be labeled `iobj`
even in ergative-dative constructions. However, Zúñiga and Fernández (2014)
write that the dative encodes the P function in such constructions; that
would mean that it should be `obj`.



<!---------------------------------------------------------------------------->

### Yidiɲ

See also:

* Avery D. Andrews: The major functions of the noun phrase (2007).
  In _Timothy Shopen (ed.): Language Typology and Syntactic Description, second edition, volume I: Clause Structure._
  Pp. 193-197. Cambridge University Press. ISBN 978-0-521-58156-1.
* R. M. W. Dixon: _A Grammar of Yidiny_ (1977).
  Cambridge: Cambridge University Press. ISBN 978-0-521-21462-9.

Yidiɲ (Pama-Nyungan, Australia) has a combination of the ergative-absolutive
system (similar to Basque) and the nominative-accusative system (similar to
Czech). The former pair is typical for nouns, the latter for pronouns.

* _Ŋayu maŋga:ɲ._ “I laughed.” (nominative)
* _Buɲa maŋga:ɲ._ “The woman laughed.” (absolutive)
* _Ŋaɲaɲ buɲa:ŋ wuɹa:ɲ._ “The woman slapped me.” (ergative-accusative)
* _Ŋayu buɲa wuɹa:ɲ._ “I slapped the woman.” (nominative-absolutive)
* _Waguɖaŋgu guda:ga wawa:l._ “The man saw the dog.” (ergative-absolutive)

~~~ conllu
# sent_id = 3.98a/yii
# Yidiɲ (Pama-Nyungan, Australia)
# source = Dixon, 1977
# text = Ŋayu maŋga:ɲ.
# gloss = I(NOM) laugh-PAST
# text_en = I laughed.
1	Ŋayu	ŋayu	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	Gloss=I|MGloss=I(NOM)
2	maŋga:ɲ	maŋgan	VERB	_	Tense=Past	0	root	_	Gloss=laughed|MSeg=maŋga:-ɲ|MGloss=laugh-PAST|SpaceAfter=No
3	.	.	PUNCT	_	_	2	punct	_	Gloss=.

~~~
~~~ conllu
# sent_id = 3.98b/yii
# Yidiɲ (Pama-Nyungan, Australia)
# source = Dixon, 1977
# text = Buɲa maŋga:ɲ.
# gloss = woman(ABS) laugh-PAST
# text_en = The woman laughed.
1	Buɲa	buɲa	NOUN	_	Case=Abs|Number=Sing	2	nsubj	_	Gloss=woman|MGloss=woman(ABS)
2	maŋga:ɲ	maŋgan	VERB	_	Tense=Past	0	root	_	Gloss=laughed|MSeg=maŋga:-ɲ|MGloss=laugh-PAST|SpaceAfter=No
3	.	.	PUNCT	_	_	2	punct	_	Gloss=.

~~~
~~~ conllu
# sent_id = 3.98c/yii
# Yidiɲ (Pama-Nyungan, Australia)
# source = Dixon, 1977
# text = Ŋaɲaɲ buɲa:ŋ wuɹa:ɲ.
# gloss = I(ACC) woman-ERG slap-PAST
# text_en = The woman slapped me.
1	Ŋaɲaɲ	ŋayu	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	3	obj	_	Gloss=me|MGloss=I(ACC)
2	buɲa:ŋ	buɲa	NOUN	_	Case=Erg|Number=Sing	3	nsubj	_	Gloss=woman|MSeg=buɲa:-ŋ|MGloss=woman-ERG
3	wuɹa:ɲ	wuɹan	VERB	_	Tense=Past	0	root	_	Gloss=slapped|MSeg=wuɹa:-ɲ|MGloss=slap-PAST|SpaceAfter=No
4	.	.	PUNCT	_	_	3	punct	_	Gloss=.

~~~
~~~ conllu
# sent_id = 3.98d/yii
# Yidiɲ (Pama-Nyungan, Australia)
# source = Dixon, 1977
# text = Ŋayu buɲa wuɹa:ɲ.
# gloss = I(NOM) woman(ABS) slap-PAST
# text_en = I slapped the woman.
1	Ŋayu	ŋayu	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	Gloss=I|MGloss=I(NOM)
2	buɲa	buɲa	NOUN	_	Case=Abs|Number=Sing	3	obj	_	Gloss=woman|MGloss=woman(ABS)
3	wuɹa:ɲ	wuɹan	VERB	_	Tense=Past	0	root	_	Gloss=slapped|MSeg=wuɹa:-ɲ|MGloss=slap-PAST|SpaceAfter=No
4	.	.	PUNCT	_	_	3	punct	_	Gloss=.

~~~
~~~ conllu
# sent_id = 3.98e/yii
# Yidiɲ (Pama-Nyungan, Australia)
# source = Dixon, 1977
# text = Waguɖaŋgu guda:ga wawa:l.
# gloss = man-ERG dog(ABS) see-PAST
# text_en = The man saw the dog.
1	Waguɖaŋgu	wagu:ɖa	NOUN	_	Case=Erg|Number=Sing	3	nsubj	_	Gloss=man|MSeg=Waguɖa-ŋgu|MGloss=man-ERG
2	guda:ga	guda:ga	NOUN	_	Case=Abs|Number=Sing	3	obj	_	Gloss=dog|MGloss=dog(ABS)
3	wawa:l	wawal	VERB	_	Tense=Past	0	root	_	Gloss=saw|MSeg=wawa:-l|MGloss=see-PAST|SpaceAfter=No
4	.	.	PUNCT	_	_	3	punct	_	Gloss=.

~~~

None of the core arguments is cross-referenced by verbal morphology.

Yidiɲ is interesting because some of its grammatical rules target the S and P
arguments (i.e., subjects of intransitive clauses and objects of transitive
clauses) but exclude A arguments (subjects of transitive clauses) (Andrews,
2007). See the discussion of the antipassive in [Valency-Changing Operations](valency_changing_operations.html)
for futher details.



<!---------------------------------------------------------------------------->

### Tagalog

The arguments in Tagalog are marked by function words that could be analyzed as either
prepositions, or case-bearing determiners. Although adpositions are often
associated with oblique arguments and adjuncts, we have seen that it is not
a universal rule. Spanish marks an animate direct object with the preposition _a_;
Slavic and other languages have prepositional objects that, despite not being
considered core in UD, seem to work the same way as other non-accusative
(but prepositionless) arguments; and in Japanese, all
arguments are marked by postpositions, including the subject and the direct
object. On the other hand, if the nominal markers in Tagalog are determiners,
then Tagalog somewhat resembles modern German, where nominal inflection has
been greatly reduced and the varying forms of determiners are often the only
clue about the case of a noun phrase. Categorizing the Tagalog markers as
determiners seems to be more favored in the literature.

The most core-like argument (also called _pivot_) is marked by the determiner
_ang_. The other core argument (if any) is marked by the determiner _ng_
(pronounced _nang_). A different set of determiners is used with proper nouns.
No determiners are used with personal pronouns, but the pronouns themselves
inflect for case.

There have been disputes about whether the pivot is subject and whether
Tagalog has a subject at all. Andrews (pp. 210–211) distinguishes two
grammatical relations, the a-subject and the p-subject, each having some
properties that are often associated with subjects in the more familiar
languages. He also says that the actor “has subject-like properties regardless
of whether or not it is the pivot.”
Nevertheless, for the purpose of easier and consistent annotation of Universal
Dependencies it seems advantageous to simplify the matter and always reserve
the [nsubj]() relation for the _ang_-phrase (the pivot).

It seems appropriate to mark the determiners and the personal pronouns with
the [Case]() feature: the pivot with nominative, and the other core argument
with accusative.

* _Nagsalita ka._ “You spoke.”

~~~ conllu
# sent_id = 1.98d/tl
# text = Nagsalita ka.
# gloss = (PERF.ACTIVE)speak you
# text_en = You spoke.
1	Nagsalita	salita	VERB	_	Aspect=Perf|Mood=Ind|VerbForm=Fin|Voice=Agf	0	root	_	Gloss=spoke|MSeg=nag-salita|MGloss=PERF+ACTIVE-speak
2	ka	ikaw	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	1	nsubj	_	Gloss=you|SpaceAfter=No
3	.	.	PUNCT	_	_	1	punct	_	Gloss=punct

~~~

* _Natalisod ka._ “You tripped.”

~~~ conllu
# sent_id = 1.98f/tl
# text = Natalisod ka.
# gloss = (PERF.INVOL)trip you
# text_en = You tripped.
1	Natalisod	tisod	VERB	_	Aspect=Perf|Mood=Ind|VerbForm=Fin|Voice=Paf	0	root	_	Gloss=tripped|MSeg=na-talisod|MGloss=PERF+INVOL-trip
2	ka	ikaw	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	1	nsubj	_	Gloss=you|SpaceAfter=No
3	.	.	PUNCT	_	_	1	punct	_	Gloss=punct

~~~

* _Natalisod ang babae._ “The woman tripped.”

~~~ conllu
# text = Natalisod ang babae.
# text_en = The woman tripped.
1	Natalisod	tisod	VERB	_	Aspect=Perf|Mood=Ind|VerbForm=Fin|Voice=Paf	0	root	_	Gloss=tripped|MSeg=na-talisod|MGloss=PERF+INVOL-trip
2	ang	ang	DET	_	Case=Nom|Definite=Def|PronType=Art	3	det	_	Gloss=the|MGloss=PIV
3	babae	babae	NOUN	_	_	1	nsubj	_	Gloss=woman|SpaceAfter=No
4	.	.	PUNCT	_	_	1	punct	_	Gloss=punct

~~~

* _Natalisod si Pedro._ “Pedro tripped.”

~~~ conllu
# text = Natalisod si Pedro.
# text_en = Pedro tripped.
1	Natalisod	tisod	VERB	_	Aspect=Perf|Mood=Ind|VerbForm=Fin|Voice=Paf	0	root	_	Gloss=tripped|MSeg=na-talisod|MGloss=PERF+INVOL-trip
2	si	si	DET	_	Case=Nom|Definite=Def|PronType=Art	3	det	_	Gloss=the
3	Pedro	Pedro	PROPN	_	_	1	nsubj	_	Gloss=Pedro|SpaceAfter=No
4	.	.	PUNCT	_	_	1	punct	_	Gloss=punct

~~~

<!--
Tagalog personal pronouns
		Nom (ang)	Acc (ng)	Loc (sa)
1 Sing		ako		ko		akin		I
2 Sing		ikaw/ka		mo		iyo		you
3 Sing		siya		niya		kanya		he/she/it
1 Plur Ex	kami		namin		amin		we
1 Plur In	tayo		natin		atin		we
2 Plur		kayo		ninyo		inyo		you
3 Plur		sila		nila		kanila		they
-->
Transitive (two-argument) sentences have two core arguments, one in the
nominative (pronoun or determiner) and the other in the accusative.

* _Naglilinis siya ng bahay._ “She cleans the house.”

~~~ conllu
# text = Naglilinis siya ng bahay.
# text_en = She cleans the house.
1	Naglilinis	linis	VERB	_	Aspect=Imp|Mood=Ind|VerbForm=Fin|Voice=Agf	0	root	_	Gloss=cleans
2	siya	siya	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	1	nsubj	_	Gloss=he/she
3	ng	ng	DET	_	Case=Acc|PronType=Art	4	det	_	Gloss=DET
4	bahay	bahay	NOUN	_	_	1	obj	_	Gloss=house|SpaceAfter=No
5	.	.	PUNCT	_	_	1	punct	_	Gloss=punct

~~~

Locative, directional and benefactive arguments are normally coded as oblique.
However, there are additional voices where these arguments become subjects.
One of the reasons why an argument is fronted as the subject is that the
subject is understood as the topic of the sentence. The _ang_ determiner
implies definiteness (while _ng_-marked arguments can be definite or
indefinite).

* _Magaalis ang babae ng bigas sa sako para sa bata._ “The woman will take some rice out of a/the sack for a/the child.” (agent voice)
* _Aalisan ng babae ng bigas ang sako para sa bata._ “A/the woman will take some rice out of the sack for a/the child.” (locative voice)

~~~ conllu
# sent_id = 3.111a/tl
# text = Magaalis ang babae ng bigas sa sako para sa bata.
# gloss = AP-FUT-take.out PIV woman OBJ rice DIR sack for BEN child
# text_en = The woman will take some rice out of a/the sack for a/the child.
# AP = actor pivot; PIV = pivot marker
# http://www.seasite.niu.edu/Tagalog/tagalog_verbs.htm
1	Magaalis	alis	VERB	_	Aspect=Prog|Mood=Ind|VerbForm=Fin|Voice=Agf	0	root	_	Gloss=will-take-out|MSeg=mag-a-alis|MGloss=AP-FUT-take.out
2	ang	ang	DET	_	Case=Nom|Definite=Def|PronType=Art	3	det	_	Gloss=the
3	babae	babae	NOUN	_	_	1	nsubj	_	Gloss=woman
4	ng	ng	DET	_	Case=Acc|PronType=Art	5	det	_	Gloss=DET
5	bigas	bigas	NOUN	_	_	1	obj	_	Gloss=rice
6	sa	sa	DET	_	Case=Loc|PronType=Art	7	det	_	Gloss=DIR
7	sako	sako	NOUN	_	_	1	obl	_	Gloss=sack
8	para	para	ADP	_	_	10	case	_	Gloss=for
9	sa	sa	DET	_	Case=Loc|PronType=Art	10	det	_	Gloss=BEN
10	bata	bata	NOUN	_	_	1	obl	_	Gloss=child|SpaceAfter=No
11	.	.	PUNCT	_	_	1	punct	_	Gloss=.

~~~
~~~ conllu
# sent_id = 3.111c/tl
# text = Aalisan ng babae ng bigas ang sako para sa bata.
# gloss = FUT-take.out-DP ACT woman OBJ rice PIV sack BEN child
# text_en = A/the woman will take some rice out of the sack for a/the child.
# DP = directional pivot; PIV = pivot marker
1	Aalisan	alis	VERB	_	Aspect=Prog|Mood=Ind|VerbForm=Fin|Voice=Locf	0	root	_	Gloss=will-take-out|MSeg=a-alis-an|MGloss=FUT-take.out-DP
2	ng	ng	DET	_	Case=Acc|PronType=Art	3	det	_	Gloss=DET
3	babae	babae	NOUN	_	_	1	obj:agent	_	Gloss=woman
4	ng	ng	DET	_	Case=Acc|PronType=Art	5	det	_	Gloss=DET
5	bigas	bigas	NOUN	_	_	1	obj:patient	_	Gloss=rice
6	ang	ang	DET	_	Case=Nom|Definite=Def|PronType=Art	7	det	_	Gloss=the
7	sako	sako	NOUN	_	_	1	nsubj:loc	_	Gloss=sack
8	para	para	ADP	_	_	10	case	_	Gloss=for
9	sa	sa	DET	_	Case=Loc|PronType=Art	10	det	_	Gloss=BEN
10	bata	bata	NOUN	_	_	1	obl	_	Gloss=child|SpaceAfter=No
11	.	.	PUNCT	_	_	1	punct	_	Gloss=.

~~~

Since the agent and patient stay core arguments even in the locative voice,
we actually have a [ditransitive clause](ditransitive_clauses.html) with three core
arguments. In contrast, the verbs of giving, which are typical representatives
of ditransitive predicates in other languages, form a standard transitive
clause in the agent and patient voices, as the recipient is coded as a
directional (locative) oblique dependent.

* _Nagbigay ang lalaki ng libro sa babae._ “The man gave a book to the woman.” (agent voice)

~~~ conllu
# text = Nagbigay ang lalaki ng libro sa babae.
# text_en = The man gave a book to the woman.
1	Nagbigay	bigay	VERB	_	Aspect=Perf|Mood=Ind|VerbForm=Fin|Voice=Agf	0	root	_	Gloss=gave
2	ang	ang	DET	_	Case=Nom|Definite=Def|PronType=Art	3	det	_	Gloss=the
3	lalaki	lalaki	NOUN	_	_	1	nsubj	_	Gloss=man
4	ng	ng	DET	_	Case=Acc|PronType=Art	5	det	_	Gloss=DET
5	libro	libro	NOUN	_	_	1	obj	_	Gloss=libro
6	sa	sa	DET	_	Case=Loc|PronType=Art	7	det	_	Gloss=DIR
7	babae	babae	NOUN	_	_	1	obl	_	Gloss=woman|SpaceAfter=No
8	.	.	PUNCT	_	_	1	punct	_	Gloss=.

~~~



<!---------------------------------------------------------------------------->

### Plains Cree

See also:

* Arok Elessar Wolvengrey (2011):
  [Semantic and pragmatic functions in Plains Cree syntax](https://dare.uva.nl/search?identifier=153f3405-f029-4046-8d95-9f2a087b4123)
  (PhD thesis). Utrecht: LOT. ISBN 978-94-6093-051-5.

The Algonquian (North American) language Plains Cree is similar to Basque in
its cross-referencing of both the subject and the object by verbal inflection.
It is also very dissimilar to Basque due to its almost complete lack of case
marking on the nouns. Yet the marking of the argument on the verbal head is
sufficient to allow for a relatively free word order (unlike English).

Like in many other languages where person and number of an argument is cross-referenced
by the verb, the argument does not need to appear as a separate word if it
would be just a pronoun.

* _Niwīcihānānak._ “We help them.”
* _Niwīcihikonānak._ “They help us.”

~~~ conllu
# text = Niwīcihānānak.
# text_en = We help them.
1	Niwīcihānānak	wīcih	VERB	_	Animacy=Anim|Clusivity[high]=Ex|Mood=Ind|Number[high]=Plur|Number[low]=Plur|Person[high]=1|Person[low]=3|Tense=Pres|Voice=Dir	0	root	_	Gloss=we-help-them|MSeg=ni-wīcih-ā-nān-ak|MGloss=1-help-DIR-1PL-3PL|SpaceAfter=No
2	.	.	PUNCT	_	_	1	punct	_	Gloss=.

~~~

~~~ conllu
# text = Niwīcihikonānak.
# text_en = They help us.
1	Niwīcihikonānak	wīcih	VERB	_	Animacy=Anim|Clusivity[high]=Ex|Mood=Ind|Number[high]=Plur|Number[low]=Plur|Person[high]=1|Person[low]=3|Tense=Pres|Voice=Inv	0	root	_	Gloss=they-help-us|MSeg=ni-wīcih-iko-nān-ak|MGloss=1-help-INV-1PL-3PL|SpaceAfter=No
2	.	.	PUNCT	_	_	1	punct	_	Gloss=.

~~~

The two verb forms in the two previous examples differ in [Voice](). The first
example is in the direct voice, where the argument higher in a language-specific
obliqueness hierarchy is more agent-like and the other argument is more patient-like.
First person arguments are higher than third person arguments, therefore the
agent is “we” and the patient is “they”.

In the second example, the argument-marking morphemes have not changed but the
verb is in the inverse voice where the argument lower in the hierarchy (“they”)
is the agent and the higher argument (“we”) is the patient.

It is undoubted that the two arguments that are cross-referenced by the verb
are core arguments. It is less clear how to label the two arguments, as Plains
Cree does not seem to have a subject in the Indo-European sense. Nevertheless,
it seems quite natural to postulate that the argument higher in the hierarchy
is more core-like and thus it gets the label [nsubj]() in UD; the other core
argument then gets [obj](). Such a distinction can be annotated easily and
consistently. The subject will be more agent-like in the direct voice, and
more patient-like in the inverse voice, which will be somewhat parallel to
the active and passive voices in other languages.

In the following two examples, the verb forms differ because the first verb
cross-references a singular object, the second a plural.

* _Nikī-wīcihāw Cān._ “I helped John.”

~~~ conllu
# text = Nikī-wīcihāw Cān.
# text_en = I helped John.
1	Nikī-wīcihāw	wīcih	VERB	_	Animacy=Anim|Mood=Ind|Number[high]=Sing|Number[low]=Sing|Person[high]=1|Person[low]=3|Tense=Past|Voice=Dir	0	root	_	Gloss=I-helped-him|MSeg=ni-kī-wīcih-ā-w|MGloss=1-PAST-help-DIR-3SG
2	Cān	Cān	PROPN	_	Animacy=Anim|Number=Sing|Obviation=Prx	1	obj	_	Gloss=John|SpaceAfter=No
3	.	.	PUNCT	_	_	1	punct	_	Gloss=.

~~~

* _Nikī-wīcihāwak Cān ēkwa Mēriy._ “I helped John and Mary.”

~~~ conllu
# text = Nikī-wīcihāwak Cān ēkwa Mēriy.
# text_en = I helped John and Mary.
1	Nikī-wīcihāwak	wīcih	VERB	_	Animacy=Anim|Mood=Ind|Number[high]=Sing|Number[low]=Plur|Person[high]=1|Person[low]=3|Tense=Past|Voice=Dir	0	root	_	Gloss=I-helped-them|MSeg=ni-kī-wīcih-ā-w-ak|MGloss=1-PAST-help-DIR-3-3PL
2	Cān	Cān	PROPN	_	Animacy=Anim|Number=Sing|Obviation=Prx	1	obj	_	Gloss=John
3	ēkwa	ēkwa	CCONJ	_	_	4	cc	_	Gloss=and
4	Mēriy	Mēriy	PROPN	_	Animacy=Anim|Number=Sing|Obviation=Prx	2	conj	_	Gloss=Mary|SpaceAfter=No
5	.	.	PUNCT	_	_	1	punct	_	Gloss=.

~~~

<!-- page 100 section 2.2.2.2 -->

If two third-person arguments are involved, one of them is considered
_proximate_ (more topical, higher in the obliqueness hierarchy) and the other
is considered _obviative_ (less topical, lower in the obliqueness hierarchy).
The obviative noun is marked morphologically by the suffix _-a_.
Note that Plains Cree distinguishes singular and plural [Number]() for
proximate but not for obviative third person arguments.

Current UD data (as of UD 2.1) does not include languages with direct-inverse
voice systems and proximate-obviative division of third-person arguments.
(Though there has been a [paper](http://www.aclweb.org/anthology/W16-1719)
that discusses possible application of the old UD v1 guidelines to the related
language of Arapaho.)
The guidelines define a special value for the “fourth person”, which could be
used for obviative arguments (see [Person]()). This value is inspired by the
[Unimorph](https://unimorph.github.io/doc/unimorph-schema.pdf#page=41) project.
However, the Unimorph specification seems to favor using `Person=3` with an
additional subfeature for proximate and obviative status:
“In some languages, a fourth person category is used to describe an otherwise
third-person referent that is differentiated from other third-person referents
by a switch-reference-like distinction … or, more commonly, by a distinction in
obviation status… For the purposes of morphological distinctions, these fourth
person categories may call for dedicated verbal morphology. While in some
cases their meaning can be captured by third person (3) plus switch-reference
features or features marking pragmatic voice distinctions (such as the
proximate (PRX) and obviative (OBV)), we include a fourth person category with
the feature 4 to allow for identification of a fourth person category when the
semantic distinctions are complicated or not strictly inflectional in nature.”

A possible alternative would be to revoke the “fourth person” and define
a separate feature `Obviation` with the values `Prx` and `Obv`. There are two
places where the feature could be used: as a verbal feature (cross-referencing
the argument) and as a nominal feature (marking the argument). Especially in
nominal inflection it seems preferable to use a new feature rather than assert
that the noun inflects for person (with values `3` and `4` only).

Yet another option would be to include the nominal inflection under [Case]()
marking, i.e., a noun with the obviative morpheme would be `Case=Acc` and
the unmarked nouns would be `Case=Nom`. However, such an extension could be
perceived as stretching the usual definition of case too far. The main oddity
would be that it only applies to third-person referents and only if two such
referents compete as arguments of the same verb. If one argument of the verb
is first-person and the other third-person, both will stay in the “nominative”
regardless of their semantic roles. Therefore, defining a new feature,
separate from `Case`, is probably a better and less confusing solution.

<!-- page 199 section 3.1 -->

* _Cāniy kī-wīcihēw Mērīwa._ “Johnny helped Mary.” (direct voice)
* _Cānīwa kī-wīcihēw Mēriy._ “Mary helped Johnny.” (direct voice)
* _Cāniy kī-wīcihik Mērīwa._ “Mary helped Johnny. / Johnny was helped by Mary.” (inverse voice)
* _Cānīwa kī-wīcihik Mēriy._ “Johnny helped Mary. / Mary was helped by Johnny.” (inverse voice)

~~~ conllu
# text = Cāniy kī-wīcihēw Mērīwa.
# text_en = Johnny helped Mary.
1	Cāniy	Cāniy	PROPN	_	Animacy=Anim|Number=Sing|Obviation=Prx	2	nsubj	_	Gloss=Johnny
2	kī-wīcihēw	wīcih	VERB	_	Animacy=Anim|Mood=Ind|Number[high]=Sing|Number[low]=Sing|Person[high]=3|Person[low]=3|Tense=Past|Voice=Dir	0	root	_	Gloss=helped|MSeg=kī-wīcih-ē-w|MGloss=PAST-help-DIR-3SG
3	Mērīwa	Mēriy	PROPN	_	Animacy=Anim|Number=Sing|Obviation=Obv	2	obj	_	Gloss=Mary|MSeg=Mēriy-wa|MGloss=Mary-OBV|SpaceAfter=No
4	.	.	PUNCT	_	_	2	punct	_	Gloss=.

~~~
~~~ conllu
# text = Cānīwa kī-wīcihēw Mēriy.
# text_en = Mary helped Johnny.
1	Cānīwa	Cāniy	PROPN	_	Animacy=Anim|Number=Sing|Obviation=Obv	2	obj	_	Gloss=Johnny|MSeg=Cāniy-wa|MGloss=Johnny-OBV
2	kī-wīcihēw	wīcih	VERB	_	Animacy=Anim|Mood=Ind|Number[high]=Sing|Number[low]=Sing|Person[high]=3|Person[low]=3|Tense=Past|Voice=Dir	0	root	_	Gloss=helped|MSeg=kī-wīcih-ē-w|MGloss=PAST-help-DIR-3SG
3	Mēriy	Mēriy	PROPN	_	Animacy=Anim|Number=Sing|Obviation=Prx	2	nsubj	_	Gloss=Mary|SpaceAfter=No
4	.	.	PUNCT	_	_	2	punct	_	Gloss=.

~~~
~~~ conllu
# text = Cāniy kī-wīcihik Mērīwa.
# text_en = Mary helped Johnny. / Johnny was helped by Mary.
1	Cāniy	Cāniy	PROPN	_	Animacy=Anim|Number=Sing|Obviation=Prx	2	nsubj:pass	_	Gloss=Johnny
2	kī-wīcihik	wīcih	VERB	_	Animacy=Anim|Mood=Ind|Number[high]=Sing|Number[low]=Sing|Person[high]=3|Person[low]=3|Tense=Past|Voice=Inv	0	root	_	Gloss=helped|MSeg=kī-wīcih-ikw-w|MGloss=PAST-help-INV-3SG
3	Mērīwa	Mēriy	PROPN	_	Animacy=Anim|Number=Sing|Obviation=Obv	2	obj:agent	_	Gloss=Mary|MSeg=Mēriy-wa|MGloss=Mary-OBV|SpaceAfter=No
4	.	.	PUNCT	_	_	2	punct	_	Gloss=.

~~~
~~~ conllu
# text = Cānīwa kī-wīcihik Mēriy.
# text_en = Johnny helped Mary. / Mary was helped by Johnny.
1	Cānīwa	Cāniy	PROPN	_	Animacy=Anim|Number=Sing|Obviation=Obv	2	obj:agent	_	Gloss=Johnny|MSeg=Cāniy-wa|MGloss=Johnny-OBV
2	kī-wīcihik	wīcih	VERB	_	Animacy=Anim|Mood=Ind|Number[high]=Sing|Number[low]=Sing|Person[high]=3|Person[low]=3|Tense=Past|Voice=Inv	0	root	_	Gloss=helped|MSeg=kī-wīcih-ikw-w|MGloss=PAST-help-INV-3SG
3	Mēriy	Mēriy	PROPN	_	Animacy=Anim|Number=Sing|Obviation=Prx	2	nsubj:pass	_	Gloss=Mary|SpaceAfter=No
4	.	.	PUNCT	_	_	2	punct	_	Gloss=.

~~~

Even though Plains Cree does not use morphological cases to distinguish agents
from patients, there is a form of nouns that can be classified as the locative
case (`Case=Loc`). It clearly marks the noun as oblique and unable to be
cross-referenced by verbal inflection. The other, bare nominal forms, could
then be tagged as nominative (`Case=Nom`), or, optionally, left with the [Case]()
feature empty.

* _Akocikanihk nikī-ahāwak nitastisak._ “I put my mitts on the shelf.” (mitts are grammatically animate, despite the semantics)

~~~ conllu
# text = Akocikanihk nikī-ahāwak nitastisak.
# text_en = I put my mitts on the shelf.
1	Akocikanihk	akocikan	NOUN	_	Animacy=Inan|Case=Loc	2	obl	_	Gloss=shelf|MSeg=akocikan-ihk|MGloss=shelf-LOC
2	nikī-ahāwak	ah	VERB	_	Animacy=Anim|Mood=Ind|Number[high]=Sing|Number[low]=Plur|Person[high]=1|Person[low]=3|Tense=Past|Voice=Dir	0	root	_	Gloss=I-put|MSeg=ni-kī-ah-ā-wak|MGloss=1-PAST-put-DIR-3PL
3	nitastisak	astis	NOUN	_	Animacy=Anim|Number=Plur|Person[psor]=1	2	obj	_	Gloss=my-mitts|MSeg=nit-astis-ak|MGloss=1-mitt-PL|SpaceAfter=No
4	.	.	PUNCT	_	_	2	punct	_	Gloss=.

~~~

Adpositions may accompany the locative, too:

* _Nikī-nīhtināw akocikanihk ohci._ “I took him/her/it down from the shelf.”

~~~ conllu
# text = Nikī-nīhtināw akocikanihk ohci.
# text_en = I took him/her/it down from the shelf.
1	Nikī-nīhtināw	nīhtin	VERB	_	Animacy=Anim|Mood=Ind|Number[high]=Sing|Number[low]=Sing|Person[high]=1|Person[low]=3|Tense=Past|Voice=Dir	0	root	_	Gloss=I-took-it-down|MSeg=ni-kī-nīhtin-ā-w|MGloss=1-PAST-take.down-DIR-3SG
2	akocikanihk	akocikan	NOUN	_	Animacy=Inan|Case=Loc	1	obl	_	Gloss=shelf|MSeg=akocikan-ihk|MGloss=shelf-LOC
3	ohci	ohci	ADP	_	_	2	case	_	Gloss=from|SpaceAfter=No
4	.	.	PUNCT	_	_	1	punct	_	Gloss=.

~~~



## Summary of Relations

The features discussed in this chapter are [nsubj](), [obj](), [iobj]() (core arguments) and [obl]() resp. [obl:arg]() (oblique dependents).

* [nsubj]() — nominal subject, typically the most “core-like” argument.
* [obj]() — nominal object, the second most “core-like” argument. If the third argument shows fewer core properties,
  then this is the direct object and the third argument is called indirect object and labeled `iobj`.
  If both objects are equal in “coreness status”, then both shall be labeled `obj`.
* [iobj]() — nominal indirect object, the least “core-like” of the three arguments (only if it can be shown that it lacks
  some core properties that the other object has).
* [obl]() — nominal oblique argument or adjunct.
  If some of the `obl` subtypes are used in the language, then the bare `obl` denotes the remaining situations not covered by the subtypes.
  * [obl:arg]() — oblique argument (if the data provider decides to distinguish it from adjuncts)

There are other optional subtypes of these relations defined elsewhere in
this documentation or in language-specific guidelines. If such subtypes exist,
then quite naturally the label without subtype denotes only the remaining
cases, not covered by subtypes.
