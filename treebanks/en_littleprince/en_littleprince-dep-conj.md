---
layout: base
title:  'Statistics of conj in UD_English-LittlePrince'
udver: '2'
---

## Treebank Statistics: UD_English-LittlePrince: Relations: `conj`

This relation is universal.

89 nodes (1%) are attached to their parents as `conj`.

89 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.23595505617978.

The following 16 pairs of parts of speech are connected with `conj`: <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt> (28; 31% instances), <tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt> (19; 21% instances), <tt><a href="en_littleprince-pos-NUM.html">NUM</a></tt>-<tt><a href="en_littleprince-pos-NUM.html">NUM</a></tt> (17; 19% instances), <tt><a href="en_littleprince-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_littleprince-pos-ADJ.html">ADJ</a></tt> (5; 6% instances), <tt><a href="en_littleprince-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt> (5; 6% instances), <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-ADJ.html">ADJ</a></tt> (3; 3% instances), <tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_littleprince-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="en_littleprince-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_littleprince-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="en_littleprince-pos-ADP.html">ADP</a></tt>-<tt><a href="en_littleprince-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="en_littleprince-pos-ADV.html">ADV</a></tt>-<tt><a href="en_littleprince-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_littleprince-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 conj	color:blue
1	He	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
2	has	have	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	_
3	never	never	ADV	RB	_	4	advmod	_	_
4	done	do	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	_
5	anything	anything	PRON	NN	Number=Sing	4	obj	_	_
6	in	in	ADP	IN	_	8	case	_	_
7	his	he	PRON	PRP$	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	8	nmod:poss	_	_
8	life	life	NOUN	NN	Number=Sing	5	nmod	_	_
9	but	but	CCONJ	CC	_	10	cc	_	_
10	add	add	VERB	VB	VerbForm=Inf	4	conj	_	_
11	up	up	ADP	RP	_	10	compound:prt	_	_
12	figures	figure	NOUN	NNS	Number=Plur	10	obj	_	_
13	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 conj	color:blue
1	Is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
2	the	the	DET	DT	Definite=Def|PronType=Art	3	det	_	_
3	warfare	warfare	NOUN	NN	Number=Sing	11	nsubj	_	_
4	between	between	ADP	IN	_	6	case	_	_
5	the	the	DET	DT	Definite=Def|PronType=Art	6	det	_	_
6	sheep	sheep	NOUN	NNS	Number=Plur	3	nmod	_	_
7	and	and	CCONJ	CC	_	9	cc	_	_
8	the	the	DET	DT	Definite=Def|PronType=Art	9	det	_	_
9	flowers	flower	NOUN	NNS	Number=Plur	6	conj	_	_
10	not	not	ADV	RB	_	11	advmod	_	_
11	important	important	ADJ	JJ	Degree=Pos	0	root	_	_
12	?	?	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 conj	color:blue
1	"	"	PUNCT	``	_	5	punct	_	_
2	Three	three	NUM	CD	NumType=Card	5	nsubj	_	_
3	and	and	CCONJ	CC	_	4	cc	_	_
4	two	two	NUM	CD	NumType=Card	2	conj	_	_
5	make	make	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
6	five	five	NUM	CD	NumType=Card	5	obj	_	_
7	.	.	PUNCT	.	_	5	punct	_	_

~~~


