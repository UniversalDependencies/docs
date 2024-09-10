---
layout: base
title:  'Statistics of nsubj in UD_Irish-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Irish-Cadhan: Relations: `nsubj`

This relation is universal.

295 nodes (6%) are attached to their parents as `nsubj`.

259 instances of `nsubj` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.49152542372881.

The following 15 pairs of parts of speech are connected with `nsubj`: <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (101; 34% instances), <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt> (84; 28% instances), <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt> (31; 11% instances), <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-PART.html">PART</a></tt> (27; 9% instances), <tt><a href="ga_cadhan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (15; 5% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (10; 3% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt> (6; 2% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt> (5; 2% instances), <tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="ga_cadhan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="ga_cadhan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="ga_cadhan-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ga_cadhan-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nsubj	color:blue
1	Táid	bí	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres	0	root	_	_
2	creabhair	creabhar	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	1	nsubj	_	_
3	go	go	NOUN	_	Number=Sing	2	nmod	_	_
4	leor	leor	NOUN	_	_	3	fixed	_	_
5	fós	fós	ADV	_	_	1	advmod	_	SpaceAfter=No
6	.	.	PUNCT	_	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nsubj	color:blue
1	Adubhairt	abair	VERB	_	Mood=Ind|Tense=Past	0	root	_	_
2	tú	tú	PRON	_	Number=Sing|Person=2	1	nsubj	_	_
3	so	seo	PRON	_	PronType=Dem	1	obj	_	_
4	gu	go	PART	_	PartType=Ad	5	mark:prt	_	_
5	fírinneach	fírinneach	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	1	advmod	_	SpaceAfter=No
6	.	.	PUNCT	_	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nsubj	color:blue
1	Go	go	PART	_	Mood=Sub|PartType=Vb	2	mark:prt	_	_
2	ttugadh	tabhair	VERB	_	Form=Ecl|Mood=Sub	0	root	_	_
3	Dia	Dia	PROPN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	2	nsubj	_	_
4	Odlaig	Nollaig	PROPN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	2	obj	_	_
5	mhaith	maith	ADJ	_	Case=Nom|Form=Len|Gender=Fem|Number=Sing	4	amod	_	_
6	dhúinn	do	ADP	_	Form=Len|Number=Plur|Person=1	2	obl:prep	_	_
7	faoi	faoi	ADP	_	_	8	case	_	_
8	shéan	séan	NOUN	_	Case=Nom|Form=Len|Gender=Masc|Number=Sing	4	nmod	_	_
9	agus	agus	CCONJ	_	_	11	cc	_	_
10	faoi	faoi	ADP	_	_	11	case	_	_
11	shonas	sonas	NOUN	_	Case=Nom|Form=Len|Gender=Masc|Number=Sing	8	conj	_	SpaceAfter=No
12	.	.	PUNCT	_	_	2	punct	_	SpacesAfter=\n

~~~


