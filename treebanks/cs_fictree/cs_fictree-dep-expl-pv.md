---
layout: base
title:  'Statistics of expl:pv in UD_Czech-FicTree'
udver: '2'
---

## Treebank Statistics: UD_Czech-FicTree: Relations: `expl:pv`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `expl`: <tt><a href="cs_fictree-dep-expl-pass.html">expl:pass</a></tt>.

4577 nodes (3%) are attached to their parents as `expl:pv`.

3040 instances of `expl:pv` (66%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.8116670308062.

The following 3 pairs of parts of speech are connected with `expl:pv`: <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt> (4524; 99% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt> (51; 1% instances), <tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 expl:pv	color:blue
1	Daly	dát	VERB	VpFP----R-AA---	Gender=Fem|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	jsme	být	AUX	VB-P---1P-AA---	Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux	_	_
3	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pv	_	_
4	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	5	case	_	_
5	řeči	řeč	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	1	obl:arg	_	SpaceAfter=No
6	.	.	PUNCT	Z:-------------	_	1	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 expl:pv	color:blue
1	Cítil	cítit	VERB	VpMS----R-AA---	Animacy=Anim|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	ho	on	PRON	PHIS4--3-------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Variant=Short	1	obj	_	_
3	sice	sice	CCONJ	J^-------------	_	8	cc	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	8	punct	_	_
5	ale	ale	CCONJ	J^-------------	_	8	cc	_	_
6	byl	být	AUX	VpMS----R-AA---	Animacy=Anim|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	8	cop	_	_
7	si	se	PRON	P7--3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	8	expl:pv	_	_
8	jistý	jistý	ADJ	AAMS1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	1	conj	_	SpaceAfter=No
9	,	,	PUNCT	Z:-------------	_	12	punct	_	_
10	že	že	SCONJ	J,-------------	_	12	mark	_	_
11	bude	být	AUX	VB-S---3F-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	12	cop	_	_
12	schopen	schopný	ADJ	ACMS------A----	Animacy=Anim|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short	8	ccomp	_	_
13	ho	on	PRON	PHIS4--3-------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Variant=Short	14	obj	_	_
14	nést	nést	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	12	xcomp	_	SpaceAfter=No
15	.	.	PUNCT	Z:-------------	_	1	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 3 expl:pv	color:blue
1	Jednoho	jeden	NUM	ClIS2----------	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|NumForm=Word|NumType=Card|NumValue=1,2,3	2	nummod	_	_
2	dne	den	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	4	obl	_	_
3	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	10	expl:pv	_	_
4	dozvěděl	dozvědět	VERB	VpMS----R-AA---	Animacy=Anim|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	9	punct	_	_
6	že	že	SCONJ	J,-------------	_	9	mark	_	_
7	městem	město	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos	9	obl	_	_
8	bude	být	AUX	VB-S---3F-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	9	aux	_	_
9	projíždět	projíždět	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	4	ccomp	_	_
10	mistr	mistr	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	9	nsubj	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	4	punct	_	SpaceAfter=No

~~~


