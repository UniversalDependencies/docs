---
layout: base
title:  'Statistics of conj in UD_English-Pronouns'
udver: '2'
---

## Treebank Statistics: UD_English-Pronouns: Relations: `conj`

This relation is universal.

20 nodes (1%) are attached to their parents as `conj`.

20 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.5.

The following 3 pairs of parts of speech are connected with `conj`: <tt><a href="en_pronouns-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pronouns-pos-PRON.html">PRON</a></tt> (10; 50% instances), <tt><a href="en_pronouns-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pronouns-pos-PRON.html">PRON</a></tt> (5; 25% instances), <tt><a href="en_pronouns-pos-PRON.html">PRON</a></tt>-<tt><a href="en_pronouns-pos-NOUN.html">NOUN</a></tt> (5; 25% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 conj	color:blue
1	Dealers	dealer	NOUN	_	Number=Plur	2	nsubj	_	_
2	like	like	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	seeing	see	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Inf	2	xcomp	_	_
4	cars	car	NOUN	_	Number=Plur	3	obj	_	SpaceAfter=No
5	,	,	PUNCT	,	_	2	punct	_	_
6	especially	especially	ADV	RB	_	7	orphan	_	_
7	hers	she	PRON	SG-GEN-INDEP	Case=Gen|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	2	conj	_	SpaceAfter=No
8	.	.	PUNCT	Period	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 conj	color:blue
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


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 conj	color:blue
1	Hers	she	PRON	SG-GEN-INDEP	Case=Gen|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	6	nsubj	_	_
2	and	and	CCONJ	CC	_	4	cc	_	_
3	the	the	DET	DT	Definite=Def|PronType=Art	4	det	_	_
4	dealer	dealer	NOUN	NN	Number=Sing	1	conj	_	SpaceAfter=No
5	's	's	PART	POS	_	4	case	_	_
6	sold	sell	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
7	quickly	quickly	ADV	RB	_	6	advmod	_	SpaceAfter=No
8	.	.	PUNCT	Period	_	7	punct	_	_

~~~


