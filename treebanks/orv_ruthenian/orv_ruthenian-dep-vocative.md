---
layout: base
title:  'Statistics of vocative in UD_Old_East_Slavic-Ruthenian'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Ruthenian: Relations: `vocative`

This relation is universal.

66 nodes (0%) are attached to their parents as `vocative`.

40 instances of `vocative` (61%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.60606060606061.

The following 8 pairs of parts of speech are connected with `vocative`: <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (52; 79% instances), <tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (6; 9% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-PROPN.html">PROPN</a></tt> (2; 3% instances), <tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_ruthenian-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="orv_ruthenian-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 vocative	color:blue
1	А	а	CCONJ	CC	_	9	cc	_	wf="А"
2	естли	естли	SCONJ	IN	_	4	mark	_	wf="естли"
3	не	не	PART	NEG	Polarity=Neg	4	advmod	_	wf="не"
4	справедъливе	справедливе	ADV	VBC	Degree=Pos	9	advcl	_	wf="справедъливе"
5	-	-	PUNCT	-DASH-	_	4	punct	_	_
6	боже	богъ	NOUN	NNA	Case=Voc|Gender=Masc|Number=Sing	9	vocative	_	wf="боже"|SpaceAfter=No
7	,	,	PUNCT	-COMMA-	_	6	punct	_	_
8	ме	я	PRON	PRP	Case=Acc|Clitic=Yes|Number=Sing|Person=1|PronType=Prs	9	obj	_	wf="ме"
9	убий	убити	VERB	VBC	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	0	root	_	wf="убий"|SpaceAfter=No
10	"	"	PUNCT	-QUOT-	_	9	punct	_	SpaceAfter=No
11	.	.	PUNCT	-PERIOD-	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 vocative	color:blue
1	Ѡ	о	PRON	WP	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	0	root	_	wf="Ѡ"
2	Ѡдамовъ	одамовъ	ADJ	JJH	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	1	vocative	_	wf="Ѡдамовъ"
3	сꙋд	судъ	NOUN	NNI	Case=Nom|Gender=Masc|Number=Sing	1	vocative	_	wf="сꙋд"

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 3 vocative	color:blue
1	Такоже	также	CCONJ	СС	_	10	cc	_	wf="Такоже"|SpaceAfter=No
2	,	,	PUNCT	-COMMA-	_	3	punct	_	_
3	дѣти	детя	NOUN	NNA	Case=Nom|Gender=Neut|Number=Plur	10	vocative	_	wf="дѣти"|SpaceAfter=No
4	,	,	PUNCT	-COMMA-	_	3	punct	_	_
5	была	быти	AUX	VBC	Gender=Fem|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	10	cop	_	wf="была"
6	любовь	любовъ	NOUN	NNI	Case=Nom|Gender=Fem|Number=Sing	10	nsubj	_	wf="любовь"
7	ваша	вашъ	DET	PRP$	Case=Nom|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	6	det	_	wf="ваша"
8	перваѧ	первый	ADJ	ORD	Case=Nom|Gender=Fem|Number=Sing|NumForm=Word|NumType=Ord	6	amod	_	wf="перваѧ"
9	с	съ	ADP	IN	_	10	case	_	wf="с"
10	полочаны	полочанинъ	NOUN	NNA	Case=Ins|Gender=Masc|Number=Plur	0	root	_	wf="полочаны"|SpaceAfter=No
11	,	,	PUNCT	-COMMA-	_	13	punct	_	_
12	съ	съ	ADP	IN	_	13	case	_	wf="съ"
13	дѣтми	детя	NOUN	NNA	Case=Ins|Gender=Neut|Number=Plur	10	appos	_	wf="дѣтми"
14	моими	мой	DET	PRP$	Case=Ins|Gender=Neut|Number=Plur|Poss=Yes|PronType=Prs	13	det	_	wf="моими"|SpaceAfter=No
15	:	:	PUNCT	-COLON-	_	23	punct	_	_
16	што	што	PRON	WP	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	19	nsubj	_	wf="што"
17	вамъ	вы	PRON	PRP	Case=Dat|Number=Plur|Person=2|PronType=Prs	19	iobj	_	wf="вамъ"
18	было	быти	AUX	VBC	Gender=Neut|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	19	cop	_	wf="было"
19	надобѣ	надобе	VERB	PRED	_	21	acl:relcl	_	wf="надобѣ"|SpaceAfter=No
20	,	,	PUNCT	-COMMA-	_	19	punct	_	_
21	то	то	PRON	DT	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	23	nsubj	_	wf="то"
22	было	быти	AUX	VBC	Gender=Neut|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	23	cop	_	wf="было"
23	ваше	вашъ	DET	PRP$	Case=Acc|Gender=Neut|Number=Sing|Poss=Yes|PronType=Prs	10	parataxis	_	wf="ваше"|SpaceAfter=No
24	.	.	PUNCT	-PERIOD-	_	10	punct	_	_

~~~


