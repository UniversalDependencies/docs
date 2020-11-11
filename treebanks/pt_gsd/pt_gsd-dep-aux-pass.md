---
layout: base
title:  'Statistics of aux:pass in UD_Portuguese-GSD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-GSD: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="pt_gsd-dep-aux.html">aux</a></tt>.

2448 nodes (1%) are attached to their parents as `aux:pass`.

2446 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.08986928104575.

The following 6 pairs of parts of speech are connected with `aux:pass`: <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-AUX.html">AUX</a></tt> (2400; 98% instances), <tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_gsd-pos-AUX.html">AUX</a></tt> (29; 1% instances), <tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_gsd-pos-AUX.html">AUX</a></tt> (7; 0% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt> (6; 0% instances), <tt><a href="pt_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_gsd-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux:pass	color:blue
1	Os	_	DET	DET	_	2	det	_	_
2	cuidados	cuidado	NOUN	NOUN	_	7	nsubj:pass	_	_
3	de	_	ADP	ADP	_	4	mark	_	_
4	sempre	sempre	ADV	ADV	_	2	nmod	_	_
5	estão	estar	AUX	AUX	_	7	aux	_	_
6	sendo	ser	AUX	AUX	_	7	aux:pass	_	_
7	tomados	tomar	VERB	VERB	_	0	root	_	_
8	por	por	ADP	ADP	_	10	case	_	_
9	o	o	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	consumidor	consumidor	NOUN	NOUN	_	7	nmod	_	SpaceAfter=No
11	.	_	PUNCT	.	_	7	punct	_	_

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
4	,	_	PUNCT	.	_	3	punct	_	_
5	é	ser	AUX	AUX	_	9	aux:pass	_	_
6	hoje	hoje	ADV	ADV	_	9	advmod	_	_
7	considerado	considerar	AUX	AUX	_	9	cop	_	_
8	um	_	DET	DET	_	9	det	_	_
9	dissidente	dissidente	NOUN	NOUN	_	0	root	_	SpaceAfter=No
10	.	_	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 aux:pass	color:blue
1	Os	_	DET	DET	_	2	det	_	_
2	habitantes	habitante	NOUN	NOUN	_	6	nsubj:pass	_	_
3	são	ser	AUX	AUX	_	6	aux:pass	_	_
4	chamados	chamar	AUX	AUX	_	6	cop	_	_
5	"	_	PUNCT	.	_	6	punct	_	SpaceAfter=No
6	Meuzacois	_	PROPN	PNOUN	_	0	root	_	SpaceAfter=No
7	"	_	PUNCT	.	_	10	punct	_	_
8	e	_	CCONJ	CONJ	_	10	cc	_	_
9	"	_	PUNCT	.	_	10	punct	_	SpaceAfter=No
10	Meuzacoises	_	PROPN	PNOUN	_	6	conj	_	SpaceAfter=No
11	"	_	PUNCT	.	_	10	punct	_	SpaceAfter=No
12	.	_	PUNCT	.	_	6	punct	_	_

~~~


