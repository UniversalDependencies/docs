---
layout: base
title:  'Statistics of reparandum in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `reparandum`

This relation is universal.

2 nodes (0%) are attached to their parents as `reparandum`.

2 instances of `reparandum` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5.

The following 2 pairs of parts of speech are connected with `reparandum`: <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 reparandum	color:blue
1	_	_	ADV	WRB	PronType=Int	2	advmod	_	Discourse=joint:36->35|Entity=(time-34(time-35|Lem=*LOWER*|Len=3
2	_	_	ADJ	JJ	Degree=Pos	3	advmod	_	Lem=_|Len=4
3	_	_	NOUN	NNS	Number=Plur	0	root	_	Lem=day|Len=4
4	_	_	DET	DT	Definite=Ind|PronType=Art	5	det	_	Entity=(time-36|Lem=_|Len=1
5	_	_	NOUN	NN	Number=Sing	3	nmod:npmod	_	Entity=time-35)time-36)|Lem=_|Len=4
6	_	_	CCONJ	CC	_	9	cc	_	Lem=_|Len=3
7	_	_	NOUN	NN	Number=Sing|Typo=Yes	9	reparandum	_	Entity=(time-37|Lem=_|Len=4
8	_	_	ADJ	JJ	Degree=Pos	9	amod	_	Lem=_|Len=4
9	_	_	NOUN	NNS	Number=Plur	5	conj	_	Entity=time-34)time-37)|Lem=hour|Len=5|SpaceAfter=No
10	_	_	PUNCT	.	_	3	punct	_	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 reparandum	color:blue
1	_	_	ADJ	JJ	Degree=Pos	2	amod	_	Discourse=circumstance:95->96|Entity=(person-104|Lem=*LOWER*|Len=5
2	_	_	NOUN	NNS	Number=Plur	5	nsubj	_	Entity=person-104)|Lem=colleague|Len=10
3	_	_	ADV	RB	_	5	advmod	_	Lem=_|Len=5
4	_	_	VERB	VB	Typo=Yes|VerbForm=Inf	5	reparandum	_	Lem=_|Len=7
5	_	_	VERB	VB	Typo=Yes|VerbForm=Inf	0	root	_	Lem=_|Len=5
6	_	_	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	5	obj	_	Entity=(person-78)|Lem=I|Len=2
7	_	_	PART	TO	_	8	mark	_	Discourse=attribution:96->97|Lem=_|Len=2
8	_	_	VERB	VB	VerbForm=Inf	5	advcl	_	Lem=_|Len=3
9	_	_	SCONJ	IN	_	13	mark	_	Discourse=question:97->98|Lem=_|Len=2
10	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	13	expl	_	Entity=(event-105)|Lem=_|Len=2|SpaceAfter=No
11	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	Lem=be|Len=2
12	_	_	PART	RB	Polarity=Neg	13	advmod	_	Lem=_|Len=3
13	_	_	ADJ	JJ	Degree=Pos	8	ccomp	_	Lem=_|Len=3
14	_	_	SCONJ	IN	_	17	mark	_	Lem=_|Len=3
15	_	_	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	17	nsubj	_	Entity=(person-78)|Lem=I|Len=2
16	_	_	PART	TO	_	17	mark	_	Entity=(event-105|Lem=_|Len=2
17	_	_	VERB	VB	VerbForm=Inf	13	csubj	_	Lem=_|Len=3
18	_	_	ADV	RB	_	17	advmod	_	Entity=event-105)|Lem=_|Len=5|SpaceAfter=No
19	_	_	PUNCT	.	_	5	punct	_	Lem=_|Len=1

~~~


