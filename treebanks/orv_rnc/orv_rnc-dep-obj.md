---
layout: base
title:  'Statistics of obj in UD_Old_Russian-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_Russian-RNC: Relations: `obj`

This relation is universal.

1089 nodes (4%) are attached to their parents as `obj`.

656 instances of `obj` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.48852157943067.

The following 11 pairs of parts of speech are connected with `obj`: <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (802; 74% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt> (191; 18% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (36; 3% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-DET.html">DET</a></tt> (25; 2% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt> (16; 1% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (8; 1% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (5; 0% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_rnc-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 obj	color:blue
1	И	и	CCONJ	_	_	7	cc	_	_
2	того	тотъ	DET	_	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	4	det	_	_
3	мертвого	мертвый	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	_
4	иноземца	иноземецъ	NOUN	Animacy[lex]=Anim	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	7	obj	_	_
5	с	съ	ADP	_	_	6	case	_	_
6	нею	она	PRON	_	Case=Ins|Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	obl	_	_
7	привезли	привезти	VERB	Transit=Tran	Aspect=Perf|Number=Plur|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	_
8	к	къ	ADP	_	_	9	case	_	_
9	приказу	приказъ	NOUN	Animacy[lex]=Inan	Case=Dat|Gender=Masc|Number=Sing	7	obl	_	SpaceAfter=No
10	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obj	color:blue
1	Имѣти	имѣти	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	0	root	_	_
2	ти	ты	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs	1	iobj	_	_
3	менѧ	я	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	1	obj	_	_
4	себѣ	себя	PRON	_	Case=Dat|PronType=Prs|Reflex=Yes	1	iobj	_	_
5	братѡм	братъ	NOUN	_	Case=Ins|Gender=Masc|Number=Sing	1	xcomp	_	_
6	старѣишим	старѣйший	ADJ	_	Case=Ins|Degree=Cmp|Gender=Masc|Number=Sing	5	amod	_	SpaceAfter=No
7	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 15 obj	color:blue
1	И	и	CCONJ	_	_	7	cc	_	_
2	я	я	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	х.	холопъ	NOUN	_	Abbr=Yes	2	appos	_	_
5	т.	твой	DET	_	Abbr=Yes|PronType=Dem	4	det	_	SpaceAfter=No
6	,	,	PUNCT	_	_	4	punct	_	_
7	послал	послати	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	_
8	к	къ	ADP	_	_	9	case	_	_
9	тебе	ты	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs	7	obl	_	SpaceAfter=No
10	,	,	PUNCT	_	_	11	punct	_	_
11	г.	государь	NOUN	_	Abbr=Yes	9	parataxis	_	SpaceAfter=No
12	,	,	PUNCT	_	_	11	punct	_	_
13	к	къ	ADP	_	_	14	case	_	_
14	Москве	Москва	PROPN	_	Case=Dat|Gender=Fem|Number=Sing	7	obl	_	_
15	Олександра	Олександръ	PROPN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	7	obj	_	_
16	Суровцова	Суровцовъ	PROPN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	15	flat:name	_	SpaceAfter=No
17	.	.	PUNCT	_	_	7	punct	_	_

~~~


