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

### French

In contrast to English, French can form a ditransitive clause only if the
recipient is realized as a pronominal clitic. If it is a full noun phrase,
its coding will be always oblique (which means, in French as in English, that
a preposition will be used):

* _Pierre a donné un livre à Isabelle._ “Pierre gave a book to Isabelle.”

~~~ conllu
# text = Pierre a donné un livre à Isabelle.
# text_en = Pierre gave a book to Isabelle.
1	Pierre	Pierre	PROPN	_	Gender=Masc|Number=Sing	3	nsubj	_	Gloss=Pierre
2	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux	_	Gloss=has
3	donné	donner	VERB	_	Tense=Past|VerbForm=Part	0	root	_	Gloss=given
4	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	5	det	_	Gloss=a
5	livre	livre	NOUN	_	Gender=Masc|Number=Sing	3	obj	_	Gloss=book
6	à	à	ADP	_	_	7	case	_	Gloss=to
7	Isabelle	Isabelle	PROPN	_	Gender=Fem|Number=Sing	3	obl	_	Gloss=Isabelle|SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	Gloss=.

~~~

However, the third argument will be coded as core argument if it is a personal
pronoun, thus forming a ditransitive clause:

* _Pierre lui a donné un livre._ “Pierre gave her a book.”

~~~ conllu
# text = Pierre lui a donné un livre.
# text_en = Pierre gave her a book.
1	Pierre	Pierre	PROPN	_	Gender=Masc|Number=Sing	4	nsubj	_	Gloss=Pierre
2	lui	lui	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	4	iobj	_	Gloss=him/her
3	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	Gloss=has
4	donné	donner	VERB	_	Tense=Past|VerbForm=Part	0	root	_	Gloss=given
5	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	Gloss=a
6	livre	livre	NOUN	_	Gender=Masc|Number=Sing	4	obj	_	Gloss=book|SpaceAfter=No
7	.	.	PUNCT	_	_	4	punct	_	Gloss=.

~~~

We have two different constructions depending on whether the recipient is a
pronoun or a noun. This alone could be an argument for saying that _lui_ is
the indirect object ([iobj]()) and _un livre_ is the direct object ([obj]()).
Another argument is that only the direct object can be promoted to subject in
a passive construction:

* _Un livre lui a été donné._ “A book was given to her.” _(*Elle a été donnée un livre.)_

<span style="color:red">Joakim, please check that the above is correct.</span>

<span style="color:red">TO DECIDE: French seems to be using the term
_indirect object_ also in clauses that are not ditransitive because there
is no other object: _Je lui parle. (Je parle à Pierre.)_
However, this seems to be the same problem as the dative in Czech and German
(the difference is that French does not have other cases and even the dative
is limited to pronouns).
In French the dative can also be used for benefactives, as in Czech and German:
_Il leur achète des livres._ “He buys books for them.”</span>



<!---------------------------------------------------------------------------->

### Spanish

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



<!---------------------------------------------------------------------------->

### Czech

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



<!---------------------------------------------------------------------------->

### Basque

See also:
Fernando Zúñiga, Beatriz Fernández (draft 26.6.2014):
[Grammatical relations in Basque](http://basdisyn.net/pdf/Zuniga%20&%20Fernandez%202014%20Basque%20GRs%20270614.pdf)

There are verbs that take all three cases that count as core in Basque:
the ergative, the absolutive and the dative. In such constructions,
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

Note that with some predicates the dative argument can be interpreted as having
the beneficiary role. Some authors may argue that this role is already behind
the dividing line between arguments and adjuncts, and if a nominal is an
adjunct, it cannot be a core argument. However, in Basque the dative argument
is cross-referenced by verbal inflection, hence it is clearly a core argument
despite its semantic role.



<!---------------------------------------------------------------------------->

### Tagalog

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

<!-- Locative voice? Binigyan ng lalaki ng libro ang babae. -->



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
