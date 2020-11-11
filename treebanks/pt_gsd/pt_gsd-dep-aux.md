---
layout: base
title:  'Statistics of aux in UD_Portuguese-GSD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-GSD: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="pt_gsd-dep-aux-pass.html">aux:pass</a></tt>.

2806 nodes (1%) are attached to their parents as `aux`.

2800 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.52280826799715.

The following 7 pairs of parts of speech are connected with `aux`: <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-AUX.html">AUX</a></tt> (2695; 96% instances), <tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_gsd-pos-AUX.html">AUX</a></tt> (71; 3% instances), <tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt> (12; 0% instances), <tt><a href="pt_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_gsd-pos-AUX.html">AUX</a></tt> (11; 0% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt> (9; 0% instances), <tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_gsd-pos-AUX.html">AUX</a></tt> (7; 0% instances), <tt><a href="pt_gsd-pos-AUX.html">AUX</a></tt>-<tt><a href="pt_gsd-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 aux	color:blue
1	Ver	ver	VERB	VERB	_	0	root	_	_
2	também	também	ADV	ADV	_	1	advmod	_	_
3	a	_	DET	DET	_	4	det	_	_
4	lista	lista	NOUN	NOUN	_	1	obj	_	_
5	de	_	ADP	ADP	_	6	case	_	_
6	entidades	entidade	NOUN	NOUN	_	4	nmod	_	_
7	que	_	PRON	PRON	_	9	nsubj	_	_
8	tenham	ter	AUX	AUX	_	9	aux	_	_
9	emitido	emitir	VERB	VERB	_	6	acl:relcl	_	_
10	selos	selo	NOUN	NOUN	_	9	obj	_	_
11	postais	postal	ADJ	ADJ	_	10	amod	_	SpaceAfter=No
12	.	_	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 aux	color:blue
1	O	_	DET	DET	_	3	det	_	_
2	nosso	_	DET	DET	_	3	det:poss	_	_
3	movimento	movimento	NOUN	NOUN	_	4	nsubj	_	_
4	vai	ir	VERB	VERB	_	0	root	_	_
5	além	além	ADV	ADV	_	4	advmod	_	_
6	de	_	ADP	ADP	_	11	mark	_	_
7	quem	_	PRON	PRON	_	11	nsubj	_	_
8	vai	ir	AUX	AUX	_	11	aux	_	_
9	ser	ser	AUX	AUX	_	11	cop	_	_
10	o	_	DET	DET	_	11	det	_	_
11	presidente	presidente	NOUN	NOUN	_	5	nmod	_	SpaceAfter=No
12	.	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 aux	color:blue
1	O	_	DET	DET	_	2	det	_	_
2	mimo	mimo	NOUN	NOUN	_	7	nsubj	_	_
3	em	_	ADP	ADP	_	4	case	_	_
4	questão	questão	NOUN	NOUN	_	2	nmod	_	_
5	foi	_	AUX	AUX	_	7	cop	_	_
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


