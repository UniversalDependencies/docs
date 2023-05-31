---
layout: base
title:  'Statistics of ccomp in UD_Italian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Italian-PUD: Relations: `ccomp`

This relation is universal.

137 nodes (1%) are attached to their parents as `ccomp`.

137 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.87591240875912.

The following 15 pairs of parts of speech are connected with `ccomp`: <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-VERB.html">VERB</a></tt> (99; 72% instances), <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt> (14; 10% instances), <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-ADJ.html">ADJ</a></tt> (9; 7% instances), <tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_pud-pos-VERB.html">VERB</a></tt> (4; 3% instances), <tt><a href="it_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="it_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="it_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="it_pud-pos-DET.html">DET</a></tt>-<tt><a href="it_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_pud-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="it_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="it_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 ccomp	color:blue
1	Diciamo	dire	VERB	VBC	Mood=Ind|Number=Plur|Person=1|Tense=Pres|Voice=Act	0	root	_	_
2	semplicemente	semplicemente	ADV	RB	_	1	advmod	_	_
3	che	che	SCONJ	IN	_	4	mark	_	_
4	ha	avere	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	1	ccomp	_	_
5	torto	torto	NOUN	NN	Gender=Masc|Number=Sing	4	obj	_	SpaceAfter=No
6	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 ccomp	color:blue
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


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 15 ccomp	color:blue
1	Vega	Vega	PROPN	NNP	Gender=Fem|Number=Sing	3	nsubj	_	_
2	ha	avere	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	3	aux	_	_
3	commentato	commentare	VERB	VBN	Tense=Past	0	root	_	_
4	che	che	SCONJ	IN	_	15	mark	_	SpaceAfter=No
5	,	,	PUNCT	,	_	7	punct	_	_
6	a	a	ADP	IN	_	7	case	_	_
7	causa	causa	NOUN	NN	Gender=Fem|Number=Sing	15	obl	_	_
8	di	di	ADP	IN	_	11	case	_	_
9	la	il	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
10	loro	loro	PRON	DTP$	Gender=Fem|Number=Sing|Number[psor]=Plur|Person=3|PronType=Prs	11	det:poss	_	_
11	età	età	NOUN	NN	Gender=Fem|Number=Sing	7	nmod	_	SpaceAfter=No
12	,	,	PUNCT	,	_	7	punct	_	_
13	molti	molto	DET	DT	Gender=Masc|Number=Plur	15	nsubj	_	_
14	sono	essere	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	15	cop	_	_
15	ignari	ignaro	ADJ	JJ	Gender=Masc|Number=Plur	3	ccomp	_	_
16	di	di	ADP	IN	_	19	case	_	_
17	la	il	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	19	det	_	_
18	sua	suo	PRON	DTP$	Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|PronType=Prs	19	det:poss	_	_
19	storia	storia	NOUN	NN	Gender=Fem|Number=Sing	15	obl	_	SpaceAfter=No
20	.	.	PUNCT	.	_	3	punct	_	_

~~~


