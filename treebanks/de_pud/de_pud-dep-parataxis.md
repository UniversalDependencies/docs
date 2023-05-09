---
layout: base
title:  'Statistics of parataxis in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `parataxis`

This relation is universal.

68 nodes (0%) are attached to their parents as `parataxis`.

68 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 12.5735294117647.

The following 12 pairs of parts of speech are connected with `parataxis`: <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (38; 56% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (5; 7% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (5; 7% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (5; 7% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (4; 6% instances), <tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (3; 4% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt> (2; 3% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-SYM.html">SYM</a></tt> (1; 1% instances), <tt><a href="de_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 parataxis	color:blue
1	Ich	ich	PRON	PRP	Case=Nom|Number=Sing|Person=1	9	nsubj	_	_
2	werde	werden	AUX	VBC	Mood=Ind|Number=Sing|Person=1|Tense=Pres	9	aux	_	_
3	so	so	ADV	RB	Degree=Pos	9	advmod	_	_
4	oder	oder	CCONJ	CC	_	5	cc	_	_
5	so	so	ADV	RB	Degree=Pos	3	conj	_	_
6	in	in	ADP	APPR	_	8	case	_	_
7	das	der	DET	ART	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	8	det	_	_
8	Gefängnis	Gefängnis	NOUN	NN	Case=Acc|Gender=Neut|Number=Sing	9	obl	_	_
9	kommen	kommen	VERB	VB	_	0	root	_	SpaceAfter=No
10	,	,	PUNCT	,	_	12	punct	_	_
11	ich	ich	PRON	PRP	Case=Nom|Number=Sing|Person=1	12	nsubj	_	_
12	hoffe	hoffen	VERB	VBC	Mood=Ind|Number=Sing|Person=1|Tense=Pres	9	parataxis	_	SpaceAfter=No
13	,	,	PUNCT	,	_	17	punct	_	_
14	das	der	DET	DT	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	17	nsubj	_	_
15	war	sein	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	17	cop	_	_
16	es	es	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	17	obj	_	_
17	wert	wert	ADJ	JJ	Degree=Pos	12	ccomp	_	SpaceAfter=No
18	.	.	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 parataxis	color:blue
1	Gewitterstürme	Gewittersturm	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur	3	nsubj	_	_
2	sind	sein	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	3	cop	_	_
3	selten	selten	ADJ	JJ	Degree=Pos	0	root	_	SpaceAfter=No
4	,	,	PUNCT	,	_	7	punct	_	_
5	die	der	DET	DT	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	Stadt	Stadt	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	7	nsubj	_	_
7	berichtet	berichten	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	parataxis	_	_
8	nur	nur	ADV	RB	Degree=Pos	11	advmod	_	_
9	an	an	ADP	IN	_	11	case	_	_
10	sieben	sieben	NUM	CD	NumType=Card	11	nummod	_	_
11	Tagen	Tag	NOUN	NN	Case=Dat|Gender=Masc|Number=Plur	7	obl	_	_
12	pro	pro	ADP	IN	_	13	case	_	_
13	Jahr	Jahr	NOUN	NN	Case=Dat|Gender=Neut|Number=Sing	7	obl	_	_
14	von	von	ADP	IN	_	15	case	_	_
15	Gewittern	Gewitter	NOUN	NN	Case=Dat|Gender=Neut|Number=Plur	7	obl	_	SpaceAfter=No
16	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 12 parataxis	color:blue
1	Angesichts	angesichts	ADP	IN	_	3	case	_	_
2	der	der	DET	DT	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	Tatsache	Tatsache	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	14	obl	_	SpaceAfter=No
4	,	,	PUNCT	,	_	12	punct	_	_
5	dass	dass	SCONJ	CC	_	12	mark	_	_
6	Herodes	Herodes	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing	12	nsubj	_	_
7	zu	zu	ADP	IN	_	9	case	_	_
8	dieser	dieser	DET	DT	Case=Dat|Gender=Fem|Number=Sing|PronType=Dem	9	det	_	_
9	Zeit	Zeit	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing	12	obl	_	_
10	in	in	ADP	IN	_	11	case	_	_
11	Jerusalem	Jerusalem	PROPN	NNP	Case=Dat|Gender=Neut|Number=Sing	12	obl	_	_
12	war	sein	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	3	parataxis	_	SpaceAfter=No
13	,	,	PUNCT	,	_	3	punct	_	_
14	entschied	entscheiden	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
15	sich	sich	PRON	PRP	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	14	obj	_	_
16	Pilatus	Pilatus	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing	14	nsubj	_	_
17	dazu	dazu	ADV	RB	PronType=Dem	14	advmod	_	SpaceAfter=No
18	,	,	PUNCT	,	_	23	punct	_	_
19	Jesus	Jesus	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing	23	obj	_	_
20	zu	zu	ADP	IN	_	21	case	_	_
21	Herodes	Herodes	PROPN	NNP	Case=Dat|Gender=Masc|Number=Sing	23	obl	_	_
22	zu	zu	PART	RP	_	23	mark	_	_
23	schicken	schicken	VERB	VB	_	14	xcomp	_	SpaceAfter=No
24	,	,	PUNCT	,	_	30	punct	_	_
25	um	um	SCONJ	CC	_	30	mark	_	_
26	ihn	er	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	30	obj	_	_
27	vor	vor	ADP	IN	_	28	case	_	_
28	Gericht	Gericht	NOUN	NN	Case=Acc|Gender=Neut|Number=Sing	30	obl	_	_
29	zu	zu	PART	RP	_	30	mark	_	_
30	stellen	stellen	VERB	VB	_	23	advcl	_	SpaceAfter=No
31	.	.	PUNCT	.	_	14	punct	_	_

~~~


