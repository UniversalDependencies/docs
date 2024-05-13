---
layout: base
title:  'Statistics of advmod in UD_Tatar-NMCTT'
udver: '2'
---

## Treebank Statistics: UD_Tatar-NMCTT: Relations: `advmod`

This relation is universal.
There are 1 language-specific subtypes of `advmod`: <tt><a href="tt_nmctt-dep-advmod-emph.html">advmod:emph</a></tt>.

77 nodes (3%) are attached to their parents as `advmod`.

55 instances of `advmod` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.71428571428571.

The following 8 pairs of parts of speech are connected with `advmod`: <tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt>-<tt><a href="tt_nmctt-pos-ADV.html">ADV</a></tt> (37; 48% instances), <tt><a href="tt_nmctt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tt_nmctt-pos-ADV.html">ADV</a></tt> (12; 16% instances), <tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tt_nmctt-pos-ADV.html">ADV</a></tt> (11; 14% instances), <tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt>-<tt><a href="tt_nmctt-pos-ADJ.html">ADJ</a></tt> (7; 9% instances), <tt><a href="tt_nmctt-pos-ADV.html">ADV</a></tt>-<tt><a href="tt_nmctt-pos-ADV.html">ADV</a></tt> (4; 5% instances), <tt><a href="tt_nmctt-pos-NUM.html">NUM</a></tt>-<tt><a href="tt_nmctt-pos-ADV.html">ADV</a></tt> (3; 4% instances), <tt><a href="tt_nmctt-pos-PRON.html">PRON</a></tt>-<tt><a href="tt_nmctt-pos-ADV.html">ADV</a></tt> (2; 3% instances), <tt><a href="tt_nmctt-pos-ADP.html">ADP</a></tt>-<tt><a href="tt_nmctt-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 advmod	color:blue
1	Хәзер	хәзер	ADV	_	_	5	advmod	_	LangID=TT
2	имгәнгән	имгән	VERB	_	Tense=Past|VerbForm=Part	3	amod	_	LangID=TT
3	кеше	кеше	NOUN	_	Case=Nom|Number=Sing	5	nsubj	_	LangID=TT
4	хастаханәдә	хастаханә	NOUN	_	Case=Loc|Number=Sing	5	obl	_	LangID=TT
5	ята	ят	VERB	_	Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	LangID=TT|SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 advmod	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 8 advmod	color:blue
1	Ул	ул	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	13	nsubj	_	LangID=TT
2	мюзиклны	мюзикл	NOUN	_	Case=Acc|Number=Sing	3	obj	_	CSPoint=мюзикл§ны|LangID=MIXED[RU§TT]
3	төшерү	төшер	VERB	_	Case=Nom|Number=Sing|VerbForm=Vnoun	5	obl	_	LangID=TT
4	турында	турында	ADP	_	_	3	case	_	LangID=TT
5	килешү	килеш	VERB	_	Case=Nom|Number=Sing|VerbForm=Vnoun	6	obj	_	LangID=TT
6	төзелгәнен	төз	VERB	_	Case=Acc|Number=Sing|Person[psor]=3|VerbForm=Part|Voice=Pass	13	obj	_	LangID=TT|SpaceAfter=No
7	,	,	PUNCT	_	_	12	punct	_	LangID=OTHER
8	хәзер	хәзер	ADV	_	_	12	advmod	_	LangID=TT
9	матди	матди	ADJ	_	_	10	amod	_	LangID=TT
10	яктан	як	NOUN	_	Case=Abl|Number=Sing	12	obl	_	LangID=TT
11	ярдәм	ярдәм	NOUN	_	Case=Nom|Number=Sing	12	nsubj	_	LangID=TT
12	кирәклеген	кирәклек	NOUN	_	Case=Acc|Number=Sing|Person[psor]=3	6	parataxis	_	LangID=TT
13	әйтте	әйт	VERB	_	Person=3|Tense=Past|VerbForm=Fin	0	root	_	LangID=TT|SpaceAfter=No
14	.	.	PUNCT	_	_	13	punct	_	LangID=OTHER

~~~


