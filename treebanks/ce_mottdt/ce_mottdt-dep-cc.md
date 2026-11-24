---
layout: base
title:  'Statistics of cc in UD_Chechen-MottDT'
udver: '2'
---

## Treebank Statistics: UD_Chechen-MottDT: Relations: `cc`

This relation is universal.

62 nodes (2%) are attached to their parents as `cc`.

55 instances of `cc` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.12903225806452.

The following 4 pairs of parts of speech are connected with `cc`: <tt><a href="ce_mottdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ce_mottdt-pos-CCONJ.html">CCONJ</a></tt> (56; 90% instances), <tt><a href="ce_mottdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ce_mottdt-pos-CCONJ.html">CCONJ</a></tt> (4; 6% instances), <tt><a href="ce_mottdt-pos-ADV.html">ADV</a></tt>-<tt><a href="ce_mottdt-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances), <tt><a href="ce_mottdt-pos-AUX.html">AUX</a></tt>-<tt><a href="ce_mottdt-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cc	color:blue
1	saara	saara	NOUN	_	Case=Abs	3	obj	_	MSeg=saara|Gloss=stick
2	'a	'a	CCONJ	_	_	3	cc	_	MSeg='a|Gloss=CL
3	boqqush	daqqa	VERB	_	ConvType=Sim|NounClass=Bclass|VerbForm=Conv	0	root	_	MSeg=b-oqqu-sh|Gloss=B-take-CVBsim

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 cc	color:blue
1	t'ejeecha	daa	VERB	_	ConvType=Temp|NounClass=Jclass|VerbForm=Conv	10	advcl	_	MSeg=t'e-j-eecha|Gloss=on-J-come.CVBtemp
2	cunna	iza	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	10	obl	_	MSeg=cunna|Gloss=3SG.DAT
3	shie	shie	PRON	_	Number=Sing|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes	4	nmod	_	MSeg=shie|Gloss=3SG.REFL.POSS
4	jiwi	jow	NOUN	_	Case=Gen	5	nmod	_	MSeg=jiwi|Gloss=girl.GEN
5	kyg	kyg	NOUN	_	Case=Abs	10	obj	_	MSeg=kyg|Gloss=hand
6	a	a	CCONJ	_	_	9	cc	_	MSeg='a|Gloss=CL
7	mezhe	mezhenash	X	_	_	9	reparandum	_	MSeg=mezhe...|Gloss=mezhe...|SpaceAfter=No
8	…	…	PUNCT	_	_	7	punct	_	_
9	mezhenash	mezhenash	NOUN	_	Case=Abs|Number=Plur	5	conj	_	MSeg=mezhenash|Gloss=body.part.PL
10	jouzina	douza	VERB	_	Aspect=Perf|NounClass=Jclass	0	root	_	MSeg=j-ouzi-na|Gloss=J-recognize-PRF
11	cun	iza	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	10	obl	_	MSeg=cunna|Gloss=3SG.DAT

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 cc	color:blue
1	t'aaq	t'aaqqa	ADV	_	_	2	advmod	_	MSeg=t'aaq|Gloss=then
2	boelxash	daxa	VERB	_	ConvType=Sim|NounClass=Bclass|VerbForm=Conv	20	advcl	_	MSeg=b-oelx-ash|Gloss=B-go-CVBsim|SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	boelxash	daxa	VERB	_	ConvType=Sim|NounClass=Bclass|VerbForm=Conv	5	xcomp	_	MSeg=b-oelxa-sh|Gloss=B-go-CVBsim
5	laettash	laetta	VERB	_	ConvType=Sim|VerbForm=Conv	20	advcl	_	MSeg=laetta-sh|Gloss=stand-CVBsim
6	xienahw	xaan	ADV	_	_	4	advmod	_	MSeg=xienahw|Gloss=time.ADV|SpaceAfter=No
7	,	,	PUNCT	_	_	5	punct	_	_
8	borz	borz	NOUN	_	Case=Abs	9	obj	_	MSeg=borz|Gloss=wolf
9	gi	gi	ADV	_	_	20	advcl	_	MSeg=gi|Gloss=back.ADV
10	'a	'a	CCONJ	_	_	9	cc	_	MSeg='a|Gloss=CL
11	jollash	du	AUX	_	ConvType=Sim|NounClass=Jclass|VerbForm=Conv	9	cop	_	MSeg=j-olla-sh|Gloss=J-be-CVBsim|SpaceAfter=No
12	,	,	PUNCT	_	_	9	punct	_	_
13	voqqa	doqqa	ADJ	_	NounClass=Vclass	14	amod	_	MSeg=v-oqqa|Gloss=V-old
14	stag	stag	NOUN	_	Case=Abs	15	nsubj	_	MSeg=stag|Gloss=person
15	voodash	daxa	VERB	_	ConvType=Sim|NounClass=Vclass|VerbForm=Conv	20	advcl	_	MSeg=v-ooda-sh|Gloss=V-go-CVBsim|SpaceAfter=No
16	,	,	PUNCT	_	_	15	punct	_	_
17	cwan	cwa	NUM	_	Case=Dat	19	nummod	_	MSeg=cwa-na|Gloss=one-DAT
18	gourie	gour	NOUN	_	Case=Gen	19	nmod	_	MSeg=gour-i|Gloss=horse-GEN
19	wun	wu	NOUN	_	Case=Dat	20	obl	_	MSeg=wu-na|Gloss=holster-DAT
20	t'eqaechcha	t'eqaacha	VERB	_	Aspect=Perf	0	root	_	MSeg=t'e-qaechcha|Gloss=on-arrive.PRF|SpaceAfter=No
21	.	.	PUNCT	_	_	20	punct	_	SpaceAfter=No

~~~


