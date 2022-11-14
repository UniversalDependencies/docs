---
layout: base
title:  'Statistics of appos in UD_Tatar-NMCTT'
udver: '2'
---

## Treebank Statistics: UD_Tatar-NMCTT: Relations: `appos`

This relation is universal.

25 nodes (1%) are attached to their parents as `appos`.

25 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.68.

The following 4 pairs of parts of speech are connected with `appos`: <tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tt_nmctt-pos-PROPN.html">PROPN</a></tt> (18; 72% instances), <tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt> (5; 20% instances), <tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tt_nmctt-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt>-<tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 appos	color:blue
1	20	20	NUM	_	NumType=Card	2	nummod	_	LangID=TT
2	медаль	медаль	NOUN	_	Case=Nom|Number=Sing	11	obj	_	LangID=RU
3	һәм	һәм	CCONJ	_	_	5	cc	_	LangID=TT
4	бер	бер	NUM	_	NumType=Card	5	nummod	_	LangID=TT
5	орденны	орден	NOUN	_	Case=Acc|Number=Sing	2	conj	_	CSPoint=орден§ны|LangID=MIXED[RU§TT]
6	Татарстан	Татарстан	PROPN	_	Case=Nom|Number=Sing	7	nmod	_	LangID=TT
7	мөфтие	мөфти	NOUN	_	Case=Nom|Number=Sing|Person[psor]=3	11	nsubj	_	LangID=TT
8	Камил	Камил	PROPN	_	Case=Nom|Number=Sing	7	appos	_	LangID=TT
9	хәзрәт	хәзрәт	NOUN	_	Case=Nom|Number=Sing	8	flat	_	LangID=TT
10	Сәмигуллин	Сәмигуллин	PROPN	_	Case=Nom|Number=Sing	8	flat	_	CSPoint=Сәмигулл§ин|LangID=MIXED[RU§TT]
11	тапшырды	тапшыр	VERB	_	Person=3|Tense=Past|VerbForm=Fin	0	root	_	LangID=TT|SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	_	LangID=OTHER

~~~


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


