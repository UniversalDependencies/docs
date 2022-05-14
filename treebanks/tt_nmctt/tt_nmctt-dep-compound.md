---
layout: base
title:  'Statistics of compound in UD_Tatar-NMCTT'
udver: '2'
---

## Treebank Statistics: UD_Tatar-NMCTT: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="tt_nmctt-dep-compound-lvc.html">compound:lvc</a></tt>.

2 nodes (0%) are attached to their parents as `compound`.

2 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `compound`: <tt><a href="tt_nmctt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tt_nmctt-pos-ADJ.html">ADJ</a></tt> (1; 50% instances), <tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tt_nmctt-pos-SYM.html">SYM</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound	color:blue
1	Антон	Антон	PROPN	_	Case=Nom|Number=Sing	20	nsubj	_	LangID=RU
2	шат	шат	ADJ	_	_	3	compound	_	LangID=TT
3	күңелле	күңелле	ADJ	_	_	4	amod	_	LangID=TT
4	дус	дус	NOUN	_	Case=Nom|Number=Sing	20	obl	_	LangID=TT
5	һәм	һәм	CCONJ	_	_	6	cc	_	LangID=TT
6	иптәш	иптәш	NOUN	_	Case=Nom|Number=Sing	4	conj	_	LangID=TT|SpaceAfter=No
7	,	,	PUNCT	_	_	9	punct	_	LangID=OTHER
8	ышанычлы	ышанычлы	ADJ	_	_	9	amod	_	LangID=TT
9	көрәштәш	көрәштәш	NOUN	_	Case=Nom|Number=Sing	4	parataxis	_	LangID=TT|SpaceAfter=No
10	,	,	PUNCT	_	_	12	punct	_	LangID=OTHER
11	намуслы	намуслы	ADJ	_	_	12	amod	_	LangID=TT
12	хезмәттәш	хезмәттәш	NOUN	_	Case=Nom|Number=Sing	4	parataxis	_	LangID=TT|SpaceAfter=No
13	,	,	PUNCT	_	_	17	punct	_	LangID=OTHER
14	гадел	гадел	ADJ	_	_	17	amod	_	LangID=TT
15	һәм	һәм	CCONJ	_	_	16	cc	_	LangID=TT
16	яхшы	яхшы	ADJ	_	_	14	conj	_	LangID=TT
17	кеше	кеше	NOUN	_	Case=Nom|Number=Sing	4	parataxis	_	LangID=TT
18	буларак	буларак	ADP	_	_	4	case	_	LangID=TT
19	истә	ис	NOUN	_	Case=Loc|Number=Sing	20	obl	_	LangID=TT
20	калыр	кал	VERB	_	Mood=Irr|Number=Sing|Person=3|Tense=Fut|VerbForm=Part	0	root	_	LangID=TT|SpaceAfter=No
21	.	.	PUNCT	_	_	20	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 compound	color:blue
1	Синоптиклар	синоптик	NOUN	_	Case=Nom|Number=Plur	20	nsubj	_	CSPoint=Синоптик§лар|LangID=MIXED[RU§TT]
2	сишәмбе	сишәмбе	NOUN	_	Case=Nom|Number=Sing	5	nmod	_	LangID=TT
3	һәм	һәм	CCONJ	_	_	4	cc	_	LangID=TT
4	чәршәмбе	чәршәмбе	NOUN	_	Case=Nom|Number=Sing	2	conj	_	LangID=TT
5	көннәрендә	көн	NOUN	_	Case=Loc|Number=Plur|Person[psor]=3	11	obl	_	LangID=TT
6	республикада	республика	NOUN	_	Case=Loc|Number=Sing	11	obl	_	CSPoint=республика§да|LangID=MIXED[RU§TT]
7	+	+	SYM	_	_	8	amod	_	LangID=OTHER|SpaceAfter=No
8	23	23	NUM	_	NumType=Card	9	nummod	_	LangID=TT|SpaceAfter=No
9	°С	°С	SYM	_	_	10	compound	_	LangID=OTHER
10	җылы	җылы	NOUN	_	_	11	nmod	_	LangID=TT
11	булуын	бул	VERB	_	Case=Acc|Number=Sing|Person[psor]=3|VerbForm=Vnoun	20	obj	_	LangID=TT|SpaceAfter=No
12	,	,	PUNCT	_	_	17	punct	_	LangID=OTHER
13	ә	ә	CCONJ	_	_	17	cc	_	LangID=TT
14	ял	ял	NOUN	_	Case=Nom|Number=Sing	15	nmod	_	LangID=TT
15	көннәрендә	көн	NOUN	_	Case=Loc|Number=Plur|Person[psor]=3	17	obl	_	LangID=TT
16	салкыннар	салкын	NOUN	_	Case=Nom|Number=Plur	17	nmod	_	LangID=TT
17	көтелүе	көт	VERB	_	Case=Nom|Number=Sing|Person[psor]=3|VerbForm=Vnoun|Voice=Pass	11	conj	_	LangID=TT
18	турында	турында	ADP	_	_	17	case	_	LangID=TT
19	хәбәр	хәбәр	NOUN	_	Case=Nom|Number=Sing	20	compound:lvc	_	LangID=TT
20	итә	ит	VERB	_	Person=3|Tense=Pres|VerbForm=Fin	0	root	_	LangID=TT|SpaceAfter=No
21	.	.	PUNCT	_	_	20	punct	_	LangID=OTHER

~~~


