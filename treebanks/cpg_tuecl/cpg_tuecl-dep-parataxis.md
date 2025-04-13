---
layout: base
title:  'Statistics of parataxis in UD_Cappadocian-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Cappadocian-TueCL: Relations: `parataxis`

This relation is universal.

55 nodes (1%) are attached to their parents as `parataxis`.

52 instances of `parataxis` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.50909090909091.

The following 5 pairs of parts of speech are connected with `parataxis`: <tt><a href="cpg_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="cpg_tuecl-pos-VERB.html">VERB</a></tt> (51; 93% instances), <tt><a href="cpg_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cpg_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="cpg_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cpg_tuecl-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="cpg_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="cpg_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="cpg_tuecl-pos-X.html">X</a></tt>-<tt><a href="cpg_tuecl-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 parataxis	color:blue
1	Χωρίστανε	χωρίζω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	3	punct	_	_
3	πηάγανε	πηγαίνω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	parataxis	_	SpaceAfter=No
4	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 parataxis	color:blue
1	Πήκαν	ποιώ	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	γάμος	γάμος	NOUN	NOUN	Case=Nom|Gender=Masc|Number=Sing	1	obj	_	_
3	οφτά	εφτά	NUM	NUM	Case=Acc|Gender=Fem|Number=Plur	4	nummod	_	_
4	ημέρες	ημέρα	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Plur	1	obl	_	_
5	οφτά	εφτά	NUM	NUM	Case=Acc|Gender=Fem|Number=Plur	6	nummod	_	_
6	νυέχτες	νύχτα	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Plur	4	parataxis	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 parataxis	color:blue
1	Το	ο	DET	DET	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	2	det	_	_
2	σοιρίδι	χοιρίδι(ον)	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Sing	4	nsubj	_	_
3	τζας	cas/jas	SCONJ	SCONJ	_	4	mark	_	_
4	δεβαίγκε	διαβαίνω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	σ	σε	ADP	ADP	_	7	case	_	_
6	τον	ο	DET	DET	Case=Acc|Gender=Masc|Number=Sing	7	det	_	_
7	ασλάνο	ασλάνος	NOUN	NOUN	Case=Acc|Gender=Masc|Number=Sing	4	obl	_	_
8	μπρο	μπρο	ADP	ADP	_	7	case	_	SpaceAfter=No
9	,	,	PUNCT	PUNCT	_	10	punct	_	_
10	υρίστη	γυρίζω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	7	parataxis	_	_
11	τον	ο	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	κων	κώλος	NOUN	NOUN	Case=Acc|Gender=Masc|Number=Sing	10	obj	_	_
13	του	ο	PRON	PRON	Case=Gen|Gender=Neut|Number=Sing	12	nmod	_	_
14	τζ’	jαι	CCONJ	CONJ	_	15	cc	_	_
15	έκκουασεν	κλάνω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	10	conj	_	_
16	σ	σε	ADP	ADP	_	18	case	_	_
17	ο	η	DET	DET	Case=Acc|Gender=Fem|Number=Sing	18	det	_	_
18	μυτί	μύτη	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Plur	15	obl	_	_
19	του	ο	DET	DET	Case=Gen|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	18	nmod	_	_
20	γνέντα	γνέντα	ADP	ADP	_	18	case	_	SpaceAfter=No
21	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


