

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
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 compound:prt	color:blue
1	وی	وی	PRON	PRO	Number=Sing|Person=3|PronType=Prs	16	nsubj	_	_
2	میزان	میزان	NOUN	N_SING	Number=Sing	16	dobj	_	_
3	سرمایه‌گذاری	سرمایه‌گذاری	NOUN	N_SING	Number=Sing	2	nmod:poss	_	_
4	برای	برای	ADP	P	_	6	case	_	_
5	این	این	DET	DET	_	6	det	_	_
6	واحدها	واحد	NOUN	N_PL	Number=Plur	3	nmod	_	_
7	را	را	PART	CLITIC	_	2	case	_	_
8	شش	شش	NUM	NUM	NumType=Card	9	nummod	_	_
9	هزار	هزار	NUM	NUM	NumType=Card	12	nummod	_	_
10	و	و	CONJ	CON	_	9	cc	_	_
11	۶۵۰	۶۵۰	NUM	NUM	NumType=Card	9	conj	_	_
12	میلیارد	میلیارد	NOUN	N_SING	Number=Sing	13	compound	_	_
13	ریال	ریال	NOUN	N_SING	Number=Sing	16	nmod	_	_
14	بر	بر	ADP	PREV	_	15	compound:prt	_	_
15	آورد	آورد#آور	NOUN	N_SING	Number=Sing	16	compound:lvc	_	_
16	کرد	کرد#کن	VERB	V_PA	Number=Sing|Person=3|Tense=Past	0	root	_	_
17	.	.	PUNCT	DELM	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 compound:prt	color:blue
1	سمندروار	_	ADV	ADV	_	7	advmod	_	_
2	در	در	ADP	P	_	3	case	_	_
3	آتش	آتش	NOUN	N_SING	Number=Sing	7	nmod	_	_
4	کمال	کمال	NOUN	N_SING	Number=Sing	3	nmod:poss	_	_
5	خوی	_	PRON	PRO	Number=Sing|Person=3|PronType=Prs	4	nmod:poss	_	_
6	ش	او	PRON	PRO	Number=Sing|Person=3|PronType=Prs	5	nmod:poss	_	_
7	می‌سوزی	_	VERB	V_PRS	Number=Sing|Person=2|Tense=Pres	0	root	_	_
8	و	و	CONJ	CON	_	7	cc	_	_
9	هر	هر	DET	DET	_	10	det	_	_
10	بار	بار	NOUN	N_SING	Number=Sing	17	nmod	_	_
11	کاملتر	_	ADJ	ADJ_CMPR	Degree=Cmp	17	xcomp	_	_
12	از	از	ADP	P	_	14	case	_	_
13	این	این	DET	DET	_	14	det	_	_
14	آتش	آتش	NOUN	N_SING	Number=Sing	11	nmod	_	_
15	به	به	ADP	P	_	17	case	_	_
16	در	در	ADP	PREV	_	15	compound:prt	_	_
17	می‌آیی	_	VERB	V_PRS	Number=Sing|Person=2|Tense=Pres	7	conj	_	_
18	.	.	PUNCT	DELM	_	7	punct	_	_

~~~


