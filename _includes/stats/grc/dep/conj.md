

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ancient_Greek)

This relation is universal.

8233 nodes (5%) are attached to their parents as `conj`.

8233 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.97789384185595.

The following 34 pairs of parts of speech are connected with `conj`: [grc-pos/VERB]()-[grc-pos/VERB]() (4705; 57% instances), [grc-pos/NOUN]()-[grc-pos/NOUN]() (2273; 28% instances), [grc-pos/ADJ]()-[grc-pos/ADJ]() (415; 5% instances), [grc-pos/ADJ]()-[grc-pos/VERB]() (122; 1% instances), [grc-pos/NOUN]()-[grc-pos/ADJ]() (116; 1% instances), [grc-pos/NOUN]()-[grc-pos/VERB]() (102; 1% instances), [grc-pos/ADJ]()-[grc-pos/NOUN]() (77; 1% instances), [grc-pos/VERB]()-[grc-pos/ADJ]() (77; 1% instances), [grc-pos/PRON]()-[grc-pos/NOUN]() (74; 1% instances), [grc-pos/ADV]()-[grc-pos/ADV]() (53; 1% instances), [grc-pos/VERB]()-[grc-pos/NOUN]() (42; 1% instances), [grc-pos/NOUN]()-[grc-pos/PRON]() (40; 0% instances), [grc-pos/PRON]()-[grc-pos/PRON]() (34; 0% instances), [grc-pos/PRON]()-[grc-pos/VERB]() (15; 0% instances), [grc-pos/VERB]()-[grc-pos/PRON]() (11; 0% instances), [grc-pos/NUM]()-[grc-pos/NUM]() (9; 0% instances), [grc-pos/ADJ]()-[grc-pos/PRON]() (8; 0% instances), [grc-pos/ADV]()-[grc-pos/VERB]() (8; 0% instances), [grc-pos/PRON]()-[grc-pos/ADJ]() (8; 0% instances), [grc-pos/ADV]()-[grc-pos/ADJ]() (7; 0% instances), [grc-pos/ADV]()-[grc-pos/NOUN]() (7; 0% instances), [grc-pos/ADJ]()-[grc-pos/ADV]() (6; 0% instances), [grc-pos/NUM]()-[grc-pos/ADJ]() (5; 0% instances), [grc-pos/NOUN]()-[grc-pos/ADV]() (3; 0% instances), [grc-pos/VERB]()-[grc-pos/ADV]() (3; 0% instances), [grc-pos/ADJ]()-[grc-pos/NUM]() (2; 0% instances), [grc-pos/ADV]()-[grc-pos/PRON]() (2; 0% instances), [grc-pos/DET]()-[grc-pos/ADJ]() (2; 0% instances), [grc-pos/DET]()-[grc-pos/NOUN]() (2; 0% instances), [grc-pos/DET]()-[grc-pos/PRON]() (1; 0% instances), [grc-pos/DET]()-[grc-pos/VERB]() (1; 0% instances), [grc-pos/NUM]()-[grc-pos/VERB]() (1; 0% instances), [grc-pos/PRON]()-[grc-pos/X]() (1; 0% instances), [grc-pos/VERB]()-[grc-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 conj	color:blue
1	ὁ	ὁ	DET	l-s---mn-	Case=Nom|Gender=Masc|Number=Sing	4	det	_	_
2	δ̓	δέ	ADV	d--------	_	4	advmod	_	_
3	αὐτοῖς	αὐτός	PRON	p-p---md-	Case=Dat|Gender=Masc|Number=Plur	4	iobj	_	_
4	ἀνεῖλε	ἀναιρέω	VERB	v3saia---	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	παραδοῦναι	παραδίδωμι	VERB	v--ana---	Tense=Past|VerbForm=Inf|Voice=Act	4	xcomp	_	_
6	καὶ	καί	CCONJ	c--------	_	5	cc	_	_
7	ἡγεμόνας	ἡγεμών	NOUN	n-p---ma-	Case=Acc|Gender=Masc|Number=Plur	8	xcomp	_	_
8	ποιεῖσθαι	ποιέω	VERB	v--pne---	Tense=Pres|VerbForm=Inf|Voice=Mid	5	conj	_	SpaceAfter=No
9	.	.	PUNCT	u--------	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 conj	color:blue
1	ξυνῴκισαν	συνοικίζω	VERB	v3paia---	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	δὲ	δέ	ADV	d--------	_	1	advmod	_	_
3	καὶ	καί	ADV	d--------	_	4	advmod	_	_
4	Κορινθίων	Κορίνθιος	NOUN	n-p---mg-	Case=Gen|Gender=Masc|Number=Plur	5	nmod	_	_
5	τινὲς	τις	PRON	p-p---mn-	Case=Nom|Gender=Masc|Number=Plur	1	nsubj	_	_
6	καὶ	καί	CCONJ	c--------	_	4	cc	_	_
7	τοῦ	ὁ	DET	l-s---ng-	Case=Gen|Gender=Neut|Number=Sing	10	det	_	_
8	ἄλλου	ἄλλος	ADJ	a-s---ng-	Case=Gen|Gender=Neut|Number=Sing	10	nmod	_	_
9	Δωρικοῦ	Δωρικός	ADJ	a-s---ng-	Case=Gen|Gender=Neut|Number=Sing	10	nmod	_	_
10	γένους	γένος	NOUN	n-s---ng-	Case=Gen|Gender=Neut|Number=Sing	4	conj	_	SpaceAfter=No
11	.	.	PUNCT	u--------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 conj	color:blue
1	ταῦτα	οὗτος	PRON	p-p---na-	Case=Acc|Gender=Neut|Number=Plur	5	obj	_	_
2	γὰρ	γάρ	ADV	d--------	_	5	advmod	_	_
3	καὶ	καί	ADV	d--------	_	4	advmod	_	_
4	κράτιστα	κράτιστος	ADJ	a-p---na-	Case=Acc|Gender=Neut|Number=Plur	1	amod	_	_
5	βουλεύσεσθε	βουλεύω	VERB	v2pfim---	Mood=Ind|Number=Plur|Person=2|Tense=Fut|VerbForm=Fin|Voice=Mid	0	root	_	_
6	καὶ	καί	CCONJ	c--------	_	4	cc	_	_
7	τοῖς	ὁ	DET	l-p---md-	Case=Dat|Gender=Masc|Number=Plur	8	det	_	_
8	ἐναντίοις	ἐναντίος	ADJ	a-p---md-	Case=Dat|Gender=Masc|Number=Plur	9	advmod	_	_
9	φοβερώτατα	φοβερός	ADJ	a-p---nas	Case=Acc|Degree=Sup|Gender=Neut|Number=Plur	4	conj	_	SpaceAfter=No
10	.	.	PUNCT	u--------	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ancient_Greek-PROIEL)

