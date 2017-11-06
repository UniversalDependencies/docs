---
layout: base
title:  'Statistics of compound in UD_Greek'
udver: '2'
---

## Treebank Statistics: UD_Greek: Relations: `compound`

This relation is universal.

100 nodes (0%) are attached to their parents as `compound`.

88 instances of `compound` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.29.

The following 6 pairs of parts of speech are connected with `compound`: <tt><a href="el-pos-X.html">X</a></tt>-<tt><a href="el-pos-NOUN.html">NOUN</a></tt> (69; 69% instances), <tt><a href="el-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el-pos-PROPN.html">PROPN</a></tt> (11; 11% instances), <tt><a href="el-pos-NUM.html">NUM</a></tt>-<tt><a href="el-pos-NUM.html">NUM</a></tt> (10; 10% instances), <tt><a href="el-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el-pos-NOUN.html">NOUN</a></tt> (8; 8% instances), <tt><a href="el-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="el-pos-X.html">X</a></tt>-<tt><a href="el-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 compound	color:blue
1	Ούτε	ούτε	CCONJ	CCONJ	_	4	cc	_	_
2	εγώ	εγώ	PRON	PRON	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
3	δεν	δεν	PART	PART	_	4	advmod	_	_
4	έλαβα	λαμβάνω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	τέτοιο	τέτοιος	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Dem	6	det	_	_
6	αντίτυπο	αντίτυπο	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	4	obj	_	_
7	από	από	ADP	ADP	_	11	case	_	_
8	τον	ο	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
9	κ.	κ.	NOUN	NOUN	Abbr=Yes	11	compound	_	_
10	van	van	X	X	Foreign=Yes	11	nmod	_	_
11	Buitenen	Buitenen	X	X	Foreign=Yes	4	obl	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 compound	color:blue
1	Αθήνα	Αθήνα	PROPN	PROPN	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
2	-	-	PUNCT	PUNCT	_	1	punct	_	_
3	Ηγουμενίτσα	Ηγουμενίτσα	PROPN	PROPN	Case=Nom|Gender=Fem|Number=Sing	1	compound	_	SpaceAfter=No
4	:	:	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 compound	color:blue
1	Διότι	διότι	SCONJ	SCONJ	_	2	mark	_	_
2	ένα	ένας	NUM	NUM	Case=Nom|Gender=Neut|Number=Sing|NumType=Card	0	root	_	_
3	από	από	ADP	ADP	_	5	case	_	_
4	τα	ο	DET	DET	Case=Acc|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	5	det	_	_
5	δύο	δύο	NUM	NUM	Case=Acc|Gender=Neut|Number=Plur|NumType=Card	2	compound	_	SpaceAfter=No
6	:	:	PUNCT	PUNCT	_	2	punct	_	_

~~~


