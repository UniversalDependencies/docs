---
layout: base
title:  'Working Group on Comparatives'
udver: '2'
---

# Working Group on Comparative Constructions

A prototypical comparative construction involves a quality or property whose
extent is compared, the entity being compared, and the standard of comparison.
Thus in [en] _Stephan is taller than Joakim,_ Stephan is the entity compared,
Joakim represents the standard of comparison to which Stephan is compared,
and the adjective _taller_ denotes the quality that is compared, i.e.,
tallness.

Adverbs can be compared as well, e.g. in
[cs] _Michal mluví lépe než Miloš_ “Michal speaks better than Miloš”,
the word _lépe_ is an adverb and it denotes the quality of Michal's speaking
rather than of his personality in general.

Finally, we can also compare quantities, as in
_Melanie has more money than Sue,_ or in
_There is more than one way of doing it;_
in the latter example, the standard of comparison is conflated with the entity
counted. Similarly, there are sentences where both the standard of comparison
and the new value are hidden in the verb:
_The prices of homes have more than doubled._

The syntax of comparative constructions poses various challenges for linguistic
theory. For English, many of these are discussed in Bresnan (1973) and
Huddleston and Pullum (2002, chapter 13). A cross-linguistic survey of equality
comparison is provided in Haspelmath (2017).

There are no UD relations designed specifically to mark comparative
constructions. This page documents what regular UD means are used to analyze
these constructions and how they are applied.

## Equality, Direction and Degree

* Equality comparison [en]: _The car is as big as mine._
* Equality comparison [cs]: _To auto je stejně velké jako moje._ “The car is as big as mine.” Alternatives: _To auto je tak velké jako moje. To auto je velké jako moje._
* Similarity comparison [cs]: _To auto je podobně velké jako moje._ “The car is similarly big to mine.”
* Inequality non-scalar comparison [cs]: _To auto je jinak velké než moje._ “The car's size is different from mine.” (lit. “The car is differently big than mine.”)
* Scalar decreasing comparison (inferiority) [cs]: _Loňský model byl méně propracovaný než letošní._ “The last year's model was less elaborated than this year's.”
* Scalar increasing comparison (superiority) [cs]: _Letošní model je propracovanější než loňský._ “This year's model is more elaborated than last year's.”
* Superlative [en]: _This is the biggest car of all._
* Superlative [cs]: _Tohle je největší auto ze všech._ “This is the biggest car of all.”
* Decreasing superlative [cs]: _Letošní model je nejméně propracovaný za posledních pět let._ “This year's model is the least elaborated of the previous five years.”

## Coding Strategies across Languages

### Morphological Gradation of Adjectives and Adverbs

Adjectives in some languages have an inflectional category that expresses
degree of comparison. Special forms are used when the adjective appears in
an inequality scalar comparison: A form called _comparative_ is used when
the modified noun has a greater degree of the quality denoted by the adjective
than the standard of comparison. A form called _superlative_ is used when
the modified noun has a greater degree of the quality denoted by the adjective
than all entities in a certain set. In UD, morphological comparatives and
superlatives are tagged using the [Degree]() feature: `Degree=Cmp` and `Degree=Sup`,
respectively. If a language has morphological comparative and/or superlative,
then the base forms of ajdectives should be tagged as the _positive_ degree
(`Degree=Pos`). Note that the positive degree should not be confused with the
positive [Polarity](). Even negative adjectives can be compared, therefore they
can also have the positive (basic) degree.

Czech:

~~~ conllu
1	Martin	Martin	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	Gloss=Martin
2	je	být	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	Gloss=is
3	inteligentní	inteligentní	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	Gloss=intelligent|SpaceAfter=No
4	.	.	PUNCT	_	_	3	punct	_	Gloss=.

~~~

~~~ conllu
1	Martin	Martin	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	Gloss=Martin
2	je	být	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	Gloss=is
3	inteligentnější	inteligentní	ADJ	_	Case=Nom|Degree=Cmp|Gender=Masc|Number=Sing	0	root	_	Gloss=more-intelligent
4	než	než	SCONJ	_	_	5	case	_	Gloss=than
5	Vojta	Vojta	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	3	obl	_	Gloss=Vojta|SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	Gloss=.

