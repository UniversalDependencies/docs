---
layout: base
title:  'Statistics of orphan in UD_Greek-GDT'
udver: '2'
---

## Treebank Statistics: UD_Greek-GDT: Relations: `orphan`

This relation is universal.

41 nodes (0%) are attached to their parents as `orphan`.

27 instances of `orphan` (66%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.21951219512195.

The following 15 pairs of parts of speech are connected with `orphan`: <tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt> (9; 22% instances), <tt><a href="el_gdt-pos-NUM.html">NUM</a></tt>-<tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt> (6; 15% instances), <tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gdt-pos-PROPN.html">PROPN</a></tt> (5; 12% instances), <tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gdt-pos-ADV.html">ADV</a></tt> (4; 10% instances), <tt><a href="el_gdt-pos-PRON.html">PRON</a></tt>-<tt><a href="el_gdt-pos-ADV.html">ADV</a></tt> (4; 10% instances), <tt><a href="el_gdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt> (3; 7% instances), <tt><a href="el_gdt-pos-PRON.html">PRON</a></tt>-<tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="el_gdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="el_gdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gdt-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="el_gdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gdt-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gdt-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gdt-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="el_gdt-pos-NUM.html">NUM</a></tt>-<tt><a href="el_gdt-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="el_gdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_gdt-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="el_gdt-pos-X.html">X</a></tt>-<tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 orphan	color:blue
1	Οι	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Plur|PronType=Art	4	det	_	_
2	είκοσι	είκοσι	NUM	NUM	Case=Nom|Gender=Fem|Number=Plur|NumType=Card	3	compound	_	_
3	δύο	δύο	NUM	NUM	Case=Nom|Gender=Fem|Number=Plur|NumType=Card	4	nummod	_	_
4	γλώσσες	γλώσσα	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Plur	0	root	_	_
5	462	462	NUM	NUM	NumType=Card	6	nummod	_	_
6	συνδυασμούς	συνδυασμός	NOUN	NOUN	Case=Acc|Gender=Masc|Number=Plur	4	orphan	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 17 orphan	color:blue
1	Από	από	ADP	ADP	_	4	case	_	_
2	το	ο	DET	DET	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	4	det	_	_
3	υπόλοιπο	υπόλοιπος	ADJ	ADJ	Case=Acc|Gender=Neut|Number=Sing	4	amod	_	_
4	61%	61%	NUM	NUM	NumType=Card	8	obl	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	4	punct	_	_
6	το	ο	DET	DET	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	7	det	_	_
7	48%	48%	NUM	NUM	NumType=Card	8	nsubj	_	_
8	δηλώνει	δηλώνω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
9	ότι	ότι	SCONJ	SCONJ	_	10	mark	_	_
10	εργάζεται	εργάζομαι	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	8	ccomp	_	_
11	με	με	ADP	ADP	_	12	case	_	_
12	σχέση	σχέση	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	10	obl	_	_
13	πλήρους	πλήρης	ADJ	ADJ	Case=Gen|Gender=Fem|Number=Sing	12	nmod	_	_
14	και	και	CCONJ	CCONJ	_	15	cc	_	_
15	13%	13%	NUM	NUM	NumType=Card	8	conj	_	_
16	με	με	ADP	ADP	_	17	case	_	_
17	σχέση	σχέση	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	15	orphan	_	_
18	μερικής	μερικός	ADJ	ADJ	Case=Gen|Gender=Fem|Number=Sing	19	amod	_	_
19	απασχόλησης	απασχόληση	NOUN	NOUN	Case=Gen|Gender=Fem|Number=Sing	17	nmod	_	SpaceAfter=No
20	.	.	PUNCT	PUNCT	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 22 orphan	color:blue
1	Η	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	Κέρκυρα	Κέρκυρα	PROPN	PROPN	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
3	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	4	cop	_	_
4	προσβάσιμη	προσβάσιμος	ADJ	ADJ	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
5	με	με	ADP	ADP	_	6	case	_	_
6	ΚΤΕΛ	ΚΤΕΛ	NOUN	NOUN	Abbr=Yes	4	obl	_	_
7	ως	ως	ADV	ADV	_	9	case	_	_
8	την	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	Ηγουμενίτσα	Ηγουμενίτσα	PROPN	PROPN	Case=Acc|Gender=Fem|Number=Sing	4	obl	_	_
10	και	και	CCONJ	CCONJ	_	12	cc	_	_
11	την	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	Πάτρα	Πάτρα	PROPN	PROPN	Case=Acc|Gender=Fem|Number=Sing	9	conj	_	_
13	και	και	CCONJ	CCONJ	_	18	cc	_	_
14	σ	σε	ADP	AsPpSp	_	16	case	_	_
15	τη	ο	DET	AtDf	Case=Acc|Gender=Fem|Number=Sing	16	det	_	_
16	συνέχεια	συνέχεια	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	18	orphan	_	_
17	με	με	ADP	ADP	_	18	case	_	_
18	πλοίο	πλοίο	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	4	conj	_	_
19	ή	ή	CCONJ	CCONJ	_	20	cc	_	_
20	αεροπορικώς	αεροπορικά	ADV	ADV	_	18	conj	_	_
21	από	από	ADP	ADP	_	22	case	_	_
22	Αθήνα	Αθήνα	PROPN	PROPN	Case=Acc|Gender=Fem|Number=Sing	18	orphan	_	SpaceAfter=No
23	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


