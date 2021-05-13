---
layout: base
title:  'Statistics of mark in UD_English-Pronouns'
udver: '2'
---

## Treebank Statistics: UD_English-Pronouns: Relations: `mark`

This relation is universal.

30 nodes (2%) are attached to their parents as `mark`.

30 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.83333333333333.

The following 2 pairs of parts of speech are connected with `mark`: <tt><a href="en_pronouns-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pronouns-pos-SCONJ.html">SCONJ</a></tt> (25; 83% instances), <tt><a href="en_pronouns-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pronouns-pos-PART.html">PART</a></tt> (5; 17% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 mark	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	_	_
2	dealers	dealer	NOUN	NNS	Number=Plur	3	nsubj	_	_
3	liked	like	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	that	that	SCONJ	IN	_	6	mark	_	_
5	hers	hers	PRON	PRP	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	6	nsubj	_	_
6	cleaned	clean	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	ccomp	_	_
7	easily	easily	ADV	RB	_	6	advmod	_	SpaceAfter=No
8	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 mark	color:blue
1	Hers	hers	PRON	PRP	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	3	nsubj	_	_
2	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	easy	easy	ADJ	JJ	Degree=Pos	0	root	_	_
4	to	to	PART	TO	_	5	mark	_	_
5	clean	clean	VERB	VB	VerbForm=Inf	3	csubj	_	SpaceAfter=No
6	.	.	PUNCT	.	_	5	punct	_	_

~~~


