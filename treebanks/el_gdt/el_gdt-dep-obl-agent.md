---
layout: base
title:  'Statistics of obl:agent in UD_Greek-GDT'
udver: '2'
---

## Treebank Statistics: UD_Greek-GDT: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="el_gdt-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="el_gdt-dep-obl-arg.html">obl:arg</a></tt>.

105 nodes (0%) are attached to their parents as `obl:agent`.

98 instances of `obl:agent` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.1047619047619.

The following 4 pairs of parts of speech are connected with `obl:agent`: <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt> (84; 80% instances), <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-PROPN.html">PROPN</a></tt> (11; 10% instances), <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-X.html">X</a></tt> (6; 6% instances), <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-ADJ.html">ADJ</a></tt> (4; 4% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 obl:agent	color:blue
1	Το	ο	DET	DET	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	2	det	_	_
2	15%	15%	NUM	NUM	NumType=Card	3	nsubj:pass	_	_
3	ρυθμίζεται	ρυθμίζω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
4	από	από	ADP	ADP	_	6	case	_	_
5	τους	ο	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Plur|PronType=Art	6	det	_	_
6	πρέσβεις	πρέσβης	NOUN	NOUN	Case=Acc|Gender=Masc|Number=Plur	3	obl:agent	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 obl:agent	color:blue
1	Η	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	Μεταλίστ	Μεταλίστ	X	X	Foreign=Yes	4	nsubj	_	_
3	Χάρκιβ	Χάρκιβ	X	X	Foreign=Yes	2	flat	_	_
4	ηττήθηκε	ηττώμαι	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
5	από	από	ADP	ADP	_	7	case	_	_
6	τον	ο	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	Ολυμπιακό	ολυμπιακός	PROPN	PROPN	Case=Acc|Gender=Masc|Number=Sing	4	obl:agent	_	_
8	Πειραιώς	Πειραιεύς	PROPN	PROPN	Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	_
9	με	με	ADP	ADP	_	10	case	_	_
10	σκορ	σκορ	X	X	Foreign=Yes	4	obl	_	_
11	0:1	0:1	NUM	NUM	NumType=Card	10	nmod	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 obl:agent	color:blue
1	Ο	ο	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	Ολυμπιακός	ολυμπιακός	PROPN	PROPN	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
3	Πειραιώς	Πειραιεύς	PROPN	PROPN	Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	_
4	ηττήθηκε	ηττώμαι	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
5	από	από	ADP	ADP	_	7	case	_	_
6	τη	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	Μεταλίστ	Μεταλίστ	X	X	Foreign=Yes	4	obl:agent	_	_
8	Χάρκιβ	Χάρκιβ	X	X	Foreign=Yes	7	flat	_	_
9	με	με	ADP	ADP	_	10	case	_	_
10	σκορ	σκορ	X	X	Foreign=Yes	4	obl	_	_
11	1:2	1:2	NUM	NUM	NumType=Card	10	nmod	_	_

~~~


