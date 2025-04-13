---
layout: base
title:  'Statistics of amod in UD_Portuguese-Porttinari'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Porttinari: Relations: `amod`

This relation is universal.

6640 nodes (4%) are attached to their parents as `amod`.

4953 instances of `amod` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.17198795180723.

The following 6 pairs of parts of speech are connected with `amod`: <tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt> (6204; 93% instances), <tt><a href="pt_porttinari-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt> (260; 4% instances), <tt><a href="pt_porttinari-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt> (143; 2% instances), <tt><a href="pt_porttinari-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt> (15; 0% instances), <tt><a href="pt_porttinari-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt> (9; 0% instances), <tt><a href="pt_porttinari-pos-X.html">X</a></tt>-<tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt> (9; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 amod	color:blue
1	Viver	viver	VERB	_	VerbForm=Inf	0	root	0:root	_
2	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	3:det	_
3	vida	vida	NOUN	_	Gender=Fem|Number=Sing	1	obj	1:obj	_
4	real	real	ADJ	_	Number=Sing	3	amod	3:amod	SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	7:punct	_
6	em	em	ADP	_	_	7	case	7:case	_
7	vez	vez	NOUN	_	Gender=Fem|Number=Sing	1	obl	1:obl:em	_
8	de	de	ADP	_	_	9	mark	9:mark	_
9	ficar	ficar	VERB	_	VerbForm=Inf	7	acl	7:acl:de	_
10	com	com	ADP	_	_	12	case	12:case	_
11	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	12:det	_
12	celular	celular	NOUN	_	Gender=Masc|Number=Sing	9	obl	9:obl:com	_
13	em	em	ADP	_	_	15	case	15:case	_
14	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	15:det	_
15	mão	mão	NOUN	_	Gender=Fem|Number=Sing	12	nmod	12:nmod:em	SpaceAfter=No
16	.	.	PUNCT	_	_	1	punct	1:punct	SpaceAfter=No

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 amod	color:blue
1	A	o	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Dem	4	nsubj	4:nsubj	_
2	última	último	ADJ	_	Gender=Fem|Number=Sing	1	amod	1:amod	_
3	me	me	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	4	obj	4:obj	_
4	atropelou	atropelar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
5	em	em	ADP	_	_	7	case	7:case	_
6	este	este	DET	_	Gender=Masc|Number=Sing|PronType=Dem	7	det	7:det	_
7	domingo	domingo	NOUN	_	Gender=Masc|Number=Sing	4	obl	4:obl:em	SpaceAfter=No
8	.	.	PUNCT	_	_	4	punct	4:punct	SpaceAfter=No

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 amod	color:blue
1	Dom	Dom	PROPN	_	_	4	nsubj	4:nsubj|8:nsubj	_
2	Pedro	Pedro	PROPN	_	_	1	flat:name	1:flat:name	_
3	1º	1º	ADJ	_	Gender=Masc|NumType=Ord	1	amod	1:amod	_
4	levantou	levantar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
5	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	6:det	_
6	espada	espada	NOUN	_	Gender=Fem|Number=Sing	4	obj	4:obj	_
7	e	e	CCONJ	_	_	8	cc	8:cc	_
8	gritou	gritar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	conj	4:conj:e	_
9	"	"	PUNCT	_	_	10	punct	10:punct	SpaceAfter=No
10	Fora	fora	ADV	_	_	8	ccomp:speech	8:ccomp:speech	SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	12:punct	_
12	Temer	Temer	PROPN	_	_	10	vocative	10:vocative	SpaceAfter=No
13	!	!	PUNCT	_	_	10	punct	10:punct	SpaceAfter=No
14	"	"	PUNCT	_	_	10	punct	10:punct	SpaceAfter=No
15	.	.	PUNCT	_	_	4	punct	4:punct	SpaceAfter=No

~~~


