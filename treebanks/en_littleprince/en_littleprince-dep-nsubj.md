---
layout: base
title:  'Statistics of nsubj in UD_English-LittlePrince'
udver: '2'
---

## Treebank Statistics: UD_English-LittlePrince: Relations: `nsubj`

This relation is universal.
There are 2 language-specific subtypes of `nsubj`: <tt><a href="en_littleprince-dep-nsubj-outer.html">nsubj:outer</a></tt>, <tt><a href="en_littleprince-dep-nsubj-pass.html">nsubj:pass</a></tt>.

678 nodes (10%) are attached to their parents as `nsubj`.

629 instances of `nsubj` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.23746312684366.

The following 19 pairs of parts of speech are connected with `nsubj`: <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt> (359; 53% instances), <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt> (150; 22% instances), <tt><a href="en_littleprince-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt> (51; 8% instances), <tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt> (50; 7% instances), <tt><a href="en_littleprince-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt> (21; 3% instances), <tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt> (13; 2% instances), <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-NUM.html">NUM</a></tt> (9; 1% instances), <tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt>-<tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="en_littleprince-pos-ADV.html">ADV</a></tt>-<tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="en_littleprince-pos-AUX.html">AUX</a></tt>-<tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="en_littleprince-pos-ADV.html">ADV</a></tt>-<tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="en_littleprince-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_littleprince-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_littleprince-pos-ADV.html">ADV</a></tt>-<tt><a href="en_littleprince-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_littleprince-pos-AUX.html">AUX</a></tt>-<tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_littleprince-pos-PART.html">PART</a></tt>-<tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt>-<tt><a href="en_littleprince-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_littleprince-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_littleprince-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_littleprince-pos-VERB.html">VERB</a></tt>-<tt><a href="en_littleprince-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 nsubj	color:blue
1	In	in	ADP	IN	_	5	case	_	_
2	certain	certain	ADJ	JJ	Degree=Pos	5	amod	_	_
3	more	more	ADV	RBR	Degree=Cmp	4	advmod	_	_
4	important	important	ADJ	JJ	Degree=Pos	5	amod	_	_
5	details	detail	NOUN	NNS	Number=Plur	8	obl	_	_
6	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	_
7	shall	shall	AUX	MD	VerbForm=Fin	8	aux	_	_
8	make	make	VERB	VB	VerbForm=Inf	0	root	_	_
9	mistakes	mistake	NOUN	NNS	Number=Plur	8	obj	_	_
10	,	,	PUNCT	,	_	11	punct	_	_
11	also	also	ADV	RB	_	8	advmod	_	_
12	.	.	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj	color:blue
1	My	my	PRON	PRP$	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	2	nmod:poss	_	_
2	friend	friend	NOUN	NN	Number=Sing	4	nsubj	_	_
3	never	never	ADV	RB	_	4	advmod	_	_
4	explained	explain	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	anything	anything	PRON	NN	Number=Sing|PronType=Ind	4	obj	_	_
6	to	to	ADP	IN	_	7	case	_	_
7	me	I	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	4	obl	_	_
8	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nsubj	color:blue
1	"	"	PUNCT	``	_	6	punct	_	_
2	Yes	yes	INTJ	UH	_	6	discourse	_	_
3	,	,	PUNCT	,	_	2	punct	_	_
4	that	that	PRON	DT	Number=Sing|PronType=Dem	6	nsubj	_	_
5	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	true	true	ADJ	JJ	Degree=Pos	0	root	_	_
7	.	.	PUNCT	.	_	6	punct	_	_
8	"	"	PUNCT	''	_	6	punct	_	_

~~~


