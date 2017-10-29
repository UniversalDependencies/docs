---
layout: base
title:  'Statistics of acl:relcl in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="es_pud-dep-acl.html">acl</a></tt>.

243 nodes (1%) are attached to their parents as `acl:relcl`.

243 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.5679012345679.

The following 9 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (205; 84% instances), <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (17; 7% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (9; 4% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="es_pud-pos-DET.html">DET</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="es_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="es_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 acl:relcl	color:blue
1	Hay	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	_
2	gente	_	NOUN	NN	Gender=Fem|Number=Sing	1	obj	_	_
3	que	_	PRON	REL	Gender=Fem|Number=Sing	5	nsubj:pass	_	_
4	fue	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Pass	5	aux:pass	_	_
5	asesinada	_	VERB	VBN	Gender=Fem|Number=Sing	2	acl:relcl	_	_
6	allí	_	ADV	RB	_	5	advmod	_	SpaceAfter=No
7	.	_	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 16 acl:relcl	color:blue
1	Mientras	_	ADP	IN	_	9	discourse	_	_
2	tanto	_	ADV	RB	_	1	fixed	_	SpaceAfter=No
3	,	_	PUNCT	,	_	1	punct	_	_
4	su	_	PRON	DTP$	Gender=Masc|Number=Sing|Person=3	5	det	_	_
5	puesto	_	NOUN	NN	Gender=Masc|Number=Sing	9	nsubj:pass	_	_
6	de	_	ADP	IN	_	7	case	_	_
7	tribuno	_	NOUN	NN	Gender=Masc|Number=Sing	5	nmod	_	_
8	fue	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Pass	9	aux:pass	_	_
9	ocupado	_	VERB	VBN	Gender=Masc|Number=Sing	0	root	_	_
10	por	_	ADP	IN	_	11	case	_	_
11	Marco	_	PROPN	NNP	Gender=Masc|Number=Sing	9	obl	_	_
12	Antonio	_	PROPN	NNP	Gender=Masc|Number=Sing	11	flat:name	_	SpaceAfter=No
13	,	_	PUNCT	,	_	16	punct	_	_
14	que	_	PRON	REL	Gender=Masc|Number=Sing	16	nsubj	_	_
15	lo	_	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3	16	obj	_	_
16	desempeñó	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	11	acl:relcl	_	_
17	hasta	_	ADP	IN	_	18	case	_	_
18	diciembre	_	NOUN	NN	Gender=Masc|Number=Sing	16	obl	_	SpaceAfter=No
19	.	_	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 acl:relcl	color:blue
1	Lo	_	DET	DT	Gender=Masc|Number=Sing	2	det	_	_
2	único	_	NOUN	NN	Gender=Masc|Number=Sing	8	nsubj	_	_
3	que	_	PRON	REL	Gender=Masc|Number=Sing	6	nsubj	_	_
4	no	_	ADV	RB	Polarity=Neg	6	advmod	_	_
5	está	_	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	6	cop	_	_
6	claro	_	ADJ	JJ	Gender=Masc|Number=Sing	2	acl:relcl	_	_
7	ahora	_	ADV	RB	_	6	advmod	_	_
8	es	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	_
9	en	_	ADP	IN	_	10	case	_	_
10	cuál	_	PRON	WP	Number=Sing	8	obl	_	SpaceAfter=No
11	.	_	PUNCT	.	_	8	punct	_	_

~~~


