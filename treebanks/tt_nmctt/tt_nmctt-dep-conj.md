---
layout: base
title:  'Statistics of conj in UD_Tatar-NMCTT'
udver: '2'
---

## Treebank Statistics: UD_Tatar-NMCTT: Relations: `conj`

This relation is universal.

38 nodes (3%) are attached to their parents as `conj`.

38 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.97368421052632.

The following 7 pairs of parts of speech are connected with `conj`: <tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt> (20; 53% instances), <tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt>-<tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt> (8; 21% instances), <tt><a href="tt_nmctt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tt_nmctt-pos-ADJ.html">ADJ</a></tt> (4; 11% instances), <tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tt_nmctt-pos-ADJ.html">ADJ</a></tt> (2; 5% instances), <tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt>-<tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt>-<tt><a href="tt_nmctt-pos-ADJ.html">ADJ</a></tt> (1; 3% instances).


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
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 17 conj	color:blue
1	Бөек	бөек	ADJ	_	_	3	amod	_	LangID=TT
2	Ватан	ватан	NOUN	_	Case=Nom|Number=Sing	3	nmod	_	LangID=TT
3	сугышында	сугыш	NOUN	_	Case=Loc|Number=Sing|Person[psor]=3	5	obl	_	LangID=TT
4	һәлак	һәлак	NOUN	_	Case=Nom|Number=Sing	5	xcomp	_	LangID=TT
5	булган	бул	VERB	_	Tense=Past|VerbForm=Part	6	amod	_	LangID=TT
6	батырларны	батыр	NOUN	_	Case=Acc|Number=Plur	12	obj	_	LangID=TT
7	бер	бер	NUM	_	NumType=Card	8	nummod	_	LangID=TT
8	минут	минут	NOUN	_	Case=Nom|Number=Sing	12	obl	_	LangID=TT
9	тынлык	тынлык	NOUN	_	Case=Nom|Number=Sing	12	obl	_	LangID=TT
10	белән	белән	ADP	_	_	9	case	_	LangID=TT
11	искә	искә	NOUN	_	Case=Dat|Number=Sing	12	obl	_	LangID=TT
12	алдылар	ал	VERB	_	Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	LangID=TT
13	һәм	һәм	CCONJ	_	_	17	cc	_	LangID=TT
14	Җиңү	җиң	VERB	_	Case=Nom|Number=Sing|VerbForm=Vnoun	15	nmod	_	LangID=TT
15	Монументына	монумент	NOUN	_	Case=Dat|Number=Sing|Person[psor]=3	17	obl	_	CSPoint=Монумент§ына|LangID=MIXED[RU§TT]
16	чәчәкләр	чәчәк	NOUN	_	Case=Nom|Number=Plur	17	obj	_	LangID=TT
17	куйдылар	куй	VERB	_	Number=Plur|Person=3|Tense=Past|VerbForm=Fin	12	conj	_	LangID=TT|SpaceAfter=No
18	.	.	PUNCT	_	_	17	punct	_	LangID=OTHER

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


