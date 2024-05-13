---
layout: base
title:  'Statistics of punct in UD_Old_Irish-DipSGG'
udver: '2'
---

## Treebank Statistics: UD_Old_Irish-DipSGG: Relations: `punct`

This relation is universal.

20 nodes (5%) are attached to their parents as `punct`.

12 instances of `punct` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.8.

The following 5 pairs of parts of speech are connected with `punct`: <tt><a href="sga_dipsgg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sga_dipsgg-pos-PUNCT.html">PUNCT</a></tt> (11; 55% instances), <tt><a href="sga_dipsgg-pos-VERB.html">VERB</a></tt>-<tt><a href="sga_dipsgg-pos-PUNCT.html">PUNCT</a></tt> (4; 20% instances), <tt><a href="sga_dipsgg-pos-X.html">X</a></tt>-<tt><a href="sga_dipsgg-pos-PUNCT.html">PUNCT</a></tt> (3; 15% instances), <tt><a href="sga_dipsgg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sga_dipsgg-pos-PUNCT.html">PUNCT</a></tt> (1; 5% instances), <tt><a href="sga_dipsgg-pos-ADV.html">ADV</a></tt>-<tt><a href="sga_dipsgg-pos-PUNCT.html">PUNCT</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 punct	color:blue
1	᚛	᚛	PUNCT	_	_	2	punct	_	SpaceAfter=No
2	ᚃᚓᚏᚔᚐ	feria	NOUN	_	Foreign=Yes	0	root	_	_
3	ᚉᚐᚔ	caí	NOUN	_	Case=Gen|Number=Sing	2	nmod	_	_
4	ᚆᚑᚇᚔᚓ	hodie	NOUN	_	Foreign=Yes	2	obl:tmod	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 punct	color:blue
1	Gaib	gaibid	VERB	_	Mood=Imp|Number=Sing|Person=2|Tense=Pres|Voice=Act	0	root	_	_
2	do	do	PRON	_	Number=Sing|Person=2|Poss=Yes|PronType=Prs	3	nmod:poss	_	_
3	chuil	cúil	NOUN	_	Case=Acc|Number=Sing	1	obj	_	_
4	i	i	ADP	_	AdpType=Prep|Definite=Def	6	case	_	SpaceAfter=No
5	sin	in	DET	_	Case=Dat|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	charcair	carcar	NOUN	_	Case=Dat|Number=Sing	3	nmod	_	_
7	ni	ní	PART	_	Polarity=Neg	8	advmod	_	SpaceAfter=No
8	róis	rosaig	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Fut|Voice=Act	1	parataxis	_	_
9	chluim	clúm	NOUN	_	Case=Acc|Number=Sing	8	obj	_	_
10	na	ná	CCONJ	_	Polarity=Neg	11	cc	_	SpaceAfter=No
11	colcaid	colcaid	NOUN	_	Case=Acc|Number=Sing	9	conj	_	_
12	·	·	PUNCT	_	_	8	punct	_	_
13	truag	trúag	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	8	dislocated	_	_
14	in	in	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Art	15	det	_	SpaceAfter=No
15	sin	sin	PART	_	PronType=Dem	13	amod	_	_
16	a	a	PART	_	PartType=Voc	17	case:voc	_	SpaceAfter=No
17	mail	mael	PROPN	_	Case=Voc|Number=Sing	13	vocative	_	_
18	bachal	bachall	NOUN	_	Case=Gen|Number=Plur	17	nmod	_	_
19	ro	ro	PART	_	PartType=Aug	21	compound:prt	_	SpaceAfter=No
20	t	t	PRON	_	Number=Sing|Person=2|PronClass=A|PronType=Prs	19	obj:infx	_	_
21	giuil	glenaid	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	1	parataxis	_	_
22	ind	in	DET	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Art	23	det	_	SpaceAfter=No
23	ṡrathar	srathar	NOUN	_	Case=Nom|Number=Sing	21	obj	_	_
24	dodcaid	dodcad	NOUN	_	Case=Gen|Number=Sing	23	nmod	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 punct	color:blue
1	tiach	téit	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Fut|Voice=Act	0	root	_	_
2	didiv	didiu	ADV	_	_	1	advmod	_	_
3	ma	má	SCONJ	_	_	5	mark	_	SpaceAfter=No
4	d	is	AUX	_	Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbType=Cop	5	nsubj	_	_
5	ferr	maith	ADJ	_	Degree=Pos	1	advcl	_	_
6	lat	la	ADP	_	AdpType=Prep|Definite=Ind|Number=Sing|Person=2|PronType=Prs	5	obl:prep	_	_
7	.i.	.i.	ADV	_	Abbr=Yes	8	advmod	_	_
8	d	_	X	_	_	1	dislocated	_	SpaceAfter=No
9	·	·	PUNCT	_	_	8	punct	_	SpaceAfter=No
10	o	_	X	_	_	8	flat	_	SpaceAfter=No
11	·	·	PUNCT	_	_	10	punct	_	SpaceAfter=No
12	o	_	X	_	_	8	flat	_	SpaceAfter=No
13	·	·	PUNCT	_	_	12	punct	_	_

~~~


