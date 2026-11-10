---
layout: base
title:  'Statistics of ccomp in UD_Chechen-MottDT'
udver: '2'
---

## Treebank Statistics: UD_Chechen-MottDT: Relations: `ccomp`

This relation is universal.
There are 1 language-specific subtypes of `ccomp`: <tt><a href="ce_mottdt-dep-ccomp-reported.html">ccomp:reported</a></tt>.

4 nodes (0%) are attached to their parents as `ccomp`.

4 instances of `ccomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.75.

The following 3 pairs of parts of speech are connected with `ccomp`: <tt><a href="ce_mottdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ce_mottdt-pos-VERB.html">VERB</a></tt> (2; 50% instances), <tt><a href="ce_mottdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ce_mottdt-pos-NOUN.html">NOUN</a></tt> (1; 25% instances), <tt><a href="ce_mottdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ce_mottdt-pos-PRON.html">PRON</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 ccomp	color:blue
1	mich	micha	ADV	_	_	2	advmod	_	MSeg=mich|Gloss=where
2	jaxana	daxa	VERB	_	ConvType=Ant|NounClass=Jclass|VerbForm=Conv	4	ccomp	_	MSeg=j-axa-na|Gloss=J-go-CVBant|SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	caxa'a	xa'a	VERB	_	Polarity=Neg|Tense=Pres	0	root	_	MSeg=ca-xa'a|Gloss=NEG-know.PRS
5	shiina	shie	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	4	obl	_	MSeg=shiina|Gloss=3SG.REFL.DAT|SpaceAfter=No
6	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 ccomp	color:blue
1	wynchoghol	wa	VERB	_	VerbForm=Conv	11	advcl	_	MSeg=wynchoghol|Gloss=stay.CVB
2	dwa	dwa	ADV	_	_	1	advmod	_	MSeg=dwa|Gloss=away|SpaceAfter=No
3	,	,	PUNCT	_	_	1	punct	_	_
4	chwannie	chwannie	DET	_	PronType=Neg	5	det	_	MSeg=chwannie|Gloss=nowhere
5	mettiahw	mettig	NOUN	_	Case=Loc	9	ccomp	_	MSeg=mettiahw|Gloss=place.LOC
6	hara	hara	PRON	_	PronType=Dem	5	nsubj	_	MSeg=hara|Gloss=DEM
7	jar	du	AUX	_	NounClass=Jclass|Tense=Past	5	cop	_	MSeg=j-ar|Gloss=J-be.PST
8	q	q	PART	_	_	9	advmod:emph	_	MSeg=q|Gloss=CL
9	aella	aala	VERB	_	Aspect=Perf	10	acl	_	MSeg=aella|Gloss=say.PRF
10	zhilje	zhilje	NOUN	_	Case=Abs	11	obj	_	MSeg=zhilje|Gloss=housing.ABS
11	cakarosh	karada	VERB	_	ConvType=Sim|Polarity=Neg|VerbForm=Conv	0	root	_	MSeg=ca-karo-sh|Gloss=NEG-find-CVBsim
12	xilla	xila	AUX	_	Aspect=Perf	11	aux	_	MSeg=xilla|Gloss=be.PRF
13	cun	iza	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	11	nsubj	_	MSeg=cunna|Gloss=3SG.DAT|SpaceAfter=No
14	.	.	PUNCT	_	_	11	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 ccomp	color:blue
1	aara	aara	ADV	_	_	3	advmod	_	MSeg=aara|Gloss=outside
2	a	a	CCONJ	_	_	3	cc	_	MSeg='a|Gloss=CL
3	jaalie	daala	VERB	_	ConvType=Imm|NounClass=Jclass|VerbForm=Conv	11	ccomp:reported	_	MSeg=j-aalie|Gloss=J-get.CVBimm
4	vai	vai	PRON	_	Case=Gen|Number=Plur|Person=1|PronType=Prs	5	nmod	_	MSeg=vai|Gloss=1PL.GEN
5	txou	txou	NOUN	_	Case=Abs	7	obl	_	MSeg=txou|Gloss=roof
6	t'era	t'era	ADP	_	AdpType=Post	5	case	_	MSeg=t'era|Gloss=on
7	derg	du	AUX	_	NounClass=Dclass	8	nsubj	_	MSeg=d-erg|Gloss=D-be.NMZ
8	hu	hu	PRON	_	PronType=Int	10	ccomp	_	MSeg=hu|Gloss=what
9	du	du	AUX	_	NounClass=Dclass|Tense=Pres	8	cop	_	MSeg=d-u|Gloss=D-be.PRS
10	hwazh	hwazha	VERB	_	Mood=Imp	3	parataxis	_	MSeg=hwazha|Gloss=look.IMP
11	aella	aala	VERB	_	Aspect=Perf	0	root	_	MSeg=aella|Gloss=say.PRF

~~~