~~~

~~~ conllu
1	Martin	Martin	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	Gloss=Martin
2	je	být	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	Gloss=is
3	nejinteligentnější	inteligentní	ADJ	_	Case=Nom|Degree=Sup|Gender=Masc|Number=Sing	0	root	_	Gloss=most-intelligent
4	ze	z	ADP	_	_	5	case	_	Gloss=of
5	všech	všechen	PRON	_	Case=Gen|Gender=Masc|Number=Plur|PronType=Tot	3	obl	_	Gloss=all|SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	Gloss=.

~~~

~~~ conllu
1	Vyšetření	vyšetření	NOUN	_	Case=Nom|Gender=Neut|Number=Sing|VerbForm=Vnoun	3	nsubj	_	Gloss=exam
2	je	být	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	Gloss=is
3	nepříjemné	příjemný	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Neg	0	root	_	Gloss=unpleasant|SpaceAfter=No
4	,	,	PUNCT	_	_	8	punct	_	Gloss=,
5	ale	ale	CCONJ	_	_	8	cc	_	Gloss=but
6	operace	operace	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	8	nsubj	_	Gloss=surgery
7	je	být	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	Gloss=is
8	nepříjemnější	příjemný	ADJ	_	Case=Nom|Degree=Cmp|Gender=Fem|Number=Sing|Polarity=Neg	3	conj	_	Gloss=more-unpleasant|SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	Gloss=.

~~~

Similarly, the degree morphology also applies to Czech adverbs:

~~~ conllu
1	Martin	Martin	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	Gloss=Martin
2	běhá	běhat	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Gloss=runs
3	rychle	rychle	ADV	_	Degree=Pos|Polarity=Pos	2	advmod	_	Gloss=fast|SpaceAfter=No
4	.	.	PUNCT	_	_	2	punct	_	Gloss=.

~~~

~~~ conllu
1	Martin	Martin	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	Gloss=Martin
2	běhá	běhat	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Gloss=runs
3	rychleji	rychle	ADV	_	Degree=Cmp|Polarity=Pos	2	advmod	_	Gloss=faster
4	než	než	SCONJ	_	_	5	case	_	Gloss=than
5	Vojta	Vojta	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	3	obl	_	Gloss=Vojta|SpaceAfter=No
6	.	.	PUNCT	_	_	2	punct	_	Gloss=.

~~~

~~~ conllu
1	Martin	Martin	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	Gloss=Martin
2	běhá	běhat	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Gloss=runs
3	nejrychleji	rychle	ADV	_	Degree=Sup|Polarity=Pos	2	advmod	_	Gloss=fastest
4	ze	z	ADP	_	_	5	case	_	Gloss=of
5	všech	všechen	PRON	_	Case=Gen|Gender=Masc|Number=Plur|PronType=Tot	3	obl	_	Gloss=all|SpaceAfter=No
6	.	.	PUNCT	_	_	2	punct	_	Gloss=.

~~~

There are also languages with morphologically expressed equative degree, used
in equality comparisons. One such language is Hiligaynon [hil] (Philippinic;
Wolfenden 1971:103) Haspelmath (2017):

“Pedro is handsome.”

~~~ conllu
1	Si	si	ADP	_	_	2	case	_	Gloss=TOPIC
2	Pedro	Pedro	PROPN	_	_	3	nsubj	_	Gloss=Pedro
3	gwapo	gwapo	ADJ	_	Degree=Pos	0	root	_	Gloss=handsome|SpaceAfter=No
4	.	.	PUNCT	_	_	3	punct	_	Gloss=.

~~~

“Pedro is as handsome as Juan.”

~~~ conllu
1	Si	si	ADP	_	_	2	case	_	Gloss=TOPIC
2	Pedro	Pedro	PROPN	_	_	3	nsubj	_	Gloss=Pedro
3	kasinggwapo	gwapo	ADJ	_	Degree=Equ	0	root	_	Gloss=as-handsome
4	ni	ni	ADP	_	_	5	case	_	Gloss=of
5	Juan	Juan	PROPN	_	_	3	obl	_	Gloss=Juan|SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	Gloss=.

