---
layout: base
title:  'Statistics of root in UD_English-Pronouns'
udver: '2'
---

## Treebank Statistics: UD_English-Pronouns: Relations: `root`

This relation is universal.

285 nodes (17%) are attached to their parents as `root`.

285 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.50877192982456.

The following 4 pairs of parts of speech are connected with `root`: -<tt><a href="en_pronouns-pos-VERB.html">VERB</a></tt> (200; 70% instances), -<tt><a href="en_pronouns-pos-PRON.html">PRON</a></tt> (70; 25% instances), -<tt><a href="en_pronouns-pos-ADJ.html">ADJ</a></tt> (10; 4% instances), -<tt><a href="en_pronouns-pos-AUX.html">AUX</a></tt> (5; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 5 root	color:blue
1	Any	any	DET	DT	PronType=Ind	2	det	_	_
2	car	car	NOUN	NN	Number=Sing	5	nsubj	_	_
3	of	of	ADP	E	_	4	case	_	_
4	hers	she	PRON	SG-GEN-INDEP	Case=Gen|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	2	nmod	_	_
5	sells	sell	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	quickly	quickly	ADV	RB	_	5	advmod	_	SpaceAfter=No
7	.	.	PUNCT	Period	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	It	it	PRON	PERS-SG	Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	is	be	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	hers	she	PRON	SG-GEN-INDEP	Case=Gen|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	0	root	_	SpaceAfter=No
4	.	.	PUNCT	Period	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	Hers	she	PRON	SG-GEN-INDEP	Case=Gen|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	3	nsubj	_	_
2	is	be	AUX	V	Mood=Ind|Number=Plur|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	nice	quick	ADJ	A	_	0	root	_	SpaceAfter=No
4	.	.	PUNCT	Period	_	3	punct	_	_

~~~


