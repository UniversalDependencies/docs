---
layout: base
title:  'Statistics of parataxis:discourse in UD_Old_East_Slavic-Ruthenian'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Ruthenian: Relations: `parataxis:discourse`

This relation is a language-specific subtype of <tt><a href="orv_ruthenian-dep-parataxis.html">parataxis</a></tt>.

24 nodes (0%) are attached to their parents as `parataxis:discourse`.

13 instances of `parataxis:discourse` (54%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.5.

The following 8 pairs of parts of speech are connected with `parataxis:discourse`: <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (12; 50% instances), <tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (3; 13% instances), <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-ADV.html">ADV</a></tt> (3; 13% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (2; 8% instances), <tt><a href="orv_ruthenian-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="orv_ruthenian-pos-DET.html">DET</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="orv_ruthenian-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 parataxis:discourse	color:blue
1	не	не	PART	_	Polarity=Neg	2	advmod	_	wf="не"
2	преходи	преходити	VERB	_	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	0	root	_	wf="преходи"
3	бо	бо	SCONJ	_	_	2	mark	_	wf="бо"
4	мовитъ	мовити	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	parataxis:discourse	_	wf="мовитъ"
5	границъ	граница	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	2	obj	_	wf="границъ"
6	которые	который	DET	_	Case=Acc|Gender=Fem|Number=Plur|PronType=Rel	7	obj	_	wf="которые"
7	положили	положити	VERB	_	Aspect=Perf|Number=Plur|Tense=Past|VerbForm=PartRes|Voice=Act	5	acl:relcl	_	wf="положили"
8	ѡ(т)цы	отецъ	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	7	nsubj	_	wf="отцы"
9	твоѝ	твой	DET	_	Case=Nom|Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs	8	det	_	wf="твои"|SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	wf="."

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 parataxis:discourse	color:blue
1	Добро	добрый	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	0	root	_	wf="Добро"
2	мовитъ	мовити	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	parataxis:discourse	_	wf="мовитъ"
3	древо	древо	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	1	nsubj	_	wf="древо"
4	кꙋ	ку	ADP	_	_	5	case	_	wf="ку"
5	пока(р)мꙋ	покармъ	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	1	obl	_	wf="покарму"|SpaceAfter=No
6	,	,	PUNCT	_	_	8	punct	_	wf=","
7	и	и	CCONJ	_	_	8	cc	_	wf="и"
8	ѡздобно	оздобный	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	1	conj	_	wf="оздобно"
9	кꙋ	ку	ADP	_	_	10	case	_	wf="ку"
10	пойзренью	пойзренье	NOUN	_	Case=Dat|Gender=Neut|Number=Sing	8	obl	_	wf="пойзренью"|SpaceAfter=No
11	,	,	PUNCT	_	_	21	punct	_	wf=","
12	але	але	CCONJ	_	_	21	cc	_	wf="але"
13	в(ъ)	въ	ADP	_	_	15	case	_	wf="въ"
14	который	который	DET	_	Case=Acc|Gender=Masc|Number=Sing|PronType=Rel	15	det	_	wf="который"
15	дн̃ь	духъ	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	16	obl:tmod	_	wf="дн̃ь"
16	з(ъ)ист(е)	зъѣсти	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Tense=Fut|VerbForm=Fin|Voice=Act	21	advcl	_	wf="зъисте"
17	ѡ(т)	отъ	ADP	_	_	18	case	_	wf="от"
18	него	оно	PRON	_	Case=Gen|Gender=Neut|Number=Sing|Person=3|PronType=Prs	16	obl	_	wf="него"|SpaceAfter=No
19	,	,	PUNCT	_	_	16	punct	_	wf=","
20	смертїю	смерть	NOUN	_	Case=Ins|Gender=Fem|Number=Sing	21	obl	_	wf="смертию"
21	оумрете	умерети	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Tense=Fut|VerbForm=Fin|Voice=Act	1	conj	_	wf="умрете"|SpaceAfter=No
22	.	.	PUNCT	_	_	1	punct	_	wf="."

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 2 parataxis:discourse	color:blue
1	Што	што	PRON	WP	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	2	det	_	wf="Што"
2	во-пе(р)выхъ	во-первыхъ	ADV	RB	_	21	parataxis:discourse	_	pos="PARENTH"|wf="во-пе(р)выхъ"|SpaceAfter=No
3	,	,	PUNCT	-COMMA-	_	4	punct	_	wf=","
4	Лаврѣнъ	Лаврѣнъ	PROPN	NPA	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	21	nsubj	_	wf="Лаврѣнъ"
5	Му(л)ченъко	Мулченко	PROPN	NPA	Case=Nom|Gender=Masc|NameType=Sur|Number=Sing	4	flat:name	_	wf="Мулченъко"|SpaceAfter=No
6	,	,	PUNCT	-COMMA-	_	15	punct	_	wf=","
7	которы(и)	который	DET	DT	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	15	nsubj	_	wf="которыи"
8	пре(з)	презъ	ADP	IN	_	10	case	_	wf="през"
9	тіє	тый	DET	DT	Case=Acc|Gender=Masc|Number=Plur|PronType=Dem	10	det	_	wf="тіє"
10	днѣ	день	NOUN	NNI	Case=Acc|Gender=Masc|Number=Plur	15	obl:tmod	_	wf="днѣ"
11	в	въ	ADP	IN	_	12	case	_	wf="в"
12	ратуші	ратушъ	NOUN	NNI	Case=Loc|Gender=Masc|Number=Sing	15	obl	_	wf="ратуші"
13	у	въ	ADP	IN	_	14	case	_	wf="у"
14	вєзє(н)ю	вязенє	NOUN	NNI	Case=Loc|Gender=Neut|Number=Sing	15	obl	_	wf="вєзєню"
15	седѣлъ	сидѣти	VERB	VBC	Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	4	acl:relcl	_	wf="седѣлъ"|SpaceAfter=No
16	,	,	PUNCT	-COMMA-	_	15	punct	_	wf=","
17	ѡчеви(с)то	очевисто	ADV	RB	Degree=Pos	21	advmod	_	wf="ѡчевисто"
18	в	въ	ADP	IN	_	20	case	_	wf="в"
19	тіє	тый	DET	DT	Case=Acc|Gender=Neut|Number=Plur|PronType=Dem	20	det	_	wf="тіє"
20	слова	слово	NOUN	NNI	Case=Acc|Gender=Neut|Number=Plur	21	obl	_	wf="слова"
21	при(з)налъ	признати	VERB	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	wf="призналъ"|SpaceAfter=No
22	.	.	PUNCT	-PERIOD-	_	45	punct	_	wf="."|SpaceAfter=No
23	,	,	PUNCT	-COMMA-	_	45	punct	_	wf=","
24	ижь	иже	SCONJ	IN	_	45	mark	_	wf="ижь"
25	«	«	PUNCT	-QUOT-	_	45	punct	_	wf="«"|SpaceAfter=No
26	кгды	ґды	SCONJ	IN	_	33	mark	_	wf="кгды"
27	(м)	быти	AUX	VBC	Clitic=Yes|Number=Sing|Person=1	33	iobj	_	wf="м"
28	у	въ	ADP	IN	_	29	case	_	wf="у"
29	вєзєнью	вязенє	NOUN	NNI	Case=Dat|Gender=Neut|Number=Sing	33	obl	_	wf="вєзєнью"
30	в	въ	ADP	IN	_	31	case	_	wf="в"
31	ча(с)	часъ	NOUN	NNI	Case=Acc|Gender=Masc|Number=Sing	33	obl	_	wf="час"
32	ночъны(и)	ночный	ADJ	JJL	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	31	amod	_	wf="ночъныи"
33	седѣлъ	сидѣти	VERB	VBC	Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	45	advcl	_	wf="седѣлъ"|SpaceAfter=No
34	.	.	PUNCT	-PERIOD-	_	33	punct	_	wf="."|SpaceAfter=No
35	,	,	PUNCT	-COMMA-	_	33	punct	_	wf=","
36	тєди	теды	ADV	ADVPRO	Degree=Pos|PronType=Dem	45	advmod	_	pos="ADVPRO"|wf="тєди"
37	ѡного	оный	DET	DT	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	38	det	_	wf="ѡного"
38	мерочъника	мѣрочникъ	NOUN	NNA	Case=Gen|Gender=Masc|Number=Sing	45	obj	_	wf="мерочъника"
39	с	съ	ADP	IN	_	41	case	_	wf="с"
40	тоєю	тый	DET	DT	Case=Ins|Gender=Fem|Number=Sing|PronType=Dem	41	det	_	wf="тоєю"
41	дѣвкою	дѣвка	NOUN	NNA	Case=Ins|Gender=Fem|Number=Sing	45	obl	_	wf="дѣвкою"
42	ѡ(т)кованою	отковати	VERB	VBNL	Case=Ins|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	41	acl	_	wf="ѡткованою"
43	спо(л)нє	сполне	ADV	RB	Degree=Pos	45	advmod	_	wf="сполнє"
44	спячую	спати	VERB	VBNL	Aspect=Imp|Case=Ins|Gender=Fem|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	45	obl:depict	_	wf="спячую"
45	виде(л)	видѣти	VERB	VBC	Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	21	conj	_	wf="видел"|SpaceAfter=No
46	.	.	PUNCT	-PERIOD-	_	21	punct	_	wf="."

~~~


