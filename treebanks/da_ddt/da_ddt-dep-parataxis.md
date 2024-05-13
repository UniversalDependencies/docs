---
layout: base
title:  'Statistics of parataxis in UD_Danish-DDT'
udver: '2'
---

## Treebank Statistics: UD_Danish-DDT: Relations: `parataxis`

This relation is universal.

8 nodes (0%) are attached to their parents as `parataxis`.

8 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.25.

The following 6 pairs of parts of speech are connected with `parataxis`: <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt> (3; 38% instances), <tt><a href="da_ddt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="da_ddt-pos-VERB.html">VERB</a></tt> (1; 13% instances), <tt><a href="da_ddt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="da_ddt-pos-VERB.html">VERB</a></tt> (1; 13% instances), <tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da_ddt-pos-PRON.html">PRON</a></tt> (1; 13% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-NUM.html">NUM</a></tt> (1; 13% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-PROPN.html">PROPN</a></tt> (1; 13% instances).


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
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 17 parataxis	color:blue
1	Eller	eller	CCONJ	_	_	7	cc	_	_
2	slet	slet	ADV	_	_	5	advmod	_	_
3	og	og	CCONJ	_	_	4	cc	_	_
4	ret	ret	ADV	_	_	2	conj	_	_
5	tykke	tyk	ADJ	_	Degree=Pos|Number=Plur	0	root	_	_
6	og	og	CCONJ	_	_	7	cc	_	_
7	fede	fed	ADJ	_	Degree=Pos|Number=Plur	5	conj	_	_
8	i	i	ADP	_	AdpType=Prep	9	case	_	_
9	mere	meget	ADJ	_	Definite=Ind|Degree=Cmp|Number=Sing	5	obl	_	_
10	eller	eller	CCONJ	_	_	11	cc	_	_
11	mindre	lille	ADJ	_	Degree=Cmp	9	conj	_	_
12	grad	grad	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	9	obl	_	SpaceAfter=No
13	,	,	PUNCT	_	_	17	punct	_	_
14	som	som	PRON	_	PartType=Inf	17	obl	_	_
15	en	en	DET	_	Gender=Com|Number=Sing|PronType=Ind	16	det	_	_
16	enkelt	enkelt	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	17	nsubj	_	_
17	udtrykker	udtrykke	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	parataxis	_	_
18	det	det	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	17	obj	_	SpaceAfter=No
19	.	.	PUNCT	_	_	5	punct	_	_

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


