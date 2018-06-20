---
layout: base
title:  'Statistics of compound:redup in UD_Tagalog-TRG'
udver: '2'
---

## Treebank Statistics: UD_Tagalog-TRG: Relations: `compound:redup`

This relation is a language-specific subtype of <tt><a href="tl_trg-dep-compound.html">compound</a></tt>.

2 nodes (1%) are attached to their parents as `compound:redup`.

2 instances of `compound:redup` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 2 pairs of parts of speech are connected with `compound:redup`: <tt><a href="tl_trg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tl_trg-pos-ADJ.html">ADJ</a></tt> (1; 50% instances), <tt><a href="tl_trg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tl_trg-pos-ADV.html">ADV</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 compound:redup	color:blue
1	Bagong	bago	ADJ	_	_	3	compound:redup	_	SpaceAfter=No
2	-	-	PUNCT	_	_	3	punct	_	SpaceAfter=No
3	bago	bago	ADJ	JJS	Degree=Sup	0	root	_	_
4	ang	ang	DET	DT	Case=Abs|Definite=Def	5	det	_	_
5	bahay	bahay	NOUN	NN	Number=Sing	3	nsubj	_	SpaceAfter=No
6	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 compound:redup	color:blue
1	Nagluluto	luto	VERB	VBG	Aspect=Imp|Mood=Ind	0	root	_	Focus=Act
2	ng	ng	ADP	_	Case=Erg	3	case	_	_
3	pagkain	pagkain	NOUN	NN	Number=Coll	1	obj	_	_
4	ang	ang	DET	DT	Case=Abs|Definite=Def	5	det	_	_
5	nanay	nanay	NOUN	NN	Number=Sing	1	nsubj	_	_
6	araw	araw	ADV	_	_	8	compound:redup	_	SpaceAfter=No
7	-	-	PUNCT	_	_	8	punct	_	SpaceAfter=No
8	araw	araw	NOUN	_	Number=Plur	1	advmod	_	SpaceAfter=No
9	.	.	PUNCT	.	_	1	punct	_	_

~~~


