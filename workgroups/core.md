---
layout: base
title:  'Working Group on Core Arguments'
udver: '2'
---

# Working Group on Core Arguments

Most of this chapter focuses on arguments of [verbs](/u/pos/VERB.html).
Some similar patterns of other parts of speech are discussed [at the end of the chapter](#can-adjectives-have-core-arguments).

Most of this chapter assumes that the arguments are [nominal](/u/pos/NOUN.html) phrases.
Arguments realized as clauses are discussed [at the end of the chapter](#clausal-complements).

<span style='color:red'>TO DO: write most of the chapter :-)</span>

* [Core vs. oblique](#core-arguments-vs-oblique-modifiers)
  * [The definition of core arguments](#the-definition-of-core-arguments)
  * [Avoiding an argument/adjunct distinction](#avoiding-an-argumentadjunct-distinction)
* [Coding strategies](#coding-strategies)
  * [English](#english)
  * [Spanish](#spanish)
  * [Czech](#czech)
  * [Basque](#basque)
* [Can adjectives have core arguments?](#can-adjectives-have-core-arguments)
* [Can adverbs have core arguments?](#can-adverbs-have-core-arguments)
* [Can nouns have core arguments?](#can-nouns-have-core-arguments)
* [Clausal complements](#clausal-complements)

## Core Arguments vs. Oblique Modifiers

The UD taxonomy is centered around the fairly clear distinction between
core arguments (subjects, objects, clausal complements) versus other dependents.
It does not make a distinction between adjuncts (general modifiers) versus
oblique arguments (arguments said to be selected by a head but not expressed
as a core argument).

### The Definition of Core Arguments

The core/oblique distinction is ultimately an information packaging distinction.
All or nearly all languages have a basic way of expressing the one or two arguments
of most verbs (intransitive and transitive verbs), and this unmarked form
of argument expression is as a core argument. If additional arguments can appear
that are treated similarly to these arguments, they may also be regarded as
core arguments. (Some languages have no additional core arguments, while other
languages allow multiple object arguments, for instance.)
Status as a core argument is decoupled from the semantic roles of participants.
Normally, depending on the meaning of a verb, many different semantic roles can
be expressed by the same means of encoding core arguments. Nevertheless, there
is a correlation: agent and patient or theme roles of predicates in their
unmarked valence are normally realized as core arguments.

Syntactically, there is not a single criterion which can be used crosslinguistically
to distinguish core arguments from obliques, though there are often good and useful
criteria for particular languages. These include:

* Verbs usually only agree with core arguments
* Oblique arguments may usually or always appear marked by an adposition while core arguments appear as bare nominals
* Certain cases, traditionally called nominative, accusative, and absolutive typically mark core arguments
* Core arguments in many languages occupy special positions in the clause, often adjacent to the verb
* Syntactic phenomena such as being the controller of a subordinate clause argument or the target of relativization are limited to core arguments in some languages

At the end of the day, the distinction must be drawn and documented on language
particular grounds. For example, many languages have certain verbs which take
arguments in oblique cases such as dative or an experiencer case, but these
arguments should be regarded as core arguments based on their syntactic
behavior being parallel to the arguments of other transitive verbs.

### Avoiding an Argument/Adjunct Distinction

Many grammatical frameworks suggest that some obliques are selected by or are
arguments of a head (for instance, a source argument of _from the Queen_ is
an argument of the head _receive_), while other obliques are general adjuncts,
which can appear with any predicate without the head selecting for them (for
instance, a temporal argument such as _after the holidays_).

However, the argument/adjunct distinction is subtle, unclear, and frequently
argued over. For instance, syntacticians at certain times have argued for
various obliques to be arguments, while at other times arguing that they are
adjuncts, particularly for certain semantic roles such as oblique instruments
or sources. We take the distinction to be sufficiently subtle (and its
existence as a categorical distinction sufficiently questionable) that the
best practical solution is to eliminate it. Nevertheless, if the distinction
is available in a treebank that is being converted to UD, it can be preserved
using subtypes of dependency relations: `obl:arg` is used for oblique
arguments, and bare `obl` then denotes adjuncts.

The core-oblique distinction is generally accepted in language typology as
being both more relevant and easier to apply cross-linguistically than the
argument-adjunct distinction. See, for example:

* Avery D. Andrews. 2007. The Major Functions of the Noun Phrase. In Timothy Shopen (ed.) Language Typology and Syntactic Description: Clause Structure (2nd ed), Cambridge University Press, Cambridge, United Kingdom, pp. 132-223. (1st edition, 1985.)
* Sandra A. Thompson. 1997. Discourse Motivations for the Core-Oblique Distinction as a Language Universal. In Akio Kamio (ed.) Directions in Functional Linguistics. Benjamins, Amsterdam, the Netherlands, pp. 59-82.



## Coding Strategies



### English

In English, nominal core arguments are bare noun phrases (that is, without preposition).
Oblique arguments and nominal adjuncts are prepositional phrases.
There is one exception: a bare nominal may be used as a temporal adjunct expressing
duration:

* _He works the whole week._

In an unmarked declarative sentence, the core argument preceding the verb is
the subject, and if there is another core argument following the verb, it is
the object. A finite verb agrees in person and number with its subject:

* _The boy eats one apple._
* _The boy eats many apples._
* _The boys eat one apple._
* _The boys eat many apples._

~~~ conllu
# text = The boy eats one apple.
1	The	the	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	boy	boy	NOUN	_	Number=Sing	3	nsubj	_	_
3	eats	eat	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	one	one	NUM	_	_	5	nummod	_	_
5	apple	apple	NOUN	_	Number=Sing	3	obj	_	SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	_

~~~

If the arguments are realized as personal pronouns, the subject is in the
nominative form _(I, he, she, we, they)_ and the object is in the accusative
_(me, him, her, us, them)._ Nouns do not inflect for case in English.

Transitive clauses (those that have an object) can be passivized, which means:

1. Active verb form is replaced by passive (finite auxiliary + participle).
2. Former object becomes subject.
3. Former subject either disappears or becomes an oblique argument.

* _One apple is eaten (by the boy(s))._
* _Many apples are eaten (by the boy(s))._

~~~ conllu
# text = One apple is eaten by the boy.
1	One	one	NUM	_	_	2	nummod	_	_
2	apple	apple	NOUN	_	Number=Sing	4	nsubj:pass	_	_
3	is	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
4	eaten	eat	VERB	_	Tense=Past|VerbForm=Part	0	root	_	_
5	by	by	ADP	_	_	7	case	_	_
6	the	the	DET	_	Definite=Def|PronType=Art	7	det	_	_
7	boy	boy	NOUN	_	Number=Sing	4	obl:agent	_	SpaceAfter=No
8	.	.	PUNCT	_	_	4	punct	_	_

~~~

The inability to passivize of _He works the whole week_ is an argument in
support of the claim that the clause is intransitive and _the whole week_
is an adjunct rather than an object.
However, this test is not sufficient because there is a small set of verbs
that have objects but do not passivize:

* _John has a new car. (*A new car is had by John.)_
* _Friday does not suit me. (*I am not suited by Friday.)_

Therefore, durational temporal adjuncts have to be stated as an exception,
and this is the one case where the argument/adjunct distinction cannot be
avoided in UD.

* _He works the whole week._

~~~ conllu
# text = He works the whole week.
1	He	he	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	works	work	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	the	the	DET	_	Definite=Def|PronType=Art	5	det	_	_
4	whole	whole	ADJ	_	_	5	amod	_	_
5	week	week	NOUN	_	Number=Sing	2	obl:tmod	_	SpaceAfter=No
6	.	.	PUNCT	_	_	2	punct	_	_

~~~

On the other hand, even temporal noun phrases can be objects if the verb
requires an object:

* _He spent the whole week in Oslo._

~~~ conllu
# text = He spent the whole week in Oslo.
1	He	he	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	spent	spend	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	the	the	DET	_	Definite=Def|PronType=Art	5	det	_	_
4	whole	whole	ADJ	_	_	5	amod	_	_
5	week	week	NOUN	_	Number=Sing	2	obj	_	_
6	in	in	ADP	_	_	7	case	_	_
7	Oslo	Oslo	PROPN	_	Number=Sing	2	obl	_	SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	_	_

~~~

Some English verbs allow two objects (i.e., two core arguments following
the verb):

* _Peter gave Kate a book._
* _Tom teaches me mathematics._

The traditional approach outside UD is to call the first object _indirect_
and the second object _direct;_ it is often defined in terms of semantic
roles, saying that the recipient is the indirect object. UD avoids referring
to semantic roles and says instead that [indirect object](/u/dep/iobj.html)
is a core argument of the verb that is not its subject or direct [object](/u/dep/obj.html);
the (direct) object is then defined as “the second most core argument of a verb after the subject.”
In the above examples, the recipient _(Kate, me)_ is arguably more core than
the theme _(book, mathematics)_ because the recipient can be promoted in
passivization while the theme cannot:

* _Kate was given a book by Peter. (*A book was given Kate by Peter.)_ <span style="color: orange"><b>Nathan:</b> "A book was given Kate" sounds unusual or archaic but not completely ungrammatical to me. You can find examples on the web of "advice was given him/her", for example. Some COCA examples: "how do you feel about John Poindexter and the sentence that was given him today?" (1990 spoken), "But when the rooms had been shown and the paper was given him to sign, Frisch hesitated, clutching the pen." (1990 fiction). Not many COCA examples with by-phrases—only found this one from a 2012 interview with Sarah Palin, who is known for her colorful use of English: "And he got a standing ovation at the end of the speech, and that was given him by those who paid attention and stayed to the end, if you will, and heard what he had to say." No examples in EWT of a passive verb with `iobj`, though.</span>
* _I am taught mathematics by Tom. (*Mathematics is taught me by Tom.)_

The second object can be promoted only if both the subject and the first object
are recoded as oblique arguments (in the case of _to give_) or the first object
is removed (in the case of _to teach_):

* _A book was given by Peter to Kate._
* _Mathematics is taught by Tom. (*Mathematics is taught by Tom to me.)_

Therefore, the UD v2 guidelines actually require that the second object
is labeled `iobj`. Yet in the current English data (UD 2.1), it is still
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

<span style="color:red">TO DO: How do we explain that an oblique nominal is
annotated as subject in subordinate infinitival clause, as in
_It was impossible <b>for him</b> to attend the meeting._
Some authors (I do not remember where exactly I saw it) say that it is quite
common that core arguments are coded differently in subordinate clauses.
But can we prove that the _for_-phrase is indeed a subject?
It is not sufficient to say that it has the same semantic role as the corresponding
bare nominal in a main finite clause. If it was sufficient, then the _by_-phrases
in passive clauses would be subjects too!</span>



### Spanish

The behavior of Spanish core arguments is somewhat similar to English but there
are differences. Like in English, it is typical for a core argument to be
a bare nominal without preposition. However, prepositions are not completely
excluded. If the object is a person, it is marked by the preposition _a_:

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

Transitive clauses (those that have an object) can be passivized.

* _El vino es bebido por los hombres._ “The wine is drunk by the men.”
* _Las bebidas son bebidas por los hombres._ “The drinks are drunk by the men.”

~~~ conllu
# text = El vino es bebido por los hombres.
# text_en = The wine is drunk by the men.
1	El	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	Gloss=the
2	vino	vino	NOUN	_	Gender=Masc|Number=Sing	4	nsubj:pass	_	Gloss=wine|SpaceAfter=No
3	es	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	_	Gloss=is
4	bebido	beber	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	Gloss=drunk
5	por	por	ADP	_	_	7	case	_	Gloss=by
6	los	el	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	7	det	_	Gloss=the
7	hombres	hombre	NOUN	_	Gender=Masc|Number=Plur	4	obl:agent	_	Gloss=men|SpaceAfter=No
8	.	.	PUNCT	_	_	4	punct	_	Gloss=.

~~~

Both coding strategies that are used for core arguments can also appear with
adjuncts. Bare nominal adjuncts are rare, the exception being durational
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

Some Spanish verbs allow two objects:

* _Pedro dio un libro a Isabel._ “Pedro gave Isabel a book.”
* _Pedro le dio un libro a Isabel._ “Pedro gave Isabel a book.”
* _Pedro le dio un libro._ “Pedro gave her a book.”
* _Santiago me enseña las matemáticas._ “Santiago teaches me mathematics.”

One of the objects typically corresponds to the recipient semantic role and
it most likely refers to a person, therefore it will be marked by the
preposition _a_ (if it is realized as a full noun phrase). If it is represented
by a pronominal clitic, it will be in the dative form (identical with the
accusative except for the third person, which is _le, les,_ and does not
distinguish gender). It is not uncommon that both the noun phrase and the
clitic are present, as in _Pedro <b>le</b> dio un libro <b>a Isabel</b>._
(this is known as “clitic doubling”).

~~~ conllu
# text = Pedro le dio un libro a Isabel.
# text_en = Pedro gave Isabel a book.
1	Pedro	Pedro	PROPN	_	Gender=Masc|Number=Sing	3	nsubj	_	Gloss=Pedro
2	le	él	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	3	expl	_	Gloss=her
3	dio	dar	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	Gloss=gave
4	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	5	det	_	Gloss=a
5	libro	libro	NOUN	_	Gender=Masc|Number=Sing	3	obj	_	Gloss=book
6	a	a	ADP	_	_	7	case	_	Gloss=to
7	Isabel	Isabel	PROPN	_	Gender=Fem|Number=Sing	3	iobj	_	Gloss=Isabel|SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	Gloss=.

~~~

~~~ conllu
# text = Pedro le dio un libro.
# text_en = Pedro gave her a book.
1	Pedro	Pedro	PROPN	_	Gender=Masc|Number=Sing	3	nsubj	_	Gloss=Pedro
2	le	él	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	3	iobj	_	Gloss=her
3	dio	dar	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	Gloss=gave
4	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	5	det	_	Gloss=a
5	libro	libro	NOUN	_	Gender=Masc|Number=Sing	3	obj	_	Gloss=book|SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	Gloss=.

~~~

The object that is marked by the preposition _a_ or by the dative case of the
pronoun (i.e., the one with the recipient role) is labeled as an indirect
object; the unmarked/accusative object is direct. This is in line with the
UD v2 guidelines: if the clause is passivized, the direct object is promoted
to the subject relation, while the indirect object stays untouched.
Hence the indirect object is less core than the direct object.

* _Un libro fue dado a Isabel por Pedro._ “A book was given to Isabel by Pedro.”

~~~ conllu
# text = Un libro fue dado a Isabel por Pedro.
# text_en = A book was given to Isabel by Pedro.
1	Un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	2	det	_	Gloss=a
2	libro	libro	NOUN	_	Gender=Masc|Number=Sing	4	nsubj:pass	_	Gloss=book
3	fue	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	aux:pass	_	Gloss=was
4	dado	dar	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	Gloss=given
5	a	a	ADP	_	_	6	case	_	Gloss=to
6	Isabel	Isabel	PROPN	_	Gender=Fem|Number=Sing	4	iobj	_	Gloss=Isabel
7	por	por	ADP	_	_	8	case	_	Gloss=by
8	Pedro	Pedro	PROPN	_	Gender=Masc|Number=Sing	4	obl:agent	_	Gloss=Pedro|SpaceAfter=No
9	.	.	PUNCT	_	_	4	punct	_	Gloss=.

~~~



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
* _Snědl jablko chlapec._ “A boy ate an apple.” (Most unusual order but not impossible.)

Transitive clauses (those that have an accusative object) can be passivized.

* _Jablko bylo snědeno chlapcem._ “The apple was eaten by the boy.”
* _Jablka byla snědena chlapcem._ “The apples were eaten by the boy.”

~~~ conllu
# text = Jablko bylo snědeno chlapcem.
# text_en = The apple was eaten by the boy.
1	Jablko	jablko	NOUN	_	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos	3	nsubj:pass	_	Gloss=apple
2	bylo	být	AUX	_	Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part	3	aux:pass	_	Gloss=was
3	snědeno	snědený	ADJ	_	Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	Gloss=eaten
4	chlapcem	chlapec	NOUN	_	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	3	obl:agent	_	Gloss=by-boy|SpaceAfter=No
5	.	.	PUNCT	_	_	3	punct	_	Gloss=.

~~~

There are a few verbs with accusative objects that cannot passivize, for
instance:

* _Chlapec dostal čokoládu._ “The boy got chocolate.” _(*Čokoláda byla dostána chlapcem.)_
* _Chlapec má čokoládu._  “The boy has chocolate.” _(*Čokoláda je mána chlapcem.)_

It is not guaranteed that a bare accusative nominal is a core argument. It can
also be a durational temporal adjunct, as in:

* _Pracuje celý týden._ “He works the whole week.”

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
because of the exceptional verbs like _dostat_ “to get” and _mít_ “to have”.
Therefore, durational temporal adjuncts have to be stated as an exception and
the argument/adjunct distinction cannot be avoided in this case.

Many two-argument verbs in Czech specify the second argument as a bare noun
phrase in a case other than accusative. Whether these arguments are core
arguments is a point of disagreement among different authors.
The current (UD 2.1) approach in UD for Czech and several similar Indo-European
languages is to analyze them as core.

Some of the verbs resemble prototypical transitive verbs in that their
arguments have the roles of agent and patient. For instance, the verb
_pomoci_ “to help” takes a dative argument:

* _Zuzka pomohla Martinovi s domácím úkolem._ “Zuzka helped Martin with his homework.”

The clause can be passivized. However, the dative argument is not promoted
by the passivization to the subject relation. It stays in dative and the
verb does not cross-reference its person, number or gender. Instead, verbal
morphology switches to the default singular neuter agreement with unexpressed subject.
This suggests that the dative argument is less core-like (if at all) than a
standard accusative object.

* _Martinovi bylo pomoženo s domácím úkolem._ “Martin was helped with his homework.” _(*Martin byl pomožen s domácím úkolem.)_

~~~ conllu
# text = Zuzka pomohla Martinovi s domácím úkolem.
# text_en = Zuzka helped Martin with his homework.
1	Zuzka	Zuzka	PROPN	_	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	2	nsubj	_	Gloss=Zuzka
2	pomohla	pomoci	VERB	_	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	_	Gloss=helped
3	Martinovi	Martin	PROPN	_	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos	2	obj	_	Gloss=Martin
4	s	s	ADP	_	_	6	case	_	Gloss=with
5	domácím	domácí	ADJ	_	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	6	amod	_	Gloss=home
6	úkolem	úkol	NOUN	_	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	2	obl:arg	_	Gloss=work|SpaceAfter=No
7	.	.	PUNCT	_	_	2	punct	_	Gloss=.

~~~

~~~ conllu
# text = Martinovi bylo pomoženo s domácím úkolem.
# text_en = Martin was helped with his homework.
1	Martinovi	Martin	PROPN	_	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing|Polarity=Pos	3	obj	_	Gloss=Martin
2	bylo	být	AUX	_	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	3	aux:pass	_	Gloss=was
3	pomoženo	pomožený	ADJ	_	Gender=Neut|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	Gloss=helped
4	s	s	ADP	_	_	6	case	_	Gloss=with
5	domácím	domácí	ADJ	_	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	6	amod	_	Gloss=home
6	úkolem	úkol	NOUN	_	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	3	obl:arg	_	Gloss=work|SpaceAfter=No
7	.	.	PUNCT	_	_	3	punct	_	Gloss=.

~~~

If dative arguments are core objects, then we may want to distinguish them from
benefactive adjuncts that are also encoded as bare nominals in the dative
(that is, if we acknowledge that benefactives should be adjuncts):

* _Zuzka Martinovi udělala večeři._ “Zuzka prepared a dinner for Martin.”
* _Zuzka Martinovi koupila večeři._ “Zuzka bought a dinner for Martin.”
* _Zuzka Martinovi objednala večeři._ “Zuzka ordered a dinner for Martin.”
* _Zuzka Martinovi snědla večeři._ “Zuzka ate Martin's dinner.”

Similarly, there are objects realized as bare genitives and even instrumentals,
with the same passivization pattern as datives. Instrumental objects have to
be distinguished from demoted oblique agents in passive constructions, and
from instrumental adjuncts.

* _Novináři musí dbát zásad objektivity._ “Journalists must observe principles of objectivity.” (genitive)
* _Musí být dbáno zásad objektivity._ “Principles of objectivity must be observed.”
* _Karel hýbal nábytkem._ “Karel moved furniture.” (instrumental)
* _Nábytkem bylo hýbáno._ “The furniture has been moved.”

The Czech grammar also recognizes prepositional objects but we do not consider
them core (which means they are not objects in UD). In fact, the definition
of object in the Czech grammar is identical with argument and leads to the
argument/adjunct distinction, disfavored in UD. Most adjuncts are prepositional
phrases, thus the bulk of the decisions would have to be done for prepositional phrases;
that is the
main reason why bare datives are analyzed as core objects while prepositional
phrases are not. It is worth noting that the neuter singular passivization
that is described above for bare datives, genitives and instrumentals is also available
for prepositional phrases and even for some intransitive verbs, although
such constructions are rare:

* _Spoléhali na ředitelovo rozhodnutí._ “They relied on the director's decision.”
* _Na ředitelovo rozhodnutí bylo spoléháno._ “It was relied on the director's decision.”
* _Ředitel rozhodl v pátek._ “The director decided on Friday.”
* _V pátek bylo rozhodnuto._ “It was decided on Friday.”

Some Czech verbs allow two objects. Typically, one object is accusative and
the other is dative; nevertheless, some other combinations are possible, too.

* _Petr dal Katce knihu._ “Petr gave Katka a book.” (dative + accusative)
* _Tomáš mě učí matematiku._ “Tomáš teaches me mathematics.” (accusative + accusative)
* _Muž vyhrožoval sousedovi smrtí._ “A man threatened his neighbor with death.” (dative + instrumental)

The dative-accusative construction can be passivized so that the accusative
object is promoted to subject, the dative object stays as it is, and the
former subject disappears (or, rarely, is transformed to instrumental).
It is thus confirmed that the dative object is less core than the accusative,
hence the dative should be labeled as indirect.

* _Kniha byla dána Katce (Petrem)._ “The book was given to Katka (by Petr).”

The verb _učit_ “to teach” is special in that it allows two accusatives: one
representing the theme (mathematics) and the other the recipient (me). Either
one can be omitted and then we have a normal transitive clause with an accusative
object that can be promoted via passivization. However, if both arguments are
present in the active clause, it is not possible to promote one of them and
leave the other untouched; the grammar does not tolerate a bare accusative
argument in a passive clause.
Also note that there is a slightly archaic alternative where the theme (not
the recipient!) takes the dative form. Here the passive might in theory be
available but it still sounds clumsy.

* _Tomáš učí matematiku._ “Tomáš teaches mathematics.”
* _Matematika je učena Tomášem._ “Mathematics is taught by Tomáš.”
* _Tomáš mě učí._ “Tomáš teaches me.”
* _(Já) jsem učen Tomášem._ “I am taught by Tomáš.”
* _Tomáš mě učí matematiku._ “Tomáš teaches me mathematics.”
* _(*Jsem učen matematiku Tomášem. *Matematika je učena mě Tomášem.)_
* _Tomáš mě učí matematice._ “Tomáš teaches me mathematics.” (mathematics in dative)
* _(?Jsem učen matematice (Tomášem).)_ “I am taught mathematics (by Tomáš).”

There thus does not seem to be any evidence that one of the accusatives is
more core than the other. We have an example of a clause with two objects,
neither of which is indirect.

Finally, in the dative-instrumental construction, the passivization follows
rules similar to clauses with one non-accusative object: former subject
disappears but the objects stay untouched. Moreover, if the subject is
not removed but transformed to an instrumental argument, it is likely that
the original instrumental argument will be removed instead.
Yet it is not completely ungrammatical to keep them both (see the example below; but it is
highly preferred that the two instrumental arguments are not adjacent).

* _Muž vyhrožoval sousedovi smrtí._ “A man threatened his neighbor with death.”
* _Sousedovi bylo vyhrožováno smrtí._ “The neighbor was threatened with death.”
* _Sousedovi bylo vyhrožováno mužem._ “The neighbor was threatened by the man.”
* _Mužem bylo sousedovi vyhrožováno smrtí._ “The neighbor was threatened by the man with death.”

The dative-instrumental construction is one where both objects are clearly
less core than accusative objects, but none of the two is more or less core
than the other. Therefore, none of them can be labeled as indirect.

* _Petr dal Katce knihu._ “Petr gave Katka a book.”

~~~ conllu
# text = Petr dal Katce knihu.
# text_en = Petr gave Katka a book.
1	Petr	Petr	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	2	nsubj	_	Gloss=Petr
2	dal	dát	VERB	_	Animacy=Anim|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	_	Gloss=gave
3	Katce	Katka	PROPN	_	Case=Dat|Gender=Fem|Number=Sing|Polarity=Pos	2	iobj	_	Gloss=to-Katka
4	knihu	kniha	NOUN	_	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	2	obj	_	Gloss=book|SpaceAfter=No
5	.	.	PUNCT	_	_	2	punct	_	Gloss=.

~~~

* _Kniha byla dána Katce Petrem._ “The book was given to Katka by Petr.”

~~~ conllu
# text = Kniha byla dána Katce Petrem.
# text_en = The book was given to Katka by Petr.
1	Kniha	kniha	NOUN	_	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	3	nsubj:pass	_	Gloss=book
2	byla	být	AUX	_	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	3	aux:pass	_	Gloss=was
3	dána	daný	ADJ	_	Gender=Fem|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	Gloss=given
4	Katce	Katka	PROPN	_	Case=Dat|Gender=Fem|Number=Sing|Polarity=Pos	3	iobj	_	Gloss=to-Katka
5	Petrem	Petr	PROPN	_	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	3	obl:agent	_	Gloss=by-Petr|SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	Gloss=.

~~~

* _Tomáš mě učí matematiku._ “Tomáš teaches me mathematics.”

~~~ conllu
# text = Tomáš mě učí matematiku.
# text_en = Tomáš teaches me mathematics.
1	Tomáš	Tomáš	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	3	nsubj	_	Gloss=Tomáš
2	mě	já	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs|Variant=Short	3	obj	_	Gloss=me
3	učí	učit	VERB	_	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=teaches
4	matematiku	matematika	NOUN	_	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	3	obj	_	Gloss=mathematics|SpaceAfter=No
5	.	.	PUNCT	_	_	3	punct	_	Gloss=.

~~~



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
1	Niri	ni	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	3	iobj	_	Gloss=to-me
2	ardoa	ardo	NOUN	_	Animacy=Inan|Case=Abs|Definite=Def|Number=Sing	3	obj	_	Gloss=wine
2	gustatzen	gustatzen	VERB	_	Aspect=Imp|VerbForm=Part	0	root	_	Gloss=pleasing
3	zait	izan	AUX	_	Mood=Ind|Number[abs]=Sing|Number[dat]=Sing|Person[abs]=3|Person[dat]=1|VerbForm=Fin	2	aux	_	Gloss=is|SpaceAfter=No
4	.	.	PUNCT	_	_	2	punct	_	Gloss=.

~~~

Some two-argument verbs take ergative+dative, instead of ergative+absolutive:

* _Irakasleak haserre begiratu die ikasleei._ “The teacher has looked angrily at the students.”

~~~ conllu
# text = Irakasleak haserre begiratu die ikasleei
# text_en = The teacher has looked angrily at the students.
1	Irakasleak	irakasle	NOUN	_	Animacy=Anim|Case=Erg|Definite=Def|Number=Sing	3	nsubj	_	Gloss=the-teacher
2	haserre	haserre	ADV	_	_	3	advmod	_	Gloss=angrily
3	begiratu	begiratu	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	Gloss=looked
4	die	*edun	AUX	_	Mood=Ind|Number[abs]=Sing|Number[dat]=Plur|Number[erg]=Sing|Person[abs]=3|Person[dat]=3|Person[erg]=3|VerbForm=Fin	3	aux	_	Gloss=has
5	ikasleei	ikasle	NOUN	_	Animacy=Anim|Case=Dat|Definite=Def|Number=Plur	3	iobj	_	Gloss=to-students|SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	Gloss=.

~~~

* _Zezenak saihetsa pitzatu zidan._ “The bull cracked my rib.”
  (ergative argument: 3 singular; absolutive argument: 3 singular; dative argument: 1 singular)

~~~ conllu
# sent_id = test-s452
# text = Zezenak saihetsa pitzatu zidan.
# text_en = The bull cracked my rib.
1	Zezenak	zezen	NOUN	_	Animacy=Anim|Case=Erg|Definite=Def|Number=Sing	3	nsubj	_	Gloss=bull
2	saihetsa	saihets	NOUN	_	Animacy=Inan|Case=Abs|Definite=Def|Number=Sing	3	obj	_	Gloss=rib
3	pitzatu	pitzatu	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	Gloss=cracked
4	zidan	*edun	AUX	_	Mood=Ind|Number[abs]=Sing|Number[dat]=Sing|Number[erg]=Sing|Person[abs]=3|Person[dat]=1|Person[erg]=3|VerbForm=Fin	3	aux	_	Gloss=has-to-me|SpaceAfter=No
5	.	.	PUNCT	_	_	3	punct	_	Gloss=.

~~~

Basque does not have a canonical passive construction, although there are
constructions that have been called passive by some authors.

<span style="color:red">It is not clear whether and why one of the core
arguments should be analyzed as indirect object in ditransitive clauses.
Nevertheless, the current data (UD 2.1) use `iobj` for the dative
argument.</span>

* _(Nik) (zuri) liburua eman dizut._ “I have given you a book.”

~~~ conllu
# text = Nik zuri liburua eman dizut.
# text_en = I have given you a book.
1	Nik	ni	PRON	_	Case=Erg|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	Gloss=I
2	zuri	zu	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs	4	iobj	_	Gloss=you
3	liburua	liburu	NOUN	_	Animacy=Inan|Case=Abs|Definite=Def|Number=Sing	4	obj	_	Gloss=book
4	eman	eman	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	Gloss=given
5	dizut	*edun	AUX	_	Mood=Ind|Number[abs]=Sing|Number[dat]=Sing|Number[erg]=Sing|Person[abs]=3|Person[dat]=2|Person[erg]=1|VerbForm=Fin	4	aux	_	Gloss=have|SpaceAfter=No
6	.	.	PUNCT	_	_	4	punct	_	Gloss=.

~~~



## Can Adjectives Have Core Arguments?

Under certain circumstances, yes.
One possibility is that the adjective is used as a non-verbal predicate, possibly
with a copula. Then it usually has a subject child ([nsubj](/u/dep/nsubj.html) or
[csubj](/u/dep/csubj.html)).

[en] _Mary has been very kind to us._

~~~ conllu
# text = Mary has been very kind to us.
1	Mary	Mary	PROPN	_	Number=Sing	5	nsubj	_	_
2	has	have	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
3	been	be	AUX	_	Tense=Past|VerbForm=Part	5	cop	_	_
4	very	very	ADV	_	_	5	advmod	_	_
5	kind	kind	ADJ	_	_	0	root	_	_
6	to	to	ADP	_	_	7	case	_	_
7	us	we	PRON	_	Case=Acc|Number=Plur|Person=1|PronType=Prs	5	obl	_	SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	_	_

~~~

[Participles](/u/feat/VerbForm.html#Part)
may be tagged as either [verbs](/u/pos/VERB.html) or [adjectives](/u/pos/ADJ.html).
In both cases they retain certain features that are normally associated with
verbs. If a participle is derived from a transitive verb and tagged `ADJ`,
we have an adjective with [object](/u/dep/obj.html):

[cs] _Řidič opravující auto musí mít reflexní vestu._
“A driver repairing a car must wear a reflective vest.”

~~~ conllu
# text = Řidič opravující auto musí mít reflexní vestu.
# text_en = A driver repairing a car must wear a reflective vest.
1	Řidič	řidič	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	Gloss=driver
2	opravující	opravující	ADJ	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	1	amod	_	Gloss=repairing
3	auto	auto	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	2	obj	_	Gloss=car
4	musí	muset	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=must
5	mít	mít	VERB	_	VerbForm=Inf	4	xcomp	_	Gloss=have
6	reflexní	reflexní	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	7	amod	_	Gloss=reflective
7	vestu	vesta	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	5	obj	_	Gloss=vest|SpaceAfter=No
8	.	.	PUNCT	_	_	4	punct	_	Gloss=.

~~~

It is unusual for a non-participial adjective to have a core object. One English
example is _worth_, as in

[en] _It is worth $10._

~~~ conllu
# text = It is worth $10.
1	It	it	PRON	_	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	is	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	worth	worth	ADJ	_	_	0	root	_	_
4	$	$	SYM	_	_	3	obj	_	SpaceAfter=No
5	10	10	NUM	_	_	4	nummod	_	SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	_

~~~

(At least this analysis occurs in UD English EWT 2.2. The putative object resembles
objects of verbs in that it is obligatory and it is a bare nominal, without
a preposition. However, it is still not treated as an object of a verb, and
the clause is not transitive. There is no passivization pattern that would promote
the object _($10)_ to the subject position, and remove the original subject _(it)._)

Attributively used adjectives (regardless whether they are participles or not)
do not have subjects.

Related issues:

* [#308 Tough adjectives](https://github.com/UniversalDependencies/docs/issues/308)



## Can Adverbs Have Core Arguments?

Under certain circumstances, yes.
One possibility is that the adverb is used as a non-verbal predicate (typically indicating a location), possibly
with a copula. Then it usually has a subject child ([nsubj](/u/dep/nsubj.html) or
[csubj](/u/dep/csubj.html)).

[en] _We can be outside._

~~~ conllu
# text = We can be outside.
1	We	we	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	4	nsubj	_	_
2	can	can	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	aux	_	_
3	be	be	AUX	_	VerbForm=Inf	4	cop	_	_
4	outside	outside	ADV	_	_	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~

[Converbs](/u/feat/VerbForm.html#Conv)
may be tagged as either [verbs](/u/pos/VERB.html) or [adverbs](/u/pos/ADV.html).
In both cases they retain certain features that are normally associated with
verbs. If a converb is derived from a transitive verb and tagged `ADV`,
we have an adverb with [object](/u/dep/obj.html).

Being non-finite forms, converbs do not have subjects.

There are currently no examples of adverbs that are not converbs and have objects.



## Can Nouns Have Core Arguments?

No, with one exception.
The noun may be used as a non-verbal predicate, possibly
with a copula. Then it usually has a subject child ([nsubj](/u/dep/nsubj.html) or
[csubj](/u/dep/csubj.html)).

[en] _John is a teacher._

~~~ conllu
# text = John is a teacher.
1	John	John	PROPN	_	Number=Sing	4	nsubj	_	_
2	is	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	a	a	DET	_	Definite=Ind|PronType=Art	4	det	_	_
4	teacher	teacher	NOUN	_	Number=Sing	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~

In this case, the subject _John_ is not part of the same nominal phrase as _teacher_.
It is the subject of the entire clause, whose predicate is _teacher_.

UD makes a clear distinction between modifiers of a nominal on one side,
and everything else on the other side. Even [verbal nouns](/u/feat/VerbForm.html#Vnoun),
if they are tagged `NOUN` and not `VERB`, must have their modifiers attached via
relations reserved for modifiers of nouns.

For example, in [en] _to take action_, _action_ is an object of _to take_ (`obj(take, action)`).
If the phrase is nominalized, the coding of the argument becomes oblique (requiring the
preposition _of_) but the relation is neither `obj` nor `obl`; it is `nmod`:

[en] _Taking of any action is prohibited._

~~~ conllu
# text = Taking of any action is prohibited.
1	Taking	taking	NOUN	_	Number=Sing|VerbForm=Vnoun	6	nsubj:pass	_	_
2	of	of	ADP	_	_	4	case	_	_
3	any	any	DET	_	PronType=Ind	4	det	_	_
4	action	action	NOUN	_	Number=Sing	1	nmod	_	_
5	is	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux:pass	_	_
6	prohibited	prohibit	VERB	_	Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~



## Clausal Complements

So far we were dealing with nominal arguments. But sometimes an argument is realized
as a clause. If it occurs in subject position, it is labeled as [clausal subject](/u/dep/csubj.html).

<span style='color:red'>TO DO: What does “subject position” mean in free word order languages?
What other subject properties can be tested with clauses?</span>

Otherwise it may be a [clausal complement](/u/dep/ccomp.html).
Unfortunately, the term is somewhat misleading. UD does not distinguish arguments from adjuncts
(in other words, complements from modifiers), at least not at the universal level.
What it does distinguish is core arguments from oblique arguments + adjuncts.
It is thus not sufficient that the clause fills a slot defined by the valency of the matrix verb,
i.e., that it is in some sense obligatory. We must require more. We must require that the clause
corresponds to a core argument, that is, `obj` (or `iobj`, at least in theory).
If it corresponds only to an oblique
argument (or an adjunct), it should be labeled as [adverbial clause](/u/dep/advcl.html).
Consequently, clausal complements can depend on verbs but not on adjectives or adverbs
because the latter two normally do not have core objects.
If an adjective or adverb is modified by a clause, that clause must be `advcl`.
Even if it fills an obligatory slot in the adjective/adverb's valency frame.
(Analogically, if a clause complements a noun, it must be labeled as [adnominal clause](/u/dep/acl.html).)

Even clauses that alternate with direct nominal objects (and thus are labeled `ccomp`)
often do not work the same way as their nominal counterparts. For instance, English
direct objects can be passivized, as in:

* _Tell me the secret._
* _The secret will be told (to me)._
* _I will be told the secret._

However, a clausal complement of the same verb does not passivize the same way.
It needs an expletive subject instead:

* _Tell me that you will come._
* _It will be told (to me) that you will come._
* _I will be told that you will come._

Note that UD does not distinguish direct and indirect clausal complements.
At present it is assumed that `ccomp` alternates with `obj` (direct object).

<span style='color:red'>TO DO: Find Polish LFG examples where there are two ccomps in one sentence, one corresponding to obj and the other to iobj.</span>
