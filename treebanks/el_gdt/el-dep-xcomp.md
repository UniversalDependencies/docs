---
layout: base
title:  'Statistics of xcomp in UD_Greek'
udver: '2'
---

## Treebank Statistics: UD_Greek: Relations: `xcomp`

This relation is universal.

611 nodes (1%) are attached to their parents as `xcomp`.

597 instances of `xcomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.61047463175123.

The following 11 pairs of parts of speech are connected with `xcomp`: <tt><a href="el-pos-VERB.html">VERB</a></tt>-<tt><a href="el-pos-VERB.html">VERB</a></tt> (386; 63% instances), <tt><a href="el-pos-VERB.html">VERB</a></tt>-<tt><a href="el-pos-ADJ.html">ADJ</a></tt> (126; 21% instances), <tt><a href="el-pos-VERB.html">VERB</a></tt>-<tt><a href="el-pos-NOUN.html">NOUN</a></tt> (81; 13% instances), <tt><a href="el-pos-VERB.html">VERB</a></tt>-<tt><a href="el-pos-PROPN.html">PROPN</a></tt> (6; 1% instances), <tt><a href="el-pos-VERB.html">VERB</a></tt>-<tt><a href="el-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="el-pos-VERB.html">VERB</a></tt>-<tt><a href="el-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="el-pos-VERB.html">VERB</a></tt>-<tt><a href="el-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="el-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="el-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="el-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="el-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 xcomp	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 xcomp	color:blue
1	Αυτό	αυτός	PRON	PRON	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Dem	3	det	_	_
2	το	ο	DET	DET	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	3	det	_	_
3	Κοινοβούλιο	κοινοβούλιο	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Sing	6	nsubj	_	_
4	πρέπει	πρέπει	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	να	να	PART	PART	_	6	aux	_	_
6	εξακολουθήσει	εξακολουθώ	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	4	csubj	_	_
7	να	να	PART	PART	_	9	aux	_	_
8	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	9	cop	_	_
9	πολύγλωσσο	πολύγλωσσος	ADJ	ADJ	Case=Nom|Gender=Fem|Number=Sing	6	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 xcomp	color:blue
1	Εμείς	εγώ	PRON	PRON	Case=Nom|Gender=Masc|Number=Plur|Person=1|PronType=Prs	6	nsubj	_	_
2	σ	σε	ADP	AsPpSp	_	4	case	_	_
3	την	ο	DET	AtDf	Case=Acc|Gender=Fem|Number=Sing	4	det	_	_
4	Αυστρία	Αυστρία	PROPN	PROPN	Case=Acc|Gender=Fem|Number=Sing	6	obl	_	_
5	το	εγώ	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	expl	_	_
6	αποκαλούμε	αποκαλώ	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	αυτό	αυτός	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Dem	6	obj	_	_
8	"	"	PUNCT	PUNCT	_	10	punct	_	SpaceAfter=No
9	η	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	αρχή	αρχή	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	6	xcomp	_	_
11	του	ο	DET	DET	Case=Gen|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	12	det	_	_
12	Florian	Florian	X	X	Foreign=Yes	10	nmod	_	SpaceAfter=No
13	"	"	PUNCT	PUNCT	_	10	punct	_	SpaceAfter=No
14	:	:	PUNCT	PUNCT	_	6	punct	_	_

~~~


