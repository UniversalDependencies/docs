---
layout: base
title:  'Statistics of aux in UD_Old_East_Slavic-Ruthenian'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Ruthenian: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="orv_ruthenian-dep-aux-pass.html">aux:pass</a></tt>.

1066 nodes (1%) are attached to their parents as `aux`.

642 instances of `aux` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.76547842401501.

The following 6 pairs of parts of speech are connected with `aux`: <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-AUX.html">AUX</a></tt> (1039; 97% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-AUX.html">AUX</a></tt> (12; 1% instances), <tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_ruthenian-pos-AUX.html">AUX</a></tt> (9; 1% instances), <tt><a href="orv_ruthenian-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_ruthenian-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="orv_ruthenian-pos-PART.html">PART</a></tt>-<tt><a href="orv_ruthenian-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_ruthenian-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux	color:blue
1	А	а	CCONJ	СС	_	5	cc	_	wf="А"
2	и	и	CCONJ	СС	_	1	fixed	_	wf="и"
3	борть	борть	NOUN	NNI	Case=Acc|Gender=Fem|Number=Sing	5	obj	_	wf="борть"
4	есмо	быти	AUX	VBC	Analyt=Yes|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	wf="есмо"
5	дали	дати	VERB	VBC	Analyt=Yes|Aspect=Perf|Number=Plur|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	wf="дали"
6	Ивану	Иванъ	PROPN	NPA	Case=Dat|Gender=Masc|NameType=Giv|Number=Sing	5	iobj	_	wf="Ивану"
7	на	на	ADP	IN	_	8	case	_	wf="на"
8	Вшачы	Ушача	PROPN	NPI	Case=Loc|Gender=Fem|NameType=Geo|Number=Sing	5	obl	_	wf="Вшачы"|SpaceAfter=No
9	,	,	PUNCT	-COMMA-	_	12	punct	_	_
10	покол(ь)	поколь	SCONJ	IN	_	12	mark	_	wf="поколь"
11	его	онъ	PRON	PRP	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	det	_	wf="его"
12	земля	земля	NOUN	NNI	Case=Nom|Gender=Fem|Number=Sing	3	acl	_	wf="земля"|SpaceAfter=No
13	.	.	PUNCT	-PERIOD-	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 14 aux	color:blue
1	А	а	CCONJ	СС	_	5	cc	_	wf="А"
2	мы	мы	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	5	nsubj	_	wf="мы"
3	к	къ	ADP	IN	_	4	case	_	wf="к"
4	вам	вы	PRON	PRP	Case=Dat|Number=Plur|Person=2|PronType=Prs	5	obl	_	wf="вам"
5	послали	послати	VERB	VBC	Aspect=Perf|Number=Plur|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	wf="послали"
6	истьцевъ	истецъ	NOUN	NNA	Case=Gen|Gender=Masc|Number=Plur	5	obj	_	wf="истьцевъ"|SpaceAfter=No
7	,	,	PUNCT	-COMMA-	_	11	punct	_	_
8	хто	хто	PRON	WP	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	11	nsubj	_	wf="хто"
9	кому	хто	PRON	WP	Case=Dat|Gender=Masc|Number=Sing|PronType=Rel	11	iobj	_	wf="кому"
10	будеть	быти	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	11	cop	_	wf="будеть"
11	виноват	виноватый	ADJ	JJH	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	6	acl	_	wf="виноват"|SpaceAfter=No
12	,	,	PUNCT	-COMMA-	_	11	punct	_	_
13	ино	ино	CCONJ	СС	_	17	cc	_	wf="ино"
14	бы	бы	AUX	RP	Analyt=Yes|Mood=Cnd	17	aux	_	wf="бы"
15	тому	то	PRON	DT	Case=Dat|Gender=Neut|Number=Sing|PronType=Dem	17	iobj	_	wf="тому"
16	было	быти	AUX	VBC	Analyt=Yes|Gender=Neut|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	17	cop	_	wf="было"
17	право	право	NOUN	NNI	Case=Nom|Gender=Neut|Number=Sing	5	advcl	_	wf="право"|SpaceAfter=No
18	.	.	PUNCT	-PERIOD-	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 11 aux	color:blue
1	А	а	CCONJ	СС	_	7	cc	_	wf="А"
2	ѡни	они	PRON	PRP	Case=Nom|Gender=Masc|Number=Plur|Person=3|PronType=Prs	7	nsubj	_	wf="ѡни"
3	ꙋ	у	ADP	IN	_	4	case	_	wf="ꙋ"
4	нег(о)	онъ	PRON	PRP	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	obl	_	wf="него"
5	тот	тотъ	DET	DT	Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	6	det	_	wf="тот"
6	товар	товаръ	NOUN	NNI	Case=Acc|Gender=Masc|Number=Sing	7	obj	_	wf="товар"
7	забрали	забрати	VERB	VBC	Aspect=Perf|Number=Plur|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	wf="забрали"|SpaceAfter=No
8	,	,	PUNCT	-COMMA-	_	7	punct	_	_
9	рекꙋч(и)	рещи	VERB	VBG	Aspect=Imp|Tense=Pres|VerbForm=Conv|Voice=Act	7	advcl	_	wf="рекꙋчи"|SpaceAfter=No
10	,	,	PUNCT	-COMMA-	_	14	punct	_	_
11	бы	бы	AUX	RP	Mood=Cnd	14	aux	_	wf="бы"
12	им	они	PRON	PRP	Case=Dat|Gender=Masc|Number=Plur|Person=3|PronType=Prs	14	iobj	_	wf="им"
13	чим	што	PRON	DT	Case=Ins|Gender=Neut|Number=Sing|PronType=Ind	14	obl	_	wf="чим"
14	виноват	виноватый	ADJ	JJH	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	9	ccomp	_	wf="виноват"
15	мещанин	мещанинъ	NOUN	NNA	Case=Nom|Gender=Masc|Number=Sing	14	nsubj	_	wf="мещанин"
16	полоцкии	полоцкий	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	17	amod	_	wf="полоцкии"
17	Кортени	Кортени	PROPN	NPA	Case=Nom|Gender=Masc|NameType=Sur|Number=Sing	15	appos	_	wf="Кортени"|SpaceAfter=No
18	.	.	PUNCT	-PERIOD-	_	7	punct	_	_

~~~


