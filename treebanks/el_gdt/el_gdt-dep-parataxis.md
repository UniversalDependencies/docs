---
layout: base
title:  'Statistics of parataxis in UD_Greek-GDT'
udver: '2'
---

## Treebank Statistics: UD_Greek-GDT: Relations: `parataxis`

This relation is universal.

90 nodes (0%) are attached to their parents as `parataxis`.

69 instances of `parataxis` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.75555555555556.

The following 15 pairs of parts of speech are connected with `parataxis`: <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-VERB.html">VERB</a></tt> (30; 33% instances), <tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gdt-pos-VERB.html">VERB</a></tt> (17; 19% instances), <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt> (14; 16% instances), <tt><a href="el_gdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_gdt-pos-VERB.html">VERB</a></tt> (7; 8% instances), <tt><a href="el_gdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt> (6; 7% instances), <tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-X.html">X</a></tt> (3; 3% instances), <tt><a href="el_gdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gdt-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="el_gdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gdt-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="el_gdt-pos-ADV.html">ADV</a></tt>-<tt><a href="el_gdt-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gdt-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="el_gdt-pos-PRON.html">PRON</a></tt>-<tt><a href="el_gdt-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="el_gdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_gdt-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 parataxis	color:blue
1	Οφείλουμε	οφείλω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	3	punct	_	_
3	είπατε	λέγω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	1	parataxis	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	3	punct	_	_
5	να	να	AUX	AUX	_	6	aux	_	_
6	κερδίσουμε	κερδίζω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|VerbForm=Fin|Voice=Act	1	xcomp	_	_
7	την	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	εμπιστοσύνη	εμπιστοσύνη	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	6	obj	_	_
9	των	ο	DET	DET	Case=Gen|Definite=Def|Gender=Masc|Number=Plur|PronType=Art	10	det	_	_
10	πολιτών	πολίτης	NOUN	NOUN	Case=Gen|Gender=Masc|Number=Plur	8	nmod	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 parataxis	color:blue
1	ΗΠΑ	ΗΠΑ	NOUN	NOUN	Abbr=Yes	0	root	_	SpaceAfter=No
2	:	:	PUNCT	PUNCT	_	1	punct	_	_
3	Ισχυροί	ισχυρός	ADJ	ADJ	Case=Nom|Gender=Masc|Number=Plur	4	amod	_	_
4	ανεμοστρόβιλοι	ανεμοστρόβιλος	NOUN	NOUN	Case=Nom|Gender=Masc|Number=Plur	5	nsubj	_	_
5	ισοπέδωσαν	ισοπεδώνω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	parataxis	_	_
6	ολόκληρες	ολόκληρος	ADJ	ADJ	Case=Acc|Gender=Fem|Number=Plur	7	amod	_	_
7	γειτονιές	γειτονιά	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Plur	5	obj	_	_
8	σε	σε	ADP	ADP	_	10	case	_	_
9	κεντρικές	κεντρικός	ADJ	ADJ	Case=Acc|Gender=Fem|Number=Plur	10	amod	_	_
10	πολιτείες	πολιτεία	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Plur	5	obl	_	_
11	της	ο	DET	DET	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	χώρας	χώρα	NOUN	NOUN	Case=Gen|Gender=Fem|Number=Sing	10	nmod	_	SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 parataxis	color:blue
1	Αυτό	αυτός	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Dem	4	obj	_	_
2	πρέπει	πρέπει	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
3	να	να	AUX	AUX	_	4	aux	_	_
4	επιδιώκουμε	επιδιώκω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
5	:	:	PUNCT	PUNCT	_	4	punct	_	_
6	τη	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	βελτίωση	βελτίωση	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	4	parataxis	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	11	punct	_	_
9	όχι	όχι	PART	PART	_	11	advmod	_	_
10	τη	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	διάλυση	διάλυση	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	7	conj	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


