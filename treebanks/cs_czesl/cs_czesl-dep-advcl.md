---
layout: base
title:  'Statistics of advcl in UD_Czech-CzeSL'
udver: '2'
---

## Treebank Statistics: UD_Czech-CzeSL: Relations: `advcl`

This relation is universal.
There are 1 language-specific subtypes of `advcl`: <tt><a href="cs_czesl-dep-advcl-pred.html">advcl:pred</a></tt>.

10 nodes (0%) are attached to their parents as `advcl`.

6 instances of `advcl` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.8.

The following 7 pairs of parts of speech are connected with `advcl`: <tt><a href="cs_czesl-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_czesl-pos-VERB.html">VERB</a></tt> (4; 40% instances), <tt><a href="cs_czesl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_czesl-pos-AUX.html">AUX</a></tt> (1; 10% instances), <tt><a href="cs_czesl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_czesl-pos-DET.html">DET</a></tt> (1; 10% instances), <tt><a href="cs_czesl-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_czesl-pos-ADJ.html">ADJ</a></tt> (1; 10% instances), <tt><a href="cs_czesl-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_czesl-pos-PROPN.html">PROPN</a></tt> (1; 10% instances), <tt><a href="cs_czesl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_czesl-pos-PROPN.html">PROPN</a></tt> (1; 10% instances), <tt><a href="cs_czesl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_czesl-pos-VERB.html">VERB</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 advcl	color:blue
1	Ráda	rád	ADJ	ACQW------A----	Case=Nom|Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Variant=Short	3	xcomp	_	_
2	tam	tam	ADV	Db-------------	PronType=Dem	3	advmod	_	_
3	jdu	jít	VERB	VB-S---1P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	5	case	_	_
5	procházku	procházka	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing	3	obl:arg	_	_
6	když	když	SCONJ	J,-------------	_	7	mark	_	_
7	chci	chtít	VERB	VB-S---1P-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	advcl	_	_
8	samoty	samota	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Number=Plur	7	obj	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 3 advcl	color:blue
1	Aby	aby	SCONJ	J,-------------	_	3	mark	_	_
2	by	být	AUX	Vc-------------	Aspect=Imp|Mood=Cnd|VerbForm=Fin	3	aux	_	_
3	bylo	být	AUX	VpNS---XR-AA---	Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	9	advcl	_	_
4	špapné	špatný	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	5	amod	_	_
5	počasi	počasí	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing	3	nsubj	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	3	punct	_	_
7	byl	být	AUX	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	9	cop	_	_
8	byste	být	AUX	Vc-P---2-------	Aspect=Imp|Mood=Cnd|Number=Plur|Person=2|VerbForm=Fin	9	aux	_	_
9	přípraven	připravený	ADJ	VsYS---XX-AP---	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 advcl	color:blue
1	Můj	můj	DET	PSYS1-S1-------	Case=Nom|Gender=Masc|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	2	det	_	_
2	život	život	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
3	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	4	case	_	_
4	Praze	Praha	PROPN	NNFS6-----A----	Case=Loc|Gender=Fem|NameType=Geo|Number=Sing	2	nmod	_	_
5	vůbec	vůbec	ADV	Db-------------	Degree=Pos|Polarity=Pos	7	advmod	_	_
6	není	být	AUX	VB-S---3P-NA---	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
7	stejný	stejný	ADJ	AAIS1----1A----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	0	root	_	_
8	jaky	jaký	DET	P4YS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Int,Rel	7	advcl	_	_
9	byl	být	AUX	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	8	cop	_	_
10	v	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	11	case	_	_
11	Biškeku	Biškek	PROPN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|NameType=Geo|Number=Sing	8	obl	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	7	punct	_	_

~~~


