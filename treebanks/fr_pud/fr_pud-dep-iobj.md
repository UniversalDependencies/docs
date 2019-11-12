---
layout: base
title:  'Statistics of iobj in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `iobj`

This relation is universal.

36 nodes (0%) are attached to their parents as `iobj`.

36 instances of `iobj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.44444444444444.

The following 2 pairs of parts of speech are connected with `iobj`: <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (35; 97% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 iobj	color:blue
1	J’	_	PRON	PRP	Number=Sing|Person=1	4	nsubj	_	OrigForm=J'|SpaceAfter=No
2	en	_	PRON	PRP	Person=3	4	iobj	_	_
3	ai	_	AUX	VBC	Mood=Ind|Number=Sing|Person=1|Tense=Pres	4	aux:tense	_	_
4	aperçu	_	VERB	VBN	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
5	.	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 12 iobj	color:blue
1	A	_	ADP	IN	_	3	case	_	_
2	cette	_	DET	DT	Gender=Fem|Number=Sing	3	det	_	_
3	époque	_	NOUN	NN	Gender=Fem|Number=Sing	7	obl	_	SpaceAfter=No
4	-là	_	PART	RP	_	3	advmod	_	SpaceAfter=No
5	,	_	PUNCT	,	_	3	punct	_	_
6	Kipling	_	PROPN	NNP	Gender=Masc|Number=Sing	7	nsubj	_	_
7	rencontra	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
8	également	_	ADV	RB	_	7	advmod	_	_
9	Florence	_	PROPN	NNP	Gender=Fem|Number=Sing	7	obj	_	_
10	Garrard	_	PROPN	NNP	Gender=Fem|Number=Sing	9	flat:name	_	SpaceAfter=No
11	,	_	PUNCT	,	_	9	punct	_	_
12	dont	_	ADP	INP	Gender=Fem|Number=Sing	15	iobj	_	_
13	il	_	PRON	PRP	Gender=Masc|Number=Sing|Person=3	14	nsubj	_	_
14	tomba	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	9	acl:relcl	_	_
15	amoureux	_	ADJ	JJ	Gender=Masc|Number=Sing	14	xcomp	_	SpaceAfter=No
16	,	_	PUNCT	,	_	18	punct	_	_
17	qui	_	PRON	WP	Gender=Fem|Number=Sing	18	nsubj	_	_
18	vivait	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Imp	9	acl:relcl	_	_
19	avec	_	ADP	IN	_	20	case	_	_
20	Trix	_	PROPN	NNP	Gender=Fem|Number=Sing	18	obl	_	_
21	à	_	ADP	IN	_	22	case	_	_
22	Southsea	_	PROPN	NNP	Number=Sing	18	obl	_	_
23	(	_	PUNCT	(	_	28	punct	_	SpaceAfter=No
24	où	_	ADV	WRB	_	28	advmod	_	_
25	cette	_	DET	DT	Gender=Fem|Number=Sing	26	det	_	_
26	dernière	_	NOUN	NN	Gender=Fem|Number=Sing	28	nsubj:pass	_	_
27	était	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Imp	28	aux:pass	_	_
28	revenue	_	VERB	VBN	Gender=Fem|Number=Sing	22	acl:relcl	_	SpaceAfter=No
29	)	_	PUNCT	)	_	28	punct	_	SpaceAfter=No
30	.	_	PUNCT	.	_	7	punct	_	_

~~~


