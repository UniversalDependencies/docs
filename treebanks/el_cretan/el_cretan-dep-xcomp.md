---
layout: base
title:  'Statistics of xcomp in UD_Greek-Cretan'
udver: '2'
---

## Treebank Statistics: UD_Greek-Cretan: Relations: `xcomp`

This relation is universal.

23 nodes (1%) are attached to their parents as `xcomp`.

22 instances of `xcomp` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 3 pairs of parts of speech are connected with `xcomp`: <tt><a href="el_cretan-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cretan-pos-NOUN.html">NOUN</a></tt> (13; 57% instances), <tt><a href="el_cretan-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cretan-pos-VERB.html">VERB</a></tt> (9; 39% instances), <tt><a href="el_cretan-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cretan-pos-ADJ.html">ADJ</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 xcomp	color:blue
1	Ο	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	Στελιανός	Στελιανός	PROPN	NoPr	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
3	κι	και	CCONJ	CjCo	_	5	cc	_	_
4	ο	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	Νικολής	Νικολής	PROPN	NoPr	Case=Nom|Gender=Masc|Number=Sing	2	conj	_	_
6	είχανε	έχω	AUX	VbMn	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	7	aux	_	mwe=1
7	δώσει	δίνω	VERB	VbMn	Aspect=Perf|VerbForm=Inf|Voice=Act	0	root	_	mwe=1:VID
8	χέρι	χέρι	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Sing	7	obj	_	mwe=1
9	να	να	SCONJ	PtSj	_	10	mark	_	_
10	γινούνε	γίνουμαι	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|VerbForm=Fin|Voice=Act	7	advcl	_	_
11	κουμπάροι	κουμπάρος	NOUN	AjBa	Case=Nom|Gender=Masc|Number=Plur	10	xcomp	_	SpaceAfter=No
12	.	.	PUNCT	PTERMP	_	7	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 xcomp	color:blue
1	Απού	απού	ADV	AdBa	_	6	advmod	_	_
2	ο	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	πόνος	πόνος	NOUN	NoCm	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
4	μου	εγώ	PRON	PnPo	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	3	nmod	_	_
5	είναι	είμαι	AUX	VbMn	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	6	cop	_	_
6	μεγάλος	μεγάλος	ADJ	AjBa	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
7	και	και	CCONJ	CjCo	_	8	cc	_	_
8	γροικώ	γροικώ	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	_	_
9	να	να	SCONJ	PtSj	_	10	mark	_	_
10	τροζαθώ	τροζαίνω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|VerbForm=Fin|Voice=Pass	8	xcomp	_	SpaceAfter=No
11	.	.	PUNCT	PTERMP	_	6	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 xcomp	color:blue
1	Έκαμε	κάμω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	ντονε	εγώ	PRON	PnPe	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	1	obj	_	MGloss=him-euphonic|MSeg=ντον-ε|Voicing=Voiced
3	μπλε	μπλε	ADJ	NoCm	ExtPos=ADJ	1	xcomp	_	_
4	μαρέ	μαρέ	ADJ	NoCm	_	3	fixed	_	SpaceAfter=No
5	.	.	PUNCT	PTERMP	_	1	punct	_	PunctType=Peri

~~~


