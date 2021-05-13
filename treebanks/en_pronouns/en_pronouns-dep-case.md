---
layout: base
title:  'Statistics of case in UD_English-Pronouns'
udver: '2'
---

## Treebank Statistics: UD_English-Pronouns: Relations: `case`

This relation is universal.

85 nodes (5%) are attached to their parents as `case`.

45 instances of `case` (53%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `case`: <tt><a href="en_pronouns-pos-PRON.html">PRON</a></tt>-<tt><a href="en_pronouns-pos-ADP.html">ADP</a></tt> (45; 53% instances), <tt><a href="en_pronouns-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pronouns-pos-ADP.html">ADP</a></tt> (30; 35% instances), <tt><a href="en_pronouns-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pronouns-pos-PART.html">PART</a></tt> (10; 12% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case	color:blue
1	Any	any	DET	DT	PronType=Ind	2	det	_	_
2	car	car	NOUN	NN	Number=Sing	5	nsubj	_	_
3	of	of	ADP	IN	_	4	case	_	_
4	hers	hers	PRON	PRP	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	2	nmod	_	_
5	sells	sell	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	quickly	quickly	ADV	RB	_	5	advmod	_	SpaceAfter=No
7	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 case	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	_	_
2	dealer	dealer	NOUN	NN	Number=Sing	3	nsubj	_	_
3	walked	walk	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	to	to	ADP	IN	_	3	case	_	_
5	hers	hers	PRON	PRP	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	3	obl	_	SpaceAfter=No
6	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 case	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	_	_
2	dealer	dealer	NOUN	NN	Number=Sing	4	nsubj	_	SpaceAfter=No
3	's	's	PART	POS	_	2	case	_	_
4	cars	car	NOUN	NNS	Number=Plur	7	nsubj	_	_
5	and	and	CCONJ	CC	_	6	cc	_	_
6	hers	hers	PRON	PRP	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	4	conj	_	_
7	sell	sell	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	quickly	quickly	ADV	RB	_	7	advmod	_	SpaceAfter=No
9	.	.	PUNCT	.	_	7	punct	_	_

~~~


