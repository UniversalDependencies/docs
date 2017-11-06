---
layout: base
title:  'Statistics of obl in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `obl`

This relation is universal.
There are 1 language-specific subtypes of `obl`: <tt><a href="pt_pud-dep-obl-tmod.html">obl:tmod</a></tt>.

1397 nodes (6%) are attached to their parents as `obl`.

1188 instances of `obl` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.0100214745884.

The following 17 pairs of parts of speech are connected with `obl`: <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (956; 68% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt> (147; 11% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-NUM.html">NUM</a></tt> (95; 7% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (60; 4% instances), <tt><a href="pt_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt> (60; 4% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-PRON.html">PRON</a></tt> (36; 3% instances), <tt><a href="pt_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt> (8; 1% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (7; 1% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-PRON.html">PRON</a></tt> (6; 0% instances), <tt><a href="pt_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_pud-pos-SYM.html">SYM</a></tt> (6; 0% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="pt_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_pud-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-SYM.html">SYM</a></tt> (3; 0% instances), <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pt_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 obl	color:blue
1	É	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
2	como	_	ADP	IN	_	4	case	_	_
3	um	_	DET	DT	Gender=Masc|Number=Sing	4	det	_	_
4	superpoder	_	NOUN	NN	Gender=Masc|Number=Sing	1	obl	_	SpaceAfter=No
5	,	_	PUNCT	,	_	6	punct	_	_
6	a	a	ADP	INDT	_	1	discourse	_	_
7	as	o	DET	_	Gender=Fem|Number=Plur	6	fixed	_	_
8	vezes	_	NOUN	NN	Gender=Fem|Number=Plur	6	fixed	_	SpaceAfter=No
9	.	_	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 obl	color:blue
1	Ele	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	2	nsubj	_	_
2	trabalhou	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
3	para	_	ADP	IN	_	5	case	_	_
4	a	_	DET	DT	Gender=Fem|Number=Sing	5	det	_	_
5	BBC	_	PROPN	NNP	Gender=Fem|Number=Sing	2	obl	_	_
6	por	_	ADP	IN	_	8	case	_	_
7	uma	_	DET	CD	Gender=Fem	8	det	_	_
8	década	_	NOUN	NN	Gender=Fem|Number=Sing	2	obl	_	SpaceAfter=No
9	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 obl	color:blue
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


