---
layout: base
title:  'Statistics of mark in UD_Italian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Italian-PUD: Relations: `mark`

This relation is universal.

506 nodes (2%) are attached to their parents as `mark`.

506 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.99209486166008.

The following 16 pairs of parts of speech are connected with `mark`: <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-ADP.html">ADP</a></tt> (271; 54% instances), <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-SCONJ.html">SCONJ</a></tt> (160; 32% instances), <tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_pud-pos-SCONJ.html">SCONJ</a></tt> (19; 4% instances), <tt><a href="it_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_pud-pos-SCONJ.html">SCONJ</a></tt> (17; 3% instances), <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-ADV.html">ADV</a></tt> (16; 3% instances), <tt><a href="it_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_pud-pos-ADP.html">ADP</a></tt> (6; 1% instances), <tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_pud-pos-ADP.html">ADP</a></tt> (6; 1% instances), <tt><a href="it_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="it_pud-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="it_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="it_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="it_pud-pos-DET.html">DET</a></tt>-<tt><a href="it_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="it_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="it_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 mark	color:blue
1	Non	non	ADV	RB	Polarity=Neg	2	advmod	_	_
2	tutti	tutto	NOUN	NN	Gender=Masc|Number=Plur	3	nsubj	_	_
3	riescono	riuscire	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	0	root	_	_
4	ad	ad	ADP	IN	_	5	mark	_	_
5	andare	andare	VERB	VB	Voice=Act	3	xcomp	_	_
6	oltre	oltre	ADV	RB	_	5	advmod	_	SpaceAfter=No
7	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 mark	color:blue
1	Diciamo	dire	VERB	VBC	Mood=Ind|Number=Plur|Person=1|Tense=Pres|Voice=Act	0	root	_	_
2	semplicemente	semplicemente	ADV	RB	_	1	advmod	_	_
3	che	che	SCONJ	IN	_	4	mark	_	_
4	ha	avere	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	1	ccomp	_	_
5	torto	torto	NOUN	NN	Gender=Masc|Number=Sing	4	obj	_	SpaceAfter=No
6	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 mark	color:blue
1	In	in	ADP	IN	_	3	case	_	_
2	un	uno	DET	DT	Gender=Masc|Number=Sing	3	det	_	_
3	episodio	episodio	NOUN	NN	Gender=Masc|Number=Sing	6	obl	_	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	_	_
5	si	si	PRON	SE	Number=Sing|Person=3	6	expl	_	_
6	rivela	rivelare	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	_
7	che	che	SCONJ	IN	_	11	mark	_	_
8	è	essere	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	11	cop	_	_
9	un	uno	DET	DT	Gender=Masc|Number=Sing	11	det	_	_
10	abile	abile	ADJ	JJ	Gender=Masc|Number=Sing	11	amod	_	_
11	chitarrista	chitarrista	NOUN	NN	Gender=Masc|Number=Sing	6	ccomp	_	SpaceAfter=No
12	.	.	PUNCT	.	_	6	punct	_	_

~~~


