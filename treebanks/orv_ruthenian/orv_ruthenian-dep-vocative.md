---
layout: base
title:  'Statistics of vocative in UD_Old_East_Slavic-Ruthenian'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Ruthenian: Relations: `vocative`

This relation is universal.

18 nodes (0%) are attached to their parents as `vocative`.

12 instances of `vocative` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.61111111111111.

The following 6 pairs of parts of speech are connected with `vocative`: <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (10; 56% instances), <tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (2; 11% instances), <tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_ruthenian-pos-PART.html">PART</a></tt> (2; 11% instances), <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-PART.html">PART</a></tt> (2; 11% instances), <tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_ruthenian-pos-PROPN.html">PROPN</a></tt> (1; 6% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 vocative	color:blue
1	А	а	CCONJ	CC	_	9	cc	_	_
2	естли	естли	SCONJ	IN	_	4	mark	_	_
3	не	не	PART	NEG	Polarity=Neg	4	advmod	_	_
4	справедъливе	справедливе	ADV	VBC	Degree=Pos	9	advcl	_	_
5	-	-	PUNCT	PUNCT	_	4	punct	_	_
6	боже	богъ	NOUN	VBC	Animacy=Anim|Case=Voc|Gender=Masc|Number=Sing	9	vocative	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	6	punct	_	_
8	ме	я	PRON	PRP	Case=Acc|Clitic=Yes|Number=Sing|Person=1|PronType=Prs	9	obj	_	_
9	убий	убити	VERB	VBC	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
10	"	"	PUNCT	PUNCT	_	9	punct	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	9	punct	_	SpacesAfter=\r\n

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 vocative	color:blue
1	Також	также	ADV	_	Degree=Pos	2	advmod	_	wf="Також"
2	хочем	хотѣти	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	wf="хочем"
3	с	съ	ADP	_	_	4	case	_	wf="с"
4	вам(и)	вы	PRON	_	Case=Ins|Number=Plur|Person=2|PronType=Prs	2	obl	_	wf="вами"|SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	_	_
6	ризькии	рижский	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	7	amod	_	wf="ризькии"
7	ратьмѧне	ратманъ	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	4	vocative	_	wf="ратьмѧне"|SpaceAfter=No
8	,	,	PUNCT	_	_	13	punct	_	_
9	и	и	CCONJ	_	_	13	cc	_	wf="и"
10	со	съ	ADP	_	_	13	case	_	wf="со"
11	всем(и)	весь	DET	_	Case=Ins|Gender=Masc|Number=Plur|PronType=Tot	13	det	_	wf="всеми"
12	ризькии	рижский	ADJ	_	Case=Ins|Degree=Pos|Gender=Masc|Number=Plur	13	amod	_	wf="ризькии"
13	купьци	купецъ	NOUN	_	Case=Ins|Gender=Masc|Number=Plur	4	conj	_	wf="купьци"|SpaceAfter=No
14	,	,	PUNCT	_	_	18	punct	_	_
15	межи	межу	ADP	_	_	16	case	_	wf="межи"
16	себе	себя	PRON	_	Case=Gen|PronType=Prs|Reflex=Yes	18	obl	_	wf="себе"
17	приѧзньство	приязньство	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	18	obj	_	wf="приѧзньство"
18	держат(и)	держати	VERB	_	VerbForm=Inf|Voice=Act	2	conj	_	wf="держати"
19	и	и	CCONJ	_	_	18	cc	_	wf="и"
20	любовь	любовь	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	17	conj	_	wf="любовь"
21	на	на	ADP	_	_	23	case	_	wf="на"
22	обѣ	оба	NUM	_	Case=Acc|Gender=Fem|NumForm=Word|NumType=Sets	23	nummod	_	wf="обѣ"
23	сторон(е)	сторона	NOUN	_	Case=Acc|Gender=Fem|Number=Dual	20	nmod	_	wf="стороне"
24	крѣпко	крѣпко	ADV	_	Degree=Pos	23	advmod	_	wf="крѣпко"|SpaceAfter=No
25	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 vocative	color:blue
1	С[е]	се	PART	_	_	2	vocative	_	wf="Се"
2	азъ	азъ	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	0	root	_	wf="азъ"|SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	Андрѣи	Андрѣй	PROPN	_	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	2	appos	_	wf="Андрѣи"
5	Данильѥвичь	Данильевичь	PROPN	_	Case=Nom|Gender=Masc|NameType=Pat|Number=Sing	4	flat:name	_	wf="Данильѥвичь"

~~~


