---
layout: base
title:  'Statistics of csubj in UD_Greek-GDT'
udver: '2'
---

## Treebank Statistics: UD_Greek-GDT: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="el_gdt-dep-csubj-pass.html">csubj:pass</a></tt>.

399 nodes (1%) are attached to their parents as `csubj`.

394 instances of `csubj` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.41854636591479.

The following 10 pairs of parts of speech are connected with `csubj`: <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-VERB.html">VERB</a></tt> (299; 75% instances), <tt><a href="el_gdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gdt-pos-VERB.html">VERB</a></tt> (46; 12% instances), <tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gdt-pos-VERB.html">VERB</a></tt> (25; 6% instances), <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-ADJ.html">ADJ</a></tt> (9; 2% instances), <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt> (7; 2% instances), <tt><a href="el_gdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="el_gdt-pos-ADV.html">ADV</a></tt>-<tt><a href="el_gdt-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="el_gdt-pos-NUM.html">NUM</a></tt>-<tt><a href="el_gdt-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gdt-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-ADV.html">ADV</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 csubj	color:blue
1	Κατόπιν	κατόπιν	ADV	ADV	_	6	advmod	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	1	punct	_	_
3	ο	ο	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	καθένας	καθένας	PRON	PRON	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Ind	8	nsubj	_	_
5	θα	θα	AUX	AUX	_	6	aux	_	_
6	πρέπει	πρέπει	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	να	να	AUX	AUX	_	8	aux	_	_
8	αναλάβει	αναλαμβάνω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	6	csubj	_	_
9	τις	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Plur|PronType=Art	10	det	_	_
10	ευθύνες	ευθύνη	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Plur	8	obj	_	_
11	του	μου	PRON	PRON	Case=Gen|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	10	nmod	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj	color:blue
1	Είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	2	cop	_	_
2	προφανές	προφανής	ADJ	ADJ	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
3	ότι	ότι	SCONJ	SCONJ	_	4	mark	_	_
4	βρισκόμαστε	βρίσκω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	2	csubj	_	_
5	σε	σε	ADP	ADP	_	7	case	_	_
6	μία	ένας	DET	DET	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	εποχή	εποχή	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	4	obl	_	_
8	εξελίξεων	εξέλιξη	NOUN	NOUN	Case=Gen|Gender=Fem|Number=Plur	7	nmod	_	SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 csubj	color:blue
1	Η	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
2	κοινή	κοινός	ADJ	ADJ	Case=Nom|Gender=Fem|Number=Sing	4	amod	_	_
3	μας	μου	PRON	PRON	Case=Gen|Gender=Masc|Number=Plur|Person=1|Poss=Yes|PronType=Prs	4	nmod	_	_
4	αποστολή	αποστολή	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
5	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	4	cop	_	_
6	να	να	AUX	AUX	_	7	aux	_	_
7	προχωρήσει	προχωρώ	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	4	csubj	_	_
8	η	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	Ευρώπη	Ευρώπη	PROPN	PROPN	Case=Nom|Gender=Fem|Number=Sing	7	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