~~~

### Periphrastic Gradation

Other languages, like English, have a mixed system. Some English adjectives
have morphological degrees like in Czech, e.g., _smart – smarter – smartest._
Other adjectives must be compared periphrastically with the help of the words
_more, most, less_ and _least._ These function words provide the degree
feature and they can be viewed themselves as (irregular) degree forms of two
basic adverbs: _much – more – most; little – less – least._

~~~ conllu
1	Martin	Martin	PROPN	_	Gender=Masc|Number=Sing	4	nsubj	_	_
2	is	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	more	much	ADV	_	Degree=Cmp	4	advmod	_	_
4	intelligent	intelligent	ADJ	_	Degree=Pos	0	root	_	_
5	than	than	SCONJ	_	_	6	case	_	_
6	Donald	Donald	PROPN	_	Gender=Masc|Number=Sing	4	obl	_	SpaceAfter=No
7	.	.	PUNCT	_	_	4	punct	_	_

~~~

~~~ conllu
1	Martin	Martin	PROPN	_	Gender=Masc|Number=Sing	6	nsubj	_	_
2	is	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
3	the	the	DET	_	Definite=Def|PronType=Art	6	det	_	_
4	most	much	ADV	_	Degree=Sup	5	advmod	_	_
5	intelligent	intelligent	ADJ	_	Degree=Pos	6	amod	_	_
6	guy	guy	NOUN	_	Number=Sing	0	root	_	_
7	of	of	ADP	_	_	8	case	_	_
8	all	all	PRON	_	PronType=Tot	5	obl	_	SpaceAfter=No
9	.	.	PUNCT	_	_	6	punct	_	_

~~~

The comparative and superlative represent increasing degrees of the quality
compared. Decreasing degrees can also be expressed, e.g., instead of saying
that _Martin is more intelligent than Donald,_ we could say that _Donald is
less intelligent than Martin._ The coding of decreasing degrees is
periphrastic even in Czech:

~~~ conllu
1	Vojta	Vojta	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	Gloss=Vojta
2	je	být	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	Gloss=is
3	méně	málo	ADV	_	Degree=Cmp|Polarity=Pos	4	advmod	_	Gloss=less
4	inteligentní	inteligentní	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	Gloss=intelligent
5	než	než	SCONJ	_	_	6	case	_	Gloss=than
6	Martin	Martin	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	4	obl	_	Gloss=Martin|SpaceAfter=No
7	.	.	PUNCT	_	_	4	punct	_	Gloss=.

~~~

Other languages, e.g. Spanish, lack the morphological degree almost entirely;
except for a few irregular forms, such as _mejor_ “better” and _mayor_
“bigger”, all adjectives are compared periphrastically:

~~~ conllu
1	Miguel	Miguel	PROPN	_	Gender=Masc|Number=Sing	4	nsubj	_	Gloss=Miguel
2	es	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	Gloss=is
3	más	mucho	ADV	_	Degree=Cmp	4	advmod	_	Gloss=more
4	inteligente	inteligente	ADJ	_	_	0	root	_	Gloss=intelligent
5	que	que	SCONJ	_	_	6	case	_	Gloss=than
6	Martín	Martín	PROPN	_	Gender=Masc|Number=Sing	4	obl	_	Gloss=Martín|SpaceAfter=No
7	.	.	PUNCT	_	_	4	punct	_	_

~~~

### Unmarked Degree

Finally, there are languages where the compared adjective is neither marked
morphologically, nor modified by a degree adverb. The base form of the
adjective is used and the fact that it is being compared must be derived from
the coding of the other participants, e.g., the standard of comparison.

Chinese [zh]: “Zhangsan is fatter than him.”

~~~ conllu
1	张三	张三	PROPN	_	_	4	nsubj	_	Translit=zhāngsān|Gloss=Zhangsan|SpaceAfter=No
2	比	比	ADP	_	_	3	case	_	Translit=bǐ|Gloss=than|SpaceAfter=No
3	他	他	PRON	_	_	4	obl	_	Translit=tā|Gloss=he|SpaceAfter=No
4	胖	胖	ADJ	_	_	0	root	_	Translit=pàng|Gloss=fat|SpaceAfter=No
5	。	。	PUNCT	_	_	4	punct	_	Translit=.|Gloss=.|SpaceAfter=No

