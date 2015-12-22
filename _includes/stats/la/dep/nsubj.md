

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

20474 nodes (8%) are attached to their parents as `nsubj`.

16608 instances of `nsubj` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.29852495848393.

The following 53 pairs of parts of speech are connected with `nsubj`: [la-pos/VERB]()-[la-pos/NOUN]() (9268; 45% instances), [la-pos/VERB]()-[la-pos/PRON]() (4683; 23% instances), [la-pos/NOUN]()-[la-pos/NOUN]() (1871; 9% instances), [la-pos/NOUN]()-[la-pos/PRON]() (1094; 5% instances), [la-pos/ADJ]()-[la-pos/NOUN]() (1075; 5% instances), [la-pos/ADJ]()-[la-pos/PRON]() (700; 3% instances), [la-pos/VERB]()-[la-pos/ADJ]() (524; 3% instances), [la-pos/PRON]()-[la-pos/NOUN]() (377; 2% instances), [la-pos/VERB]()-[la-pos/DET]() (126; 1% instances), [la-pos/NUM]()-[la-pos/NOUN]() (91; 0% instances), [la-pos/VERB]()-[la-pos/NUM]() (84; 0% instances), [la-pos/PRON]()-[la-pos/PRON]() (82; 0% instances), [la-pos/VERB]()-[la-pos/VERB]() (78; 0% instances), [la-pos/ADJ]()-[la-pos/ADJ]() (66; 0% instances), [la-pos/NOUN]()-[la-pos/ADJ]() (62; 0% instances), [la-pos/ADV]()-[la-pos/NOUN]() (42; 0% instances), [la-pos/ADJ]()-[la-pos/VERB]() (32; 0% instances), [la-pos/NUM]()-[la-pos/PRON]() (23; 0% instances), [la-pos/ADJ]()-[la-pos/DET]() (19; 0% instances), [la-pos/NOUN]()-[la-pos/NUM]() (16; 0% instances), [la-pos/CONJ]()-[la-pos/NOUN]() (15; 0% instances), [la-pos/NOUN]()-[la-pos/DET]() (14; 0% instances), [la-pos/PRON]()-[la-pos/ADJ]() (13; 0% instances), [la-pos/SCONJ]()-[la-pos/NOUN]() (12; 0% instances), [la-pos/NOUN]()-[la-pos/VERB]() (10; 0% instances), [la-pos/ADJ]()-[la-pos/NUM]() (8; 0% instances), [la-pos/PUNCT]()-[la-pos/NOUN]() (8; 0% instances), [la-pos/VERB]()-[la-pos/X]() (8; 0% instances), [la-pos/VERB]()-[la-pos/ADV]() (7; 0% instances), [la-pos/ADV]()-[la-pos/PRON]() (6; 0% instances), [la-pos/CONJ]()-[la-pos/VERB]() (6; 0% instances), [la-pos/DET]()-[la-pos/PRON]() (5; 0% instances), [la-pos/NUM]()-[la-pos/DET]() (5; 0% instances), [la-pos/PUNCT]()-[la-pos/PRON]() (5; 0% instances), [la-pos/ADV]()-[la-pos/ADJ]() (4; 0% instances), [la-pos/CONJ]()-[la-pos/PRON]() (4; 0% instances), [la-pos/X]()-[la-pos/PRON]() (4; 0% instances), [la-pos/ADV]()-[la-pos/VERB]() (3; 0% instances), [la-pos/SCONJ]()-[la-pos/PRON]() (3; 0% instances), [la-pos/NOUN]()-[la-pos/ADV]() (2; 0% instances), [la-pos/NUM]()-[la-pos/ADJ]() (2; 0% instances), [la-pos/PRON]()-[la-pos/NUM]() (2; 0% instances), [la-pos/PRON]()-[la-pos/VERB]() (2; 0% instances), [la-pos/PUNCT]()-[la-pos/NUM]() (2; 0% instances), [la-pos/VERB]()-[la-pos/ADP]() (2; 0% instances), [la-pos/X]()-[la-pos/NOUN]() (2; 0% instances), [la-pos/AUX]()-[la-pos/NOUN]() (1; 0% instances), [la-pos/DET]()-[la-pos/DET]() (1; 0% instances), [la-pos/DET]()-[la-pos/NOUN]() (1; 0% instances), [la-pos/INTJ]()-[la-pos/PRON]() (1; 0% instances), [la-pos/SCONJ]()-[la-pos/ADJ]() (1; 0% instances), [la-pos/VERB]()-[la-pos/CONJ]() (1; 0% instances), [la-pos/X]()-[la-pos/VERB]() (1; 0% instances).


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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nsubj	color:blue
1	Diomedes	Diomedes1	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
2	et	et1	CONJ	c--------	_	1	cc	_	_
3	Ganymedes	Ganymedes1	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	1	conj	_	_
4	duo	duo1	ADJ	a-p---mn-	Case=Nom|Gender=Masc|Number=Plur	5	amod	_	_
5	fratres	frater1	NOUN	n-p---mn-	Case=Nom|Gender=Masc|Number=Plur	0	root	_	_
6	fuerunt	sum1	VERB	v3pria---	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	cop	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin-PROIEL)

