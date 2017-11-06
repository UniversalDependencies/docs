---
layout: base
title:  'Statistics of acl:relcl in UD_Greek'
udver: '2'
---

## Treebank Statistics: UD_Greek: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="el-dep-acl.html">acl</a></tt>.

887 nodes (1%) are attached to their parents as `acl:relcl`.

887 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.6054114994363.

The following 16 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="el-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el-pos-VERB.html">VERB</a></tt> (741; 84% instances), <tt><a href="el-pos-PRON.html">PRON</a></tt>-<tt><a href="el-pos-VERB.html">VERB</a></tt> (38; 4% instances), <tt><a href="el-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el-pos-VERB.html">VERB</a></tt> (26; 3% instances), <tt><a href="el-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el-pos-ADJ.html">ADJ</a></tt> (24; 3% instances), <tt><a href="el-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el-pos-NOUN.html">NOUN</a></tt> (19; 2% instances), <tt><a href="el-pos-X.html">X</a></tt>-<tt><a href="el-pos-VERB.html">VERB</a></tt> (12; 1% instances), <tt><a href="el-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el-pos-VERB.html">VERB</a></tt> (9; 1% instances), <tt><a href="el-pos-NUM.html">NUM</a></tt>-<tt><a href="el-pos-VERB.html">VERB</a></tt> (7; 1% instances), <tt><a href="el-pos-VERB.html">VERB</a></tt>-<tt><a href="el-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="el-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="el-pos-NUM.html">NUM</a></tt>-<tt><a href="el-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="el-pos-PRON.html">PRON</a></tt>-<tt><a href="el-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="el-pos-PRON.html">PRON</a></tt>-<tt><a href="el-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="el-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="el-pos-X.html">X</a></tt>-<tt><a href="el-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="el-pos-X.html">X</a></tt>-<tt><a href="el-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 acl:relcl	color:blue
1	Ο	ο	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	τρόπος	τρόπος	NOUN	NOUN	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	_
3	που	που	PRON	PRON	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Rel	5	obl	_	_
4	θα	θα	PART	PART	_	5	aux	_	_
5	ψηφίσουμε	ψηφίζω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|VerbForm=Fin|Voice=Act	2	acl:relcl	_	_
6	σήμερα	σήμερα	ADV	ADV	_	5	advmod	_	_
7	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	8	cop	_	_
8	μέρος	μέρος	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
9	αυτής	αυτός	PRON	PRON	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Dem	11	det	_	_
10	της	ο	DET	DET	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	ευθύνης	ευθύνη	NOUN	NOUN	Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl:relcl	color:blue
1	Αυτό	αυτός	PRON	PRON	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Dem	4	nsubj	_	_
2	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	4	cop	_	_
3	σαφώς	σαφώς	ADV	ADV	_	4	advmod	_	_
4	κάτι	κάτι	PRON	PRON	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Ind	0	root	_	_
5	που	που	PRON	PRON	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Rel	8	nsubj	_	_
6	δεν	δεν	PART	PART	_	8	advmod	_	_
7	θα	θα	PART	PART	_	8	aux	_	_
8	μπορούσε	μπορώ	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	acl:relcl	_	_
9	να	να	PART	PART	_	10	aux	_	_
10	γίνει	γίνομαι	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Pass	8	xcomp	_	_
11	δεκτό	δεκτός	ADJ	ADJ	Case=Nom|Gender=Neut|Number=Sing	10	xcomp	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 14 acl:relcl	color:blue
1	Οι	ο	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Plur|PronType=Art	2	det	_	_
2	Τούρκοι	Τούρκος	PROPN	PROPN	Case=Nom|Gender=Masc|Number=Plur	3	nsubj	_	_
3	πρότειναν	προτείνω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	να	να	PART	PART	_	5	aux	_	_
5	γίνει	γίνομαι	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Pass	3	ccomp	_	_
6	ανταλλαγή	ανταλλαγή	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	_
7	της	ο	DET	DET	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	Κρήτης	Κρήτη	PROPN	PROPN	Case=Gen|Gender=Fem|Number=Sing	6	nmod	_	_
9	με	με	ADP	ADP	_	11	case	_	_
10	τη	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	Θεσσαλία	Θεσσαλία	PROPN	PROPN	Case=Acc|Gender=Fem|Number=Sing	6	nmod	_	_
12	που	που	PRON	PRON	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Rel	14	obj	_	_
13	την	εγώ	PRON	PRON	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	14	expl	_	_
14	κατείχε	κατέχω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	11	acl:relcl	_	_
15	ο	ο	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	στρατός	στρατός	NOUN	NOUN	Case=Nom|Gender=Masc|Number=Sing	14	nsubj	_	_
17	τους	μου	PRON	PRON	Case=Gen|Gender=Masc|Number=Plur|Person=3|Poss=Yes|PronType=Prs	16	nmod	_	SpaceAfter=No
18	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


