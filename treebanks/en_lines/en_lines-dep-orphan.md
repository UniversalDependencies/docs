---
layout: base
title:  'Statistics of orphan in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Relations: `orphan`

This relation is universal.

11 nodes (0%) are attached to their parents as `orphan`.

11 instances of `orphan` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 6 pairs of parts of speech are connected with `orphan`: <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-ADP.html">ADP</a></tt> (3; 27% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-ADP.html">ADP</a></tt> (2; 18% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (2; 18% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-PART.html">PART</a></tt> (2; 18% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-SCONJ.html">SCONJ</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 orphan	color:blue
1	An	an	DET	IND-SG	Definite=Ind|PronType=Art	4	det	_	_
2	ANSI-89	ansi-89	PROPN	SG-NOM	Number=Sing	4	compound	_	_
3	SQL	sql	PROPN	SG-NOM	Number=Sing	4	compound	_	_
4	query	query	NOUN	SG-NOM	Number=Sing	0	root	_	_
5	in	in	ADP	_	_	7	case	_	_
6	a	a	DET	IND-SG	Definite=Ind|PronType=Art	7	det	_	_
7	database	database	NOUN	SG-NOM	Number=Sing	4	nmod	_	_
8	set	set	VERB	PASS	Tense=Past|VerbForm=Part|Voice=Pass	7	acl	_	_
9	to	to	ADP	_	_	12	case	_	_
10	ANSI-92	ansi-92	PROPN	SG-NOM	Number=Sing	12	compound	_	_
11	query	query	NOUN	SG-NOM	Number=Sing	12	compound	_	_
12	mode	mode	NOUN	SG-NOM	Number=Sing	8	obl	_	SpaceAfter=No
13	,	,	PUNCT	Comma	_	14	punct	_	_
14	such	such	ADJ	ADJ	Case=Nom	4	amod	_	_
15	as	as	ADP	_	_	14	orphan	_	SpaceAfter=No
16	:	:	PUNCT	Colon	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 orphan	color:blue
1	With	with	ADP	_	_	3	case	_	_
2	the	the	DET	DEF	Definite=Def|PronType=Art	3	det	_	_
3	help	help	NOUN	SG-NOM	Number=Sing	13	obl	_	_
4	of	of	ADP	_	_	7	case	_	_
5	their	they	PRON	P3PL-GEN	_	7	nmod:poss	_	_
6	financial	financial	ADJ	POS	Degree=Pos	7	amod	_	_
7	controller	controller	NOUN	SG-NOM	Number=Sing	3	nmod	_	_
8	proper	proper	ADJ	POS	Degree=Pos	9	amod	_	_
9	arrangements	arrangement	NOUN	PL-NOM	Number=Plur	13	nsubj:pass	_	_
10	will	will	AUX	PRES-AUX	VerbForm=Fin	13	aux:pass	_	_
11	now	now	ADV	_	_	13	advmod	_	_
12	be	be	AUX	INF	VerbForm=Inf	13	aux:pass	_	_
13	legislated	legislate	VERB	PASS	Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
14	for	for	ADP	_	_	13	orphan	_	SpaceAfter=No
15	.	.	PUNCT	Period	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 15 orphan	color:blue
1	What	what	DET	WH	PronType=Int	2	det	_	_
2	representation	representation	NOUN	SG-NOM	Number=Sing	6	obj	_	_
3	did	do	AUX	PAST-AUX	Mood=Ind|Tense=Past|VerbForm=Fin	6	aux	_	_
4	the	the	DET	DEF	Definite=Def|PronType=Art	5	det	_	_
5	Commissioner	commissioner	NOUN	SG-NOM	Number=Sing	6	nsubj	_	_
6	receive	receive	VERB	INF	VerbForm=Inf	0	root	_	_
7	from	from	ADP	_	_	11	case	_	_
8	the	the	DET	DEF	Definite=Def|PronType=Art	11	det	_	_
9	United	United	PROPN	SG-NOM	Number=Sing	10	compound	_	_
10	Kingdom	Kingdom	PROPN	SG-NOM	Number=Sing	11	compound	_	_
11	Government	government	NOUN	SG-NOM	Number=Sing	6	obl	_	_
12	about	about	ADP	_	_	15	case	_	_
13	this	this	DET	DEM-SG	Number=Sing|PronType=Dem	15	det	_	_
14	dire	dire	ADJ	POS	Degree=Pos	15	amod	_	_
15	emergency	emergency	NOUN	SG-NOM	Number=Sing	6	orphan	_	SpaceAfter=No
16	?	?	PUNCT	QuestionMark	_	6	punct	_	_

~~~


