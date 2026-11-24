---
layout: base
title:  'Statistics of nummod in UD_Portuguese-PPrincipe'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PPrincipe: Relations: `nummod`

This relation is universal.

98 nodes (1%) are attached to their parents as `nummod`.

98 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.55102040816327.

The following 2 pairs of parts of speech are connected with `nummod`: <tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pprincipe-pos-NUM.html">NUM</a></tt> (96; 98% instances), <tt><a href="pt_pprincipe-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_pprincipe-pos-NUM.html">NUM</a></tt> (2; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Só	só	ADV	_	_	2	advmod	_	_
2	dava	dar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
3	para	para	ADP	_	_	5	case	_	_
4	oito	oito	NUM	_	NumType=Card	5	nummod	_	_
5	dias	dia	NOUN	_	Gender=Masc|Number=Plur	2	obl	_	_
6	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	água	água	NOUN	_	Gender=Fem|Number=Sing	2	nsubj	_	_
8	que	que	PRON	_	PronType=Rel	10	obj	_	_
9	eu	eu	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	10	nsubj	_	_
10	tinha	ter	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	7	acl:relcl	_	SpaceAfter=No
11	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	-	-	PUNCT	_	_	3	punct	_	_
2	Um	um	NUM	_	Gender=Masc|NumType=Card	3	nummod	_	_
3	o	o	PRON	_	ExtPos=PRON|Gender=Masc|Number=Sing|Person=3|PronType=Dem	0	root	_	_
4	quê	quê	PRON	_	PronType=Int	3	fixed	_	SpaceAfter=No
5	?	?	PUNCT	_	_	3	punct	_	_

~~~


