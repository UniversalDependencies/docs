---
layout: base
title:  'Statistics of aux:pass in UD_Portuguese-BR'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-BR: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="pt_br-dep-aux.html">aux</a></tt>.

2448 nodes (1%) are attached to their parents as `aux:pass`.

2446 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.09150326797386.

The following 6 pairs of parts of speech are connected with `aux:pass`: <tt><a href="pt_br-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_br-pos-AUX.html">AUX</a></tt> (2398; 98% instances), <tt><a href="pt_br-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_br-pos-AUX.html">AUX</a></tt> (31; 1% instances), <tt><a href="pt_br-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_br-pos-AUX.html">AUX</a></tt> (7; 0% instances), <tt><a href="pt_br-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_br-pos-VERB.html">VERB</a></tt> (6; 0% instances), <tt><a href="pt_br-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_br-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="pt_br-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_br-pos-PROPN.html">PROPN</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux:pass	color:blue
1	Os	_	DET	DET	_	2	det	_	_
2	cuidados	_	NOUN	NOUN	_	7	nsubj:pass	_	_
3	de	_	ADP	ADP	_	4	mark	_	_
4	sempre	_	ADV	ADV	_	2	nmod	_	_
5	estão	_	AUX	AUX	_	7	aux	_	_
6	sendo	_	AUX	AUX	_	7	aux:pass	_	_
7	tomados	_	VERB	VERB	_	0	root	_	_
8	por	por	ADP	ADP	_	10	case	_	_
9	o	o	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	consumidor	_	NOUN	NOUN	_	7	nmod	_	SpaceAfter=No
11	.	_	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 aux:pass	color:blue
1	"	_	PUNCT	.	_	7	punct	_	SpaceAfter=No
2	Eles	_	PRON	PRON	_	7	nsubj:pass	_	_
3	não	_	ADV	ADV	Polarity=Neg	7	advmod	_	_
4	podem	_	AUX	AUX	_	7	aux	_	_
5	ser	_	AUX	AUX	_	7	aux:pass	_	_
6	considerados	_	VERB	VERB	_	7	cop	_	_
7	marginais	_	NOUN	NOUN	_	10	ccomp	_	SpaceAfter=No
8	"	_	PUNCT	.	_	7	punct	_	SpaceAfter=No
9	,	_	PUNCT	.	_	10	punct	_	_
10	disse	_	VERB	VERB	_	0	root	_	_
11	ele	_	PRON	PRON	_	10	nsubj	_	SpaceAfter=No
12	.	_	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 aux:pass	color:blue
1	Os	_	DET	DET	_	2	det	_	_
2	habitantes	_	NOUN	NOUN	_	6	nsubj:pass	_	_
3	são	_	AUX	AUX	_	6	aux:pass	_	_
4	chamados	_	VERB	VERB	_	6	cop	_	_
5	"	_	PUNCT	.	_	6	punct	_	SpaceAfter=No
6	Meuzacois	_	PROPN	PNOUN	_	0	root	_	SpaceAfter=No
7	"	_	PUNCT	.	_	10	punct	_	_
8	e	_	CCONJ	CONJ	_	10	cc	_	_
9	"	_	PUNCT	.	_	10	punct	_	SpaceAfter=No
10	Meuzacoises	_	PROPN	PNOUN	_	6	conj	_	SpaceAfter=No
11	"	_	PUNCT	.	_	10	punct	_	SpaceAfter=No
12	.	_	PUNCT	.	_	6	punct	_	_

~~~