~~~

Japanese [ja]: “English is easier than Japanese.”

~~~ conllu
1	日本語	日本語	NOUN	_	_	5	obl	_	Translit=nihongo|Gloss=Japanese|SpaceAfter=No
2	より	より	ADP	_	_	1	case	_	Translit=yori|Gloss=than|SpaceAfter=No
3	英語	英語	NOUN	_	_	5	nsubj	_	Translit=eigo|Gloss=English|SpaceAfter=No
4	の方が	の方が	ADP	_	_	3	case	_	Translit=nohouga|Gloss=direction|SpaceAfter=No
5	易しい	易しい	ADJ	_	_	0	root	_	Translit=yasashii|Gloss=easy|SpaceAfter=No
6	。	。	PUNCT	_	_	5	punct	_	Translit=.|Gloss=.|SpaceAfter=No

~~~

### Coding of the Standard of Comparison

The standard of comparison can be a nominal or a clause. If it is a clause, it
may be marked by a subordinating conjunction: either one whose primary function
is comparison (English _than,_ Czech _než_) or a more general one (Spanish
_que_). It is not uncommon that different conjunctions are used in inequality
comparisons _(than, než, que)_ and in equality comparisons _(as, jako, como)._

If the same conjunction is used with bare nominals, we still tag it [SCONJ]()
(but we use dependency relations that are reserved for nominals, see below).
However, if a language has a function word that is primarily used with nominal
standards of comparison, it will be tagged [ADP]().

Nominal standards of comparison can also be marked morphologically by a
_comparative_ [Case](), as in Nepali [ne]:

“This flower is beautiful.”

~~~ conllu
1	यो	यो	DET	_	PronType=Dem	2	det	_	Translit=yo|Gloss=this
2	फूल	फूल	NOUN	_	Case=Nom|Number=Sing	3	nsubj	_	Translit=phūl|Gloss=flower
3	राम्रो	राम्रो	ADJ	_	_	0	root	_	Translit=rāmro|Gloss=beautiful
4	छ	छुनु	AUX	_	_	3	cop	_	Translit=cha|Gloss=is|SpaceAfter=No
5	।	।	PUNCT	_	_	3	punct	_	Translit=.|Gloss=.

~~~

“This flower is more beautiful than that flower.”

~~~ conllu
1	यो	यो	DET	_	PronType=Dem	2	det	_	Translit=yo|Gloss=this
2	फूल	फूल	NOUN	_	Case=Nom|Number=Sing	5	nsubj	_	Translit=phūla|Gloss=flower
3	त्यो	त्यो	DET	_	PronType=Dem	4	det	_	Translit=tyo|Gloss=that
4	फूलभन्दा	फूल	NOUN	_	Case=Cmp|Number=Sing	5	obl	_	Translit=phūlabhandā|Gloss=flower-than
5	राम्रो	राम्रो	ADJ	_	_	0	root	_	Translit=rāmro|Gloss=beautiful
6	छ	छुनु	AUX	_	_	5	cop	_	Translit=cha|Gloss=is|SpaceAfter=No
7	।	।	PUNCT	_	_	5	punct	_	Translit=.|Gloss=.

~~~

“This is the most beautiful flower of all.”

~~~ conllu
1	यो	यो	DET	_	PronType=Dem	2	det	_	Translit=yo|Gloss=this
2	फूल	फूल	NOUN	_	Case=Nom|Number=Sing	4	nsubj	_	Translit=phūla|Gloss=flower
3	सबैभन्दा	सबै	PRON	_	Case=Cmp|PronType=Tot	4	obl	_	Translit=sabaibhandā|Gloss=all-than
4	राम्रो	राम्रो	ADJ	_	_	0	root	_	Translit=rāmro|Gloss=beautiful
5	छ	छुनु	AUX	_	_	4	cop	_	Translit=cha|Gloss=is|SpaceAfter=No
6	।	।	PUNCT	_	_	4	punct	_	Translit=.|Gloss=.

