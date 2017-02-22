

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin-ITTB)

This relation is a language-specific subtype of [csubj]().

555 nodes (0%) are attached to their parents as `csubj:pass`.

328 instances of `csubj:pass` (59%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.29189189189189.

The following 18 pairs of parts of speech are connected with `csubj:pass`: [la-pos/VERB]()-[la-pos/VERB]() (403; 73% instances), [la-pos/VERB]()-[la-pos/NOUN]() (53; 10% instances), [la-pos/VERB]()-[la-pos/ADJ]() (44; 8% instances), [la-pos/ADJ]()-[la-pos/VERB]() (18; 3% instances), [la-pos/NOUN]()-[la-pos/VERB]() (10; 2% instances), [la-pos/VERB]()-[la-pos/PRON]() (8; 1% instances), [la-pos/VERB]()-[la-pos/NUM]() (3; 1% instances), [la-pos/VERB]()-[la-pos/PROPN]() (3; 1% instances), [la-pos/ADJ]()-[la-pos/ADJ]() (2; 0% instances), [la-pos/NOUN]()-[la-pos/NOUN]() (2; 0% instances), [la-pos/VERB]()-[la-pos/ADV]() (2; 0% instances), [la-pos/ADJ]()-[la-pos/NOUN]() (1; 0% instances), [la-pos/ADJ]()-[la-pos/NUM]() (1; 0% instances), [la-pos/DET]()-[la-pos/VERB]() (1; 0% instances), [la-pos/NOUN]()-[la-pos/PRON]() (1; 0% instances), [la-pos/NUM]()-[la-pos/VERB]() (1; 0% instances), [la-pos/PRON]()-[la-pos/ADJ]() (1; 0% instances), [la-pos/PRON]()-[la-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 csubj:pass	color:blue
1	unde	unde	ADV	O4|stRL	_	4	advmod	_	_
2	nec	nec	CCONJ	O4|stRL	_	3	advmod:emph	_	_
3	ratione	ratio	NOUN	C1|grn1|casF|gen2|comH|vgr1|stAC	Case=Abl|Degree=Pos|Gender=Fem|Number=Sing	5	obl	_	_
4	videtur	video	VERB	K3|modJ|tem1|gen6|vgr1|stAC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
5	posse	possum	VERB	N3|modH|tem1|stAV	Tense=Pres|VerbForm=Inf|VerbType=Mod|Voice=Act	4	csubj:pass	_	_
6	demonstrari	demonstro	VERB	J3|modQ|tem1|stAE	Tense=Pres|VerbForm=Inf|Voice=Pass	5	xcomp	_	_
7	an	an	SCONJ	O4|stRL	_	9	mark	_	_
8	deus	deus	PROPN	F1|grn1|casA|gen1|stNP	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	9	nsubj	_	_
9	sit	sum	VERB	N3|modB|tem1|gen6|stAV	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	csubj	_	SpaceAfter=No
10	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 csubj:pass	color:blue
1	ostensum	ostendo	VERB	L2|modM|tem4|grp1|casA|gen3|stAE	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
2	autem	autem	CCONJ	O4|stRL	_	1	cc	_	_
3	est	sum	AUX	N3|modA|tem1|gen6|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux:pass	_	_
4	deum	deus	PROPN	F1|grn1|casD|gen1|stNP	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	7	nsubj	_	_
5	esse	sum	AUX	N3|modH|tem1|stAV	Tense=Pres|VerbForm=Inf|Voice=Act	7	cop	_	_
6	primam	primus	ADJ	A1|grn1|casD|gen2	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|NumType=Ord	7	amod	_	_
7	causam	causa	NOUN	A1|grn1|casD|gen2|vgr1|stAN	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	1	csubj:pass	_	SpaceAfter=No
8	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 csubj:pass	color:blue
1	ostensum	ostendo	VERB	L2|modM|tem4|grp1|casA|gen3|stAE	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
2	autem	autem	CCONJ	O4|stRL	_	1	cc	_	_
3	est	sum	AUX	N3|modA|tem1|gen6|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux:pass	_	_
4	deum	deus	PROPN	F1|grn1|casD|gen1|stNP	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	7	nsubj	_	_
5	esse	sum	AUX	N3|modH|tem1|stAV	Tense=Pres|VerbForm=Inf|Voice=Act	7	cop	_	_
6	omnino	omnino	ADV	O4|stRL	_	7	advmod:emph	_	_
7	immutabilem	immutabilis	ADJ	C1|grn1|casD|gen1|stAN	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	1	csubj:pass	_	SpaceAfter=No
8	.	.	PUNCT	Punc	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin-PROIEL)

This relation is a language-specific subtype of [csubj]().

174 nodes (0%) are attached to their parents as `csubj:pass`.

143 instances of `csubj:pass` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.21264367816092.

The following 9 pairs of parts of speech are connected with `csubj:pass`: [la-pos/VERB]()-[la-pos/VERB]() (140; 80% instances), [la-pos/VERB]()-[la-pos/ADJ]() (9; 5% instances), [la-pos/VERB]()-[la-pos/SCONJ]() (9; 5% instances), [la-pos/VERB]()-[la-pos/AUX]() (5; 3% instances), [la-pos/VERB]()-[la-pos/NOUN]() (5; 3% instances), [la-pos/VERB]()-[la-pos/ADV]() (2; 1% instances), [la-pos/VERB]()-[la-pos/PRON]() (2; 1% instances), [la-pos/VERB]()-[la-pos/PROPN]() (1; 1% instances), [la-pos/VERB]()-[la-pos/X]() (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 csubj:pass	color:blue
1	factum	facio	VERB	V-	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	ref=ACTS_9.37
2	est	sum	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux:pass	_	ref=ACTS_9.37
3	autem	autem	ADV	Df	_	1	discourse	_	ref=ACTS_9.37
4	in	in	ADP	R-	_	5	case	_	ref=ACTS_9.37
5	diebus	dies	NOUN	Nb	Case=Abl|Gender=Fem,Masc|Number=Plur	1	obl	_	ref=ACTS_9.37
6	illis	ille	DET	Pd	Case=Abl|Number=Plur	5	det	_	ref=ACTS_9.37
7	ut	ut	SCONJ	G-	_	9	mark	_	ref=ACTS_9.37
8	infirmata	infirmo	VERB	V-	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	9	advcl	_	ref=ACTS_9.37
9	moreretur	morior	VERB	V-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	1	csubj:pass	_	ref=ACTS_9.37

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 csubj:pass	color:blue
1	et	et	CCONJ	C-	_	2	cc	_	ref=LUKE_9.18
2	factum	facio	VERB	V-	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	ref=LUKE_9.18
3	est	sum	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	aux:pass	_	ref=LUKE_9.18
4	cum	cum	SCONJ	G-	_	7	mark	_	ref=LUKE_9.18
5	solus	solus	ADJ	A-	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	7	advmod	_	ref=LUKE_9.18
6	esset	sum	AUX	V-	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	7	cop	_	ref=LUKE_9.18
7	orans	oro	VERB	V-	Case=Nom|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	2	advcl	_	ref=LUKE_9.18
8	erant	sum	AUX	V-	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	10	cop	_	ref=LUKE_9.18
9	cum	cum	ADP	R-	_	10	case	_	ref=LUKE_9.18
10	illo	ille	ADJ	Pd	Case=Abl|Gender=Masc|Number=Sing	2	csubj:pass	_	ref=LUKE_9.18
11	et	et	ADV	Df	_	12	discourse	_	ref=LUKE_9.18
12	discipuli	discipulus	NOUN	Nb	Case=Nom|Gender=Masc|Number=Plur	10	nsubj	_	ref=LUKE_9.18

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj:pass	color:blue
1	scriptum	scribo	VERB	V-	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	ref=LUKE_4.4
2	est	sum	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux:pass	_	ref=LUKE_4.4
3	quia	quia	SCONJ	G-	_	1	csubj:pass	_	ref=LUKE_4.4

~~~


