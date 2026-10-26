---
layout: base
title:  'Statistics of acl:relcl in UD_Old_Occitan-CorAG'
udver: '2'
---

## Treebank Statistics: UD_Old_Occitan-CorAG: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="pro_corag-dep-acl.html">acl</a></tt>.

795 nodes (2%) are attached to their parents as `acl:relcl`.

794 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.18616352201258.

The following 16 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="pro_corag-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pro_corag-pos-VERB.html">VERB</a></tt> (516; 65% instances), <tt><a href="pro_corag-pos-PRON.html">PRON</a></tt>-<tt><a href="pro_corag-pos-VERB.html">VERB</a></tt> (213; 27% instances), <tt><a href="pro_corag-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pro_corag-pos-NOUN.html">NOUN</a></tt> (14; 2% instances), <tt><a href="pro_corag-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pro_corag-pos-ADJ.html">ADJ</a></tt> (11; 1% instances), <tt><a href="pro_corag-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pro_corag-pos-VERB.html">VERB</a></tt> (11; 1% instances), <tt><a href="pro_corag-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pro_corag-pos-ADV.html">ADV</a></tt> (8; 1% instances), <tt><a href="pro_corag-pos-PRON.html">PRON</a></tt>-<tt><a href="pro_corag-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="pro_corag-pos-PRON.html">PRON</a></tt>-<tt><a href="pro_corag-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="pro_corag-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pro_corag-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="pro_corag-pos-ADV.html">ADV</a></tt>-<tt><a href="pro_corag-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="pro_corag-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pro_corag-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="pro_corag-pos-PRON.html">PRON</a></tt>-<tt><a href="pro_corag-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="pro_corag-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pro_corag-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pro_corag-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pro_corag-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="pro_corag-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pro_corag-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pro_corag-pos-VERB.html">VERB</a></tt>-<tt><a href="pro_corag-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 acl:relcl	color:blue
1	Aquest	_	DET	_	_	2	det	_	_
2	capitol	_	NOUN	_	_	3	nsubj	_	_
3	ha	_	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	_
4	loc	_	NOUN	_	_	3	obj	_	_
5	en	_	ADP	_	_	7	case	_	_
6	los	_	DET	_	_	7	det	_	_
7	locxs	_	NOUN	_	_	3	obl	_	_
8	qui	_	PRON	_	PronType=Rel	10	nsubj	_	_
9	no	_	ADV	_	Polarity=Neg	10	advmod	_	_
10	son	_	VERB	_	Number=Plur|Person=3|VerbForm=Fin	7	acl:relcl	_	_
11	de-	_	ADP	_	_	13	case	_	_
12	-lo	_	DET	_	_	13	det	_	_
13	senhor	_	NOUN	_	_	10	obl	_	SpaceAfter=No
14	,	_	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 15 acl:relcl	color:blue
1	e	_	CCONJ	_	_	11	cc	_	_
2	si-	_	SCONJ	_	_	4	mark	_	_
3	-no	_	ADV	_	Polarity=Neg	4	advmod	_	_
4	pod	_	VERB	_	Number=Sing|Person=3|VerbForm=Fin	11	advcl	_	_
5	lui	_	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	obj	_	_
6	aver	_	VERB	_	VerbForm=Inf	4	xcomp	_	_
7	a	_	ADP	_	_	8	case	_	_
8	dret	_	NOUN	_	_	6	obl	_	_
9	ed	_	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	nsubj	_	_
10	medix	_	ADJ	_	_	9	amod	_	_
11	fase	_	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	_
12	so	_	PRON	_	Gender=Neut|Number=Sing|PronType=Dem	11	obj	_	_
13	que	_	PRON	_	PronType=Rel	16	obj	_	_
14	ed	_	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	15	nsubj	_	_
15	deu	_	VERB	_	Number=Sing|Person=3|VerbForm=Fin	12	acl:relcl	_	_
16	far	_	VERB	_	VerbForm=Inf	15	xcomp	_	SpaceAfter=No
17	.	_	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 acl:relcl	color:blue
1	ans	_	ADV	_	_	2	advmod	_	_
2	dischut	_	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	_
3	plus	_	ADV	_	_	4	advmod	_	_
4	layh	_	NOUN	_	_	2	obj	_	_
5	que	_	PRON	_	PronType=Rel	9	nsubj	_	_
6	no	_	ADV	_	Polarity=Neg	9	advmod	_	_
7	es	_	AUX	_	Number=Sing|Person=3|VerbForm=Fin	9	cop	_	_
8	digna	_	ADJ	_	_	9	amod	_	_
9	causa	_	NOUN	_	_	4	acl:relcl	_	_
10	de	_	ADP	_	_	11	mark	_	_
11	diser	_	VERB	_	VerbForm=Inf	9	xcomp	_	SpaceAfter=No
12	.	_	PUNCT	_	_	2	punct	_	_

~~~


