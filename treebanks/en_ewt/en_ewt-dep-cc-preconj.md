---
layout: base
title:  'Statistics of cc:preconj in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="en_ewt-dep-cc.html">cc</a></tt>.

125 nodes (0%) are attached to their parents as `cc:preconj`.

119 instances of `cc:preconj` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.256.

The following 13 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-CCONJ.html">CCONJ</a></tt> (39; 31% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-CCONJ.html">CCONJ</a></tt> (29; 23% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-CCONJ.html">CCONJ</a></tt> (16; 13% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-ADV.html">ADV</a></tt> (10; 8% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-CCONJ.html">CCONJ</a></tt> (8; 6% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-ADV.html">ADV</a></tt> (7; 6% instances), <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="en_ewt-pos-CCONJ.html">CCONJ</a></tt> (5; 4% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-ADV.html">ADV</a></tt> (3; 2% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="en_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="en_ewt-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="en_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="en_ewt-pos-CCONJ.html">CCONJ</a></tt> (2; 2% instances), <tt><a href="en_ewt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="en_ewt-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="en_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="en_ewt-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cc:preconj	color:blue
1	Al	Al	PROPN	NNP	Number=Sing	2	compound	2:compound	_
2	Qaeda	Qaeda	PROPN	NNP	Number=Sing	3	nsubj	3:nsubj	_
3	had	have	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	0:root	_
4	both	both	CCONJ	CC	_	6	cc:preconj	6:cc:preconj	_
5	the	the	DET	DT	Definite=Def|PronType=Art	6	det	6:det	_
6	means	means	NOUN	NNS	Number=Plur	3	obj	3:obj	_
7	and	and	CCONJ	CC	_	8	cc	8:cc	_
8	opportunity	opportunity	NOUN	NN	Number=Sing	6	conj	3:obj|6:conj:and	SpaceAfter=No
9	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc:preconj	color:blue
1	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	2	nsubj	2:nsubj	_
2	know	know	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	that	that	SCONJ	IN	_	9	mark	9:mark	_
4	both	both	CCONJ	CC	_	5	cc:preconj	5:cc:preconj	_
5	o'neal	o'neal	PROPN	NNP	Number=Sing	9	nsubj	9:nsubj	_
6	and	and	CCONJ	CC	_	7	cc	7:cc	_
7	matt	matt	PROPN	NNP	Number=Sing	5	conj	5:conj:and|9:nsubj	_
8	are	be	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	9	cop	9:cop	_
9	out	out	ADV	RB	_	2	ccomp	2:ccomp	SpaceAfter=No
10	?	?	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cc:preconj	color:blue
1	Expect	expect	VERB	VB	Mood=Imp|VerbForm=Fin	0	root	0:root	_
2	either	either	CCONJ	CC	_	3	cc:preconj	3:cc:preconj	_
3	undercooked	undercook	VERB	VBN	Tense=Past|VerbForm=Part	6	amod	6:amod	_
4	or	or	CCONJ	CC	_	5	cc	5:cc	_
5	mushy	mushy	ADJ	JJ	Degree=Pos	3	conj	3:conj:or|6:amod	_
6	food	food	NOUN	NN	Number=Sing	1	obj	1:obj	_
7	and	and	CCONJ	CC	_	9	cc	9:cc	_
8	lackluster	lackluster	ADJ	JJ	Degree=Pos	9	amod	9:amod	_
9	service	service	NOUN	NN	Number=Sing	6	conj	1:obj|6:conj:and	SpaceAfter=No
10	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


