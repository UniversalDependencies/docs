---
layout: base
title:  'Statistics of compound in UD_Greek-GDT'
udver: '2'
---

## Treebank Statistics: UD_Greek-GDT: Relations: `compound`

This relation is universal.

22 nodes (0%) are attached to their parents as `compound`.

13 instances of `compound` (59%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.63636363636364.

The following 6 pairs of parts of speech are connected with `compound`: <tt><a href="el_gdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_gdt-pos-PROPN.html">PROPN</a></tt> (11; 50% instances), <tt><a href="el_gdt-pos-NUM.html">NUM</a></tt>-<tt><a href="el_gdt-pos-NUM.html">NUM</a></tt> (5; 23% instances), <tt><a href="el_gdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gdt-pos-NUM.html">NUM</a></tt> (3; 14% instances), <tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gdt-pos-NUM.html">NUM</a></tt> (1; 5% instances), <tt><a href="el_gdt-pos-NUM.html">NUM</a></tt>-<tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 compound	color:blue
1	Αθήνα	Αθήνα	PROPN	PROPN	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
2	-	-	PUNCT	PUNCT	_	1	punct	_	_
3	Ηγουμενίτσα	Ηγουμενίτσα	PROPN	PROPN	Case=Nom|Gender=Fem|Number=Sing	1	compound	_	SpaceAfter=No
4	:	:	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 compound	color:blue
1	Διότι	διότι	SCONJ	SCONJ	_	2	mark	_	_
2	ένα	ένας	NUM	NUM	Case=Nom|Gender=Neut|Number=Sing|NumType=Card	0	root	_	_
3	από	από	ADP	ADP	_	5	case	_	_
4	τα	ο	DET	DET	Case=Acc|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	5	det	_	_
5	δύο	δύο	NUM	NUM	Case=Acc|Gender=Neut|Number=Plur|NumType=Card	2	compound	_	SpaceAfter=No
6	:	:	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 compound	color:blue
1	Αφήστε	αφήνω	VERB	VERB	Aspect=Perf|Mood=Imp|Number=Plur|Person=2|VerbForm=Fin|Voice=Act	0	root	_	_
2	το	ο	DET	DET	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	4	det	_	_
3	ένα	ένας	NUM	NUM	Case=Acc|Gender=Neut|Number=Sing|NumType=Card	4	compound	_	_
4	τρίτο	τρίτος	ADJ	ADJ	Case=Acc|Gender=Neut|Number=Sing|NumType=Ord	1	obj	_	_
5	του	ο	DET	DET	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	χρόνου	χρόνος	NOUN	NOUN	Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	_
7	αγόρευσης	αγόρευση	NOUN	NOUN	Case=Gen|Gender=Fem|Number=Sing	6	nmod	_	_
8	για	για	ADP	ADP	_	10	case	_	_
9	πραγματικές	πραγματικός	ADJ	ADJ	Case=Acc|Gender=Fem|Number=Plur	10	amod	_	_
10	συζητήσεις	συζήτηση	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Plur	1	obl	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