~~~

A few languages also have an equative case that marks the standard in equality
comparisons. One example is East Greenlandic [kl] (Eskimo; Mennecier 1995:460)
Haspelmath (2017):

“He is as tall as me.”

~~~ conllu
1	Taanna	_	PRON	_	PronType=Dem	3	nsubj	_	Gloss=that-one
2	uattut	_	PRON	_	Case=Equ|Number=Sing|Person=1|PronType=Prs	3	obl	_	Gloss=as-I
3	attiivuq	_	VERB	_	Degree=Equ	0	root	_	Gloss=is-as-tall|SpaceAfter=No
4	.	.	PUNCT	_	_	3	punct	_	Gloss=.

~~~

In other languages, the standard of comparison may be marked morphologically
by a case that is not dedicated specifically to comparison, such as the
genitive in Russian [ru]:

“My father is older than yours.”

~~~ conllu
1	Мой	мой	DET	_	Case=Nom|Gender=Masc|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	2	det	_	Translit=Moj|Gloss=my
2	отец	отец	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	Translit=otec|Gloss=father
3	старше	старый	ADJ	_	Degree=Cmp	0	root	_	Translit=starše|Gloss=older
4	твоего	твой	DET	_	Case=Gen|Gender=Masc|Number=Sing|Number[psor]=Sing|Person=2|Poss=Yes|PronType=Prs	3	obl	_	Translit=tvoego|Gloss=of-yours|SpaceAfter=No
5	.	.	PUNCT	_	_	3	punct	_	Translit=.|Gloss=.

~~~

### Other Coding Strategies

Some languages need a verb to compare degrees of properties, e.g., instead
of saying _John is taller than Tom,_ they say _John surpasses Tom in height,_
and instead of _John is as tall as Dan,_ they say _John reaches Dan's
height._ Such constructions do not differ significantly from normal clauses
and we do not discuss them further on this page.

A rather unique equative construction exists in Persian [fa] (Mace 2003:52)
Haspelmath (2017):

“This is as fast as that.” (Lit.
“This is to the speed of that.”)

~~~ conllu
1	این	_	PRON	_	PronType=Dem	3	nsubj	_	Translit=in|Gloss=this
2	به	_	ADP	_	_	3	case	_	Translit=be|Gloss=to
3	تندی	_	NOUN	_	_	0	root	_	Translit=tondī-ye|Gloss=speed-EZ
4	آن	_	PRON	_	PronType=Dem	3	nmod	_	Translit=ān|Gloss=that
5	است	_	AUX	_	_	3	cop	_	Translit=ast|Gloss=is|SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	Translit=.|Gloss=.

~~~

## Relations in Equality Comparison

In constructions of the form _as X as Y_ or _the same X as Y,_ X and Y can be
of a range of syntactic types, leading to surface forms such as those
exemplified below:

* _Commitment is as important as a player's talent._
* _Get the cash to him as soon as possible._
* _I put in as much flour as the recipe called for._

We note that the head of the whole construction appears to be the head of the
X phrase, i.e., the property whose degree is compared. We can simply say:

* _Commitment is important._
* _Get the cash to him soon._
* _I put in flour._

We then say that the first _as_ is an independent modifier in the comparative,
modifying something in the X phrase, in part because the following _as Y_ is
fairly optional:

* _Commitment is (just) as important._
* _?Get the cash to him (just) as soon._
* _I put in (just) as much flour._

However, this first _as_ may not modify the head of X, it may modify an
existing modifier of the head of X. Its role is adverbial ([advmod]()),
consistent with other kinds of degree modification:

~~~ conllu
1	Commitment	commitment	NOUN	_	Number=Sing	4	nsubj	_	_
2	is	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	as	as	SCONJ	_	_	4	advmod	_	_
4	important	important	ADJ	_	Degree=Pos	0	root	_	_
5	as	as	SCONJ	_	_	9	case	_	_
6	a	a	DET	_	Definite=Ind|PronType=Art	7	det	_	_
7	player	player	NOUN	_	Number=Sing	9	nmod	_	_
8	's	's	PART	_	_	7	case	_	_
9	talent	talent	NOUN	_	Number=Sing	4	obl	_	SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	_	_

