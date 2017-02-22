

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ancient_Greek-PROIEL)

This relation is universal.

10509 nodes (5%) are attached to their parents as `discourse`.

8239 instances of `discourse` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.21372157198592.

The following 17 pairs of parts of speech are connected with `discourse`: [grc-pos/VERB]()-[grc-pos/ADV]() (8227; 78% instances), [grc-pos/ADJ]()-[grc-pos/ADV]() (804; 8% instances), [grc-pos/NOUN]()-[grc-pos/ADV]() (590; 6% instances), [grc-pos/PRON]()-[grc-pos/ADV]() (231; 2% instances), [grc-pos/AUX]()-[grc-pos/ADV]() (147; 1% instances), [grc-pos/ADV]()-[grc-pos/ADV]() (137; 1% instances), [grc-pos/PROPN]()-[grc-pos/ADV]() (122; 1% instances), [grc-pos/NOUN]()-[grc-pos/INTJ]() (84; 1% instances), [grc-pos/ADP]()-[grc-pos/ADV]() (47; 0% instances), [grc-pos/NUM]()-[grc-pos/ADV]() (44; 0% instances), [grc-pos/SCONJ]()-[grc-pos/ADV]() (32; 0% instances), [grc-pos/ADJ]()-[grc-pos/INTJ]() (10; 0% instances), [grc-pos/INTJ]()-[grc-pos/ADV]() (10; 0% instances), [grc-pos/PROPN]()-[grc-pos/INTJ]() (9; 0% instances), [grc-pos/CCONJ]()-[grc-pos/ADV]() (8; 0% instances), [grc-pos/DET]()-[grc-pos/ADV]() (5; 0% instances), [grc-pos/VERB]()-[grc-pos/INTJ]() (2; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 discourse	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 discourse	color:blue
1	ὃ	ὁ	PRON	Pp	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	ref=1.10.1
2	μὲν	μέν	ADV	Df	_	9	discourse	_	ref=1.10.1
3	δὴ	δή	ADV	Df	_	9	discourse	_	ref=1.10.1
4	ὡς	ὡς	SCONJ	G-	_	6	mark	_	ref=1.10.1
5	οὐκ	οὐ	ADV	Df	Polarity=Neg	6	advmod	_	ref=1.10.1
6	ἐδύνατο	δύναμαι	VERB	V-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Mid	9	advcl	_	ref=1.10.1
7	διαφυγεῖν	διαφεύγω	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	6	xcomp	_	ref=1.10.1
8	ἦν	εἰμί#1	AUX	V-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	9	cop	_	ref=1.10.1
9	ἕτοιμος	ἕτοιμος	ADJ	A-	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	ref=1.10.1

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 discourse	color:blue
1	Περσέων	Πέρσης	NOUN	Nb	Case=Gen|Gender=Masc|Number=Plur	5	nmod	_	ref=5.119.1
2	μὲν	μέν	ADV	Df	_	1	discourse	_	ref=5.119.1
3	δὴ	δή	ADV	Df	_	4	discourse	_	ref=5.119.1
4	ἔπεσον	πίπτω	VERB	V-	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	ref=5.119.1
5	ἄνδρες	ἀνήρ	NOUN	Nb	Case=Nom|Gender=Masc|Number=Plur	4	nsubj	_	ref=5.119.1
6	ἐς	εἰς	ADP	R-	_	7	case	_	ref=5.119.1
7	δισχιλίους	δισχίλιοι	NUM	Ma	Case=Acc|Gender=Masc|Number=Plur	4	obl	_	ref=5.119.1
8	Καρῶν	Κάρ	NOUN	Nb	Case=Gen|Gender=Masc|Number=Plur	4	conj	_	ref=5.119.1
9	δὲ	δέ	ADV	Df	_	8	discourse	_	ref=5.119.1
10	ἐς	εἰς	ADP	R-	_	11	case	_	ref=5.119.1
11	μυρίους	μύριοι	NUM	Ma	Case=Acc|Gender=Masc|Number=Plur	8	orphan	_	ref=5.119.1

~~~


