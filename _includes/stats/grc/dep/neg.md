

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ancient_Greek)

This relation is universal.

2997 nodes (1%) are attached to their parents as `neg`.

2860 instances of `neg` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.51017684351018.

The following 17 pairs of parts of speech are connected with `neg`: [grc-pos/VERB]()-[grc-pos/ADV]() (1978; 66% instances), [grc-pos/ADJ]()-[grc-pos/ADV]() (440; 15% instances), [grc-pos/VERB]()-[grc-pos/CONJ]() (174; 6% instances), [grc-pos/ADV]()-[grc-pos/ADV]() (149; 5% instances), [grc-pos/NOUN]()-[grc-pos/ADV]() (130; 4% instances), [grc-pos/PRON]()-[grc-pos/ADV]() (58; 2% instances), [grc-pos/PUNCT]()-[grc-pos/ADV]() (16; 1% instances), [grc-pos/ADJ]()-[grc-pos/CONJ]() (14; 0% instances), [grc-pos/SCONJ]()-[grc-pos/ADV]() (12; 0% instances), [grc-pos/SCONJ]()-[grc-pos/CONJ]() (6; 0% instances), [grc-pos/ADV]()-[grc-pos/CONJ]() (5; 0% instances), [grc-pos/ADP]()-[grc-pos/ADV]() (4; 0% instances), [grc-pos/PRON]()-[grc-pos/CONJ]() (4; 0% instances), [grc-pos/NOUN]()-[grc-pos/CONJ]() (3; 0% instances), [grc-pos/CONJ]()-[grc-pos/ADV]() (2; 0% instances), [grc-pos/DET]()-[grc-pos/ADV]() (1; 0% instances), [grc-pos/DET]()-[grc-pos/CONJ]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 neg	color:blue
1	τίς	τίς	PRON	p-s---mn-	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
2	οὐ	οὐ	ADV	d--------	_	3	neg	_	_
3	ξυνασχαλᾷ	συνασχαλάω	VERB	v3spsa---	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	κακοῖς	κακός	ADJ	a-p---nd-	Case=Dat|Gender=Neut|Number=Plur	3	dobj	_	_
5	τεοῖσι	τεός	ADJ	a-p---md-	Case=Dat|Gender=Masc|Number=Plur	4	amod	_	_
6	,	,	PUNCT	u--------	_	3	punct	_	_
7	δίχα	δίχα	ADV	d--------	_	6	case	_	_
8	γε	γε	ADV	g--------	_	6	advmod	_	_
9	Διός	Ζεύς	NOUN	n-s---mg-	Case=Gen|Gender=Masc|Number=Sing	6	nmod	_	_
10	;	;	PUNCT	u--------	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 neg	color:blue
1	σὺ	σύ	PRON	p-s---mn-	Case=Nom|Gender=Masc|Number=Sing	10	nsubj	_	Ellipsis=conj
2	δ̓	δέ	ADV	g--------	_	10	advmod	_	_
3	οὐκ	οὐ	ADV	d--------	_	4	neg	_	_
4	ἄπειρος	ἄπειρος	ADJ	a-s---mn-	Case=Nom|Gender=Masc|Number=Sing	1	xcomp	_	_
5	,	,	PUNCT	u--------	_	10	punct	_	_
6	οὐ	οὐδέ	ADV	g--------	_	10	advmod	_	_
7	δ̓	δέ	ADV	g--------	_	10	cc	_	_
8	ἐμοῦ	ἐγώ	PRON	p-s---mg-	Case=Gen|Gender=Masc|Number=Sing	10	dobj	_	_
9	διδασκάλου	διδάσκαλος	NOUN	n-s---mg-	Case=Gen|Gender=Masc|Number=Sing	8	advmod	_	_
10	χρῄζεις	χρῄζω	VERB	v2spia---	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
11	·	·	PUNCT	u--------	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 neg	color:blue
1	δίδαξον	διδάσκω	VERB	v2sama---	Mood=Imp|Number=Sing|Person=2|Tense=Aor|VerbForm=Fin|Voice=Act	0	root	_	_
2	ἡμᾶς	ἐγώ	PRON	p-p---ma-	Case=Acc|Gender=Masc|Number=Plur	1	dobj	_	_
3	,	,	PUNCT	u--------	_	7	punct	_	_
4	εἴ	εἰ	SCONJ	c--------	_	7	mark	_	_
5	τι	τις	PRON	p-s---na-	Case=Acc|Gender=Neut|Number=Sing	7	nmod	_	_
6	μὴ	μή	CONJ	c--------	_	7	neg	_	_
7	βλάπτει	βλάπτω	VERB	v2spie---	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Mid,Pass	1	advcl	_	_
8	λόγῳ	λόγος	NOUN	n-s---md-	Case=Dat|Gender=Masc|Number=Sing	7	dobj	_	_
9	.	.	PUNCT	u--------	_	8	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ancient_Greek-PROIEL)

