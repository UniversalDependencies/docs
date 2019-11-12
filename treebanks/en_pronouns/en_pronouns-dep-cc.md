---
layout: base
title:  'Statistics of cc in UD_English-Pronouns'
udver: '2'
---

## Treebank Statistics: UD_English-Pronouns: Relations: `cc`

This relation is universal.

10 nodes (1%) are attached to their parents as `cc`.

10 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5.

The following 2 pairs of parts of speech are connected with `cc`: <tt><a href="en_pronouns-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pronouns-pos-CCONJ.html">CCONJ</a></tt> (5; 50% instances), <tt><a href="en_pronouns-pos-PRON.html">PRON</a></tt>-<tt><a href="en_pronouns-pos-CCONJ.html">CCONJ</a></tt> (5; 50% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cc	color:blue
1	Hers	she	PRON	SG-GEN-INDEP	Case=Gen|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	6	nsubj	_	_
2	and	and	CCONJ	CC	_	4	cc	_	_
3	the	the	DET	DT	Definite=Def|PronType=Art	4	det	_	_
4	dealer	dealer	NOUN	NN	Number=Sing	1	conj	_	SpaceAfter=No
5	's	's	PART	POS	_	4	case	_	_
6	sold	sell	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
7	quickly	quickly	ADV	RB	_	6	advmod	_	SpaceAfter=No
8	.	.	PUNCT	Period	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	_	_
2	dealer	dealer	NOUN	NN	Number=Sing	4	nsubj	_	SpaceAfter=No
3	's	's	PART	POS	_	2	case	_	_
4	cars	car	NOUN	NNS	Number=Plur	7	nsubj	_	_
5	and	and	CCONJ	CC	_	6	cc	_	_
6	hers	she	PRON	SG-GEN-INDEP	Case=Gen|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	4	conj	_	_
7	sell	sell	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	quickly	quickly	ADV	RB	_	7	advmod	_	SpaceAfter=No
9	.	.	PUNCT	Period	_	7	punct	_	_

~~~


