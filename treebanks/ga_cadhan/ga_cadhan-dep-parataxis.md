---
layout: base
title:  'Statistics of parataxis in UD_Irish-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Irish-Cadhan: Relations: `parataxis`

This relation is universal.

29 nodes (1%) are attached to their parents as `parataxis`.

27 instances of `parataxis` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 12.8275862068966.

The following 10 pairs of parts of speech are connected with `parataxis`: <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt> (11; 38% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt> (7; 24% instances), <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (3; 10% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (2; 7% instances), <tt><a href="ga_cadhan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_cadhan-pos-INTJ.html">INTJ</a></tt> (1; 3% instances), <tt><a href="ga_cadhan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-ADP.html">ADP</a></tt> (1; 3% instances), <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 12 parataxis	color:blue
1	Do	do	PART	_	PartType=Vb	2	mark:prt	_	_
2	dhéanfá	déan	VERB	_	Form=Len|Mood=Cnd|Number=Sing|Person=2	0	root	_	_
3	iarracht	iarracht	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	2	obj	_	_
4	mé	mé	PRON	_	Number=Sing|Person=1	5	obj	_	_
5	sgaradh	scaradh	NOUN	_	VerbForm=Inf	3	acl	_	_
6	ó'n	ó	ADP	_	Number=Sing|PronType=Art	7	case	_	_
7	bhfear	fear	NOUN	_	Case=Nom|Definite=Def|Form=Ecl|Gender=Masc|Number=Sing	5	obl	_	_
8	beag	beag	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	7	amod	_	_
9	buidhe	buí	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	7	amod	_	SpaceAfter=No
10	,	,	PUNCT	_	_	12	punct	_	_
11	nach	nach	PART	_	PartType=Cmpl|Polarity=Neg	12	mark:prt	_	_
12	ndéanfá	déan	VERB	_	Form=Ecl|Mood=Cnd|Number=Sing|Person=2	2	parataxis	_	SpaceAfter=No
13	?	.	PUNCT	_	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 parataxis	color:blue
1	Gach	gach	DET	_	Definite=Def	2	det	_	_
2	smathamh	smeámh	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
3	a	a	PART	_	Form=Direct|PartType=Vb|PronType=Rel	4	nsubj	_	_
4	bhuaileas	buail	VERB	_	Form=Len|Mood=Ind|Tense=Pres	2	acl:relcl	_	_
5	na	na	DET	_	Definite=Def|Number=Plur|PronType=Art	6	det	_	_
6	billeóga	bileog	NOUN	_	Case=Nom|Gender=Fem|Number=Plur	4	obj	_	_
7	feósaidhe	feosaí	ADJ	_	Case=Nom|Gender=Fem|Number=Plur	6	amod	_	SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	_
9	déanann	déan	VERB	_	Mood=Ind|Tense=Pres	2	parataxis	_	_
10	siad	siad	PRON	_	Number=Plur|Person=3	9	nsubj	_	_
11	torann	torann	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	9	obj	_	_
12	aisteach	aisteach	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	11	amod	_	_
13	mar	mar	SCONJ	_	_	14	mark	_	_
14	bheadh	bí	VERB	_	Form=Len|Mood=Cnd	9	advcl	_	_
15	glugar	glugar	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	14	nsubj	_	_
16	an	an	DET	_	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	bháis	bás	NOUN	_	Case=Gen|Definite=Def|Form=Len|Gender=Masc|Number=Sing	15	nmod	_	_
18	ann	i	ADP	_	Gender=Masc|Number=Sing|Person=3	14	xcomp:pred	_	SpaceAfter=No
19	.	.	PUNCT	_	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 23 parataxis	color:blue
1	Bhamar	bí	VERB	_	Form=Len|Mood=Ind|Number=Plur|Person=1|Tense=Past	0	root	_	_
2	ag	ag	ADP	_	_	3	case	_	_
3	tabhairt	tabhairt	NOUN	_	VerbForm=Vnoun	1	xcomp	_	_
4	mine	min	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	3	obj	_	_
5	buidhe	buí	ADJ	_	Case=Gen|Gender=Fem|Number=Sing	4	amod	_	_
6	amach	amach	ADV	_	_	3	advmod	_	_
7	andiu	inniu	ADV	_	_	1	advmod	_	_
8	ar	ar	ADP	_	_	10	case	_	_
9	tri	trí	NUM	_	NumType=Card	10	nummod	_	_
10	leath-phinginighe	leathphingin	NOUN	_	Case=Nom|Gender=Fem|Number=Plur	3	obl	_	_
11	an	an	DET	_	Definite=Def|Number=Sing|PronType=Art	12	det	_	_
12	pota	pota	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	10	nmod	_	SpaceAfter=No
13	:	:	PUNCT	_	_	14	punct	_	SpacesAfter=\n
14	ta	bí	VERB	_	Mood=Ind|Tense=Pres	1	parataxis	_	_
15	spirid	sprid	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	14	nsubj	_	_
16	na	an	DET	_	Case=Gen|Definite=Def|Number=Plur|PronType=Art	17	det	_	_
17	nGaodhal	Gael	NOUN	_	Case=Gen|Definite=Def|Form=Ecl|Gender=Masc|NounType=Weak|Number=Plur	15	nmod	_	_
18	briste	briste	ADJ	_	VerbForm=Part	14	xcomp:pred	_	_
19	sios	síos	ADV	_	_	18	advmod	_	_
20	go	go	PART	_	PartType=Ad	21	mark:prt	_	_
21	mor	mór	ADJ	_	Degree=Pos	18	advmod	_	SpaceAfter=No
22	:	:	PUNCT	_	_	23	punct	_	_
23	trosga	troscadh	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	1	parataxis	_	SpaceAfter=No
24	.	.	PUNCT	_	_	1	punct	_	SpacesAfter=\n

~~~


