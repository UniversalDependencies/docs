---
layout: base
title:  'Statistics of xcomp in UD_Italian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Italian-PUD: Relations: `xcomp`

This relation is universal.

249 nodes (1%) are attached to their parents as `xcomp`.

247 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.64658634538153.

The following 9 pairs of parts of speech are connected with `xcomp`: <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-VERB.html">VERB</a></tt> (146; 59% instances), <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-ADJ.html">ADJ</a></tt> (45; 18% instances), <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt> (41; 16% instances), <tt><a href="it_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_pud-pos-VERB.html">VERB</a></tt> (7; 3% instances), <tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_pud-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="it_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	Non	non	ADV	RB	Polarity=Neg	2	advmod	_	_
2	tutti	tutto	NOUN	NN	Gender=Masc|Number=Plur	3	nsubj	_	_
3	riescono	riuscire	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	0	root	_	_
4	ad	ad	ADP	IN	_	5	mark	_	_
5	andare	andare	VERB	VB	Voice=Act	3	xcomp	_	_
6	oltre	oltre	ADV	RB	_	5	advmod	_	SpaceAfter=No
7	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	Si	si	PRON	SE	Number=Sing|Person=3	3	expl	_	_
2	è	essere	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	3	aux	_	_
3	proclamato	proclamare	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past	0	root	_	_
4	favorevole	favorevole	ADJ	JJ	Gender=Masc|Number=Sing	3	xcomp	_	_
5	a	a	ADP	IN	_	7	case	_	_
6	la	il	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	tortura	tortura	NOUN	NN	Gender=Fem|Number=Sing	4	obl	_	SpaceAfter=No
8	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	Non	non	ADV	RB	Polarity=Neg	3	advmod	_	_
2	lo	lo	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3	3	obj	_	_
3	definisco	definire	VERB	VBC	Mood=Ind|Number=Sing|Person=1|Tense=Pres|Voice=Act	0	root	_	_
4	una	uno	DET	DT	Gender=Fem|Number=Sing	5	det	_	_
5	bestia	bestia	NOUN	NN	Gender=Fem|Number=Sing	3	xcomp	_	_
6	con	con	ADP	IN	_	7	case	_	_
7	leggerezza	leggerezza	NOUN	NN	Gender=Fem|Number=Sing	3	obl	_	SpaceAfter=No
8	.	.	PUNCT	.	_	3	punct	_	_

~~~


