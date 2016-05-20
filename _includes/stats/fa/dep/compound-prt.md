

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Persian)

This relation is a language-specific subtype of [compound]().
There are also 1 other language-specific subtypes of `compound`: [compound:lvc]().

103 nodes (0%) are attached to their parents as `compound:prt`.

102 instances of `compound:prt` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.07766990291262.

The following 4 pairs of parts of speech are connected with `compound:prt`: [fa-pos/VERB]()-[fa-pos/ADP]() (97; 94% instances), [fa-pos/NOUN]()-[fa-pos/ADP]() (4; 4% instances), [fa-pos/ADJ]()-[fa-pos/ADP]() (1; 1% instances), [fa-pos/ADP]()-[fa-pos/ADP]() (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound:prt	color:blue
1	می‌گویند	_	VERB	V_PRS	Number=Plur|Person=3|Tense=Pres	0	root	_	_
2	مردگان	_	NOUN	N_PL	Number=Plur	6	nsubj	_	_
3	دیگر	_	ADV	ADV_NEG	Negative=Neg	6	advmod	_	_
4	دم	_	NOUN	N_SING	Number=Sing	6	compound:lvc	_	_
5	بر	_	ADP	PREV	_	6	compound:prt	_	_
6	نمی‌آورند	_	VERB	V_PRS	Negative=Neg|Number=Plur|Person=3|Tense=Pres	1	ccomp	_	_
7	و	_	CONJ	CON	_	6	cc	_	_
8	دیگر	_	ADV	ADV_NEG	Negative=Neg	12	advmod	_	_
9	دهانی	_	NOUN	N_SING	Number=Sing	12	dobj	_	_
10	و	_	CONJ	CON	_	9	cc	_	_
11	صدایی	_	NOUN	N_SING	Number=Sing	9	conj	_	_
12	ندارند	_	VERB	V_PRS	Negative=Neg|Number=Plur|Person=3|Tense=Pres	6	conj	_	_
13	.	_	PUNCT	DELM	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 compound:prt	color:blue
1	وی	_	PRON	PRO	Number=Sing|Person=3|PronType=Prs	16	nsubj	_	_
2	میزان	_	NOUN	N_SING	Number=Sing	16	dobj	_	_
3	سرمایه‌گذاری	_	NOUN	N_SING	Number=Sing	2	nmod:poss	_	_
4	برای	_	ADP	P	_	6	case	_	_
5	این	_	DET	DET	_	6	det	_	_
6	واحدها	_	NOUN	N_PL	Number=Plur	3	nmod	_	_
7	را	را	PART	CLITIC	_	2	case	_	_
8	شش	_	NUM	NUM	NumType=Card	9	nummod	_	_
9	هزار	_	NUM	NUM	NumType=Card	12	nummod	_	_
10	و	و	CONJ	CON	_	9	cc	_	_
11	۶۵۰	_	NUM	NUM	NumType=Card	9	conj	_	_
12	میلیارد	_	NOUN	N_SING	Number=Sing	13	compound	_	_
13	ریال	_	NOUN	N_SING	Number=Sing	16	nmod	_	_
14	بر	_	ADP	PREV	_	15	compound:prt	_	_
15	آورد	_	NOUN	N_SING	Number=Sing	16	compound:lvc	_	_
16	کرد	_	VERB	V_PA	Number=Sing|Person=3|Tense=Past	0	root	_	_
17	.	_	PUNCT	DELM	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 compound:prt	color:blue
1	وی	_	PRON	PRO	Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	گفت	_	VERB	V_PA	Number=Sing|Person=3|Tense=Past	0	root	_	_
3	:	_	PUNCT	DELM	_	2	punct	_	_
4	حضور	_	NOUN	N_SING	Number=Sing	21	nsubj	_	_
5	این	_	DET	DET	_	7	det:predet	_	_
6	تعداد	_	NOUN	N_SING	Number=Sing	7	det	_	_
7	بیننده	_	NOUN	N_SING	Number=Sing	4	nmod:poss	_	_
8	و	و	CONJ	CON	_	7	cc	_	_
9	متقاضی	_	NOUN	N_SING	Number=Sing	7	conj	_	_
10	برای	_	ADP	P	_	11	case	_	_
11	فیلم‌های	_	NOUN	N_PL	Number=Plur	9	nmod	_	_
12	به	به	ADP	P	_	13	case	_	_
13	نمایش	_	NOUN	N_SING	Number=Sing	15	compound:lvc	_	_
14	در‌	_	ADP	PREV	_	15	compound:prt	_	_
15	آمده	_	ADJ	ADJ_INO	Number=Sing|Person=3|VerbForm=Part	11	amod	_	_
16	در	_	ADP	P	_	18	case	_	_
17	این	_	DET	DET	_	18	det	_	_
18	مرکز	_	NOUN	N_SING	Number=Sing	15	nmod	_	_
19	سینمایی	_	ADJ	ADJ	Degree=Pos	18	amod	_	_
20	،	_	PUNCT	DELM	_	21	punct	_	_
21	کم‌سابقه	_	ADJ	ADJ	Degree=Pos	2	ccomp	_	_
22	و	و	CONJ	CON	_	21	cc	_	_
23	نشان‌دهنده	_	NOUN	N_SING	Number=Sing	21	conj	_	_
24	پویایی	_	NOUN	N_SING	Number=Sing	23	nmod:poss	_	_
25	سینمای	_	NOUN	N_SING	Number=Sing	24	nmod:poss	_	_
26	ایران	_	NOUN	N_SING	Number=Sing	25	name	_	_
27	است	_	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	23	cop	_	_
28	.	_	PUNCT	DELM	_	2	punct	_	_

~~~


