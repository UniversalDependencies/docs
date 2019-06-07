---
layout: base
title:  'Statistics of nsubj:pass in UD_Greek-GDT'
udver: '2'
---

## Treebank Statistics: UD_Greek-GDT: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="el_gdt-dep-nsubj.html">nsubj</a></tt>.

782 nodes (1%) are attached to their parents as `nsubj:pass`.

465 instances of `nsubj:pass` (59%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.14961636828644.

The following 7 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt> (523; 67% instances), <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-PRON.html">PRON</a></tt> (188; 24% instances), <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-PROPN.html">PROPN</a></tt> (22; 3% instances), <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-ADJ.html">ADJ</a></tt> (20; 3% instances), <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-NUM.html">NUM</a></tt> (14; 2% instances), <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-X.html">X</a></tt> (14; 2% instances), <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nsubj:pass	color:blue
1	Έχουν	έχω	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	_	_
2	ήδη	ήδη	ADV	ADV	_	3	advmod	_	_
3	παρουσιαστεί	παρουσιάζω	VERB	VERB	Aspect=Perf|VerbForm=Inf|Voice=Pass	0	root	_	_
4	ορισμένα	ορισμένος	ADJ	ADJ	Case=Nom|Gender=Neut|Number=Plur	5	amod	_	_
5	στοιχεία	στοιχείο	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Plur	3	nsubj:pass	_	SpaceAfter=No
6	:	:	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nsubj:pass	color:blue
1	Τι	τι	PRON	PRON	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Int	5	nsubj:pass	_	_
2	πρέπει	πρέπει	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	_
3	λοιπόν	λοιπόν	ADV	ADV	_	5	advmod	_	_
4	να	να	AUX	AUX	_	5	aux	_	_
5	τεθεί	θέτω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Pass	0	root	_	_
6	σ	σε	ADP	AsPpSp	_	9	case	_	_
7	την	ο	DET	AtDf	Case=Acc|Gender=Fem|Number=Sing	9	det	_	_
8	ημερήσια	ημερήσιος	ADJ	ADJ	Case=Acc|Gender=Fem|Number=Sing	9	amod	_	_
9	διάταξη	διάταξη	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	5	obl	_	_
10	της	ο	DET	DET	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	Βαρκελώνης	Βαρκελώνη	PROPN	PROPN	Case=Gen|Gender=Fem|Number=Sing	9	nmod	_	SpaceAfter=No
12	;	;	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj:pass	color:blue
1	Ο	ο	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	Καλαμάς	Καλαμάς	PROPN	PROPN	Case=Nom|Gender=Masc|Number=Sing	3	nsubj:pass	_	_
3	προσφέρεται	προσφέρω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
4	για	για	ADP	ADP	_	5	case	_	_
5	δραστηριότητες	δραστηριότητα	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Plur	3	obl	_	_
6	εναλλακτικού	εναλλακτικός	ADJ	ADJ	Case=Gen|Gender=Masc|Number=Sing	7	amod	_	_
7	τουρισμού	τουρισμός	NOUN	NOUN	Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	SpaceAfter=No
8	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


