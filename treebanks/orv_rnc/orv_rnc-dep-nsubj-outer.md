---
layout: base
title:  'Statistics of nsubj:outer in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="orv_rnc-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="orv_rnc-dep-nsubj-pass.html">nsubj:pass</a></tt>.

10 nodes (0%) are attached to their parents as `nsubj:outer`.

10 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.1.

The following 3 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (4; 40% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt> (3; 30% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (3; 30% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 nsubj:outer	color:blue
1	А	а	CCONJ	_	_	7	cc	_	norm="А"
2	отвод	отводъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	7	nsubj:outer	_	norm="отвод"|Decl=2|End=0
3	тем	тотъ	DET	_	Case=Dat|Gender=Fem|Number=Plur|PronType=Dem	4	det	_	norm="тем"|Decl=X|End=ме|check=@
4	землям	земля	NOUN	_	Case=Dat|Gender=Fem|Number=Plur	2	nmod	_	norm="землям"|Decl=1a|End=мя|check=@
5	—	—	PUNCT	_	_	7	punct	_	norm="—"
6	куды	куды	ADV	ADVPRO	Degree=Pos|PronType=Rel	7	advmod	_	upos="ADVPRO"|norm="куды"
7	ходил	ходити	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	norm="ходил"|Decl=X|End=л
8	топор	топоръ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	norm="топор"|Decl=2|End=0|SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	norm=","
10	соха	соха	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	8	conj	_	norm="соха"|Decl=1a|End=а|SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	norm=","
12	коса	коса	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	8	conj	_	norm="коса"|Decl=1a|End=а|SpaceAfter=No
13	.	.	PUNCT	_	_	7	punct	_	norm="."

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:outer	color:blue
1	Что	что	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	4	nsubj:outer	_	_
2	же	же	PART	_	_	4	advmod	_	_
3	есть	быти	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
4	дивно	дивный	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	0	root	_	SpaceAfter=No
5	,	,	PUNCT	_	_	15	punct	_	_
6	яко	яко	SCONJ	_	_	15	mark	_	_
7	Артаксеркс	Артаксерксъ	PROPN	_	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	15	nsubj	_	SpaceAfter=No
8	,	,	PUNCT	_	_	11	punct	_	_
9	аще	аще	SCONJ	_	_	11	mark	_	_
10	и	и	PART	_	_	11	advmod	_	_
11	мертв	мертвый	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	15	advcl	_	SpaceAfter=No
12	,	,	PUNCT	_	_	11	punct	_	_
13	повелению	повелѣние	NOUN	_	Case=Dat|Gender=Neut|Number=Sing	15	iobj	_	_
14	твоему	твой	DET	_	Case=Dat|Gender=Neut|Number=Sing|Poss=Yes|PronType=Prs	13	det	_	_
15	последует	послѣдовати	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	csubj	_	SpaceAfter=No
16	?	?	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 2 nsubj:outer	color:blue
1	а	а	CCONJ	_	_	10	cc	_	norm="а"
2	хлѣбъ	хлѣбъ	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	10	nsubj:outer	_	norm="хлѣбъ"|Decl=2|End=ъ0
3	в	въ	ADP	_	_	4	case	_	norm="в"|check=@
4	Нерчинску	Нерчинскъ	PROPN	_	Case=Loc|Gender=Masc|NameType=Geo|Number=Sing	2	nmod	_	norm="Нерчинску"|Decl=1a|End=у|check=@
5	пуд	пудъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	10	nsubj	_	norm="пуд"|Decl=2|End=0
6	муки	мука	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	norm="муки"|Decl=1a|End=и|check=@
7	ржанои	ржаной	ADJ	_	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	6	amod	_	norm="ржанои"|Decl=X|End=ио|check=@
8	по	по	ADP	_	_	10	case	_	norm="по"|check=@
9	Е	5	NUM	_	Case=Dat|NumForm=Cyril|NumType=Card	10	nummod:gov	_	norm="Е"|Decl=X|End=_|check=@
10	л	алтынъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	0	root	_	norm="л"|Decl=2|End=_
11	пшеничнои	пшеничный	ADJ	_	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	14	nsubj	_	norm="пшеничнои"|Decl=X|End=ио
12	по	по	ADP	_	_	14	case	_	norm="по"
13	І	10	NUM	_	Case=Acc|NumForm=Cyril|NumType=Card	14	nummod:gov	_	norm="І"|Decl=X|End=_
14	л	алтынъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	10	conj	_	norm="л"|Decl=2|End=_
15	хмелю	хмель	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	16	nmod	_	norm="хмелю"|Decl=2|End=ю
16	пуд	пудъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	19	nsubj	_	norm="пуд"|Decl=2|End=0
17	по	по	ADP	_	_	19	case	_	norm="по"
18	Ѕ	6	NUM	_	Case=Dat|NumForm=Cyril|NumType=Card	19	nummod:gov	_	norm="Ѕ"|Decl=X|End=_
19	ру	рубль	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	10	conj	_	norm="ру"|Decl=2|End=_
20	а	а	CCONJ	_	_	25	cc	_	norm="а"
21	иные	иной	DET	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Tot	23	det	_	norm="иные"|Decl=X|End=еы|check=@
22	руские	русский	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	23	amod	_	norm="руские"|Decl=X|End=еи|check=@
23	товары	товаръ	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	25	nsubj	_	norm="товары"|Decl=2|End=ы
24	горазно	гораздно	ADV	_	Degree=Pos	25	advmod	_	norm="горазно"
25	дешевы	дешевый	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Variant=Short	10	conj	_	norm="дешевы"|Decl=X|End=ы
26	а	а	CCONJ	_	_	32	cc	_	norm="а"
27	камок	камка	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	32	nsubj	_	norm="камок"|Decl=1a|End=0
28	и	и	CCONJ	_	_	29	cc	_	norm="и"
29	китаекъ	китайка	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	27	conj	_	norm="китаекъ"|Decl=1a|End=ъ0
30	нне	нынѣ	ADV	ADVPRO	Degree=Pos|PronType=Dem	32	advmod	_	norm="нне"
31	продажных	продажный	ADJ	_	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur	27	amod	_	norm="продажных"|Decl=X|End=хы
32	мало	мало	NUM	_	Case=Nom|NumForm=Word|NumType=Card	25	conj	_	upos="ADVPRO"|norm="мало"|Decl=X|End=о
33	да	да	CCONJ	_	_	35	cc	_	norm="да"
34	и	и	CCONJ	_	_	33	fixed	_	norm="и"
35	нѣтъ	нѣтъ	VERB	PRED	Polarity=Neg	32	conj	_	upos="PRAEDIC"|norm="нѣтъ"|Decl=PRAEDIC|End=ъ0

~~~


