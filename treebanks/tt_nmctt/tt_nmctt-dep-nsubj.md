---
layout: base
title:  'Statistics of nsubj in UD_Tatar-NMCTT'
udver: '2'
---

## Treebank Statistics: UD_Tatar-NMCTT: Relations: `nsubj`

This relation is universal.

78 nodes (7%) are attached to their parents as `nsubj`.

72 instances of `nsubj` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.93589743589744.

The following 12 pairs of parts of speech are connected with `nsubj`: <tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt>-<tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt> (41; 53% instances), <tt><a href="tt_nmctt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt> (9; 12% instances), <tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt>-<tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt> (7; 9% instances), <tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt> (6; 8% instances), <tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt>-<tt><a href="tt_nmctt-pos-PRON.html">PRON</a></tt> (6; 8% instances), <tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt>-<tt><a href="tt_nmctt-pos-PROPN.html">PROPN</a></tt> (3; 4% instances), <tt><a href="tt_nmctt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tt_nmctt-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="tt_nmctt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tt_nmctt-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="tt_nmctt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tt_nmctt-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tt_nmctt-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt>-<tt><a href="tt_nmctt-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nsubj	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 nsubj	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj	color:blue
1	Яңа	яңа	ADJ	_	_	2	amod	_	LangID=TT
2	чикләүләр	чиклә	VERB	_	Case=Nom|Number=Plur|VerbForm=Vnoun	6	nsubj	_	LangID=TT
3	11	11	NUM	_	NumType=Card	6	obl	_	LangID=TT
4	октябрьдә	октябрь	NOUN	_	Case=Loc|Number=Plur	3	parataxis	_	LangID=TT
5	гамәлгә	гамәл	NOUN	_	Case=Dat|Number=Plur	6	obl	_	LangID=TT
6	кертеләчәк	кер	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Part|Voice=CauPass	0	root	_	LangID=TT|SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	LangID=OTHER

~~~


