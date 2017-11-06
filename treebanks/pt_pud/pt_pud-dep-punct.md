---
layout: base
title:  'Statistics of punct in UD_Portuguese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PUD: Relations: `punct`

This relation is universal.

2547 nodes (11%) are attached to their parents as `punct`.

1597 instances of `punct` (63%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.83195916764821.

The following 13 pairs of parts of speech are connected with `punct`: <tt><a href="pt_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pud-pos-PUNCT.html">PUNCT</a></tt> (1174; 46% instances), <tt><a href="pt_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pud-pos-PUNCT.html">PUNCT</a></tt> (655; 26% instances), <tt><a href="pt_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pud-pos-PUNCT.html">PUNCT</a></tt> (176; 7% instances), <tt><a href="pt_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pud-pos-PUNCT.html">PUNCT</a></tt> (160; 6% instances), <tt><a href="pt_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_pud-pos-PUNCT.html">PUNCT</a></tt> (134; 5% instances), <tt><a href="pt_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_pud-pos-PUNCT.html">PUNCT</a></tt> (77; 3% instances), <tt><a href="pt_pud-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="pt_pud-pos-PUNCT.html">PUNCT</a></tt> (67; 3% instances), <tt><a href="pt_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_pud-pos-PUNCT.html">PUNCT</a></tt> (46; 2% instances), <tt><a href="pt_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="pt_pud-pos-PUNCT.html">PUNCT</a></tt> (45; 2% instances), <tt><a href="pt_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="pt_pud-pos-PUNCT.html">PUNCT</a></tt> (7; 0% instances), <tt><a href="pt_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_pud-pos-PUNCT.html">PUNCT</a></tt> (4; 0% instances), <tt><a href="pt_pud-pos-DET.html">DET</a></tt>-<tt><a href="pt_pud-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances), <tt><a href="pt_pud-pos-X.html">X</a></tt>-<tt><a href="pt_pud-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 punct	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 punct	color:blue
1	$5,000	_	NUM	CD	_	0	root	_	OrigForm=$5000
2	por	_	ADP	IN	_	3	case	_	_
3	pessoa	_	NOUN	NN	Gender=Fem|Number=Sing	1	nmod	_	SpaceAfter=No
4	,	_	PUNCT	,	_	6	punct	_	_
5	o	_	DET	DT	Gender=Masc|Number=Sing	6	det	_	_
6	máximo	_	NOUN	NN	Gender=Masc|Number=Sing	1	appos	_	_
7	permitido	_	ADJ	JJ	Gender=Masc|Number=Sing	6	amod	_	SpaceAfter=No
8	.	_	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 16 punct	color:blue
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


