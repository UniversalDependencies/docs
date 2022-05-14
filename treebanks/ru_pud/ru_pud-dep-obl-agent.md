---
layout: base
title:  'Statistics of obl:agent in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="ru_pud-dep-obl.html">obl</a></tt>.

12 nodes (0%) are attached to their parents as `obl:agent`.

12 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.83333333333333.

The following 3 pairs of parts of speech are connected with `obl:agent`: <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (10; 83% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-PRON.html">PRON</a></tt> (1; 8% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 obl:agent	color:blue
1	Фундаментальные	фундаментальный	ADJ	JJ	Case=Nom|Degree=Pos|Number=Plur	2	amod	_	_
2	изменения	изменение	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Plur	6	nsubj:pass	_	_
3	принципов	принцип	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	2	nmod	_	_
4	работы	работа	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	_
5	были	быть	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	6	aux:pass	_	_
6	внедрены	внедрить	VERB	VBNH	Aspect=Perf|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
7	шотландцем	шотландец	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	6	obl:agent	_	_
8	Джоном	Джон	PROPN	NNP	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	7	flat:name	_	_
9	Ваттом	Ватт	PROPN	NNP	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	7	flat:name	_	SpaceAfter=No
10	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 26 obl:agent	color:blue
1	Николаи	Николаи	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	участвует	участвовать	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	в	в	ADP	IN	_	4	case	_	_
4	работе	работа	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	2	obl	_	_
5	Морриконе	Морриконе	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	_
6	над	над	ADP	IN	_	7	case	_	_
7	музыкой	музыка	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	4	obl	_	_
8	к	к	ADP	IN	_	10	case	_	_
9	нескольким	несколько	NUM	RB	Case=Dat	10	nummod	_	_
10	фильмам	фильм	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Masc|Number=Plur	7	nmod	_	SpaceAfter=No
11	,	,	PUNCT	,	_	14	punct	_	_
12	например	например	ADV	RB	Degree=Pos	14	parataxis	_	_
13	«	«	PUNCT	``	_	14	punct	_	SpaceAfter=No
14	Metti	metti	X	VBC	Foreign=Yes	10	appos	_	Proper=True|SpaceAfter=No
15	,	,	PUNCT	,	_	16	punct	_	Proper=True
16	one	one	X	CD	Foreign=Yes	14	flat:foreign	_	Proper=True
17	night	night	X	NN	Foreign=Yes	14	flat:foreign	_	_
18	at	at	X	IN	Foreign=Yes	14	flat:foreign	_	Proper=True
19	dinner	dinner	X	NN	Foreign=Yes	14	flat:foreign	_	SpaceAfter=No
20	»	»	PUNCT	'	_	14	punct	_	SpaceAfter=No
21	;	;	PUNCT	:	_	2	punct	_	_
22	некоторые	некоторый	DET	DT	Case=Nom|Number=Plur	23	det	_	_
23	мелодии	мелодия	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	25	nsubj:pass	_	_
24	были	быть	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	25	aux:pass	_	_
25	написаны	написать	VERB	VBNH	Aspect=Perf|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	2	parataxis	_	_
26	ими	они	PRON	PRP	Case=Ins|Number=Plur|Person=3	25	obl:agent	_	_
27	совместно	совместно	ADV	RB	Degree=Pos	25	advmod	_	SpaceAfter=No
28	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 obl:agent	color:blue
1	Это	это	DET	DT	Case=Nom|Gender=Neut|Number=Sing	4	det	_	_
2	отмеченное	отметить	VERB	VBNL	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	4	acl	_	_
3	наградами	награда	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Plur	2	iobj	_	_
4	здание	здание	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	5	nsubj:pass	_	_
5	спроектировано	спроектировать	VERB	VBNH	Aspect=Perf|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
6	Хуаном	Хуан	PROPN	NNP	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	5	obl:agent	_	_
7	Карлосом	Карлос	PROPN	NNP	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	6	flat:name	_	_
8	Саласом	Салас	PROPN	NNP	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	6	flat:name	_	_
9	—	—	PUNCT	-	_	11	punct	_	_
10	oно	оно	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3	11	nsubj	_	_
11	имеет	иметь	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	_
12	скульптурный	скульптурный	ADJ	JJ	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	13	amod	_	_
13	вид	вид	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	11	obj	_	SpaceAfter=No
14	,	,	PUNCT	,	_	18	punct	_	_
15	где	где	ADV	WRB	Degree=Pos	18	advmod	_	_
16	каждая	каждый	DET	DT	Case=Nom|Gender=Fem|Number=Sing	17	det	_	_
17	деталь	деталь	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	18	nsubj	_	_
18	несет	нести	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	13	acl:relcl	_	_
19	смысл	смысл	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	18	obj	_	SpaceAfter=No
20	.	.	PUNCT	.	_	5	punct	_	_

~~~


