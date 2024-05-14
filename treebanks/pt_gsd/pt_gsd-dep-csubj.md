---
layout: base
title:  'Statistics of csubj in UD_Portuguese-GSD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-GSD: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="pt_gsd-dep-csubj-pass.html">csubj:pass</a></tt>.

594 nodes (0%) are attached to their parents as `csubj`.

499 instances of `csubj` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.38720538720539.

The following 12 pairs of parts of speech are connected with `csubj`: <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt> (292; 49% instances), <tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt> (227; 38% instances), <tt><a href="pt_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt> (34; 6% instances), <tt><a href="pt_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt> (20; 3% instances), <tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt> (7; 1% instances), <tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="pt_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj	color:blue
1	É	ser	VERB	VERB	_	0	root	_	_
2	possível	possível	ADJ	ADJ	_	1	xcomp	_	_
3	acabar	acabar	VERB	VERB	_	1	csubj	_	_
4	com	com	ADP	ADP	_	6	case	_	_
5	essa	_	DET	DET	_	6	det	_	_
6	história	história	NOUN	NOUN	_	3	nmod	_	SpaceAfter=No
7	.	.	PUNCT	.	_	1	punct	_	_

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
9	de	de	ADP	ADP	_	10	case	_	_
10	tinta	_	NOUN	NOUN	_	8	nmod	_	SpaceAfter=No
11	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 5 csubj	color:blue
1	Em	em	ADP	_	_	3	case	_	_
2	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	internet	internet	NOUN	_	Gender=Fem|Number=Sing	12	nmod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	manifestar	manifestar	VERB	_	VerbForm=Inf	12	csubj	_	_
6	se	se	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	expl	_	_
7	de	de	ADP	_	_	9	case	_	_
8	essa	esse	DET	_	Gender=Fem|Number=Sing|PronType=Dem	9	det	_	_
9	forma	forma	NOUN	_	Gender=Fem|Number=Sing	5	obl	_	_
10	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
11	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	mesmo	mesmo	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	0	root	_	_
13	que	que	SCONJ	_	_	14	mark	_	_
14	gritar	gritar	VERB	_	VerbForm=Inf	12	acl	_	SpaceAfter=No
15	;	;	PUNCT	_	_	12	punct	_	SpaceAfter=No

~~~


