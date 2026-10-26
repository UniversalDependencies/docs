---
layout: base
title:  'Statistics of nmod in UD_English-LittlePrince'
udver: '2'
---

## Treebank Statistics: UD_English-LittlePrince: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="en_littleprince-dep-nmod-poss.html">nmod:poss</a></tt>.

142 nodes (2%) are attached to their parents as `nmod`.

142 instances of `nmod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.92957746478873.

The following 16 pairs of parts of speech are connected with `nmod`: <tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt> (107; 75% instances), <tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt> (8; 6% instances), <tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt>-<tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt> (6; 4% instances), <tt><a href="en_littleprince-pos-NUM.html">NUM</a></tt>-<tt><a href="en_littleprince-pos-NUM.html">NUM</a></tt> (4; 3% instances), <tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_littleprince-pos-DET.html">DET</a></tt> (3; 2% instances), <tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_littleprince-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="en_littleprince-pos-NUM.html">NUM</a></tt>-<tt><a href="en_littleprince-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt>-<tt><a href="en_littleprince-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="en_littleprince-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="en_littleprince-pos-DET.html">DET</a></tt>-<tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_littleprince-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_littleprince-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="en_littleprince-pos-NUM.html">NUM</a></tt>-<tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_littleprince-pos-NUM.html">NUM</a></tt>-<tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt>-<tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="en_littleprince-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_littleprince-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 nmod	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	_	_
2	idea	idea	NOUN	NN	Number=Sing	8	nsubj	_	_
3	of	of	ADP	IN	_	5	case	_	_
4	the	the	DET	DT	Definite=Def|PronType=Art	5	det	_	_
5	herd	herd	NOUN	NN	Number=Sing	2	nmod	_	_
6	of	of	ADP	IN	_	7	case	_	_
7	elephants	elephant	NOUN	NNS	Number=Plur	5	nmod	_	_
8	made	make	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
9	the	the	DET	DT	Definite=Def|PronType=Art	11	det	_	_
10	little	little	ADJ	JJ	Degree=Pos	11	amod	_	_
11	prince	prince	NOUN	NN	Number=Sing	8	obj	_	_
12	laugh	laugh	VERB	VB	VerbForm=Inf	8	xcomp	_	_
13	.	.	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 nmod	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	suppose	suppose	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	6	nsubj	_	_
4	would	would	AUX	MD	VerbForm=Fin	6	aux	_	_
5	n't	not	PART	RB	_	6	advmod	_	_
6	have	have	VERB	VB	VerbForm=Inf	2	ccomp	_	_
7	a	a	DET	DT	Definite=Ind|PronType=Art	8	det	_	_
8	screen	screen	NOUN	NN	Number=Sing	6	obj	_	_
9	for	for	ADP	IN	_	10	case	_	_
10	me	I	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	8	nmod	_	_
11	?	?	PUNCT	.	_	2	punct	_	_
12	"	"	PUNCT	''	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 nmod	color:blue
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


