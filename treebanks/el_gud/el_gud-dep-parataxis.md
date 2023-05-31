---
layout: base
title:  'Statistics of parataxis in UD_Greek-GUD'
udver: '2'
---

## Treebank Statistics: UD_Greek-GUD: Relations: `parataxis`

This relation is universal.

210 nodes (1%) are attached to their parents as `parataxis`.

209 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.12380952380952.

The following 11 pairs of parts of speech are connected with `parataxis`: <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (174; 83% instances), <tt><a href="el_gud-pos-AUX.html">AUX</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (10; 5% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (10; 5% instances), <tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (6; 3% instances), <tt><a href="el_gud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="el_gud-pos-INTJ.html">INTJ</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="el_gud-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="el_gud-pos-X.html">X</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 parataxis	color:blue
1	Το	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	3	det	_	_
2	πρώτο	πρώτος	ADJ	NmOd	Case=Nom|Gender=Neut|Number=Sing|NumType=Ord	3	amod	_	_
3	ερώτημα	ερώτημα	NOUN	NoCm	Case=Nom|Gender=Neut|Number=Sing	4	nsubj	_	_
4	είναι	είμαι	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
5	:	:	PUNCT	PTERM	PunctType=Colo	4	punct	_	_
6	το	εγώ	PRON	PnPe	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
7	λέω	λέω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	4	parataxis	_	_
8	σ	σε	ADP	AsPpSp	_	10	case	_	_
9	την	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	Αδριανή	Αδριανή	PROPN	NoPr	Case=Acc|Gender=Fem|Number=Sing	7	obl	_	_
11	και	και	CCONJ	CjCo	_	14	cc	_	_
12	πώς	πώς	ADV	AdBa	PronType=Int	14	advmod	_	_
13	το	εγώ	PRON	PnPe	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	14	obj	_	_
14	λέω	λέω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	4	conj	_	_
15	;	;	PUNCT	PTERM	PunctType=Qest	4	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 14 parataxis	color:blue
1	«	«	PUNCT	OPUNCT	PunctType=Quot	2	punct	_	_
2	Ήταν	είμαι	AUX	VbMn	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
3	στραβό	στραβός	ADJ	AjBa	Case=Nom|Gender=Neut|Number=Sing	2	xcomp	_	_
4	το	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	5	det	_	_
5	κλίμα	κλίμα	NOUN	NoCm	Case=Nom|Gender=Neut|Number=Sing	2	nsubj	_	_
6	,	,	PUNCT	PUNCT	PunctType=Comm	8	punct	_	_
7	το	o	DET	PnPe	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	8	obj	_	_
8	'φαγε	τρώω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	_
9	και	και	CCONJ	CjCo	_	11	cc	_	_
10	ο	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	γάιδαρος	γάιδαρος	NOUN	NoCm	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	_
12	»	»	PUNCT	CPUNCT	PunctType=Quot	2	punct	_	_
13	μου	εγώ	PRON	PnPe	Case=Gen|Number=Sing|Person=1|PronType=Prs	14	iobj	_	_
14	λέει	λέω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	parataxis	_	SpaceAfter=No
15	.	.	PUNCT	PTERMP	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 parataxis	color:blue
1	«	«	PUNCT	OPUNCT	PunctType=Quot	7	punct	_	_
2	Αυτό	αυτός	DET	PnDm	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	7	nsubj	_	_
3	είναι	είμαι	AUX	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	7	cop	_	_
4	το	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	7	det	_	_
5	καθημερινό	καθημερινός	ADJ	AjBa	Case=Nom|Gender=Neut|Number=Sing	7	amod	_	_
6	μας	μου	PRON	PnPo	Case=Gen|Number=Plur|Person=1|Poss=Yes|PronType=Prs	7	nmod	_	_
7	ψωμοτύρι	ψωμοτύρι	NOUN	NoCm	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
8	»	»	PUNCT	CPUNCT	PunctType=Quot	7	punct	_	_
9	απαντάει	απαντώ	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	parataxis	_	_
10	ο	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	Κοσμίδης	Κοσμίδης	PROPN	NoPr	Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	SpaceAfter=No
12	.	.	PUNCT	PTERMP	PunctType=Peri	7	punct	_	_

~~~


