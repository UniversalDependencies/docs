---
layout: base
title:  'Statistics of dislocated in UD_Old_Irish-DipSGG'
udver: '2'
---

## Treebank Statistics: UD_Old_Irish-DipSGG: Relations: `dislocated`

This relation is universal.

4 nodes (1%) are attached to their parents as `dislocated`.

4 instances of `dislocated` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.5.

The following 4 pairs of parts of speech are connected with `dislocated`: <tt><a href="sga_dipsgg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sga_dipsgg-pos-NOUN.html">NOUN</a></tt> (1; 25% instances), <tt><a href="sga_dipsgg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sga_dipsgg-pos-PRON.html">PRON</a></tt> (1; 25% instances), <tt><a href="sga_dipsgg-pos-VERB.html">VERB</a></tt>-<tt><a href="sga_dipsgg-pos-ADJ.html">ADJ</a></tt> (1; 25% instances), <tt><a href="sga_dipsgg-pos-VERB.html">VERB</a></tt>-<tt><a href="sga_dipsgg-pos-X.html">X</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 dislocated	color:blue
1	immargal	immargal	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
2	is	is	AUX	_	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbType=Cop	3	nsubj	_	_
3	femininum	_	NOUN	_	Foreign=Yes	1	dislocated	_	_
4	dano	dano	ADV	_	_	3	advmod	_	_
5	⁊	ocus	CCONJ	_	_	7	cc	_	_
6	a	ad	PART	_	PartType=Vb	7	compound:prt	_	SpaceAfter=No
7	ta	attá	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	3	conj	_	_
8	forbart	forbart	NOUN	_	Case=Nom|Number=Sing	7	nsubj	_	_
9	and	i	ADP	_	AdpType=Prep|Definite=Ind|Gender=Masc,Neut|Number=Sing|Person=3|PronType=Prs	8	obl:prep	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 dislocated	color:blue
1	do	do	ADP	_	AdpType=Prep|Definite=Ind	2	case	_	_
2	inis	inis	NOUN	_	Case=Dat|Number=Sing	0	root	_	_
3	maddoc	maddoc	PROPN	_	Case=Dat|Number=Sing	2	nmod	_	_
4	dún	do	ADP	_	AdpType=Prep|Definite=Ind|Number=Plur|Person=1|PronType=Prs	2	obl:prep	_	_
5	.i.	.i.	ADV	_	Abbr=Yes	6	advmod	_	_
6	mei	mé	PRON	_	Number=Sing|Person=1|PronType=Prs	2	dislocated	_	_
7	sse	sa	PRON	_	Number=Sing|Person=1|PronType=Emp	6	amod	_	_
8	⁊	ocus	CCONJ	_	_	9	cc	_	_
9	choirbbre	coirbbre	PROPN	_	Case=Nom|Number=Sing	6	conj	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 13 dislocated	color:blue
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


