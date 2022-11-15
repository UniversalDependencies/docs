---
layout: base
title:  'Statistics of conj in UD_Tatar-NMCTT'
udver: '2'
---

## Treebank Statistics: UD_Tatar-NMCTT: Relations: `conj`

This relation is universal.

92 nodes (4%) are attached to their parents as `conj`.

92 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.89130434782609.

The following 10 pairs of parts of speech are connected with `conj`: <tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt> (51; 55% instances), <tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt>-<tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt> (20; 22% instances), <tt><a href="tt_nmctt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tt_nmctt-pos-ADJ.html">ADJ</a></tt> (4; 4% instances), <tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt>-<tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt> (4; 4% instances), <tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="tt_nmctt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tt_nmctt-pos-ADJ.html">ADJ</a></tt> (3; 3% instances), <tt><a href="tt_nmctt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tt_nmctt-pos-PROPN.html">PROPN</a></tt> (3; 3% instances), <tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tt_nmctt-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="tt_nmctt-pos-ADV.html">ADV</a></tt>-<tt><a href="tt_nmctt-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt>-<tt><a href="tt_nmctt-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 conj	color:blue
1	Бу	бу	DET	_	_	2	det	_	LangID=TT
2	мөнәсәбәт	мөнәсәбәт	NOUN	_	Case=Nom|Number=Sing	9	nsubj	_	LangID=TT
3	ул	ул	DET	_	_	4	det	_	LangID=TT
4	Хөкүмәт	хөкүмәт	NOUN	_	Case=Nom|Number=Sing	9	obl	_	LangID=TT|SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	LangID=OTHER
6	Президент	президент	NOUN	_	Case=Nom|Number=Sing	4	conj	_	LangID=RU
7	тарафыннан	тараф	NOUN	_	Case=Abl|Number=Sing|Person[psor]=3	6	case	_	LangID=TT
8	бик	бик	ADV	_	_	9	advmod	_	LangID=TT
9	яхшы	яхшы	ADJ	_	_	0	root	_	LangID=TT|SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 conj	color:blue
1	Яңгыр	яңгыр	NOUN	_	Case=Nom|Number=Sing	2	nsubj	_	LangID=TT
2	яву	яу	VERB	_	Case=Nom|Number=Sing|VerbForm=Vnoun	6	nmod	_	LangID=TT
3	һәм	һәм	CCONJ	_	_	5	cc	_	LangID=TT
4	яшен	яшен	NOUN	_	Case=Nom|Number=Sing	5	nsubj	_	LangID=TT
5	булу	бул	VERB	_	Case=Nom|Number=Sing|VerbForm=Vnoun	2	conj	_	LangID=TT
6	ихтималы	ихтимал	NOUN	_	Case=Nom|Number=Sing|Person[psor]=3	7	nsubj	_	LangID=TT
7	саклана	сакла	VERB	_	Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	LangID=TT|SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 conj	color:blue
1	Хәзер	хәзер	ADV	_	_	11	advmod	_	LangID=TT
2	Татарстанда	Татарстан	PROPN	_	Case=Loc|Number=Sing	11	obl	_	LangID=TT
3	стационар	стационар	ADJ	_	_	6	amod	_	LangID=RU
4	һәм	һәм	CCONJ	_	_	5	cc	_	LangID=TT
5	мобиль	мобиль	ADJ	_	_	3	conj	_	LangID=RU
6	бригадалар	бригада	NOUN	_	Case=Nom|Number=Plur	11	obl	_	CSPoint=бригада§лар|LangID=MIXED[RU§TT]
7	өчен	өчен	ADP	_	_	6	case	_	LangID=TT
8	163	163	NUM	_	_	10	nummod	_	LangID=TT
9	вакцинация	вакцинация	NOUN	Case=Nom|Number=Sing	_	10	nmod	_	LangID=RU
10	пункты	пункт	NOUN	_	Case=Nom|Number=Sing|Person[psor]=3	11	nsubj	_	CSPoint=пункт§ы|LangID=MIXED[RU§TT]
11	эшли	эшлә	VERB	_	Person=3|Tense=Pres|VerbForm=Fin	0	root	_	LangID=TT|SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	_	LangID=OTHER

~~~


