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
3	inteligentnější	inteligentní	ADJ	_	Case=Nom|Degree=Cmp|Gender=Masc|Number=Sing	0	root	_	Gloss=intelligent
4	než	než	SCONJ	_	_	5	case	_	Gloss=than
5	Vojta	Vojta	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	3	obl	_	Gloss=Vojta|SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	Gloss=.

~~~

