---
layout: base
title:  'Statistics of flat in UD_Old_East_Slavic-Ruthenian'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Ruthenian: Relations: `flat`

This relation is universal.
There are 2 language-specific subtypes of `flat`: <tt><a href="orv_ruthenian-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="orv_ruthenian-dep-flat-name.html">flat:name</a></tt>.

34 nodes (0%) are attached to their parents as `flat`.

34 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.32352941176471.

The following 3 pairs of parts of speech are connected with `flat`: <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt> (27; 79% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (4; 12% instances), <tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (3; 9% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	Ген(варя)	генварь	NOUN	NNI	Case=Gen|Gender=Masc|Number=Sing	0	root	_	wf="Генваря"
2	5	5	ADJ	ORD	Case=Acc|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	1	flat	_	_
3	,	,	PUNCT	-COMMA-	_	4	punct	_	_
4	инъдик(т)	индиктъ	NOUN	NNI	Case=Nom|Gender=Masc|Number=Sing	1	nmod	_	wf="инъдикт"
5	11	11	ADJ	ORD	Case=Nom|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	4	amod	_	_
6	.	.	PUNCT	-PERIOD-	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 flat	color:blue
1	Писанъ	писати	VERB	VBNH	Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	wf="Писанъ"
2	ꙋ	въ	ADP	IN	_	3	case	_	wf="ꙋ"
3	Троцех	Троки	PROPN	NPI	Case=Loc|Gender=Masc|NameType=Geo|Number=Plur	1	obl	_	wf="Троцех"|SpaceAfter=No
4	,	,	PUNCT	-COMMA-	_	5	punct	_	_
5	авъгꙋстъ	августъ	NOUN	NNI	Case=Acc|Gender=Masc|Number=Sing	1	obl	_	wf="авъгꙋстъ"
6	12	12	ADJ	ORD	Case=Acc|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	7	amod	_	_
7	день	день	NOUN	NNI	Case=Acc|Gender=Masc|Number=Sing	5	flat	_	wf="день"|SpaceAfter=No
8	,	,	PUNCT	-COMMA-	_	9	punct	_	_
9	инъдикъ	индиктъ	NOUN	NNI	Case=Nom|Gender=Masc|Number=Sing	5	nmod	_	wf="инъдикъ"
10	2	2	ADJ	ORD	Case=Nom|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	9	amod	_	_
11	.	.	PUNCT	-PERIOD-	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 26 flat	color:blue
1	А	а	CCONJ	СС	_	12	cc	_	wf="А"
2	потомъ	потомъ	ADV	RB	Degree=Pos|PronType=Dem	12	advmod	_	pos="ADVPRO"|wf="потомъ"
3	мы	мы	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	12	nsubj	_	wf="мы"|SpaceAfter=No
4	,	,	PUNCT	-COMMA-	_	10	punct	_	wf=","
5	понєважъ	поневажъ	SCONJ	IN	_	10	mark	_	wf="поневажъ"
6	на	на	ADP	IN	_	7	case	_	wf="на"
7	пятокъ	пятокъ	NOUN	NNI	Case=Acc|Gender=Masc|Number=Sing	10	obl	_	wf="пятокъ"
8	А(н)дрѣи	Андрѣй	PROPN	NPA	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	7	nmod	_	wf="Андрѣи"
9	нє	не	PART	NEG	Polarity=Neg	10	advmod	_	wf="не"
10	сталъ	стати	VERB	VBC	Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	12	advcl	_	wf="сталъ"|SpaceAfter=No
11	,	,	PUNCT	-COMMA-	_	10	punct	_	wf=","
12	взложили	взложити	VERB	VBC	Number=Plur|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	wf="взложили"
13	други(й)	другий	ADJ	DT	Case=Acc|Gender=Masc|Number=Sing|NumForm=Word|NumType=Ord	14	amod	_	pos="ANUM"|wf="другий"
14	рокъ	рокъ	NOUN	NNI	Case=Acc|Gender=Masc|Number=Sing	12	obj	_	wf="рокъ"|SpaceAfter=No
15	,	,	PUNCT	-COMMA-	_	28	punct	_	wf=","
16	жебы	жебы	SCONJ	IN	Mood=Cnd	28	mark	_	wf="жебы"
17	на	на	ADP	IN	_	18	case	_	wf="на"
18	понеделокъ	понедѣлокъ	NOUN	NNI	Case=Acc|Gender=Masc|Number=Sing	28	obl	_	wf="понеделокъ"|SpaceAfter=No
19	,	,	PUNCT	-COMMA-	_	23	punct	_	wf=","
20	то	то	PRON	DT	Case=Nom|ExtPos=CCONJ|Gender=Neut|Number=Sing|PronType=Dem	23	cc	_	wf="то"
21	є(ст)	быти	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	20	fixed	_	wf="ест"
22	вчерайши(й)	вчорашний	ADJ	JJR	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	23	amod	_	wf="вчерайший"
23	день	день	NOUN	NNI	Case=Acc|Gender=Masc|Number=Sing	18	nmod	_	wf="день"|SpaceAfter=No
24	,	,	PUNCT	-COMMA-	_	25	punct	_	wf=","
25	третего	третий	ADJ	ORD	Case=Gen|Gender=Masc|Number=Sing|NumForm=Word|NumType=Ord	23	nmod	_	pos="ANUM"|wf="третего"
26	декабря	декабрь	NOUN	NNI	Case=Gen|Gender=Masc|Number=Sing	25	flat	_	wf="декабря"|SpaceAfter=No
27	,	,	PUNCT	-COMMA-	_	25	punct	_	wf=","
28	сталъ	стати	VERB	VBC	Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	14	acl	_	wf="сталъ"|SpaceAfter=No
29	<,>	<,>	PUNCT	-QUOT-	_	12	punct	_	wf="<,>"|SpaceAfter=No
30	.	.	PUNCT	-PERIOD-	_	12	punct	_	wf="."

~~~


