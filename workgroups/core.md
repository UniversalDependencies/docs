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

* _John has a new car. (*New car is had by John.)_
* _Friday does not suit me. (*I am not suited by Friday.)_

Therefore, durational temporal adjuncts have to be stated as an exception,
and this is the one case where the argument/adjunct distinction cannot be
avoided in UD.

~~~ conllu
# text = He works the whole week.
1	He	he	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	works	work	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	the	the	DET	_	Definite=Def|PronType=Art	5	det	_	_
4	whole	whole	ADJ	_	_	5	amod	_	_
5	week	week	NOUN	_	Number=Sing	2	obl:tmod	_	SpaceAfter=No
6	.	.	PUNCT	_	_	2	punct	_	_

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
