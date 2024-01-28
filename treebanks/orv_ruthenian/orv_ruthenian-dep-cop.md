---
layout: base
title:  'Statistics of cop in UD_Old_East_Slavic-Ruthenian'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Ruthenian: Relations: `cop`

This relation is universal.

444 nodes (0%) are attached to their parents as `cop`.

294 instances of `cop` (66%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.84684684684685.

The following 10 pairs of parts of speech are connected with `cop`: <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-AUX.html">AUX</a></tt> (229; 52% instances), <tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_ruthenian-pos-AUX.html">AUX</a></tt> (121; 27% instances), <tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_ruthenian-pos-AUX.html">AUX</a></tt> (44; 10% instances), <tt><a href="orv_ruthenian-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_ruthenian-pos-AUX.html">AUX</a></tt> (20; 5% instances), <tt><a href="orv_ruthenian-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_ruthenian-pos-AUX.html">AUX</a></tt> (9; 2% instances), <tt><a href="orv_ruthenian-pos-DET.html">DET</a></tt>-<tt><a href="orv_ruthenian-pos-AUX.html">AUX</a></tt> (8; 2% instances), <tt><a href="orv_ruthenian-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_ruthenian-pos-AUX.html">AUX</a></tt> (7; 2% instances), <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-AUX.html">AUX</a></tt> (3; 1% instances), <tt><a href="orv_ruthenian-pos-PART.html">PART</a></tt>-<tt><a href="orv_ruthenian-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="orv_ruthenian-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="orv_ruthenian-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 cop	color:blue
1	Тогды	тогды	ADV	RB	Degree=Pos	6	advmod	_	wf="Тогды"
2	будем	быти	AUX	VBC	Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	5	cop	_	wf="будем"
3	на	на	ADP	IN	_	5	case	_	wf="на"
4	ѡбѣ	оба	NUM	CD	Case=Loc|Gender=Fem|NumForm=Word|NumType=Sets	5	nummod	_	wf="ѡбѣ"
5	сторонѣ	сторона	NOUN	NNI	Case=Loc|Gender=Fem|Number=Sing	6	obl	_	wf="сторонѣ"
6	смотрити	смотрити	VERB	VB	VerbForm=Inf|Voice=Act	0	root	_	wf="смотрити"
7	права	право	NOUN	NNI	Case=Gen|Gender=Neut|Number=Sing	6	obj	_	wf="права"|SpaceAfter=No
8	.	.	PUNCT	-PERIOD-	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 cop	color:blue
1	Росмотрите	розсмотрети	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	wf="Росмотрите"|SpaceAfter=No
2	,	,	PUNCT	-COMMA-	_	3	punct	_	_
3	добро	добрый	ADJ	JJH	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	1	ccomp	_	wf="добро"
4	ль	ли	PART	RP	_	3	advmod	_	wf="ль"
5	то	то	PRON	DT	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	3	nsubj	_	wf="то"
6	будет(ь)	быти	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	3	cop	_	wf="будеть"|SpaceAfter=No
7	?	?	PUNCT	-PERIOD-	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 cop	color:blue
1	А	а	CCONJ	СС	_	4	cc	_	wf="А"
2	то	то	PRON	DT	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	4	obj	_	wf="то"
3	бы	бы	AUX	RP	Analyt=Yes|Mood=Cnd	4	aux	_	wf="бы"
4	завѣдалъ	заведати	VERB	VBC	Analyt=Yes|Aspect=Imp|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	wf="завѣдалъ"
5	игоуменъ	игуменъ	NOUN	NNA	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	wf="игоуменъ"
6	съ	съ	ADP	IN	_	7	case	_	wf="съ"
7	брат(ь)ею	братья	NOUN	NNI	Case=Ins|Gender=Fem|Number=Sing	4	obl	_	wf="братьею"|SpaceAfter=No
8	,	,	PUNCT	-COMMA-	_	9	punct	_	_
9	хто	хто	PRON	WP	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	5	conj	_	wf="хто"
10	боудет(ь)	быти	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	9	cop	_	wf="боудеть"|SpaceAfter=No
11	.	.	PUNCT	-PERIOD-	_	4	punct	_	_

~~~


