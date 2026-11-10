---
layout: base
title:  'Statistics of acl:relcl in UD_Chechen-MottDT'
udver: '2'
---

## Treebank Statistics: UD_Chechen-MottDT: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="ce_mottdt-dep-acl.html">acl</a></tt>.

12 nodes (0%) are attached to their parents as `acl:relcl`.

9 instances of `acl:relcl` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.91666666666667.

The following 5 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="ce_mottdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ce_mottdt-pos-VERB.html">VERB</a></tt> (6; 50% instances), <tt><a href="ce_mottdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ce_mottdt-pos-NUM.html">NUM</a></tt> (2; 17% instances), <tt><a href="ce_mottdt-pos-PRON.html">PRON</a></tt>-<tt><a href="ce_mottdt-pos-VERB.html">VERB</a></tt> (2; 17% instances), <tt><a href="ce_mottdt-pos-PRON.html">PRON</a></tt>-<tt><a href="ce_mottdt-pos-ADV.html">ADV</a></tt> (1; 8% instances), <tt><a href="ce_mottdt-pos-PRON.html">PRON</a></tt>-<tt><a href="ce_mottdt-pos-AUX.html">AUX</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 acl:relcl	color:blue
1	naana	naana	NOUN	_	Case=Abs	2	obj	_	MSeg=naana|Gloss=mother
2	jolchonga	du	VERB	_	Case=All|NounClass=Jclass	6	reparandum	_	MSeg=j-olchunga|Gloss=J-be.NMZ.ALL|SpaceAfter=No
3	…	…	PUNCT	_	_	2	punct	_	SpaceAfter=No
4	,	,	PUNCT	_	_	2	punct	_	_
5	naana	naana	NOUN	_	Case=Abs	6	obj	_	MSeg=naana|Gloss=mother
6	jolchunga	du	VERB	_	Case=All|NounClass=Jclass|VerbForm=Vnoun	8	acl:relcl	_	MSeg=j-olchunga|Gloss=J-be.NMZ.ALL
7	i	i	DET	_	PronType=Dem	8	det	_	MSeg=i|Gloss=DEM
8	jow	jow	NOUN	_	Case=Abs	9	obj	_	MSeg=jow|Gloss=girl
9	jeexa	daaxa	VERB	_	NounClass=Jclass|VerbForm=Inf	10	advcl	_	MSeg=j-eexa|Gloss=J-ask.for.INF
10	baxna	daxa	VERB	_	Aspect=Perf|NounClass=Bclass	0	root	_	MSeg=b-ax-na|Gloss=B-go-PRF
11	ysh	ysh	PRON	_	Case=Abs|Number=Plur|Person=3|PronType=Prs	10	nsubj	_	MSeg=ysh|Gloss=3PL.ABS|SpaceAfter=No
12	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 acl:relcl	color:blue
1	t'aaq	t'aaqqa	ADV	_	_	6	advmod	_	MSeg=t'aaq|Gloss=then
2	jux	jux	ADV	_	_	6	advmod	_	MSeg=jux|Gloss=then
3	qo'ologh	qo'ologh	NUM	_	_	5	acl:relcl	_	MSeg=qo'ologh|Gloss=third
4	jolu	du	AUX	_	NounClass=Jclass|VerbForm=Part	3	aux	_	MSeg=j-olu|Gloss=J-be.PTCP
5	jowie	jow	NOUN	_	Case=All	6	iobj	_	MSeg=jow-ie|Gloss=girl-ALL
6	aella	aala	VERB	_	Aspect=Perf	0	root	_	MSeg=aella|Gloss=say.PRF
7	aaa	aaa	X	_	_	6	discourse	_	MSeg=[aaa]|Gloss=[aaa]
8	"	"	PUNCT	_	_	9	punct	_	SpaceAfter=No
9	Jalie	daa	VERB	_	Mood=Imp|NounClass=Jclass	6	ccomp:reported	_	MSeg=j-alie|Gloss=J-go.IMP
10	NAME	NAME	PROPN	_	Case=Abs	9	vocative	_	MSeg=NAME|Gloss=NAME|SpaceAfter=No
11	!	!	PUNCT	_	_	9	punct	_	SpaceAfter=No
12	"	"	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 acl:relcl	color:blue
1	hwynax	hwun	NOUN	_	Case=Lat	2	obl	_	MSeg=hwynax|Gloss=forest.LAT
2	vaxan	daxa	VERB	_	ConvType=Ant|NounClass=Vclass|VerbForm=Conv	4	acl:relcl	_	MSeg=v-axa-n|Gloss=V-go-CVBant
3	volu	du	AUX	_	NounClass=Vclass|VerbForm=Part	2	aux	_	MSeg=v-olu|Gloss=V-be.PTCP
4	iza	iza	PRON	_	Case=Abs|Number=Sing|Person=3|PronType=Prs	8	dislocated	_	MSeg=iza|Gloss=3SG.ABS
5	shie	shaa	PRON	_	Number=Sing|Person=3|PronType=Prs|Reflex=Yes	8	nsubj	_	MSeg=shie|Gloss=3SG.REFL
6	chwacca	chwacca	ADV	_	_	8	advmod	_	MSeg=chwacca|Gloss=one.by.one
7	stom	stom	NOUN	_	Case=Abs	8	obj	_	MSeg=stom|Gloss=fruit
8	boqqush	daqqa	VERB	_	ConvType=Sim|NounClass=Bclass|VerbForm=Conv	0	root	_	MSeg=b-oqqu-sh|Gloss=B-take-CVBsim

~~~


