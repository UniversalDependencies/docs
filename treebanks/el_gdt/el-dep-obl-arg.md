---
layout: base
title:  'Statistics of obl:arg in UD_Greek'
udver: '2'
---

## Treebank Statistics: UD_Greek: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="el-dep-obl.html">obl</a></tt>.

134 nodes (0%) are attached to their parents as `obl:arg`.

129 instances of `obl:arg` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.

The following 6 pairs of parts of speech are connected with `obl:arg`: <tt><a href="el-pos-VERB.html">VERB</a></tt>-<tt><a href="el-pos-NOUN.html">NOUN</a></tt> (113; 84% instances), <tt><a href="el-pos-VERB.html">VERB</a></tt>-<tt><a href="el-pos-PRON.html">PRON</a></tt> (10; 7% instances), <tt><a href="el-pos-VERB.html">VERB</a></tt>-<tt><a href="el-pos-PROPN.html">PROPN</a></tt> (5; 4% instances), <tt><a href="el-pos-VERB.html">VERB</a></tt>-<tt><a href="el-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="el-pos-VERB.html">VERB</a></tt>-<tt><a href="el-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="el-pos-VERB.html">VERB</a></tt>-<tt><a href="el-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 obl:arg	color:blue
1	Αφήστε	αφήνω	VERB	VERB	Aspect=Perf|Mood=Imp|Number=Plur|Person=2|VerbForm=Fin|Voice=Act	0	root	_	_
2	το	ο	DET	DET	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	3	det	_	_
3	θέμα	θέμα	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	1	obj	_	_
4	της	ο	DET	DET	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	προετοιμασίας	προετοιμασία	NOUN	NOUN	Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	_
6	των	ο	DET	DET	Case=Gen|Definite=Def|Gender=Fem|Number=Plur|PronType=Art	7	det	_	_
7	ψηφοφοριών	ψηφοφορία	NOUN	NOUN	Case=Gen|Gender=Fem|Number=Plur	5	nmod	_	_
8	σ	σε	ADP	AsPpSp	_	10	case	_	_
9	τις	ο	DET	AtDf	Case=Acc|Gender=Fem|Number=Plur	10	det	_	_
10	επιτροπές	επιτροπή	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Plur	1	obl:arg	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 obl:arg	color:blue
1	Είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	2	cop	_	_
2	κάτι	κάτι	PRON	PRON	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Ind	0	root	_	_
3	σ	σε	ADP	AsPpSp	_	5	case	_	_
4	το	ο	DET	AtDf	Case=Acc|Gender=Neut|Number=Sing	5	det	_	_
5	οποίο	οποίος	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Rel	8	obl:arg	_	_
6	πρέπει	πρέπει	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	acl	_	_
7	να	να	PART	PART	_	8	aux	_	_
8	δώσουμε	δίνω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|VerbForm=Fin|Voice=Act	6	csubj	_	_
9	μεγάλη	μεγάλος	ADJ	ADJ	Case=Acc|Gender=Fem|Number=Sing	10	amod	_	_
10	προσοχή	προσοχή	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	8	obj	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 obl:arg	color:blue
1	Η	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	μελέτη	μελέτη	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	_
3	της	ο	DET	DET	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	Πίζας	Πίζα	PROPN	PROPN	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	_
5	προκάλεσε	προκαλώ	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	σ	σε	ADP	AsPpSp	_	8	case	_	_
7	τη	ο	DET	AtDf	Case=Acc|Gender=Fem|Number=Sing	8	det	_	_
8	Γερμανία	Γερμανία	PROPN	PROPN	Case=Acc|Gender=Fem|Number=Sing	5	obl:arg	_	_
9	ένα	ένας	DET	DET	Case=Acc|Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	11	det	_	_
10	ευεργετικό	ευεργετικός	ADJ	ADJ	Case=Acc|Gender=Neut|Number=Sing	11	amod	_	_
11	σοκ	σοκ	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	5	obj	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


