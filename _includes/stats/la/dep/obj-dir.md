

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin-PROIEL)

This relation is a language-specific subtype of [obj]().

11166 nodes (7%) are attached to their parents as `obj:dir`.

6050 instances of `obj:dir` (54%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.96856528747985.

The following 46 pairs of parts of speech are connected with `obj:dir`: [la-pos/VERB]()-[la-pos/NOUN]() (5140; 46% instances), [la-pos/VERB]()-[la-pos/PRON]() (3359; 30% instances), [la-pos/VERB]()-[la-pos/ADJ]() (1626; 15% instances), [la-pos/VERB]()-[la-pos/PROPN]() (429; 4% instances), [la-pos/VERB]()-[la-pos/VERB]() (258; 2% instances), [la-pos/VERB]()-[la-pos/NUM]() (56; 1% instances), [la-pos/ADV]()-[la-pos/NOUN]() (54; 0% instances), [la-pos/VERB]()-[la-pos/ADV]() (53; 0% instances), [la-pos/VERB]()-[la-pos/X]() (35; 0% instances), [la-pos/ADV]()-[la-pos/PRON]() (17; 0% instances), [la-pos/X]()-[la-pos/X]() (15; 0% instances), [la-pos/ADV]()-[la-pos/ADJ]() (12; 0% instances), [la-pos/NOUN]()-[la-pos/NOUN]() (11; 0% instances), [la-pos/ADV]()-[la-pos/VERB]() (10; 0% instances), [la-pos/ADV]()-[la-pos/PROPN]() (9; 0% instances), [la-pos/CCONJ]()-[la-pos/ADJ]() (9; 0% instances), [la-pos/VERB]()-[la-pos/AUX]() (9; 0% instances), [la-pos/CCONJ]()-[la-pos/NOUN]() (6; 0% instances), [la-pos/NOUN]()-[la-pos/PRON]() (5; 0% instances), [la-pos/PROPN]()-[la-pos/NOUN]() (5; 0% instances), [la-pos/PRON]()-[la-pos/ADJ]() (4; 0% instances), [la-pos/PRON]()-[la-pos/NOUN]() (4; 0% instances), [la-pos/CCONJ]()-[la-pos/PRON]() (3; 0% instances), [la-pos/PRON]()-[la-pos/PRON]() (3; 0% instances), [la-pos/X]()-[la-pos/ADJ]() (3; 0% instances), [la-pos/ADJ]()-[la-pos/NOUN]() (2; 0% instances), [la-pos/ADJ]()-[la-pos/PROPN]() (2; 0% instances), [la-pos/ADP]()-[la-pos/NOUN]() (2; 0% instances), [la-pos/ADP]()-[la-pos/PRON]() (2; 0% instances), [la-pos/ADV]()-[la-pos/X]() (2; 0% instances), [la-pos/AUX]()-[la-pos/NOUN]() (2; 0% instances), [la-pos/NOUN]()-[la-pos/NUM]() (2; 0% instances), [la-pos/PROPN]()-[la-pos/PROPN]() (2; 0% instances), [la-pos/SCONJ]()-[la-pos/NOUN]() (2; 0% instances), [la-pos/VERB]()-[la-pos/INTJ]() (2; 0% instances), [la-pos/ADJ]()-[la-pos/ADV]() (1; 0% instances), [la-pos/ADJ]()-[la-pos/PRON]() (1; 0% instances), [la-pos/ADV]()-[la-pos/ADV]() (1; 0% instances), [la-pos/ADV]()-[la-pos/INTJ]() (1; 0% instances), [la-pos/CCONJ]()-[la-pos/PROPN]() (1; 0% instances), [la-pos/CCONJ]()-[la-pos/VERB]() (1; 0% instances), [la-pos/CCONJ]()-[la-pos/X]() (1; 0% instances), [la-pos/NOUN]()-[la-pos/ADJ]() (1; 0% instances), [la-pos/NOUN]()-[la-pos/VERB]() (1; 0% instances), [la-pos/SCONJ]()-[la-pos/PRON]() (1; 0% instances), [la-pos/X]()-[la-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 obj:dir	color:blue
1	beati	beatus	ADJ	A-	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	0	root	_	ref=MATT_5.4
2	mites	mitis	ADJ	A-	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	1	nsubj	_	ref=MATT_5.4
3	quoniam	quoniam	SCONJ	G-	_	5	mark	_	ref=MATT_5.4
4	ipsi	ipse	PRON	Pp	Case=Nom|Gender=Masc|Number=Plur|Person=3|PronType=Prs	5	nsubj	_	ref=MATT_5.4
5	possidebunt	possideo	VERB	V-	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	1	advcl	_	ref=MATT_5.4
6	terram	terra	NOUN	Nb	Case=Acc|Gender=Fem|Number=Sing	5	obj:dir	_	ref=MATT_5.4

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obj:dir	color:blue
1	et	et	CCONJ	C-	_	7	cc	_	ref=MATT_5.41
2	quicumque	quicumque	PRON	Pr	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	4	nsubj	_	ref=MATT_5.41
3	te	tu	PRON	Pp	Case=Acc|Gender=Masc|Number=Sing|Person=2|PronType=Prs	4	obj:dir	_	ref=MATT_5.41
4	angariaverit	angario	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	9	acl	_	ref=MATT_5.41
5	mille	mille	NUM	Ma	_	6	nummod	_	ref=MATT_5.41
6	passus	passus	NOUN	Nb	Case=Acc|Gender=Masc|Number=Plur	4	obl	_	ref=MATT_5.41
7	vade	vado	VERB	V-	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=MATT_5.41
8	cum	cum	ADP	R-	_	9	case	_	ref=MATT_5.41
9	illo	ille	ADJ	Pd	Case=Abl|Gender=Masc|Number=Sing	7	obl	_	ref=MATT_5.41
10	alia	alius	ADJ	Px	Case=Acc|Gender=Neut|Number=Plur	7	obl	_	ref=MATT_5.41
11	duo	duo	NUM	Ma	Case=Acc|Gender=Neut|Number=Plur	10	nummod	_	ref=MATT_5.41

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obj:dir	color:blue
1	qui	qui	PRON	Pr	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	3	nsubj	_	ref=MATT_5.22
2	autem	autem	ADV	Df	_	5	discourse	_	ref=MATT_5.22
3	dixerit	dico	VERB	V-	Aspect=Perf|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	nsubj	_	ref=MATT_5.22
4	fatue	fatuus	ADJ	A-	Case=Voc|Degree=Pos|Gender=Masc|Number=Sing	3	obj:dir	_	ref=MATT_5.22
5	reus	reus	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	0	root	_	ref=MATT_5.22
6	erit	sum	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	5	cop	_	ref=MATT_5.22
7	gehennae	gehenna	NOUN	Nb	Case=Dat|Gender=Fem|Number=Sing	5	nmod	_	ref=MATT_5.22
8	ignis	ignis	NOUN	Nb	Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	ref=MATT_5.22

~~~


