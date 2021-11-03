---
layout: base
title:  'Statistics of ccomp in UD_Tatar-NMCTT'
udver: '2'
---

## Treebank Statistics: UD_Tatar-NMCTT: Relations: `ccomp`

This relation is universal.

3 nodes (0%) are attached to their parents as `ccomp`.

3 instances of `ccomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.66666666666667.

The following 2 pairs of parts of speech are connected with `ccomp`: <tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt>-<tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt> (2; 67% instances), <tt><a href="tt_nmctt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 ccomp	color:blue
1	«	«	PUNCT	_	_	9	punct	_	LangID=OTHER|SpaceAfter=No
2	Ил	ил	NOUN	_	Case=Nom|Number=Sing	3	nmod	_	LangID=TT
3	күләмендә	күләм	NOUN	_	Case=Loc|Number=Sing|Person[psor]=3	6	obl	_	LangID=TT
4	татарларның	татар	NOUN	_	Case=Gen|Number=Plur	5	nmod	_	LangID=TT
5	саны	сан	NOUN	_	Case=Nom|Number=Sing|Person[psor]=3	6	nsubj	_	LangID=TT
6	кимемәсен	киме	VERB	_	Mood=Imp|Person=3|Polarity=Neg	9	ccomp	_	LangID=TT
7	иде	иде	AUX	_	Number=Sing|Person=3	6	aux	_	LangID=TT
8	дип	дип	SCONJ	_	_	6	cc	_	LangID=TT
9	теләр	телә	VERB	_	Mood=Irr|Tense=Fut|VerbForm=Part	0	root	_	LangID=TT
10	идем	иде	AUX	_	Number=Sing|Person=1	9	aux	_	LangID=TT|SpaceAfter=No
11	.	.	PUNCT	_	_	9	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 8 ccomp	color:blue
1	Хәзер	хәзер	ADV	_	_	8	advmod	_	LangID=TT
2	тикшерүчеләр	тикшер	VERB	_	Case=Nom|Number=Plur|Tense=Pres|VerbForm=Part	8	nsubj	_	LangID=TT
3	бу	бу	DET	_	_	4	det	_	LangID=TT
4	хәл	хәл	NOUN	_	Case=Nom|Number=Sing	5	nsubj	_	LangID=TT
5	килеп	кил	VERB	_	VerbForm=Conv	7	nmod	_	LangID=TT
6	чыгу	чык	AUX	_	Case=Nom|Number=Sing|VerbForm=Vnoun	5	aux	_	LangID=TT
7	сәбәпләрен	сәбәп	NOUN	_	Case=Acc|Number=Plur|Person[psor]=3	8	obj	_	LangID=TT
8	ачыклый	ачыкла	VERB	_	Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	22	ccomp	_	LangID=TT|SpaceAfter=No
9	,	,	PUNCT	_	_	17	punct	_	LangID=OTHER
10	шулай	шулай	ADV	_	_	17	advmod	_	LangID=TT
11	ук	ук	ADV	_	_	10	advmod	_	LangID=TT
12	ир-атны	ир-ат	NOUN	_	Case=Acc|Number=Sing	14	obj	_	LangID=TT
13	юлга	юл	NOUN	_	Case=Dat|Number=Sing	14	obl	_	LangID=TT
14	этеп	эт	VERB	_	VerbForm=Conv	16	amod	_	LangID=TT
15	чыгарган	чык	AUX	_	Tense=Past|VerbForm=Part|Voice=Cau	14	aux	_	LangID=TT
16	кешене	кеше	NOUN	_	Case=Acc|Number=Sing	17	obj	_	LangID=TT
17	эзлиләр	эзлә	VERB	_	Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	8	conj	_	LangID=TT|SpaceAfter=No
18	,	,	PUNCT	_	_	19	punct	_	LangID=OTHER
19	дип	дип	SCONJ	_	_	8	mark	_	LangID=TT
20	хәбәр	хәбәр	NOUN	_	Case=Nom|Number=Sing	21	compound:lvc	_	LangID=TT
21	итте	ит	VERB	_	Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	LangID=TT
22	Россия	Россия	PROPN	_	Case=Nom|Number=Sing	24	nmod	_	LangID=RU
23	Тикшерү	тикшер	VERB	_	Case=Nom|Number=Sing|VerbForm=Vnoun	24	nmod	_	LangID=TT
24	идарәсенең	идарә	NOUN	_	Case=Gen|Number=Sing|Person[psor]=3	28	nmod	_	LangID=TT
25	Татарстан	Татарстан	PROPN	_	Case=Nom|Number=Sing	27	obl	_	LangID=TT
26	буенча	буенча	ADP	_	_	25	case	_	LangID=TT
27	Тикшерү	тикшер	VERB	_	Case=Nom|Number=Sing|VerbForm=Vnoun	28	nmod	_	LangID=TT
28	идарәсе	идарә	NOUN	_	Case=Nom|Number=Sing|Person[psor]=3	29	nmod	_	LangID=TT
29	җитәкчесенең	җитәкче	NOUN	_	Case=Gen|Number=Sing|Person[psor]=3	31	nmod	_	LangID=TT
30	өлкән	өлкән	ADJ	_	_	31	amod	_	LangID=TT
31	ярдәмчесе	ярдәмче	NOUN	_	Case=Nom|Number=Sing|Person[psor]=3	21	nsubj	_	LangID=TT
32	Андрей	Андрей	PROPN	_	Case=Nom|Number=Sing	31	appos	_	LangID=RU
33	Шептицкий	Шептицкий	PROPN	_	Case=Nom|Number=Sing	32	flat	_	LangID=RU|SpaceAfter=No
34	.	.	PUNCT	_	_	21	punct	_	LangID=OTHER

~~~


