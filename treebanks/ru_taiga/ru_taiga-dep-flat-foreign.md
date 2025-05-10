---
layout: base
title:  'Statistics of flat:foreign in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="ru_taiga-dep-flat.html">flat</a></tt>.
There are also 2 other language-specific subtypes of `flat`: <tt><a href="ru_taiga-dep-flat-goeswith.html">flat:goeswith</a></tt>, <tt><a href="ru_taiga-dep-flat-name.html">flat:name</a></tt>.

1264 nodes (0%) are attached to their parents as `flat:foreign`.

1264 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.96518987341772.

The following 6 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="ru_taiga-pos-X.html">X</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (1254; 99% instances), <tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (4; 0% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="ru_taiga-pos-X.html">X</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:foreign	color:blue
1	P.	p.	X	_	Foreign=Yes	0	root	_	SpaceAfter=No
2	S.	S.	X	_	Foreign=Yes	1	flat:foreign	_	_
3	А	а	CCONJ	_	_	5	cc	_	_
4	ты	ты	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	5	nsubj	_	_
5	заметил	заметить	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	1	parataxis	_	_
6	снежного	снежный	ADJ	_	Animacy=Anim|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	_
7	воробья	воробей	NOUN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	5	obj	_	_
8	на	на	ADP	_	_	9	case	_	_
9	фото	фото	NOUN	_	Animacy=Inan|Case=Loc|Gender=Neut|InflClass=Ind|Number=Sing	5	obl	_	SpaceAfter=No
10	?	?	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 flat:foreign	color:blue
1	Скачал	скачать	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	торрент	торрент	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	1	obj	_	_
3	"	"	PUNCT	_	_	4	punct	_	SpaceAfter=No
4	1000	1000	NUM	_	NumForm=Digit|NumType=Card	2	appos	_	_
5	Best	best	X	_	Foreign=Yes	4	flat:foreign	_	_
6	Tracks	Tracks	X	_	Foreign=Yes	4	flat:foreign	_	_
7	of	of	X	_	Foreign=Yes	4	flat:foreign	_	_
8	Life	life	X	_	Foreign=Yes	4	flat:foreign	_	_
9	(	(	PUNCT	_	_	10	punct	_	SpaceAfter=No
10	History	History	X	_	Foreign=Yes	4	parataxis	_	_
11	of	of	X	_	Foreign=Yes	10	flat:foreign	_	_
12	Trance	Trance	X	_	Foreign=Yes	10	flat:foreign	_	_
13	1993	1993	ADJ	_	NumForm=Digit|NumType=Ord	10	nmod	_	SpaceAfter=No
14	-	-	PUNCT	_	_	15	punct	_	SpaceAfter=No
15	2013	2013	ADJ	_	NumForm=Digit|NumType=Ord	13	nmod	_	SpaceAfter=No
16	)	)	PUNCT	_	_	10	punct	_	_
17	Mixed	Mixed	X	_	Foreign=Yes	4	parataxis	_	_
18	&	&	PUNCT	_	_	17	punct	_	_
19	Compillation	Compillation	X	_	Foreign=Yes	17	flat:foreign	_	_
20	by	by	X	_	Foreign=Yes	17	flat:foreign	_	_
21	Greidor	Greidor	X	_	Foreign=Yes	17	flat:foreign	_	_
22	Allmaster	Allmaster	X	_	Foreign=Yes	17	flat:foreign	_	SpaceAfter=No
23	"	"	PUNCT	_	_	4	punct	_	_
24	довольно	довольно	ADV	_	Degree=Pos	25	advmod	_	_
25	понравилось	понравиться	VERB	_	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	1	parataxis	_	_
26	подскажите	подсказать	VERB	_	Aspect=Perf|Mood=Imp|Number=Plur|Person=2|VerbForm=Fin|Voice=Act	25	parataxis	_	_
27	за	за	ADP	_	_	28	case	_	_
28	период	период	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	37	obl	_	_
29	2013	2013	ADJ	_	NumForm=Digit|NumType=Ord	28	amod	_	SpaceAfter=No
30	-	-	PUNCT	_	_	31	punct	_	SpaceAfter=No
31	2020	2020	ADJ	_	NumForm=Digit|NumType=Ord	29	nmod	_	_
32	с	с	ADP	_	_	34	case	_	_
33	наименьшим	наименьший	ADJ	_	Case=Ins|Degree=Sup|Gender=Neut|Number=Sing	34	amod	_	_
34	количеством	количество	NOUN	_	Animacy=Inan|Case=Ins|Gender=Neut|Number=Sing	37	obl	_	_
35	торрентов	торрент	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	34	nmod	_	_
36	где	где	ADV	_	Degree=Pos|PronType=Int	37	advmod	_	_
37	найти	найти	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	26	ccomp	_	_
38	продолжение	продолжение	NOUN	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	37	obj	_	_
39	мировой	мировой	ADJ	_	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	41	amod	_	_
40	транс	транс	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	41	compound	_	_
41	дискографии	дискография	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	38	nmod	_	_
42	?	?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat:foreign	color:blue
1	—	—	PUNCT	_	_	3	punct	_	_
2	У	у	ADP	_	_	3	case	_	_
3	вас	вы	PRON	_	Case=Gen|Number=Plur|Person=2|PronType=Prs	0	root	_	_
4	есть	быть	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
5	дор	дор	NOUN	_	Foreign=Yes	3	nsubj	_	_
6	блю	блю	NOUN	_	Foreign=Yes	5	flat:foreign	_	SpaceAfter=No
7	?	?	PUNCT	_	_	3	punct	_	_

~~~


