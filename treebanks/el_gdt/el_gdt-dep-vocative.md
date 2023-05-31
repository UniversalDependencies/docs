---
layout: base
title:  'Statistics of vocative in UD_Greek-GDT'
udver: '2'
---

## Treebank Statistics: UD_Greek-GDT: Relations: `vocative`

This relation is universal.

74 nodes (0%) are attached to their parents as `vocative`.

57 instances of `vocative` (77%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.47297297297297.

The following 4 pairs of parts of speech are connected with `vocative`: <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt> (60; 81% instances), <tt><a href="el_gdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt> (7; 9% instances), <tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt> (6; 8% instances), <tt><a href="el_gdt-pos-PRON.html">PRON</a></tt>-<tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 vocative	color:blue
1	(	(	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No
2	ES	ES	X	X	Foreign=Yes	4	parataxis	_	SpaceAfter=No
3	)	)	PUNCT	PUNCT	_	2	punct	_	_
4	Ευχαριστώ	ευχαριστώ	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	πολύ	πολύ	ADV	ADV	_	4	advmod	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	8	punct	_	_
7	κύριε	κύριος	NOUN	NOUN	Case=Voc|Gender=Masc|Number=Sing	8	nmod	_	_
8	Πρόεδρε	πρόεδρος	NOUN	NOUN	Case=Voc|Gender=Masc|Number=Sing	4	vocative	_	SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 vocative	color:blue
1	Κύριε	κύριος	NOUN	NOUN	Case=Voc|Gender=Masc|Number=Sing	2	nmod	_	_
2	Πρόεδρε	πρόεδρος	NOUN	NOUN	Case=Voc|Gender=Masc|Number=Sing	5	vocative	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	5	punct	_	_
4	ήταν	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	5	cop	_	_
5	σαφές	σαφής	ADJ	ADJ	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
6	ότι	ότι	SCONJ	SCONJ	_	10	mark	_	_
7	αυτό	αυτός	DET	DET	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Dem	9	det	_	_
8	το	ο	DET	DET	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	9	det	_	_
9	πνεύμα	πνεύμα	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Sing	10	nsubj	_	_
10	διέπνεε	διαπνέω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	csubj	_	_
11	όσα	όσος	PRON	PRON	Case=Acc|Gender=Neut|Number=Plur|Person=3|PronType=Ind,Rel	10	obj	_	_
12	είπατε	λέγω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	11	acl:relcl	_	SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 vocative	color:blue
1	Καλημέρα	καλημέρα	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	0	root	_	_
2	συνάδελφοι	συνάδελφος	NOUN	NOUN	Case=Voc|Gender=Masc|Number=Plur	1	vocative	_	SpaceAfter=No
3	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


