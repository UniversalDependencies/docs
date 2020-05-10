---
layout: base
title:  'Statistics of csubj in UD_Portuguese-GSD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-GSD: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="pt_gsd-dep-csubj-pass.html">csubj:pass</a></tt>.

658 nodes (0%) are attached to their parents as `csubj`.

548 instances of `csubj` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.52279635258359.

The following 11 pairs of parts of speech are connected with `csubj`: <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt> (343; 52% instances), <tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt> (243; 37% instances), <tt><a href="pt_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt> (37; 6% instances), <tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt> (9; 1% instances), <tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt> (8; 1% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt> (4; 1% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="pt_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj	color:blue
1	É	ser	VERB	VERB	_	0	root	_	_
2	possível	possível	ADJ	ADJ	_	1	xcomp:adj	_	_
3	acabar	acabar	VERB	VERB	_	1	csubj	_	_
4	com	_	ADP	ADP	_	6	case	_	_
5	essa	_	DET	DET	_	6	det	_	_
6	história	história	NOUN	NOUN	_	3	nmod	_	SpaceAfter=No
7	.	_	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj	color:blue
1	Outra	_	DET	DET	_	2	det	_	_
2	dica	dica	NOUN	NOUN	_	0	root	_	_
3	é	ser	AUX	AUX	_	2	cop	_	_
4	prestar	prestar	VERB	VERB	_	2	csubj	_	_
5	atenção	atenção	NOUN	NOUN	_	4	obj	_	_
6	a	a	ADP	ADP	_	8	case	_	_
7	o	o	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	tipo	tipo	NOUN	NOUN	_	4	nmod	_	_
9	de	_	ADP	ADP	_	10	case	_	_
10	tinta	_	NOUN	NOUN	_	8	nmod	_	SpaceAfter=No
11	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 csubj	color:blue
1	"	_	PUNCT	.	_	2	punct	_	SpaceAfter=No
2	O	_	PRON	PRON	_	0	root	_	_
3	que	_	PRON	PRON	_	6	obj	_	_
4	nós	_	PRON	PRON	_	6	nsubj	_	_
5	vamos	ir	AUX	AUX	_	6	aux	_	_
6	fazer	fazer	VERB	VERB	_	2	acl:relcl	_	_
7	agora	agora	ADV	ADV	_	6	advmod	_	_
8	é	ser	AUX	AUX	_	2	cop	_	_
9	responder	responder	VERB	VERB	_	2	csubj	_	_
10	a	a	ADP	ADP	_	12	case	_	_
11	os	o	DET	DET	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	12	det	_	_
12	termos	termo	NOUN	NOUN	_	9	nmod	_	_
13	de	de	ADP	ADP	_	15	case	_	_
14	a	o	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
15	ação	ação	NOUN	NOUN	_	12	nmod	_	SpaceAfter=No
16	.	_	PUNCT	.	_	2	punct	_	_

~~~


