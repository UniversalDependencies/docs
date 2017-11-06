---
layout: base
title:  'Statistics of acl in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="pt_pud-dep-acl-relcl.html">acl:relcl</a></tt>.

175 nodes (1%) are attached to their parents as `acl`.

156 instances of `acl` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.66857142857143.

The following 7 pairs of parts of speech are connected with `acl`: <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (93; 53% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (64; 37% instances), <tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (7; 4% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (6; 3% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 acl	color:blue
1	Ainda	_	ADV	RB	_	4	discourse	_	_
2	assim	_	ADV	RB	_	1	fixed	_	SpaceAfter=No
3	,	_	PUNCT	,	_	1	punct	_	_
4	há	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
5	perguntas	_	NOUN	NN	Gender=Fem|Number=Plur	4	obj	_	_
6	deixadas	_	VERB	VBN	Aspect=Perf|Gender=Fem|Number=Plur	5	acl	_	_
7	sem	_	ADP	IN	_	8	case	_	_
8	resposta	_	NOUN	NN	Gender=Fem|Number=Sing	6	obl	_	SpaceAfter=No
9	.	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 acl	color:blue
1	É	_	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	cop	_	_
2	isso	_	PRON	PDEM	Gender=Masc|Number=Sing	0	root	_	_
3	que	_	PRON	WP	_	6	nsubj	_	_
4	em	em	ADP	PRP	_	6	obj	_	_
5	os	o	DET	_	Case=Acc|Number=Plur|Person=1	4	det	_	_
6	mantém	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	acl:relcl	_	_
7	voltando	_	VERB	VBG	Aspect=Imp	6	acl	_	_
8	para	_	ADP	IN	_	9	case	_	_
9	mais	_	ADV	RBR	_	7	xcomp	_	SpaceAfter=No
10	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 acl	color:blue
1	Em	_	ADP	IN	_	2	case	_	_
2	2007	_	NUM	CD	Gender=Masc	8	nmod	_	ToDo=nmod
3	o	_	DET	DT	Gender=Masc|Number=Sing	4	det	_	_
4	filme	_	NOUN	NN	Gender=Masc|Number=Sing	8	nsubj	_	_
5	mais	_	ADV	RBS	_	6	advmod	_	_
6	bem-sucedido	_	ADJ	JJ	Gender=Masc|Number=Sing	4	amod	_	_
7	foi	_	AUX	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	8	cop	_	_
8	El	_	PROPN	NNP	Gender=Masc|Number=Sing	0	root	_	_
9	Greco	_	PROPN	NNP	Foreign=Yes|Gender=Masc|Number=Sing	8	flat	_	SpaceAfter=No
10	,	_	PUNCT	,	_	11	punct	_	_
11	dirigido	_	VERB	VBN	Aspect=Perf|Gender=Masc|Number=Sing	8	acl	_	_
12	por	_	ADP	IN	_	13	case	_	_
13	Yannis	_	PROPN	NNP	Gender=Masc|Number=Sing	11	obl	_	_
14	Smaragdis	_	PROPN	NNP	Gender=Masc|Number=Sing	13	flat:name	_	SpaceAfter=No
15	.	_	PUNCT	.	_	8	punct	_	_

~~~


