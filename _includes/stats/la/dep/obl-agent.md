

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latin-PROIEL)

This relation is a language-specific subtype of [obl]().

480 nodes (0%) are attached to their parents as `obl:agent`.

284 instances of `obl:agent` (59%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.61666666666667.

The following 11 pairs of parts of speech are connected with `obl:agent`: [la-pos/VERB]()-[la-pos/NOUN]() (178; 37% instances), [la-pos/VERB]()-[la-pos/PRON]() (175; 36% instances), [la-pos/VERB]()-[la-pos/PROPN]() (59; 12% instances), [la-pos/VERB]()-[la-pos/ADJ]() (58; 12% instances), [la-pos/PROPN]()-[la-pos/PROPN]() (3; 1% instances), [la-pos/VERB]()-[la-pos/NUM]() (2; 0% instances), [la-pos/ADV]()-[la-pos/ADJ]() (1; 0% instances), [la-pos/ADV]()-[la-pos/PRON]() (1; 0% instances), [la-pos/NOUN]()-[la-pos/PRON]() (1; 0% instances), [la-pos/VERB]()-[la-pos/ADV]() (1; 0% instances), [la-pos/VERB]()-[la-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:agent	color:blue
1	qui	qui	PRON	Pr	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	2	nsubj	_	ref=REV_2.11
2	vicerit	vinco	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	4	nsubj:pass	_	ref=REV_2.11
3	non	non	ADV	Df	Polarity=Neg	4	advmod	_	ref=REV_2.11
4	laedetur	laedo	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Pass	0	root	_	ref=REV_2.11
5	a	ab	ADP	R-	_	6	case	_	ref=REV_2.11
6	morte	mors	NOUN	Nb	Case=Abl|Gender=Fem|Number=Sing	4	obl:agent	_	ref=REV_2.11
7	secunda	secundus	ADJ	Mo	Case=Abl|Gender=Fem|Number=Sing	6	nmod	_	ref=REV_2.11

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obl:agent	color:blue
1	urgebar	urgeo	VERB	V-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	ref=4.5.1
2	ab	ab	ADP	R-	_	3	case	_	ref=4.5.1
3	eo	is	PRON	Pp	Case=Abl|Gender=Masc|Number=Sing|Person=3|PronType=Prs	1	obl:agent	_	ref=4.5.1
4	ad	ad	ADP	R-	_	5	case	_	ref=4.5.1
5	quem	qui	PRON	Pr	Case=Acc|Gender=Masc|Number=Sing|PronType=Rel	6	obl	_	ref=4.5.1
6	misi	mitto	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	3	acl	_	ref=4.5.1
7	et	et	CCONJ	C-	_	1	cc	_	ref=4.5.1
8	non	non	ADV	Df	Polarity=Neg	9	advmod	_	ref=4.5.1
9	habebam	habeo	VERB	V-	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	1	conj	_	ref=4.5.1
10	exemplar	exemplar	NOUN	Nb	Case=Acc|Gender=Neut|Number=Sing	9	obj:dir	_	ref=4.5.1

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 obl:agent	color:blue
1	hic	hic	ADJ	Pd	Case=Nom|Gender=Masc|Number=Sing	5	nsubj:pass	_	ref=MATT_3.3
2	est	sum	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	ref=MATT_3.3
3	enim	enim	ADV	Df	_	5	discourse	_	ref=MATT_3.3
4	qui	qui	PRON	Pr	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	5	nsubj:pass	_	ref=MATT_3.3
5	dictus	dico	VERB	V-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	ref=MATT_3.3
6	est	sum	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux:pass	_	ref=MATT_3.3
7	per	per	ADP	R-	_	8	case	_	ref=MATT_3.3
8	Esaiam	Esaias	PROPN	Ne	Case=Acc|Gender=Masc|Number=Sing	5	obl:agent	_	ref=MATT_3.3
9	prophetam	propheta	NOUN	Nb	Case=Acc|Gender=Masc|Number=Sing	8	appos	_	ref=MATT_3.3
10	dicentem	dico	VERB	V-	Case=Acc|Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	5	advcl	_	ref=MATT_3.3

~~~


