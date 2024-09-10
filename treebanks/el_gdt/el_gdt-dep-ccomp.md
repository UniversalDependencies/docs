---
layout: base
title:  'Statistics of ccomp in UD_Greek-GDT'
udver: '2'
---

## Treebank Statistics: UD_Greek-GDT: Relations: `ccomp`

This relation is universal.

659 nodes (1%) are attached to their parents as `ccomp`.

636 instances of `ccomp` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.82852807283763.

The following 7 pairs of parts of speech are connected with `ccomp`: <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-VERB.html">VERB</a></tt> (569; 86% instances), <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-ADJ.html">ADJ</a></tt> (54; 8% instances), <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt> (27; 4% instances), <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-ADV.html">ADV</a></tt> (4; 1% instances), <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 ccomp	color:blue
1	Κινδυνεύουμε	κινδυνεύω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	να	να	AUX	AUX	_	3	aux	_	_
3	δημιουργηθεί	δημιουργώ	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Pass	1	ccomp	_	_
4	μια	ένας	DET	DET	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
5	νέα	νέος	ADJ	ADJ	Case=Nom|Gender=Fem|Number=Sing	6	amod	_	_
6	Βαβέλ	Βαβέλ	PROPN	PROPN	Case=Nom|Gender=Fem|Number=Sing	3	nsubj:pass	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 ccomp	color:blue
1	Θεωρώ	θεωρώ	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	ότι	ότι	SCONJ	SCONJ	_	5	mark	_	_
3	αυτό	αυτός	PRON	PRON	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Dem	5	nsubj	_	_
4	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	5	cop	_	_
5	σωστό	σωστός	ADJ	ADJ	Case=Nom|Gender=Neut|Number=Sing	1	ccomp	_	SpaceAfter=No
6	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 ccomp	color:blue
1	Γι'	για	ADP	ADP	_	2	case	_	_
2	αυτό	αυτός	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Dem	4	obl	_	_
3	και	και	CCONJ	CCONJ	_	4	cc	_	_
4	θεώρησα	θεωρώ	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	πως	πως	SCONJ	SCONJ	_	10	mark	_	_
6	τώρα	τώρα	ADV	ADV	_	10	advmod	_	_
7	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	10	cop	_	_
8	η	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
9	καλύτερη	καλός	ADJ	ADJ	Case=Nom|Degree=Cmp|Gender=Fem|Number=Sing	10	amod	_	_
10	στιγμή	στιγμή	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	4	ccomp	_	_
11	να	να	AUX	AUX	_	12	aux	_	_
12	αποσυρθώ	αποσύρω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|VerbForm=Fin|Voice=Pass	10	acl	_	SpaceAfter=No
13	"	"	PUNCT	PUNCT	_	10	punct	_	SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


