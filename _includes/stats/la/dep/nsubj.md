

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


