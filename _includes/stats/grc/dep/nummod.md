

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ancient_Greek-PROIEL)

This relation is universal.

919 nodes (0%) are attached to their parents as `nummod`.

626 instances of `nummod` (68%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.32752992383025.

The following 9 pairs of parts of speech are connected with `nummod`: [grc-pos/NOUN]()-[grc-pos/NUM]() (859; 93% instances), [grc-pos/ADJ]()-[grc-pos/NUM]() (33; 4% instances), [grc-pos/PRON]()-[grc-pos/NUM]() (10; 1% instances), [grc-pos/VERB]()-[grc-pos/NUM]() (5; 1% instances), [grc-pos/NUM]()-[grc-pos/NUM]() (3; 0% instances), [grc-pos/PROPN]()-[grc-pos/NUM]() (3; 0% instances), [grc-pos/ADP]()-[grc-pos/NUM]() (2; 0% instances), [grc-pos/ADV]()-[grc-pos/NUM]() (2; 0% instances), [grc-pos/DET]()-[grc-pos/NUM]() (2; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	Οὐδεὶς	οὐδείς	PRON	Px	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	δύναται	δύναμαι	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
3	δυσὶ	δύο	NUM	Ma	Case=Dat|Number=Plur	4	nummod	_	_
4	κυρίοις	κύριος	NOUN	Nb	Case=Dat|Gender=Masc|Number=Plur	5	iobj	_	_
5	δουλεύειν	δουλεύω	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Act	2	xcomp	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	ἤγοντο	ἄγω	VERB	V-	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
2	δὲ	δέ	ADV	Df	_	1	discourse	_	_
3	καὶ	καί	CONJ	C-	_	1	cc	_	_
4	ἕτεροι	ἕτερος	ADJ	A-	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	6	amod	_	_
5	δύο	δύο	NUM	Ma	_	6	nummod	_	_
6	κακοῦργοι	κακοῦργος	ADJ	A-	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	1	nsubjpass	_	_
7	σὺν	σύν	ADP	R-	_	8	case	_	_
8	αὐτῷ	αὐτός	PRON	Pp	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	nmod	_	_
9	ἀναιρεθῆναι	ἀναιρέω	VERB	V-	Aspect=Perf|Tense=Past|VerbForm=Inf|Voice=Pass	1	advcl	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nummod	color:blue
1	μετὰ	μετά	ADP	R-	_	5	case	_	_
2	δὲ	δέ	ADV	Df	_	10	discourse	_	_
3	δύο	δύο	NUM	Ma	_	5	nummod	_	_
4	τῶν	ὁ	DET	S-	Case=Gen|Definite=Def|Gender=Masc|Number=Plur|PronType=Dem	5	det	_	_
5	σφετέρων	σφέτερος	PRON	Ps	Case=Gen|Gender=Masc|Number=Plur|Person=3|Poss=Yes|PronType=Prs	6	iobj	_	_
6	ὁμόψηφον	ὁμόψηφος	ADJ	A-	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	10	ccomp	_	_
7	τὸν	ὁ	DET	S-	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Dem	8	det	_	_
8	Ἀργεῖον	Ἀργεῖος	ADJ	A-	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	6	nsubj	_	_
9	εἶναι	εἰμί#1	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Act	6	cop	_	_
10	κωλύειν	κωλύω	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Act	0	root	_	_
11	οὐδέν	οὐδείς	PRON	Px	Case=Acc|Gender=Neut|Number=Sing	10	nsubj	_	_

~~~


