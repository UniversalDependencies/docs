---
layout: base
title:  'Statistics of ccomp in UD_Greek'
udver: '2'
---

## Treebank Statistics: UD_Greek: Relations: `ccomp`

This relation is universal.

686 nodes (1%) are attached to their parents as `ccomp`.

657 instances of `ccomp` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.49854227405248.

The following 8 pairs of parts of speech are connected with `ccomp`: <tt><a href="el-pos-VERB.html">VERB</a></tt>-<tt><a href="el-pos-VERB.html">VERB</a></tt> (606; 88% instances), <tt><a href="el-pos-VERB.html">VERB</a></tt>-<tt><a href="el-pos-ADJ.html">ADJ</a></tt> (53; 8% instances), <tt><a href="el-pos-VERB.html">VERB</a></tt>-<tt><a href="el-pos-NOUN.html">NOUN</a></tt> (19; 3% instances), <tt><a href="el-pos-VERB.html">VERB</a></tt>-<tt><a href="el-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="el-pos-VERB.html">VERB</a></tt>-<tt><a href="el-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="el-pos-VERB.html">VERB</a></tt>-<tt><a href="el-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="el-pos-ADV.html">ADV</a></tt>-<tt><a href="el-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="el-pos-VERB.html">VERB</a></tt>-<tt><a href="el-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 ccomp	color:blue
1	Οφείλουμε	οφείλω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	3	punct	_	_
3	είπατε	λέγω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	3	punct	_	_
5	να	να	PART	PART	_	6	aux	_	_
6	κερδίσουμε	κερδίζω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|VerbForm=Fin|Voice=Act	1	xcomp	_	_
7	την	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	εμπιστοσύνη	εμπιστοσύνη	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	6	obj	_	_
9	των	ο	DET	DET	Case=Gen|Definite=Def|Gender=Masc|Number=Plur|PronType=Art	10	det	_	_
10	πολιτών	πολίτης	NOUN	NOUN	Case=Gen|Gender=Masc|Number=Plur	8	nmod	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 ccomp	color:blue
1	Θεωρώ	θεωρώ	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	ότι	ότι	SCONJ	SCONJ	_	5	mark	_	_
3	αυτό	αυτός	PRON	PRON	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Dem	5	nsubj	_	_
4	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	5	cop	_	_
5	σωστό	σωστός	ADJ	ADJ	Case=Nom|Gender=Neut|Number=Sing	1	ccomp	_	SpaceAfter=No
6	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 ccomp	color:blue
1	Γι'	για	ADP	ADP	_	2	case	_	_
2	αυτό	αυτός	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Dem	4	obl	_	_
3	και	και	CCONJ	CCONJ	_	4	cc	_	_
4	θεώρησα	θεωρώ	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	πως	πως	SCONJ	SCONJ	_	10	mark	_	_
6	τώρα	τώρα	ADV	ADV	_	10	advmod	_	_
7	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	10	cop	_	_
8	η	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
9	καλύτερη	καλός	ADJ	ADJ	Case=Nom|Degree=Cmp|Gender=Fem|Number=Sing	10	amod	_	_
10	στιγμή	στιγμή	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	4	ccomp	_	_
11	να	να	PART	PART	_	12	aux	_	_
12	αποσυρθώ	αποσύρω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|VerbForm=Fin|Voice=Pass	10	acl	_	SpaceAfter=No
13	"	"	PUNCT	PUNCT	_	10	punct	_	SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


