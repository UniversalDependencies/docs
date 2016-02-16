

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Persian)

This relation is universal.

492 nodes (0%) are attached to their parents as `xcomp`.

465 instances of `xcomp` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.66666666666667.

The following 13 pairs of parts of speech are connected with `xcomp`: [fa-pos/VERB]()-[fa-pos/ADJ]() (276; 56% instances), [fa-pos/VERB]()-[fa-pos/NOUN]() (102; 21% instances), [fa-pos/NOUN]()-[fa-pos/ADJ]() (52; 11% instances), [fa-pos/ADJ]()-[fa-pos/ADJ]() (38; 8% instances), [fa-pos/VERB]()-[fa-pos/VERB]() (9; 2% instances), [fa-pos/ADV]()-[fa-pos/ADJ]() (4; 1% instances), [fa-pos/VERB]()-[fa-pos/NUM]() (3; 1% instances), [fa-pos/PRON]()-[fa-pos/ADJ]() (2; 0% instances), [fa-pos/VERB]()-[fa-pos/ADV]() (2; 0% instances), [fa-pos/ADJ]()-[fa-pos/NOUN]() (1; 0% instances), [fa-pos/NOUN]()-[fa-pos/VERB]() (1; 0% instances), [fa-pos/VERB]()-[fa-pos/ADP]() (1; 0% instances), [fa-pos/VERB]()-[fa-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 xcomp	color:blue
1	از	_	ADP	P	_	2	case	_	_
2	تو	_	PRON	PRO	Number=Sing|Person=2|PronType=Prs	4	nmod	_	_
3	خبری	_	NOUN	N_SING	Number=Sing	4	nsubj	_	_
4	رسیده	_	VERB	V_PP	Number=Sing|Person=3|VerbForm=Part	0	root	_	_
5	که	_	SCONJ	CON	_	9	mark	_	_
6	آن	_	PRON	PRO	Number=Sing|PronType=Dem	9	dobj	_	_
7	را	_	PART	CLITIC	_	6	case	_	_
8	ناخوشایند	_	ADJ	ADJ	Degree=Pos	9	xcomp	_	_
9	می‌شمرم	_	VERB	V_PRS	Number=Sing|Person=1|Tense=Pres	4	ccomp	_	_
10	.	_	PUNCT	DELM	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 xcomp	color:blue
1	مادر	_	NOUN	N_SING	Number=Sing	0	root	_	_
2	:	_	PUNCT	DELM	_	1	punct	_	_
3	تو	_	ADP	P	_	4	case	_	_
4	سایه	_	NOUN	N_SING	Number=Sing	5	nmod	_	_
5	برو	_	VERB	V_IMP	Mood=Imp|Number=Sing|Person=2	1	parataxis	_	_
6	تشنه‌	_	NOUN	N_SING	Number=Sing	8	xcomp	_	_
7	ت	_	PRON	PRO	Number=Sing|Person=2|PronType=Prs	6	nsubj:nc	_	_
8	نشه	_	VERB	V_SUB	Mood=Sub	5	ccomp	_	_
9	.	_	PUNCT	DELM	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 xcomp	color:blue
1	ما	_	PRON	PRO	Number=Plur|Person=1|PronType=Prs	7	nsubj	_	_
2	بهتر	_	ADJ	ADJ_CMPR	Degree=Cmp	7	xcomp	_	_
3	و	_	CONJ	CON	_	2	cc	_	_
4	بیشتر	_	ADJ	ADJ_CMPR	Degree=Cmp	2	conj	_	_
5	از	_	ADP	P	_	6	case	_	_
6	قبل	_	ADV	ADV_TIME	Case=Tem	4	advcl	_	_
7	متوجه	_	NOUN	N_SING	Number=Sing	0	root	_	_
8	این	_	DET	DET	_	9	det	_	_
9	محور	_	NOUN	N_SING	Number=Sing	7	nmod:poss	_	_
10	مهم	_	ADJ	ADJ	Degree=Pos	9	amod	_	_
11	شده‌ایم	_	VERB	V_PP	Number=Plur|Person=1|VerbForm=Part	7	cop	_	_
12	.	_	PUNCT	DELM	_	7	punct	_	_

~~~


