---
layout: base
title:  'Statistics of acl:relcl in UD_Cappadocian-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Cappadocian-TueCL: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="cpg_tuecl-dep-acl.html">acl</a></tt>.

5 nodes (0%) are attached to their parents as `acl:relcl`.

4 instances of `acl:relcl` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.8.

The following 4 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="cpg_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cpg_tuecl-pos-VERB.html">VERB</a></tt> (2; 40% instances), <tt><a href="cpg_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cpg_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="cpg_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="cpg_tuecl-pos-VERB.html">VERB</a></tt> (1; 20% instances), <tt><a href="cpg_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="cpg_tuecl-pos-VERB.html">VERB</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 14 acl:relcl	color:blue
1	Αωπός	απός	NOUN	NOUN	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	2:nsubj	_
2	μετρά	μετρώ	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	του	το	DET	DET	Case=Gen|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	4	det	4:det	_
4	χωρού	χωρίο	NOUN	NOUN	Case=Gen|Gender=Neut|Number=Sing	6	nmod	6:nmod	_
5	τα	το	DET	DET	Case=Acc|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	6	det	6:det	_
6	κουμάσα	κουμάσι	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Plur	2	obj	2:obj	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	8	punct	8:punct	_
8	σαίρεται	χαίρομαι	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	2:conj	_
9	τα	το	DET	DET	Case=Acc|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	11	det	11:det	_
10	πουά	πολλά	ADJ	ADJ	Case=Acc|Gender=Neut|Number=Plur	11	nmod	11:nmod	_
11	'ρνίθα	ρνίθι	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Plur	8	obj	8:obj	_
12	του	του	ADP	ADP	_	14	obl	14:obl	_
13	χα	χα	AUX	AUX	_	14	aux	14:aux	_
14	φα	φάω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	11	acl:relcl	11:acl:relcl	SpaceAfter=No
15	.	.	PUNCT	PUNCT	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 acl:relcl	color:blue
1	Ο	ο	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	2:det	_
2	αωπός	αωπός	NOUN	NOUN	Case=Nom|Gender=Masc|Number=Sing	11	nsubj	11:nsubj	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	7	punct	7:punct	_
4	του	του	PRON	PRON	_	7	obl	7:obl	_
5	ήτουν	είμαι	AUX	AUX	_	7	cop	7:cop	_
6	ατζεί	ατζεί	ADV	ADV	_	7	advmod	7:advmod	_
7	μεχτάρ	μεχτάρ	NOUN	NOUN	Case=Nom|Gender=Masc|Number=Sing	2	acl:relcl	2:acl:relcl	_
8	τζαι	τζαι	CCONJ	CCONJ	_	9	cc	9:cc	_
9	τοκτόρ	τοκτόρ	NOUN	NOUN	Foreign=Yes	7	conj	7:conj	SpaceAfter=No
10	,	,	PUNCT	PUNCT	_	11	punct	11:punct	_
11	πόμεινην	απομένω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
12	λέικο	ολίγος	ADV	ADV	_	11	advmod	11:advmod	SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	11	punct	11:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 acl:relcl	color:blue
1	«	«	PUNCT	PUNCT	_	2	punct	2:punct	SpaceAfter=No
2	Βάι	βάι	INTJ	INTJ	_	9	discourse	9:discourse	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	2	punct	2:punct	_
4	ποτς	ποτς	PRON	PRON	Case=Nom|Gender=Neut|Number=Sing|PronType=Ind	6	nsubj	6:nsubj	_
5	εν	είμαι	AUX	AUX	_	6	cop	6:cop	_
6	ατό	ατό	PRON	PRON	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	0	root	0:root	_
7	του	που	PRON	PRON	_	9	obl	9:obl	_
8	μας	εγώ	PRON	PRON	Case=Acc|Gender=Masc|Number=Plur|Person=1|PronType=Prs	9	obj	9:obj	_
9	ηύρε	ευρίσκω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	acl:relcl	6:acl:relcl	_
10	σ	σε	ADP	ADP	_	12	case	12:case	_
11	ο	το	DET	DET	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	12	det	12:det	_
12	τσουφάλι	çουφάλι	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	9	obl	9:obl	_
13	μας	εγώ	PRON	PRON	Case=Gen|Gender=Masc|Number=Plur|Person=2|Poss=Yes|PronType=Prs	12	nmod	12:nmod	SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	6	punct	6:punct	_

~~~


