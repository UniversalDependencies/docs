---
layout: base
title:  'Statistics of nsubj in UD_Old_East_Slavic-Ruthenian'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Ruthenian: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="orv_ruthenian-dep-nsubj-pass.html">nsubj:pass</a></tt>.

85 nodes (3%) are attached to their parents as `nsubj`.

72 instances of `nsubj` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.24705882352941.

The following 12 pairs of parts of speech are connected with `nsubj`: <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt> (32; 38% instances), <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (26; 31% instances), <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-DET.html">DET</a></tt> (14; 16% instances), <tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-DET.html">DET</a></tt> (2; 2% instances), <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_ruthenian-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="orv_ruthenian-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 14 nsubj	color:blue
1	А	_	CCONJ	CC	_	11	cc	_	_
2	если	_	SCONJ	IN	_	5	mark	_	_
3	которому	_	DET	DT	Case=Dat|Gender=Masc|Number=Sing|PronType=Rel	4	det	_	_
4	народу	_	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing	5	iobj	_	_
5	встыдъ	_	VERB	PRED	_	11	advcl	_	_
6	правъ	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Plur	9	obj	_	_
7	своихъ	_	DET	PRP$	Case=Gen|Number=Plur|Poss=Yes|PronType=Prs|Reflex=Yes	6	det	_	_
8	не	_	PART	NEG	Polarity=Neg	9	advmod	_	_
9	умети	_	VERB	VBC	Aspect=Imp|VerbForm=Inf|Voice=Act	5	csubj	_	SpaceAfter=No
10	,	_	PUNCT	PUNCT	_	5	punct	_	_
11	поготовю	_	VERB	PRED	_	0	root	_	_
12	намъ	_	PRON	PRP	Case=Dat|Number=Plur|Person=1|PronType=Prs	11	iobj	_	SpaceAfter=No
13	,	_	PUNCT	PUNCT	_	25	punct	_	_
14	которые	_	PRON	WPA	Animacy=Inan|Case=Acc|Number=Plur|PronType=Rel	25	nsubj	_	_
15	не	_	PART	NEG	Polarity=Neg	18	advmod	_	_
16	обчым	_	ADJ	JJL	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	18	amod	_	_
17	яким	_	DET	WPA	Case=Ins|Gender=Masc|Number=Sing|PronType=Ind	18	det	_	_
18	языком	_	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	24	iobj	_	SpaceAfter=No
19	,	_	PUNCT	PUNCT	_	22	punct	_	_
20	але	_	CCONJ	CC	_	22	cc	_	_
21	своимъ	_	DET	PRP$	Case=Ins|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	22	det	_	_
22	власнымъ	_	ADJ	JJL	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	18	conj	_	_
23	права	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Plur	25	obj	_	_
24	списаные	_	VERB	VBNH	Aspect=Perf|Case=Acc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	23	acl	_	_
25	маем	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	12	acl:relcl	_	_
26	и	_	CCONJ	CC	_	39	cc	_	_
27	кождого	_	DET	JJL	Case=Gen|Gender=Masc|Number=Sing|PronType=Tot	28	det	_	_
28	часу	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	39	obl:tmod	_	SpaceAfter=No
29	,	_	PUNCT	PUNCT	_	32	punct	_	_
30	чого	_	PRON	WP	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing|PronType=Int	32	obj	_	_
31	намъ	_	PRON	PRP	Case=Dat|Number=Plur|Person=1|PronType=Prs	32	iobj	_	_
32	потреба	_	VERB	PRED	_	38	ccomp	_	_
33	ку	_	ADP	IN	_	34	case	_	_
34	отпору	_	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing	32	obl	_	_
35	всякое	_	DET	DT	Case=Acc|Gender=Neut|Number=Sing|PronType=Tot	36	det	_	_
36	кривды	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	34	nmod	_	SpaceAfter=No
37	,	_	PUNCT	PUNCT	_	32	punct	_	_
38	ведати	_	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Act	39	xcomp	_	_
39	можемъ	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	25	conj	_	SpaceAfter=No
40	.	_	PUNCT	PUNCT	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj	color:blue
1	А	_	CCONJ	CC	_	4	cc	_	_
2	писаръ	_	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
3	земъский	_	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	_
4	маеть	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	по-руску	_	ADV	RB	Degree=Pos	16	advmod	_	_
6	литерами	_	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Plur	16	iobj	_	_
7	и	_	CCONJ	CC	_	8	cc	_	_
8	словы	_	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Neut|Number=Plur	6	conj	_	_
9	рускими	_	ADJ	JJL	Case=Ins|Degree=Pos|Number=Plur	6	amod	_	_
10	вси	_	DET	DT	Animacy=Inan|Case=Acc|Number=Plur|PronType=Tot	11	det	_	_
11	листы	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	16	obj	_	SpaceAfter=No
12	,	_	PUNCT	PUNCT	_	13	punct	_	_
13	выписы	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	11	conj	_	_
14	и	_	CCONJ	CC	_	15	cc	_	_
15	позвы	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	11	conj	_	_
16	писати	_	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Act	4	xcomp	_	SpaceAfter=No
17	,	_	PUNCT	PUNCT	_	21	punct	_	_
18	а	_	CCONJ	CC	_	21	cc	_	_
19	не	_	PART	NEG	Polarity=Neg	20	advmod	_	_
20	иншимъ	_	DET	DT	Case=Ins|Gender=Masc|Number=Sing|PronType=Tot	21	det	_	_
21	езыкомъ	_	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	5	conj	_	_
22	и	_	CCONJ	CC	_	23	cc	_	_
23	словы	_	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Neut|Number=Plur	21	conj	_	SpaceAfter=No
24	.	_	PUNCT	PUNCT	_	4	punct	_	SpacesAfter=\r\n

