---
layout: base
title:  'Statistics of acl in UD_Irish-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Irish-Cadhan: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="ga_cadhan-dep-acl-relcl.html">acl:relcl</a></tt>.

14 nodes (0%) are attached to their parents as `acl`.

14 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.14285714285714.

The following 3 pairs of parts of speech are connected with `acl`: <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (10; 71% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt> (3; 21% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-ADJ.html">ADJ</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl	color:blue
1	Gach	gach	DET	_	Definite=Def	3	det	_	_
2	uile	uile	DET	_	PronType=Ind	3	det	_	_
3	dhuine	duine	NOUN	_	Case=Nom|Form=Len|Gender=Masc|Number=Sing	0	root	_	_
4	ag	ag	ADP	_	_	5	case	_	_
5	cur	cur	NOUN	_	VerbForm=Vnoun	3	acl	_	_
6	a	a	DET	_	Gender=Masc|Number=Sing|Person=3|Poss=Yes	7	nmod:poss	_	_
7	ladair	ladar	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	5	obj	_	_
8	fhéin	féin	PRON	_	Form=Len|Reflex=Yes	7	nmod	_	_
9	isteach	isteach	ADV	_	_	5	advmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 26 acl	color:blue
1	D'	do	PART	_	PartType=Vb	2	mark:prt	_	SpaceAfter=No
2	innis	inis	VERB	_	Mood=Ind|Tense=Past	0	root	_	_
3	Séamas	Séamas	PROPN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	2	nsubj	_	_
4	do	do	ADP	_	Gender=Masc|Number=Sing|Person=3	2	obl:prep	_	_
5	cá	cá	ADV	_	PronType=Int	6	advmod	_	_
6	raibh	bí	VERB	_	Mood=Ind|Tense=Past	2	ccomp	_	_
7	sé	sé	PRON	_	Gender=Masc|Number=Sing|Person=3	6	nsubj	_	_
8	sínte	sínte	ADJ	_	VerbForm=Part	6	xcomp:pred	_	SpaceAfter=No
9	,	,	PUNCT	_	_	12	punct	_	_
10	agus	agus	CCONJ	_	_	12	cc	_	_
11	mara	mura	SCONJ	_	_	12	mark	_	_
12	mbeadh	bí	VERB	_	Form=Ecl|Mood=Cnd	19	advcl	_	_
13	mise	mise	PRON	_	Number=Sing|Person=1|PronType=Emp	12	nsubj	_	_
14	agus	agus	CCONJ	_	_	16	cc	_	_
15	an	an	DET	_	Definite=Def|Number=Sing|PronType=Art	16	det	_	_
16	bhó	bó	NOUN	_	Case=Nom|Definite=Def|Form=Len|Gender=Fem|Number=Sing	13	conj	_	_
17	bhán	bán	ADJ	_	Case=Nom|Form=Len|Gender=Fem|Number=Sing	16	amod	_	_
18	ná	nach	PART	_	PartType=Cmpl|Polarity=Neg	19	mark:prt	_	_
19	beadh	bí	VERB	_	Mood=Cnd|Polarity=Neg	6	conj	_	_
20	a	a	DET	_	Gender=Masc|Number=Sing|Person=3|Poss=Yes	21	nmod:poss	_	_
21	fhios	fios	NOUN	_	Case=Nom|Definite=Def|Form=Len|Gender=Masc|Number=Sing	19	nsubj	_	_
22	ag	ag	ADP	_	_	24	case	_	_
23	aon	aon	DET	_	PronType=Ind	24	det	_	_
24	duine	duine	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	19	xcomp:pred	_	_
25	cá	cá	ADV	_	PronType=Int	26	advmod	_	_
26	raibh	bí	VERB	_	Mood=Ind|Tense=Past	21	acl	_	_
27	sé	sé	PRON	_	Gender=Masc|Number=Sing|Person=3	26	nsubj	_	SpaceAfter=No
28	,	,	PUNCT	_	_	30	punct	_	_
29	go	go	ADP	_	_	30	case	_	_
30	maidean	maidin	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	19	obl:tmod	_	SpaceAfter=No
31	.	.	PUNCT	_	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 19 acl	color:blue
1	Tuig	tuig	VERB	_	Mood=Imp|Number=Sing|Person=2	0	root	_	SpaceAfter=No
2	,	,	PUNCT	_	_	4	punct	_	_
3	a	a	PART	_	PartType=Voc	4	case:voc	_	_
4	léaghthóir	léitheoir	NOUN	_	Case=Voc|Gender=Masc|Number=Sing	1	vocative	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	go	go	PART	_	PartType=Cmpl	7	mark:prt	_	_
7	rabhadar	bí	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past	1	ccomp	_	_
8	trí	trí	NUM	_	NumType=Card	9	nummod	_	_
9	heasbadha	easpa	NOUN	_	Case=Nom|Form=HPref|Gender=Fem|Number=Sing	7	nsubj	_	_
10	ar	ar	ADP	_	_	11	case	_	_
11	Stanihurst	Stanihurst	PROPN	_	Foreign=Yes|Gender=Masc|Number=Sing	7	xcomp:pred	_	_
12	re	le	ADP	_	_	13	case	_	_
13	scríobhadh	scríobh	NOUN	_	VerbForm=Inf	9	acl	_	_
14	stáire	stair	NOUN	_	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	13	obj	_	_
15	na	an	DET	_	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
16	hÉireann	Éire	PROPN	_	Case=Gen|Definite=Def|Form=HPref|Gender=Fem|Number=Sing	14	nmod	_	_
17	as	as	ADP	_	_	19	case	_	_
18	ná'r	is	AUX	_	Polarity=Neg|Tense=Past|VerbForm=Cop	19	cop	_	_
19	chóir	cóir	ADJ	_	Degree=Pos|Form=Len	9	acl	_	_
20	cion	cion	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	23	obj	_	_
21	stáraidhe	staraí	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	20	nmod	_	_
22	do	a	PART	_	PartType=Inf	23	mark	_	_
23	thabhairt	tabhairt	NOUN	_	Form=Len|VerbForm=Inf	19	csubj:cop	_	_
24	air	ar	ADP	_	Gender=Masc|Number=Sing|Person=3	23	obl:prep	_	SpaceAfter=No
25	.	.	PUNCT	_	_	1	punct	_	_

~~~


