---
layout: base
title:  'Statistics of nummod in UD_Greek'
udver: '2'
---

## Treebank Statistics: UD_Greek: Relations: `nummod`

This relation is universal.

476 nodes (1%) are attached to their parents as `nummod`.

456 instances of `nummod` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.2563025210084.

The following 8 pairs of parts of speech are connected with `nummod`: <tt><a href="el-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el-pos-NUM.html">NUM</a></tt> (435; 91% instances), <tt><a href="el-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el-pos-NUM.html">NUM</a></tt> (19; 4% instances), <tt><a href="el-pos-NUM.html">NUM</a></tt>-<tt><a href="el-pos-NUM.html">NUM</a></tt> (7; 1% instances), <tt><a href="el-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el-pos-NUM.html">NUM</a></tt> (5; 1% instances), <tt><a href="el-pos-X.html">X</a></tt>-<tt><a href="el-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="el-pos-ADV.html">ADV</a></tt>-<tt><a href="el-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="el-pos-VERB.html">VERB</a></tt>-<tt><a href="el-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="el-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	Επίσης	επίσης	ADV	ADV	_	8	advmod	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	1	punct	_	_
3	δύο	δύο	NUM	NUM	Case=Nom|Gender=Neut|Number=Plur|NumType=Card	4	nummod	_	_
4	σπίτια	σπίτι	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Plur	8	nsubj	_	_
5	σ	σε	ADP	AsPpSp	_	7	case	_	_
6	την	ο	DET	AtDf	Case=Acc|Gender=Fem|Number=Sing	7	det	_	_
7	περιοχή	περιοχή	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	4	nmod	_	_
8	κάηκαν	καίω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
9	ολοσχερώς	ολοσχερώς	ADV	ADV	_	8	advmod	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	Πέντε	πέντε	NUM	NUM	Case=Acc|Gender=Masc|Number=Plur|NumType=Card	2	nummod	_	_
2	νεκροί	νεκρός	ADJ	ADJ	Case=Nom|Gender=Masc|Number=Plur	0	root	_	_
3	σ	σε	ADP	AsPpSp	_	5	case	_	_
4	την	ο	DET	AtDf	Case=Acc|Gender=Fem|Number=Sing	5	det	_	_
5	Καμπούλ	Καμπούλ	PROPN	PROPN	Case=Acc|Gender=Fem|Number=Sing	2	orphan	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Οι	ο	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Plur|PronType=Art	2	det	_	_
2	Ευρωπαίοι	Ευρωπαίος	PROPN	PROPN	Case=Nom|Gender=Masc|Number=Plur	3	nsubj	_	_
3	ψήλωσαν	ψηλώνω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	11	11	NUM	NUM	NumType=Card	5	nummod	_	_
5	εκατοστά	εκατοστός	NUM	NUM	Case=Acc|Gender=Neut|Number=Plur|NumType=Ord	3	obl	_	_
6	τα	ο	DET	DET	Case=Acc|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	9	det	_	_
7	τελευταία	τελευταίος	ADJ	ADJ	Case=Acc|Gender=Neut|Number=Plur	9	amod	_	_
8	100	100	NUM	NUM	NumType=Card	9	nummod	_	_
9	χρόνια	χρόνος	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Plur	3	obl	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


