---
layout: base
title:  'Statistics of nmod in UD_Karelian-KKPP'
udver: '2'
---

## Treebank Statistics: UD_Karelian-KKPP: Relations: `nmod`

This relation is universal.
There are 2 language-specific subtypes of `nmod`: <tt><a href="krl_kkpp-dep-nmod-gsubj.html">nmod:gsubj</a></tt>, <tt><a href="krl_kkpp-dep-nmod-poss.html">nmod:poss</a></tt>.

37 nodes (1%) are attached to their parents as `nmod`.

31 instances of `nmod` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.10810810810811.

The following 8 pairs of parts of speech are connected with `nmod`: <tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt> (16; 43% instances), <tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="krl_kkpp-pos-PROPN.html">PROPN</a></tt> (7; 19% instances), <tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="krl_kkpp-pos-PRON.html">PRON</a></tt> (5; 14% instances), <tt><a href="krl_kkpp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt> (3; 8% instances), <tt><a href="krl_kkpp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="krl_kkpp-pos-PRON.html">PRON</a></tt> (2; 5% instances), <tt><a href="krl_kkpp-pos-VERB.html">VERB</a></tt>-<tt><a href="krl_kkpp-pos-PRON.html">PRON</a></tt> (2; 5% instances), <tt><a href="krl_kkpp-pos-AUX.html">AUX</a></tt>-<tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="krl_kkpp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="krl_kkpp-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 nmod	color:blue
1	Šuo	šuo	NOUN	NOUN	Case=Nom|Number=Sing	2	nsubj	_	_
2	oli	olla	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	puolen	puoli	NUM	NUM	Case=Gen|Number=Sing	4	nummod	_	_
4	virššan	viršša	NOUN	NOUN	Case=Gen|Number=Sing	2	obl	_	_
5	piäššä	piäššä	ADP	ADP	_	4	case	_	_
6	koista	koti	NOUN	NOUN	Case=Ine|Number=Sing	4	nmod	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod	color:blue
1	Kalevala	Kalevala	PROPN	PROPN	Case=Nom|Number=Sing	2	nmod	_	PropnType=Al|SpaceAfter=No
2	-pelin	-peli	NOUN	NOUN	Case=Gen|Number=Sing	3	nmod:poss	_	_
3	voittajakši	voittaja	NOUN	NOUN	Case=Tra|Number=Sing	4	obl	_	_
4	piäsi	piästä	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	Viipuni	Viipuni	PROPN	PROPN	Case=Nom|Number=Sing	4	nsubj	_	PropnType=Ant|Gender=Male|SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	4	punct	_	_
7	šentäh	sentäh	ADV	ADV	_	4	advmod	_	_
8	kun	kun	SCONJ	SCONJ	_	12	mark	_	_
9	Manala	Manala	PROPN	PROPN	Case=Nom|Number=Sing	12	nsubj:cop	_	PropnType=Top
10	oli	olla	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	12	cop	_	_
11	täyši	täyši	ADJ	ADJ	Case=Nom|Number=Sing	12	amod	_	_
12	henkie	henki	NOUN	NOUN	Case=Par|Number=Sing	4	conj	_	SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 13 nmod	color:blue
1	Aktijoh	aktijo	NOUN	NOUN	Case=Ill|Number=Sing	2	obl	_	_
2	liitty	liittyä	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	muajilman	muajilma	NOUN	NOUN	Case=Gen|Number=Sing	2	obj	_	_
4	184	184	NUM	NUM	Case=Nom|Number=Sing|NumType=Card	5	nummod	_	_
5	muata	mua	NOUN	NOUN	Case=Par|Number=Sing	2	obj	_	_
6	ta	ta	CCONJ	CCONJ	_	7	cc	_	_
7	še	še	PRON	PRON	Case=Nom|Number=Sing|PronType=Dem	8	nsubj	_	_
8	on	olla	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	_	_
9	kuutta	kuuši	NUM	NUM	Case=Par|Number=Sing	10	nummod	_	_
10	kertua	kerta	NOUN	NOUN	Case=Par|Number=Sing	8	obj	_	_
11	enemmän	enemmän	ADV	ADV	_	2	advmod	_	SpaceAfter=No
12	,	,	PUNCT	PUNCT	_	15	punct	_	_
13	mitä	mi	PRON	PRON	Case=Par|Number=Sing	15	nmod	_	PronType=Interr
14	viime	viime	ADV	ADV	_	15	advmod	_	_
15	vuotena	vuoši	NOUN	NOUN	Case=Ess|Number=Sing	11	advcl	_	SpaceAfter=No
16	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


