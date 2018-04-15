---
layout: base
title:  'Statistics of fixed in UD_Greek-GDT'
udver: '2'
---

## Treebank Statistics: UD_Greek-GDT: Relations: `fixed`

This relation is universal.

79 nodes (0%) are attached to their parents as `fixed`.

79 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.05063291139241.

The following 13 pairs of parts of speech are connected with `fixed`: <tt><a href="el_gdt-pos-ADP.html">ADP</a></tt>-<tt><a href="el_gdt-pos-ADP.html">ADP</a></tt> (21; 27% instances), <tt><a href="el_gdt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="el_gdt-pos-CCONJ.html">CCONJ</a></tt> (15; 19% instances), <tt><a href="el_gdt-pos-ADV.html">ADV</a></tt>-<tt><a href="el_gdt-pos-VERB.html">VERB</a></tt> (14; 18% instances), <tt><a href="el_gdt-pos-ADV.html">ADV</a></tt>-<tt><a href="el_gdt-pos-SCONJ.html">SCONJ</a></tt> (6; 8% instances), <tt><a href="el_gdt-pos-ADP.html">ADP</a></tt>-<tt><a href="el_gdt-pos-ADV.html">ADV</a></tt> (5; 6% instances), <tt><a href="el_gdt-pos-ADV.html">ADV</a></tt>-<tt><a href="el_gdt-pos-ADP.html">ADP</a></tt> (5; 6% instances), <tt><a href="el_gdt-pos-ADP.html">ADP</a></tt>-<tt><a href="el_gdt-pos-SCONJ.html">SCONJ</a></tt> (3; 4% instances), <tt><a href="el_gdt-pos-ADV.html">ADV</a></tt>-<tt><a href="el_gdt-pos-ADV.html">ADV</a></tt> (3; 4% instances), <tt><a href="el_gdt-pos-ADV.html">ADV</a></tt>-<tt><a href="el_gdt-pos-PRON.html">PRON</a></tt> (3; 4% instances), <tt><a href="el_gdt-pos-ADP.html">ADP</a></tt>-<tt><a href="el_gdt-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="el_gdt-pos-ADP.html">ADP</a></tt>-<tt><a href="el_gdt-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="el_gdt-pos-ADV.html">ADV</a></tt>-<tt><a href="el_gdt-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="el_gdt-pos-ADV.html">ADV</a></tt>-<tt><a href="el_gdt-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 fixed	color:blue
1	Έχω	έχω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	σοβαρότατες	σοβαρός	ADJ	ADJ	Case=Acc|Degree=Sup|Gender=Fem|Number=Plur	3	amod	_	_
3	αντιρρήσεις	αντίρρηση	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Plur	1	obj	_	_
4	ως	ως	ADP	ADP	_	6	case	_	_
5	προς	προς	ADP	ADP	_	4	fixed	_	_
6	αυτό	αυτός	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Dem	1	obl	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	Αν	αν	SCONJ	SCONJ	_	3	mark	_	_
2	και	και	CCONJ	CCONJ	_	1	fixed	_	_
3	ηττήθηκε	ηττώμαι	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	7	advcl	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	3	punct	_	_
5	η	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	Μίλαν	Μίλαν	X	X	Foreign=Yes	7	nsubj	_	_
7	πήρε	παίρνω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
8	την	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	πρόκριση	πρόκριση	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	7	obj	_	_
10	για	για	ADP	ADP	_	13	case	_	_
11	την	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
12	επόμενη	επόμενος	ADJ	ADJ	Case=Acc|Gender=Fem|Number=Sing	13	amod	_	_
13	φάση	φάση	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	9	nmod	_	_
14	του	ο	DET	DET	Case=Gen|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	15	det	_	_
15	Τσάμπιονς	Τσάμπιονς	X	X	Foreign=Yes	13	nmod	_	_
16	Λιγκ	Λιγκ	X	X	Foreign=Yes	15	flat	_	SpaceAfter=No
17	.	.	PUNCT	PUNCT	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 fixed	color:blue
1	Διαπιστώνεται	διαπιστώνω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
2	επίσης	επίσης	ADV	ADV	_	1	advmod	_	_
3	νέα	νέος	ADJ	ADJ	Case=Nom|Gender=Fem|Number=Sing	4	amod	_	_
4	αύξηση	αύξηση	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	1	nsubj	_	_
5	του	ο	DET	DET	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	πληθωρισμού	πληθωρισμός	NOUN	NOUN	Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	_
7	όσον	όσο	ADV	ADV	_	10	case	_	_
8	αφορά	αφορώ	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	fixed	_	_
9	τις	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Plur|PronType=Art	10	det	_	_
10	τιμές	τιμή	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Plur	4	nmod	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


