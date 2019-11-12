---
layout: base
title:  'Statistics of nsubj in UD_English-Pronouns'
udver: '2'
---

## Treebank Statistics: UD_English-Pronouns: Relations: `nsubj`

This relation is universal.

320 nodes (19%) are attached to their parents as `nsubj`.

310 instances of `nsubj` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.796875.

The following 9 pairs of parts of speech are connected with `nsubj`: <tt><a href="en_pronouns-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pronouns-pos-NOUN.html">NOUN</a></tt> (145; 45% instances), <tt><a href="en_pronouns-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pronouns-pos-PRON.html">PRON</a></tt> (70; 22% instances), <tt><a href="en_pronouns-pos-PRON.html">PRON</a></tt>-<tt><a href="en_pronouns-pos-PRON.html">PRON</a></tt> (40; 13% instances), <tt><a href="en_pronouns-pos-PRON.html">PRON</a></tt>-<tt><a href="en_pronouns-pos-NOUN.html">NOUN</a></tt> (35; 11% instances), <tt><a href="en_pronouns-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pronouns-pos-PRON.html">PRON</a></tt> (10; 3% instances), <tt><a href="en_pronouns-pos-ADV.html">ADV</a></tt>-<tt><a href="en_pronouns-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="en_pronouns-pos-AUX.html">AUX</a></tt>-<tt><a href="en_pronouns-pos-PRON.html">PRON</a></tt> (5; 2% instances), <tt><a href="en_pronouns-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pronouns-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="en_pronouns-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pronouns-pos-NUM.html">NUM</a></tt> (5; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nsubj	color:blue
1	There	there	PRON	EX	_	2	expl	_	_
2	is	be	VERB	PRES	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	hers	she	PRON	SG-GEN-INDEP	Case=Gen|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	2	nsubj	_	SpaceAfter=No
4	.	.	PUNCT	Period	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj	color:blue
1	It	it	PRON	PERS-SG	Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	is	be	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	hers	she	PRON	SG-GEN-INDEP	Case=Gen|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	0	root	_	SpaceAfter=No
4	.	.	PUNCT	Period	_	3	punct	_	_

~~~


