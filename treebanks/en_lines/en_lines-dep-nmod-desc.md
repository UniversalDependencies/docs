---
layout: base
title:  'Statistics of nmod:desc in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Relations: `nmod:desc`

This relation is a language-specific subtype of <tt><a href="en_lines-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_lines-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="en_lines-dep-nmod-unmarked.html">nmod:unmarked</a></tt>.

142 nodes (0%) are attached to their parents as `nmod:desc`.

142 instances of `nmod:desc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.06338028169014.

The following 3 pairs of parts of speech are connected with `nmod:desc`: <tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (128; 90% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (13; 9% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:desc	color:blue
1	Thank	thank	VERB	PRES	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
2	you	you	PRON	PERS-P2	Case=Acc|Person=2|PronType=Prs	1	obj	_	SpaceAfter=No
3	,	,	PUNCT	Comma	_	5	punct	_	_
4	Mr	Mr	NOUN	SG-NOM	Number=Sing	5	nmod:desc	_	_
5	Donnay	Donnay	PROPN	SG-NOM	Number=Sing	1	vocative	_	SpaceAfter=No
6	.	.	PUNCT	Period	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:desc	color:blue
1	Madam	madam	NOUN	SG-NOM	Number=Sing	2	nmod:desc	_	_
2	President	president	NOUN	SG-NOM	Number=Sing	7	vocative	_	SpaceAfter=No
3	,	,	PUNCT	Comma	_	2	punct	_	_
4	I	I	PRON	PERS-P1SG-NOM	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
5	do	do	AUX	PRES	Mood=Ind|Tense=Pres|VerbForm=Fin	7	aux	_	_
6	not	not	PART	NEG	Polarity=Neg	7	advmod	_	_
7	have	have	VERB	INF	VerbForm=Inf	0	root	_	_
8	a	a	DET	IND-SG	Definite=Ind|PronType=Art	9	det	_	_
9	script	script	NOUN	SG-NOM	Number=Sing	7	obj	_	SpaceAfter=No
10	,	,	PUNCT	Comma	_	13	punct	_	_
11	just	just	ADV	_	_	13	advmod	_	_
12	two	two	NUM	CARD-PL	NumType=Card	13	nummod	_	_
13	observations	observation	NOUN	PL-NOM	Number=Plur	9	appos	_	SpaceAfter=No
14	.	.	PUNCT	Period	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 13 nmod:desc	color:blue
1	He	he	PRON	PERS-P3SG-NOM	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
2	'll	will	AUX	PRES-AUX	VerbForm=Fin	4	aux	_	_
3	be	be	AUX	INF	VerbForm=Inf	4	cop	_	_
4	fine	fine	ADJ	POS	Degree=Pos	12	ccomp	_	SpaceAfter=No
5	,	,	PUNCT	Comma	_	6	punct	_	_
6	Molly	Molly	PROPN	SG-NOM	Number=Sing	4	vocative	_	SpaceAfter=No
7	,	,	PUNCT	Comma	_	6	punct	_	_
8	do	do	AUX	IMP	Mood=Imp|VerbForm=Fin	10	aux	_	_
9	n't	not	PART	NEG	Polarity=Neg	10	advmod	_	_
10	fuss	fuss	VERB	INF	VerbForm=Inf	4	parataxis	_	SpaceAfter=No
11	,	,	PUNCT	Comma	_	12	punct	_	_
12	said	say	VERB	PAST	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
13	Mr	Mr	NOUN	SG-NOM	Number=Sing	16	nmod:desc	_	_
14	Weasley	Weasley	PROPN	SG-NOM	Number=Sing	12	nsubj	_	SpaceAfter=No
15	,	,	PUNCT	Comma	_	16	punct	_	_
16	helping	help	VERB	ING	Tense=Pres|VerbForm=Part	12	advcl	_	_
17	himself	himself	PRON	RFL-P3SG	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Emp|Reflex=Yes	16	obj	_	_
18	to	to	ADP	_	_	20	case	_	_
19	Floo	floo	NOUN	SG-NOM	Number=Sing	20	compound	_	_
20	powder	powder	NOUN	SG-NOM	Number=Sing	16	obl	_	SpaceAfter=No
21	,	,	PUNCT	Comma	_	22	punct	_	_
22	too	too	ADV	_	_	16	advmod	_	SpaceAfter=No
23	.	.	PUNCT	Period	_	12	punct	_	_

~~~


