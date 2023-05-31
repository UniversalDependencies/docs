---
layout: base
title:  'Statistics of expl:pv in UD_Czech-FicTree'
udver: '2'
---

## Treebank Statistics: UD_Czech-FicTree: Relations: `expl:pv`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `expl`: <tt><a href="cs_fictree-dep-expl-pass.html">expl:pass</a></tt>.

4577 nodes (3%) are attached to their parents as `expl:pv`.

3039 instances of `expl:pv` (66%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.81275944942102.

The following 3 pairs of parts of speech are connected with `expl:pv`: <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt> (4525; 99% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt> (50; 1% instances), <tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 expl:pv	color:blue
1	Daly	dát	VERB	VpFP----R-AA---	Gender=Fem|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
2	jsme	být	AUX	VB-P---1P-AA---	Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux	1:aux	_
3	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pv	1:expl:pv	_
4	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	5	case	5:case	_
5	řeči	řeč	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	1	obl:arg	1:obl:arg:do:gen	SpaceAfter=No
6	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 expl:pv	color:blue
1	Cítil	cítit	VERB	VpMS----R-AA---	Animacy=Anim|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
2	ho	on	PRON	PHIS4--3-------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Variant=Short	1	obj	1:obj	_
3	sice	sice	CCONJ	J^-------------	_	8	cc	8:cc	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	8	punct	8:punct	_
5	ale	ale	CCONJ	J^-------------	_	8	cc	8:cc	_
6	byl	být	AUX	VpMS----R-AA---	Animacy=Anim|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	8	cop	8:cop	_
7	si	se	PRON	P7--3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	8	expl:pv	8:expl:pv	_
8	jistý	jistý	ADJ	AAMS1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	1	conj	0:root|1:conj	SpaceAfter=No
9	,	,	PUNCT	Z:-------------	_	12	punct	12:punct	_
10	že	že	SCONJ	J,-------------	_	12	mark	12:mark	_
11	bude	být	AUX	VB-S---3F-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	12	cop	12:cop	_
12	schopen	schopný	ADJ	ACMS------A----	Animacy=Anim|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short	8	ccomp	8:ccomp	_
13	ho	on	PRON	PHIS4--3-------	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Variant=Short	14	obj	14:obj	_
14	nést	nést	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	12	xcomp	12:xcomp	SpaceAfter=No
15	.	.	PUNCT	Z:-------------	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 3 expl:pv	color:blue
1	Jednoho	jeden	NUM	ClIS2----------	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|NumForm=Word|NumType=Card|NumValue=1,2,3	2	nummod	2:nummod	_
2	dne	den	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	4	obl	4:obl:gen	_
3	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	10	expl:pv	10:expl:pv	_
4	dozvěděl	dozvědět	VERB	VpMS----R-AA---	Animacy=Anim|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	9	punct	9:punct	_
6	že	že	SCONJ	J,-------------	_	9	mark	9:mark	_
7	městem	město	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos	9	obl	9:obl:ins	_
8	bude	být	AUX	VB-S---3F-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	9	aux	9:aux	_
9	projíždět	projíždět	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	4	ccomp	4:ccomp	_
10	mistr	mistr	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	9	nsubj	9:nsubj	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	4	punct	4:punct	_

~~~


