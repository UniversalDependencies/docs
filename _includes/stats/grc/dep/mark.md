

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ancient_Greek)

This relation is universal.

4108 nodes (2%) are attached to their parents as `mark`.

3760 instances of `mark` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.60126582278481.

The following 30 pairs of parts of speech are connected with `mark`: [grc-pos/VERB]()-[grc-pos/SCONJ]() (3430; 83% instances), [grc-pos/ADJ]()-[grc-pos/SCONJ]() (199; 5% instances), [grc-pos/VERB]()-[grc-pos/ADV]() (174; 4% instances), [grc-pos/PUNCT]()-[grc-pos/SCONJ]() (83; 2% instances), [grc-pos/ADV]()-[grc-pos/SCONJ]() (56; 1% instances), [grc-pos/NOUN]()-[grc-pos/SCONJ]() (54; 1% instances), [grc-pos/PUNCT]()-[grc-pos/ADV]() (16; 0% instances), [grc-pos/NOUN]()-[grc-pos/ADV]() (14; 0% instances), [grc-pos/VERB]()-[grc-pos/PRON]() (14; 0% instances), [grc-pos/NOUN]()-[grc-pos/ADP]() (10; 0% instances), [grc-pos/ADJ]()-[grc-pos/ADV]() (9; 0% instances), [grc-pos/VERB]()-[grc-pos/PUNCT]() (8; 0% instances), [grc-pos/PRON]()-[grc-pos/SCONJ]() (7; 0% instances), [grc-pos/CONJ]()-[grc-pos/SCONJ]() (6; 0% instances), [grc-pos/ADJ]()-[grc-pos/ADP]() (4; 0% instances), [grc-pos/VERB]()-[grc-pos/ADP]() (4; 0% instances), [grc-pos/VERB]()-[grc-pos/ADJ]() (3; 0% instances), [grc-pos/ADP]()-[grc-pos/SCONJ]() (2; 0% instances), [grc-pos/ADV]()-[grc-pos/ADV]() (2; 0% instances), [grc-pos/PUNCT]()-[grc-pos/ADJ]() (2; 0% instances), [grc-pos/VERB]()-[grc-pos/VERB]() (2; 0% instances), [grc-pos/ADV]()-[grc-pos/DET]() (1; 0% instances), [grc-pos/CONJ]()-[grc-pos/ADV]() (1; 0% instances), [grc-pos/NOUN]()-[grc-pos/VERB]() (1; 0% instances), [grc-pos/NUM]()-[grc-pos/SCONJ]() (1; 0% instances), [grc-pos/PRON]()-[grc-pos/ADP]() (1; 0% instances), [grc-pos/PRON]()-[grc-pos/DET]() (1; 0% instances), [grc-pos/SCONJ]()-[grc-pos/PUNCT]() (1; 0% instances), [grc-pos/VERB]()-[grc-pos/DET]() (1; 0% instances), [grc-pos/VERB]()-[grc-pos/INTJ]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 mark	color:blue
1	οἶδ̓	οἶδα	VERB	v1sria---	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	ὅτι	ὅτι	SCONJ	c--------	_	1	mark	_	Ellipsis=dobj
3	τραχὺς	τραχύς	ADJ	a-s---mn-	Case=Nom|Gender=Masc|Number=Sing	2	xcomp	_	_
4	καὶ	καί	CONJ	c--------	_	3	cc	_	_
5	παῤ	παρά	ADP	r--------	_	6	case	_	_
6	ἑαυτῷ	ἑαυτοῦ	ADJ	a-s---md-	Case=Dat|Gender=Masc|Number=Sing	9	iobj	_	_
7	τὸ	ὁ	DET	l-s---na-	Case=Acc|Gender=Neut|Number=Sing	8	det	_	_
8	δίκαιον	δίκαιος	ADJ	a-s---na-	Case=Acc|Gender=Neut|Number=Sing	9	dobj	_	_
9	ἔχων	ἔχω	VERB	v-sppamn-	Case=Nom|Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	3	conj	_	_
10	Ζεύς	Ζεύς	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
11	.	.	PUNCT	u--------	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 mark	color:blue
1	πολλῷ	πολύς	ADJ	a-s---nd-	Case=Dat|Gender=Neut|Number=Sing	3	advmod	_	_
2	γ̓	γε	ADV	g--------	_	3	advmod	_	_
3	ἀμείνων	ἀμείνων	ADJ	a-s---mnc	Case=Nom|Degree=Cmp|Gender=Masc|Number=Sing	7	xcomp	_	_
4	τοὺς	ὁ	PRON	p-p---ma-	Case=Acc|Gender=Masc|Number=Plur	6	dobj	_	_
5	πέλας	πέλας	ADV	d--------	_	4	amod	_	_
6	φρενοῦν	φρενόω	VERB	v--pna---	Tense=Pres|VerbForm=Inf|Voice=Act	3	iobj	_	_
7	ἔφυς	φύω	VERB	v2saia---	Mood=Ind|Number=Sing|Person=2|Tense=Aor|VerbForm=Fin|Voice=Act	0	root	_	_
8	ἢ	ἤ	SCONJ	c--------	_	3	mark	_	Ellipsis=advmod
9	σαυτόν	σαυτοῦ	PRON	p-s---ma-	Case=Acc|Gender=Masc|Number=Sing	8	dobj	_	_
10	·	·	PUNCT	u--------	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 mark	color:blue
1	ἐκερτόμησας	κερτομέω	VERB	v2saia---	Mood=Ind|Number=Sing|Person=2|Tense=Aor|VerbForm=Fin|Voice=Act	0	root	_	_
2	δῆθεν	δῆθεν	ADV	d--------	_	1	advmod	_	_
3	ὡς	ὡς	ADV	d--------	_	1	mark	_	Ellipsis=advmod
4	παῖδ̓	παῖς	NOUN	n-s---ma-	Case=Acc|Gender=Masc|Number=Sing	3	nmod	_	_
5	ὄντα	εἰμί	VERB	v-sppama-	Case=Acc|Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	4	cop	_	_
6	με	ἐγώ	PRON	p-s---ma-	Case=Acc|Gender=Masc|Number=Sing	1	dobj	_	_
7	.	.	PUNCT	u--------	_	6	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ancient_Greek-PROIEL)

