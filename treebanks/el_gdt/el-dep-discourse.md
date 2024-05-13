---
layout: base
title:  'Statistics of discourse in UD_Greek'
udver: '2'
---

## Treebank Statistics: UD_Greek: Relations: `discourse`

This relation is universal.

6 nodes (0%) are attached to their parents as `discourse`.

5 instances of `discourse` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.16666666666667.

The following 2 pairs of parts of speech are connected with `discourse`: <tt><a href="el-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el-pos-NOUN.html">NOUN</a></tt> (5; 83% instances), <tt><a href="el-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el-pos-PART.html">PART</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 discourse	color:blue
1	2.	2.	NOUN	NOUN	_	3	discourse	_	_
2	Η	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	εγκαθίδρυση	εγκαθίδρυση	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
4	ζωνών	ζώνη	NOUN	NOUN	Case=Gen|Gender=Fem|Number=Plur	3	nmod	_	_
5	ασφαλείας	ασφάλεια	NOUN	NOUN	Case=Gen|Gender=Fem|Number=Sing	4	nmod	_	_
6	μεταξύ	μεταξύ	ADP	ADP	_	8	case	_	_
7	των	ο	DET	DET	Case=Gen|Definite=Def|Gender=Fem|Number=Plur|PronType=Art	8	det	_	_
8	αντιμαχομένων	αντιμαχόμενος	ADJ	ADJ	Case=Gen|Gender=Fem|Number=Plur	3	amod	_	SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 22 discourse	color:blue
1	Το	ο	DET	DET	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	2	det	_	_
2	ζητούμενο	ζητούμενος	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
3	δεν	δεν	PART	PART	_	2	advmod	_	_
4	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	2	cop	_	_
5	μόνον	μόνο	ADV	ADV	_	8	advmod	_	_
6	ποιος	ποιος	PRON	PRON	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Int	8	nsubj	_	_
7	θα	θα	PART	PART	_	8	aux	_	_
8	επιτύχει	επιτυγχάνω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	2	csubj	_	_
9	τα	ο	DET	DET	Case=Acc|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	10	det	_	_
10	περισσότερα	πολύς	ADJ	ADJ	Case=Acc|Degree=Cmp|Gender=Neut|Number=Plur	8	obj	_	SpaceAfter=No
11	,	,	PUNCT	PUNCT	_	13	punct	_	_
12	η	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	Επιτροπή	επιτροπή	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	8	orphan	_	_
14	ή	ή	CCONJ	CCONJ	_	16	cc	_	_
15	το	ο	DET	DET	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	16	det	_	_
16	Συμβούλιο	συμβούλιο	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Sing	13	conj	_	_
17	ή	ή	CCONJ	CCONJ	_	18	cc	_	_
18	εμείς	εγώ	PRON	PRON	Case=Nom|Gender=Masc|Number=Plur|Person=1|PronType=Prs	13	conj	_	_
19	ως	ως	ADV	ADV	_	20	case	_	_
20	Κοινοβούλιο	κοινοβούλιο	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Sing	18	nmod	_	SpaceAfter=No
21	,	,	PUNCT	PUNCT	_	22	punct	_	_
22	όχι	όχι	PART	PART	_	2	discourse	_	SpaceAfter=No
23	!	!	PUNCT	PUNCT	_	2	punct	_	_

~~~


