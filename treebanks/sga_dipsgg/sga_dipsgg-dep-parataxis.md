---
layout: base
title:  'Statistics of parataxis in UD_Old_Irish-DipSGG'
udver: '2'
---

## Treebank Statistics: UD_Old_Irish-DipSGG: Relations: `parataxis`

This relation is universal.

10 nodes (2%) are attached to their parents as `parataxis`.

10 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 18.

The following 3 pairs of parts of speech are connected with `parataxis`: <tt><a href="sga_dipsgg-pos-VERB.html">VERB</a></tt>-<tt><a href="sga_dipsgg-pos-VERB.html">VERB</a></tt> (6; 60% instances), <tt><a href="sga_dipsgg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sga_dipsgg-pos-VERB.html">VERB</a></tt> (3; 30% instances), <tt><a href="sga_dipsgg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sga_dipsgg-pos-NOUN.html">NOUN</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 21 parataxis	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 parataxis	color:blue
1	memmbrum	membrum	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
2	naue	nuae	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	1	amod	_	_
3	droch	droch	ADJ	_	Degree=Pos|Prefix=Yes	4	amod	_	SpaceAfter=No
4	dub	dub	NOUN	_	Case=Nom|Number=Sing	2	conj	_	_
5	ó	ó	INTJ	_	_	7	discourse	_	_
6	ní	ní	PART	_	Polarity=Neg	7	advmod	_	SpaceAfter=No
7	epur	asbeir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|Voice=Act	1	parataxis	_	_
8	na	nach	DET	_	Case=Acc|Definite=Ind|Number=Sing	9	det	_	_
9	haill	aile	ADJ	_	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	7	amod	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 parataxis	color:blue
1	··,	.,.,.,	PUNCT	_	_	4	punct	_	_
2	uch	uch	INTJ	_	_	4	discourse	_	_
3	mo	mo	PRON	_	Number=Sing|Person=1|Poss=Yes|PronType=Prs	4	nmod:poss	_	SpaceAfter=No
4	chliab	clíab	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
5	a	a	PART	_	PartType=Voc	7	case:voc	_	SpaceAfter=No
6	nóib	nóib	ADJ	_	Degree=Pos|Prefix=Yes	7	amod	_	SpaceAfter=No
7	ingen	ingen	NOUN	_	Case=Voc|Number=Sing	4	parataxis	_	_
8	··–	·–	PUNCT	_	_	7	punct	_	_

~~~


