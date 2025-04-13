---
layout: base
title:  'Statistics of cc in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `cc`

This relation is universal.
There are 1 language-specific subtypes of `cc`: <tt><a href="en_pud-dep-cc-preconj.html">cc:preconj</a></tt>.

574 nodes (3%) are attached to their parents as `cc`.

574 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.70034843205575.

The following 15 pairs of parts of speech are connected with `cc`: <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-CCONJ.html">CCONJ</a></tt> (210; 37% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-CCONJ.html">CCONJ</a></tt> (203; 35% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-CCONJ.html">CCONJ</a></tt> (80; 14% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-CCONJ.html">CCONJ</a></tt> (43; 7% instances), <tt><a href="en_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="en_pud-pos-CCONJ.html">CCONJ</a></tt> (11; 2% instances), <tt><a href="en_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="en_pud-pos-CCONJ.html">CCONJ</a></tt> (7; 1% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-ADV.html">ADV</a></tt> (6; 1% instances), <tt><a href="en_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="en_pud-pos-CCONJ.html">CCONJ</a></tt> (3; 1% instances), <tt><a href="en_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="en_pud-pos-CCONJ.html">CCONJ</a></tt> (3; 1% instances), <tt><a href="en_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="en_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="en_pud-pos-DET.html">DET</a></tt>-<tt><a href="en_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="en_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="en_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="en_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-X.html">X</a></tt>-<tt><a href="en_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 cc	color:blue
1	There	there	PRON	EX	_	2	expl	2:expl	_
2	is	be	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	no	no	DET	DT	PronType=Neg	4	det	4:det	_
4	parade	parade	NOUN	NN	Number=Sing	2	nsubj	2:nsubj	_
5	and	and	CCONJ	CC	_	9	cc	9:cc	_
6	there	there	PRON	EX	_	9	expl	9:expl	_
7	never	never	ADV	RB	PronType=Neg	9	advmod	9:advmod	_
8	has	have	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux	9:aux	_
9	been	be	VERB	VBN	Tense=Past|VerbForm=Part	2	conj	2:conj:and	SpaceAfter=No
10	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cc	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	2:det	_
2	scheme	scheme	NOUN	NN	Number=Sing	3	nsubj	3:nsubj	_
3	makes	make	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
4	money	money	NOUN	NN	Number=Sing	3	obj	3:obj	_
5	through	through	ADP	IN	_	6	case	6:case	_
6	sponsorship	sponsorship	NOUN	NN	Number=Sing	3	obl	3:obl:through	_
7	and	and	CCONJ	CC	_	8	cc	8:cc	_
8	advertising	advertising	NOUN	NN	Number=Sing	6	conj	3:obl:through|6:conj:and	SpaceAfter=No
9	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc	color:blue
1	Durán	Durán	PROPN	NNP	Number=Sing	2	nsubj	2:nsubj|6:nsubj	_
2	acts	act	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	as	as	ADP	IN	_	4	case	4:case	_
4	spokesman	spokesman	NOUN	NN	Number=Sing	2	obl	2:obl:as	_
5	and	and	CCONJ	CC	_	6	cc	2.1:cc|6:cc	_
6	Ángel	Ángel	PROPN	NNP	Number=Sing	2	conj	2:conj:and|2.1:nsubj	_
7	Pintado	Pintado	PROPN	NNP	Number=Sing	6	flat	6:flat	_
8	as	as	ADP	IN	_	9	case	9:case	_
9	treasurer	treasurer	NOUN	NN	Number=Sing	6	orphan	2.1:obl:as	SpaceAfter=No
10	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


