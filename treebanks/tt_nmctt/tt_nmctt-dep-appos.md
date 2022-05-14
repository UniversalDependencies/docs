---
layout: base
title:  'Statistics of appos in UD_Tatar-NMCTT'
udver: '2'
---

## Treebank Statistics: UD_Tatar-NMCTT: Relations: `appos`

This relation is universal.

11 nodes (1%) are attached to their parents as `appos`.

11 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.54545454545455.

The following 3 pairs of parts of speech are connected with `appos`: <tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt> (5; 45% instances), <tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tt_nmctt-pos-PROPN.html">PROPN</a></tt> (5; 45% instances), <tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tt_nmctt-pos-PRON.html">PRON</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 appos	color:blue
1	Чәршәмбе	чәршәмбе	NOUN	_	Case=Nom|Number=Sing	10	obl	_	LangID=TT|SpaceAfter=No
2	,	,	PUNCT	_	_	4	punct	_	LangID=OTHER
3	27	27	NUM	_	NumType=Ord	4	amod	_	LangID=TT
4	апрельдә	апрель	NOUN	_	Case=Loc|Number=Sing	1	appos	_	CSPoint=апрель§дә|LangID=MIXED[RU§TT]|SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	LangID=OTHER
6	җылы	җылы	ADJ	_	_	9	amod	_	LangID=TT
7	тотрыксыз	тотрыксыз	ADJ	_	_	9	amod	_	LangID=TT
8	һава	һава	NOUN	_	Case=Nom|Number=Sing	9	nmod	_	LangID=TT
9	торышы	торыш	VERB	_	Case=Nom|Number=Sing|Person[psor]=3	10	nsubj	_	LangID=TT
10	сакланачак	сакла	VERB	_	Tense=Fut|VerbForm=Part|Voice=Mid	0	root	_	LangID=TT|SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	LangID=OTHER

~~~


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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 14 appos	color:blue
1	Үзебезнең	үз	PRON	_	Case=Gen|Number[psor]=Plur|Person[psor]=1	2	nmod	_	LangID=TT
2	тәбигать	тәбигать	NOUN	_	Case=Nom|Number=Sing	16	nsubj	_	LangID=TT|SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	LangID=OTHER
4	кешеләр	кеше	NOUN	_	Case=Nom|Number=Plur	2	conj	_	LangID=TT|SpaceAfter=No
5	,	,	PUNCT	_	_	8	punct	_	LangID=OTHER
6	аларның	алар	PRON	_	Case=Gen|Number=Plur|PronType=Prs	8	nmod	_	LangID=TT
7	эчке	эчке	ADJ	_	_	8	amod	_	LangID=TT
8	кичерешләре	кичереш	NOUN	_	Case=Nom|Number=Plur|Person[psor]=3	2	conj	_	LangID=TT|SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	LangID=OTHER
10	тарихыбыз	тарих	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Plur|Person[psor]=1	2	conj	_	LangID=TT|SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	LangID=OTHER
12	йолаларыбыз	йола	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Plur|Person[psor]=1	2	conj	_	LangID=TT
13	-	-	PUNCT	_	_	2	punct	_	LangID=OTHER
14	барысы	бары	PRON	_	Case=Nom|Person[psor]=3|PronType=Tot	2	appos	_	LangID=TT
15	да	да	ADV	_	_	14	advmod:emph	_	LangID=TT
16	фотода	фото	NOUN	_	Case=Loc|Number=Sing	0	root	_	CSPoint=фото§да|LangID=MIXED[RU§TT]|SpaceAfter=No
17	.	.	PUNCT	_	_	16	punct	_	LangID=OTHER

~~~


