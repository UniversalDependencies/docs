---
layout: base
title:  'Statistics of xcomp in UD_English-Pronouns'
udver: '2'
---

## Treebank Statistics: UD_English-Pronouns: Relations: `xcomp`

This relation is universal.

30 nodes (2%) are attached to their parents as `xcomp`.

30 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.16666666666667.

The following 2 pairs of parts of speech are connected with `xcomp`: <tt><a href="en_pronouns-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pronouns-pos-VERB.html">VERB</a></tt> (25; 83% instances), <tt><a href="en_pronouns-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pronouns-pos-PRON.html">PRON</a></tt> (5; 17% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	Dealers	dealer	NOUN	NNS	Number=Plur	2	nsubj	_	_
2	like	like	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	seeing	see	VERB	VBG	Tense=Pres|VerbForm=Part	2	xcomp	_	_
4	hers	hers	PRON	PRP	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	3	obj	_	SpaceAfter=No
5	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	_	_
2	car	car	NOUN	NN	Number=Sing	3	nsubj	_	_
3	is	be	VERB	VBZ	Mood=Ind|Number=Sing|Tense=Pres|VerbForm=Fin	0	root	_	_
4	at	at	ADP	IN	_	5	case	_	_
5	hers	hers	PRON	PRP	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	3	xcomp	_	SpaceAfter=No
6	.	.	PUNCT	.	_	3	punct	_	_

~~~


