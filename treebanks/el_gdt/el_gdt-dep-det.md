---
layout: base
title:  'Statistics of det in UD_Greek-GDT'
udver: '2'
---

## Treebank Statistics: UD_Greek-GDT: Relations: `det`

This relation is universal.

12112 nodes (19%) are attached to their parents as `det`.

11943 instances of `det` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.30952774108322.

The following 8 pairs of parts of speech are connected with `det`: <tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gdt-pos-DET.html">DET</a></tt> (9589; 79% instances), <tt><a href="el_gdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_gdt-pos-DET.html">DET</a></tt> (1276; 11% instances), <tt><a href="el_gdt-pos-X.html">X</a></tt>-<tt><a href="el_gdt-pos-DET.html">DET</a></tt> (417; 3% instances), <tt><a href="el_gdt-pos-PRON.html">PRON</a></tt>-<tt><a href="el_gdt-pos-DET.html">DET</a></tt> (382; 3% instances), <tt><a href="el_gdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gdt-pos-DET.html">DET</a></tt> (264; 2% instances), <tt><a href="el_gdt-pos-NUM.html">NUM</a></tt>-<tt><a href="el_gdt-pos-DET.html">DET</a></tt> (142; 1% instances), <tt><a href="el_gdt-pos-ADV.html">ADV</a></tt>-<tt><a href="el_gdt-pos-DET.html">DET</a></tt> (23; 0% instances), <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-DET.html">DET</a></tt> (19; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 det	color:blue
1	Αυτός	αυτός	PRON	PRON	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Dem	0	root	_	_
2	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	1	cop	_	_
3	ο	ο	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
4	αποκλειστικός	αποκλειστικός	ADJ	ADJ	Case=Nom|Gender=Masc|Number=Sing	5	amod	_	_
5	στόχος	στόχος	NOUN	NOUN	Case=Nom|Gender=Masc|Number=Sing	1	nsubj	_	_
6	της	ο	DET	DET	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	πρότασης	πρόταση	NOUN	NOUN	Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	_
8	αυτής	αυτός	DET	DET	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Dem	7	det	_	SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Η	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	Νικήσιανη	Νικήσιανη	PROPN	PROPN	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	_
3	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	5	cop	_	_
4	η	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	έδρα	έδρα	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
6	του	ο	DET	DET	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	Δήμου	Δήμος	NOUN	NOUN	Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	_
8	Παγγαίου	Παγγαίο	PROPN	PROPN	Case=Gen|Gender=Neut|Number=Sing	7	nmod	_	SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Η	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	Σπόρτινγκ	Σπόρτινγκ	X	X	Foreign=Yes	4	nsubj	_	_
3	Λισαβόνας	Λισαβόνα	PROPN	PROPN	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	_
4	νίκησε	νικώ	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	την	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	Μάντσεστερ	Μάντσεστερ	X	X	Foreign=Yes	4	obj	_	_
7	Σίτι	Σίτι	X	X	Foreign=Yes	6	flat	_	_
8	με	με	ADP	ADP	_	9	case	_	_
9	σκορ	σκορ	X	X	Foreign=Yes	4	obl	_	_
10	1:0	1:0	NUM	NUM	NumType=Card	9	nmod	_	_

~~~


