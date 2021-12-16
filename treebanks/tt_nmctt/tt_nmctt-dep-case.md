---
layout: base
title:  'Statistics of case in UD_Tatar-NMCTT'
udver: '2'
---

## Treebank Statistics: UD_Tatar-NMCTT: Relations: `case`

This relation is universal.

36 nodes (3%) are attached to their parents as `case`.

36 instances of `case` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.83333333333333.

The following 6 pairs of parts of speech are connected with `case`: <tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tt_nmctt-pos-ADP.html">ADP</a></tt> (22; 61% instances), <tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt>-<tt><a href="tt_nmctt-pos-ADP.html">ADP</a></tt> (8; 22% instances), <tt><a href="tt_nmctt-pos-PRON.html">PRON</a></tt>-<tt><a href="tt_nmctt-pos-ADP.html">ADP</a></tt> (3; 8% instances), <tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="tt_nmctt-pos-PRON.html">PRON</a></tt>-<tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="tt_nmctt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tt_nmctt-pos-ADP.html">ADP</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 case	color:blue
1	«	«	PUNCT	_	_	3	punct	_	LangID=OTHER|SpaceAfter=No
2	Үтерергә	үтер	VERB	_	VerbForm=Inf	3	advcl	_	LangID=TT
3	омтылу	омтыл	VERB	_	Case=Nom|Number=Sing|VerbForm=Vnoun	5	nmod	_	LangID=TT|SpaceAfter=No
4	»	»	PUNCT	_	_	3	punct	_	LangID=OTHER
5	маддәсе	маддә	NOUN	_	Case=Nom|Number=Sing|Person[psor]=3	9	obl	_	LangID=TT
6	буенча	буенча	ADP	_	_	5	case	_	LangID=TT
7	җинаять	җинаять	NOUN	_	Case=Nom|Number=Sing	8	nmod	_	LangID=TT
8	эше	эш	NOUN	_	Case=Nom|Number=Sing|Person[psor]=3	9	nsubj	_	LangID=TT
9	кузгатылган	кузгат	VERB	_	Number=Sing|Person=3|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	LangID=TT|SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 case	color:blue
1	Сугыш	сугыш	NOUN	_	Case=Nom|Number=Sing	2	nsubj	_	LangID=TT
2	башлангач	башла	VERB	_	Aspect=Perf|VerbForm=Conv|Voice=Pass	11	advcl	_	LangID=TT|SpaceAfter=No
3	,	,	PUNCT	_	_	11	punct	_	LangID=OTHER
4	шәһәрдә	шәһәр	NOUN	_	Case=Loc|Number=Sing	5	obl	_	LangID=TT
5	яшәүчеләр	яшә	VERB	_	Case=Nom|Number=Plur|Tense=Pres|VerbForm=Part	11	obl	_	LangID=TT
6	кебек	кебек	ADP	_	_	5	case	_	LangID=TT
7	үк	үк	ADV	_	_	6	advmod	_	LangID=TT|SpaceAfter=No
8	,	,	PUNCT	_	_	11	punct	_	LangID=OTHER
9	ул	ул	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	11	nsubj	_	LangID=TT
10	фронтка	фронт	NOUN	_	Case=Dat|Number=Sing	11	obl	_	CSPoint=фронт§ка|LangID=MIXED[RU§TT]
11	алына	ал	VERB	_	Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	LangID=TT|SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 case	color:blue
1	Бу	бу	PRON	_	PronType=Dem	9	obl	_	LangID=TT
2	турыда	турыда	ADP	_	_	1	case	_	LangID=TT
3	Түбән	түбән	ADJ	_	_	4	amod	_	LangID=TT
4	Кама	Кама	PROPN	_	Case=Nom|Number=Sing	6	nmod	_	LangID=RU
5	муниципаль	муниципаль	ADJ	_	_	6	amod	_	LangID=RU
6	районы	район	NOUN	_	Case=Nom|Number=Sing|Person[psor]=3	8	nmod	_	LangID=TT
7	рәсми	рәсми	ADJ	_	_	8	amod	_	LangID=TT
8	сайтында	сайт	NOUN	_	Case=Loc|Number=Sing|Person[psor]=3	9	obl	_	CSPoint=сайт§ында|LangID=MIXED[RU§TT]
9	хәбәр	хәбәр	NOUN	_	Case=Nom|Number=Sing	10	compound:lvc	_	LangID=TT
10	ителә	ит	VERB	_	Number=Sing|Person=3|VerbForm=Fin|Voice=Pass	0	root	_	LangID=TT|SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	LangID=OTHER

~~~


