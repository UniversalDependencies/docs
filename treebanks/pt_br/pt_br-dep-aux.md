---
layout: base
title:  'Statistics of aux in UD_Portuguese-BR'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-BR: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="pt_br-dep-aux-pass.html">aux:pass</a></tt>.

2806 nodes (1%) are attached to their parents as `aux`.

2800 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.52423378474697.

The following 7 pairs of parts of speech are connected with `aux`: <tt><a href="pt_br-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_br-pos-AUX.html">AUX</a></tt> (2693; 96% instances), <tt><a href="pt_br-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_br-pos-AUX.html">AUX</a></tt> (73; 3% instances), <tt><a href="pt_br-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_br-pos-PROPN.html">PROPN</a></tt> (12; 0% instances), <tt><a href="pt_br-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_br-pos-AUX.html">AUX</a></tt> (11; 0% instances), <tt><a href="pt_br-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_br-pos-VERB.html">VERB</a></tt> (9; 0% instances), <tt><a href="pt_br-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_br-pos-AUX.html">AUX</a></tt> (7; 0% instances), <tt><a href="pt_br-pos-AUX.html">AUX</a></tt>-<tt><a href="pt_br-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 aux	color:blue
1	Ver	_	VERB	VERB	_	0	root	_	_
2	também	_	ADV	ADV	_	1	advmod	_	_
3	a	_	DET	DET	_	4	det	_	_
4	lista	_	NOUN	NOUN	_	1	obj	_	_
5	de	_	ADP	ADP	_	6	case	_	_
6	entidades	_	NOUN	NOUN	_	4	nmod	_	_
7	que	_	PRON	PRON	_	9	nsubj	_	_
8	tenham	_	AUX	AUX	_	9	aux	_	_
9	emitido	_	VERB	VERB	_	6	acl:relcl	_	_
10	selos	_	NOUN	NOUN	_	9	obj	_	_
11	postais	_	ADJ	ADJ	_	10	amod	_	SpaceAfter=No
12	.	_	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 aux	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 aux	color:blue
1	O	_	DET	DET	_	2	det	_	_
2	mimo	_	NOUN	NOUN	_	7	nsubj	_	_
3	em	_	ADP	ADP	_	4	case	_	_
4	questão	_	NOUN	NOUN	_	2	nmod	_	_
5	foi	_	VERB	VERB	_	7	cop	_	_
6	o	_	DET	DET	_	7	det	_	_
7	CD	_	NOUN	NOUN	_	0	root	_	_
8	"	_	PUNCT	.	_	10	punct	_	SpaceAfter=No
9	Deixa	_	PROPN	PNOUN	_	10	aux	_	_
10	clarear	_	PROPN	PNOUN	_	7	parataxis	_	SpaceAfter=No
11	"	_	PUNCT	.	_	10	punct	_	SpaceAfter=No
12	,	_	PUNCT	.	_	14	punct	_	_
13	de	_	ADP	ADP	_	14	case	_	_
14	Zeca	_	PROPN	PNOUN	_	7	nmod	_	_
15	Pagodinho	_	PROPN	PNOUN	_	14	flat	_	SpaceAfter=No
16	.	_	PUNCT	.	_	7	punct	_	_

~~~


