

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin)

This relation is universal.

3337 nodes (7%) are attached to their parents as `nsubj`.

2410 instances of `nsubj` (72%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.54929577464789.

The following 38 pairs of parts of speech are connected with `nsubj`: [la-pos/VERB]()-[la-pos/NOUN]() (1669; 50% instances), [la-pos/VERB]()-[la-pos/PRON]() (938; 28% instances), [la-pos/VERB]()-[la-pos/ADJ]() (157; 5% instances), [la-pos/ADJ]()-[la-pos/NOUN]() (127; 4% instances), [la-pos/VERB]()-[la-pos/VERB]() (77; 2% instances), [la-pos/NOUN]()-[la-pos/PRON]() (68; 2% instances), [la-pos/NOUN]()-[la-pos/NOUN]() (66; 2% instances), [la-pos/ADJ]()-[la-pos/PRON]() (60; 2% instances), [la-pos/ADJ]()-[la-pos/VERB]() (31; 1% instances), [la-pos/ADV]()-[la-pos/NOUN]() (22; 1% instances), [la-pos/PRON]()-[la-pos/NOUN]() (20; 1% instances), [la-pos/SCONJ]()-[la-pos/NOUN]() (12; 0% instances), [la-pos/ADJ]()-[la-pos/ADJ]() (10; 0% instances), [la-pos/NOUN]()-[la-pos/VERB]() (10; 0% instances), [la-pos/VERB]()-[la-pos/NUM]() (9; 0% instances), [la-pos/CONJ]()-[la-pos/VERB]() (6; 0% instances), [la-pos/CONJ]()-[la-pos/NOUN]() (5; 0% instances), [la-pos/NOUN]()-[la-pos/ADJ]() (5; 0% instances), [la-pos/PRON]()-[la-pos/PRON]() (5; 0% instances), [la-pos/PUNCT]()-[la-pos/NOUN]() (5; 0% instances), [la-pos/VERB]()-[la-pos/X]() (5; 0% instances), [la-pos/PUNCT]()-[la-pos/PRON]() (4; 0% instances), [la-pos/ADV]()-[la-pos/PRON]() (3; 0% instances), [la-pos/ADV]()-[la-pos/VERB]() (3; 0% instances), [la-pos/SCONJ]()-[la-pos/PRON]() (3; 0% instances), [la-pos/PRON]()-[la-pos/VERB]() (2; 0% instances), [la-pos/PUNCT]()-[la-pos/NUM]() (2; 0% instances), [la-pos/VERB]()-[la-pos/ADV]() (2; 0% instances), [la-pos/X]()-[la-pos/NOUN]() (2; 0% instances), [la-pos/ADV]()-[la-pos/ADJ]() (1; 0% instances), [la-pos/CONJ]()-[la-pos/PRON]() (1; 0% instances), [la-pos/INTJ]()-[la-pos/PRON]() (1; 0% instances), [la-pos/NUM]()-[la-pos/ADJ]() (1; 0% instances), [la-pos/PRON]()-[la-pos/NUM]() (1; 0% instances), [la-pos/SCONJ]()-[la-pos/ADJ]() (1; 0% instances), [la-pos/VERB]()-[la-pos/CONJ]() (1; 0% instances), [la-pos/X]()-[la-pos/PRON]() (1; 0% instances), [la-pos/X]()-[la-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nsubj	color:blue
1	iam	jam1	ADV	d--------	_	2	advmod	_	_
2	scies	scio1	VERB	v2sfia---	Mood=Ind|Number=Sing|Person=2|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	_
3	hoc	hic1	PRON	p-s---na-	Case=Acc|Gender=Neut|Number=Sing	4	amod	_	_
4	ferrum	ferrum1	NOUN	n-s---na-	Case=Acc|Gender=Neut|Number=Sing	6	nsubj	_	_
5	fidem	fides1	NOUN	n-s---fa-	Case=Acc|Gender=Fem|Number=Sing	6	dobj	_	_
6	habere	habeo1	VERB	v--pna---	Tense=Pres|VerbForm=Inf|Voice=Act	2	ccomp	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 9 nsubj	color:blue
1	Ergo	ergo1	ADV	d--------	_	3	advmod	_	_
2	aut	aut1	CONJ	c--------	_	3	advmod	_	_
3	tace	taceo1	VERB	v2spma---	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	aut	aut1	CONJ	c--------	_	3	cc	_	_
5	meliorem	bonus1	ADJ	a-s---mac	Case=Acc|Degree=Cmp|Gender=Masc|Number=Sing	7	dobj	_	_
6	noli	nolo1	VERB	v2spma---	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	_
7	molestare	molesto1	VERB	v---na---	VerbForm=Inf|Voice=Act	6	xcomp	_	_
8	,	comma1	PUNCT	u--------	_	13	punct	_	_
9	qui	qui1	PRON	p-s---mn-	Case=Nom|Gender=Masc|Number=Sing	13	nsubj	_	_
10	te	tu1	PRON	p-s---ma-	Case=Acc|Gender=Masc|Number=Sing	11	nsubjpass	_	_
11	natum	natus1	VERB	v-srppma-	Aspect=Perf|Case=Acc|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	13	dobj	_	_
12	non	non1	ADV	d--------	_	13	advmod	_	_
13	putat	puto1	VERB	v3spia---	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	acl	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj	color:blue
1	alius	Alius1	ADJ	a-s---mn-	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
2	alia	alius2	PRON	p-p---na-	Case=Acc|Gender=Neut|Number=Plur	4	dobj	_	_
3	vobis	tu1	PRON	p-p---md-	Case=Dat|Gender=Masc|Number=Plur	4	iobj	_	_
4	dicet	dico2	VERB	v3sfia---	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin-ITT)

This relation is universal.

17137 nodes (7%) are attached to their parents as `nsubj`.

14198 instances of `nsubj` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.24969364532882.

The following 41 pairs of parts of speech are connected with `nsubj`: [la-pos/VERB]()-[la-pos/NOUN]() (7599; 44% instances), [la-pos/VERB]()-[la-pos/PRON]() (3745; 22% instances), [la-pos/NOUN]()-[la-pos/NOUN]() (1805; 11% instances), [la-pos/NOUN]()-[la-pos/PRON]() (1026; 6% instances), [la-pos/ADJ]()-[la-pos/NOUN]() (948; 6% instances), [la-pos/ADJ]()-[la-pos/PRON]() (640; 4% instances), [la-pos/VERB]()-[la-pos/ADJ]() (367; 2% instances), [la-pos/PRON]()-[la-pos/NOUN]() (357; 2% instances), [la-pos/VERB]()-[la-pos/DET]() (126; 1% instances), [la-pos/NUM]()-[la-pos/NOUN]() (91; 1% instances), [la-pos/PRON]()-[la-pos/PRON]() (77; 0% instances), [la-pos/VERB]()-[la-pos/NUM]() (75; 0% instances), [la-pos/NOUN]()-[la-pos/ADJ]() (57; 0% instances), [la-pos/ADJ]()-[la-pos/ADJ]() (56; 0% instances), [la-pos/NUM]()-[la-pos/PRON]() (23; 0% instances), [la-pos/ADV]()-[la-pos/NOUN]() (20; 0% instances), [la-pos/ADJ]()-[la-pos/DET]() (19; 0% instances), [la-pos/NOUN]()-[la-pos/NUM]() (16; 0% instances), [la-pos/NOUN]()-[la-pos/DET]() (14; 0% instances), [la-pos/PRON]()-[la-pos/ADJ]() (13; 0% instances), [la-pos/CONJ]()-[la-pos/NOUN]() (10; 0% instances), [la-pos/ADJ]()-[la-pos/NUM]() (8; 0% instances), [la-pos/DET]()-[la-pos/PRON]() (5; 0% instances), [la-pos/NUM]()-[la-pos/DET]() (5; 0% instances), [la-pos/VERB]()-[la-pos/ADV]() (5; 0% instances), [la-pos/ADV]()-[la-pos/ADJ]() (3; 0% instances), [la-pos/ADV]()-[la-pos/PRON]() (3; 0% instances), [la-pos/CONJ]()-[la-pos/PRON]() (3; 0% instances), [la-pos/PUNCT]()-[la-pos/NOUN]() (3; 0% instances), [la-pos/VERB]()-[la-pos/X]() (3; 0% instances), [la-pos/X]()-[la-pos/PRON]() (3; 0% instances), [la-pos/NOUN]()-[la-pos/ADV]() (2; 0% instances), [la-pos/VERB]()-[la-pos/ADP]() (2; 0% instances), [la-pos/ADJ]()-[la-pos/VERB]() (1; 0% instances), [la-pos/AUX]()-[la-pos/NOUN]() (1; 0% instances), [la-pos/DET]()-[la-pos/DET]() (1; 0% instances), [la-pos/DET]()-[la-pos/NOUN]() (1; 0% instances), [la-pos/NUM]()-[la-pos/ADJ]() (1; 0% instances), [la-pos/PRON]()-[la-pos/NUM]() (1; 0% instances), [la-pos/PUNCT]()-[la-pos/PRON]() (1; 0% instances), [la-pos/VERB]()-[la-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nsubj	color:blue
1	nam	nam	ADV	O4	_	7	advmod:emph	_	_
2	primo	primus	ADJ	B1|grn1|casG	Case=Loc|Degree=Pos|Number=Sing|NumType=Ord	7	advmod	_	_
3	et	et	CONJ	O4	_	2	cc	_	_
4	per	per	ADP	S4	AdpType=Prep	5	case	_	_
5	se	sui	PRON	F1|grn1|casD|gen3	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|PronType=Prs|Reflex=Yes	2	nmod	_	_
6	intellectus	intellectus	NOUN	D1|grn1|casA|gen1	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	7	nsubj	_	_
7	movet	moveo	VERB	K3|modA|tem1|gen6|vgr1	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	voluntatem	voluntas	NOUN	C1|grn1|casD|gen2|vgr1	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	7	dobj	_	_
9	:	:	PUNCT	Punc	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 nsubj	color:blue
1	ultimus	ulterior	ADJ	B1|grn3|casA|gen1	Case=Nom|Degree=Sup|Gender=Masc|Number=Sing	2	amod	_	_
2	finis	finis	NOUN	C1|grn1|casA|gen1	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	4	nsubj	_	_
3	est	sum	VERB	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
4	nobilissimum	nobilis	ADJ	B1|grn3|casA|gen3	Case=Nom|Degree=Sup|Gender=Neut|Number=Sing	0	root	_	_
5	eorum	is	PRON	F1|grn1|casK|gen3	Case=Gen|Degree=Pos|Gender=Neut|Number=Plur|PronType=Dem,Prs	4	nmod	_	_
6	quae	qui	PRON	F1|grn1|casJ|gen3|vgr1	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur|PronType=Rel	9	nsubj	_	_
7	ad	ad	ADP	S4	AdpType=Prep	8	case	_	_
8	rem	res	NOUN	E1|grn1|casD|gen2	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	9	dobj	_	_
9	pertinent	pertineo	VERB	K3|modA|tem1|gen9	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	acl	_	_
10	:	:	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 nsubj	color:blue
1	unde	unde	ADV	O4	_	2	cc	_	_
2	apparet	appareo	VERB	K3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	intellectum	intellectus	NOUN	D1|grn1|casD|gen1	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	6	nsubj	_	_
4	simpliciter	simplex	ADJ	C1|grn1|casG	Case=Loc|Degree=Pos|Number=Sing	6	advmod	_	_
5	esse	sum	VERB	N3|modH|tem1	Tense=Pres|VerbForm=Inf|Voice=Act	6	cop	_	_
6	altiorem	altus	NOUN	C1|grn2|casD|gen1	Case=Acc|Degree=Cmp|Gender=Masc|Number=Sing	2	csubj	_	_
7	voluntate	voluntas	NOUN	C1|grn1|casF|gen2|vgr1	Case=Abl|Degree=Pos|Gender=Fem|Number=Sing	6	nmod	_	_
8	:	:	PUNCT	Punc	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin-PROIEL)

This relation is universal.

13000 nodes (8%) are attached to their parents as `nsubj`.

9556 instances of `nsubj` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.94376923076923.

The following 69 pairs of parts of speech are connected with `nsubj`: [la-pos/VERB]()-[la-pos/PRON]() (3831; 29% instances), [la-pos/VERB]()-[la-pos/NOUN]() (3469; 27% instances), [la-pos/VERB]()-[la-pos/PROPN]() (1499; 12% instances), [la-pos/VERB]()-[la-pos/ADJ]() (919; 7% instances), [la-pos/NOUN]()-[la-pos/PRON]() (411; 3% instances), [la-pos/ADJ]()-[la-pos/NOUN]() (385; 3% instances), [la-pos/ADJ]()-[la-pos/PRON]() (307; 2% instances), [la-pos/VERB]()-[la-pos/VERB]() (246; 2% instances), [la-pos/ADV]()-[la-pos/NOUN]() (245; 2% instances), [la-pos/NOUN]()-[la-pos/NOUN]() (236; 2% instances), [la-pos/PROPN]()-[la-pos/PRON]() (196; 2% instances), [la-pos/NOUN]()-[la-pos/ADJ]() (155; 1% instances), [la-pos/ADJ]()-[la-pos/ADJ]() (112; 1% instances), [la-pos/PRON]()-[la-pos/PRON]() (110; 1% instances), [la-pos/PRON]()-[la-pos/NOUN]() (109; 1% instances), [la-pos/ADV]()-[la-pos/PRON]() (91; 1% instances), [la-pos/NOUN]()-[la-pos/PROPN]() (78; 1% instances), [la-pos/VERB]()-[la-pos/NUM]() (78; 1% instances), [la-pos/ADJ]()-[la-pos/VERB]() (50; 0% instances), [la-pos/ADV]()-[la-pos/ADJ]() (39; 0% instances), [la-pos/ADJ]()-[la-pos/PROPN]() (32; 0% instances), [la-pos/PROPN]()-[la-pos/NOUN]() (32; 0% instances), [la-pos/PRON]()-[la-pos/ADJ]() (30; 0% instances), [la-pos/ADV]()-[la-pos/PROPN]() (26; 0% instances), [la-pos/NOUN]()-[la-pos/VERB]() (26; 0% instances), [la-pos/NOUN]()-[la-pos/NUM]() (22; 0% instances), [la-pos/CONJ]()-[la-pos/NOUN]() (17; 0% instances), [la-pos/PROPN]()-[la-pos/PROPN]() (17; 0% instances), [la-pos/ADV]()-[la-pos/VERB]() (16; 0% instances), [la-pos/X]()-[la-pos/X]() (16; 0% instances), [la-pos/NUM]()-[la-pos/NOUN]() (15; 0% instances), [la-pos/PRON]()-[la-pos/VERB]() (14; 0% instances), [la-pos/PROPN]()-[la-pos/ADJ]() (14; 0% instances), [la-pos/VERB]()-[la-pos/ADV]() (13; 0% instances), [la-pos/PRON]()-[la-pos/PROPN]() (12; 0% instances), [la-pos/VERB]()-[la-pos/X]() (12; 0% instances), [la-pos/CONJ]()-[la-pos/ADJ]() (9; 0% instances), [la-pos/SCONJ]()-[la-pos/NOUN]() (9; 0% instances), [la-pos/SCONJ]()-[la-pos/PRON]() (8; 0% instances), [la-pos/ADJ]()-[la-pos/X]() (7; 0% instances), [la-pos/NUM]()-[la-pos/PRON]() (7; 0% instances), [la-pos/X]()-[la-pos/PRON]() (7; 0% instances), [la-pos/ADJ]()-[la-pos/NUM]() (6; 0% instances), [la-pos/X]()-[la-pos/ADJ]() (6; 0% instances), [la-pos/ADV]()-[la-pos/NUM]() (5; 0% instances), [la-pos/CONJ]()-[la-pos/PROPN]() (5; 0% instances), [la-pos/NOUN]()-[la-pos/ADV]() (5; 0% instances), [la-pos/NUM]()-[la-pos/VERB]() (4; 0% instances), [la-pos/VERB]()-[la-pos/INTJ]() (4; 0% instances), [la-pos/ADV]()-[la-pos/X]() (3; 0% instances), [la-pos/CONJ]()-[la-pos/PRON]() (3; 0% instances), [la-pos/NOUN]()-[la-pos/X]() (3; 0% instances), [la-pos/PRON]()-[la-pos/ADV]() (3; 0% instances), [la-pos/ADJ]()-[la-pos/ADV]() (2; 0% instances), [la-pos/ADV]()-[la-pos/ADV]() (2; 0% instances), [la-pos/CONJ]()-[la-pos/VERB]() (2; 0% instances), [la-pos/NUM]()-[la-pos/ADJ]() (2; 0% instances), [la-pos/NUM]()-[la-pos/PROPN]() (2; 0% instances), [la-pos/PROPN]()-[la-pos/VERB]() (2; 0% instances), [la-pos/SCONJ]()-[la-pos/ADJ]() (2; 0% instances), [la-pos/SCONJ]()-[la-pos/PROPN]() (2; 0% instances), [la-pos/X]()-[la-pos/NOUN]() (2; 0% instances), [la-pos/X]()-[la-pos/VERB]() (2; 0% instances), [la-pos/ADP]()-[la-pos/NOUN]() (1; 0% instances), [la-pos/ADP]()-[la-pos/PRON]() (1; 0% instances), [la-pos/ADP]()-[la-pos/VERB]() (1; 0% instances), [la-pos/INTJ]()-[la-pos/PRON]() (1; 0% instances), [la-pos/PRON]()-[la-pos/NUM]() (1; 0% instances), [la-pos/PRON]()-[la-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 nsubj	color:blue
1	ex	ex	ADP	R-	_	2	case	_	_
2	his	hic	ADJ	Pd	Case=Abl|Gender=Masc|Number=Plur	8	nsubj	_	_
3	qui	qui	PRON	Pr	Case=Nom|Gender=Masc|Number=Plur|PronType=Rel	6	nsubj	_	_
4	arma	arma	NOUN	Nb	Case=Acc|Gender=Neut|Number=Plur	5	dobj	_	_
5	ferre	fero	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Act	6	xcomp	_	_
6	possent	possum	VERB	V-	Aspect=Imp|Mood=Sub|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	acl	_	_
7	ad	ad	ADV	Df	_	8	advmod	_	_
8	milia	mille	NUM	Ma	Case=Acc|Gender=Neut|Number=Plur	0	root	_	_
9	nonaginta.duo	nonaginta.duo	NUM	Ma	Case=Acc|Gender=Neut|Number=Plur	8	nummod	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 nsubj	color:blue
1	Hostes	hostis	NOUN	Nb	Case=Nom|Gender=Masc|Number=Plur	8	nsubj	_	_
2	item	item	ADV	Df	_	8	advmod	_	_
3	suas	suus	PRON	Pt	Case=Acc|Gender=Fem|Number=Plur|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes	4	nmod	_	_
4	copias	copia	NOUN	Nb	Case=Acc|Gender=Fem|Number=Plur	8	dobj	_	_
5	ex	ex	ADP	R-	_	6	case	_	_
6	castris	castra	NOUN	Nb	Case=Abl|Gender=Neut|Number=Plur	7	iobj	_	_
7	eductas	educo#1	VERB	V-	Aspect=Perf|Case=Acc|Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	8	advcl	_	_
8	instruxerunt	instruo	VERB	V-	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 nsubj	color:blue
1	Cognito	cognosco	VERB	V-	Aspect=Perf|Case=Abl|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	8	advcl	_	_
2	Caesaris	Caesar	PROPN	Ne	Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	_
3	adventu	adventus	NOUN	Nb	Case=Abl|Gender=Masc|Number=Sing	1	nsubjpass	_	_
4	Ariovistus	Ariovistus	PROPN	Ne	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	_
5	legatos	legatus	NOUN	Nb	Case=Acc|Gender=Masc|Number=Plur	8	dobj	_	_
6	ad	ad	ADP	R-	_	7	case	_	_
7	eum	is	PRON	Pp	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	iobj	_	_
8	mittit	mitto	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_

~~~


