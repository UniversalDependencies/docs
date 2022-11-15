---
layout: base
title:  'Statistics of flat in UD_Danish-DDT'
udver: '2'
---

## Treebank Statistics: UD_Danish-DDT: Relations: `flat`

This relation is universal.

1644 nodes (2%) are attached to their parents as `flat`.

1644 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.29622871046229.

The following 14 pairs of parts of speech are connected with `flat`: <tt><a href="da_ddt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="da_ddt-pos-PROPN.html">PROPN</a></tt> (1401; 85% instances), <tt><a href="da_ddt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt> (203; 12% instances), <tt><a href="da_ddt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="da_ddt-pos-NUM.html">NUM</a></tt> (13; 1% instances), <tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da_ddt-pos-PROPN.html">PROPN</a></tt> (8; 0% instances), <tt><a href="da_ddt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="da_ddt-pos-X.html">X</a></tt> (4; 0% instances), <tt><a href="da_ddt-pos-NUM.html">NUM</a></tt>-<tt><a href="da_ddt-pos-X.html">X</a></tt> (3; 0% instances), <tt><a href="da_ddt-pos-X.html">X</a></tt>-<tt><a href="da_ddt-pos-X.html">X</a></tt> (3; 0% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="da_ddt-pos-X.html">X</a></tt>-<tt><a href="da_ddt-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="da_ddt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="da_ddt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da_ddt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="da_ddt-pos-NUM.html">NUM</a></tt>-<tt><a href="da_ddt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="da_ddt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="da_ddt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="da_ddt-pos-X.html">X</a></tt>-<tt><a href="da_ddt-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 flat	color:blue
1	Kelds	Keld	PROPN	_	Case=Gen	2	nmod:poss	_	_
2	oplæg	oplæg	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	4	nsubj	_	_
3	blev	blive	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	4	aux	_	_
4	fulgt	følge	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part	9	ccomp	_	_
5	100	100	NUM	_	NumType=Card	6	nummod	_	_
6	procent	procent	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	4	obl	_	SpaceAfter=No
7	,	,	PUNCT	_	_	4	punct	_	_
8	"	"	PUNCT	_	_	4	punct	_	SpaceAfter=No
9	pointerer	pointere	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
10	Susan	Susan	PROPN	_	_	9	nsubj	_	_
11	Mackensie	Mackensie	PROPN	_	_	10	flat	_	SpaceAfter=No
12	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 flat	color:blue
1	Eddie	Eddie	PROPN	_	_	0	root	_	_
2	Carbone	Carbone	PROPN	_	_	1	flat	_	SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	_
4	italiensk-amerikansk	italiensk-amerikansk	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	5	amod	_	_
5	havnearbejder	havnearbejder	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	1	flat	_	_
6	i	i	ADP	_	AdpType=Prep	7	case	_	_
7	New	New	PROPN	_	_	5	nmod	_	_
8	York	York	PROPN	_	_	7	flat	_	SpaceAfter=No
9	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat	color:blue
1	Fakta	faktum	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	0	root	_	_
2	om	om	ADP	_	AdpType=Prep	3	case	_	_
3	Seat	Seat	PROPN	_	_	1	nmod	_	_
4	Toledo	Toledo	PROPN	_	_	3	flat	_	_
5	2,0	2,0	NUM	_	NumType=Card	4	flat	_	_
6	GLX	GLX	PROPN	_	_	3	flat	_	_
7	OPBYGNING	opbygning	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	6	flat	_	SpaceAfter=No
8	:	:	PUNCT	_	_	10	punct	_	_
9	4/5-personers	4/5-person	NOUN	_	Case=Gen|Definite=Ind|Gender=Com|Number=Plur	10	nmod:poss	_	_
10	sedan	sedan	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	1	nmod	_	SpaceAfter=No
11	.	.	PUNCT	_	_	1	punct	_	_

~~~


