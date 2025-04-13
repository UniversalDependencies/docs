---
layout: base
title:  'Statistics of advcl in UD_Old_Irish-DipWBG'
udver: '2'
---

## Treebank Statistics: UD_Old_Irish-DipWBG: Relations: `advcl`

This relation is universal.

15 nodes (3%) are attached to their parents as `advcl`.

12 instances of `advcl` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.46666666666667.

The following 4 pairs of parts of speech are connected with `advcl`: <tt><a href="sga_dipwbg-pos-VERB.html">VERB</a></tt>-<tt><a href="sga_dipwbg-pos-VERB.html">VERB</a></tt> (9; 60% instances), <tt><a href="sga_dipwbg-pos-VERB.html">VERB</a></tt>-<tt><a href="sga_dipwbg-pos-ADJ.html">ADJ</a></tt> (4; 27% instances), <tt><a href="sga_dipwbg-pos-ADP.html">ADP</a></tt>-<tt><a href="sga_dipwbg-pos-ADV.html">ADV</a></tt> (1; 7% instances), <tt><a href="sga_dipwbg-pos-VERB.html">VERB</a></tt>-<tt><a href="sga_dipwbg-pos-PRON.html">PRON</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 11 advcl	color:blue
1	.i.	.i.	ADV	_	Abbr=Yes	4	advmod	_	_
2	ní	is	AUX	_	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbType=Cop	4	obl	_	_
3	nád	nád	SCONJ	_	Polarity=Neg	4	mark	_	_
4	ṁ bed	attá	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	_
5	ar	ar	ADP	_	AdpType=Prep|Definite=Ind	6	case	_	SpaceAfter=No
6	se	so	PART	_	PronType=Dem	4	obl	_	_
7	di	de	ADP	_	AdpType=Prep|Definite=Ind	8	case	_	SpaceAfter=No
8	chorp	corp	NOUN	_	Case=Dat|Number=Sing	4	obl	_	_
9	act	acht	SCONJ	_	_	11	mark	_	_
10	a	at	PART	_	PartType=Vb	11	compound:prt	_	SpaceAfter=No
11	tá	attá	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	4	advcl	_	_
12	de	de	ADP	_	AdpType=Prep|Definite=Ind|Number=Sing|Person=3|PronType=Prs	11	obl:prep	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 4 advcl	color:blue
1	.i.	.i.	ADV	_	Abbr=Yes	13	advmod	_	_
2	hore	óre	SCONJ	_	_	4	mark	_	_
3	am	is	AUX	_	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbType=Cop	4	nsubj	_	SpaceAfter=No
4	essamin	essamin	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	13	advcl	_	SpaceAfter=No
5	se	sa	PRON	_	Number=Sing|Person=1|PronType=Emp	3	amod	_	_
6	precepte	precept	NOUN	_	Case=Gen|Number=Sing	4	nmod	_	_
7	as	a	ADP	_	AdpType=Prep|Definite=Ind	9	case	_	SpaceAfter=No
8	mo	mo	PRON	_	Number=Sing|Person=1|Poss=Yes|PronType=Prs	9	nmod:poss	_	SpaceAfter=No
9	chuimriug	cuimrech	NOUN	_	Case=Dat|Number=Sing	6	nmod	_	_
10	is	is	AUX	_	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbType=Cop	11	nsubj	_	SpaceAfter=No
11	lia	il	ADJ	_	Degree=Cmp	13	ccomp	_	_
12	de	de	ADP	_	AdpType=Prep|Definite=Ind|Number=Sing|Person=3|PronType=Prs	11	obl:prep	_	_
13	creitfess	creitid	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|Voice=Act	0	root	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 advcl	color:blue
1	.i.	.i.	ADV	_	Abbr=Yes	3	advmod	_	_
2	cain	cani	PRON	_	Polarity=Neg|PronType=Int	3	xcomp	_	_
3	ronóibad	noíbaid	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Pass	0	root	_	_
4	abracham	abracham	PROPN	_	Case=Nom|Number=Sing	3	obj	_	_
5	tri	tre	ADP	_	AdpType=Prep|Definite=Ind	6	case	_	SpaceAfter=No
6	hiris	iress	NOUN	_	Case=Acc|Number=Sing	3	obl	_	_
7	in	in	PART	_	PronType=Int	8	mark:int	_	SpaceAfter=No
8	tree	tre	ADP	_	AdpType=Prep|Definite=Ind|Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	parataxis	_	_
9	ǽm	ám	ADV	_	_	8	advmod	_	_
10	didiu	didiu	ADV	_	_	8	advmod	_	_
11	fa	fa	SCONJ	_	_	12	mark	_	SpaceAfter=No
12	nacc	nacc	ADV	_	Polarity=Neg	8	advcl	_	_

~~~


