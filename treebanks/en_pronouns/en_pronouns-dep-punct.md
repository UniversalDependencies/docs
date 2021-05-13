---
layout: base
title:  'Statistics of punct in UD_English-Pronouns'
udver: '2'
---

## Treebank Statistics: UD_English-Pronouns: Relations: `punct`

This relation is universal.

320 nodes (19%) are attached to their parents as `punct`.

310 instances of `punct` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.4375.

The following 5 pairs of parts of speech are connected with `punct`: <tt><a href="en_pronouns-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pronouns-pos-PUNCT.html">PUNCT</a></tt> (225; 70% instances), <tt><a href="en_pronouns-pos-PRON.html">PRON</a></tt>-<tt><a href="en_pronouns-pos-PUNCT.html">PUNCT</a></tt> (70; 22% instances), <tt><a href="en_pronouns-pos-ADV.html">ADV</a></tt>-<tt><a href="en_pronouns-pos-PUNCT.html">PUNCT</a></tt> (10; 3% instances), <tt><a href="en_pronouns-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pronouns-pos-PUNCT.html">PUNCT</a></tt> (10; 3% instances), <tt><a href="en_pronouns-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pronouns-pos-PUNCT.html">PUNCT</a></tt> (5; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 punct	color:blue
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
# visual-style 3 4 punct	color:blue
1	It	it	PRON	PRP	Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	hers	hers	PRON	PRP	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	0	root	_	SpaceAfter=No
4	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 punct	color:blue
1	Hers	hers	PRON	PRP	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	6	nsubj	_	_
2	and	and	CCONJ	CC	_	4	cc	_	_
3	the	the	DET	DT	Definite=Def|PronType=Art	4	det	_	_
4	dealer	dealer	NOUN	NN	Number=Sing	1	conj	_	SpaceAfter=No
5	's	's	PART	POS	_	4	case	_	_
6	sold	sell	VERB	VBD	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
7	quickly	quickly	ADV	RB	_	6	advmod	_	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	_	_

~~~


