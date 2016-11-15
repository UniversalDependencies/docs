

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Persian)

This relation is universal.

8773 nodes (6%) are attached to their parents as `conj`.

8705 instances of `conj` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.1495497549299.

The following 51 pairs of parts of speech are connected with `conj`: [fa-pos/NOUN]()-[fa-pos/NOUN]() (4221; 48% instances), [fa-pos/VERB]()-[fa-pos/VERB]() (1651; 19% instances), [fa-pos/ADJ]()-[fa-pos/ADJ]() (720; 8% instances), [fa-pos/ADJ]()-[fa-pos/VERB]() (318; 4% instances), [fa-pos/NOUN]()-[fa-pos/VERB]() (275; 3% instances), [fa-pos/VERB]()-[fa-pos/ADJ]() (275; 3% instances), [fa-pos/VERB]()-[fa-pos/NOUN]() (271; 3% instances), [fa-pos/NOUN]()-[fa-pos/ADJ]() (270; 3% instances), [fa-pos/NUM]()-[fa-pos/NUM]() (169; 2% instances), [fa-pos/ADP]()-[fa-pos/NOUN]() (151; 2% instances), [fa-pos/ADJ]()-[fa-pos/NOUN]() (146; 2% instances), [fa-pos/PRON]()-[fa-pos/NOUN]() (46; 1% instances), [fa-pos/ADV]()-[fa-pos/ADV]() (28; 0% instances), [fa-pos/NOUN]()-[fa-pos/PRON]() (26; 0% instances), [fa-pos/NOUN]()-[fa-pos/ADV]() (21; 0% instances), [fa-pos/VERB]()-[fa-pos/ADV]() (20; 0% instances), [fa-pos/NOUN]()-[fa-pos/NUM]() (17; 0% instances), [fa-pos/VERB]()-[fa-pos/PRON]() (17; 0% instances), [fa-pos/NUM]()-[fa-pos/ADJ]() (14; 0% instances), [fa-pos/ADV]()-[fa-pos/NOUN]() (13; 0% instances), [fa-pos/PRON]()-[fa-pos/PRON]() (13; 0% instances), [fa-pos/ADJ]()-[fa-pos/ADV]() (12; 0% instances), [fa-pos/ADJ]()-[fa-pos/PRON]() (10; 0% instances), [fa-pos/ADV]()-[fa-pos/VERB]() (9; 0% instances), [fa-pos/NUM]()-[fa-pos/NOUN]() (9; 0% instances), [fa-pos/NOUN]()-[fa-pos/PUNCT]() (6; 0% instances), [fa-pos/ADV]()-[fa-pos/ADJ]() (5; 0% instances), [fa-pos/ADP]()-[fa-pos/ADJ]() (4; 0% instances), [fa-pos/ADP]()-[fa-pos/PRON]() (3; 0% instances), [fa-pos/NOUN]()-[fa-pos/X]() (3; 0% instances), [fa-pos/VERB]()-[fa-pos/AUX]() (3; 0% instances), [fa-pos/VERB]()-[fa-pos/NUM]() (3; 0% instances), [fa-pos/ADP]()-[fa-pos/ADV]() (2; 0% instances), [fa-pos/ADP]()-[fa-pos/NUM]() (2; 0% instances), [fa-pos/NOUN]()-[fa-pos/ADP]() (2; 0% instances), [fa-pos/PRON]()-[fa-pos/ADJ]() (2; 0% instances), [fa-pos/VERB]()-[fa-pos/INTJ]() (2; 0% instances), [fa-pos/ADJ]()-[fa-pos/DET]() (1; 0% instances), [fa-pos/ADJ]()-[fa-pos/INTJ]() (1; 0% instances), [fa-pos/ADJ]()-[fa-pos/PUNCT]() (1; 0% instances), [fa-pos/ADP]()-[fa-pos/ADP]() (1; 0% instances), [fa-pos/ADP]()-[fa-pos/SCONJ]() (1; 0% instances), [fa-pos/ADP]()-[fa-pos/X]() (1; 0% instances), [fa-pos/CONJ]()-[fa-pos/ADJ]() (1; 0% instances), [fa-pos/CONJ]()-[fa-pos/NOUN]() (1; 0% instances), [fa-pos/PRON]()-[fa-pos/ADV]() (1; 0% instances), [fa-pos/PRON]()-[fa-pos/CONJ]() (1; 0% instances), [fa-pos/PRON]()-[fa-pos/VERB]() (1; 0% instances), [fa-pos/VERB]()-[fa-pos/CONJ]() (1; 0% instances), [fa-pos/VERB]()-[fa-pos/X]() (1; 0% instances), [fa-pos/X]()-[fa-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 conj	color:blue
1	ادامه	ادامه	NOUN	N_SING	Number=Sing	10	nsubj	_	_
2	این	این	DET	DET	_	3	det	_	_
3	وضعیت	وضعیت	NOUN	N_SING	Number=Sing	1	nmod:poss	_	_
4	موج‌آفرینی	_	NOUN	N_SING	Number=Sing	3	nmod:poss	_	_
5	و	و	CONJ	CON	_	4	cc	_	_
6	بحران‌سازی	بحران‌سازی	NOUN	N_SING	Number=Sing	4	conj	_	_
7	به	به	ADP	P	_	8	case	_	_
8	صلاح	_	NOUN	N_SING	Number=Sing	10	nmod	_	_
9	کشور	کشور	NOUN	N_SING	Number=Sing	8	nmod:poss	_	_
10	نیست	هست	VERB	V_PRS	Negative=Neg|Number=Sing|Person=3|Tense=Pres	0	root	_	_
11	.	.	PUNCT	DELM	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 12 conj	color:blue
1	می‌گویند	گفت#گو	VERB	V_PRS	Number=Plur|Person=3|Tense=Pres	0	root	_	_
2	مردگان	مرده	NOUN	N_PL	Number=Plur	6	nsubj	_	_
3	دیگر	دیگر	ADV	ADV_NEG	Negative=Neg	6	advmod	_	_
4	دم	_	NOUN	N_SING	Number=Sing	6	compound:lvc	_	_
5	بر	بر	ADP	PREV	_	6	compound:prt	_	_
6	نمی‌آورند	_	VERB	V_PRS	Negative=Neg|Number=Plur|Person=3|Tense=Pres	1	ccomp	_	_
7	و	و	CONJ	CON	_	6	cc	_	_
8	دیگر	دیگر	ADV	ADV_NEG	Negative=Neg	12	advmod	_	_
9	دهانی	دهان	NOUN	N_SING	Number=Sing	12	dobj	_	_
10	و	و	CONJ	CON	_	9	cc	_	_
11	صدایی	صدا	NOUN	N_SING	Number=Sing	9	conj	_	_
12	ندارند	داشت#دار	VERB	V_PRS	Negative=Neg|Number=Plur|Person=3|Tense=Pres	6	conj	_	_
13	.	.	PUNCT	DELM	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 conj	color:blue
1	ما	ما	PRON	PRO	Number=Plur|Person=1|PronType=Prs	7	nsubj	_	_
2	بهتر	به	ADJ	ADJ_CMPR	Degree=Cmp	7	xcomp	_	_
3	و	و	CONJ	CON	_	2	cc	_	_
4	بیشتر	بیش	ADJ	ADJ_CMPR	Degree=Cmp	2	conj	_	_
5	از	از	ADP	P	_	6	case	_	_
6	قبل	قبل	ADV	ADV_TIME	Case=Tem	4	advcl	_	_
7	متوجه	متوجه	NOUN	N_SING	Number=Sing	0	root	_	_
8	این	این	DET	DET	_	9	det	_	_
9	محور	محور	NOUN	N_SING	Number=Sing	7	nmod:poss	_	_
10	مهم	مهم	ADJ	ADJ	Degree=Pos	9	amod	_	_
11	شده‌ایم	_	VERB	V_PP	Number=Plur|Person=1|VerbForm=Part	7	cop	_	_
12	.	.	PUNCT	DELM	_	7	punct	_	_

~~~


