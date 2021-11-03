---
layout: base
title:  'Statistics of aux:pass in UD_Portuguese-GSD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-GSD: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="pt_gsd-dep-aux.html">aux</a></tt>.

2445 nodes (1%) are attached to their parents as `aux:pass`.

2443 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.08588957055215.

The following 6 pairs of parts of speech are connected with `aux:pass`: <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-AUX.html">AUX</a></tt> (2405; 98% instances), <tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_gsd-pos-AUX.html">AUX</a></tt> (24; 1% instances), <tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_gsd-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt> (5; 0% instances), <tt><a href="pt_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_gsd-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux:pass	color:blue
1	Os	o	DET	DET	_	2	det	_	_
2	cuidados	cuidado	NOUN	NOUN	_	7	nsubj:pass	_	_
3	de	_	ADP	ADP	_	4	mark	_	_
4	sempre	sempre	ADV	ADV	_	2	nmod	_	_
5	estão	estar	AUX	AUX	_	7	aux	_	_
6	sendo	ser	AUX	AUX	_	7	aux:pass	_	_
7	tomados	tomar	VERB	VERB	_	0	root	_	_
8	por	por	ADP	ADP	_	10	case	_	_
9	o	o	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	consumidor	consumidor	NOUN	NOUN	_	7	nmod	_	SpaceAfter=No
11	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 aux:pass	color:blue
1	Apesar	apesar	ADV	ADV	_	3	mark	_	_
2	de	_	ADP	ADP	_	1	fixed	_	_
3	livre	livre	ADJ	ADJ	_	9	nmod	_	SpaceAfter=No
4	,	,	PUNCT	.	_	3	punct	_	_
5	é	ser	AUX	AUX	_	9	aux:pass	_	_
6	hoje	hoje	ADV	ADV	_	9	advmod	_	_
7	considerado	considerar	AUX	AUX	_	9	cop	_	_
8	um	um	DET	DET	_	9	det	_	_
9	dissidente	dissidente	NOUN	NOUN	_	0	root	_	SpaceAfter=No
10	.	.	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 aux:pass	color:blue
1	O	o	DET	DET	_	2	det	_	_
2	texto	texto	NOUN	NOUN	_	3	nsubj	_	_
3	determina	determinar	VERB	VERB	_	0	root	_	_
4	que	que	CCONJ	CONJ	_	8	mark	_	_
5	veredas	vereda	NOUN	NOUN	_	8	nsubj:pass	_	_
6	são	ser	AUX	AUX	_	8	aux:pass	_	_
7	consideradas	considerar	AUX	AUX	_	8	cop	_	_
8	APPs	_	PROPN	PNOUN	_	3	ccomp	_	SpaceAfter=No
9	,	,	PUNCT	.	_	15	punct	_	_
10	e	e	CCONJ	CONJ	_	15	cc	_	_
11	portanto	_	ADV	ADV	_	15	advmod	_	SpaceAfter=No
12	,	,	PUNCT	.	_	15	punct	_	_
13	devem	_	AUX	AUX	_	15	aux	_	_
14	ser	ser	AUX	AUX	_	15	aux:pass	_	_
15	preservadas	preservar	VERB	VERB	_	8	conj	_	SpaceAfter=No
16	.	.	PUNCT	.	_	3	punct	_	_

~~~