This relation is universal.

3445 nodes (2%) are attached to their parents as `neg`.

3281 instances of `neg` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.64789550072569.

The following 12 pairs of parts of speech are connected with `neg`: [grc-pos/VERB]()-[grc-pos/ADV]() (2602; 76% instances), [grc-pos/ADJ]()-[grc-pos/ADV]() (274; 8% instances), [grc-pos/NOUN]()-[grc-pos/ADV]() (201; 6% instances), [grc-pos/ADV]()-[grc-pos/ADV]() (125; 4% instances), [grc-pos/ADP]()-[grc-pos/ADV]() (100; 3% instances), [grc-pos/PRON]()-[grc-pos/ADV]() (65; 2% instances), [grc-pos/SCONJ]()-[grc-pos/ADV]() (38; 1% instances), [grc-pos/PROPN]()-[grc-pos/ADV]() (24; 1% instances), [grc-pos/NUM]()-[grc-pos/ADV]() (10; 0% instances), [grc-pos/CONJ]()-[grc-pos/ADV]() (4; 0% instances), [grc-pos/DET]()-[grc-pos/ADV]() (1; 0% instances), [grc-pos/INTJ]()-[grc-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 neg	color:blue
1	οὐκ	οὐ	ADV	Df	_	3	neg	_	_
2	ἦλθον	ἔρχομαι	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	καταλῦσαι	καταλύω	VERB	V-	Aspect=Perf|Tense=Past|VerbForm=Inf|Voice=Act	2	advcl	_	_
4	ἀλλὰ	ἀλλά	CONJ	C-	_	3	cc	_	_
5	πληρῶσαι	πληρόω	VERB	V-	Aspect=Perf|Tense=Past|VerbForm=Inf|Voice=Act	3	conj	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 neg	color:blue
1	κύριε	κύριος	NOUN	Nb	Case=Voc|Gender=Masc|Number=Sing	4	vocative	_	_
2	οὐκ	οὐ	ADV	Df	_	4	neg	_	_
3	εἰμὶ	εἰμί#1	VERB	V-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
4	ἱκανὸς	ἱκανός	ADJ	A-	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	_
5	ἵνα	ἵνα	SCONJ	G-	_	10	mark	_	_
6	μου	ἐγώ	PRON	Pp	Case=Gen|Gender=Masc|Number=Sing|Person=1|PronType=Prs	9	nmod	_	_
7	ὑπὸ	ὑπό	ADP	R-	_	9	case	_	_
8	τὴν	ὁ	DET	S-	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Dem	9	det	_	_
9	στέγην	στέγη	NOUN	Nb	Case=Acc|Gender=Fem|Number=Sing	10	iobj	_	_
10	εἰσέλθῃς	εἰσέρχομαι	VERB	V-	Aspect=Perf|Mood=Sub|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	4	ccomp	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 neg	color:blue
1	σκάνδαλον	σκάνδαλον	NOUN	Nb	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
2	εἶ	εἰμί#1	VERB	V-	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	_
3	ἐμοῦ	ἐγώ	PRON	Pp	Case=Gen|Gender=Masc|Number=Sing|Person=1|PronType=Prs	1	nmod	_	_
4	ὅτι	ὅτι	SCONJ	G-	_	6	mark	_	_
5	οὐ	οὐ	ADV	Df	_	9	neg	_	_
6	φρονεῖς	φρονέω	VERB	V-	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	advcl	_	_
7	τὰ	ὁ	DET	S-	Case=Acc|Definite=Def|Gender=Neut|Number=Plur|PronType=Dem	9	det	_	_
8	τοῦ	ὁ	DET	S-	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Dem	9	det	_	_
9	θεοῦ	θεός	NOUN	Nb	Case=Gen|Gender=Masc|Number=Sing	6	dobj	_	_
10	ἀλλὰ	ἀλλά	CONJ	C-	_	9	cc	_	_
11	τὰ	ὁ	DET	S-	Case=Acc|Definite=Def|Gender=Neut|Number=Plur|PronType=Dem	13	det	_	_
12	τῶν	ὁ	DET	S-	Case=Gen|Definite=Def|Gender=Masc|Number=Plur|PronType=Dem	13	det	_	_
13	ἀνθρώπων	ἄνθρωπος	NOUN	Nb	Case=Gen|Gender=Masc|Number=Plur	9	conj	_	_

~~~


