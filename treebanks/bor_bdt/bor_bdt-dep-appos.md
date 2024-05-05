---
layout: base
title:  'Statistics of appos in UD_Bororo-BDT'
udver: '2'
---

## Treebank Statistics: UD_Bororo-BDT: Relations: `appos`

This relation is universal.

35 nodes (1%) are attached to their parents as `appos`.

35 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.17142857142857.

The following 11 pairs of parts of speech are connected with `appos`: <tt><a href="bor_bdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bor_bdt-pos-NOUN.html">NOUN</a></tt> (12; 34% instances), <tt><a href="bor_bdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bor_bdt-pos-PROPN.html">PROPN</a></tt> (9; 26% instances), <tt><a href="bor_bdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bor_bdt-pos-NOUN.html">NOUN</a></tt> (4; 11% instances), <tt><a href="bor_bdt-pos-ADV.html">ADV</a></tt>-<tt><a href="bor_bdt-pos-PROPN.html">PROPN</a></tt> (2; 6% instances), <tt><a href="bor_bdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bor_bdt-pos-PROPN.html">PROPN</a></tt> (2; 6% instances), <tt><a href="bor_bdt-pos-ADV.html">ADV</a></tt>-<tt><a href="bor_bdt-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="bor_bdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bor_bdt-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="bor_bdt-pos-PRON.html">PRON</a></tt>-<tt><a href="bor_bdt-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="bor_bdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bor_bdt-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="bor_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="bor_bdt-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="bor_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="bor_bdt-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 appos	color:blue
1	Makore	mako	VERB	v	Mood=Ind|Number=Sing|Person=3	0	root	_	_
2	boe	boe	NOUN	n	_	3	nmod	_	_
3	ewadary	batary	NOUN	n	Number=Plur|Person=3	1	obl	_	_
4	tabo	apo	ADP	posp	Number=Sing|Person=3	3	case	_	_
5	,	,	PUNCT	punct	_	4	punct	_	_
6	pawadary	batary	NOUN	n	Clusivity=In|Number=Plur|Person=1	3	appos	_	_
7	tabo	apo	ADP	posp	Number=Sing|Person=3	6	case	_	_
8	kodire	kodire	SCONJ	sconj	_	9	mark	_	_
9	imagore	mako	VERB	v	Mood=Ind|Number=Sing|Person=1	1	advcl	_	_
10	pawadary	batary	NOUN	n	Clusivity=In|Number=Plur|Person=1	9	obl	_	_
11	ji	ji	ADP	posp	Number=Sing|Person=3	10	case	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 appos	color:blue
1	Irore	ro	VERB	v	Mood=Ind|Number=Plur|Person=1	0	root	_	_
2	jiboe	jiboe	NOUN	n	_	1	ccomp	_	_
3	boe	boe	NOUN	n	_	4	nmod	_	_
4	otojiwy	otoji	NOUN	n	Nomzr=Rel	2	nmod	_	front,first;frente,primeiro
5	Mano	Mano	PROPN	propn	_	2	appos	_	_
6	rekodajiwy	rekodaji	NOUN	n	Nomzr=Rel	2	conj	_	behind;atrás
7	Baiia	Baiia	PROPN	propn	_	6	appos	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 20 appos	color:blue
1	Iorydyware	jorydy	VERB	v	Mood=Ind|Number=Sing|Person=1	0	root	_	_
2	jiwygere	ji	NOUN	n	Mood=Ind|Nomzr=Rel|Number=Plur	1	ccomp	_	_
3	Meriri	Meriri	PROPN	propn	_	2	appos	_	_
4	Poro	Poro	PROPN	propn	_	3	compound	_	_
5	,	,	PUNCT	punct	_	3	punct	_	_
6	metyiare	metyia	NOUN	n	Mood=Ind	2	conj	_	_
7	Kamoreu	Kamoreu	PROPN	propn	_	6	appos	_	_
8	,	,	PUNCT	propn	_	7	punct	_	_
9	tugarege	tugaregedy	NOUN	n	Number=Plur	7	appos	_	_
10	.	.	PUNCT	punct	_	7	punct	_	_
11	Iorydyware	_	VERB	v	_	1	parataxis	_	_
12	jiwygere	jorydy	VERB	v	Mood=Ind|Number=Sing|Person=1	11	ccomp	_	_
13	Bakoro	Bakoro	PROPN	propn	_	12	appos	_	_
14	Kudu	Kudu	PROPN	propn	_	13	compound	_	_
15	,	,	PUNCT	punct	_	13	punct	_	_
16	metyia	metyia	NOUN	n	_	12	conj	_	_
17	Akaruio	Akaruio	PROPN	propn	_	16	appos	_	_
18	Bokodori	Bokodori	PROPN	propn	_	17	compound	_	_
19	,	,	PUNCT	punct	_	17	punct	_	_
20	cerae	cerae	NOUN	n	Number=Sing	17	appos	_	_

~~~