~~~

~~~ conllu
1	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	put	put	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	in	in	ADP	_	_	2	compound:prt	_	_
4	as	as	SCONJ	_	_	5	advmod	_	_
5	much	much	ADV	_	Degree=Pos	6	amod	_	_
6	flour	flour	NOUN	_	Number=Coll	2	obj	_	_
7	as	as	SCONJ	_	_	10	mark	_	_
8	the	the	DET	_	Definite=Def|PronType=Art	9	det	_	_
9	recipe	recipe	NOUN	_	Number=Sing	10	nsubj	_	_
10	called	call	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	5	advcl	_	_
11	for	for	ADP	_	_	10	obl	_	SpaceAfter=No
12	.	.	PUNCT	_	_	2	punct	_	_

~~~

We then take the complement of the comparative (that is, the standard of
comparison) as an oblique dependent of the first part. It is clear that the
material in the complement _as Y_ can be clausal. It is also usually optional,
as indicated above. For that reason, we usually make the complement an
[advcl](), with the second _as_ analyzed as [mark](). That gives us:

~~~ conllu
1	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
2	do	do	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	aux	_	_
3	n't	not	PART	_	Polarity=Neg	4	advmod	_	_
4	hear	hear	VERB	_	VerbForm=Inf	0	root	_	_
5	from	from	ADP	_	_	7	case	_	_
6	my	my	DET	_	Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	7	det	_	_
7	brother	brother	NOUN	_	Number=Sing	4	obl	_	_
8	as	as	SCONJ	_	_	9	advmod	_	_
9	often	often	ADV	_	Degree=Pos	4	advmod	_	_
10	as	as	SCONJ	_	_	13	mark	_	_
11	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	13	nsubj	_	_
12	previously	previously	ADV	_	Degree=Pos	13	advmod	_	_
13	heard	call	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	9	advcl	_	_
14	from	from	ADP	_	_	15	case	_	_
15	him	he	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	obl	_	SpaceAfter=No
16	.	.	PUNCT	_	_	4	punct	_	_

~~~

We take the _as Y_ clause as a dependent of the content word whose degree
is being assessed (here _often_). We take its head to be the head of the
clause, here _heard._ An initially plausible alternative analysis would be to
make the clausal dependent headed by _as_ as a dependent of the comparative
modifier _as, more,_ or _less,_ and indeed this is the analysis which
Huddleston and Pullum (2002) argue for in English. However, there are several
reasons to doubt this analysis. One is the general principles of UD in
favoring content words as heads. A second argument is motivated by a desire
for crosslinguistic adequacy: in languages such as Finnish and Japanese, this
functional element is not present.

Since the first _as_ is a functional element, the dependent can be understood
to modify the whole phrase _as often,_ and therefore is attached to the head
of that phrase. Additionally, it might be noted that comparatives without a
comparative word occur in certain varieties of English. For example in Indian
English you find usages such as _So don't worry if you think that you have a
girlfriend, who is intelligent than you._ One further argument is that
morphological comparatives will receive an analysis parallel to the
periphrastic ones.

## Inequality Scalar Comparison

More often than not, inequality scalar comparative structures are similar to
equative structures in the same language. In English periphrastic comparatives,
_more_ and _less_ are parallel to the first use of _as_ in equality
comparison, except that _more_ can also directly modify a noun (comparing
quantity). In such cases the relation of _more_ to the noun is [amod](),
and the standard of comparison depends directly on _more,_ roughly seeing it
as elliptical for _more numerous._ In general, the standard of comparison
always depends on an adjective or adverb, and is usually an [advcl]() or
[obl]().

~~~ conllu
1	more	much	ADV	_	Degree=Cmp	2	advmod	_	_
2	important	important	ADJ	_	Degree=Pos	0	root	_	_
3	than	than	SCONJ	_	_	5	mark	_	_
4	you	you	PRON	_	Case=Nom|Person=2|PronType=Prs	5	nsubj	_	_
5	thought	think	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	2	advcl	_	_

