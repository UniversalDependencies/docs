---
layout: base
title:  'Statistics of aux:pass in UD_Spanish'
udver: '2'
---

## Treebank Statistics: UD_Spanish: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="es-dep-aux.html">aux</a></tt>.

1860 nodes (0%) are attached to their parents as `aux:pass`.

1856 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.13709677419355.

The following 10 pairs of parts of speech are connected with `aux:pass`: <tt><a href="es-pos-VERB.html">VERB</a></tt>-<tt><a href="es-pos-AUX.html">AUX</a></tt> (1739; 93% instances), <tt><a href="es-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es-pos-AUX.html">AUX</a></tt> (58; 3% instances), <tt><a href="es-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es-pos-AUX.html">AUX</a></tt> (23; 1% instances), <tt><a href="es-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es-pos-AUX.html">AUX</a></tt> (19; 1% instances), <tt><a href="es-pos-VERB.html">VERB</a></tt>-<tt><a href="es-pos-VERB.html">VERB</a></tt> (15; 1% instances), <tt><a href="es-pos-PRON.html">PRON</a></tt>-<tt><a href="es-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="es-pos-ADP.html">ADP</a></tt>-<tt><a href="es-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="es-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="es-pos-X.html">X</a></tt>-<tt><a href="es-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="es-pos-X.html">X</a></tt>-<tt><a href="es-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 aux:pass	color:blue
1	Fue	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	aux:pass	_	_
2	descubierto	descubierto	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
3	en	en	ADP	_	_	4	case	_	_
4	1952	1952	NUM	_	NumType=Card	2	obl	_	SpaceAfter=No
5	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 aux:pass	color:blue
1	Fue	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
2	ordenado	ordenado	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	3	cop	_	_
3	sacerdote	sacerdote	NOUN	_	VerbForm=Inf	0	root	_	_
4	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	1	1	NUM	_	NumType=Card	3	nmod	_	_
6	de	de	ADP	_	_	7	case	_	_
7	octubre	octubre	PROPN	_	_	5	nmod	_	_
8	de	de	ADP	_	_	9	case	_	_
9	1893	1893	NUM	_	NumType=Card	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 aux:pass	color:blue
1	Es	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	_
2	considerado	considerado	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	3	cop	_	_
3	nomen	nomen	PROPN	_	Gender=Masc|Number=Sing	0	root	_	_
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
14	.	.	PUNCT	_	_	3	punct	_	_

~~~


