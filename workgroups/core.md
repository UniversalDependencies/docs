---
layout: base
title:  'Working Group on Core and Oblique Arguments and Adjuncts'
udver: '2'
---

# Working Group on Core and Oblique Arguments and Adjuncts

Most of this chapter focuses on dependents of [verbs](/u/pos/VERB.html).
Some similar patterns of other parts of speech are discussed [at the end of the chapter](#can-adjectives-have-core-arguments).

Most of this chapter assumes that the dependents are [nominal](/u/pos/NOUN.html) phrases.
Dependents realized as clauses are discussed [at the end of the chapter](#clausal-complements).

* [Core vs. oblique](#core-arguments-vs-oblique-modifiers)
  * [The definition of core arguments](#the-definition-of-core-arguments)
  * [Avoiding an argument/adjunct distinction](#avoiding-an-argumentadjunct-distinction)
* [Coding strategies](#coding-strategies)
  * [English](#english)
  * [Spanish](#spanish)
  * [Czech](#czech)
  * [Basque](#basque)
  * [Yidiɲ](#yidiɲ)
  * [Tagalog](#tagalog)
  * [Plains Cree](#plains-cree)
* [Can adjectives have core arguments?](#can-adjectives-have-core-arguments)
* [Can adverbs have core arguments?](#can-adverbs-have-core-arguments)
* [Can nouns have core arguments?](#can-nouns-have-core-arguments)
* [Clausal complements](#clausal-complements)
* [Summary of relations](#summary-of-relations)

## Core Arguments vs. Oblique Modifiers

The UD taxonomy is centered around the fairly clear distinction between
core arguments (primarily subjects and objects) and other dependents.
It does not make a distinction between adjuncts (general modifiers) and
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

<span style="color: blue"><b>Joakim:</b> I think word order tests can 
be used to distinguish these two cases (instead of appealing to the arg/adj distinction):
	
* _John worked the whole week in Paris. John worked in Paris the whole week._
* _John spent the whole week in Paris. *John spent in Paris the whole week._
</span>

<span style="color: green"><b>Dan:</b> In English, yes. But the same adjunct appears in Spanish and Czech too.</span>

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

<span style="color: blue"><b>Joakim:</b> I don't think this is specified by the v2 guidelines.
I tried to argue for it on GitHub, based on syntactic criteria, but people pushed back saying that 
it is convenient for NLP applications to have the same relation for the recipient role in both cases.
This needs to be resolved.</span>

<span style="color:red">TO DO: How do we explain that an oblique nominal is
annotated as subject in subordinate infinitival clause, as in
_It was impossible <b>for him</b> to attend the meeting._
Some authors (I do not remember where exactly I saw it) say that it is quite
common that core arguments are coded differently in subordinate clauses.
But can we prove that the _for_-phrase is indeed a subject?
It is not sufficient to say that it has the same semantic role as the corresponding
bare nominal in a main finite clause. If it was sufficient, then the _by_-phrases
in passive clauses would be subjects too!</span>

<span style="color:blue"><b>Joakim:</b> We definitely need to allow different coding 
in subordinate clauses. That is the rule in languages like Latin and Turkish. But I 
think we should save this for the section on subordinate clauses.</span>


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

<span style="color: blue"><b>Joakim:</b> Why do we treat the recipient as core in Spanish but not in English when they both have prepositions? Is this because prepositions are found with direct objects in Spanish but not in English? And what would we then do in French, where the recipient takes a prepositions but where prepositions are never used with prepositions? Same as English? It would also be possible (at least in French) to argue for a mixed system, where full noun phrases are oblique (because they take a preposition) but pronouns are core (because they have dative case).</span>

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

<span style="color: blue"><b>Joakim:</b> If benefactives and datives have the same encoding, perhaps
they should both be regarded as oblique (to facilitate annotation).</span>

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

There are verbs that take all three core arguments. In such constructions,
the ergative encodes the A function, absolutive the P function (also T function = theme-like),
and dative the G function (goal). In terms of dependency relations, it seems
reasonable to label the ergative as `nsubj`, absolutive as `obj` and dative
as `iobj` just to distinguish them and to acknowledge that absolutives and
ergatives are more frequent than datives; though the grammar does not seem to
target the absolutive argument in specific rules, which would make it
more core-like than the dative.

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
constructions that have been called passive by some authors in the past.

While the passive, if it existed, would decrease the valency of the verb,
there is another operation that increases the valency: the causative:

1. Active verb form is replaced by causative.
2. Former subject becomes dative object and denotes the causee.
3. A new ergative subject appears and denotes the causer.

Analogically to the passive, it is recommended that the relations with modified
interpretation (if overtly present) are labeled as subtypes:
the causer as [nsubj:caus](/fr/dep/nsubj-caus.html)
and the true agent as [iobj:agent](/fr/dep/iobj-agent.html).

* _(Guk) arazo hau ikusi genuen._ “We have seen this problem.” (active)
* _(Horiek) (guri) arazo hau ikuserazi digute._ “They have made us see this problem.” (causative)

~~~ conllu
# text = Guk arazo hau ikusi genuen.
# text_en = We have seen this problem.
1	Guk	gu	PRON	_	Case=Erg|Number=Plur|Person=1|PronType=Prs	4	nsubj	_	Gloss=we
2	arazo	arazo	NOUN	_	Animacy=Inan|Case=Abs|Definite=Ind|Number=Sing	4	obj	_	Gloss=problem
3	hau	hau	DET	_	Case=Abs|Definite=Def|Number=Sing|PronType=Dem	2	det	_	Gloss=this
4	ikusi	ikusi	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	Gloss=seen
5	genuen	*edun	AUX	_	Mood=Ind|Number[abs]=Sing|Number[erg]=Plur|Person[abs]=3|Person[erg]=1|VerbForm=Fin	4	aux	_	Gloss=have|SpaceAfter=No
6	.	.	PUNCT	_	_	4	punct	_	Gloss=.

~~~

~~~ conllu
# text = Horiek guri arazo hau ikuserazi digute.
# text_en = They have made us see this problem.
1	Horiek	horiek	DET	_	Case=Erg|Definite=Def|Number=Plur|PronType=Dem	5	nsubj:caus	_	Gloss=they
2	guri	gu	PRON	_	Case=Dat|Number=Plur|Person=1|PronType=Prs	5	iobj:agent	_	Gloss=us
3	arazo	arazo	NOUN	_	Animacy=Inan|Case=Abs|Definite=Ind|Number=Sing	5	obj	_	Gloss=problem
4	hau	hau	DET	_	Case=Abs|Definite=Def|Number=Sing|PronType=Dem	3	det	_	Gloss=this
5	ikuserazi	ikusi	VERB	_	Aspect=Perf|VerbForm=Part|Voice=Cau	0	root	_	Gloss=made-to-see
6	digute	*edun	AUX	_	Mood=Ind|Number[abs]=Sing|Number[dat]=Plur|Number[erg]=Plur|Person[abs]=3|Person[dat]=1|Person[erg]=3|VerbForm=Fin	5	aux	_	Gloss=have|SpaceAfter=No
7	.	.	PUNCT	_	_	5	punct	_	Gloss=.

~~~

<span style="color: blue"><b>Joakim:</b> I think it might be better to use "nsubj:caus" and "iobj:caus", indicating that these are arguments of a causative and therefore do not have the expected role but without specifying the role (cause and agent). This is more parallel with "nsubj:pass", where we just indicate that it is the subject of a passive and therefore has an unexpected role but without specifying what the role is. </span>

The fact that the causative
[is available](https://books.google.cz/books?id=nIaPL4kLt6cC&pg=PA599&lpg=PA599&dq=gustatzen+causative&source=bl&ots=LcI8u2JhcB&sig=LrbPxId629ESf0v70hw2EY73J70&hl=cs&sa=X&ved=2ahUKEwjFluOAwu_aAhWFDiwKHVbXCYkQ6AEwAXoECAAQMA#v=onepage&q=gustatzen%20causative&f=false)
for dative-absolutive verbs supports the
claim that the dative argument indeed is the subject in active voice of those
verbs.

* _Zopa izugarri gustatzen zaio mutilari._ “The boy likes the soup a lot.”
* _Goseak zopa hori izugarri gustatuerazi zion mutilari._ “Hunger made the boy like that soup a lot.”

~~~ conllu
# text = Zopa izugarri gustatzen zaio mutilari.
# text_en = The boy likes the soup a lot.
1	Zopa	zopa	NOUN	_	Animacy=Inan|Case=Abs|Definite=Def|Number=Sing	3	obj	_	Gloss=soup
2	izugarri	izugarri	ADV	_	_	3	advmod	_	Gloss=greatly
3	gustatzen	gustatzen	VERB	_	Aspect=Imp|VerbForm=Part	0	root	_	Gloss=pleasing
4	zaio	izan	AUX	_	Mood=Ind|Number[abs]=Sing|Number[dat]=Sing|Person[abs]=3|Person[dat]=3|VerbForm=Fin	3	aux	_	Gloss=is
5	mutilari	mutil	NOUN	_	Animacy=Anim|Case=Dat|Definite=Def|Number=Sing	3	nsubj	_	Gloss=to-the-boy|SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	Gloss=.

~~~

~~~ conllu
# text = Goseak zopa hori izugarri gustatuerazi zion mutilari.
# text_en = Hunger made the boy like that soup a lot.
1	Goseak	gose	NOUN	_	Animacy=Inan|Case=Erg|Definite=Def|Number=Sing	5	nsubj:caus	_	Gloss=hunger
2	zopa	zopa	NOUN	_	Animacy=Inan|Case=Abs|Definite=Def|Number=Sing	5	obj	_	Gloss=soup
3	hori	hori	DET	_	Case=Abs|Definite=Def|Number=Sing|PronType=Dem	2	det	_	Gloss=that
4	izugarri	izugarri	ADV	_	_	5	advmod	_	Gloss=greatly
5	gustatuerazi	gustatzen	VERB	_	Aspect=Imp|VerbForm=Part|Voice=Cau	0	root	_	Gloss=made-pleasing
6	zion	*edun	AUX	_	Mood=Ind|Number[abs]=Sing|Number[dat]=Sing|Number[erg]=Sing|Person[abs]=3|Person[dat]=3|Person[erg]=3|VerbForm=Fin	5	aux	_	Gloss=has
7	mutilari	mutil	NOUN	_	Animacy=Anim|Case=Dat|Definite=Def|Number=Sing	5	iobj:agent	_	Gloss=the-boy|SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	_	Gloss=.

~~~

Causative is only marginally accepted with ditransitive verbs, apparently due
to the marginal acceptance of two dative-marked arguments in the same clause.



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

There is a type of subordinate clause that is called dative subordinate (datsub)
because its head verb takes a subjunctive suffix similar to the dative suffix
of nouns. The clause may be analyzed as a relative clause dependent on a noun
phrase in the main clause. The coreferential noun phrase in the subordinate
clause may be elided.
There is a near requirement (with some exceptions) that the coreferential
nominal has S/P function in both clauses, i.e., it is the subject of an
intransitive predicate or the object of a transitive predicate:

* _Ŋayu maŋga:ɲ (ŋaɲaɲ) buɲa:n wuɹa:ɲunda._ “I, (who) was slapped by the woman, laughed.”
* _Ŋaɲaɲ buɲa:ŋ wuɹa:ɲ (ŋayu) maŋga:ɲunda._ “I, (who) was lauging, was slapped by the woman.”

~~~ conllu
# sent_id = 3.99aa/yii
# Yidiɲ (Pama-Nyungan, Australia)
# source = Dixon, 1977
# text = Ŋayu maŋga:ɲ ŋaɲaɲ buɲa:n wuɹa:ɲunda.
# gloss = I(NOM) laugh-PAST I-ACC woman-ERG slap-DATSUB
# text_en = I, who was slapped by the woman, laughed.
1	Ŋayu	ŋayu	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	Gloss=I|MGloss=I(NOM)
2	maŋga:ɲ	maŋgan	VERB	_	Tense=Past	0	root	_	Gloss=laughed|MSeg=maŋga:-ɲ|MGloss=laugh-PAST
3	ŋaɲaɲ	ŋayu	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	5	obj	_	Gloss=me|MGloss=I(ACC)
4	buɲa:ŋ	buɲa	NOUN	_	Case=Erg|Number=Sing	5	nsubj	_	Gloss=woman|MSeg=buɲa:-n|MGloss=woman-ERG
5	wuɹa:ɲunda	wuɹan	VERB	_	Mood=Sub	1	acl:datsub	_	Gloss=slapping|MSeg=wuɹa:-ɲunda|MGloss=slap-DATSUB|SpaceAfter=No
6	.	.	PUNCT	_	_	2	punct	_	Gloss=.

~~~
~~~ conllu
# sent_id = 3.99ba/yii
# Yidiɲ (Pama-Nyungan, Australia)
# source = Dixon, 1977
# text = Ŋaɲaɲ buɲa:ŋ wuɹa:ɲ ŋayu maŋga:ɲunda.
# gloss = I-ACC woman-ERG slap-PAST I(NOM) laugh-DATSUB
# text_en = I, who was laughing, was slapped by the woman.
1	Ŋaɲaɲ	ŋayu	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	3	obj	_	Gloss=me|MGloss=I(ACC)
2	buɲa:ŋ	buɲa	NOUN	_	Case=Erg|Number=Sing	3	nsubj	_	Gloss=woman|MSeg=buɲa:-ŋ|MGloss=woman-ERG
3	wuɹa:ɲ	wuɹan	VERB	_	Tense=Past	0	root	_	Gloss=slapped|MSeg=wuɹa-ɲ|MGloss=slap-PAST
4	ŋayu	ŋayu	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	Gloss=I|MGloss=I(NOM)
5	maŋga:ɲunda	maŋgan	VERB	_	Mood=Sub	1	acl:datsub	_	Gloss=laughing|MSeg=maŋga-ɲunda|MGloss=laugh-DATSUB|SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	Gloss=.

~~~

If we want to use this construction for a nominal with A function (i.e., the
subject of a transitive predicate) in either of the two clauses, we must first
transform the clause to antipassive, which means:

1. Active verb form is replaced by antipassive.
2. Former object is transformed to the dative or locative case and becomes oblique argument.
3. The subject is still subject, but now of an intransitive predicate. Its function changed from A to S.

Analogically to the passive, we may want to use a relation subtype for the
demoted object: [obl:patient]().

* _Waguɖaŋgu guda:ga wawa:l._ “The man saw the dog.” (active)
* _Wagu:ɖa gudaganda wawa:ɖiɲu._ “The man saw the dog.” (antipassive)

~~~ conllu
# sent_id = 3.100aa/yii
# Yidiɲ (Pama-Nyungan, Australia)
# source = Dixon, 1977
# text = Wagu:ɖa gudaganda wawa:ɖiɲu.
# gloss = man(ABS) dog-DAT see-ANTIPASS-PAST
# text_en = The man saw the dog.
1	Wagu:ɖa	wagu:ɖa	NOUN	_	Case=Abs|Number=Sing	3	nsubj	_	Gloss=man|MGloss=man(ABS)
2	gudaganda	guda:ga	NOUN	_	Case=Dat|Number=Sing	3	obl:patient	_	Gloss=dog|MSeg=gudaga-nda|MGloss=dog-DAT
3	wawa:ɖiɲu	wawal	VERB	_	Tense=Past|Voice=Antip	0	root	_	Gloss=saw|MSeg=wawa:-ɖi-ɲu|MGloss=see-ANTIPASS-PAST|SpaceAfter=No
4	.	.	PUNCT	_	_	3	punct	_	Gloss=.

~~~

* _Ŋayu buɲa wuɹa:ɲ._ “I slapped the woman.” (active)
* _Ŋayu buɲa:nda wuɹa:ɖiɲu._ “I slapped the woman.” (antipassive)

~~~ conllu
# sent_id = 3.100b/yii
# Yidiɲ (Pama-Nyungan, Australia)
# source = Dixon, 1977
# text = Ŋayu buɲa:nda wuɹa:ɖiɲu.
# gloss = I(NOM) woman-DAT slap-ANTIPASS-PAST
# text_en = I slapped the woman.
1	Ŋayu	ŋayu	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	Gloss=I|MGloss=I(NOM)
2	buɲa:nda	buɲa	NOUN	_	Case=Dat|Number=Sing	3	obl:patient	_	Gloss=woman|MSeg=buɲa:-nda|MGloss=woman-DAT
3	wuɹa:ɖiɲu	wuɹan	VERB	_	Tense=Past|Voice=Antip	0	root	_	Gloss=slapped|MSeg=wuɹa:-ɖi-ɲu|MGloss=slap-ANTIPASS-PAST|SpaceAfter=No
4	.	.	PUNCT	_	_	3	punct	_	Gloss=.

~~~

It is now possible to combine clauses so that the subject of an originally
transitive (now intransitive) predicate is coreferential:

* _Ŋayu maŋga:ɲ (ŋayu) buɲa:nda wuɹa:ɖiɲunda._ “I, (who) was slapping the woman, laughed.”

~~~ conllu
# sent_id = 3.101aa/yii
# Yidiɲ (Pama-Nyungan, Australia)
# source = Dixon, 1977
# text = Ŋayu maŋga:ɲ ŋayu buɲa:nda wuɹa:ɖiɲunda.
# gloss = I(NOM) laugh-PAST I(NOM) woman-DAT slap-ANTIPASS-DATSUB
# text_en = I, who was slapping the woman, laughed; I laughed while slapping the woman.
1	Ŋayu	ŋayu	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	Gloss=I|MGloss=I(NOM)
2	maŋga:ɲ	maŋgan	VERB	_	Tense=Past	0	root	_	Gloss=laughed|MSeg=maŋga:-ɲ|MGloss=laugh-PAST
3	ŋayu	ŋayu	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	Gloss=I|MGloss=I(NOM)
4	buɲa:nda	buɲa	NOUN	_	Case=Dat|Number=Sing	5	obl:patient	_	Gloss=woman|MSeg=buɲa:-nda|MGloss=woman-DAT
5	wuɹa:ɖiɲunda	wuɹan	VERB	_	Mood=Sub|Voice=Antip	1	acl:datsub	_	Gloss=slapped|MSeg=wuɹa:-ɖi-ɲunda|MGloss=slap-ANTIPASS-DATSUB|SpaceAfter=No
6	.	.	PUNCT	_	_	2	punct	_	Gloss=.

~~~

* _Ŋayu buɲa:nda wuɹa:ɖiɲu (ŋayu) maŋgaɲunda._ “I, (who) was laughing, slapped the woman.”

~~~ conllu
# sent_id = 3.101ba/yii
# Yidiɲ (Pama-Nyungan, Australia)
# source = Dixon, 1977
# text = Ŋayu buɲa:nda wuɹa:ɖiɲu ŋayu maŋgaɲunda.
# gloss = I(NOM) woman-DAT slap-ANTIPASS-PAST I(NOM) laugh-DATSUB
# text_en = I, who was laughing, slapped the woman; I slapped the woman while laughing.
1	Ŋayu	ŋayu	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	Gloss=I|MGloss=I(NOM)
2	buɲa:nda	buɲa	NOUN	_	Case=Dat|Number=Sing	3	obl:patient	_	Gloss=woman|MSeg=buɲa:-nda|MGloss=woman-DAT
3	wuɹa:ɖiɲu	wuɹan	VERB	_	Tense=Past|Voice=Antip	0	root	_	Gloss=slapped|MSeg=wuɹa:-ɖi-ɲu|MGloss=slap-ANTIPASS-PAST
4	ŋayu	ŋayu	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	Gloss=I|MGloss=I(NOM)
5	maŋgaɲunda	maŋgan	VERB	_	Mood=Sub	1	acl:datsub	_	Gloss=laughed|MSeg=maŋga-ɲunda|MGloss=laugh-DATSUB|SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	Gloss=.

~~~

Andrews notes that besides the relative clause analysis, these sentences can
be also interpreted adverbially. The core-oblique distinction and the antipassive
stay the same but the UD trees change:

* _Ŋayu maŋga:ɲ (ŋayu) buɲa:nda wuɹa:ɖiɲunda._ “I laughed while slapping the woman.”

~~~ conllu
# sent_id = 3.101aa/yii
# Yidiɲ (Pama-Nyungan, Australia)
# source = Dixon, 1977
# text = Ŋayu maŋga:ɲ ŋayu buɲa:nda wuɹa:ɖiɲunda.
# gloss = I(NOM) laugh-PAST I(NOM) woman-DAT slap-ANTIPASS-DATSUB
# text_en = I, who was slapping the woman, laughed; I laughed while slapping the woman.
1	Ŋayu	ŋayu	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	Gloss=I|MGloss=I(NOM)
2	maŋga:ɲ	maŋgan	VERB	_	Tense=Past	0	root	_	Gloss=laughed|MSeg=maŋga:-ɲ|MGloss=laugh-PAST
3	ŋayu	ŋayu	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	Gloss=I|MGloss=I(NOM)
4	buɲa:nda	buɲa	NOUN	_	Case=Dat|Number=Sing	5	obl:patient	_	Gloss=woman|MSeg=buɲa:-nda|MGloss=woman-DAT
5	wuɹa:ɖiɲunda	wuɹan	VERB	_	Mood=Sub|Voice=Antip	2	advcl:datsub	_	Gloss=slapped|MSeg=wuɹa:-ɖi-ɲunda|MGloss=slap-ANTIPASS-DATSUB|SpaceAfter=No
6	.	.	PUNCT	_	_	2	punct	_	Gloss=.

~~~

* _Ŋayu buɲa:nda wuɹa:ɖiɲu (ŋayu) maŋgaɲunda._ “I slapped the woman while laughing.”

~~~ conllu
# sent_id = 3.101ba/yii
# Yidiɲ (Pama-Nyungan, Australia)
# source = Dixon, 1977
# text = Ŋayu buɲa:nda wuɹa:ɖiɲu ŋayu maŋgaɲunda.
# gloss = I(NOM) woman-DAT slap-ANTIPASS-PAST I(NOM) laugh-DATSUB
# text_en = I, who was laughing, slapped the woman; I slapped the woman while laughing.
1	Ŋayu	ŋayu	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	Gloss=I|MGloss=I(NOM)
2	buɲa:nda	buɲa	NOUN	_	Case=Dat|Number=Sing	3	obl:patient	_	Gloss=woman|MSeg=buɲa:-nda|MGloss=woman-DAT
3	wuɹa:ɖiɲu	wuɹan	VERB	_	Tense=Past|Voice=Antip	0	root	_	Gloss=slapped|MSeg=wuɹa:-ɖi-ɲu|MGloss=slap-ANTIPASS-PAST
4	ŋayu	ŋayu	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	Gloss=I|MGloss=I(NOM)
5	maŋgaɲunda	maŋgan	VERB	_	Mood=Sub	3	advcl:datsub	_	Gloss=laughed|MSeg=maŋga-ɲunda|MGloss=laugh-DATSUB|SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	Gloss=.

~~~



### Tagalog

Tagalog is a representative of a subset of Austronesian languages that have
been described as symmetric-voice languages. There is an agent voice, where
the most core argument corresponds to the agent role, and a patient voice,
where the most core argument corresponds to the patient. It is tempting to
reuse our labels of active and passive for these voices. There are at least
two important differences from what these terms mean in Indo-European
languages, though. First, the two voices in Tagalog are more symmetric and it is
hard to say that the active is default, unmarked, and the passive is marked.
The passive is not morphologically more complex than the passive. Both the
agent and the patient regularly appear in both voices. They are coded
differently, but both are coded as core, not oblique arguments. Both
“active” and “passive” clauses thus can be transitive.

The second difference is that there are more voices than the agent-oriented and
the patient-oriented one. There is also a voice that fronts a locational
argument, for example.

The arguments are marked by function words that could be analyzed as either
prepositions, or case-bearing determiners. Although adpositions are often
associated with oblique arguments and adjuncts, we have seen that it is not
a universal rule. Spanish marks a human direct object with the preposition _a_;
Slavic and other languages have prepositional object that, despite not being
considered core in UD, seem to work the same way as other non-accusative
(but preposition-less, and currently core) arguments; and in Japanese, all
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
Tagalog has a subject at all. Nevertheless, there does not seem to be any
better solution than to simply identify it with the subject in UD.
<span style="color:red">EDIT: Further discussion is needed. Andrews cites
others and says (below examples 124) that both _ang_ and _ng_ arguments are
core, but the actor is more subject-like regardless of whether it is pivot or
not. That would mean that we should use the `nsubj` relation for the _ang_
argument of agent-voice verbs, the _ng_ argument of patient-voice verbs,
and we would have to select one of two _ng_ arguments in other voices,
depending on which argument semantically fits the agent role.</span>
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
nominative (pronoun or determiner) and the other in the accusative. We may
want to use relation subtypes for the arguments in the patient voice (similarly
to what we do in the English passive): [nsubj:pass]() for the subject and
[obj:agent]() (not `obl:agent`!) for the object. However, the subtypes should
not be taken to suggest that the agent voice is default and unmarked.

* _Naglilinis siya ng bahay._ “She cleans the house.” (agent voice)

~~~ conllu
# text = Naglilinis siya ng bahay.
# text_en = She cleans the house.
1	Naglilinis	linis	VERB	_	Aspect=Imp|Mood=Ind|VerbForm=Fin|Voice=Agf	0	root	_	Gloss=cleans
2	siya	siya	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	1	nsubj	_	Gloss=he/she
3	ng	ng	DET	_	Case=Acc|PronType=Art	4	det	_	Gloss=DET
4	bahay	bahay	NOUN	_	_	1	obj	_	Gloss=house|SpaceAfter=No
5	.	.	PUNCT	_	_	1	punct	_	Gloss=punct

~~~

* _Nililinis niya ang bahay._ “She cleans the house. / The house is cleaned by her.” (patient voice)

~~~ conllu
# text = Nililinis niya ang bahay.
# text_en = She cleans the house. / The house is cleaned by her.
1	Nililinis	linis	VERB	_	Aspect=Imp|Mood=Ind|VerbForm=Fin|Voice=Paf	0	root	_	Gloss=cleans
2	niya	siya	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	1	obj:agent	_	Gloss=he/she
3	ang	ang	DET	_	Case=Nom|Definite=Def|PronType=Art	4	det	_	Gloss=the
4	bahay	bahay	NOUN	_	_	1	nsubj:pass	_	Gloss=house|SpaceAfter=No
5	.	.	PUNCT	_	_	1	punct	_	Gloss=punct

~~~

Locative, directional and benefactive arguments are normally coded as oblique.
However, there are additional voices where these arguments become subjects.
One of the reasons why an argument is fronted as the subject is that the
subject is understood as the topic of the sentence. The _ang_ determiner
implies definiteness (while _ng_-marked arguments can be definite or
indefinite). Here is an example of a sentence in four different voices:

* _Magaalis ang babae ng bigas sa sako para sa bata._ “The woman will take some rice out of a/the sack for a/the child.” (agent voice)
* _Aalisin ng babae ang bigas sa sako para sa bata._ “A/the woman will take the rice out of a/the sack for a/the child.” (patient voice)
* _Aalisan ng babae ng bigas ang sako para sa bata._ “A/the woman will take some rice out of the sack for a/the child.” (locative voice)
* _Ipagaalis ng babae ng bigas sa sako ang bata._ “A/the woman will take some rice out of a/the sack for the child.” (benefactive voice)

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
# sent_id = 3.111b/tl
# text = Aalisin ng babae ang bigas sa sako para sa bata.
# gloss = FUT-take.out-OP ACT woman PIV rice DIR sack for BEN child
# text_en = A/the woman will take the rice out of a/the sack for a/the child.
# OP = object pivot; PIV = pivot marker
1	Aalisin	alis	VERB	_	Aspect=Prog|Mood=Ind|VerbForm=Fin|Voice=Paf	0	root	_	Gloss=will-take-out|MSeg=a-alis-in|MGloss=FUT-take.out-OP
2	ng	ng	DET	_	Case=Acc|PronType=Art	3	det	_	Gloss=DET
3	babae	babae	NOUN	_	_	1	obj:agent	_	Gloss=woman
4	ang	ang	DET	_	Case=Nom|Definite=Def|PronType=Art	5	det	_	Gloss=the
5	bigas	bigas	NOUN	_	_	1	nsubj:pass	_	Gloss=rice
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
~~~ conllu
# sent_id = 3.111d/tl
# text = Ipagaalis ng babae ng bigas sa sako ang bata.
# gloss = BP-FUT-take.out ACT woman OBJ rice DIR sack PIV child
# text_en = A/the woman will take some rice out of a/the sack for the child.
# BP = benefactive pivot; PIV = pivot marker
1	Ipagaalis	alis	VERB	_	Aspect=Prog|Mood=Ind|VerbForm=Fin|Voice=Benf	0	root	_	Gloss=will-take-out|MSeg=Ipag-a-alis|MGloss=BP-FUT-take.out
2	ng	ng	DET	_	Case=Acc|PronType=Art	3	det	_	Gloss=DET
3	babae	babae	NOUN	_	_	1	obj:agent	_	Gloss=woman
4	ng	ng	DET	_	Case=Acc|PronType=Art	5	det	_	Gloss=DET
5	bigas	bigas	NOUN	_	_	1	obj:patient	_	Gloss=rice
6	sa	sa	DET	_	Case=Loc|PronType=Art	7	det	_	Gloss=DIR
7	sako	sako	NOUN	_	_	1	obl	_	Gloss=sack
8	ang	ang	DET	_	Case=Nom|Definite=Def|PronType=Art	9	det	_	Gloss=the
9	bata	bata	NOUN	_	_	1	nsubj:ben	_	Gloss=child|SpaceAfter=No
10	.	.	PUNCT	_	_	1	punct	_	Gloss=.

~~~

Since the agent and patient stay core arguments even in the locative and
benefactive voices, we actually have a ditransitive clause with three core
arguments. In contrast, the verbs of giving, which are typical representatives
of ditransitive predicates in other languages, form a standard transitive
clause in the agent and patient voices, as the recipient is coded as a
directioal (locative) oblique dependent.

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

<!-- Locative voice? Binigyan ng lalaki ng libro ang babae. -->



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

In a parallel to the active-passive voice system of English, we can postulate
that the argument higher in the hierarchy is the subject (i.e., the most core
argument), and the lower argument is the object.
And like with English passives, the voice has to be considered when one wants
to map the grammatical relations to semantic roles.
In the two previous examples, the arguments are not overtly present and the
dependency relations are not visible. However, if there are overt arguments
in an inverse voice clause, we may again want to use relation subtypes to
signal that the default interpretation does not apply.
<span style="color:red">TBD: Should we use [nsubj:pass]() and [obj:agent]()
as in symmetric-voice languages? Or something else? Or should we even replace
`nsubj:pass` in other languages by something more neutral?
Alternatively, we could make the direct-inverse voice system special in that
we resolve the roles already in the relation labeling, i.e., higher-ranking
argument will be labeled `nsubj` in direct voice and `obj` in inverse voice,
and lower-ranking argument will be `obj` in direct voice and `nsubj` in
inverse voice. That is, if there are not some typical subject tests known
from other languages that will contradict our proposal.
At present I do not know anything about subjecthood tests applied to Plains
Cree.</span>

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
<span style="color: blue"><b>Joakim:</b> But I think similar cases are discussed 
with reference to UD in [this paper on Arapaho](http://www.aclweb.org/anthology/W16-1719).</span>
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

Ditransitive verbs (that is, verbs with three arguments) still cross-reference
only two arguments on the verb. It is always the recipient-like argument that
is cross-referenced, while the theme stays outside. Hence the recipient (goal)
is more core than the theme, and deserves to be labeled [obj](). The question
is whether the theme is still a core argument (and thus labeled [iobj]()) or
it is already oblique. Allowing it the core status seems to be at a similar
level of tolerance as with the non-accusative objects in languages like Czech.
The themes in Plains Cree are not indexed on the verb, though their own surface
form (bare nominal) is not different from the core arguments.

<!-- page 95 section 2.2.3.2 -->

* _Nikī-miyāw anima masinahikan._ “I gave him/her that book.” (direct voice)
* _Nikī-miyik anima masinahikan._ “He/she gave me that book.” (inverse voice)
* _Nikī-kiskinwahamawāw nēhiyawēwin._ “I taught him/her Cree.” (direct voice)
* _Nikī-kiskinwahamāk nēhiyawēwin._ “He/she taught me Cree.” (inverse voice)

~~~ conllu
# text = Nikī-miyāw anima masinahikan.
# text_en = I gave him/her that book.
1	Nikī-miyāw	miy	VERB	_	Animacy=Anim|Mood=Ind|Number[high]=Sing|Number[low]=Sing|Person[high]=1|Person[low]=3|Tense=Past|Voice=Dir	0	root	_	Gloss=I-gave-him/her|MSeg=ni-kī-miy-ā-w|MGloss=1-PAST-give.to-DIR-3SG
2	anima	anima	DET	_	Animacy=Inan|Number=Sing|PronType=Dem	3	det	_	Gloss=that|MGloss=DEM.0's
3	masinahikan	masinahikan	NOUN	_	Animacy=Inan|Number=Sing	1	iobj	_	Gloss=book|SpaceAfter=No
4	.	.	PUNCT	_	_	1	punct	_	Gloss=.

~~~

In the above example, the verb stem used is for animate objects, while
_masinahikan_ “book” is inanimate. That is a proof that the 3rd person singular
cross-reference on the verb does not refer to the book but to an animate
recipient that is not overtly represented in the sentence.

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



<!---------------------------------------------------------------------------->
<span style="color:red">TO DO: Discuss somewhere the layered features that are
needed when multiple arguments are cross-referenced by verbal morphology. Try
to standardize the layer names.</span>



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



## Summary of Relations

* [nsubj]() — nominal subject, corresponding to the S function in intransitive clauses and to the A function in transitive clauses.
  If some of the `nsubj` subtypes are used in the language, then the bare `nsubj` denotes the remaining situations not covered by the subtypes.
  * [nsubj:pass]() — nominal subject in a passive clause
  * [nsubj:caus]() — nominal subject in a causative clause
* [obj]() — nominal object, corresponding to the P function in transitive clauses.
* [iobj]() — nominal indirect object, one of two objects in ditransitive clauses, the one that is “less core-like” of the two.
  If the two objects are equal in there core-likelihood, none of them is `iobj`.
  If some of the `iobj` subtypes are used in the language, then the bare `iobj` denotes the remaining situations not covered by the subtypes.
  * [iobj:agent]() — true agent in a causative clause, if encoded as an indirect object.
* [obl]() — nominal oblique argument or adjunct.
  If some of the `obl` subtypes are used in the language, then the bare `obl` denotes the remaining situations not covered by the subtypes.
  * [obl:agent]() — true agent in a passive clause, demoted from active subject
  * [obl:arg]() — oblique argument other than `obl:agent`
  * [obl:tmod]() — temporal adjunct

<span style="color:red">TO DO: `ccomp`, `xcomp`</span>
