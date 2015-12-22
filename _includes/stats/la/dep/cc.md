

--------------------------------------------------------------------------------

## Treebank Statistics

This relation is universal.

2506 nodes (5%) are attached to their parents as `cc`.

2000 instances of `cc` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.16081404628891.

The following 24 pairs of parts of speech are connected with `cc`: [la-pos/VERB]()-[la-pos/CONJ]() (1506; 60% instances), [la-pos/NOUN]()-[la-pos/CONJ]() (696; 28% instances), [la-pos/ADJ]()-[la-pos/CONJ]() (201; 8% instances), [la-pos/PRON]()-[la-pos/CONJ]() (36; 1% instances), [la-pos/ADV]()-[la-pos/CONJ]() (26; 1% instances), [la-pos/VERB]()-[la-pos/ADV]() (8; 0% instances), [la-pos/VERB]()-[la-pos/X]() (7; 0% instances), [la-pos/CONJ]()-[la-pos/CONJ]() (3; 0% instances), [la-pos/INTJ]()-[la-pos/CONJ]() (3; 0% instances), [la-pos/NOUN]()-[la-pos/ADV]() (3; 0% instances), [la-pos/NUM]()-[la-pos/CONJ]() (3; 0% instances), [la-pos/VERB]()-[la-pos/PUNCT]() (2; 0% instances), [la-pos/ADJ]()-[la-pos/ADV]() (1; 0% instances), [la-pos/ADJ]()-[la-pos/NOUN]() (1; 0% instances), [la-pos/ADJ]()-[la-pos/PRON]() (1; 0% instances), [la-pos/ADJ]()-[la-pos/PUNCT]() (1; 0% instances), [la-pos/ADJ]()-[la-pos/X]() (1; 0% instances), [la-pos/ADP]()-[la-pos/CONJ]() (1; 0% instances), [la-pos/NOUN]()-[la-pos/X]() (1; 0% instances), [la-pos/VERB]()-[la-pos/ADJ]() (1; 0% instances), [la-pos/VERB]()-[la-pos/PRON]() (1; 0% instances), [la-pos/VERB]()-[la-pos/VERB]() (1; 0% instances), [la-pos/X]()-[la-pos/ADV]() (1; 0% instances), [la-pos/X]()-[la-pos/CONJ]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 cc	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cc	color:blue
1	Diomedes	Diomedes1	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
2	et	et1	CONJ	c--------	_	1	cc	_	_
3	Ganymedes	Ganymedes1	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	1	conj	_	_
4	duo	duo1	ADJ	a-p---mn-	Case=Nom|Gender=Masc|Number=Plur	5	amod	_	_
5	fratres	frater1	NOUN	n-p---mn-	Case=Nom|Gender=Masc|Number=Plur	0	root	_	_
6	fuerunt	sum1	VERB	v3pria---	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	cop	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 cc	color:blue
1	immo	immo1	ADV	d--------	_	2	advmod	_	_
2	certus	certus1	ADJ	a-s---mn-	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
3	est	sum1	VERB	v3spia---	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	_	_
4	et	et1	CONJ	c--------	_	2	cc	_	_
5	minime	minimus1	ADV	d--------	_	6	advmod	_	_
6	linguosus	linguosus1	ADJ	a-s---mn-	Case=Nom|Gender=Masc|Number=Sing	2	xcomp	_	_

~~~


