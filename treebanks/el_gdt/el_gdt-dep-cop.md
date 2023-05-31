---
layout: base
title:  'Statistics of cop in UD_Greek-GDT'
udver: '2'
---

## Treebank Statistics: UD_Greek-GDT: Relations: `cop`

This relation is universal.

599 nodes (1%) are attached to their parents as `cop`.

507 instances of `cop` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.12520868113523.

The following 8 pairs of parts of speech are connected with `cop`: <tt><a href="el_gdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gdt-pos-AUX.html">AUX</a></tt> (277; 46% instances), <tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gdt-pos-AUX.html">AUX</a></tt> (232; 39% instances), <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-AUX.html">AUX</a></tt> (38; 6% instances), <tt><a href="el_gdt-pos-PRON.html">PRON</a></tt>-<tt><a href="el_gdt-pos-AUX.html">AUX</a></tt> (21; 4% instances), <tt><a href="el_gdt-pos-ADV.html">ADV</a></tt>-<tt><a href="el_gdt-pos-AUX.html">AUX</a></tt> (16; 3% instances), <tt><a href="el_gdt-pos-NUM.html">NUM</a></tt>-<tt><a href="el_gdt-pos-AUX.html">AUX</a></tt> (9; 2% instances), <tt><a href="el_gdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_gdt-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="el_gdt-pos-X.html">X</a></tt>-<tt><a href="el_gdt-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	Αυτό	αυτός	PRON	PRON	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Dem	3	nsubj	_	_
2	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	3	cop	_	_
3	σωστό	σωστός	ADJ	ADJ	Case=Nom|Gender=Neut|Number=Sing	0	root	_	SpaceAfter=No
4	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 cop	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cop	color:blue
1	Τα	ο	DET	DET	Case=Nom|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	2	det	_	_
2	κτίριά	κτίριο	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Plur	6	nsubj:pass	_	_
3	μας	μου	PRON	PRON	Case=Gen|Gender=Masc|Number=Plur|Person=1|Poss=Yes|PronType=Prs	2	nmod	_	_
4	δεν	δεν	PART	PART	_	6	advmod	_	_
5	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	6	cop	_	_
6	προετοιμασμένα	προετοιμάζω	VERB	VERB	Aspect=Perf|Case=Nom|Gender=Neut|Number=Plur|VerbForm=Part|Voice=Pass	0	root	_	_
7	για	για	ADP	ADP	_	8	case	_	_
8	κάτι	κάτι	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Ind	6	obl	_	_
9	τέτοιο	τέτοιος	DET	DET	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Dem	8	det	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