~~~

~~~ conllu
1	more	much	ADV	_	Degree=Cmp	2	advmod	_	_
2	rapidly	rapidly	ADV	_	Degree=Pos	0	root	_	_
3	than	than	SCONJ	_	_	5	mark	_	_
4	you	you	PRON	_	Case=Nom|Person=2|PronType=Prs	5	nsubj	_	_
5	thought	think	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	2	advcl	_	_

~~~

~~~ conllu
1	more	much	ADV	_	Degree=Cmp	2	amod	_	_
2	problems	problem	NOUN	_	Number=Plur	0	root	_	_
3	than	than	SCONJ	_	_	5	mark	_	_
4	you	you	PRON	_	Case=Nom|Person=2|PronType=Prs	5	nsubj	_	_
5	thought	think	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	1	advcl	_	_
6	of	of	ADP	_	_	5	obl	_	_
7	last	last	ADJ	_	Degree=Pos	8	amod	_	_
8	week	week	NOUN	_	Number=Sing	5	obl	_	_

~~~

~~~ conllu
1	a	a	DET	_	Definite=Ind|PronType=Art	4	det	_	_
2	more	much	ADV	_	Degree=Cmp	3	advmod	_	_
3	difficult	difficult	ADJ	_	Degree=Pos	4	amod	_	_
4	problem	problem	NOUN	_	Number=Sing	0	root	_	_
5	than	than	SCONJ	_	_	7	mark	_	_
6	you	you	PRON	_	Case=Nom|Person=2|PronType=Prs	7	nsubj	_	_
7	thought	think	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	advcl	_	_

~~~

In addition to crosslinguistic adequacy, we can see here another possible
advantage of not attaching the _than_ clause to _more:_ This analysis then
means that the dependency structure is more parallel between cases with a
periphrastic comparative like _more intelligent_ and a morphological
comparative like _smarter._

~~~ conllu
1	smarter	smart	ADJ	_	Degree=Cmp	0	root	_	_
2	than	than	SCONJ	_	_	4	mark	_	_
3	you	you	PRON	_	Case=Nom|Person=2|PronType=Prs	4	nsubj	_	_
4	thought	think	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	1	advcl	_	_

~~~

Finnish [fi]:

“smarter than you thought”

~~~ conllu
1	fiksumpi	_	ADJ	_	Degree=Cmp	0	root	_	Gloss=smarter
2	kuin	_	SCONJ	_	_	3	mark	_	Gloss=than
3	luulit	_	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	1	advcl	_	Gloss=you-thought

~~~

~~~ conllu
1	a	a	DET	_	Definite=Ind|PronType=Art	3	det	_	_
2	smarter	smart	ADJ	_	Degree=Cmp	3	amod	_	_
3	boy	boy	NOUN	_	Number=Sing	0	root	_	_
4	than	than	SCONJ	_	_	6	mark	_	_
5	you	you	PRON	_	Case=Nom|Person=2|PronType=Prs	6	nsubj	_	_
6	thought	think	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	2	advcl	_	_

~~~

An optional oblique argument may quantify the difference between the comparee
and the standard of comparison:

Czech [cs]:

“Pavel is taller than Klára by ten centimeters.”

~~~ conllu
1	Pavel	Pavel	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	Gloss=Pavel
2	je	být	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	Gloss=is
3	o	o	ADP	_	Case=Acc	5	case	_	Gloss=by
4	deset	deset	NUM	_	Case=Acc	5	nummod:gov	_	Gloss=ten
5	centimetrů	centimetr	NOUN	_	Case=Gen	6	obl	_	Gloss=centimeters
6	vyšší	vysoký	ADJ	_	Case=Nom|Degree=Cmp|Gender=Masc|Number=Sing	0	root	_	Gloss=taller
7	než	než	SCONJ	_	_	8	case	_	Gloss=than
8	Klára	Klára	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	6	obl	_	Gloss=Klára|SpaceAfter=No
9	.	.	PUNCT	_	_	6	punct	_	Gloss=.

~~~
