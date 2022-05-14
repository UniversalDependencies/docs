---
layout: base
title:  'Statistics of parataxis in UD_Tatar-NMCTT'
udver: '2'
---

## Treebank Statistics: UD_Tatar-NMCTT: Relations: `parataxis`

This relation is universal.

24 nodes (2%) are attached to their parents as `parataxis`.

23 instances of `parataxis` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.08333333333333.

The following 9 pairs of parts of speech are connected with `parataxis`: <tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt>-<tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt> (7; 29% instances), <tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt> (5; 21% instances), <tt><a href="tt_nmctt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt> (4; 17% instances), <tt><a href="tt_nmctt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt> (2; 8% instances), <tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt>-<tt><a href="tt_nmctt-pos-ADJ.html">ADJ</a></tt> (2; 8% instances), <tt><a href="tt_nmctt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tt_nmctt-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="tt_nmctt-pos-NUM.html">NUM</a></tt>-<tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt>-<tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 13 parataxis	color:blue
1	Көчле	көчле	ADJ	_	_	2	amod	_	LangID=TT
2	җил	җил	NOUN	_	Case=Nom|Number=Sing	3	nsubj	_	LangID=TT
3	саклана	сакла	VERB	_	Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	LangID=TT|SpaceAfter=No
4	,	,	PUNCT	_	_	13	punct	_	LangID=OTHER
5	аның	ул	PRON	_	Case=Gen|Number=Sing|Person=3|PronType=Prs	6	nmod	_	LangID=TT
6	тизлеге	тизлек	NOUN	_	Case=Nom|Number=Sing|Person[psor]=3	13	nsubj	_	LangID=TT
7	секундына	секунд	NOUN	_	Case=Dat|Number=Sing|Person[psor]=3	11	nmod	_	CSPoint=секунд§ына|LangID=MIXED[RU§TT]
8	15	15	NUM	_	_	11	nummod	_	LangID=TT
9	-	-	PUNCT	_	_	8	punct	_	LangID=OTHER
10	20	20	NUM	_	_	8	flat	_	LangID=TT
11	метрга	метр	NOUN	_	Case=Dat|Number=Sing	13	obl	_	CSPoint=метр§га|LangID=MIXED[RU§TT]
12	кадәр	кадәр	ADP	_	_	11	case	_	LangID=TT
13	җитәчәк	җит	VERB	_	Tense=Fut|VerbForm=Part	3	parataxis	_	LangID=TT|SpaceAfter=No
14	.	.	PUNCT	_	_	3	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 17 parataxis	color:blue
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
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 27 parataxis	color:blue
1	«	«	PUNCT	_	_	16	punct	_	LangID=OTHER|SpaceAfter=No
2	Математика	Математика	NOUN	_	Case=Nom|Number=Sing	13	obl	_	LangID=RU
3	һәм	һәм	CCONJ	_	_	5	cc	_	LangID=TT
4	чит	чит	ADJ	_	_	5	amod	_	LangID=TT
5	тел	тел	NOUN	_	Case=Nom|Number=Sing	2	conj	_	LangID=TT|SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	LangID=OTHER
7	тарих	тарих	NOUN	_	Case=Nom|Number=Sing	2	conj	_	LangID=TT
8	һәм	һәм	CCONJ	_	_	10	cc	_	LangID=TT
9	чит	чит	ADJ	_	_	10	amod	_	LangID=TT
10	тел	тел	NOUN	_	Case=Nom|Number=Sing	7	conj	_	LangID=TT
11	буенча	буенча	ADP	_	_	2	case	_	LangID=TT
12	белем	белем	NOUN	_	Case=Nom|Number=Sing	13	obj	_	LangID=TT
13	алган	ал	VERB	_	Tense=Pres|VerbForm=Part	14	amod	_	LangID=TT
14	белгечләр	белгеч	NOUN	_	Case=Nom|Number=Plur	16	nsubj	_	LangID=TT
15	мәктәпләргә	мәктәп	NOUN	_	Case=Dat|Number=Plur	16	obl	_	LangID=TT
16	кирәк	кирәк	ADJ	_	_	0	root	_	LangID=TT|SpaceAfter=No
17	,	,	PUNCT	_	_	22	punct	_	LangID=OTHER
18	алар	ул	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	19	nsubj	_	LangID=TT
19	төпләнеп	төплә	VERB	_	VerbForm=Conv|Voice=Pass	22	ccomp	_	LangID=TT
20	калыр	кал	AUX	_	Mood=Irr|Number=Sing|Person=3|Tense=Fut|VerbForm=Part	19	aux	_	LangID=TT
21	дип	дип	SCONJ	_	_	19	mark	_	LangID=TT
22	өметләнәбез	өметлән	VERB	_	Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	16	parataxis	_	LangID=TT|SpaceAfter=No
23	»	»	PUNCT	_	_	16	punct	_	LangID=OTHER|SpaceAfter=No
24	,	,	PUNCT	_	_	27	punct	_	LangID=OTHER
25	—	—	PUNCT	_	_	27	punct	_	LangID=OTHER
26	дип	дип	SCONJ	_	_	27	cc	_	LangID=TT
27	белдерде	бел	VERB	_	Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Cau	16	parataxis	_	LangID=TT
28	ул	ул	PRON	_	_	27	nsubj	_	LangID=TT|SpaceAfter=No
29	.	.	PUNCT	_	_	27	punct	_	LangID=OTHER

~~~


