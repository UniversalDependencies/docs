---
layout: base
title:  'Statistics of advcl:relcl in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `advcl:relcl`

This relation is a language-specific subtype of <tt><a href="en_pud-dep-advcl.html">advcl</a></tt>.

1 nodes (0%) are attached to their parents as `advcl:relcl`.

1 instances of `advcl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 1 pairs of parts of speech are connected with `advcl:relcl`: <tt><a href="en_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 advcl:relcl	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	3:expl	_
2	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	cop	3:cop	_
3	here	here	ADV	RB	PronType=Dem	0	root	0:root	_
4	they	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	5	nsubj	5:nsubj	_
5	stole	steal	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	3	advcl:relcl	3:advcl:relcl	_
6	a	a	DET	DT	Definite=Ind|PronType=Art	8	det	8:det	_
7	small	small	ADJ	JJ	Degree=Pos	8	amod	8:amod	_
8	canoe	canoe	NOUN	NN	Number=Sing	5	obj	5:obj	_
9	left	leave	VERB	VBN	Tense=Past|VerbForm=Part	8	acl	8:acl	_
10	by	by	ADP	IN	_	13	case	13:case	_
11	the	the	DET	DT	Definite=Def|PronType=Art	13	det	13:det	_
12	Australian	Australian	ADJ	JJ	Degree=Pos	13	amod	13:amod	Proper=True
13	Aborigines	Aborigines	PROPN	NNPS	Number=Plur	9	obl	9:obl:by	_
14	of	of	ADP	IN	_	16	case	16:case	_
15	the	the	DET	DT	Definite=Def|PronType=Art	16	det	16:det	_
16	region	region	NOUN	NN	Number=Sing	13	nmod	13:nmod:of	SpaceAfter=No
17	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


