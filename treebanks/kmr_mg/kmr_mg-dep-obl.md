---
layout: base
title:  'Statistics of obl in UD_Kurmanji-MG'
udver: '2'
---

## Treebank Statistics: UD_Kurmanji-MG: Relations: `obl`

This relation is universal.
There are 1 language-specific subtypes of `obl`: <tt><a href="kmr_mg-dep-obl-dat.html">obl:dat</a></tt>.

7 nodes (0%) are attached to their parents as `obl`.

7 instances of `obl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.42857142857143.

The following 4 pairs of parts of speech are connected with `obl`: <tt><a href="kmr_mg-pos-VERB.html">VERB</a></tt>-<tt><a href="kmr_mg-pos-NOUN.html">NOUN</a></tt> (3; 43% instances), <tt><a href="kmr_mg-pos-VERB.html">VERB</a></tt>-<tt><a href="kmr_mg-pos-PRON.html">PRON</a></tt> (2; 29% instances), <tt><a href="kmr_mg-pos-AUX.html">AUX</a></tt>-<tt><a href="kmr_mg-pos-PRON.html">PRON</a></tt> (1; 14% instances), <tt><a href="kmr_mg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kmr_mg-pos-DET.html">DET</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 obl	color:blue
1	Li	li	ADP	pr	AdpType=Prep	2	case	_	_
2	Kurdistana	Kurdistan	PROPN	np	Case=Con|Definite=Def|Gender=Fem|Number=Sing	11	nmod	_	_
3	başûr	başûr	ADJ	adj	Degree=Pos	2	amod	_	_
4	bi	bi	ADP	pr	AdpType=Prep	5	case	_	_
5	navê	nav	NOUN	n	Case=Con|Definite=Def|Gender=Masc|Number=Sing	11	nmod	_	_
6	Mam	mam	NOUN	n	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	5	nmod:poss	_	_
7	Azad	azad	ADJ	adj	Degree=Pos	6	flat	_	_
8	tê	hatin	VERB	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	aux	_	_
9	bi	bi	ADP	pr	AdpType=Prep	10	case	_	_
10	nav	nav	NOUN	n	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	11	obl	_	_
11	kirin	navkirin	VERB	vblex	VerbForm=Inf	0	root	_	SpaceAfter=No
12	.	.	PUNCT	sent	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 obl	color:blue
1	Lêbelê	lêbelê	ADV	adv	_	7	advmod	_	_
2	di	di	ADP	pr	AdpType=Prep	3	case	_	_
3	dawiyê	dawî	NOUN	n	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	7	nmod	_	_
4	de	de	ADP	post	AdpType=Post	3	case	_	_
5	daxwaza	daxwaz	NOUN	n	Case=Con|Definite=Def|Gender=Fem|Number=Sing	7	obj	_	_
6	wî	ew	PRON	prn	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	nmod:poss	_	_
7	qebûl dike	qebûlkirin	VERB	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
8	,	,	PUNCT	cm	_	13	punct	_	_
9	cemala	cemal	NOUN	n	Case=Con|Definite=Def|Gender=Fem|Number=Sing	13	nsubj	_	_
10	xwe	xwe	PRON	prn	Gender=Fem,Masc|Number=Plur,Sing|PronType=Prs|Reflex=Yes	13	obj	_	_
11	rê	rê	NOUN	n	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	13	compound:lvc	_	_
12	wî	ew	PRON	prn	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	obl	_	_
13	dide	dan	VERB	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	conj	_	SpaceAfter=No
14	.	.	PUNCT	sent	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 30 26 obl	color:blue
1	Dr.	Dr.	NOUN	abbr	_	11	nsubj	_	_
2	Rweylot	Rweylot	PROPN	np	Case=Nom|Gender=Masc|Number=Sing	1	flat	_	_
3	rotikê	rotik	NOUN	n	Case=Con|Definite=Def|Gender=Masc|Number=Sing	11	obj	_	_
4	hesinîn	hesinîn	ADJ	adj	Degree=Pos	3	amod	_	_
5	yê	yê	ADP	con	AdpType=Post|Gender=Masc|Number=Sing	3	case	_	_
6	ko	ku	SCONJ	cnjsub	_	9	mark	_	_
7	li	li	X	x	_	8	dep	_	_
8	ber	ber	ADP	pr	AdpType=Prep	9	case	_	_
9	tifikê	tifik	NOUN	n	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	3	acl	_	_
10	bû	bûn	AUX	vbcop	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	9	cop	_	_
11	girt	girtin	VERB	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
12	û	û	CCONJ	cnjcoo	_	14	cc	_	_
13	ew	ew	PRON	prn	Case=Nom|Gender=Fem,Masc|Number=Sing|Person=3|PronType=Prs	14	obj	_	_
14	tewand	tewandin	VERB	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	11	conj	_	_
15	û	û	CCONJ	cnjcoo	_	16	cc	_	_
16	gote	gotin	VERB	vblex	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	11	conj	_	_
17	Holmes	Holmes	PROPN	np	Case=Acc|Gender=Masc|Number=Sing	16	obl:dat	_	_
18	«	«	PUNCT	lquot	_	24	punct	_	SpaceAfter=No
19	Carekê	car	NOUN	n	Case=Con|Gender=Fem|Number=Sing|PronType=Ind	24	nmod	_	_
20	din	din	ADJ	adj	_	19	amod	_	_
21	ji	ji	ADP	pr	AdpType=Prep	22	case	_	_
22	te	tu	PRON	prn	Case=Acc|Gender=Fem,Masc|Number=Sing|Person=2|PronType=Prs	24	nmod	_	_
23	re	re	ADP	post	AdpType=Post	22	case	_	_
24	dibêjim	gotin	VERB	vblex	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	16	ccomp	_	SpaceAfter=No
25	,	,	PUNCT	cm	_	30	punct	_	_
26	te	tu	PRON	prn	Case=Acc|Gender=Fem,Masc|Number=Sing|Person=2|PronType=Prs	30	obl	_	_
27	hay	hay	NOUN	n	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	30	nsubj	_	_
28	ji	ji	ADP	pr	AdpType=Prep	29	case	_	_
29	xwe	xwe	PRON	prn	Gender=Fem,Masc|Number=Plur,Sing|PronType=Prs|Reflex=Yes	30	nmod	_	_
30	hebe	hebûn	AUX	vbhaver	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	24	ccomp	_	SpaceAfter=No
31	...	...	PUNCT	sent	_	24	punct	_	SpaceAfter=No
32	»	»	PUNCT	rquot	_	24	punct	_	_
33	hesin	hesin	NOUN	n	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	34	obj	_	_
34	avête	avêtin	VERB	vblex	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	11	conj	_	_
35	tifikê	tifik	NOUN	n	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	34	obl:dat	_	_
36	û	û	CCONJ	cnjcoo	_	39	cc	_	_
37	terka	terk	NOUN	n	Case=Con|Definite=Def|Gender=Fem|Number=Sing	39	compound:lvc	_	_
38	me	em	PRON	prn	Case=Acc|Gender=Fem,Masc|Number=Plur|Person=1|PronType=Prs	37	nmod:poss	_	_
39	da	dan	VERB	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	11	conj	_	SpaceAfter=No
40	,	,	PUNCT	cm	_	41	punct	_	_
41	çû	çûn	VERB	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	11	conj	_	SpaceAfter=No
42	.	.	PUNCT	sent	_	11	punct	_	_

~~~


