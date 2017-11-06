---
layout: base
title:  'Statistics of aux in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="fr_pud-dep-aux-pass.html">aux:pass</a></tt>.

569 nodes (2%) are attached to their parents as `aux`.

569 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.35500878734622.

The following 4 pairs of parts of speech are connected with `aux`: <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (544; 96% instances), <tt><a href="fr_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (12; 2% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (7; 1% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (6; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 aux	color:blue
1	Auparavant	_	ADV	RB	_	7	advmod	_	_
2	les	_	DET	DT	Gender=Masc|Number=Plur	3	det	_	_
3	jets	_	NOUN	NN	Gender=Masc|Number=Plur	7	nsubj:pass	_	_
4	avaient	_	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Imp	7	aux	_	_
5	seulement	_	ADV	RB	_	7	advmod	_	_
6	été	_	VERB	VBN	Gender=Masc|Number=Sing	7	aux:pass	_	_
7	vus	_	VERB	VBN	Gender=Masc|Number=Plur	0	root	_	_
8	par	_	ADP	IN	_	10	case	_	_
9	des	_	DET	DT	Gender=Masc|Number=Plur	10	det	_	_
10	bloggeurs	_	NOUN	NN	Gender=Masc|Number=Plur	7	obl	_	SpaceAfter=No
11	.	_	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	Elle	_	PRON	PRP	Gender=Fem|Number=Sing|Person=3	4	nsubj:pass	_	_
2	a	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	aux	_	_
3	été	_	VERB	VBN	Gender=Masc|Number=Sing	4	aux:pass	_	_
4	déclarée	_	AUX	VBN	Gender=Fem|Number=Sing	0	root	_	_
5	réserve	_	NOUN	NN	Gender=Fem|Number=Sing	4	xcomp	_	_
6	naturelle	_	ADJ	JJ	Gender=Fem|Number=Sing	5	amod	_	_
7	en	_	ADP	IN	_	8	case	_	_
8	1975	_	NUM	CD	_	4	obl	_	SpaceAfter=No
9	.	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 aux	color:blue
1	Sa	_	PRON	DTP$	Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|PronType=Prs	2	nmod:poss	_	_
2	gestion	_	NOUN	NN	Gender=Fem|Number=Sing	10	nsubj	_	SpaceAfter=No
3	,	_	PUNCT	,	_	4	punct	_	_
4	cependant	_	ADV	RB	_	10	advmod	_	SpaceAfter=No
5	,	_	PUNCT	,	_	4	punct	_	_
6	n'	_	ADV	RB	Polarity=Neg	10	advmod	_	SpaceAfter=No
7	a	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	10	aux	_	_
8	pas	_	ADV	RB	Polarity=Neg	10	advmod	_	_
9	été	_	AUX	VBN	Gender=Masc|Number=Sing	10	cop	_	_
10	exempte	_	ADJ	JJ	Gender=Fem|Number=Sing	0	root	_	_
11	de	_	ADP	IN	_	12	case	_	_
12	critiques	_	NOUN	NN	Gender=Fem|Number=Plur	10	obl	_	SpaceAfter=No
13	.	_	PUNCT	.	_	10	punct	_	_

~~~


