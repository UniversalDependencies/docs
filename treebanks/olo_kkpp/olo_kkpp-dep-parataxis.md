---
layout: base
title:  'Statistics of parataxis in UD_Livvi-KKPP'
udver: '2'
---

## Treebank Statistics: UD_Livvi-KKPP: Relations: `parataxis`

This relation is universal.

47 nodes (3%) are attached to their parents as `parataxis`.

47 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.57446808510638.

The following 15 pairs of parts of speech are connected with `parataxis`: <tt><a href="olo_kkpp-pos-VERB.html">VERB</a></tt>-<tt><a href="olo_kkpp-pos-VERB.html">VERB</a></tt> (22; 47% instances), <tt><a href="olo_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="olo_kkpp-pos-VERB.html">VERB</a></tt> (7; 15% instances), <tt><a href="olo_kkpp-pos-VERB.html">VERB</a></tt>-<tt><a href="olo_kkpp-pos-NOUN.html">NOUN</a></tt> (4; 9% instances), <tt><a href="olo_kkpp-pos-VERB.html">VERB</a></tt>-<tt><a href="olo_kkpp-pos-ADJ.html">ADJ</a></tt> (3; 6% instances), <tt><a href="olo_kkpp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="olo_kkpp-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="olo_kkpp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="olo_kkpp-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="olo_kkpp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="olo_kkpp-pos-X.html">X</a></tt> (1; 2% instances), <tt><a href="olo_kkpp-pos-AUX.html">AUX</a></tt>-<tt><a href="olo_kkpp-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="olo_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="olo_kkpp-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="olo_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="olo_kkpp-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="olo_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="olo_kkpp-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="olo_kkpp-pos-NUM.html">NUM</a></tt>-<tt><a href="olo_kkpp-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="olo_kkpp-pos-PRON.html">PRON</a></tt>-<tt><a href="olo_kkpp-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="olo_kkpp-pos-VERB.html">VERB</a></tt>-<tt><a href="olo_kkpp-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="olo_kkpp-pos-X.html">X</a></tt>-<tt><a href="olo_kkpp-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 parataxis	color:blue
1	Lähtöö	lähtie	VERB	X	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	4	punct	_	_
3	päivän	päivy	NOUN	NOUN	Case=Gen|Number=Sing	4	obl	_	_
4	ombeloo	ombella	VERB	X	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	parataxis	_	_
5	da	da	CCONJ	CCONJ	_	6	cc	_	_
6	pajattaa	pajattoa	VERB	X	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	conj	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	1	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 15 parataxis	color:blue
1	Sit	sit	ADV	ADV	_	4	advmod	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	4	punct	_	_
3	–	–	PUNCT	PUNCT	_	4	punct	_	_
4	sanoo	sanuo	VERB	X	Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	11	punct	_	_
6	–	–	PUNCT	PUNCT	_	11	punct	_	_
7	on	olla	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop:own	_	_
8	minul	minä	PRON	PRON	Case=Ade|Number=Sing|Person=1|PronType=Prs	11	nsubj:cop	_	_
9	orazen	oraine	NOUN	NOUN	Case=Gen|Number=Sing	11	obl	_	_
10	päs	piäs	ADP	X	_	9	case	_	_
11	ildaine	ildaine	NOUN	NOUN	Case=Nom|Number=Sing	4	parataxis	_	SpaceAfter=No
12	,	,	PUNCT	PUNCT	_	15	punct	_	_
13	minul	minä	PRON	PRON	Case=Ade|Number=Sing|Person=1|PronType=Prs	15	nsubj	_	_
14	pidää	pidiä	AUX	AUX	VerbForm=Inf	15	aux	_	_
15	lähtie	lähtie	VERB	VERB	VerbForm=Inf	11	parataxis	_	_
16	ildastu	ildaine	NOUN	NOUN	Case=Par|Number=Sing	17	obj	_	_
17	saamah	suaha	VERB	VERB	Case=Ill|VerbForm=Inf	15	ccomp	_	SpaceAfter=No|Deriv=Ma
18	"	"	PUNCT	PUNCT	_	15	punct	_	SpaceAfter=No
19	.	.	PUNCT	PUNCT	_	15	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 11 parataxis	color:blue
1	Sit	sit	ADV	ADV	_	4	advmod	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	4	punct	_	_
3	–	–	PUNCT	PUNCT	_	4	punct	_	_
4	sanoo	sanuo	VERB	X	Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	11	punct	_	_
6	–	–	PUNCT	PUNCT	_	11	punct	_	_
7	on	olla	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop:own	_	_
8	minul	minä	PRON	PRON	Case=Ade|Number=Sing|Person=1|PronType=Prs	11	nsubj:cop	_	_
9	orazen	oraine	NOUN	NOUN	Case=Gen|Number=Sing	11	obl	_	_
10	päs	piäs	ADP	X	_	9	case	_	_
11	ildaine	ildaine	NOUN	NOUN	Case=Nom|Number=Sing	4	parataxis	_	SpaceAfter=No
12	,	,	PUNCT	PUNCT	_	15	punct	_	_
13	minul	minä	PRON	PRON	Case=Ade|Number=Sing|Person=1|PronType=Prs	15	nsubj	_	_
14	pidää	pidiä	AUX	AUX	VerbForm=Inf	15	aux	_	_
15	lähtie	lähtie	VERB	VERB	VerbForm=Inf	11	parataxis	_	_
16	ildastu	ildaine	NOUN	NOUN	Case=Par|Number=Sing	17	obj	_	_
17	saamah	suaha	VERB	VERB	Case=Ill|VerbForm=Inf	15	ccomp	_	SpaceAfter=No|Deriv=Ma
18	"	"	PUNCT	PUNCT	_	15	punct	_	SpaceAfter=No
19	.	.	PUNCT	PUNCT	_	15	punct	_	SpaceAfter=No

~~~


