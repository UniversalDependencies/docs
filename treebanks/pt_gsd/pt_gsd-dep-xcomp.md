---
layout: base
title:  'Statistics of xcomp in UD_Portuguese-GSD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-GSD: Relations: `xcomp`

This relation is universal.
There are 1 language-specific subtypes of `xcomp`: <tt><a href="pt_gsd-dep-xcomp-adj.html">xcomp:adj</a></tt>.

968 nodes (0%) are attached to their parents as `xcomp`.

963 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.77376033057851.

The following 14 pairs of parts of speech are connected with `xcomp`: <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt> (763; 79% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-ADJ.html">ADJ</a></tt> (151; 16% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt> (36; 4% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt> (4; 0% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="pt_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-AUX.html">AUX</a></tt>-<tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_gsd-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-PART.html">PART</a></tt>-<tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-X.html">X</a></tt>-<tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 xcomp	color:blue
1	Quero	querer	VERB	VERB	_	10	ccomp	_	_
2	dar	dar	VERB	VERB	_	1	xcomp	_	_
3	o	_	DET	DET	_	4	det	_	_
4	máximo	máximo	NOUN	NOUN	_	2	obj	_	_
5	e	_	CCONJ	CONJ	_	6	cc	_	_
6	sair	sair	VERB	VERB	_	2	conj	_	_
7	satisfeito	satisfeito	ADJ	ADJ	_	6	xcomp:adj	_	_
8	'	_	PUNCT	.	_	1	punct	_	SpaceAfter=No
9	,	_	PUNCT	.	_	10	punct	_	_
10	afirmou	afirmar	VERB	VERB	_	0	root	_	SpaceAfter=No
11	.	_	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 xcomp	color:blue
1	E	_	CCONJ	CONJ	_	4	cc	_	_
2	era	_	AUX	AUX	_	4	cop	_	_
3	uma	_	DET	DET	_	4	det	_	_
4	coisa	coisa	NOUN	NOUN	_	0	root	_	_
5	que	_	PRON	PRON	_	7	nsubj	_	_
6	nos	_	PRON	PRON	_	8	nsubj	_	_
7	deixava	deixar	VERB	VERB	_	4	acl:relcl	_	_
8	confortáveis	confortável	ADJ	ADJ	_	7	xcomp	_	SpaceAfter=No
9	.	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 xcomp	color:blue
1	Por	_	ADP	ADP	_	2	case	_	_
2	isso	_	PRON	PRON	_	7	nmod	_	SpaceAfter=No
3	,	_	PUNCT	.	_	2	punct	_	_
4	administrar	administrar	VERB	VERB	_	7	csubj	_	_
5	nem	_	ADV	ADV	_	7	advmod	_	_
6	sempre	sempre	ADV	ADV	_	7	advmod	_	_
7	significa	significar	VERB	VERB	_	0	root	_	_
8	ser	ser	AUX	AUX	_	9	cop	_	_
9	estadista	estadista	NOUN	NOUN	_	7	xcomp	_	SpaceAfter=No
10	.	_	PUNCT	.	_	7	punct	_	_

~~~


