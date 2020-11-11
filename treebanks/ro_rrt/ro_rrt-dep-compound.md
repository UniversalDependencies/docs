---
layout: base
title:  'Statistics of compound in UD_Romanian-RRT'
udver: '2'
---

## Treebank Statistics: UD_Romanian-RRT: Relations: `compound`

This relation is universal.

61 nodes (0%) are attached to their parents as `compound`.

58 instances of `compound` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.44262295081967.

The following 4 pairs of parts of speech are connected with `compound`: <tt><a href="ro_rrt-pos-NUM.html">NUM</a></tt>-<tt><a href="ro_rrt-pos-NUM.html">NUM</a></tt> (47; 77% instances), <tt><a href="ro_rrt-pos-NUM.html">NUM</a></tt>-<tt><a href="ro_rrt-pos-CCONJ.html">CCONJ</a></tt> (9; 15% instances), <tt><a href="ro_rrt-pos-NUM.html">NUM</a></tt>-<tt><a href="ro_rrt-pos-ADP.html">ADP</a></tt> (4; 7% instances), <tt><a href="ro_rrt-pos-NUM.html">NUM</a></tt>-<tt><a href="ro_rrt-pos-DET.html">DET</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound	color:blue
1	Camera	cameră	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	0	root	_	_
2	o	unu	NUM	Mcfsrln	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing|NumForm=Word|NumType=Card	1	nummod	_	_
3	sută	sută	NUM	Mcfsrln	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing|NumForm=Word|NumType=Card	2	compound	_	_
4	unu	unu	NUM	Mcmsrl	Case=Acc,Nom|Gender=Masc|Number=Sing|NumForm=Word|NumType=Card	2	compound	_	SpaceAfter=No
5	,	,	PUNCT	COMMA	_	6	punct	_	_
6	zise	zice	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	1	parataxis	_	_
7	ofițerul	ofițer	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	6	nsubj	_	SpaceAfter=No
8	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 compound	color:blue
1	Scoase	scoate	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
2	din	din	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	_
3	buzunar	buzunar	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	1	obl	_	_
4	o	un	DET	Tifsr	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	5	det	_	_
5	monedă	monedă	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	1	obj	_	_
6	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	_
7	douăzeci	douăzeci	NUM	Mc-p-l	Number=Plur|NumForm=Word|NumType=Card	11	nummod	_	_
8	și	și	CCONJ	Crssp	Polarity=Pos	7	compound	_	_
9	cinci	cinci	NUM	Mc-p-l	Number=Plur|NumForm=Word|NumType=Card	7	compound	_	_
10	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
11	cenți	cent	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	5	nmod	_	SpaceAfter=No
12	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound	color:blue
1	Cei	cel	DET	Tdmpr	Case=Acc,Nom|Gender=Masc|Number=Plur|PronType=Dem	6	det	_	_
2	35	35	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	6	nummod	_	_
3	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	2	compound	_	_
4	milioane	milion	NUM	Mcfprln	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Plur|NumForm=Word|NumType=Card	2	compound	_	_
5	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	_
6	brazi	brad	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	14	nsubj	_	_
7	cumpărați	cumpăra	VERB	Vmii2p	Mood=Ind|Number=Plur|Person=2|Tense=Imp|VerbForm=Fin	6	acl	_	_
8	anul	an	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	7	obl	_	_
9	acesta	acesta	DET	Dd3msr---o	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|Position=Postnom|PronType=Dem	8	det	_	_
10	vor	vrea	AUX	Va--3p	Number=Plur|Person=3	12	aux	_	_
11	fi	fi	AUX	Vanp	Tense=Pres|VerbForm=Inf	12	aux	_	_
12	trebuit	trebui	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
13	să	să	PART	Qs	Mood=Sub	14	mark	_	_
14	PUTREZEASCĂ	putrezi	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	12	csubj	_	_
15	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	18	case	_	_
16	30	30	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	18	nummod	_	_
17	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	16	case	_	_
18	ani	an	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	14	obl	_	_
19	înainte	înainte	ADV	Rgp	Degree=Pos	23	mark	_	_
20	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	19	fixed	_	_
21	a	a	PART	Qn	PartType=Inf	23	mark	_	_
22	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	23	expl:pv	_	_
23	descompune	descompune	VERB	Vmnp	Tense=Pres|VerbForm=Inf	14	advcl	_	_
24	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	25	case	_	_
25	materie	materie	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	23	obl	_	_
26	moartă	mort	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	25	amod	_	_
27	care	care	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	30	nsubj	_	_
28	deja	deja	ADV	Rgp	Degree=Pos	30	advmod	_	_
29	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	30	expl:pv	_	_
30	împrăștie	împrăștia	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	25	acl	_	SpaceAfter=No
31	.	.	PUNCT	PERIOD	_	12	punct	_	_

~~~


