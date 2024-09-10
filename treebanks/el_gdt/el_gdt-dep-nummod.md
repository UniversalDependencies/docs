---
layout: base
title:  'Statistics of nummod in UD_Greek-GDT'
udver: '2'
---

## Treebank Statistics: UD_Greek-GDT: Relations: `nummod`

This relation is universal.

466 nodes (1%) are attached to their parents as `nummod`.

455 instances of `nummod` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25107296137339.

The following 7 pairs of parts of speech are connected with `nummod`: <tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gdt-pos-NUM.html">NUM</a></tt> (436; 94% instances), <tt><a href="el_gdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gdt-pos-NUM.html">NUM</a></tt> (13; 3% instances), <tt><a href="el_gdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_gdt-pos-NUM.html">NUM</a></tt> (6; 1% instances), <tt><a href="el_gdt-pos-ADV.html">ADV</a></tt>-<tt><a href="el_gdt-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="el_gdt-pos-NUM.html">NUM</a></tt>-<tt><a href="el_gdt-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="el_gdt-pos-X.html">X</a></tt>-<tt><a href="el_gdt-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-NUM.html">NUM</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	Επίσης	επίσης	ADV	ADV	_	8	advmod	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	1	punct	_	_
3	δύο	δύο	NUM	NUM	Case=Nom|Gender=Neut|Number=Plur|NumType=Card	4	nummod	_	_
4	σπίτια	σπίτι	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Plur	8	nsubj:pass	_	_
5	σ	σε	ADP	ADP	_	7	case	_	_
6	την	ο	DET	DET	Case=Acc|Gender=Fem|Number=Sing	7	det	_	_
7	περιοχή	περιοχή	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	4	nmod	_	_
8	κάηκαν	καίω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
9	ολοσχερώς	ολοσχερώς	ADV	ADV	_	8	advmod	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	Πέντε	πέντε	NUM	NUM	Case=Acc|Gender=Masc|Number=Plur|NumType=Card	2	nummod	_	_
2	νεκροί	νεκρός	ADJ	ADJ	Case=Nom|Gender=Masc|Number=Plur	0	root	_	_
3	σ	σε	ADP	ADP	_	5	case	_	_
4	την	ο	DET	DET	Case=Acc|Gender=Fem|Number=Sing	5	det	_	_
5	Καμπούλ	Καμπούλ	PROPN	PROPN	Case=Acc|Gender=Fem|Number=Sing	2	obl	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	Είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	2	cop	_	_
2	γνωστό	γνωστός	ADJ	ADJ	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
3	ότι	ότι	SCONJ	SCONJ	_	5	mark	_	_
4	έχει	έχω	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	_
5	σκοτώσει	σκοτώνω	VERB	VERB	Aspect=Perf|VerbForm=Inf|Voice=Act	2	csubj	_	_
6	29.000	29.000	NUM	NUM	NumType=Card	7	nummod	_	_
7	Εβραίους	Εβραίος	PROPN	PROPN	Case=Acc|Gender=Masc|Number=Plur	5	obj	_	SpaceAfter=No
8	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


