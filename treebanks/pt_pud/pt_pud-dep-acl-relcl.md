---
layout: base
title:  'Statistics of acl:relcl in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="pt_pud-dep-acl.html">acl</a></tt>.

236 nodes (1%) are attached to their parents as `acl:relcl`.

236 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.67796610169492.

The following 14 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (170; 72% instances), <tt><a href="pt_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (21; 9% instances), <tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (15; 6% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (10; 4% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="pt_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="pt_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="pt_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="pt_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pt_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 acl:relcl	color:blue
1	Um	_	DET	DT	Gender=Masc|Number=Sing	2	det	_	_
2	nível	_	NOUN	NN	Gender=Masc|Number=Sing	0	root	_	_
3	que	_	PRON	WP	_	10	nsubj	_	SpaceAfter=No
4	,	_	PUNCT	,	_	8	punct	_	_
5	em	_	ADP	IN	_	8	case	_	_
6	ambos	_	DET	PDT	Gender=Masc|Number=Plur	8	det:predet	_	_
7	os	_	DET	DT	Gender=Masc|Number=Plur	8	det	_	_
8	casos	_	NOUN	NN	Gender=Masc|Number=Plur	10	obl	_	SpaceAfter=No
9	,	_	PUNCT	,	_	8	punct	_	_
10	está	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	acl:relcl	_	_
11	em	em	ADP	INDT	_	13	case	_	_
12	o	o	DET	_	Gender=Masc|Number=Sing	13	det	_	_
13	topo	_	NOUN	NN	Gender=Masc|Number=Sing	10	obl	_	_
14	de	de	ADP	INDT	_	16	case	_	_
15	a	o	DET	_	Gender=Fem|Number=Sing	16	det	_	_
16	UE	_	PROPN	NNP	Gender=Fem|Number=Sing	13	nmod	_	SpaceAfter=No
17	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl:relcl	color:blue
1	Isto	_	PRON	PDEM	Gender=Masc|Number=Sing	4	nsubj	_	_
2	não	_	ADV	RB	Polarity=Neg	4	advmod	_	_
3	é	_	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	cop	_	_
4	o	_	PRON	PDEM	Gender=Masc|Number=Sing	0	root	_	_
5	que	_	PRON	WP	_	6	obj	_	_
6	precisamos	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres	4	acl:relcl	_	_
7	em	em	ADP	INDT	_	10	case	_	_
8	o	o	DET	_	Gender=Masc|Number=Sing	10	det	_	_
9	nosso	_	PRON	DTP$	Gender=Masc|Number=Sing|Number[psor]=Plur|Person=1|PronType=Prs	10	det	_	_
10	país	_	NOUN	NN	Gender=Masc|Number=Sing	6	obl	_	SpaceAfter=No
11	,	_	PUNCT	,	_	12	punct	_	_
12	pessoal	_	NOUN	NN	Gender=Masc|Number=Sing	4	vocative	_	SpaceAfter=No
13	.	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 acl:relcl	color:blue
1	O	_	DET	PDT	Gender=Masc|Number=Sing	4	det:predet	_	_
2	seu	_	PRON	DTP$	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=3|PronType=Prs	4	det	_	_
3	primeiro	_	ADJ	JJ	Gender=Masc|Number=Sing	4	amod	_	_
4	rei	_	NOUN	NN	Gender=Masc|Number=Sing	6	nsubj	_	_
5	foi	_	AUX	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	6	cop	_	_
6	Mojmir	_	PROPN	NNP	Gender=Masc|Number=Sing	0	root	_	_
7	I	_	ADJ	JJ	Gender=Masc|Number=Sing	6	compound	_	Proper=True
8	(	_	PUNCT	(	_	10	punct	_	SpaceAfter=No
9	que	_	PRON	WP	_	10	nsubj	_	_
10	governou	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	6	acl:relcl	_	_
11	de	_	ADP	IN	_	12	case	_	_
12	830	_	NUM	CD	Gender=Masc	10	obl	_	_
13	a	_	ADP	IN	_	14	case	_	_
14	846	_	NUM	CD	Gender=Masc	12	nmod	_	SpaceAfter=No
15	)	_	PUNCT	)	_	10	punct	_	SpaceAfter=No
16	.	_	PUNCT	.	_	6	punct	_	_

~~~


