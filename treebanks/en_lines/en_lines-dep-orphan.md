---
layout: base
title:  'Statistics of orphan in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Relations: `orphan`

This relation is universal.

6 nodes (0%) are attached to their parents as `orphan`.

6 instances of `orphan` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.83333333333333.

The following 6 pairs of parts of speech are connected with `orphan`: <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-ADP.html">ADP</a></tt> (1; 17% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (1; 17% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt> (1; 17% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-ADP.html">ADP</a></tt> (1; 17% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (1; 17% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-PART.html">PART</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 orphan	color:blue
1	if	if	SCONJ	_	_	3	mark	_	_
2	he	he	PRON	PERS-P3SG-NOM	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
3	keeps	keep	VERB	PRES	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	his	he	PRON	P3SG-GEN	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	5	nmod:poss	_	_
5	head	head	NOUN	SG-NOM	Number=Sing	3	obj	_	SpaceAfter=No
6	,	,	PUNCT	Comma	_	13	punct	_	_
7	and	and	CCONJ	_	_	13	cc	_	_
8	that	that	PRON	DEM-SG	Number=Sing|PronType=Dem	13	dislocated	_	_
9	one	one	PRON	IND-P3SG	_	13	nsubj	_	_
10	ca	can	AUX	PRES-AUX	VerbForm=Fin	13	aux	_	SpaceAfter=No
11	n't	not	PART	NEG	_	13	advmod	_	_
12	be	be	AUX	INF	VerbForm=Inf	13	cop	_	_
13	sure	sure	ADJ	POS	Degree=Pos	3	conj	_	_
14	of	of	ADP	_	_	13	orphan	_	SpaceAfter=No
15	,	,	PUNCT	Comma	_	19	punct	_	_
16	not	not	PART	NEG	_	17	advmod	_	_
17	even	even	ADV	_	_	19	advmod	_	_
18	with	with	ADP	_	_	19	case	_	_
19	him	he	PRON	PERS-P3SG-ACC	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	obl	_	SpaceAfter=No
20	,	,	PUNCT	Comma	_	21	punct	_	_
21	mmh	mmh	INTJ	_	_	19	discourse	_	SpaceAfter=No
22	?	?	PUNCT	Questionmark	_	19	punct	_	_
23	not	not	PART	NEG	_	26	advmod	_	_
24	even	even	ADV	_	_	26	advmod	_	_
25	with	with	ADP	_	_	26	case	_	_
26	him	he	PRON	PERS-P3SG-ACC	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	19	parataxis	_	SpaceAfter=No
27	.	.	PUNCT	Period	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 15 orphan	color:blue
1	You	you	PRON	PERS-P2	_	3	nsubj	_	_
2	can	can	AUX	PRES-AUX	VerbForm=Fin	3	aux	_	_
3	change	change	VERB	INF	VerbForm=Inf	0	root	_	_
4	the	the	DET	DEF	Definite=Def|PronType=Art	5	det	_	_
5	caption	caption	NOUN	SG-NOM	Number=Sing	3	obj	_	_
6	of	of	ADP	_	_	7	case	_	_
7	Group	group	NOUN	SG-NOM	Number=Sing	5	nmod	_	_
8	1	1	NUM	ID	NumType=Card	7	nummod	_	_
9	to	to	ADP	_	_	10	mark	_	_
10	Fixed	fixed	ADJ	SG-NOM	Degree=Pos	3	obl	_	_
11	and	and	CCONJ	_	_	12	cc	_	_
12	Promotions	promotion	NOUN	PL-NOM	Number=Plur	3	conj	_	_
13	2	2	NUM	ID	NumType=Card	12	nummod	_	_
14	to	to	ADP	_	_	15	case	_	_
15	Category	category	NOUN	SG-NOM	Number=Sing	12	orphan	_	_
16	in	in	ADP	_	_	20	case	_	_
17	the	the	DET	DEF	Definite=Def|PronType=Art	20	det	_	_
18	Properties	property	NOUN	PL-NOM	Number=Plur	20	compound	_	_
19	dialog	dialog	NOUN	SG-NOM	Number=Sing	20	compound	_	_
20	box	box	NOUN	SG-NOM	Number=Sing	3	obl	_	SpaceAfter=No
21	.	.	PUNCT	Period	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 29 31 orphan	color:blue
1	Skirts	skirt	NOUN	PL-NOM	Number=Plur	4	nsubj	_	_
2	were	be	AUX	PAST	Mood=Ind|Tense=Past|VerbForm=Fin	4	cop	_	_
3	too	too	ADV	_	_	4	advmod	_	_
4	short	short	ADJ	POS	Degree=Pos	0	root	_	SpaceAfter=No
5	,	,	PUNCT	Comma	_	9	punct	_	_
6	hair	hair	NOUN	SG-NOM	Number=Sing	9	nsubj	_	_
7	was	be	AUX	PAST	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	9	cop	_	_
8	too	too	ADV	_	_	9	advmod	_	_
9	long	long	ADJ	POS	Degree=Pos	4	conj	_	SpaceAfter=No
10	,	,	PUNCT	Comma	_	20	punct	_	_
11	and	and	CCONJ	_	_	20	cc	_	_
12	the	the	DET	DEF	Definite=Def|PronType=Art	15	det	_	_
13	favoured	favour	ADJ	PASS	Case=Nom	15	amod	_	_
14	colour	colour	NOUN	SG-NOM	Number=Sing	15	compound	_	_
15	combination	combination	NOUN	SG-NOM	Number=Sing	20	nsubj	_	_
16	of	of	ADP	_	_	17	case	_	_
17	purple	purple	ADJ	POS	Degree=Pos	15	amod	_	_
18	and	and	CCONJ	_	_	19	cc	_	_
19	orange	orange	ADJ	POS	Degree=Pos	17	conj	_	_
20	made	make	VERB	PAST	Mood=Ind|Tense=Past|VerbForm=Fin	4	conj	_	_
21	my	I	PRON	P1SG-GEN	Number=Sing|Person=1|Poss=Yes|PronType=Prs	22	nmod:poss	_	_
22	mother	mother	NOUN	SG-NOM	Number=Sing	20	obj	_	_
23	look	look	VERB	INF	VerbForm=Inf	20	xcomp	_	_
24	like	like	ADP	_	_	26	case	_	_
25	a	a	DET	IND-SG	Definite=Ind|PronType=Art	26	det	_	_
26	vampire	vampire	NOUN	SG-NOM	Number=Sing	23	obl	_	_
27	and	and	CCONJ	_	_	29	cc	_	_
28	my	I	PRON	P1SG-GEN	Number=Sing|Person=1|Poss=Yes|PronType=Prs	29	nmod:poss	_	_
29	father	father	NOUN	SG-NOM	Number=Sing	4	conj	_	_
30	a	a	DET	IND-SG	Definite=Ind|PronType=Art	31	det	_	_
31	Matisse	Matisse	PROPN	SG-NOM	Number=Sing	29	orphan	_	SpaceAfter=No
32	.	.	PUNCT	Period	_	4	punct	_	_

~~~


