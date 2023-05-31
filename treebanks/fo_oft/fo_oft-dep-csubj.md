---
layout: base
title:  'Statistics of csubj in UD_Faroese-OFT'
udver: '2'
---

## Treebank Statistics: UD_Faroese-OFT: Relations: `csubj`

This relation is universal.

18 nodes (0%) are attached to their parents as `csubj`.

16 instances of `csubj` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.66666666666667.

The following 3 pairs of parts of speech are connected with `csubj`: <tt><a href="fo_oft-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fo_oft-pos-VERB.html">VERB</a></tt> (13; 72% instances), <tt><a href="fo_oft-pos-VERB.html">VERB</a></tt>-<tt><a href="fo_oft-pos-VERB.html">VERB</a></tt> (3; 17% instances), <tt><a href="fo_oft-pos-ADV.html">ADV</a></tt>-<tt><a href="fo_oft-pos-VERB.html">VERB</a></tt> (2; 11% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 csubj	color:blue
1	Ætlanin	ætlan	NOUN	N	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	0	root	_	_
2	er	vera	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	1	cop	_	_
3	at	at	PART	IM	_	4	mark	_	_
4	venda	venda	VERB	V	VerbForm=Inf	1	csubj	_	_
5	lítlu	lítil	ADJ	A	Case=Dat|Definite=Def|Gender=Fem|Number=Sing	6	amod	_	_
6	støddini	stødd	NOUN	N	Case=Dat|Definite=Def|Gender=Fem|Number=Sing	4	obj	_	_
7	á	á	ADP	Pr	_	8	case	_	_
8	Føroyalandi	Føroyaland	PROPN	N	Case=Dat|Definite=Ind|Gender=Neut|Number=Sing	6	nmod	_	_
9	til	til	ADP	Pr	_	10	case	_	_
10	fyrimun	fyrimunur	NOUN	N	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	4	obl	_	SpaceAfter=No
11	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 csubj	color:blue
1	Eisini	eisini	ADV	Adv	_	2	advmod	_	_
2	sigst	siga	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	0	root	_	SpaceAfter=No
3	,	,	PUNCT	CLB	_	6	punct	_	_
4	at	at	SCONJ	CS	_	6	mark	_	_
5	gudurin	gudur	NOUN	N	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	6	nsubj	_	_
6	legði	leggja	VERB	V	Mood=Ind|Number=Sing|Tense=Past	2	csubj	_	_
7	seg	seg	PRON	Pron	Case=Acc|Reflex=Yes	6	obj	_	_
8	hjá	hjá	ADP	Pr	_	9	case	_	_
9	henni	hon	PRON	Pron	Case=Dat|Gender=Fem|Number=Sing|Person=3|PronType=Prs	6	obl	_	_
10	meðan	meðan	SCONJ	CS	_	12	mark	_	_
11	hon	hon	NOUN	N	Case=Dat|Definite=Ind|Gender=Fem|Number=Sing	12	nsubj	_	_
12	svav	sova	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	6	advcl	_	SpaceAfter=No
13	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 csubj	color:blue
1	Tað	tað	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	expl	_	_
2	er	vera	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	cop	_	_
3	ókeypis	ókeypis	ADV	Adv	_	0	root	_	_
4	at	at	PART	IM	_	5	mark	_	_
5	brúka	brúka	VERB	V	VerbForm=Inf	3	csubj	_	_
6	fótbóltsvøllirnar	fótbóltsvøllur	NOUN	N	Case=Acc|Definite=Def|Gender=Masc|Number=Plur	5	obj	_	_
7	hjá	hjá	ADP	Pr	_	8	case	_	_
8	Tórshavnar	Tórshavn	PROPN	N	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	9	nmod:poss	_	_
9	kommunu	kommuna	NOUN	N	Case=Dat|Definite=Ind|Gender=Fem|Number=Sing	6	nmod:poss	_	SpaceAfter=No
10	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


