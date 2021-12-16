---
layout: base
title:  'Statistics of nummod in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `nummod`

This relation is universal.
There are 1 language-specific subtypes of `nummod`: <tt><a href="orv_rnc-dep-nummod-gov.html">nummod:gov</a></tt>.

116 nodes (0%) are attached to their parents as `nummod`.

108 instances of `nummod` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.20689655172414.

The following 5 pairs of parts of speech are connected with `nummod`: <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (110; 95% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (3; 3% instances), <tt><a href="orv_rnc-pos-DET.html">DET</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Тако	тако	ADV	_	Degree=Pos	0	root	_	_
2	ж	жъ	PART	_	_	1	advmod	_	_
3	на	на	ADP	_	_	5	case	_	_
4	обѣ	оба	NUM	_	Case=Acc|Gender=Fem	5	nummod	_	_
5	сторонѣ	сторона	NOUN	_	Case=Acc|Gender=Fem|Number=Count	1	obl	_	SpaceAfter=No
6	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 21 nummod	color:blue
1	А	а	CCONJ	_	_	9	cc	_	_
2	дворяномъ	дворянинъ	NOUN	_	Case=Dat|Gender=Masc|Number=Plur	9	iobj	_	_
3	твоимъ	твой	DET	_	Case=Dat|Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs	2	det	_	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	_	_
5	како	како	ADV	_	Degree=Pos	6	advmod	_	_
6	пошло	поити	VERB	_	Aspect=Perf|Gender=Neut|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	9	advcl	_	SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	_
8	погонъ	погонъ	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	9	obj	_	_
9	имати	имати	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	0	root	_	SpaceAfter=No
10	:	:	PUNCT	_	_	15	punct	_	_
11	от	отъ	ADP	_	_	12	case	_	_
12	князя	князь	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	15	orphan	_	_
13	по	по	ADP	_	_	15	case	_	_
14	5	5	NUM	_	Case=Acc|NumForm=Digit	15	nummod:gov	_	_
15	кунъ	куна	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	8	parataxis	_	SpaceAfter=No
16	,	,	PUNCT	_	_	22	punct	_	_
17	а	а	CCONJ	_	_	22	cc	_	_
18	от	отъ	ADP	_	_	19	case	_	_
19	тиуна	тиунъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	22	orphan	_	_
20	по	по	ADP	_	_	22	case	_	_
21	двѣ	два	NUM	_	Case=Acc|Gender=Fem	22	nummod	_	_
22	дългѣи	долгий	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Count	15	conj	_	SpaceAfter=No
23	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 43	bgColor:blue
# visual-style 43	fgColor:white
# visual-style 38	bgColor:blue
# visual-style 38	fgColor:white
# visual-style 38 43 nummod	color:blue
1	Вси	весь	DET	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Tot	12	nsubj	_	Norm=Вси
2	же	же	CCONJ	_	_	12	cc	_	Norm=же|SpaceAfter=No
3	,	,	PUNCT	_	_	10	punct	_	Norm=,
4	при	при	ADP	_	_	6	case	_	Norm=при
5	днешне(м)	днешний	ADJ	_	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing	6	amod	_	Norm=днешнемъ
6	празднованіи	празднование	NOUN	_	Case=Loc|Gender=Neut|Number=Sing	10	obl	_	Norm=празднованіи
7	обще	обще	ADV	_	Degree=Pos	10	advmod	_	Norm=обще
8	и	и	CCONJ	_	_	9	cc	_	Norm=и
9	еди(н)стве(н)но	единственно	ADV	_	Degree=Pos	7	conj	_	Norm=единственно
10	радꙋющесꙗ	радоватися	VERB	_	Aspect=Imp|Reflex=Yes|Tense=Pres|VerbForm=Conv|Voice=Mid	12	advcl	_	Norm=радꙋющесꙗ|SpaceAfter=No
11	,	,	PUNCT	_	_	10	punct	_	Norm=,
12	вознесѣмъ	вознести	VERB	_	Aspect=Perf|Mood=Imp|Number=Plur|Person=1|VerbForm=Fin|Voice=Act	0	root	_	Norm=вознесѣмъ
13	гласы	гласъ	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	10	obj	_	Norm=гласы
14	нш҃а	нашъ	DET	_	Case=Acc|Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs	13	det	_	Norm=наша
15	ко	ко	ADP	_	_	16	case	_	Norm=ко
16	престолꙋ	престолъ	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	12	obl	_	Norm=престолꙋ
17	Бл҃годати	благодать	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	16	nmod	_	Norm=Благодати
18	Бж҃іꙗ	божий	ADJ	_	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	17	amod	_	Norm=Божіꙗ|SpaceAfter=No
19	,	,	PUNCT	_	_	39	punct	_	Norm=,
20	да	да	PART	_	_	39	advmod	_	Norm=да
21	ꙗко	яко	SCONJ	_	_	29	mark	_	Norm=ꙗко
22	дне(с)	днесь	ADV	_	Degree=Pos	23	advmod	_	Norm=днесь
23	рожде(н)ны(м)	родити	VERB	_	Aspect=Perf|Case=Dat|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	29	iobj	_	Norm=рожденнымъ
24	N.	N.	PROPN	_	_	23	appos	_	Norm=N.
25	N.	N.	PROPN	_	_	24	flat:name	_	Norm=N.
26	толикаꙗ	толикий	DET	_	Case=Acc|Gender=Neut|Number=Plur|PronType=Dem	31	det	_	Norm=толикаꙗ
27	и	и	CCONJ	_	_	28	cc	_	Norm=и
28	неизрече(н)наꙗ	неизреченный	ADJ	_	Case=Acc|Degree=Pos|Gender=Neut|Number=Plur	26	conj	_	Norm=неизреченнаꙗ
29	дарова	даровати	VERB	Tense=Aor	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	39	advcl	_	Norm=дарова
30	намъ	мы	PRON	_	Case=Dat|Number=Plur|Person=1|PronType=Prs	29	iobj	_	Norm=намъ
31	бл҃годѣꙗніꙗ	благодѣяние	NOUN	_	Case=Acc|Gender=Neut|Number=Plur	29	obj	_	Norm=благодѣꙗніꙗ|SpaceAfter=No
32	,	,	PUNCT	_	_	34	punct	_	Norm=,
33	сицевыꙗ	сицевый	DET	_	Case=Acc|Gender=Neut|Number=Plur|PronType=Dem	35	det	_	Norm=сицевыꙗ
34	да(р)ствова	дарствовати	VERB	Tense=Aor	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	29	conj	_	Norm=дарствова
35	бл҃гополꙋчіꙗ	благополучие	NOUN	_	Case=Acc|Gender=Neut|Number=Plur	34	obj	_	Norm=благополꙋчіꙗ|SpaceAfter=No
36	,	,	PUNCT	_	_	29	punct	_	Norm=,
37	еще	еще	ADV	_	Degree=Pos	39	advmod	_	Norm=еще
38	сіе	сей	DET	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	44	obj	_	Norm=сіе
39	возбл҃говолитъ	возблаговолити	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Fut|VerbForm=Fin|Voice=Act	12	conj	_	Norm=возблаговолитъ
40	мл(р)діемъ	милосердие	NOUN	_	Case=Ins|Gender=Neut|Number=Sing	39	iobj	_	Norm=млрдіемъ
41	свои(м)	свой	DET	_	Case=Ins|Gender=Neut|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	40	det	_	Norm=своимъ
42	||{Стр._269.}	||{стр._269.}	X	_	_	39	dep	_	Norm=||{Стр._269.}
43	едино	единъ	NUM	_	Case=Acc|Gender=Neut|Number=Sing	38	nummod	_	Norm=едино
44	приложити	приложити	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	39	xcomp	_	Norm=приложити|SpaceAfter=No
45	,	,	PUNCT	_	_	52	punct	_	Norm=,
46	да	да	PART	_	_	52	mark	_	Norm=да
47	сіе	сей	DET	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	49	det	_	Norm=сіе
48	его	онъ	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	49	det	_	Norm=его
49	дарованіе	дарование	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	52	nsubj	_	Norm=дарованіе
50	бꙋдетъ	быти	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	52	cop	_	Norm=бꙋдетъ
51	на(м)	мы	PRON	_	Case=Dat|Number=Plur|Person=1|PronType=Prs	52	iobj	_	Norm=намъ
52	долгоде(н)стве(н)ное	долгоденственный	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	12	conj	_	Norm=долгоденственное
53	и	и	CCONJ	_	_	54	cc	_	Norm=и
54	многолѣтное	многолѣтний	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	52	conj	_	Norm=многолѣтное|SpaceAfter=No
55	,	,	PUNCT	_	_	57	punct	_	Norm=,
56	да	да	PART	_	_	57	advmod	_	Norm=да
57	правителствꙋетъ	правительствовати	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	conj	_	Norm=правителствꙋетъ
58	должайше	должайше	ADV	_	Degree=Sup	57	advmod	_	Norm=должайше
59	и	и	CCONJ	_	_	60	cc	_	Norm=и
60	бл҃гополꙋчнѣйше	благополучнѣйше	ADV	_	Degree=Sup	58	conj	_	Norm=благополꙋчнѣйше
61	Петръ	Петръ	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	57	nsubj	_	Norm=Петръ
62	Великій	великий	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	61	amod	_	Norm=Великій|SpaceAfter=No
63	,	,	PUNCT	_	_	66	punct	_	Norm=,
64	и	и	CCONJ	_	_	66	cc	_	Norm=и
65	да	да	PART	_	_	66	advmod	_	Norm=да
66	знае(м)	знати	VERB	_	Aspect=Imp|Case=Nom|Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Pass	12	conj	_	Norm=знаемъ
67	бꙋдетъ	быти	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	66	cop	_	Norm=бꙋдетъ
68	де(н)	день	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	66	nsubj	_	Norm=день
69	сей	сей	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	68	det	_	Norm=сей
70	вѣко(м)	вѣкъ	NOUN	_	Case=Dat|Gender=Masc|Number=Plur	76	obl	_	Norm=вѣкомъ
71	позны(м)	позный	ADJ	_	Case=Dat|Degree=Pos|Gender=Masc|Number=Plur	70	amod	_	Norm=познымъ
72	сыново(м)	сынъ	NOUN	_	Case=Dat|Gender=Masc|Number=Plur	66	iobj	_	Norm=сыновомъ
73	Россійски(м)	российский	ADJ	_	Case=Dat|Degree=Pos|Gender=Masc|Number=Plur	72	amod	_	Norm=Россійскимъ
74	и	и	CCONJ	_	_	75	cc	_	Norm=и
75	внꙋко(м)	внукъ	NOUN	_	Case=Dat|Gender=Masc|Number=Plur	72	conj	_	Norm=внꙋкомъ
76	родꙗщи(м)сꙗ	родитися	VERB	_	Case=Dat|Gender=Neut|Number=Plur|Reflex=Yes|Tense=Pres|VerbForm=Part|Voice=Mid	72	acl	_	Norm=родꙗщимсꙗ|SpaceAfter=No
77	,	,	PUNCT	_	_	84	punct	_	Norm=,
78	и	и	CCONJ	_	_	84	cc	_	Norm=и
79	по	по	ADP	_	_	83	case	_	Norm=по
80	замѣре(н)ныхъ	замѣрити	VERB	_	Aspect=Perf|Case=Loc|Gender=Neut|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	83	acl	_	Norm=замѣренныхъ
81	щедротами	щедрота	NOUN	_	Case=Ins|Gender=Fem|Number=Plur	80	obl:agent	_	Norm=щедротами
82	бж҃естве(н)ными	божественный	ADJ	_	Case=Ins|Degree=Pos|Gender=Fem|Number=Plur	81	amod	_	Norm=божественными
83	лѣтахъ	лѣто	NOUN	_	Case=Loc|Gender=Neut|Number=Plur	84	obl	_	Norm=лѣтахъ
84	возможетъ	возмочи	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	66	conj	_	Norm=возможетъ
85	гд҃рство	государство	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	84	obj	_	Norm=государство
86	сіе	сей	DET	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	85	det	_	Norm=сіе
87	тако	тако	ADV	_	Degree=Pos	88	advmod	_	Norm=тако
88	просвѣще(н)ное	просвѣщенный	ADJ	_	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	85	amod	_	Norm=просвѣщенное|SpaceAfter=No
89	,	,	PUNCT	_	_	90	punct	_	Norm=,
90	прославлее(н)ное	прославити	VERB	_	Aspect=Perf|Case=Acc|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	88	conj	_	Norm=прославлеенное|SpaceAfter=No
91	,	,	PUNCT	_	_	92	punct	_	Norm=,
92	разшире(н)ное	разширити	VERB	_	Aspect=Perf|Case=Acc|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	88	conj	_	Norm=разширенное|SpaceAfter=No
93	,	,	PUNCT	_	_	94	punct	_	Norm=,
94	ꙋтве(р)жде(н)ное	утвердити	VERB	_	Aspect=Perf|Case=Acc|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	88	obj	_	Norm=ꙋтвержденное
95	оставити	оставити	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	84	xcomp	_	Norm=оставити
96	и	и	CCONJ	_	_	99	cc	_	Norm=и
97	сіе	сей	DET	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	98	det	_	Norm=сіе
98	бл҃гополꙋчіе	благополучие	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	99	obj	_	Norm=благополꙋчіе
99	продолжити	продолжити	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	95	conj	_	Norm=продолжити|SpaceAfter=No
100	,	,	PUNCT	_	_	110	punct	_	Norm=,
101	ꙗко	яко	SCONJ	_	_	110	mark	_	Norm=ꙗко
102	да	да	PART	_	_	110	advmod	_	Norm=да
103	всегда	всегда	ADV	_	Degree=Pos	110	advmod	_	Norm=всегда
104	мы	мы	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	110	nsubj	_	Norm=мы
105	и	и	PART	_	_	106	advmod	_	Norm=и
106	бꙋдꙋщіи	быти	VERB	_	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	104	conj	_	Norm=бꙋдꙋщіи
107	по	по	ADP	_	_	108	case	_	Norm=по
108	насъ	мы	PRON	_	Case=Loc|Number=Plur|Person=1|PronType=Prs	106	obl	_	Norm=насъ
109	радо(ст)но	радостно	ADV	_	Degree=Pos	110	advmod	_	Norm=радостно
110	восклицае(м)	восклицати	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	12	conj	_	Norm=восклицаемъ|SpaceAfter=No
111	:	:	PUNCT	_	_	114	punct	_	Norm=:
112	Петрꙋ	Петръ	PROPN	_	Case=Dat|Gender=Masc|Number=Sing	114	iobj	_	Norm=Петрꙋ
113	Великомꙋ	великий	ADJ	_	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing	112	amod	_	Norm=Великомꙋ
114	честь	честь	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	110	parataxis	_	Norm=честь
115	и	и	CCONJ	_	_	116	cc	_	Norm=и
116	слава	слава	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	114	conj	_	Norm=слава|SpaceAfter=No
117	,	,	PUNCT	_	_	118	punct	_	Norm=,
118	то(р)жество	торжество	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	114	conj	_	Norm=торжество
119	и	и	CCONJ	_	_	120	cc	_	Norm=и
120	побѣди	побѣда	NOUN	_	Case=Nom|Gender=Fem|Number=Plur	118	conj	_	Norm=побѣди|SpaceAfter=No
121	,	,	PUNCT	_	_	124	punct	_	Norm=,
122	на	на	ADP	_	_	124	case	_	Norm=на
123	многаꙗ	многий	DET	_	Case=Acc|Gender=Neut|Number=Plur|PronType=Tot	124	det	_	Norm=многаꙗ
124	лѣта	лѣто	NOUN	_	Case=Acc|Gender=Neut|Number=Plur	114	obl	_	Norm=лѣта|SpaceAfter=No
125	!	!	PUNCT	_	_	12	punct	_	Norm=!

~~~


