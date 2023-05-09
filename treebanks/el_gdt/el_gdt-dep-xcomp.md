---
layout: base
title:  'Statistics of xcomp in UD_Greek-GDT'
udver: '2'
---

## Treebank Statistics: UD_Greek-GDT: Relations: `xcomp`

This relation is universal.

603 nodes (1%) are attached to their parents as `xcomp`.

591 instances of `xcomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.60033167495854.

The following 7 pairs of parts of speech are connected with `xcomp`: <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-VERB.html">VERB</a></tt> (386; 64% instances), <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-ADJ.html">ADJ</a></tt> (125; 21% instances), <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt> (80; 13% instances), <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-PROPN.html">PROPN</a></tt> (7; 1% instances), <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 xcomp	color:blue
1	Οφείλουμε	οφείλω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	3	punct	_	_
3	είπατε	λέγω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	1	parataxis	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	3	punct	_	_
5	να	να	AUX	AUX	_	6	aux	_	_
6	κερδίσουμε	κερδίζω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|VerbForm=Fin|Voice=Act	1	xcomp	_	_
7	την	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	εμπιστοσύνη	εμπιστοσύνη	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	6	obj	_	_
9	των	ο	DET	DET	Case=Gen|Definite=Def|Gender=Masc|Number=Plur|PronType=Art	10	det	_	_
10	πολιτών	πολίτης	NOUN	NOUN	Case=Gen|Gender=Masc|Number=Plur	8	nmod	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 xcomp	color:blue
1	Αυτό	αυτός	DET	DET	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Dem	3	det	_	_
2	το	ο	DET	DET	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	3	det	_	_
3	Κοινοβούλιο	κοινοβούλιο	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Sing	6	nsubj	_	_
4	πρέπει	πρέπει	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	_	_
5	να	να	AUX	AUX	_	6	aux	_	_
6	εξακολουθήσει	εξακολουθώ	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	0	root	_	_
7	να	να	AUX	AUX	_	9	aux	_	_
8	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	9	cop	_	_
9	πολύγλωσσο	πολύγλωσσος	ADJ	ADJ	Case=Nom|Gender=Fem|Number=Sing	6	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 xcomp	color:blue
1	-	-	PUNCT	PUNCT	_	4	punct	_	_
2	ο	ο	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	οποίος	οποίος	PRON	PRON	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Rel	4	nsubj	_	_
4	οφείλει	οφείλω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	να	να	AUX	AUX	_	8	aux	_	_
6	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	8	cop	_	_
7	νομικά	νομικά	ADV	ADV	_	8	advmod	_	_
8	εκτελεστός	εκτελεστός	NOUN	NOUN	Case=Nom|Gender=Masc|Number=Sing	4	xcomp	_	SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


