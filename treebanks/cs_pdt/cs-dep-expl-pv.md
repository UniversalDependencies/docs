---
layout: base
title:  'Statistics of expl:pv in UD_Czech'
udver: '2'
---

## Treebank Statistics: UD_Czech: Relations: `expl:pv`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `expl`: <tt><a href="cs-dep-expl-pass.html">expl:pass</a></tt>.

17180 nodes (1%) are attached to their parents as `expl:pv`.

14052 instances of `expl:pv` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.36711292200233.

The following 4 pairs of parts of speech are connected with `expl:pv`: <tt><a href="cs-pos-VERB.html">VERB</a></tt>-<tt><a href="cs-pos-PRON.html">PRON</a></tt> (16638; 97% instances), <tt><a href="cs-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs-pos-PRON.html">PRON</a></tt> (538; 3% instances), <tt><a href="cs-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="cs-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 expl:pv	color:blue
1	Z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	2	case	_	LId=z-1
2	kukly	kukla	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	4	obl	_	_
3	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	4	expl:pv	_	LGloss=(zvr._zájmeno/částice)
4	vyklubal	vyklubat	VERB	VpYS---XR-AA---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
5	motýl	motýl	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	4	nsubj	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 8 expl:pv	color:blue
1	Dá	dát	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pass	_	LGloss=(zvr._zájmeno/částice)
3	určit	určit	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	1	xcomp	_	_
4	nějaký	nějaký	DET	PZYS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	5	det	_	_
5	mezník	mezník	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	1	nsubj:pass	_	SpaceAfter=No
6	,	,	PUNCT	Z:-------------	_	13	punct	_	_
7	kdy	kdy	ADV	Db-------------	PronType=Int,Rel	13	advmod	_	_
8	si	se	PRON	P7-X3----------	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	13	expl:pv	_	LGloss=(zvr._zájmeno/částice)
9	je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	13	cop	_	_
10	nevidomý	nevidomý	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	13	nsubj	_	_
11	sám	sám	DET	PLYS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Emp	10	xcomp	_	LGloss=(samotný)
12	sebou	se	PRON	P6-X7----------	Case=Ins|PronType=Prs|Reflex=Yes	13	obj	_	LGloss=(zvr._zájmeno/částice)
13	jistý	jistý	ADJ	AAMS1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	5	acl	_	SpaceAfter=No
14	?	?	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 expl:pv	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	3	case	_	LId=v-1
2	lidové	lidový	ADJ	AAFS6----1A----	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	3	amod	_	_
3	pověře	pověra	NOUN	NNFS6-----A----	Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos	7	obl	_	_
4	se	se	PRON	P7-X4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	7	expl:pv	_	LGloss=(zvr._zájmeno/částice)
5	Jan	Jan	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing|Polarity=Pos	7	nsubj	_	_
6	stal	stát	AUX	VpYS---XR-AA---	Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	7	cop	_	LId=stát-2|LGloss=(něco_se_přihodilo)
7	ochráncem	ochránce	NOUN	NNMS7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	0	root	_	_
8	mostu	most	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Polarity=Pos	7	nmod	_	_
9	a	a	CCONJ	J^-------------	_	10	cc	_	LId=a-1
10	pánem	pán	NOUN	NNMS7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	7	conj	_	_
11	nad	nad	ADP	RR--7----------	AdpType=Prep|Case=Ins	12	case	_	LId=nad-1
12	řekou	řeka	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Number=Sing|Polarity=Pos	10	nmod	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	7	punct	_	_

~~~


