

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ancient_Greek-PROIEL)

This relation is universal.

248 nodes (0%) are attached to their parents as `parataxis`.

132 instances of `parataxis` (53%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.64516129032258.

The following 17 pairs of parts of speech are connected with `parataxis`: [grc-pos/VERB]()-[grc-pos/VERB]() (167; 67% instances), [grc-pos/VERB]()-[grc-pos/ADJ]() (19; 8% instances), [grc-pos/VERB]()-[grc-pos/NOUN]() (19; 8% instances), [grc-pos/ADJ]()-[grc-pos/VERB]() (10; 4% instances), [grc-pos/VERB]()-[grc-pos/ADV]() (9; 4% instances), [grc-pos/NOUN]()-[grc-pos/VERB]() (5; 2% instances), [grc-pos/PRON]()-[grc-pos/VERB]() (4; 2% instances), [grc-pos/VERB]()-[grc-pos/PRON]() (3; 1% instances), [grc-pos/NOUN]()-[grc-pos/NOUN]() (2; 1% instances), [grc-pos/NOUN]()-[grc-pos/PROPN]() (2; 1% instances), [grc-pos/VERB]()-[grc-pos/CONJ]() (2; 1% instances), [grc-pos/ADV]()-[grc-pos/VERB]() (1; 0% instances), [grc-pos/CONJ]()-[grc-pos/VERB]() (1; 0% instances), [grc-pos/PRON]()-[grc-pos/PRON]() (1; 0% instances), [grc-pos/VERB]()-[grc-pos/INTJ]() (1; 0% instances), [grc-pos/VERB]()-[grc-pos/PROPN]() (1; 0% instances), [grc-pos/VERB]()-[grc-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 parataxis	color:blue
1	καὶ	καί	CONJ	C-	_	9	cc	_	_
2	ἐάν	ἐάν	SCONJ	G-	_	5	mark	_	_
3	τις	τὶς	PRON	Px	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
4	ὑμῖν	ὑμεῖς	PRON	Pp	Case=Dat|Gender=Fem,Masc|Number=Plur|Person=2|PronType=Prs	5	iobj	_	_
5	εἴπῃ	λέγω	VERB	V-	Aspect=Perf|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	9	advcl	_	_
6	τί	τίς	PRON	Pi	Case=Acc|Gender=Neut|Number=Sing|PronType=Int	7	dobj	_	_
7	ποιεῖτε	ποιέω	VERB	V-	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	9	parataxis	_	_
8	τοῦτο	οὗτος	ADJ	Pd	Case=Acc|Gender=Neut|Number=Sing	9	dobj	_	_
9	εἴπατε	λέγω	VERB	V-	Aspect=Perf|Mood=Imp|Number=Plur|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 parataxis	color:blue
1	ἐὰν	ἐάν	SCONJ	G-	_	2	mark	_	_
2	εἴπωμεν	λέγω	VERB	V-	Aspect=Perf|Mood=Sub|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	5	advcl	_	_
3	ἐξ	ἐκ	ADP	R-	_	4	case	_	_
4	οὐρανοῦ	οὐρανός	NOUN	Nb	Case=Gen|Gender=Masc|Number=Sing	5	parataxis	_	_
5	ἐρεῖ	λέγω	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	_
6	ἡμῖν	ἡμεῖς	PRON	Pp	Case=Dat|Gender=Masc|Number=Plur|Person=1|PronType=Prs	5	iobj	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 parataxis	color:blue
1	εἰπόντος	λέγω	VERB	V-	Aspect=Perf|Case=Gen|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	6	advcl	_	_
2	δέ	δέ	ADV	Df	_	6	discourse	_	_
3	ἀπὸ	ἀπό	ADP	R-	_	5	case	_	_
4	τῶν	ὁ	DET	S-	Case=Gen|Definite=Def|Gender=Masc|Number=Plur|PronType=Dem	5	det	_	_
5	ἀλλοτρίων	ἀλλότριος	ADJ	A-	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	6	parataxis	_	_
6	ἔφη	φημί	VERB	V-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
7	αὐτῷ	αὐτός	PRON	Pp	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	iobj	_	_
8	ὁ	ὁ	DET	S-	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Dem	9	det	_	_
9	Ἰησοῦς	Ἰησοῦς	PROPN	Ne	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ancient_Greek-PROIEL)

This relation is universal.

248 nodes (0%) are attached to their parents as `parataxis`.

132 instances of `parataxis` (53%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.64516129032258.

The following 17 pairs of parts of speech are connected with `parataxis`: [grc-pos/VERB]()-[grc-pos/VERB]() (167; 67% instances), [grc-pos/VERB]()-[grc-pos/ADJ]() (19; 8% instances), [grc-pos/VERB]()-[grc-pos/NOUN]() (19; 8% instances), [grc-pos/ADJ]()-[grc-pos/VERB]() (10; 4% instances), [grc-pos/VERB]()-[grc-pos/ADV]() (9; 4% instances), [grc-pos/NOUN]()-[grc-pos/VERB]() (5; 2% instances), [grc-pos/PRON]()-[grc-pos/VERB]() (4; 2% instances), [grc-pos/VERB]()-[grc-pos/PRON]() (3; 1% instances), [grc-pos/NOUN]()-[grc-pos/NOUN]() (2; 1% instances), [grc-pos/NOUN]()-[grc-pos/PROPN]() (2; 1% instances), [grc-pos/VERB]()-[grc-pos/CONJ]() (2; 1% instances), [grc-pos/ADV]()-[grc-pos/VERB]() (1; 0% instances), [grc-pos/CONJ]()-[grc-pos/VERB]() (1; 0% instances), [grc-pos/PRON]()-[grc-pos/PRON]() (1; 0% instances), [grc-pos/VERB]()-[grc-pos/INTJ]() (1; 0% instances), [grc-pos/VERB]()-[grc-pos/PROPN]() (1; 0% instances), [grc-pos/VERB]()-[grc-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 parataxis	color:blue
1	καὶ	καί	CONJ	C-	_	9	cc	_	_
2	ἐάν	ἐάν	SCONJ	G-	_	5	mark	_	_
3	τις	τὶς	PRON	Px	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
4	ὑμῖν	ὑμεῖς	PRON	Pp	Case=Dat|Gender=Fem,Masc|Number=Plur|Person=2|PronType=Prs	5	iobj	_	_
5	εἴπῃ	λέγω	VERB	V-	Aspect=Perf|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	9	advcl	_	_
6	τί	τίς	PRON	Pi	Case=Acc|Gender=Neut|Number=Sing|PronType=Int	7	dobj	_	_
7	ποιεῖτε	ποιέω	VERB	V-	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	9	parataxis	_	_
8	τοῦτο	οὗτος	ADJ	Pd	Case=Acc|Gender=Neut|Number=Sing	9	dobj	_	_
9	εἴπατε	λέγω	VERB	V-	Aspect=Perf|Mood=Imp|Number=Plur|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 parataxis	color:blue
1	εἰπόντος	λέγω	VERB	V-	Aspect=Perf|Case=Gen|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	6	advcl	_	_
2	δέ	δέ	ADV	Df	_	6	discourse	_	_
3	ἀπὸ	ἀπό	ADP	R-	_	5	case	_	_
4	τῶν	ὁ	DET	S-	Case=Gen|Definite=Def|Gender=Masc|Number=Plur|PronType=Dem	5	det	_	_
5	ἀλλοτρίων	ἀλλότριος	ADJ	A-	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	6	parataxis	_	_
6	ἔφη	φημί	VERB	V-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
7	αὐτῷ	αὐτός	PRON	Pp	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	iobj	_	_
8	ὁ	ὁ	DET	S-	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Dem	9	det	_	_
9	Ἰησοῦς	Ἰησοῦς	PROPN	Ne	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 parataxis	color:blue
1	ἐὰν	ἐάν	SCONJ	G-	_	2	mark	_	_
2	εἴπωμεν	λέγω	VERB	V-	Aspect=Perf|Mood=Sub|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	5	advcl	_	_
3	ἐξ	ἐκ	ADP	R-	_	4	case	_	_
4	οὐρανοῦ	οὐρανός	NOUN	Nb	Case=Gen|Gender=Masc|Number=Sing	5	parataxis	_	_
5	ἐρεῖ	λέγω	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	_
6	ἡμῖν	ἡμεῖς	PRON	Pp	Case=Dat|Gender=Masc|Number=Plur|Person=1|PronType=Prs	5	iobj	_	_

~~~


