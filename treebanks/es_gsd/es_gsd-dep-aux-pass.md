---
layout: base
title:  'Statistics of aux:pass in UD_Spanish-GSD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-GSD: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="es_gsd-dep-aux.html">aux</a></tt>.

1849 nodes (0%) are attached to their parents as `aux:pass`.

1819 instances of `aux:pass` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.08166576527853.

The following 4 pairs of parts of speech are connected with `aux:pass`: <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-AUX.html">AUX</a></tt> (1829; 99% instances), <tt><a href="es_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_gsd-pos-AUX.html">AUX</a></tt> (14; 1% instances), <tt><a href="es_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_gsd-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="es_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="es_gsd-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 aux:pass	color:blue
1	Fue	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	aux:pass	_	_
2	descubierto	descubrir	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
3	en	en	ADP	_	_	4	case	_	_
4	1952	1952	NUM	_	NumForm=Digit|NumType=Card	2	obl	_	SpaceAfter=No
5	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 aux:pass	color:blue
1	Es	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	aux:pass	_	_
2	considerado	considerar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
3	nomen	nomen	PROPN	_	Gender=Masc|Number=Sing	2	xcomp	_	_
4	nudum	nudum	PROPN	_	Gender=Masc|Number=Sing	3	flat	_	SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	_
6	debido	deber	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	3	acl	_	_
7	a	a	ADP	_	_	13	case	_	_
8	que	que	SCONJ	_	_	13	mark	_	_
9	no	no	ADV	_	Polarity=Neg	13	advmod	_	_
10	ha	haber	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux	_	_
11	sido	ser	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	13	aux:pass	_	_
12	formalmente	formalmente	ADV	_	_	13	advmod	_	_
13	descrito	descrito	ADJ	_	Gender=Masc|Number=Sing|VerbForm=Part	6	amod	_	SpaceAfter=No
14	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux:pass	color:blue
1	Eran	ser	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	2	cop	_	_
2	jinetes	jinete	NOUN	_	Gender=Masc|Number=Plur	0	root	_	_
3	muy	mucho	ADV	_	_	4	advmod	_	_
4	experimentados	experimentado	ADJ	_	Gender=Masc|Number=Plur|VerbForm=Part	2	amod	_	_
5	y	y	CCONJ	_	_	7	cc	_	_
6	estaban	estar	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	7	aux:pass	_	_
7	uniformados	uniformado	NOUN	_	Gender=Masc|Number=Plur|VerbForm=Part	2	conj	_	_
8	con	con	ADP	_	_	9	case	_	_
9	trajes	traje	NOUN	_	Gender=Masc|Number=Plur	7	nmod	_	_
10	de	de	ADP	_	_	11	case	_	_
11	charro	charro	NOUN	_	Gender=Masc|Number=Sing	9	nmod	_	_
12	de	de	ADP	_	_	13	case	_	_
13	color	color	NOUN	_	Gender=Masc|Number=Sing	9	nmod	_	_
14	gris	gris	ADJ	_	Number=Sing	13	amod	_	_
15	y	y	CCONJ	_	_	16	cc	_	_
16	sombrero	sombrero	NOUN	_	Gender=Masc|Number=Sing	9	conj	_	SpaceAfter=No
17	.	.	PUNCT	_	_	2	punct	_	_

~~~


