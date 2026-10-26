---
layout: base
title:  'Statistics of mark in UD_Greek-Cretan'
udver: '2'
---

## Treebank Statistics: UD_Greek-Cretan: Relations: `mark`

This relation is universal.

131 nodes (3%) are attached to their parents as `mark`.

130 instances of `mark` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.32824427480916.

The following 7 pairs of parts of speech are connected with `mark`: <tt><a href="el_cretan-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cretan-pos-SCONJ.html">SCONJ</a></tt> (116; 89% instances), <tt><a href="el_cretan-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cretan-pos-ADP.html">ADP</a></tt> (9; 7% instances), <tt><a href="el_cretan-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cretan-pos-PART.html">PART</a></tt> (2; 2% instances), <tt><a href="el_cretan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_cretan-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="el_cretan-pos-PRON.html">PRON</a></tt>-<tt><a href="el_cretan-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="el_cretan-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_cretan-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="el_cretan-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cretan-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 mark	color:blue
1	Μα	μα	INTJ	CjCo	_	7	discourse	_	_
2	ως	ως	SCONJ	AdBa	PronType=Rel	3	mark	_	_
3	ξάνοιγε	ξανοίγω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	advcl	_	_
4	το	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	5	det	_	_
5	Γαρεφαλιό	Γαρεφαλιά	PROPN	NoCm	Case=Acc|Degree=Dim|Gender=Neut|Number=Sing	3	obj	_	_
6	την	εγώ	PRON	PnPe	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
7	ελιμπίστηκε	λιμπίζομαι	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
8	.	.	PUNCT	PTERMP	_	7	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 mark	color:blue
1	Σ	σ	ADP	AsPpSp	_	3	case	_	_
2	τη	τη	DET	AsPpSp	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	φάμπρικα	φάμπρικα	NOUN	AjBa	Case=Acc|Gender=Fem|Number=Sing	0	root	_	_
4	πρίχου	πρίχου	ADP	NoCm	ExtPos=SCONJ	6	mark	_	_
5	να	να	SCONJ	PtSj	_	4	fixed	_	_
6	κράξει	κράζω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	3	advcl	_	_
7	η	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	ζάρα	ζάρα	NOUN	NoPr	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	SpaceAfter=No
9	.	.	PUNCT	PTERMP	_	6	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 mark	color:blue
1	Κι	και	CCONJ	CjCo	_	2	cc	_	_
2	ύστερα	ύστερα	ADV	AdBa	_	7	advmod	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	7	punct	_	PunctType=Comm
4	ύστερα	ύστερα	ADV	AdBa	_	7	discourse	_	_
5	γεμάτη	γεμάτος	ADJ	AjBa	Case=Acc|Gender=Fem|Number=Sing	7	advcl	_	_
6	λαχτάρα	λαχτάρα	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Sing	5	nmod	_	_
7	ποκρεμιέται	ποκρεμιέμαι	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
8	μπας	μπας	PART	PtOt	ExtPos=SCONJ	10	mark	_	_
9	και	και	CCONJ	CjCo	_	8	fixed	_	_
10	δει	βλέπω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	7	advcl	_	_
11	τον	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	λεγάμενο	λεγάμενος	ADJ	VbMnPp	Case=Acc|Gender=Masc|Number=Sing	10	obj	_	SpaceAfter=No
13	.	.	PUNCT	PTERMP	_	7	punct	_	PunctType=Peri

~~~


