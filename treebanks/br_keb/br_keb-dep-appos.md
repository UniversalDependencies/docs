---
layout: base
title:  'Statistics of appos in UD_Breton-KEB'
udver: '2'
---

## Treebank Statistics: UD_Breton-KEB: Relations: `appos`

This relation is universal.

39 nodes (0%) are attached to their parents as `appos`.

39 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.82051282051282.

The following 9 pairs of parts of speech are connected with `appos`: <tt><a href="br_keb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="br_keb-pos-NOUN.html">NOUN</a></tt> (19; 49% instances), <tt><a href="br_keb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="br_keb-pos-PROPN.html">PROPN</a></tt> (7; 18% instances), <tt><a href="br_keb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="br_keb-pos-NOUN.html">NOUN</a></tt> (5; 13% instances), <tt><a href="br_keb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="br_keb-pos-NUM.html">NUM</a></tt> (3; 8% instances), <tt><a href="br_keb-pos-ADV.html">ADV</a></tt>-<tt><a href="br_keb-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="br_keb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="br_keb-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="br_keb-pos-PRON.html">PRON</a></tt>-<tt><a href="br_keb-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="br_keb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="br_keb-pos-NUM.html">NUM</a></tt> (1; 3% instances), <tt><a href="br_keb-pos-VERB.html">VERB</a></tt>-<tt><a href="br_keb-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 appos	color:blue
1	Arzourien	arzour	NOUN	n	Gender=Masc|Number=Plur	0	root	_	_
2	ar	an	DET	det	_	3	det	_	_
3	gevredigezh	kevredigezh	NOUN	n	Gender=Fem|Number=Sing	1	nmod:gen	_	_
4	Spered	spered	NOUN	n	Gender=Masc|Number=Sing	3	appos	_	_
5	Kelt	kelt	ADJ	adj	_	4	amod	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 appos	color:blue
1	E	e	DET	det	Gender[psor]=Masc|Poss=Yes	2	det	_	_
2	dad	tad	NOUN	n	Gender=Masc|Number=Sing	9	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	cm	_	4	punct	_	_
4	Olier	Olier	PROPN	np	Gender=Masc|Number=Sing	2	appos	_	_
5	Iañ	Iañ	PROPN	np	Gender=Masc|Number=Sing	4	flat:name	_	_
6	Klison	Klison	PROPN	np	Number=Sing	4	flat:name	_	SpaceAfter=No
7	,	,	PUNCT	cm	_	4	punct	_	_
8	a	a	AUX	vpart	_	9	aux	_	_
9	reas	ober	VERB	vblex	Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
10	brezel	brezel	NOUN	n	Gender=Masc|Number=Sing	9	obj	_	_
11	da	da	ADP	pr	_	12	case	_	_
12	Yann	Yann	PROPN	np	Gender=Masc|Number=Sing	9	obl	_	_
13	Iañ	Iañ	PROPN	np	Gender=Masc|Number=Sing	12	flat:name	_	SpaceAfter=No
14	,	,	PUNCT	cm	_	15	punct	_	_
15	dug	dug	NOUN	n	Gender=Masc|Number=Sing	12	appos	_	_
16	Breizh	Breizh	PROPN	np	Number=Sing	15	nmod:gen	_	SpaceAfter=No
17	.	.	PUNCT	sent	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 appos	color:blue
1	O	o	INTJ	ij	_	2	case	_	_
2	Breizh	Breizh	PROPN	np	Number=Sing	9	discourse	_	SpaceAfter=No
3	,	,	PUNCT	cm	_	5	punct	_	_
4	ma	ma	DET	det	Poss=Yes	5	det	_	_
5	Bro	bro	NOUN	n	Gender=Fem|Number=Sing	2	appos	_	SpaceAfter=No
6	,	,	PUNCT	cm	_	5	punct	_	_
7	me	prpers	PRON	prn	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	nsubj	_	_
8	'	a	AUX	vpart	_	9	aux	_	SpaceAfter=No
9	gar	karout	VERB	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
10	ma	ma	DET	det	Poss=Yes	11	det	_	_
11	Bro	bro	NOUN	n	Gender=Fem|Number=Sing	9	obj	_	SpaceAfter=No
12	.	.	PUNCT	sent	_	9	punct	_	_

~~~


