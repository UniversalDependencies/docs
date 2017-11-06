---
layout: base
title:  'Statistics of nmod:gsubj in UD_Finnish'
udver: '2'
---

## Treebank Statistics: UD_Finnish: Relations: `nmod:gsubj`

This relation is a language-specific subtype of <tt><a href="fi-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="fi-dep-nmod-gobj.html">nmod:gobj</a></tt>, <tt><a href="fi-dep-nmod-poss.html">nmod:poss</a></tt>.

553 nodes (0%) are attached to their parents as `nmod:gsubj`.

553 instances of `nmod:gsubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.47016274864376.

The following 8 pairs of parts of speech are connected with `nmod:gsubj`: <tt><a href="fi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi-pos-NOUN.html">NOUN</a></tt> (408; 74% instances), <tt><a href="fi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi-pos-PROPN.html">PROPN</a></tt> (90; 16% instances), <tt><a href="fi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi-pos-PRON.html">PRON</a></tt> (50; 9% instances), <tt><a href="fi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="fi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fi-pos-PRON.html">PRON</a></tt>-<tt><a href="fi-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nmod:gsubj	color:blue
1	Myös	myös	ADV	Adv	_	4	advmod	_	_
2	tapahtuman	tapahtuma	NOUN	N	Case=Gen|Number=Sing	4	nmod:gsubj	_	_
3	pitkäaikainen	pitkä#aikainen	ADJ	A	Case=Nom|Degree=Pos|Derivation=Inen|Number=Sing	4	amod	_	_
4	vaikutus	vaikutus	NOUN	N	Case=Nom|Number=Sing	5	nsubj	_	_
5	nousi	nousta	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	esille	esille	ADV	Adv	_	5	advmod	_	SpaceAfter=No
7	.	.	PUNCT	Punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nmod:gsubj	color:blue
1	Teollisuustuotteet	teollisuus#tuote	NOUN	N	Case=Nom|Number=Plur	2	nsubj	_	_
2	muodostavat	muodostaa	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	suurimman	suuri	ADJ	A	Case=Gen|Degree=Sup|Number=Sing	4	amod	_	_
4	osan	osa	NOUN	N	Case=Gen|Number=Sing	2	obj	_	_
5	EU:	EU	PROPN	N	Abbr=Yes|Case=Gen|Number=Sing	7	nmod:gsubj	_	_
6	n	n	PROPN	N	Abbr=Yes|Case=Gen|Number=Sing	5	goeswith	_	_
7	viennistä	vienti	NOUN	N	Case=Ela|Number=Sing	4	nmod	_	SpaceAfter=No
8	.	.	PUNCT	Punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nmod:gsubj	color:blue
1	Hänen	hän	PRON	Pron	Case=Gen|Number=Sing|Person=3|PronType=Prs	3	nmod:gsubj	_	_
2	rakkain	rakas	ADJ	A	Case=Nom|Degree=Sup|Number=Sing	3	amod	_	_
3	harrastuksensa	harrastus	NOUN	N	Case=Gen|Number=Sing|Person[psor]=3	5	nsubj:cop	_	_
4	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
5	jääkiekko	jää#kiekko	NOUN	N	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	Punct	_	5	punct	_	_

~~~


