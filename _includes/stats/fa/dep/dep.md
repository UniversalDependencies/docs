

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Persian)

This relation is universal.

380 nodes (0%) are attached to their parents as `dep`.

296 instances of `dep` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.91052631578947.

The following 28 pairs of parts of speech are connected with `dep`: [fa-pos/NOUN]()-[fa-pos/NOUN]() (227; 60% instances), [fa-pos/VERB]()-[fa-pos/NOUN]() (40; 11% instances), [fa-pos/VERB]()-[fa-pos/SCONJ]() (16; 4% instances), [fa-pos/ADJ]()-[fa-pos/NOUN]() (11; 3% instances), [fa-pos/NOUN]()-[fa-pos/ADV]() (11; 3% instances), [fa-pos/ADJ]()-[fa-pos/ADV]() (9; 2% instances), [fa-pos/VERB]()-[fa-pos/INTJ]() (9; 2% instances), [fa-pos/NOUN]()-[fa-pos/SCONJ]() (7; 2% instances), [fa-pos/VERB]()-[fa-pos/ADV]() (7; 2% instances), [fa-pos/NOUN]()-[fa-pos/PART]() (6; 2% instances), [fa-pos/NOUN]()-[fa-pos/PRON]() (6; 2% instances), [fa-pos/ADJ]()-[fa-pos/INTJ]() (5; 1% instances), [fa-pos/NOUN]()-[fa-pos/INTJ]() (4; 1% instances), [fa-pos/ADP]()-[fa-pos/PART]() (3; 1% instances), [fa-pos/ADJ]()-[fa-pos/SCONJ]() (2; 1% instances), [fa-pos/ADP]()-[fa-pos/NOUN]() (2; 1% instances), [fa-pos/ADV]()-[fa-pos/NOUN]() (2; 1% instances), [fa-pos/ADV]()-[fa-pos/SCONJ]() (2; 1% instances), [fa-pos/VERB]()-[fa-pos/PRON]() (2; 1% instances), [fa-pos/ADJ]()-[fa-pos/VERB]() (1; 0% instances), [fa-pos/ADP]()-[fa-pos/ADV]() (1; 0% instances), [fa-pos/NOUN]()-[fa-pos/VERB]() (1; 0% instances), [fa-pos/PRON]()-[fa-pos/ADJ]() (1; 0% instances), [fa-pos/PRON]()-[fa-pos/ADV]() (1; 0% instances), [fa-pos/PRON]()-[fa-pos/NOUN]() (1; 0% instances), [fa-pos/PRON]()-[fa-pos/PRON]() (1; 0% instances), [fa-pos/VERB]()-[fa-pos/X]() (1; 0% instances), [fa-pos/X]()-[fa-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 dep	color:blue
1	روزی	_	NOUN	N_SING	Number=Sing	13	advmod	_	_
2	عدی‌بن‌حاتم	_	NOUN	N_SING	Number=Sing	13	nsubj	_	_
3	بعد	_	ADV	ADV_TIME	Case=Tem	13	advmod	_	_
4	از	_	ADP	P	_	5	case	_	_
5	شهادت	_	NOUN	N_SING	Number=Sing	3	nmod	_	_
6	علی	_	NOUN	N_SING	Number=Sing	5	nmod:poss	_	_
7	)	_	PUNCT	DELM	_	6	punct	_	_
8	ع	_	NOUN	N_SING	Number=Sing	6	dep	_	_
9	(	_	PUNCT	DELM	_	6	punct	_	_
10	به	_	ADP	P	_	12	case	_	_
11	نزد	_	ADP	P	_	10	mwe	_	_
12	معاویه	_	NOUN	N_SING	Number=Sing	13	nmod	_	_
13	رفت	_	VERB	V_PA	Number=Sing|Person=3|Tense=Past	0	root	_	_
14	.	_	PUNCT	DELM	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 dep	color:blue
1	حسینی	_	NOUN	N_SING	Number=Sing	0	root	_	_
2	:	_	PUNCT	DELM	_	1	punct	_	_
3	خجالت	_	NOUN	N_SING	Number=Sing	4	compound:lvc	_	_
4	نمی‌کشیم	_	VERB	V_PRS	Negative=Neg|Number=Plur|Person=1|Tense=Pres	1	parataxis	_	_
5	خانم	_	NOUN	N_SING	Number=Sing	4	dep	_	_
6	.	_	PUNCT	DELM	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 11 dep	color:blue
1	گفت	_	VERB	V_PA	Number=Sing|Person=3|Tense=Past	0	root	_	_
2	:	_	PUNCT	DELM	_	1	punct	_	_
3	میدانی	_	VERB	V_PRS	Number=Sing|Person=2|Tense=Pres	1	ccomp	_	_
4	که	که	SCONJ	CON	_	16	mark	_	_
5	در	_	ADP	P	_	6	case	_	_
6	اثر	_	NOUN	N_SING	Number=Sing	16	nmod	_	_
7	اختلاف	_	NOUN	N_SING	Number=Sing	6	nmod:poss	_	_
8	و	و	CONJ	CON	_	7	cc	_	_
9	فتنه	_	NOUN	N_SING	Number=Sing	7	conj	_	_
10	چه‌ها	_	NOUN	N_PL	Number=Plur	16	nsubj	_	_
11	که	که	SCONJ	CON	_	16	dep	_	_
12	بر	_	ADP	P	_	13	case	_	_
13	سر	_	NOUN	N_SING	Number=Sing	16	nmod	_	_
14	این	_	DET	DET	_	15	det	_	_
15	امت	_	NOUN	N_SING	Number=Sing	13	nmod:poss	_	_
16	نیامده	_	VERB	V_PP	Negative=Neg|Number=Sing|Person=3|VerbForm=Part	3	acl:relcl	_	_
17	است	_	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	16	aux	_	_
18	.	_	PUNCT	DELM	_	1	punct	_	_

~~~


