---
layout: base
title:  'Statistics of csubj:pass in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="pt_pud-dep-csubj.html">csubj</a></tt>.

5 nodes (0%) are attached to their parents as `csubj:pass`.

5 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.2.

The following 2 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (3; 60% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (2; 40% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 csubj:pass	color:blue
1	É	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	aux:pass	_	_
2	permitido	_	VERB	VBN	Gender=Masc|Number=Sing	0	root	_	_
3	a	_	ADP	IN	_	4	case	_	_
4	empregados	empregado	NOUN	NN	Gender=Masc|Number=Plur	2	obl	_	_
5	manter	_	VERB	VB	_	2	csubj:pass	_	_
6	objetos	objeto	NOUN	NN	Gender=Masc|Number=Plur	5	obj	_	_
7	religiosos	religioso	ADJ	JJ	Gender=Masc|Number=Plur	6	amod	_	_
8	em	em	ADP	IN	_	10	case	_	_
9	suas	_	PRON	DTP$	Gender=Fem|Number=Plur|Number[psor]=Plur|Person=3|PronType=Prs	10	det	_	_
10	mesas	mesa	NOUN	NN	Gender=Fem|Number=Plur	5	obl	_	SpaceAfter=No
11	?	?	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 csubj:pass	color:blue
1	Em	_	ADP	IN	_	3	case	_	_
2	uma	um	DET	DT	Gender=Fem|Number=Sing	3	det	_	_
3	ocasião	ocasião	NOUN	NN	Gender=Fem|Number=Sing	6	obl	_	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	_	_
5	é	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	6	aux:pass	_	_
6	insinuado	_	VERB	VBN	Gender=Masc|Number=Sing	0	root	_	_
7	que	que	SCONJ	IN	_	11	mark	_	_
8	ele	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	11	nsubj	_	_
9	é	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	11	cop	_	_
10	um	um	DET	DT	Gender=Masc|Number=Sing	11	det	_	_
11	agente	agente	NOUN	NN	Gender=Masc|Number=Sing	6	csubj:pass	_	_
12	secreto	secreto	ADJ	JJ	Gender=Masc|Number=Sing	11	amod	_	_
13	cujo	cujo	DET	WP	Gender=Masc|Number=Sing|Poss=Yes|PronType=Rel	14	det	_	_
14	alvo	alvo	NOUN	NN	Gender=Masc|Number=Sing	16	nsubj	_	_
15	é	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	16	cop	_	_
16	Homer	Homer	PROPN	NNP	Gender=Masc|Number=Sing	11	acl:relcl	_	SpaceAfter=No
17	.	.	PUNCT	.	_	6	punct	_	_

~~~


