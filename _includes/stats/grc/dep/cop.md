

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ancient_Greek)

This relation is universal.

2194 nodes (1%) are attached to their parents as `cop`.

1417 instances of `cop` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.03144940747493.

The following 8 pairs of parts of speech are connected with `cop`: [grc-pos/ADJ]()-[grc-pos/VERB]() (1181; 54% instances), [grc-pos/NOUN]()-[grc-pos/VERB]() (618; 28% instances), [grc-pos/VERB]()-[grc-pos/VERB]() (188; 9% instances), [grc-pos/PRON]()-[grc-pos/VERB]() (157; 7% instances), [grc-pos/ADV]()-[grc-pos/VERB]() (40; 2% instances), [grc-pos/NUM]()-[grc-pos/VERB]() (6; 0% instances), [grc-pos/DET]()-[grc-pos/VERB]() (3; 0% instances), [grc-pos/X]()-[grc-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 cop	color:blue
1	ἐμὸν	ἐμός	ADJ	a-s---nn-	Case=Nom|Gender=Neut|Number=Sing	2	dobj	_	_
2	δοκήσει	δοκέω	VERB	v3sfia---	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	_
3	τἀμπλάκημ̓	ἀμπλάκημα	NOUN	n-s---nn-	Case=Nom|Gender=Neut|Number=Sing	2	nsubj	_	_
4	εἶναι	εἰμί	VERB	v--pna---	Tense=Pres|VerbForm=Inf|Voice=Act	1	cop	_	_
5	τόδε	ὅδε	PRON	p-s---nn-	Case=Nom|Gender=Neut|Number=Sing	3	nmod	_	_
6	.	.	PUNCT	u--------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cop	color:blue
1	τίς	τίς	PRON	p-s---mn-	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
2	οὖν	οὖν	ADV	g--------	_	1	advmod	_	_
3	ἀνάγκης	ἀνάγκη	NOUN	n-s---fg-	Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	_
4	ἐστὶν	εἰμί	VERB	v3spia---	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
5	οἰακοστρόφος	οἰακοστρόφος	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
6	;	;	PUNCT	u--------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 cop	color:blue
1	τίς	τίς	PRON	p-s---mn-	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
2	οὖν	οὖν	ADV	g--------	_	1	advmod	_	_
3	ὁ	ὁ	DET	l-s---mn-	Case=Nom|Gender=Masc|Number=Sing	4	det	_	_
4	λύσων	λύω	VERB	v-sfpamn-	Case=Nom|Gender=Masc|Number=Sing|Tense=Fut|VerbForm=Part|Voice=Act	0	root	_	_
5	ἐστὶν	εἰμί	VERB	v3spia---	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
6	ἄκοντος	ἀέκων	ADJ	a-s---mg-	Case=Gen|Gender=Masc|Number=Sing	4	xcomp	_	Ellipsis=advmod
7	Διός	Ζεύς	NOUN	n-s---mg-	Case=Gen|Gender=Masc|Number=Sing	6	nsubj	_	_
8	;	;	PUNCT	u--------	_	7	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ancient_Greek-PROIEL)

This relation is universal.

3246 nodes (2%) are attached to their parents as `cop`.

1660 instances of `cop` (51%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.93130006161429.

The following 8 pairs of parts of speech are connected with `cop`: [grc-pos/ADJ]()-[grc-pos/VERB]() (1208; 37% instances), [grc-pos/NOUN]()-[grc-pos/VERB]() (1020; 31% instances), [grc-pos/VERB]()-[grc-pos/VERB]() (316; 10% instances), [grc-pos/PRON]()-[grc-pos/VERB]() (299; 9% instances), [grc-pos/PROPN]()-[grc-pos/VERB]() (198; 6% instances), [grc-pos/ADV]()-[grc-pos/VERB]() (149; 5% instances), [grc-pos/NUM]()-[grc-pos/VERB]() (53; 2% instances), [grc-pos/INTJ]()-[grc-pos/VERB]() (3; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cop	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cop	color:blue
1	τίς	τίς	PRON	Pi	Case=Nom|Gender=Masc|Number=Sing|PronType=Int	4	nsubj	_	_
2	ἐστιν	εἰμί#1	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
3	ἡ	ὁ	DET	S-	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Dem	4	det	_	_
4	μήτηρ	μήτηρ	NOUN	Nb	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
5	μου	ἐγώ	PRON	Pp	Case=Gen|Gender=Masc|Number=Sing|Person=1|PronType=Prs	4	nmod	_	_
6	καὶ	καί	CONJ	C-	_	4	cc	_	_
7	τίνες	τίς	PRON	Pi	Case=Nom|Gender=Masc|Number=Plur|PronType=Int	10	nsubj	_	_
8	εἰσὶν	εἰμί#1	VERB	V-	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	_	_
9	οἱ	ὁ	DET	S-	Case=Nom|Definite=Def|Gender=Masc|Number=Plur|PronType=Dem	10	det	_	_
10	ἀδελφοί	ἀδελφός	NOUN	Nb	Case=Nom|Gender=Masc|Number=Plur	4	conj	_	_
11	μου	ἐγώ	PRON	Pp	Case=Gen|Gender=Masc|Number=Sing|Person=1|PronType=Prs	10	nmod	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 cop	color:blue
1	καὶ	καί	CONJ	C-	_	6	cc	_	_
2	ἦν	εἰμί#1	VERB	V-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	_	_
3	ὅλη	ὅλος	ADJ	A-	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	5	amod	_	_
4	ἡ	ὁ	DET	S-	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Dem	5	det	_	_
5	πόλις	πόλις	NOUN	Nb	Case=Nom|Gender=Fem|Number=Sing	6	nsubjpass	_	_
6	ἐπισυνηγμένη	ἐπισυνάγω	VERB	V-	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
7	πρὸς	πρός	ADP	R-	_	9	case	_	_
8	τὴν	ὁ	DET	S-	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Dem	9	det	_	_
9	θύραν	θύρα	NOUN	Nb	Case=Acc|Gender=Fem|Number=Sing	6	iobj	_	_

~~~


