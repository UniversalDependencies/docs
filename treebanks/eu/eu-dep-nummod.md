---
layout: base
title:  'Statistics of nummod in UD_Basque'
udver: '2'
---

## Treebank Statistics: UD_Basque: Relations: `nummod`

This relation is universal.

2040 nodes (2%) are attached to their parents as `nummod`.

1087 instances of `nummod` (53%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.175.

The following 10 pairs of parts of speech are connected with `nummod`: <tt><a href="eu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eu-pos-NUM.html">NUM</a></tt> (1922; 94% instances), <tt><a href="eu-pos-ADP.html">ADP</a></tt>-<tt><a href="eu-pos-NUM.html">NUM</a></tt> (47; 2% instances), <tt><a href="eu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="eu-pos-NUM.html">NUM</a></tt> (25; 1% instances), <tt><a href="eu-pos-NUM.html">NUM</a></tt>-<tt><a href="eu-pos-NUM.html">NUM</a></tt> (15; 1% instances), <tt><a href="eu-pos-VERB.html">VERB</a></tt>-<tt><a href="eu-pos-NUM.html">NUM</a></tt> (11; 1% instances), <tt><a href="eu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="eu-pos-NUM.html">NUM</a></tt> (9; 0% instances), <tt><a href="eu-pos-DET.html">DET</a></tt>-<tt><a href="eu-pos-NUM.html">NUM</a></tt> (5; 0% instances), <tt><a href="eu-pos-SYM.html">SYM</a></tt>-<tt><a href="eu-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="eu-pos-ADV.html">ADV</a></tt>-<tt><a href="eu-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="eu-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="eu-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Atenasen	Atenas	PROPN	_	Case=Ine|Definite=Def|Number=Sing	8	obl	_	_
2	ordea	ordea	CCONJ	_	_	8	advmod	_	SpaceAfter=No
3	,	,	PUNCT	_	_	8	punct	_	_
4	beste	beste	DET	_	_	6	det	_	_
5	bost	bost	NUM	_	NumType=Card	6	nummod	_	_
6	jarduera	jarduera	NOUN	_	Case=Abs|Definite=Ind	8	nsubj	_	_
7	gehiago	gehiago	DET	_	Case=Abs|Definite=Ind	6	det	_	_
8	izan	izan	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	_
9	daitezke	*edin	AUX	_	Mood=Pot|Number[abs]=Plur|Person[abs]=3	8	aux	_	SpaceAfter=No
10	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 nummod	color:blue
1	40-14ko	40-14	NUM	_	NumType=Card	2	nmod	_	_
2	emaitzak	emaitza	NOUN	_	Animacy=Inan|Case=Erg|Definite=Def|Number=Sing	4	nsubj	_	_
3	argi	argi	ADV	_	_	4	advmod	_	_
4	uzten	utzi	VERB	_	Aspect=Imp|VerbForm=Inf	0	root	_	_
5	du	*edun	AUX	_	Mood=Ind|Number[abs]=Sing|Number[erg]=Sing|Person[abs]=3|Person[erg]=3	4	aux	_	_
6	bi	bi	NUM	_	NumType=Card	8	nummod	_	_
7	bikoteen	bikote	NOUN	_	Case=Gen	9	obl	_	_
8	artean	arte	ADP	_	Animacy=Inan|Case=Ine|Definite=Def|Number=Plur	7	case	_	_
9	egon	egon	VERB	_	Aspect=Perf|VerbForm=Part	11	acl	_	_
10	zen	izan	AUX	_	Mood=Ind|Number[abs]=Sing|Person[abs]=3	9	aux	_	_
11	aldea	alde	NOUN	_	Animacy=Inan|Case=Abs|Definite=Def|Number=Sing	4	obj	_	SpaceAfter=No
12	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nummod	color:blue
1	Berehalako	berehalako	ADJ	_	_	3	obl	_	_
2	batetan	bat	NUM	_	NumType=Card	1	nummod	_	_
3	ikasi	ikasi	VERB	_	VerbForm=Part	0	root	_	_
4	zuen	*edun	AUX	_	Mood=Ind|Number[abs]=Sing|Number[erg]=Sing|Person[abs]=3|Person[erg]=3	3	aux	_	_
5	"	"	PUNCT	_	_	9	punct	_	SpaceAfter=No
6	Bautista	Bautista	PROPN	_	_	9	obj	_	_
7	Basterretxe	Basterretxe	PROPN	_	_	6	flat	_	SpaceAfter=No
8	"	"	PUNCT	_	_	9	punct	_	_
9	jotzen	jo	VERB	_	Aspect=Imp|VerbForm=Inf	3	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


