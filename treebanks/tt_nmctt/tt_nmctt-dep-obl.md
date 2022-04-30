---
layout: base
title:  'Statistics of obl in UD_Tatar-NMCTT'
udver: '2'
---

## Treebank Statistics: UD_Tatar-NMCTT: Relations: `obl`

This relation is universal.

125 nodes (11%) are attached to their parents as `obl`.

122 instances of `obl` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.2.

The following 12 pairs of parts of speech are connected with `obl`: <tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt>-<tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt> (84; 67% instances), <tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt>-<tt><a href="tt_nmctt-pos-PROPN.html">PROPN</a></tt> (8; 6% instances), <tt><a href="tt_nmctt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt> (5; 4% instances), <tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt> (5; 4% instances), <tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt>-<tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt> (5; 4% instances), <tt><a href="tt_nmctt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt>-<tt><a href="tt_nmctt-pos-NUM.html">NUM</a></tt> (4; 3% instances), <tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt>-<tt><a href="tt_nmctt-pos-PRON.html">PRON</a></tt> (4; 3% instances), <tt><a href="tt_nmctt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tt_nmctt-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tt_nmctt-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="tt_nmctt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tt_nmctt-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obl	color:blue
1	Яңа	яңа	ADJ	_	_	2	amod	_	LangID=TT
2	чикләүләр	чиклә	VERB	_	Case=Nom|Number=Plur|VerbForm=Vnoun	6	nsubj	_	LangID=TT
3	11	11	NUM	_	NumType=Card	6	obl	_	LangID=TT
4	октябрьдә	октябрь	NOUN	_	Case=Loc|Number=Plur	3	parataxis	_	LangID=TT
5	гамәлгә	гамәл	NOUN	_	Case=Dat|Number=Plur	6	obl	_	LangID=TT
6	кертеләчәк	кер	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Part|Voice=CauPass	0	root	_	LangID=TT|SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obl	color:blue
1	Татарстанда	Татарстан	PROPN	_	Case=Loc|Number=Sing	3	obl	_	LangID=TT
2	томан	томан	NOUN	_	Case=Nom|Number=Sing	3	nsubj	_	LangID=TT
3	төшәчәк	төш	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Part	0	root	_	LangID=TT|SpaceAfter=No
4	,	,	PUNCT	_	_	12	punct	_	LangID=OTHER
5	күз	күз	NOUN	_	Case=Nom|Number=Sing	6	nmod	_	LangID=TT
6	күреме	күрем	NOUN	_	Case=Nom|Number=Sing|Person[psor]=3	11	nsubj	_	LangID=TT
7	500	500	NUM	_	NumType=Card	8	nummod	_	LangID=TT
8	метр	метр	NOUN	_	Case=Nom|Number=Sing	11	xcomp	_	LangID=RU
9	яки	яки	CCONJ	_	_	10	cc	_	LangID=TT
10	кимрәк	ким	ADJ	_	Degree=Cmp	8	conj	_	LangID=TT
11	булырга	бул	VERB	_	VerbForm=Inf	12	advcl	_	LangID=TT
12	мөмкин	мөмкин	ADJ	_	_	3	parataxis	_	LangID=TT|SpaceAfter=No
13	.	.	PUNCT	_	_	12	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 8 obl	color:blue
1	«	«	PUNCT	_	_	16	punct	_	LangID=OTHER|SpaceAfter=No
2	Укытучыларны	укы	VERB	_	Case=Acc|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Cau	3	obj	_	LangID=TT
3	тотып	тот	VERB	_	VerbForm=Conv	16	obl	_	LangID=TT
4	калу	кал	AUX	_	Case=Nom|Number=Sing|VerbForm=Vnoun	3	aux	_	LangID=TT
5	өчен	өчен	ADP	_	_	3	case	_	LangID=TT
6	иң	иң	ADV	_	_	7	advmod	_	LangID=TT
7	беренче	беренче	ADJ	_	_	16	advmod	_	LangID=TT
8	укытучыга	укы	VERB	_	Case=Dat|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Cau	16	obl	_	LangID=TT|SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	LangID=OTHER
10	гомумән	гомумән	ADV	_	_	16	advmod	_	LangID=TT|SpaceAfter=No
11	,	,	PUNCT	_	_	10	punct	_	LangID=OTHER
12	мәгариф	мәгариф	NOUN	_	Case=Nom|Number=Sing	13	nmod	_	LangID=TT
13	системасына	система	NOUN	_	Case=Dat|Number=Sing|Person[psor]=3	14	nmod	_	CSPoint=система§сына|LangID=MIXED[RU§TT]
14	мөнәсәбәтне	мөнәсәбәт	NOUN	_	Case=Acc|Number=Sing	15	obj	_	LangID=TT
15	үзгәртергә	үзгәр	VERB	_	VerbForm=Inf|Voice=Cau	16	advcl	_	LangID=TT
16	кирәк	кирәк	ADJ	_	_	0	root	_	LangID=TT|SpaceAfter=No
17	.	.	PUNCT	_	_	16	punct	_	LangID=OTHER

~~~


