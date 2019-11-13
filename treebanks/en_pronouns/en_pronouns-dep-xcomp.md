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

The following 3 pairs of parts of speech are connected with `xcomp`: <tt><a href="en_pronouns-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pronouns-pos-VERB.html">VERB</a></tt> (20; 67% instances), <tt><a href="en_pronouns-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pronouns-pos-ADJ.html">ADJ</a></tt> (5; 17% instances), <tt><a href="en_pronouns-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pronouns-pos-PRON.html">PRON</a></tt> (5; 17% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	Dealers	dealer	NOUN	_	Number=Plur	2	nsubj	_	_
2	like	like	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	seeing	see	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Inf	2	xcomp	_	_
4	hers	she	PRON	SG-GEN-INDEP	Case=Gen|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	3	obj	_	SpaceAfter=No
5	.	.	PUNCT	Period	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 xcomp	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	_	_
2	dealer	dealer	NOUN	NN	Number=Sing	3	nsubj	_	_
3	recommended	recommend	VERB	V	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	that	that	SCONJ	_	_	6	mark	_	_
5	hers	she	PRON	SG-GEN-INDEP	Case=Gen|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	6	nsubj	_	_
6	get	get	VERB	V	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	ccomp	_	_
7	painted	paint	ADJ	POS	Degree=Pos	6	xcomp	_	SpaceAfter=No
8	.	.	PUNCT	Period	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	_	_
2	car	car	NOUN	NN	Number=Sing	3	nsubj	_	_
3	is	be	VERB	PRES	Mood=Ind|Number=Sing|Tense=Pres|VerbForm=Fin	0	root	_	_
4	at	at	ADP	E	_	5	case	_	_
5	hers	she	PRON	SG-GEN-INDEP	Case=Gen|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	3	xcomp	_	SpaceAfter=No
6	.	.	PUNCT	Period	_	3	punct	_	_

~~~


