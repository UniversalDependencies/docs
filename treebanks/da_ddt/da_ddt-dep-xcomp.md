---
layout: base
title:  'Statistics of xcomp in UD_Danish-DDT'
udver: '2'
---

## Treebank Statistics: UD_Danish-DDT: Relations: `xcomp`

This relation is universal.

507 nodes (1%) are attached to their parents as `xcomp`.

349 instances of `xcomp` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.92307692307692.

The following 3 pairs of parts of speech are connected with `xcomp`: <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-VERB.html">VERB</a></tt> (497; 98% instances), <tt><a href="da_ddt-pos-AUX.html">AUX</a></tt>-<tt><a href="da_ddt-pos-VERB.html">VERB</a></tt> (8; 2% instances), <tt><a href="da_ddt-pos-PART.html">PART</a></tt>-<tt><a href="da_ddt-pos-VERB.html">VERB</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 xcomp	color:blue
1	-	-	PUNCT	_	_	5	punct	_	_
2	Et	en	DET	_	Gender=Neut|Number=Sing|PronType=Ind	5	det	_	_
3	rigtigt	rigtig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	5	amod	_	_
4	romantisk	romantisk	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	5	amod	_	_
5	julebryllup	julebryllup	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	7	obl	_	SpaceAfter=No
6	?	?	PUNCT	_	_	5	punct	_	_
7	fortsatte	fortsætte	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
8	han	han	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
9	spørgende	spørge	VERB	_	Tense=Pres|VerbForm=Part	7	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 xcomp	color:blue
1	Dets	dets	DET	_	Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	2	det	_	_
2	fødder	fod	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	10	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	der	der	PRON	_	PartType=Inf	6	nsubj	_	_
5	ikke	ikke	ADV	_	_	6	advmod	_	_
6	er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	_	_
7	tildækkede	tildække	VERB	_	Number=Plur|Tense=Past|VerbForm=Part	6	xcomp	_	SpaceAfter=No
8	,	,	PUNCT	_	_	6	punct	_	_
9	er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	_	_
10	blå	blå	ADJ	_	Degree=Pos|Number=Plur	0	root	_	_
11	af	af	ADP	_	AdpType=Prep	12	case	_	_
12	kulde	kulde	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	10	obl	_	SpaceAfter=No
13	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 xcomp	color:blue
1	Derfor	derfor	ADV	_	_	2	advmod	_	_
2	elsker	elske	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	jeg	jeg	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
4	at	at	PART	_	PartType=Inf	5	mark	_	_
5	arbejde	arbejde	VERB	_	VerbForm=Inf|Voice=Act	2	obj	_	_
6	her	her	ADV	_	_	5	advmod:lmod	_	_
7	-	-	PUNCT	_	_	4	punct	_	_
8	at	at	PART	_	PartType=Inf	9	mark	_	_
9	gøre	gøre	VERB	_	VerbForm=Inf|Voice=Act	4	xcomp	_	_
10	en	en	DET	_	Gender=Com|Number=Sing|PronType=Ind	11	det	_	_
11	indsats	indsats	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	9	obj	_	SpaceAfter=No
12	.	.	PUNCT	_	_	2	punct	_	SpaceAfter=No
13	"	"	PUNCT	_	_	2	punct	_	_

~~~


