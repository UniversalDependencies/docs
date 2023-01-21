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

When a clause contains two non-subject core arguments, it is sometimes
possible to say that one of them is “direct” and the other “indirect”;
then the direct object will be labeled [obj]() and the indirect [iobj]().
Criteria for the distinction are language-specific. On the “coreness scale”,
the direct object is considered more “core-like” than the indirect one,
therefore one language-specific criterion might be that in the passive voice,
the direct object is promoted as the new subject, while the indirect object
does not change. Another possible criterion is that the role expressed by
the indirect object can be alternatively encoded as an oblique argument,
while such an option is not available for the direct object.
The right to use the [obj]() label is not bound to one of the two semantic
roles; in some languages, the theme will be the direct object and the
recipient will be indirect, but in other languages the opposite will hold,
or none of the two objects will be clearly indirect.

If it cannot be established that one object is superior to the other, both
will be labeled [obj]().

* [Coding strategies](#coding-strategies)
  * [English](#english)
  * [French](#french)
  * [Spanish](#spanish)
  * [Czech](#czech)
  * [Basque](#basque)
  * [Tagalog](#tagalog)
  * [Plains Cree](#plains-cree)
* [Summary of relations](#summary-of-relations)



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
to semantic roles but it is not so easy to provide supporting evidence that
is based on syntax. The passivization criterion actually slightly prefers
the recipient to be considered direct.
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

On the other hand, the recipient can alternatively be expressed as an
oblique argument, at least for the verb _to give:
Peter gave a book to Kate._
For the theme, no alternative is available, it has to be encoded as a bare
noun phrase (accusative in case of pronouns), which makes it closer to the
patient in a primary transitive clause.
The evidence thus seems to be conflicting and indecisive. However, in the
interest of not causing unnecessary confusion by using the terminology
opposite to the traditional grammar, recipients are labeled as indirect
objects in English.

~~~ conllu
# text = Peter gave Kate a book.
1	Peter	Peter	PROPN	_	Number=Sing	2	nsubj	_	_
2	gave	give	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	Kate	Kate	PROPN	_	Number=Sing	2	iobj	_	_
4	a	a	DET	_	Definite=Ind|PronType=Art	5	det	_	_
5	book	book	NOUN	_	Number=Sing	2	obj	_	SpaceAfter=No
6	.	.	PUNCT	_	_	2	punct	_	_

~~~

~~~ conllu
# text = Kate was given a book by Peter.
1	Kate	Kate	PROPN	_	Number=Sing	3	nsubj:pass	_	_
2	was	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
3	given	give	VERB	_	Tense=Past|VerbForm=Part	0	root	_	_
4	a	a	DET	_	Definite=Ind|PronType=Art	5	det	_	_
5	book	book	NOUN	_	Number=Sing	3	obj	_	_
6	by	by	ADP	_	_	7	case	_	_
7	Peter	Peter	PROPN	_	Number=Sing	3	obl:agent	_	SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	_

~~~

<!-- span style="color: blue"><b>Joakim:</b> I don't think this is specified by the v2 guidelines.
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

<span style="color:green"><b>Dan:</b> A tentative solution for UD v2 (where we
can neither ban `iobj` nor rename it): Allow more flexibility for language-specific
documentation to decide whether there is an indirect object. Require though
that the language-specific rules are supported by solid argumentation that
does not clash with the spirit of UD. Rephrase the definition of [iobj]() so
that it does not automatically entail the least core-like argument that is
still not oblique (even now the guidelines do not say this explicitly, but it
follows from the definitions of [obj]() and [iobj](). That way English can
keep its `iobj` for recipients in UD v2, and users will not be confused by
the label appearing at the opposite of what has been traditionally understood
as indirect object. In other languages, different criteria may apply, or it
may be even possible to have two `obj` under one verb. And for UD v3, we may
decide that the English-like `iobj` becomes language-specific subtype,
referring directly to the semantic role, i.e., `obj:rcpt`.</span -->



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
pronoun or a noun. This alone could be used as an argument for saying that _lui_ is
the indirect object ([iobj]()) and _un livre_ is the direct object ([obj]()).
Another argument is that only the direct object can be promoted to subject in
a passive construction:

* _Un livre lui a été donné._ “A book was given to her.” _(*Elle a été donnée un livre.)_

Note that a nominative-accusative-dative construction can be used also in
situations where the dative argument is better described as beneficiary rather
than recipient. If the beneficiary is expressed as a dative pronoun (that is,
a core argument), it is still labeled `iobj`:
<!-- But the same holds in German and Czech, where we have ruled that dative
is not core. Yet in those languages the situation is more complex, the case
applies also for nouns, and there are other cases that behave the same way,
genitives, instrumentals and even prepositional phrases, so there it would not
be possible to draw the line anywhere else. -->

* _Il leur achète des livres._ “He buys books for them.”

~~~ conllu
# text = Il leur achète des livres.
# text_en = He buys books for them.
1	Il	il	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	Gloss=he
2	leur	lui	PRON	_	Case=Dat|Number=Plur|Person=3|PronType=Prs	3	iobj	_	Gloss=them
3	achète	acheter	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=buys
4	des	des	DET	_	Definite=Ind|Number=Plur|PronType=Art	5	det	_	Gloss=some
5	livres	livre	NOUN	_	Gender=Masc|Number=Plur	3	obj	_	Gloss=books|SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	Gloss=.

~~~

Finally, it is possible that the dative pronoun (representing an oblique noun
phrase) occurs with a verb that takes just two core arguments, e.g., _parler_
“to speak”. The dative argument behaves here like an indirect object in a
ditransitive clause: it is not promoted to subject in passive constructions.
Therefore it is also labeled `iobj`, although normally a monotransitive
clause would have a `nsubj` and a direct `obj`.
<!-- again, the same happens in German and Czech, except that there are
other possibilities that make it more complex -->

* _Je lui parle. (Je parle à Pierre.)_ “I speak to him. (I speak to Pierre.)”

~~~ conllu
# text = Je lui parle.
# text_en = I speak to him.
1	Je	je	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	Gloss=I
2	lui	lui	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	3	iobj	_	Gloss=him
3	parle	parler	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=speak|SpaceAfter=No
4	.	.	PUNCT	_	_	3	punct	_	Gloss=.

~~~



<!---------------------------------------------------------------------------->

### Spanish

In Spanish, like in French, a recipient realized as a noun must take a
preposition _(a)_ but it can be substituted by a dative pronoun (_le, les,_
both genders), which appears without the preposition.
However, the situation in Spanish is different in two aspects:

* Since the preposition _a_ is also used to encode animate direct objects, one could
  argue that it is one of the core coding methods, and thus the recipient
  should not be considered oblique if it appears with this preposition.
* Clitic doubling – both the pronoun and the prepositional phrase can occur in
  the same clause.

In fact, the appearance of the preposition _a_ in direct objects is rather
exceptional both in Spanish and in the broader context of Romance languages.
The preposition is not used with inanimate direct objects, and it is used
frequently with various types of adjuncts. Therefore we do not infer that
prepositional phrases denoting recipients are core arguments. We treat them
as oblique arguments, as in French and other related languages. Also in
parallel with these languages, we reserve the [iobj]() label for the dative
pronouns _le, les._

<span style="color:red">TBD: Now we have a new problem with clitic doubling.
Previously, if there were both the pronoun and the _a_-phrase, we would make
the _a_-phrase `iobj` and the pronoun [expl](). But now the pronoun is core
and the _a_-phrase is oblique. Shouldn't then the pronoun have higher priority
and receive `iobj`? If so, what should be the _a_-phrase then?
`Dislocated`?</span>

* _Pedro dio un libro a Isabel._ “Pedro gave Isabel a book.”
* _Pedro le dio un libro a Isabel._ “Pedro gave Isabel a book.”
* _Pedro le dio un libro._ “Pedro gave her a book.”
* _Santiago me enseña las matemáticas._ “Santiago teaches me mathematics.”

It is not uncommon that both the noun phrase and the
clitic are present, as in _Pedro <b>le</b> dio un libro <b>a Isabel</b>._
(this is known as “clitic doubling”).

~~~ conllu
# text = Pedro dio un libro a Isabel.
# text_en = Pedro gave Isabel a book.
1	Pedro	Pedro	PROPN	_	Gender=Masc|Number=Sing	2	nsubj	_	Gloss=Pedro
2	dio	dar	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	Gloss=gave
3	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	det	_	Gloss=a
4	libro	libro	NOUN	_	Gender=Masc|Number=Sing	2	obj	_	Gloss=book
5	a	a	ADP	_	_	6	case	_	Gloss=to
6	Isabel	Isabel	PROPN	_	Gender=Fem|Number=Sing	2	obl:arg	_	Gloss=Isabel|SpaceAfter=No
7	.	.	PUNCT	_	_	2	punct	_	Gloss=.

~~~

~~~ conllu
# text = Pedro le dio un libro a Isabel.
# text_en = Pedro gave Isabel a book.
1	Pedro	Pedro	PROPN	_	Gender=Masc|Number=Sing	3	nsubj	_	Gloss=Pedro
2	le	él	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	3	expl	_	Gloss=her
3	dio	dar	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	Gloss=gave
4	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	5	det	_	Gloss=a
5	libro	libro	NOUN	_	Gender=Masc|Number=Sing	3	obj	_	Gloss=book
6	a	a	ADP	_	_	7	case	_	Gloss=to
7	Isabel	Isabel	PROPN	_	Gender=Fem|Number=Sing	3	obl:arg	_	Gloss=Isabel|SpaceAfter=No
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

There is no doubt that the dative argument is the one that should be labeled
as indirect. First, it is optional because it can be substituted by a
prepositional phrase and the clause then becomes monotransitive. Second,
if the clause is passivized, the direct object is promoted
to the subject relation, while the indirect object stays untouched.
Hence the indirect object is less core than the direct object.

* _Un libro fue dado a Isabel por Pedro._ “A book was given to Isabel by Pedro.”
* _Un libro le fue dado por Pedro._ “A book was given her by Pedro.”

~~~ conllu
# text = Un libro le fue dado por Pedro.
# text_en = A book was given her by Pedro.
1	Un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	2	det	_	Gloss=a
2	libro	libro	NOUN	_	Gender=Masc|Number=Sing	5	nsubj:pass	_	Gloss=book
3	le	él	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	5	iobj	_	Gloss=her
4	fue	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	aux:pass	_	Gloss=was
5	dado	dar	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	Gloss=given
6	por	por	ADP	_	_	7	case	_	Gloss=by
7	Pedro	Pedro	PROPN	_	Gender=Masc|Number=Sing	5	obl:agent	_	Gloss=Pedro|SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	_	Gloss=.

~~~

Similarly to French, the dative pronoun can occur with verbs that only license
one argument, such as _hablar_ “to speak”.
<span style="color:red">We could rule that the dative pronoun be labeled
`iobj` even in these cases, as we did in French. However, the corresponding
noun phrase in French would be oblique. In Spanish, it is a normal direct
object (provided that it is animate) because the preposition _a_ is allowed
with animate direct objects in Spanish:</span>

* [fr] _Je lui parle. (Je parle à Pierre.)_ “I speak to him. (I speak to Pierre.)”
* [es] _Le hablo. (Hablo a Pedro.)_ “I speak to him. (I speak to Pedro.)”

<span style="color:red">Either this is fine with us, but then we perhaps also
want to treat these datives as direct objects if they are pronouns or if the
language is French. Or we say that if the _a_-phrase alternates with a dative
pronoun, it is oblique.
Or maybe we want to say that dative arguments are core arguments neither in
Spanish, nor in French. This would also save us the necessity to explain why
they are not core in German and Czech.</span>



<!---------------------------------------------------------------------------->

### Czech

In Czech (as well as in other Slavic languages and also in German), the giving
verb takes two arguments, one in the accusative (corresponding to the patient
or theme), and one in the dative (corresponding to the recipient). Both are
considered objects in the traditional grammar; however, since the dative is
not a core case in these languages, it must be labeled [obl]() or [obl:arg](),
and the clause is not ditransitive.

(There are also three-argument verbs where none of the two non-subject
arguments is accusative. For example, in
_Muž vyhrožoval sousedovi smrtí._ “A man threatened his neighbor with death.”
one of the arguments is dative and the other is instrumental.
Neither dative nor instrumental is a core case, hence the clause is
intransitive with two oblique arguments.)

There is no difference between nouns and
pronouns (except for word order, which is restricted for pronouns that are
clitics, but does not play a role in core argument coding).

* _Petr dal Katce knihu._ “Petr gave Katka a book.”
* _Petr jí dal knihu._ “Petr gave her a book.”

~~~ conllu
# text = Petr dal Katce knihu.
# text_en = Petr gave Katka a book.
1	Petr	Petr	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	2	nsubj	_	Gloss=Petr
2	dal	dát	VERB	_	Animacy=Anim|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	_	Gloss=gave
3	Katce	Katka	PROPN	_	Case=Dat|Gender=Fem|Number=Sing|Polarity=Pos	2	obl:arg	_	Gloss=to-Katka
4	knihu	kniha	NOUN	_	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	2	obj	_	Gloss=book|SpaceAfter=No
5	.	.	PUNCT	_	_	2	punct	_	Gloss=.

~~~

The only Czech verb that is capable of forming ditransitive clauses under the
UD definition is _učit_ “to teach”, which takes two accusative objects.

* _Tomáš mě učí matematiku._ “Tomáš teaches me mathematics.”

One object
represents the theme (mathematics) and the other the recipient (me). Either
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

In Tagalog, the verbs of giving form a standard transitive clause in the agent
and patient voices, as the recipient is coded as a directional (locative)
oblique dependent.

* _Nagbigay ang lalaki ng libro sa babae._ “The man gave a book to the woman.” (agent voice)

~~~ conllu
# text = Nagbigay ang lalaki ng libro sa babae.
# text_en = The man gave a book to the woman.
1	Nagbigay	bigay	VERB	_	Aspect=Perf|Mood=Ind|VerbForm=Fin|Voice=Act	0	root	_	Gloss=gave
2	ang	ang	ADP	_	Case=Nom	3	case	_	Gloss=the
3	lalaki	lalaki	NOUN	_	_	1	nsubj	_	Gloss=man
4	ng	ng	ADP	_	Case=Gen	5	case	_	_
5	libro	libro	NOUN	_	_	1	obj	_	Gloss=book
6	sa	sa	ADP	_	Case=Dat	7	case	_	Gloss=DIR
7	babae	babae	NOUN	_	_	1	obl	_	Gloss=woman|SpaceAfter=No
8	.	.	PUNCT	_	_	1	punct	_	Gloss=.

~~~

<!-- Locative voice? Binigyan ng lalaki ng libro ang babae. -->

However, locative dependents can be topicalized if the verb morphology signals
the “locative voice”. Then the locative noun phrase switches to nominative,
it becomes a core argument, while the original two core arguments keep core
coding, too. Therefore we have a ditransitive clause with three core arguments,
even for verbs that are not associated with ditransitives in other languages:

* _Aalisan ng babae ng bigas ang sako para sa bata._ “A/the woman will take some rice out of the sack for a/the child.” (locative voice)

~~~ conllu
# sent_id = 3.111c/tl
# text = Aalisan ng babae ng bigas ang sako para sa bata.
# gloss = FUT-take.out-DP ACT woman OBJ rice PIV sack BEN child
# text_en = A/the woman will take some rice out of the sack for a/the child.
# DP = directional pivot; PIV = pivot marker
1	Aalisan	alis	VERB	_	Aspect=Prog|Mood=Ind|VerbForm=Fin|Voice=Lfoc	0	root	_	Gloss=will-take-out|MSeg=a-alis-an|MGloss=FUT-take.out-DP
2	ng	ng	ADP	_	Case=Gen	3	case	_	_
3	babae	babae	NOUN	_	_	1	iobj:agent	_	Gloss=woman
4	ng	ng	ADP	_	Case=Gen	5	case	_	_
5	bigas	bigas	NOUN	_	_	1	obj:patient	_	Gloss=rice
6	ang	ang	ADP	_	Case=Nom	7	case	_	Gloss=the
7	sako	sako	NOUN	_	_	1	nsubj:loc	_	Gloss=sack
8	para	para	ADP	_	_	10	case	_	Gloss=for
9	sa	sa	ADP	_	Case=Dat	10	case	_	Gloss=BEN
10	bata	bata	NOUN	_	_	1	obl	_	Gloss=child|SpaceAfter=No
11	.	.	PUNCT	_	_	1	punct	_	Gloss=.

~~~



<!---------------------------------------------------------------------------->

### Plains Cree

See also:

* Arok Elessar Wolvengrey (2011):
  [Semantic and pragmatic functions in Plains Cree syntax](https://dare.uva.nl/search?identifier=153f3405-f029-4046-8d95-9f2a087b4123)
  (PhD thesis). Utrecht: LOT. ISBN 978-94-6093-051-5.

Plains Cree cross-references at most two core arguments on the verb.
It also has a locative case affix that marks a noun phrase as oblique.
If there is a verb which takes three arguments, the third argument is neither
cross-referenced, nor marked by the locative case. It is therefore less core
than the first two arguments, but more core than ordinary adjuncts.
If we accept it as core, it will be labeled [iobj](), the least core-like
argument.

Unlike in some European languages, in Plains Cree it is always the
recipient-like argument that is more important and cross-referenced, while the
theme stays outside. Hence the recipient (goal)
is more core than the theme, and deserves to be labeled [obj]().

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
