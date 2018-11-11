---
layout: base
title:  'Statistics of parataxis in UD_Greek-GDT'
udver: '2'
---

## Treebank Statistics: UD_Greek-GDT: Relations: `parataxis`

This relation is universal.

102 nodes (0%) are attached to their parents as `parataxis`.

82 instances of `parataxis` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.68627450980392.

The following 17 pairs of parts of speech are connected with `parataxis`: <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-VERB.html">VERB</a></tt> (48; 47% instances), <tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gdt-pos-VERB.html">VERB</a></tt> (15; 15% instances), <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt> (13; 13% instances), <tt><a href="el_gdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt> (5; 5% instances), <tt><a href="el_gdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gdt-pos-VERB.html">VERB</a></tt> (4; 4% instances), <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-X.html">X</a></tt> (3; 3% instances), <tt><a href="el_gdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gdt-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="el_gdt-pos-PRON.html">PRON</a></tt>-<tt><a href="el_gdt-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="el_gdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_gdt-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="el_gdt-pos-ADV.html">ADV</a></tt>-<tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="el_gdt-pos-ADV.html">ADV</a></tt>-<tt><a href="el_gdt-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gdt-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="el_gdt-pos-NUM.html">NUM</a></tt>-<tt><a href="el_gdt-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="el_gdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_gdt-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-NUM.html">NUM</a></tt> (1; 1% instances).


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
5	να	να	PART	PART	_	6	aux	_	_
6	κερδίσουμε	κερδίζω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|VerbForm=Fin|Voice=Act	1	xcomp	_	_
7	την	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	εμπιστοσύνη	εμπιστοσύνη	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	6	obj	_	_
9	των	ο	DET	DET	Case=Gen|Definite=Def|Gender=Masc|Number=Plur|PronType=Art	10	det	_	_
10	πολιτών	πολίτης	NOUN	NOUN	Case=Gen|Gender=Masc|Number=Plur	8	nmod	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 parataxis	color:blue
1	Αυτός	αυτός	PRON	PRON	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Dem	7	nsubj	_	_
2	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	1	cop	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	4	punct	_	_
4	φαντάζομαι	φαντάζομαι	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	7	parataxis	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	4	punct	_	_
6	ο	ο	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	λόγος	λόγος	NOUN	NOUN	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
8	για	για	ADP	ADP	_	10	case	_	_
9	τον	ο	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	οποίο	οποίος	PRON	PRON	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Rel	12	obl	_	_
11	έχει	έχω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	aux	_	_
12	περιληφθεί	περιλαμβάνω	VERB	VERB	Aspect=Perf|VerbForm=Inf|Voice=Pass	7	acl:relcl	_	_
13	σ	σε	ADP	AsPpSp	_	15	case	_	_
14	την	ο	DET	AtDf	Case=Acc|Gender=Fem|Number=Sing	15	det	_	_
15	έκθεση	έκθεση	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	12	obl	_	_
16	το	ο	DET	DET	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	17	det	_	_
17	σημείο	σημείο	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Sing	12	nsubj:pass	_	_
18	11	11	NUM	NUM	NumType=Card	17	nmod	_	_
19	σχετικά	σχετικά	ADV	ADV	_	17	advmod	_	_
20	με	με	ADP	ADP	_	22	case	_	_
21	τους	ο	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Plur|PronType=Art	22	det	_	_
22	ελέγχους	έλεγχος	NOUN	NOUN	Case=Acc|Gender=Masc|Number=Plur	19	obl	_	_
23	σ	σε	ADP	AsPpSp	_	25	case	_	_
24	τα	ο	DET	AtDf	Case=Acc|Gender=Neut|Number=Plur	25	det	_	_
25	πρόβατα	πρόβατο	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Plur	22	nmod	_	SpaceAfter=No
26	.	.	PUNCT	PUNCT	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 parataxis	color:blue
1	Αυτό	αυτός	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Dem	4	obj	_	_
2	πρέπει	πρέπει	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
3	να	να	PART	PART	_	4	aux	_	_
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


