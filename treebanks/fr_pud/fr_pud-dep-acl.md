---
layout: base
title:  'Statistics of acl in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="fr_pud-dep-acl-relcl.html">acl:relcl</a></tt>.

149 nodes (1%) are attached to their parents as `acl`.

147 instances of `acl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.90604026845638.

The following 2 pairs of parts of speech are connected with `acl`: <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (148; 99% instances), <tt><a href="fr_pud-pos-X.html">X</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 acl	color:blue
1	5000	5000	NUM	CD	_	2	nummod	_	_
2	dollars	dollar	NOUN	NN	Gender=Masc|Number=Plur	0	root	_	_
3	par	par	ADP	IN	_	4	case	_	_
4	personne	personne	NOUN	NN	Gender=Fem|Number=Sing	2	nmod	_	SpaceAfter=No
5	,	,	PUNCT	,	_	7	punct	_	_
6	le	le	DET	DT	Gender=Masc|Number=Sing	7	det	_	_
7	maximum	maximum	NOUN	NN	Gender=Masc|Number=Sing	2	appos	_	_
8	autorisé	autoriser	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	7	acl	_	SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 acl	color:blue
1	Le	le	DET	DT	Gender=Masc|Number=Sing	2	det	_	wordform=le
2	Royal	royal	X	FW	_	14	nsubj	_	Proper=True
3	National	national	X	FW	_	2	flat:foreign	_	Proper=True
4	Park	Park	X	FW	_	2	flat:foreign	_	Proper=True
5	d'	de	ADP	IN	_	6	case	_	SpaceAfter=No
6	Australie	Australie	PROPN	NNP	Gender=Fem|Number=Sing	2	nmod	_	SpaceAfter=No
7	,	,	PUNCT	,	_	8	punct	_	_
8	ouvert	ouvrir	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	acl	_	_
9	en	en	ADP	IN	_	10	case	_	_
10	1879	1879	NUM	CD	_	8	obl	_	SpaceAfter=No
11	,	,	PUNCT	,	_	8	punct	_	_
12	fut	être	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	14	cop	_	_
13	le	le	DET	DT	Gender=Masc|Number=Sing	14	det	_	_
14	deuxième	deuxième	NOUN	NN	Gender=Masc|Number=Sing	0	root	_	_
15	de	de	ADP	INDT	_	17	case	_	_
16	le	le	DET	_	Gender=Masc|Number=Sing	17	det	_	_
17	monde	monde	NOUN	NN	Gender=Masc|Number=Sing	14	nmod	_	_
18	à	à	ADP	IN	_	20	case	_	_
19	officiellement	officiellement	ADV	RB	_	20	advmod	_	_
20	voir	voir	VERB	VB	VerbForm=Inf	14	xcomp	_	_
21	le	le	DET	DT	Gender=Masc|Number=Sing	22	det	_	_
22	jour	jour	NOUN	NN	Gender=Masc|Number=Sing	20	obj	_	SpaceAfter=No
23	.	.	PUNCT	.	_	14	punct	_	_

~~~