This relation is universal.

3820 nodes (2%) are attached to their parents as `mark`.

3818 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.2.

The following 10 pairs of parts of speech are connected with `mark`: [grc-pos/VERB]()-[grc-pos/SCONJ]() (3357; 88% instances), [grc-pos/ADJ]()-[grc-pos/SCONJ]() (187; 5% instances), [grc-pos/NOUN]()-[grc-pos/SCONJ]() (171; 4% instances), [grc-pos/PRON]()-[grc-pos/SCONJ]() (43; 1% instances), [grc-pos/ADV]()-[grc-pos/SCONJ]() (26; 1% instances), [grc-pos/PROPN]()-[grc-pos/SCONJ]() (26; 1% instances), [grc-pos/NUM]()-[grc-pos/SCONJ]() (7; 0% instances), [grc-pos/INTJ]()-[grc-pos/SCONJ]() (1; 0% instances), [grc-pos/NOUN]()-[grc-pos/ADP]() (1; 0% instances), [grc-pos/VERB]()-[grc-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 mark	color:blue
1	μακάριοι	μακάριος	ADJ	A-	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	0	root	_	_
2	οἱ	ὁ	DET	S-	Case=Nom|Definite=Def|Gender=Masc|Number=Plur|PronType=Dem	3	det	_	_
3	πραεῖς	πραΰς	ADJ	A-	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	1	nsubj	_	_
4	ὅτι	ὅτι	SCONJ	G-	_	6	mark	_	_
5	αὐτοὶ	αὐτός	PRON	Pp	Case=Nom|Gender=Masc|Number=Plur|Person=3|PronType=Prs	6	nsubj	_	_
6	κληρονομήσουσιν	κληρονομέω	VERB	V-	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	1	advcl	_	_
7	τήν	ὁ	DET	S-	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Dem	8	det	_	_
8	γῆν	γῆ	NOUN	Nb	Case=Acc|Gender=Fem|Number=Sing	6	dobj	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 mark	color:blue
1	ἐὰν	ἐάν	SCONJ	G-	_	5	mark	_	_
2	δὲ	δέ	ADV	Df	_	11	discourse	_	_
3	μὴ	μή	ADV	Df	_	5	neg	_	_
4	ᾖ	εἰμί#1	VERB	V-	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
5	ἀξία	ἄξιος	ADJ	A-	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	11	advcl	_	_
6	ἡ	ὁ	DET	S-	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Dem	7	det	_	_
7	εἰρήνη	εἰρήνη	NOUN	Nb	Case=Nom|Gender=Fem|Number=Sing	11	nsubjpass	_	_
8	ὑμῶν	ὑμεῖς	PRON	Pp	Case=Gen|Gender=Fem,Masc|Number=Plur|Person=2|PronType=Prs	7	nmod	_	_
9	πρὸς	πρός	ADP	R-	_	10	case	_	_
10	ὑμᾶς	ὑμεῖς	PRON	Pp	Case=Acc|Gender=Fem,Masc|Number=Plur|Person=2|PronType=Prs	11	iobj	_	_
11	ἐπιστραφήτω	ἐπιστρέφω	VERB	V-	Aspect=Perf|Mood=Imp|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 mark	color:blue
1	οὐδὲ	οὐδέ	CONJ	C-	_	2	cc	_	_
2	φοβῇ	φοβέω	VERB	V-	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
3	σὺ	σύ	PRON	Pp	Case=Nom|Gender=Fem,Masc|Number=Sing|Person=2|PronType=Prs	2	nsubj	_	_
4	τὸν	ὁ	DET	S-	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Dem	5	det	_	_
5	θεόν	θεός	NOUN	Nb	Case=Acc|Gender=Masc|Number=Sing	2	dobj	_	_
6	ὅτι	ὅτι	SCONJ	G-	_	10	mark	_	_
7	ἐν	ἐν	ADP	R-	_	10	case	_	_
8	τῷ	ὁ	DET	S-	Case=Dat|Definite=Def|Gender=Neut|Number=Sing|PronType=Dem	10	det	_	_
9	αὐτῷ	αὐτός	PRON	Pp	Case=Dat|Gender=Neut|Number=Sing|Person=3|PronType=Prs	10	nmod	_	_
10	κρίματι	κρίμα	NOUN	Nb	Case=Dat|Gender=Neut|Number=Sing	2	advcl	_	_
11	εἶ	εἰμί#1	VERB	V-	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	_	_

~~~


