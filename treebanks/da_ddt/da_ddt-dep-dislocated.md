---
layout: base
title:  'Statistics of dislocated in UD_Danish-DDT'
udver: '2'
---

## Treebank Statistics: UD_Danish-DDT: Relations: `dislocated`

This relation is universal.

2 nodes (0%) are attached to their parents as `dislocated`.

2 instances of `dislocated` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.

The following 2 pairs of parts of speech are connected with `dislocated`: <tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="da_ddt-pos-PRON.html">PRON</a></tt>-<tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 dislocated	color:blue
1	-	-	PUNCT	_	_	8	punct	_	_
2	Drømme	drøm	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	8	dislocated	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	det	det	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
5	er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
6	alt	al	ADJ	_	Degree=Pos|Gender=Neut|Number=Sing	8	amod	_	_
7	sammen	sammen	ADV	_	_	6	advmod	_	_
8	drømme	drøm	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	0	root	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 dislocated	color:blue
1	Din	din	DET	_	Gender=Com|Number=Sing|Number[psor]=Sing|Person=2|Poss=Yes|PronType=Prs	2	det	_	_
2	præcision	præcision	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	6	dislocated	_	_
3	-	-	PUNCT	_	_	2	punct	_	_
4	er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
5	det	det	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	_
6	noget	nogen	PRON	_	Gender=Neut|Number=Sing|PronType=Ind	0	root	_	_
7	med	med	ADP	_	AdpType=Prep	8	case	_	_
8	skovøksen	skovøkse	NOUN	_	Definite=Def|Gender=Com|Number=Sing	6	nmod	_	SpaceAfter=No
9	,	,	PUNCT	_	_	11	punct	_	_
10	du	du	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=2|PronType=Prs	11	nsubj	_	_
11	overfører	overføre	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	acl:relcl	_	_
12	til	til	ADP	_	AdpType=Prep	13	case	_	_
13	golfbanen	golfbane	NOUN	_	Definite=Def|Gender=Com|Number=Sing	11	obl	_	SpaceAfter=No
14	?	?	PUNCT	_	_	6	punct	_	_

~~~


