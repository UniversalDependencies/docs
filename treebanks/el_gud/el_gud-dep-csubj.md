---
layout: base
title:  'Statistics of csubj in UD_Greek-GUD'
udver: '2'
---

## Treebank Statistics: UD_Greek-GUD: Relations: `csubj`

This relation is universal.

54 nodes (0%) are attached to their parents as `csubj`.

51 instances of `csubj` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.07407407407407.

The following 7 pairs of parts of speech are connected with `csubj`: <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (34; 63% instances), <tt><a href="el_gud-pos-AUX.html">AUX</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (8; 15% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-AUX.html">AUX</a></tt> (5; 9% instances), <tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (3; 6% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="el_gud-pos-ADV.html">ADV</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj	color:blue
1	Αρκεί	αρκώ	VERB	Vb	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	που	που	SCONJ	CjSb	_	3	mark	_	_
3	υπάρχει	υπάρχω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	csubj	_	_
4	και	και	CCONJ	CjCo	_	5	cc	_	_
5	μπορεί	μπορώ	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	_
6	να	να	SCONJ	CjSb	_	7	mark	_	_
7	βαφτιστεί	βαφτίζω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Pass	5	xcomp	_	_
8	επιτυχία	επιτυχία	NOUN	NoCm	Case=Nom|Gender=Fem|Number=Sing	7	xcomp	_	SpaceAfter=No
9	.	.	PUNCT	PTERMP	PunctType=Peri	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 csubj	color:blue
1	Είναι	είμαι	AUX	VbMn	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
2	σίγουρο	σίγουρος	ADJ	AjBa	Case=Nom|Gender=Neut|Number=Sing	1	xcomp	_	_
3	ότι	ότι	SCONJ	CjSb	_	5	mark	_	_
4	αυτό	αυτός	PRON	PnDm	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	5	obj	_	_
5	έκλεψε	κλέβω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	csubj	_	_
6	ο	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	δολοφόνος	δολοφόνος	NOUN	NoCm	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	SpaceAfter=No
8	.	.	PUNCT	PTERMP	PunctType=Peri	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj	color:blue
1	Πώς	πώς	ADV	AdBa	PronType=Int	2	advmod	_	_
2	φαίνεται	φαίνομαι	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
3	ότι	ότι	SCONJ	CjSb	_	4	mark	_	_
4	είσαι	είμαι	AUX	VbMn	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Pass	2	csubj	_	_
5	από	από	ADP	AsPpSp	_	6	case	_	_
6	σπίτι	σπίτι	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Sing	4	obl:agent	_	SpaceAfter=No
7	.	.	PUNCT	PTERMP	PunctType=Peri	2	punct	_	_

~~~


