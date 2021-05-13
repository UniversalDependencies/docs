---
layout: base
title:  'Statistics of aux:pass in UD_Portuguese-GSD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-GSD: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="pt_gsd-dep-aux.html">aux</a></tt>.

2449 nodes (1%) are attached to their parents as `aux:pass`.

2447 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.08738260514496.

The following 6 pairs of parts of speech are connected with `aux:pass`: <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-AUX.html">AUX</a></tt> (2407; 98% instances), <tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_gsd-pos-AUX.html">AUX</a></tt> (25; 1% instances), <tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_gsd-pos-AUX.html">AUX</a></tt> (6; 0% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt> (5; 0% instances), <tt><a href="pt_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_gsd-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt> (2; 0% instances).


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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 aux:pass	color:blue
1	Em	em	ADP	ADP	_	2	case	_	_
2	1975	_	NUM	NUM	NumType=Card	5	nmod	_	_
3	foi	_	AUX	AUX	_	5	aux:pass	_	_
4	eleito	eleger	AUX	AUX	_	5	cop	_	_
5	Deputado	_	PROPN	PNOUN	_	0	root	_	_
6	Estadual	_	PROPN	PNOUN	_	5	amod	_	SpaceAfter=No
7	,	,	PUNCT	.	_	8	punct	_	_
8	mandato	mandato	NOUN	NOUN	_	5	appos	_	_
9	que	_	PRON	PRON	_	10	obj	_	_
10	repetiu	repetir	VERB	VERB	_	8	acl:relcl	_	_
11	por	por	ADP	ADP	_	14	case	_	_
12	mais	mais	ADV	ADV	_	13	advmod	_	_
13	duas	_	NUM	NUM	NumType=Card	14	nummod	_	_
14	vezes	vez	NOUN	NOUN	_	10	nmod	_	_
15	até	_	ADP	ADP	_	16	case	_	_
16	1986	_	NUM	NUM	NumType=Card	10	nmod	_	SpaceAfter=No
17	.	.	PUNCT	.	_	5	punct	_	_

~~~


