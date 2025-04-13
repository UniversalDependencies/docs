---
layout: base
title:  'Statistics of csubj in UD_Czech-CLTT'
udver: '2'
---

## Treebank Statistics: UD_Czech-CLTT: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="cs_cltt-dep-csubj-pass.html">csubj:pass</a></tt>.

54 nodes (0%) are attached to their parents as `csubj`.

52 instances of `csubj` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.5.

The following 4 pairs of parts of speech are connected with `csubj`: <tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (37; 69% instances), <tt><a href="cs_cltt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (14; 26% instances), <tt><a href="cs_cltt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="cs_cltt-pos-X.html">X</a></tt>-<tt><a href="cs_cltt-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 csubj	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	2	case	2:case	LId=v-1
2	případě	případ	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	9	obl	9:obl:v:loc	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	6	punct	6:punct	_
4	že	že	SCONJ	J,-------------	_	6	mark	6:mark	_
5	je	on	PRON	PPXP4--3-------	Case=Acc|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs	7	obj	7:obj	LId=on-1
6	nelze	lze	VERB	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	2	acl	2:acl:že	_
7	přiřadit	přiřadit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	6	csubj	6:csubj	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	6	punct	6:punct	_
9	uvedou	uvést	VERB	VB-P---3P-AA---	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
10	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	9	expl:pass	9:expl:pass	_
11	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	13	case	13:case	LId=v-1
12	provozní	provozní	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	13	amod	13:amod	_
13	činnosti	činnost	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing	9	obl	9:obl:v:loc	SpaceAfter=No
14	.	.	PUNCT	Z:-------------	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 csubj	color:blue
1	(5)	(5)	PUNCT	Z:-------------	_	4	punct	4:punct	_
2	Rezervy	rezerva	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur	5	obj	5:obj	_
3	není	být	AUX	VB-S---3P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	4:cop	_
4	možné	možný	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	0	root	0:root	_
5	používat	používat	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	4	csubj	4:csubj	_
6	k	k	ADP	RR--3----------	AdpType=Prep|Case=Dat	7	case	7:case	LId=k-1
7	úpravám	úprava	NOUN	NNFP3-----A----	Case=Dat|Gender=Fem|Number=Plur	5	obl	5:obl:k:dat	_
8	výše	výše	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing	7	nmod	7:nmod:gen	_
9	ocenění	ocenění	NOUN	NNNS2-----A----	Case=Gen|Gender=Neut|Number=Sing	8	nmod	8:nmod:gen	_
10	aktiv	aktivum	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur	9	nmod	9:nmod:gen	SpaceAfter=No|LId=aktivum-1
11	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 csubj	color:blue
1	(3)	(3)	PUNCT	Z:-------------	_	12	punct	12:punct	_
2	Nelze-li	Nelze-li	NOUN	NNNXX-----A----	Gender=Neut	12	obl	12:obl	_
3	skutečnou	skutečný	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	4	amod	4:amod	_
4	výši	výše	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	6	obj	6:obj	_
5	aktiv	aktivum	NOUN	NNNP2-----A----	Case=Gen|Gender=Neut|Number=Plur	4	nmod	4:nmod:gen	LId=aktivum-2
6	zjistit	zjistit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	2	csubj	2:csubj	_
7	postupem	postup	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	6	obl	6:obl:ins	_
8	podle	podle	ADP	RR--2----------	AdpType=Prep|Case=Gen	9	case	9:case	LId=podle-2
9	odstavce	odstavec	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	7	nmod	7:nmod:podle:gen	_
10	2	2	NUM	C}-------------	NumForm=Roman|NumType=Card	9	nummod	9:nummod	SpaceAfter=No
11	,	,	PUNCT	Z:-------------	_	2	punct	2:punct	_
12	stanoví	stanovit	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
13	hodnotu	hodnota	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	12	obj	12:obj	_
14	aktiv	aktivum	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	13	nmod	13:nmod:nom	_
15	celkem	celkem	ADV	Db-------------	_	13	advmod	13:advmod	_
16	orgán	orgán	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	12	nsubj	12:nsubj|22:nsubj	SpaceAfter=No
17	,	,	PUNCT	Z:-------------	_	22	punct	22:punct	_
18	který	který	DET	P4YS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Int,Rel	22	nsubj	16:ref	_
19	porušení	porušení	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing	22	obj	22:obj	_
20	právních	právní	ADJ	AAFP2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos	21	amod	21:amod	_
21	povinností	povinnost	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Number=Plur	19	nmod	19:nmod:gen	_
22	projednává	projednávat	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	16	acl:relcl	16:acl:relcl	SpaceAfter=No
23	,	,	PUNCT	Z:-------------	_	22	punct	22:punct	_
24	kvalifikovaným	kvalifikovaný	ADJ	AAIS7----1A----	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	25	amod	25:amod	_
25	odhadem	odhad	NOUN	NNIS7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	12	obl	12:obl:ins	SpaceAfter=No
26	.	.	PUNCT	Z:-------------	_	12	punct	12:punct	_

~~~


