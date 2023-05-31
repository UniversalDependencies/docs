---
layout: base
title:  'Statistics of compound:v in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `compound:v`

This relation is a language-specific subtype of <tt><a href="id_pud-dep-compound.html">compound</a></tt>.
There are also 3 other language-specific subtypes of `compound`: <tt><a href="id_pud-dep-compound-a.html">compound:a</a></tt>, <tt><a href="id_pud-dep-compound-n.html">compound:n</a></tt>, <tt><a href="id_pud-dep-compound-plur.html">compound:plur</a></tt>.

17 nodes (0%) are attached to their parents as `compound:v`.

17 instances of `compound:v` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `compound:v`: <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (11; 65% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (4; 24% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 compound:v	color:blue
1	Himne	_	NOUN	NN	_	3	nsubj:pass	_	_
2	itu	_	DET	DT	_	1	det	_	_
3	diterima	_	VERB	VV	_	0	root	_	_
4	dengan	_	ADP	IN	_	5	mark	_	_
5	baik	_	ADJ	JJ	_	3	advcl	_	_
6	dan	_	CCONJ	CC	_	8	cc	_	_
7	penonton	_	VERB	VV	_	8	nsubj	_	_
8	meminta	_	VERB	VV	_	3	conj	_	_
9	dinyanyikan	_	VERB	VV	_	8	xcomp	_	SpaceAfter=No
10	ulang	_	VERB	VV	_	9	compound:v	_	SpaceAfter=No
11	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 compound:v	color:blue
1	Dalam	_	ADP	IN	_	2	case	_	_
2	konteks	_	NOUN	NN	_	8	obl	_	_
3	ini	_	DET	DT	_	2	det	_	SpaceAfter=No
4	,	_	PUNCT	,	_	2	punct	_	_
5	protes	_	NOUN	NN	_	8	nsubj	_	_
6	menentang	_	VERB	VV	_	5	ccomp	_	_
7	perdagangan	_	NOUN	NN	_	6	obj	_	SpaceAfter=No
8	masuk	_	VERB	VV	_	0	root	_	_
9	akal	_	NOUN	NN	_	8	compound:v	_	SpaceAfter=No
10	.	_	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 22 compound:v	color:blue
1	Berita	_	NOUN	NN	_	5	nsubj	_	_
2	kemunduran	_	VERB	VV	_	1	compound	_	SpaceAfter=No
3	ini	_	DET	DT	_	1	det	_	_
4	sangat	_	ADV	RB	_	5	aux	_	_
5	mengejutkan	_	ADJ	JJ	_	0	root	_	SpaceAfter=No
6	opini	_	NOUN	NN	_	5	obj	_	_
7	publik	_	NOUN	NN	_	6	compound	_	_
8	Denmark	_	PROPN	NNP	_	7	compound	_	_
9	yang	_	ADP	IN	_	10	mark	_	_
10	menganggap	_	VERB	VV	_	6	acl:relcl	_	_
11	Danevirke	_	PROPN	NNP	_	13	nsubj	_	_
12	tidak	_	ADV	RB	Polarity=Neg	13	advmod	_	_
13	terkalahkan	_	VERB	VV	_	10	ccomp	_	SpaceAfter=No
14	,	_	PUNCT	,	_	21	punct	_	_
15	dan	_	CCONJ	CC	_	21	cc	_	_
16	tak	_	ADV	RB	Polarity=Neg	17	advmod	_	_
17	lama	_	ADV	RB	_	21	aux	_	_
18	Jenderal	_	NOUN	NN	_	21	nsubj:pass	_	_
19	de	_	PROPN	NNP	_	18	compound	_	_
20	Meza	_	PROPN	NNP	_	19	flat:name	_	_
21	dibebas	_	ADJ	JJ	_	5	conj	_	SpaceAfter=No
22	tugaskan	_	NOUN	NN	_	21	compound:v	_	SpaceAfter=No
23	dari	_	ADP	IN	_	24	case	_	_
24	komando	_	NOUN	NN	_	21	obl	_	SpaceAfter=No
25	nya	_	PRON	PRP$	_	24	nmod:poss	_	SpaceAfter=No
26	.	_	PUNCT	.	_	5	punct	_	_

~~~


