---
layout: base
title:  'Statistics of aux in UD_Czech-Poetry'
udver: '2'
---

## Treebank Statistics: UD_Czech-Poetry: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="cs_poetry-dep-aux-pass.html">aux:pass</a></tt>.

61 nodes (1%) are attached to their parents as `aux`.

35 instances of `aux` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.45901639344262.

The following 4 pairs of parts of speech are connected with `aux`: <tt><a href="cs_poetry-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_poetry-pos-AUX.html">AUX</a></tt> (56; 92% instances), <tt><a href="cs_poetry-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_poetry-pos-AUX.html">AUX</a></tt> (2; 3% instances), <tt><a href="cs_poetry-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_poetry-pos-AUX.html">AUX</a></tt> (2; 3% instances), <tt><a href="cs_poetry-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_poetry-pos-AUX.html">AUX</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 aux	color:blue
1	Do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	2	case	_	_
2	obzoru	obzor	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	10	obl	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	6	punct	_	_
4	jenž	jenž	PRON	PJYS1----------	Case=Nom|Gender=Masc|Number=Sing|PrepCase=Npr|PronType=Rel	6	obj	_	_
5	všecek	všecek	DET	Db-------------	Case=Nom|Gender=Masc|Number=Sing|PronType=Tot	6	advcl	_	_
6	zatemněn	zatemněný	ADJ	VsYS---XX-AP---	Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short|VerbForm=Part|Voice=Pass	2	acl:relcl	_	SpaceAfter=No
7	,	,	PUNCT	Z:-------------	_	6	punct	_	_
8	bylo	být	AUX	VpNS---XR-AA---	Aspect=Imp|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	10	aux	_	_
9	ti	ty	PRON	PH-S3--2-------	Case=Dat|Number=Sing|Person=2|PronType=Prs|Variant=Short	10	obl:arg	_	_
10	zříti	zřít	VERB	Vf--------A---2	Aspect=Imp|Polarity=Pos|VerbForm=Inf	0	root	_	_
11	zraky	zrak	NOUN	NNIP7-----A----	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur|Polarity=Pos	10	obl	_	_
12	hynoucími	hynoucí	ADJ	AGIP7-----A----	Animacy=Inan|Aspect=Imp|Case=Ins|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	11	amod	_	SpaceAfter=No
13	!	!	PUNCT	Z:-------------	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux	color:blue
1	Ó	ó	INTJ	II-------------	_	6	dep	_	_
2	básníku	básník	NOUN	NNMS5-----A----	Animacy=Anim|Case=Voc|Gender=Masc|Number=Sing|Polarity=Pos	6	vocative	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	6	punct	_	_
4	ty	ty	PRON	Vi-S---2--A----	Case=Nom|Number=Sing|Person=2|PronType=Prs	6	nsubj	_	_
5	jsi	být	AUX	Vi-S---2--A----	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|VerbForm=Fin	6	aux	_	_
6	roven	rovný	ADJ	ACYS------A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|Variant=Short	0	root	_	_
7	jemu	on	PRON	PPZS3--3-------	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	6	obl:arg	_	SpaceAfter=No
8	!	!	PUNCT	Z:-------------	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 aux	color:blue
1	To	ten	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	2	obj	_	_
2	zasloužil	zasloužit	VERB	VpYS---XR-AA---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
3	si	se	PRON	P7-X3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	2	expl:pv	_	_
4	plným	plný	ADJ	AANS7----1A----	Case=Ins|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	5	amod	_	_
5	právem	právo	NOUN	NNNS7-----A----	Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos	2	obl	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	10	punct	_	_
7	proč	proč	ADV	Db-------------	PronType=Int	10	advmod	_	_
8	nesmrtelných	smrtelný	ADJ	AAMP2----1N----	Animacy=Anim|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Neg	11	amod	_	_
9	být	být	AUX	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	11	aux	_	_
10	chtěl	chtít	VERB	VpYS---XR-AA---	Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	2	parataxis	_	_
11	druh	druh	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	10	xcomp	_	SpaceAfter=No
12	?	?	PUNCT	Z:-------------	_	2	punct	_	_

~~~


