---
layout: base
title:  'Statistics of appos in UD_Tatar-NMCTT'
udver: '2'
---

## Treebank Statistics: UD_Tatar-NMCTT: Relations: `appos`

This relation is universal.

7 nodes (1%) are attached to their parents as `appos`.

7 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.14285714285714.

The following 2 pairs of parts of speech are connected with `appos`: <tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tt_nmctt-pos-PROPN.html">PROPN</a></tt> (5; 71% instances), <tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt> (2; 29% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 appos	color:blue
1	Россия	Россия	PRON	_	Case=Nom|Number=Sing	2	nmod	_	LangID=RU
2	президенты	президент	NOUN	_	Case=Nom|Number=Sing|Person[psor]=3	10	nmod	_	CSPoint=президент§ы|LangID=MIXED[RU§TT]
3	Владимир	Владимир	PROPN	_	Case=Nom|Number=Sing	2	appos	_	LangID=RU
4	Путин	Путин	PROPN	_	Case=Nom|Number=Sing	3	flat	_	LangID=RU
5	күп	күп	ADJ	_	_	6	amod	_	LangID=TT
6	тапкыр	тапкыр	NOUN	_	Case=Nom|Number=Sing	9	obl	_	LangID=TT
7	Covid-19дан	Covid-19	NOUN	_	Case=Abl|Number=Sing	8	nmod	_	CSPoint=Covid-19§дан|LangID=MIXED[OTHER§TT]
8	вакцина	вакцина	NOUN	_	Case=Nom|Number=Sing	9	obj	_	LangID=RU
9	ясарга	яса	VERB	_	VerbForm=Inf	10	advcl	_	LangID=TT
10	чакырды	чакыр	VERB	_	Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	LangID=TT|SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 14 appos	color:blue
1	Аның	ул	PRON	_	Case=Gen|Number=Sing|Person=3|PronType=Prs	3	obl	_	LangID=TT
2	белән	белән	ADP	_	_	1	case	_	LangID=TT
3	хушлашу	хушлаш	VERB	_	Case=Nom|Number=Sing|VerbForm=Vnoun	15	nsubj	_	LangID=TT
4	шимбә	шимбә	NOUN	_	Case=Nom|Number=Sing	5	nmod	_	LangID=TT
5	көнне	көн	NOUN	_	Case=Acc|Number=Sing	15	obl	_	LangID=TT
6	сәгать	сәгать	NOUN	_	Case=Nom|Number=Sing	8	nmod	_	LangID=TT
7	көндезге	көндезге	ADJ	_	_	8	amod	_	LangID=TT
8	12дә	12	NUM	_	Case=Loc|Number=Sing|NumType=Card	15	obl	_	LangID=TT
9	Чапаев	Чапаев	PROPN	_	Case=Nom|Number=Sing	10	nmod	_	LangID=RU
10	урамы	урам	NOUN	_	Case=Nom|Number=Sing|Person[psor]=3	15	obl	_	LangID=TT|SpaceAfter=No
11	,	,	PUNCT	_	_	14	punct	_	LangID=OTHER
12	5	5	NUM	_	NumType=Card	13	amod	_	LangID=TT
13	йорт	йорт	NOUN	_	Case=Nom|Number=Sing	14	nmod	_	LangID=TT
14	ишегалдында	ишегалды	NOUN	_	Case=Loc|Number=Sing|Person[psor]=3	10	appos	_	LangID=TT
15	узачак	уз	VERB	_	Number=Sing|Person=3|Tense=Fut|VerbForm=Part	0	root	_	LangID=TT|SpaceAfter=No
16	.	.	PUNCT	_	_	15	punct	_	LangID=OTHER

~~~