This relation is universal.

10211 nodes (5%) are attached to their parents as `conj`.

10202 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.36421506218784.

The following 82 pairs of parts of speech are connected with `conj`: [grc-pos/VERB]()-[grc-pos/VERB]() (4554; 45% instances), [grc-pos/NOUN]()-[grc-pos/NOUN]() (2290; 22% instances), [grc-pos/ADJ]()-[grc-pos/ADJ]() (533; 5% instances), [grc-pos/PROPN]()-[grc-pos/PROPN]() (425; 4% instances), [grc-pos/VERB]()-[grc-pos/NOUN]() (287; 3% instances), [grc-pos/NOUN]()-[grc-pos/ADJ]() (221; 2% instances), [grc-pos/ADJ]()-[grc-pos/VERB]() (204; 2% instances), [grc-pos/VERB]()-[grc-pos/ADJ]() (204; 2% instances), [grc-pos/NOUN]()-[grc-pos/VERB]() (174; 2% instances), [grc-pos/ADJ]()-[grc-pos/NOUN]() (161; 2% instances), [grc-pos/PROPN]()-[grc-pos/NOUN]() (112; 1% instances), [grc-pos/NUM]()-[grc-pos/NUM]() (84; 1% instances), [grc-pos/PRON]()-[grc-pos/NOUN]() (83; 1% instances), [grc-pos/NOUN]()-[grc-pos/PROPN]() (59; 1% instances), [grc-pos/VERB]()-[grc-pos/PRON]() (53; 1% instances), [grc-pos/PRON]()-[grc-pos/VERB]() (52; 1% instances), [grc-pos/ADV]()-[grc-pos/ADV]() (51; 0% instances), [grc-pos/SCONJ]()-[grc-pos/VERB]() (49; 0% instances), [grc-pos/PRON]()-[grc-pos/PRON]() (46; 0% instances), [grc-pos/ADV]()-[grc-pos/VERB]() (43; 0% instances), [grc-pos/VERB]()-[grc-pos/PROPN]() (42; 0% instances), [grc-pos/AUX]()-[grc-pos/VERB]() (39; 0% instances), [grc-pos/VERB]()-[grc-pos/AUX]() (31; 0% instances), [grc-pos/NOUN]()-[grc-pos/PRON]() (30; 0% instances), [grc-pos/VERB]()-[grc-pos/ADV]() (29; 0% instances), [grc-pos/PROPN]()-[grc-pos/ADJ]() (28; 0% instances), [grc-pos/PROPN]()-[grc-pos/VERB]() (26; 0% instances), [grc-pos/ADJ]()-[grc-pos/PROPN]() (25; 0% instances), [grc-pos/PRON]()-[grc-pos/ADJ]() (23; 0% instances), [grc-pos/ADV]()-[grc-pos/NOUN]() (17; 0% instances), [grc-pos/PRON]()-[grc-pos/PROPN]() (16; 0% instances), [grc-pos/ADV]()-[grc-pos/ADJ]() (13; 0% instances), [grc-pos/AUX]()-[grc-pos/AUX]() (13; 0% instances), [grc-pos/NUM]()-[grc-pos/ADJ]() (13; 0% instances), [grc-pos/ADJ]()-[grc-pos/ADV]() (12; 0% instances), [grc-pos/AUX]()-[grc-pos/NOUN]() (12; 0% instances), [grc-pos/NUM]()-[grc-pos/NOUN]() (12; 0% instances), [grc-pos/CCONJ]()-[grc-pos/VERB]() (11; 0% instances), [grc-pos/ADJ]()-[grc-pos/PRON]() (9; 0% instances), [grc-pos/NOUN]()-[grc-pos/ADV]() (9; 0% instances), [grc-pos/VERB]()-[grc-pos/NUM]() (9; 0% instances), [grc-pos/PROPN]()-[grc-pos/ADV]() (7; 0% instances), [grc-pos/DET]()-[grc-pos/NOUN]() (6; 0% instances), [grc-pos/INTJ]()-[grc-pos/ADV]() (6; 0% instances), [grc-pos/NOUN]()-[grc-pos/NUM]() (6; 0% instances), [grc-pos/PROPN]()-[grc-pos/PRON]() (6; 0% instances), [grc-pos/SCONJ]()-[grc-pos/ADJ]() (6; 0% instances), [grc-pos/ADJ]()-[grc-pos/AUX]() (5; 0% instances), [grc-pos/NOUN]()-[grc-pos/AUX]() (5; 0% instances), [grc-pos/SCONJ]()-[grc-pos/NOUN]() (5; 0% instances), [grc-pos/ADV]()-[grc-pos/PROPN]() (4; 0% instances), [grc-pos/AUX]()-[grc-pos/ADJ]() (4; 0% instances), [grc-pos/CCONJ]()-[grc-pos/NOUN]() (3; 0% instances), [grc-pos/DET]()-[grc-pos/ADJ]() (3; 0% instances), [grc-pos/NUM]()-[grc-pos/VERB]() (3; 0% instances), [grc-pos/PROPN]()-[grc-pos/NUM]() (3; 0% instances), [grc-pos/SCONJ]()-[grc-pos/SCONJ]() (3; 0% instances), [grc-pos/ADP]()-[grc-pos/NOUN]() (2; 0% instances), [grc-pos/ADV]()-[grc-pos/PRON]() (2; 0% instances), [grc-pos/AUX]()-[grc-pos/PRON]() (2; 0% instances), [grc-pos/INTJ]()-[grc-pos/INTJ]() (2; 0% instances), [grc-pos/NOUN]()-[grc-pos/CCONJ]() (2; 0% instances), [grc-pos/NUM]()-[grc-pos/PRON]() (2; 0% instances), [grc-pos/SCONJ]()-[grc-pos/ADV]() (2; 0% instances), [grc-pos/ADJ]()-[grc-pos/CCONJ]() (1; 0% instances), [grc-pos/ADJ]()-[grc-pos/NUM]() (1; 0% instances), [grc-pos/ADP]()-[grc-pos/ADP]() (1; 0% instances), [grc-pos/ADV]()-[grc-pos/AUX]() (1; 0% instances), [grc-pos/AUX]()-[grc-pos/ADV]() (1; 0% instances), [grc-pos/AUX]()-[grc-pos/CCONJ]() (1; 0% instances), [grc-pos/AUX]()-[grc-pos/NUM]() (1; 0% instances), [grc-pos/AUX]()-[grc-pos/PROPN]() (1; 0% instances), [grc-pos/CCONJ]()-[grc-pos/PRON]() (1; 0% instances), [grc-pos/DET]()-[grc-pos/VERB]() (1; 0% instances), [grc-pos/NUM]()-[grc-pos/ADP]() (1; 0% instances), [grc-pos/NUM]()-[grc-pos/ADV]() (1; 0% instances), [grc-pos/NUM]()-[grc-pos/AUX]() (1; 0% instances), [grc-pos/PRON]()-[grc-pos/ADV]() (1; 0% instances), [grc-pos/PRON]()-[grc-pos/NUM]() (1; 0% instances), [grc-pos/PROPN]()-[grc-pos/CCONJ]() (1; 0% instances), [grc-pos/SCONJ]()-[grc-pos/PROPN]() (1; 0% instances), [grc-pos/VERB]()-[grc-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 conj	color:blue
1	ἐσελθοῦσαν	εἰσέρχομαι	VERB	V-	Aspect=Perf|Case=Acc|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	7	xcomp	_	ref=1.10.1
2	δὲ	δέ	ADV	Df	_	7	discourse	_	ref=1.10.1
3	καὶ	καί	CCONJ	C-	_	1	cc	_	ref=1.10.1
4	τιθεῖσαν	τίθημι	VERB	V-	Case=Acc|Gender=Fem|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	1	conj	_	ref=1.10.1
5	τὰ	ὁ	DET	S-	Case=Acc|Definite=Def|Gender=Neut|Number=Plur|PronType=Dem	6	det	_	ref=1.10.1
6	εἵματα	εἷμα	NOUN	Nb	Case=Acc|Gender=Neut|Number=Plur	4	obj:dir	_	ref=1.10.1
7	ἐθηεῖτο	θεάομαι	VERB	V-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	ref=1.10.1
8	ὁ	ὁ	DET	S-	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Dem	9	det	_	ref=1.10.1
9	Γύγης	Γύγης	PROPN	Ne	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	ref=1.10.1

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 conj	color:blue
1	ἐγχειρίδια	ἐγχειρίδιον	NOUN	Nb	Case=Acc|Gender=Neut|Number=Plur	5	obj:dir	_	ref=7.92.1
2	δὲ	δέ	ADV	Df	_	5	discourse	_	ref=7.92.1
3	καὶ	καί	CCONJ	C-	_	1	cc	_	ref=7.92.1
4	δρέπανα	δρέπανον	NOUN	Nb	Case=Acc|Gender=Neut|Number=Plur	1	conj	_	ref=7.92.1
5	εἶχον	ἔχω	VERB	V-	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	ref=7.92.1

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 conj	color:blue
1	Σαλαμινίων	Σαλαμίνιος	ADJ	A-	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	7	nmod	_	ref=5.110.1
2	δὲ	δέ	ADV	Df	_	8	discourse	_	ref=5.110.1
3	καὶ	καί	CCONJ	C-	_	1	cc	_	ref=5.110.1
4	Σολίων	Σόλιος	ADJ	A-	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	1	conj	_	ref=5.110.1
5	ἀπολέξαντες	ἀπολέγω	VERB	V-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	8	advcl	_	ref=5.110.1
6	τὸ	ὁ	DET	S-	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Dem	7	det	_	ref=5.110.1
7	ἄριστον	ἀγαθός	ADJ	A-	Case=Acc|Degree=Sup|Gender=Neut|Number=Sing	5	obj:dir	_	ref=5.110.1
8	ἀντέτασσον	ἀντιτάσσω	VERB	V-	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	ref=5.110.1
9	Πέρσῃσι	Πέρσης	NOUN	Nb	Case=Dat|Gender=Masc|Number=Plur	8	iobj	_	ref=5.110.1

~~~


