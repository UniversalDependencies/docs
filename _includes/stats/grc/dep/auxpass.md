

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ancient_Greek)

This relation is universal.

42 nodes (0%) are attached to their parents as `auxpass`.

27 instances of `auxpass` (64%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.78571428571429.

The following 5 pairs of parts of speech are connected with `auxpass`: [grc-pos/VERB]()-[grc-pos/VERB]() (25; 60% instances), [grc-pos/ADJ]()-[grc-pos/VERB]() (10; 24% instances), [grc-pos/NOUN]()-[grc-pos/ADV]() (3; 7% instances), [grc-pos/VERB]()-[grc-pos/ADV]() (3; 7% instances), [grc-pos/ADV]()-[grc-pos/ADV]() (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 auxpass	color:blue
1	σὺ	σύ	PRON	p-s---mn-	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	_
2	δ̓	δέ	ADV	g--------	_	8	advmod	_	_
3	εἰς	εἰς	ADP	r--------	_	4	case	_	_
4	τί	τίς	PRON	p-s---na-	Case=Acc|Gender=Neut|Number=Sing	8	nmod	_	_
5	δή	δή	ADV	g--------	_	4	advmod	_	_
6	με	ἐγώ	PRON	p-s---ma-	Case=Acc|Gender=Masc|Number=Sing	8	dobj	_	_
7	τοῦτ̓	οὗτος	ADJ	a-s---na-	Case=Acc|Gender=Neut|Number=Sing	8	dobj	_	_
8	ἐρωτήσας	ἐρωτάω	VERB	v-sapamn-	Case=Nom|Gender=Masc|Number=Sing|Tense=Aor|VerbForm=Part|Voice=Act	0	root	_	_
9	ἔχεις	ἔχω	VERB	v2spia---	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	8	auxpass	_	_
10	;	;	PUNCT	u--------	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 auxpass	color:blue
1	οὐκ	οὐ	ADV	d--------	_	4	neg	_	_
2	ἔστι	εἰμί	VERB	v3spia---	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	auxpass	_	_
3	τοὔργον	ἔργον	NOUN	n-s---nn-	Case=Nom|Gender=Neut|Number=Sing	4	nsubj	_	_
4	τλητόν	τλητός	ADJ	a-s---nn-	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
5	.	.	PUNCT	u--------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 19 auxpass	color:blue
1	ἔξωθεν	ἔξωθεν	ADV	d--------	_	11	advmod	_	_
2	δὲ	δέ	ADV	d--------	_	11	advmod	_	_
3	κύκλῳ	κύκλος	NOUN	n-s---md-	Case=Dat|Gender=Masc|Number=Sing	11	nmod	_	_
4	τῆς	ὁ	DET	l-s---fg-	Case=Gen|Gender=Fem|Number=Sing	5	det	_	_
5	σκηνῆς	σκηνή	NOUN	n-s---fg-	Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	_
6	τὸ	ὁ	DET	l-s---nn-	Case=Nom|Gender=Neut|Number=Sing	9	det	_	_
7	τῶν	ὁ	DET	l-p---mg-	Case=Gen|Gender=Masc|Number=Plur	8	det	_	_
8	ἐλεφάντων	ἐλέφας	NOUN	n-p---mg-	Case=Gen|Gender=Masc|Number=Plur	9	nmod	_	_
9	ἄγημα	ἄγημα	NOUN	n-s---nn-	Case=Nom|Gender=Neut|Number=Sing	11	conj	_	_
10	διεσκευασμένον	διασκευάζω	VERB	v-srpenn-	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Mid,Pass	9	amod	_	_
11	ἐφειστήκει	ἐφίστημι	VERB	v3slia---	Mood=Ind|Number=Sing|Person=3|Tense=Pqp|VerbForm=Fin|Voice=Act	0	root	_	_
12	καὶ	καί	ADV	d--------	_	9	advmod	_	_
13	Μακεδόνες	Μακεδών	NOUN	n-p---mn-	Case=Nom|Gender=Masc|Number=Plur	9	conj	_	_
14	χίλιοι	χίλιοι	ADJ	a-p---mn-	Case=Nom|Gender=Masc|Number=Plur	13	amod	_	_
15	Μακεδονικὰς	Μακεδ́νιος	ADJ	a-p---fa-	Case=Acc|Gender=Fem|Number=Plur	16	amod	_	_
16	στολὰς	στολή	NOUN	n-p---fa-	Case=Acc|Gender=Fem|Number=Plur	17	dobj	_	_
17	ἔχοντες	ἔχω	VERB	v-pppamn-	Case=Nom|Gender=Masc|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Act	13	amod	_	_
18	,	,	PUNCT	u--------	_	9	cc	_	_
19	εἶτα	εἶτα	ADV	d--------	_	21	auxpass	_	_
20	μύριοι	μυρίος	ADJ	a-p---mn-	Case=Nom|Gender=Masc|Number=Plur	21	amod	_	_
21	Πέρσαι	Πέρσης	NOUN	n-p---mn-	Case=Nom|Gender=Masc|Number=Plur	9	conj	_	_
22	,	,	PUNCT	u--------	_	11	punct	_	_
23	τό	ὁ	DET	l-s---nn-	Case=Nom|Gender=Neut|Number=Sing	28	det	_	_
24	τε	τε	CONJ	c--------	_	11	cc	_	_
25	τὴν	ὁ	DET	l-s---fa-	Case=Acc|Gender=Fem|Number=Sing	26	det	_	_
26	πορφύραν	πορφύρα	NOUN	n-s---fa-	Case=Acc|Gender=Fem|Number=Sing	27	dobj	_	_
27	ἔχον	ἔχω	VERB	v-sppann-	Case=Nom|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	28	amod	_	_
28	πλῆθος	πλῆθος	NOUN	n-s---nn-	Case=Nom|Gender=Neut|Number=Sing	30	nsubj	_	_
29	εἰς	εἰς	ADP	r--------	_	30	case	_	_
30	πεντακοσίους	πεντακόσιοι	ADJ	a-p---ma-	Case=Acc|Gender=Masc|Number=Plur	11	conj	_	_
31	ἦν	εἰμί	VERB	v3siia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	30	cop	_	_
32	,	,	PUNCT	u--------	_	35	punct	_	_
33	οἷς	ὅς	PRON	p-p---md-	Case=Dat|Gender=Masc|Number=Plur	35	iobj	_	_
34	Ἀλέξανδρος	Ἀλέξανδρος	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	35	nsubj	_	_
35	ἔδωκε	δίδωμι	VERB	v3saia---	Mood=Ind|Number=Sing|Person=3|Tense=Aor|VerbForm=Fin|Voice=Act	30	acl	_	_
36	φορεῖν	φορέω	VERB	v--pna---	Tense=Pres|VerbForm=Inf|Voice=Act	35	xcomp	_	_
37	τὴν	ὁ	DET	l-s---fa-	Case=Acc|Gender=Fem|Number=Sing	38	det	_	_
38	στολὴν	στολή	NOUN	n-s---fa-	Case=Acc|Gender=Fem|Number=Sing	36	dobj	_	_
39	ταύτην	οὗτος	ADJ	a-s---fa-	Case=Acc|Gender=Fem|Number=Sing	38	amod	_	_
40	.	.	PUNCT	u--------	_	39	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ancient_Greek-PROIEL)

This relation is universal.

49 nodes (0%) are attached to their parents as `auxpass`.

30 instances of `auxpass` (61%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.16326530612245.

The following 1 pairs of parts of speech are connected with `auxpass`: [grc-pos/VERB]()-[grc-pos/VERB]() (49; 100% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 auxpass	color:blue
1	ἤδη	ἤδη	ADV	Df	_	10	advmod	_	_
2	δέ	δέ	ADV	Df	_	10	discourse	_	_
3	σφι	σφεῖς	PRON	Pp	Case=Dat|Gender=Masc|Number=Plur|Person=3|PronType=Prs	10	iobj	_	_
4	καὶ	καί#1	ADV	Df	_	10	advmod	_	_
5	ἡ	ὁ	DET	S-	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Dem	6	det	_	_
6	πολλὴ	πολύς	ADJ	A-	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	10	nsubjpass	_	_
7	τῆς	ὁ	DET	S-	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Dem	8	det	_	_
8	Πελοποννήσου	Πελοπόννησος	PROPN	Ne	Case=Gen|Gender=Fem|Number=Sing	6	nmod	_	_
9	ἦν	εἰμί#1	VERB	V-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	10	auxpass	_	_
10	κατεστραμμένη	καταστρέφω	VERB	V-	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_

~~~


