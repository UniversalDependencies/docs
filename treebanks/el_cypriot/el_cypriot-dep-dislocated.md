---
layout: base
title:  'Statistics of dislocated in UD_Greek-Cypriot'
udver: '2'
---

## Treebank Statistics: UD_Greek-Cypriot: Relations: `dislocated`

This relation is universal.

7 nodes (0%) are attached to their parents as `dislocated`.

7 instances of `dislocated` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.71428571428571.

The following 2 pairs of parts of speech are connected with `dislocated`: <tt><a href="el_cypriot-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cypriot-pos-NOUN.html">NOUN</a></tt> (4; 57% instances), <tt><a href="el_cypriot-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cypriot-pos-PRON.html">PRON</a></tt> (3; 43% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 dislocated	color:blue
1	Έναν	ένας	DET	_	Case=Acc|Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	4	det	_	_
2	άλλου	άλλος	DET	_	Case=Gen|Gender=Neut|Number=Sing|PronType=Ind	3	det	_	_
3	είδους	είδος	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	4	nmod	_	_
4	γαμήσιν	γαμήσιν	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	7	dislocated	_	_
5	,	,	PUNCT	_	_	7	punct	_	_
6	εννά	εννά	AUX	_	Tense=Fut	7	aux	_	_
7	εμπορούσες	μπόρω	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
8	να	να	SCONJ	_	_	9	mark	_	_
9	πεις	λαλώ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	7	xcomp	_	_
10	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 dislocated	color:blue
1	Εν	εν	PART	_	Polarity=Neg	2	advmod	_	_
2	έσ̆ει	έχω	VERB	_	Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	0	root	_	_
3	κάτι	κάτι	DET	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Ind	2	obj	_	_
4	συγκεκριμμένον	συγκεκριμμένος	ADJ	_	Case=Acc|Gender=Neut|Number=Sing	3	amod	_	_
5	το	ο	DET	_	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	6	det	_	_
6	οποίον	οποίος	PRON	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	7	dislocated	_	_
7	πιστεύκω	πιστεύκω	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl:relcl	_	_
8	ότι	ότι	SCONJ	_	_	9	mark	_	_
9	λειφκούμαστεν	λείφκουμαι	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Pass	7	ccomp	_	_
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


