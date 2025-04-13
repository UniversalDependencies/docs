---
layout: relation
title: 'iobj'
shortdef: 'indirect object'
udver: '2'
---

| | WARNING |
|-----------|--------|
| ⚠️ | The traditional term "indirect object", associated with morphosyntactic encoding of certain types of arguments (especially datives/recipients) in a clause, has a wide range of interpretations across languages and linguistic frameworks. In UD, universal-level relations do not distinguish arguments and adjuncts; rather, the distinction is between [core arguments and oblique modifiers](/u/overview/syntax.html#core-arguments-vs-oblique-modifiers). `iobj` must only be used for core arguments, never for obliques, as described below. The naming of this relation may be changed in the next major revision of the UD guidelines. |


In UD, the indirect object of a verb is any nominal phrase that is a core
argument of the verb but is not its subject or (direct) [object](obj).
The prototypical example is the recipient of ditransitive verbs of
exchange:

~~~ sdparse
She gave me a raise
iobj(gave, me)
nsubj(gave, She)
~~~

However, many languages allow other semantic roles as additional objects. The most common case is allowing benefactives, but some languages allow other roles. Examples include instruments, such as in the Kinyarwanda example below, or comitatives. At the other extreme, some languages lack all indirect objects.

~~~ sdparse
Umukoóbwa a-ra-andik-iish-a íbárúwa íkárámu \n girl 1-PRS-write-APPL-ASP letter pen
obj(a-ra-andik-iish-a, íbárúwa)
iobj(a-ra-andik-iish-a, íkárámu)
~~~

In languages distinguishing morphological [cases](u-feat/Case), the recipient will often be marked by the dative case.
However, the `iobj` relation can be used only for a core argument. The morphological dative may signal a core argument
in some languages (such as Basque) but in many others it is just oblique (like the English preposition _to_). For
instance, in many Indo-European languages, the recipient should be attached as [obl]() and not `iobj`, regardless
of the traditional grammar which may label it as “indirect object”.

In the following Czech example, the verb takes two objects. Both are nouns in the accusative case, which is rather
unusual—for most other verbs, one of the arguments would be in the dative and would thus be treated as oblique in UD.
However, a bare accusative signals a core object and a verb with one nominative and two accusatives is ditransitive
in UD. One of the accusatives is direct object (patient), the other is indirect (recipient). It is parallel to how
the English translation would be annotated (where there is no morphological case marking) and also to verbs of giving
in English (consider a similar sentence, _he gave my daughter a class of maths_).

~~~ sdparse
On učí mou dceru matematiku . \n He teaches my daughter.Acc maths.Acc .
obj(učí, matematiku)
iobj(učí, dceru)
obj(teaches, maths.Acc)
iobj(teaches, daughter.Acc)
~~~

Predicates in Basque can cross-reference (by morphological agreement on the auxiliary verb) up to three arguments
in different morphological cases: ergative, absolutive, and dative. The morphological cross-reference is a strong
indicator that all three are core arguments. Therefore, if all three are present, we have a double-object situation
and the dative argument will be `iobj` (while the ergative argument will be [nsubj]() and the absolutive [obj]()).
Even if the absolutive argument is omitted for a verb which licenses three arguments, the dative argument is still
`iobj`.

~~~ sdparse
(Nik)/Case=Erg (zuri)/Case=Dat liburua/Case=Abs eman dizut . \n (I) (you) book given I-have-you-it .
nsubj(eman, (Nik))
iobj(eman, (zuri))
obj(eman, liburua)
aux(eman, dizut)
punct(eman, .-6)
nsubj(given, (I))
iobj(given, (you))
obj(given, book)
aux(given, I-have-you-it)
punct(given, .-13)
~~~

~~~ sdparse
Mariari/Case=Dat eman nion liburua/Case=Abs . \n To-Maria given I-have-her-it book .
iobj(eman, Mariari)
obj(eman, liburua)
aux(eman, nion)
punct(eman, .-5)
iobj(given, To-Maria)
obj(given, book)
aux(given, I-have-her-it)
punct(given, .-11)
~~~

~~~ sdparse
Mariari/Case=Dat eman nion . \n To-Maria given I-have-her-it .
iobj(eman, Mariari)
aux(eman, nion)
punct(eman, .-4)
iobj(given, To-Maria)
aux(given, I-have-her-it)
punct(given, .-9)
~~~

~~~ sdparse
Liburua/Case=Abs eman nion . \n Book given I-have-her-it .
obj(eman, Liburua)
aux(eman, nion)
punct(eman, .-4)
obj(given, Book)
aux(given, I-have-her-it)
punct(given, .-9)
~~~

Nevertheless, Basque has also a class of verbs that license only two core arguments, one ergative and
one dative. Here the ergative has the A function and the dative the P function (Zúñiga and Fernández 2014),
meaning that the dative is [obj]() rather than `iobj`, as in “The teacher has looked angrily at the students.”

~~~ sdparse
Irakasleak/Case=Erg haserre begiratu die ikasleei/Case=Dat . \n Teacher angrily looked he-has-them to-students .
nsubj(begiratu, Irakasleak)
advmod(begiratu, haserre)
aux(begiratu, die)
obj(begiratu, ikasleei)
punct(begiratu, .-6)
nsubj(looked, Teacher)
advmod(looked, angrily)
aux(looked, he-has-them)
obj(looked, to-students)
punct(looked, .-13)
~~~

Another class of transitive verbs in Basque license one dative and one absolutive argument. Here the
dative has the A function and the absolutive the P function, meaning that the dative is [nsubj]() and
the absolutive is [obj](), as in “The boy likes the soup very much.”

~~~ sdparse
Zopa/Case=Abs izugarri gustatzen zaio mutilari/Case=Dat . \n Soup greatly pleasing it-is-him to-boy .
obj(gustatzen, Zopa)
advmod(gustatzen, izugarri)
aux(gustatzen, zaio)
nsubj(gustatzen, mutilari)
punct(gustatzen, .-6)
obj(pleasing, Soup)
advmod(pleasing, greatly)
aux(pleasing, it-is-him)
nsubj(pleasing, to-boy)
punct(pleasing, .-13)
~~~

In Tagalog, core arguments are marked by the prepositions _ang_ and _ng_ (or by corresponding inflection
of personal pronouns), while oblique dependents are typically marked by the preposition _sa_ (sometimes
glossed as the dative). Giving somebody something is a (mono)transitive predicate.

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

In Plains Cree (Wolvengrey 2011), transitive verbs cross-reference subjects and animate objects but not
inanimate objects. With a verb of giving, the theme is typically inanimate while the recipient is
typically animate. Assuming that [nsubj]() and [obj]() are reserved for the two core arguments
cross-referenced by the verb, the theme has to be `iobj` (if it is a core argument at all; otherwise
it would have to be [obl](); but real oblique nominals in Plains Cree take a locative case affix,
which is not present here).

* _Nikī-miyāw anima masinahikan._ “I gave him that book.”

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

If the language has a prototypical `iobj` (occurring in a double object construction with [obj]()),
then morphosyntactic criteria need to be established for when a sole object is [obj]() and when it is `iobj`.[^1]
Depending on the language, potential reasons to consider a sole object in a clause as an `iobj` include:
- It has case marking distinct from that of a prototypical [obj](), e.g. dative rather than accusative
- Another, more patient-like object may be inserted into the clause without affecting the morphosyntax of the object in question
- The verb licenses the object in combination with a [ccomp]() (the [ccomp]() may be analyzed as taking the place of an [obj]())

For example, in English, the verb _teach_ may occur with [obj](), [iobj](), or both:

~~~ sdparse
She teaches the students introductory logic .
iobj(teaches, students)
obj(teaches, logic)
~~~

~~~ sdparse
She teaches introductory logic .
obj(teaches, logic)
~~~

~~~ sdparse
She teaches the first-year students .
iobj(teaches, students)
~~~

~~~ sdparse
She teaches her students that good writing is important .
iobj(teaches, students)
ccomp(teaches, important)
~~~

~~~ sdparse
She teaches her students to write well .
iobj(teaches, students)
xcomp(teaches, write)
~~~

However, not all verbs license two objects (or an object plus [ccomp]()), in which case the sole object should be plain [obj]() even if it has recipient-like semantics:

~~~ sdparse
She questions her students about their interests .
obj(questions, students)
obl(questions, interests)
~~~

~~~ sdparse
She helps her students to succeed .
obj(helps, students)
xcomp(helps, succeed)
~~~

[^1]: This is an amended policy as described [on the changes page](/changes.html#sole-iobj).

## References

* Fernando Zúñiga, Beatriz Fernández (draft 26.6.2014): [Grammatical relations in Basque](http://basdisyn.net/pdf/Zuniga%20&%20Fernandez%202014%20Basque%20GRs%20270614.pdf)
* Arok Elessar Wolvengrey (2011):
  [Semantic and pragmatic functions in Plains Cree syntax](https://dare.uva.nl/search?identifier=153f3405-f029-4046-8d95-9f2a087b4123)
  (PhD thesis). Utrecht: LOT. ISBN 978-94-6093-051-5.

<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:59 CET -->
