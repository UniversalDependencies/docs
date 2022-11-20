---
layout: base
title:  'Statistics of parataxis in UD_Danish-DDT'
udver: '2'
---

## Treebank Statistics: UD_Danish-DDT: Relations: `parataxis`

This relation is universal.

7 nodes (0%) are attached to their parents as `parataxis`.

7 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.71428571428571.

The following 5 pairs of parts of speech are connected with `parataxis`: <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt> (3; 43% instances), <tt><a href="da_ddt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="da_ddt-pos-VERB.html">VERB</a></tt> (1; 14% instances), <tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da_ddt-pos-PRON.html">PRON</a></tt> (1; 14% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-NUM.html">NUM</a></tt> (1; 14% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-PROPN.html">PROPN</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 15 parataxis	color:blue
1	Nedslidte	nedslidt	ADJ	_	Degree=Pos|Number=Plur	3	amod	_	_
2	Levi's	Levi	PROPN	_	Case=Gen	3	nmod:poss	_	_
3	jeans	jeans	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	11	nsubj	_	_
4	til	til	ADP	_	AdpType=Prep	5	case	_	_
5	snøre-støvletter	snøre-støvlet	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	3	nmod	_	_
6	fra	fra	ADP	_	AdpType=Prep	10	mark	_	_
7	dengang	dengang	SCONJ	_	_	10	mark	_	_
8	mor	mor	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	10	nsubj	_	_
9	var	være	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	10	cop	_	_
10	ung	ung	ADJ	_	Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	5	amod	_	_
11	koster	koste	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
12	399	399	NUM	_	NumType=Card	13	nummod	_	_
13	kr.	krone	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	11	obj	_	_
14	-	-	PUNCT	_	_	15	punct	_	_
15	støvletterne	støvlet	NOUN	_	Definite=Def|Gender=Com|Number=Plur	11	parataxis	_	_
16	499	499	NUM	_	NumType=Card	17	nummod	_	_
17	kr.	krone	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	15	orphan	_	SpaceAfter=No
18	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 parataxis	color:blue
1	Så	så	ADV	_	_	0	root	_	_
2	pyt	pyt	INTJ	_	_	1	discourse	_	_
3	med	med	ADP	_	AdpType=Prep	8	mark	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	at	at	SCONJ	_	_	8	mark	_	_
6	gamle	gammel	ADJ	_	Definite=Def|Degree=Pos|Number=Sing	7	amod	_	_
7	Platon	Platon	PROPN	_	_	8	nsubj	_	_
8	videregav	videregive	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	2	parataxis	_	_
9	Atlantis	Atlantis	PROPN	_	_	8	obj	_	_
10	historien	historie	NOUN	_	Definite=Def|Gender=Com|Number=Sing	9	flat	_	_
11	som	som	ADP	_	PartType=Inf	13	case	_	_
12	et	en	DET	_	Gender=Neut|Number=Sing|PronType=Ind	13	det	_	_
13	lærestykke	lærestykke	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	8	obl	_	_
14	om	om	ADP	_	AdpType=Prep	16	case	_	_
15	de	den	DET	_	Number=Plur|PronType=Dem	16	det	_	_
16	ulykker	ulykke	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	13	nmod	_	SpaceAfter=No
17	,	,	PUNCT	_	_	20	punct	_	_
18	der	der	PRON	_	PartType=Inf	20	nsubj	_	_
19	vil	ville	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	20	aux	_	_
20	ske	ske	VERB	_	VerbForm=Inf|Voice=Act	16	acl:relcl	_	SpaceAfter=No
21	,	,	PUNCT	_	_	25	punct	_	_
22	når	når	SCONJ	_	_	25	mark	_	_
23	et	en	DET	_	Gender=Neut|Number=Sing|PronType=Ind	24	det	_	_
24	folk	folk	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	25	nsubj	_	_
25	bliver	blive	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	20	amod	_	_
26	kålhøgent	kålhøgen	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	25	xcomp	_	SpaceAfter=No
27	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 23 parataxis	color:blue
1	Gennem	gennem	ADP	_	AdpType=Prep	2	case	_	_
2	generationer	generation	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	6	obl	_	_
3	er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	_	_
4	det	det	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	_
5	blevet	blive	AUX	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part	6	aux	_	_
6	banket	banke	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
7	ind	ind	ADV	_	_	6	advmod:lmod	_	_
8	i	i	ADP	_	AdpType=Prep	9	case	_	_
9	hovederne	hoved	NOUN	_	Definite=Def|Gender=Neut|Number=Plur	7	obl	_	_
10	på	på	ADP	_	AdpType=Prep	11	case	_	_
11	os	vi	PRON	_	Case=Acc|Gender=Com|Number=Plur|Person=1|PronType=Prs	9	nmod	_	SpaceAfter=No
12	,	,	PUNCT	_	_	16	punct	_	_
13	at	at	SCONJ	_	_	16	mark	_	_
14	noget	nogen	PRON	_	Gender=Neut|Number=Sing|PronType=Ind	16	nsubj	_	_
15	er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	16	cop	_	_
16	kunst	kunst	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	4	nmod	_	SpaceAfter=No
17	,	,	PUNCT	_	_	19	punct	_	_
18	seriøs	seriøs	ADJ	_	Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	19	amod	_	_
19	musik	musik	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	16	conj	_	_
20	og	og	CCONJ	_	_	21	cc	_	_
21	kultur	kultur	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	16	conj	_	_
22	-	-	PUNCT	_	_	23	punct	_	_
23	noget	nogen	PRON	_	Gender=Neut|Number=Sing|PronType=Ind	16	parataxis	_	_
24	andet	anden	PRON	_	Gender=Neut|Number=Sing|PronType=Ind	23	nmod	_	_
25	ikke	ikke	ADV	_	_	23	orphan	_	SpaceAfter=No
26	.	.	PUNCT	_	_	6	punct	_	_

~~~


