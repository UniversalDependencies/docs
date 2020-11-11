---
layout: base
title:  'Statistics of fixed in UD_Breton-KEB'
udver: '2'
---

## Treebank Statistics: UD_Breton-KEB: Relations: `fixed`

This relation is universal.

63 nodes (1%) are attached to their parents as `fixed`.

63 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.03174603174603.

The following 8 pairs of parts of speech are connected with `fixed`: <tt><a href="br_keb-pos-AUX.html">AUX</a></tt>-<tt><a href="br_keb-pos-X.html">X</a></tt> (34; 54% instances), <tt><a href="br_keb-pos-ADP.html">ADP</a></tt>-<tt><a href="br_keb-pos-X.html">X</a></tt> (13; 21% instances), <tt><a href="br_keb-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="br_keb-pos-X.html">X</a></tt> (10; 16% instances), <tt><a href="br_keb-pos-ADP.html">ADP</a></tt>-<tt><a href="br_keb-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="br_keb-pos-ADV.html">ADV</a></tt>-<tt><a href="br_keb-pos-ADP.html">ADP</a></tt> (1; 2% instances), <tt><a href="br_keb-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="br_keb-pos-X.html">X</a></tt> (1; 2% instances), <tt><a href="br_keb-pos-NUM.html">NUM</a></tt>-<tt><a href="br_keb-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="br_keb-pos-X.html">X</a></tt>-<tt><a href="br_keb-pos-ADP.html">ADP</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 fixed	color:blue
1	C’hwitellat	c’hwitellat	VERB	vblex	VerbForm=Inf	0	root	_	_
2	a	a	AUX	vpart	_	1	aux	_	_
3	ra	ober	AUX	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	aux	_	_
4	en	en	AUX	vpart	_	6	aux	_	_
5	ur	ur	X	x	_	4	fixed	_	_
6	labourat	labourat	VERB	vblex	VerbForm=Inf	1	advcl	_	SpaceAfter=No
7	.	.	PUNCT	sent	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 fixed	color:blue
1	Cheñch	cheñch	VERB	vblex	VerbForm=Inf	0	root	_	_
2	a	a	AUX	vpart	_	1	aux	_	_
3	raio	ober	AUX	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	1	aux	_	_
4	spontus	spontus	ADJ	adj	_	1	advmod	_	_
5	e	e	DET	det	Gender[psor]=Masc|Poss=Yes	6	det	_	_
6	vuhez	buhez	NOUN	n	Gender=Fem|Number=Sing	1	obj	_	_
7	abalamour	abalamour	ADP	pr	_	10	case	_	_
8	d'	da	X	x	_	7	fixed	_	SpaceAfter=No
9	an	an	DET	det	_	10	det	_	_
10	enklask	enklask	NOUN	n	Gender=Masc|Number=Sing	1	obl	_	SpaceAfter=No
11	-se	se	ADV	adv	_	1	advmod	_	SpaceAfter=No
12	.	.	PUNCT	sent	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	Tra	tra	SCONJ	cnjadv	_	6	mark	_	_
2	ma	ma	X	x	_	1	fixed	_	_
3	vo	bezañ	AUX	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	6	cop	_	_
4	mor	mor	NOUN	n	Gender=Masc|Number=Sing	6	nsubj	_	_
5	'vel	evel	ADP	pr	_	6	case	_	_
6	mur	mur	NOUN	n	Gender=Fem|Number=Sing	0	root	_	_
7	'n	un	DET	det	_	6	det	_	_
8	he	he	DET	det	Gender[psor]=Fem|Poss=Yes	9	det	_	_
9	zro	tro	NOUN	n	Gender=Fem|Number=Sing	6	nmod:gen	_	SpaceAfter=No
10	,	,	PUNCT	cm	_	13	punct	_	_
11	ra	ra	AUX	vpart	Mood=Opt	13	aux	_	_
12	vezo	bezañ	AUX	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	13	cop	_	_
13	digabestr	digabestr	ADJ	adj	_	6	parataxis	_	_
14	ma	ma	DET	det	Poss=Yes	15	det	_	_
15	bro	bro	NOUN	n	Gender=Fem|Number=Sing	13	nsubj	_	SpaceAfter=No
16	!	!	PUNCT	sent	_	6	punct	_	_

~~~