~~~


~~~ conllu
# visual-style 35	bgColor:blue
# visual-style 35	fgColor:white
# visual-style 40	bgColor:blue
# visual-style 40	fgColor:white
# visual-style 40 35 nsubj	color:blue
1	Уставуемъ	_	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
2	,	_	PUNCT	_	_	28	punct	_	_
3	ижъ	_	SCONJ	_	_	28	mark	_	_
4	въ	_	ADP	_	_	6	case	_	_
5	тыхъ	_	DET	_	Case=Loc|Number=Plur|PronType=Dem	6	det	_	_
6	повѣтѣхъ	_	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	28	obl	_	SpaceAfter=No
7	,	_	PUNCT	_	_	11	punct	_	_
8	которые	_	DET	_	Case=Nom|Number=Plur|PronType=Rel	11	nsubj:pass	_	_
9	суть	_	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	aux	_	_
10	нижей	_	ADV	_	Degree=Cmp	11	advmod	_	_
11	росписаны	_	VERB	_	Aspect=Perf|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	6	acl:relcl	_	SpaceAfter=No
12	,	_	PUNCT	_	_	11	punct	_	_
13	и	_	CCONJ	_	_	17	cc	_	_
14	въ	_	ADP	_	_	17	case	_	_
15	кождомъ	_	DET	_	Case=Loc|Gender=Masc|Number=Sing|PronType=Tot	17	det	_	_
16	таковомъ	_	DET	_	Case=Loc|Gender=Masc|Number=Sing|PronType=Dem	17	det	_	_
17	повѣтѣ	_	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	6	conj	_	SpaceAfter=No
18	,	_	PUNCT	_	_	25	punct	_	_
19	гдѣ	_	ADV	_	Degree=Pos	25	advmod	_	_
20	еще	_	ADV	_	Degree=Pos	23	advmod	_	_
21	до	_	ADP	_	_	23	case	_	_
22	сихъ	_	DET	_	Case=Gen|Number=Plur|PronType=Dem	23	det	_	_
23	часовъ	_	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	25	obl	_	_
24	не	_	PART	_	Polarity=Neg	25	advmod	_	_
25	обраны	_	VERB	_	Aspect=Perf|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	17	acl:relcl	_	SpaceAfter=No
26	,	_	PUNCT	_	_	25	punct	_	_
27	зособна	_	ADV	_	Degree=Pos	28	advmod	_	_
28	мають	_	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	ccomp	_	_
29	быти	_	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	28	xcomp	_	_
30	судья	_	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	28	nsubj	_	_
31	подсудокъ	_	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	30	conj	_	_
32	и	_	CCONJ	_	_	33	cc	_	_
33	писаръ	_	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	30	conj	_	SpaceAfter=No
34	,	_	PUNCT	_	_	40	punct	_	_
35	которые	_	DET	_	Case=Nom|Number=Plur|PronType=Rel	40	nsubj	_	_
36	такъ	_	ADV	_	Degree=Pos	42	advmod	_	_
37	и	_	PART	_	_	39	advmod	_	_
38	тымъ	_	DET	_	Case=Ins|Gender=Masc|Number=Sing|PronType=Dem	39	det	_	_
39	обычаемъ	_	NOUN	_	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	36	conj	_	_
40	мають	_	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	30	acl:relcl	_	_
41	быть	_	AUX	_	Aspect=Imp|VerbForm=Inf|Voice=Act	42	aux	_	_
42	выбираны	_	VERB	_	Aspect=Imp|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	40	xcomp	_	_
43	и	_	CCONJ	_	_	47	cc	_	_
44	на	_	ADP	_	_	46	case	_	_
45	таковые	_	DET	_	Animacy=Inan|Case=Acc|Number=Plur|PronType=Dem	46	det	_	_
46	уряды	_	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	47	obl	_	_
47	установлены	_	VERB	_	Aspect=Perf|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	42	conj	_	SpaceAfter=No
48	.	_	PUNCT	_	_	1	punct	_	SpacesAfter=\r\n

~~~


