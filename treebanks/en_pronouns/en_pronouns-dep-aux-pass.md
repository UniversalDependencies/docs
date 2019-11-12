---
layout: base
title:  'Statistics of aux:pass in UD_English-Pronouns'
udver: '2'
---

## Treebank Statistics: UD_English-Pronouns: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="en_pronouns-dep-aux.html">aux</a></tt>.

25 nodes (1%) are attached to their parents as `aux:pass`.

25 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="en_pronouns-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pronouns-pos-AUX.html">AUX</a></tt> (20; 80% instances), <tt><a href="en_pronouns-pos-PRON.html">PRON</a></tt>-<tt><a href="en_pronouns-pos-AUX.html">AUX</a></tt> (5; 20% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux:pass	color:blue
1	Hers	she	PRON	SG-GEN-INDEP	Case=Gen|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	3	nsubj	_	_
2	was	be	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
3	cleaned	clean	VERB	V	Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
4	.	.	PUNCT	Period	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 aux:pass	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	_	_
2	dealer	dealer	NOUN	NN	Number=Sing	3	nsubj	_	_
3	cleaned	clean	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	the	the	DET	DT	Definite=Def|PronType=Art	5	det	_	_
5	car	car	NOUN	NN	Number=Sing	3	obj	_	SpaceAfter=No
6	:	:	PUNCT	:	_	3	punct	_	_
7	it	it	PRON	PERS-SG	_	9	nsubj	_	_
8	was	be	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	9	aux:pass	_	_
9	hers	she	PRON	SG-GEN-INDEP	Case=Gen|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	3	parataxis	_	SpaceAfter=No
10	.	.	PUNCT	Period	_	3	punct	_	_

~~~


