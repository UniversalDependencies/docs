---
layout: base
title:  'Statistics of fixed in UD_Icelandic-Modern'
udver: '2'
---

## Treebank Statistics: UD_Icelandic-Modern: Relations: `fixed`

This relation is universal.

19 nodes (0%) are attached to their parents as `fixed`.

19 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `fixed`: <tt><a href="is_modern-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="is_modern-pos-SCONJ.html">SCONJ</a></tt> (11; 58% instances), <tt><a href="is_modern-pos-ADV.html">ADV</a></tt>-<tt><a href="is_modern-pos-SCONJ.html">SCONJ</a></tt> (8; 42% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 fixed	color:blue
1	Samgöngubætur	samgöngubót	NOUN	NS-N	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	15	nsubj	_	IFD_tag=nken|SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	_	IFD_tag
3	hvort	hvort	SCONJ	WQ	_	13	mark	_	IFD_tag=c
4	sem	sem	SCONJ	C	_	3	fixed	_	IFD_tag=c
5	eru	vera	AUX	BEPI	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	13	cop	_	IFD_tag=sfg3fn
6	vestan	vestan	ADP	P	_	13	case	_	IFD_tag=aa|SpaceAfter=No
7	,	,	PUNCT	,	_	6	punct	_	IFD_tag
8	norðan	norðan	ADP	P	_	13	case	_	IFD_tag=aa|SpaceAfter=No
9	,	,	PUNCT	,	_	8	punct	_	IFD_tag
10	sunnan	sunnan	ADP	P	_	13	case	_	IFD_tag=aa
11	eða	eða	CCONJ	CONJ	_	13	cc	_	IFD_tag=c
12	austan	austan	ADP	P	_	13	case	_	IFD_tag=ae
13	heiða	heiði	ADV	NS-G	Case=Gen|Definite=Ind|Number=Plur	15	advmod	_	IFD_tag=x|SpaceAfter=No
14	,	,	PUNCT	,	_	13	punct	_	IFD_tag
15	skipta	skipta	VERB	VBPI	VerbForm=Inf|Voice=Act	0	root	_	IFD_tag=sng
16	máli	mál	NOUN	N-D	Case=Dat|Definite=Ind|Gender=Neut|Number=Sing	15	obj	_	IFD_tag=nheþ
17	fyrir	fyrir	ADP	P	_	19	case	_	IFD_tag=ao
18	allt	allur	DET	Q-A	Case=Acc|Gender=Neut|Number=Sing|PronType=Ind	19	amod	_	IFD_tag=foheo
19	landið	land	NOUN	N-A	Case=Acc|Definite=Def|Gender=Neut|Number=Sing	15	obl	_	IFD_tag=nheog
20	og	og	CCONJ	CONJ	_	22	cc	_	IFD_tag=c
21	allt	allur	DET	Q-A	Case=Acc|Gender=Neut|Number=Sing|PronType=Ind	22	amod	_	IFD_tag=foheo
22	samfélagið	samfélag	NOUN	N-A	Case=Acc|Definite=Def|Gender=Neut|Number=Sing	19	conj	_	IFD_tag=nheog|SpaceAfter=No
23	.	.	PUNCT	.	_	22	punct	_	IFD_tag=.

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 18 fixed	color:blue
1	Það	það	PRON	PRO-N	Case=Nom|Gender=Neut|Number=Sing|PronType=Prs	0	root	_	IFD_tag=fphen
2	er	vera	AUX	BEPI	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	IFD_tag=sfg3en
3	raunverulega	raunverulega	ADV	ADV	_	1	advmod	_	IFD_tag=aa
4	þannig	þannig	ADV	ADV	_	1	advmod	_	IFD_tag=aa
5	að	að	SCONJ	C	_	21	mark	_	IFD_tag=cn
6	sérstaklega	sérstaklega	ADV	ADV	_	8	advmod	_	IFD_tag=aa
7	minni	lítill	ADJ	ADJ-N	Case=Nom|Definite=Def|Degree=Cmp|Gender=Masc|Number=Sing	8	amod	_	IFD_tag=lkenvm
8	hlutinn	hluti	NOUN	N-N	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	21	nsubj	_	IFD_tag=nkeng
9	það	það	PRON	PRO-N	Case=Nom|Gender=Neut|Number=Sing|PronType=Prs	10	nsubj	_	IFD_tag=fphen
10	hlýtur	hljóta	VERB	VBPI	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	21	parataxis	_	IFD_tag=sfg3en
11	alltaf	alltaf	ADV	ADV	_	10	advmod	_	IFD_tag=aa
12	að	að	PART	TO	_	10	acl	_	IFD_tag=cn
13	vera	vera	AUX	BE	VerbForm=Inf|Voice=Act	12	cop	_	IFD_tag=sng
14	þannig	þannig	ADV	ADV	_	12	advmod	_	IFD_tag=aa|SpaceAfter=No
15	,	,	PUNCT	,	_	14	punct	_	IFD_tag
16	hver	hver	PRON	WPRO-N	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	19	obj	_	IFD_tag=foken
17	svo	svo	ADV	ADV	_	19	advmod	_	IFD_tag=aa
18	sem	sem	SCONJ	C	_	17	fixed	_	IFD_tag=ct
19	þar	þar	ADV	ADV	_	10	advmod	_	IFD_tag=aa
20	er	vera	AUX	BEPI	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	19	cop	_	IFD_tag=sfg3en
21	hefur	hafa	AUX	HVPI	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	advcl	_	IFD_tag=sfg3en
22	ekki	ekki	ADV	NEG	_	21	advmod	_	IFD_tag=aa
23	mikið	mikill	DET	Q-A	Case=Acc|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	21	obj	_	IFD_tag=lheosf
24	um	um	ADP	P	_	25	case	_	IFD_tag=ao
25	málið	mál	NOUN	N-A	Case=Acc|Definite=Def|Gender=Neut|Number=Sing	27	obl	_	IFD_tag=nheog
26	að	að	PART	TO	_	27	mark	_	IFD_tag=cn
27	segja	segja	VERB	VB	VerbForm=Inf|Voice=Act	23	xcomp	_	IFD_tag=sng|SpaceAfter=No
28	.	.	PUNCT	.	_	27	punct	_	IFD_tag=.

~~~