This relation is universal.

33474 nodes (20%) are attached to their parents as `nsubj`.

26164 instances of `nsubj` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.16075162812929.

The following 82 pairs of parts of speech are connected with `nsubj`: [la-pos/VERB]()-[la-pos/NOUN]() (12737; 38% instances), [la-pos/VERB]()-[la-pos/PRON]() (8514; 25% instances), [la-pos/NOUN]()-[la-pos/NOUN]() (2107; 6% instances), [la-pos/NOUN]()-[la-pos/PRON]() (1505; 4% instances), [la-pos/VERB]()-[la-pos/PROPN]() (1499; 4% instances), [la-pos/ADJ]()-[la-pos/NOUN]() (1460; 4% instances), [la-pos/VERB]()-[la-pos/ADJ]() (1443; 4% instances), [la-pos/ADJ]()-[la-pos/PRON]() (1007; 3% instances), [la-pos/PRON]()-[la-pos/NOUN]() (486; 1% instances), [la-pos/VERB]()-[la-pos/VERB]() (324; 1% instances), [la-pos/ADV]()-[la-pos/NOUN]() (287; 1% instances), [la-pos/NOUN]()-[la-pos/ADJ]() (217; 1% instances), [la-pos/PROPN]()-[la-pos/PRON]() (196; 1% instances), [la-pos/PRON]()-[la-pos/PRON]() (192; 1% instances), [la-pos/ADJ]()-[la-pos/ADJ]() (178; 1% instances), [la-pos/VERB]()-[la-pos/NUM]() (162; 0% instances), [la-pos/VERB]()-[la-pos/DET]() (126; 0% instances), [la-pos/NUM]()-[la-pos/NOUN]() (106; 0% instances), [la-pos/ADV]()-[la-pos/PRON]() (97; 0% instances), [la-pos/ADJ]()-[la-pos/VERB]() (82; 0% instances), [la-pos/NOUN]()-[la-pos/PROPN]() (78; 0% instances), [la-pos/ADV]()-[la-pos/ADJ]() (43; 0% instances), [la-pos/PRON]()-[la-pos/ADJ]() (43; 0% instances), [la-pos/NOUN]()-[la-pos/NUM]() (38; 0% instances), [la-pos/NOUN]()-[la-pos/VERB]() (36; 0% instances), [la-pos/ADJ]()-[la-pos/PROPN]() (32; 0% instances), [la-pos/CONJ]()-[la-pos/NOUN]() (32; 0% instances), [la-pos/PROPN]()-[la-pos/NOUN]() (32; 0% instances), [la-pos/NUM]()-[la-pos/PRON]() (30; 0% instances), [la-pos/ADV]()-[la-pos/PROPN]() (26; 0% instances), [la-pos/SCONJ]()-[la-pos/NOUN]() (21; 0% instances), [la-pos/VERB]()-[la-pos/ADV]() (20; 0% instances), [la-pos/VERB]()-[la-pos/X]() (20; 0% instances), [la-pos/ADJ]()-[la-pos/DET]() (19; 0% instances), [la-pos/ADV]()-[la-pos/VERB]() (19; 0% instances), [la-pos/PROPN]()-[la-pos/PROPN]() (17; 0% instances), [la-pos/PRON]()-[la-pos/VERB]() (16; 0% instances), [la-pos/X]()-[la-pos/X]() (16; 0% instances), [la-pos/ADJ]()-[la-pos/NUM]() (14; 0% instances), [la-pos/NOUN]()-[la-pos/DET]() (14; 0% instances), [la-pos/PROPN]()-[la-pos/ADJ]() (14; 0% instances), [la-pos/PRON]()-[la-pos/PROPN]() (12; 0% instances), [la-pos/SCONJ]()-[la-pos/PRON]() (11; 0% instances), [la-pos/X]()-[la-pos/PRON]() (11; 0% instances), [la-pos/CONJ]()-[la-pos/ADJ]() (9; 0% instances), [la-pos/CONJ]()-[la-pos/VERB]() (8; 0% instances), [la-pos/PUNCT]()-[la-pos/NOUN]() (8; 0% instances), [la-pos/ADJ]()-[la-pos/X]() (7; 0% instances), [la-pos/CONJ]()-[la-pos/PRON]() (7; 0% instances), [la-pos/NOUN]()-[la-pos/ADV]() (7; 0% instances), [la-pos/X]()-[la-pos/ADJ]() (6; 0% instances), [la-pos/ADV]()-[la-pos/NUM]() (5; 0% instances), [la-pos/CONJ]()-[la-pos/PROPN]() (5; 0% instances), [la-pos/DET]()-[la-pos/PRON]() (5; 0% instances), [la-pos/NUM]()-[la-pos/DET]() (5; 0% instances), [la-pos/PUNCT]()-[la-pos/PRON]() (5; 0% instances), [la-pos/NUM]()-[la-pos/ADJ]() (4; 0% instances), [la-pos/NUM]()-[la-pos/VERB]() (4; 0% instances), [la-pos/VERB]()-[la-pos/INTJ]() (4; 0% instances), [la-pos/X]()-[la-pos/NOUN]() (4; 0% instances), [la-pos/ADV]()-[la-pos/X]() (3; 0% instances), [la-pos/NOUN]()-[la-pos/X]() (3; 0% instances), [la-pos/PRON]()-[la-pos/ADV]() (3; 0% instances), [la-pos/PRON]()-[la-pos/NUM]() (3; 0% instances), [la-pos/SCONJ]()-[la-pos/ADJ]() (3; 0% instances), [la-pos/X]()-[la-pos/VERB]() (3; 0% instances), [la-pos/ADJ]()-[la-pos/ADV]() (2; 0% instances), [la-pos/ADV]()-[la-pos/ADV]() (2; 0% instances), [la-pos/INTJ]()-[la-pos/PRON]() (2; 0% instances), [la-pos/NUM]()-[la-pos/PROPN]() (2; 0% instances), [la-pos/PROPN]()-[la-pos/VERB]() (2; 0% instances), [la-pos/PUNCT]()-[la-pos/NUM]() (2; 0% instances), [la-pos/SCONJ]()-[la-pos/PROPN]() (2; 0% instances), [la-pos/VERB]()-[la-pos/ADP]() (2; 0% instances), [la-pos/ADP]()-[la-pos/NOUN]() (1; 0% instances), [la-pos/ADP]()-[la-pos/PRON]() (1; 0% instances), [la-pos/ADP]()-[la-pos/VERB]() (1; 0% instances), [la-pos/AUX]()-[la-pos/NOUN]() (1; 0% instances), [la-pos/DET]()-[la-pos/DET]() (1; 0% instances), [la-pos/DET]()-[la-pos/NOUN]() (1; 0% instances), [la-pos/PRON]()-[la-pos/X]() (1; 0% instances), [la-pos/VERB]()-[la-pos/CONJ]() (1; 0% instances).


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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nsubj	color:blue
1	Diomedes	Diomedes1	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
2	et	et1	CONJ	c--------	_	1	cc	_	_
3	Ganymedes	Ganymedes1	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	1	conj	_	_
4	duo	duo1	ADJ	a-p---mn-	Case=Nom|Gender=Masc|Number=Plur	5	amod	_	_
5	fratres	frater1	NOUN	n-p---mn-	Case=Nom|Gender=Masc|Number=Plur	0	root	_	_
6	fuerunt	sum1	VERB	v3pria---	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	cop	_	_

~~~


