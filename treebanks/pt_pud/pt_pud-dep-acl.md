---
layout: base
title:  'Statistics of acl in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="pt_pud-dep-acl-relcl.html">acl:relcl</a></tt>.

181 nodes (1%) are attached to their parents as `acl`.

161 instances of `acl` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.61878453038674.

The following 10 pairs of parts of speech are connected with `acl`: <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (98; 54% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (63; 35% instances), <tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (7; 4% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (6; 3% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="pt_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 acl	color:blue
1	Ainda	ainda	ADV	RB	_	4	discourse	_	_
2	assim	assim	ADV	RB	_	1	fixed	_	SpaceAfter=No
3	,	,	PUNCT	,	_	1	punct	_	_
4	há	haver	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
5	perguntas	pergunta	NOUN	NN	Gender=Fem|Number=Plur	4	obj	_	_
6	deixadas	_	VERB	VBN	Gender=Fem|Number=Plur	5	acl	_	_
7	sem	_	ADP	IN	_	8	case	_	_
8	resposta	resposta	NOUN	NN	Gender=Fem|Number=Sing	6	obl	_	SpaceAfter=No
9	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 acl	color:blue
1	É	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	cop	_	_
2	isso	_	PRON	PDEM	Gender=Masc|Number=Sing	0	root	_	_
3	que	_	PRON	WP	_	6	nsubj	_	_
4	em	em	ADP	PRP	_	6	obj	_	_
5	os	o	DET	_	Case=Acc|Number=Plur|Person=1	4	det	_	_
6	mantém	manter	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	acl:relcl	_	_
7	voltando	_	VERB	VBG	_	6	acl	_	_
8	para	para	ADP	IN	_	9	case	_	_
9	mais	mais	ADV	RBR	_	7	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 acl	color:blue
1	Em	_	ADP	IN	_	2	case	_	_
2	2007	_	NUM	CD	Gender=Masc	9	nmod	_	ToDo=nmod
3	o	o	DET	DT	Gender=Masc|Number=Sing	4	det	_	_
4	filme	filme	NOUN	NN	Gender=Masc|Number=Sing	9	nsubj	_	_
5	mais	mais	ADV	RBS	_	6	advmod	_	_
6	bem	bem	ADV	_	_	7	advmod	_	_
7	sucedido	sucedido	ADJ	JJ	Gender=Masc|Number=Sing	4	amod	_	_
8	foi	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	9	cop	_	_
9	El	El	PROPN	NNP	Gender=Masc|Number=Sing	0	root	_	_
10	Greco	Greco	PROPN	NNP	Foreign=Yes|Gender=Masc|Number=Sing	9	flat	_	SpaceAfter=No
11	,	,	PUNCT	,	_	12	punct	_	_
12	dirigido	_	VERB	VBN	Gender=Masc|Number=Sing	9	acl	_	_
13	por	por	ADP	IN	_	14	case	_	_
14	Yannis	Yannis	PROPN	NNP	Gender=Masc|Number=Sing	12	obl	_	_
15	Smaragdis	Smaragdis	PROPN	NNP	Gender=Masc|Number=Sing	14	flat:name	_	SpaceAfter=No
16	.	.	PUNCT	.	_	9	punct	_	_

~~~


