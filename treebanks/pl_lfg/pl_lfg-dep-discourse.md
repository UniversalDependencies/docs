---
layout: base
title:  'Statistics of discourse in UD_Polish-LFG'
udver: '2'
---

## Treebank Statistics: UD_Polish-LFG: Relations: `discourse`

This relation is universal.

42 nodes (0%) are attached to their parents as `discourse`.

38 instances of `discourse` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.07142857142857.

The following 2 pairs of parts of speech are connected with `discourse`: <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-INTJ.html">INTJ</a></tt> (41; 98% instances), <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-INTJ.html">INTJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 discourse	color:blue
1	Ha	ha	INTJ	interj	_	5	discourse	5:discourse	SpaceAfter=No
2	,	,	PUNCT	interp	PunctType=Comm	5	punct	5:punct	_
3	już	już	PART	qub	_	5	advmod	5:advmod	_
4	go	on	PRON	ppron3:sg:acc:m1:ter:nakc:npraep	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|SubGender=Masc1|Variant=Short	5	obj	5:obj	_
5	widzę	widzieć	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
6	!	!	PUNCT	interp	PunctType=Excl	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 discourse	color:blue
1	-	-	PUNCT	interp	PunctType=Dash	4	punct	4:punct	_
2	E	e	INTJ	interj	_	4	discourse	4:discourse	SpaceAfter=No
3	,	,	PUNCT	interp	PunctType=Comm	4	punct	4:punct	_
4	dobry	dobry	ADJ	adj:sg:nom:m1:pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|SubGender=Masc1	0	root	0:root	_
5	już	już	PART	qub	_	4	advmod	4:advmod	_
6	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	4:cop	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


