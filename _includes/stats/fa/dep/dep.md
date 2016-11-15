

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Persian)

This relation is universal.

380 nodes (0%) are attached to their parents as `dep`.

295 instances of `dep` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.90526315789474.

The following 29 pairs of parts of speech are connected with `dep`: [fa-pos/NOUN]()-[fa-pos/NOUN]() (227; 60% instances), [fa-pos/VERB]()-[fa-pos/NOUN]() (39; 10% instances), [fa-pos/VERB]()-[fa-pos/SCONJ]() (17; 4% instances), [fa-pos/ADJ]()-[fa-pos/NOUN]() (11; 3% instances), [fa-pos/NOUN]()-[fa-pos/ADV]() (11; 3% instances), [fa-pos/ADJ]()-[fa-pos/ADV]() (9; 2% instances), [fa-pos/VERB]()-[fa-pos/INTJ]() (9; 2% instances), [fa-pos/NOUN]()-[fa-pos/SCONJ]() (7; 2% instances), [fa-pos/VERB]()-[fa-pos/ADV]() (7; 2% instances), [fa-pos/NOUN]()-[fa-pos/PART]() (6; 2% instances), [fa-pos/ADJ]()-[fa-pos/INTJ]() (5; 1% instances), [fa-pos/NOUN]()-[fa-pos/PRON]() (5; 1% instances), [fa-pos/NOUN]()-[fa-pos/INTJ]() (4; 1% instances), [fa-pos/ADP]()-[fa-pos/PART]() (3; 1% instances), [fa-pos/ADJ]()-[fa-pos/SCONJ]() (2; 1% instances), [fa-pos/ADP]()-[fa-pos/NOUN]() (2; 1% instances), [fa-pos/ADV]()-[fa-pos/NOUN]() (2; 1% instances), [fa-pos/ADV]()-[fa-pos/SCONJ]() (2; 1% instances), [fa-pos/VERB]()-[fa-pos/PRON]() (2; 1% instances), [fa-pos/ADJ]()-[fa-pos/PRON]() (1; 0% instances), [fa-pos/ADJ]()-[fa-pos/VERB]() (1; 0% instances), [fa-pos/ADP]()-[fa-pos/ADV]() (1; 0% instances), [fa-pos/NOUN]()-[fa-pos/VERB]() (1; 0% instances), [fa-pos/PRON]()-[fa-pos/ADJ]() (1; 0% instances), [fa-pos/PRON]()-[fa-pos/ADV]() (1; 0% instances), [fa-pos/PRON]()-[fa-pos/NOUN]() (1; 0% instances), [fa-pos/PRON]()-[fa-pos/PRON]() (1; 0% instances), [fa-pos/VERB]()-[fa-pos/X]() (1; 0% instances), [fa-pos/X]()-[fa-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 dep	color:blue
1	روزی	روز	NOUN	N_SING	Number=Sing	13	advmod	_	_
2	عدی‌بن‌حاتم	_	NOUN	N_SING	Number=Sing	13	nsubj	_	_
3	بعد	بعد	ADV	ADV_TIME	Case=Tem	13	advmod	_	_
4	از	از	ADP	P	_	5	case	_	_
5	شهادت	_	NOUN	N_SING	Number=Sing	3	nmod	_	_
6	علی	علی	NOUN	N_SING	Number=Sing	5	nmod:poss	_	_
7	)	)	PUNCT	DELM	_	6	punct	_	_
8	ع	ع	NOUN	N_SING	Number=Sing	6	dep	_	_
9	(	(	PUNCT	DELM	_	6	punct	_	_
10	به	به	ADP	P	_	12	case	_	_
11	نزد	نزد	ADP	P	_	10	mwe	_	_
12	معاویه	معاویه	NOUN	N_SING	Number=Sing	13	nmod	_	_
13	رفت	رفت#رو	VERB	V_PA	Number=Sing|Person=3|Tense=Past	0	root	_	_
14	.	.	PUNCT	DELM	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 dep	color:blue
1	حسینی	حسینی	NOUN	N_SING	Number=Sing	0	root	_	_
2	:	:	PUNCT	DELM	_	1	punct	_	_
3	خجالت	_	NOUN	N_SING	Number=Sing	4	compound:lvc	_	_
4	نمی‌کشیم	_	VERB	V_PRS	Negative=Neg|Number=Plur|Person=1|Tense=Pres	1	parataxis	_	_
5	خانم	خانم	NOUN	N_SING	Number=Sing	4	dep	_	_
6	.	.	PUNCT	DELM	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 dep	color:blue
1	این	این	PRON	PRO	Number=Sing|PronType=Dem	3	nsubj	_	_
2	که	که	SCONJ	CON	_	3	dep	_	_
3	نمی‌شود	کرد#کن	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	در	در	ADP	P	_	5	case	_	_
5	گفت	گفت#گو	VERB	V_PA	Number=Sing|Person=3|Tense=Past	10	nmod	_	_
6	و	و	CONJ	CON	_	5	mwe	_	_
7	گو	گفت#گو	VERB	V_IMP	Mood=Imp|Number=Sing|Person=2	6	mwe	_	_
8	همه	همه	PRON	PRO	PronType=Tot	10	nsubj	_	_
9	اش	آن	PRON	PRO	Number=Sing|PronType=Dem	8	nmod:poss	_	_
10	گو	گفت#گو	VERB	V_IMP	Mood=Imp|Number=Sing|Person=2	3	ccomp	_	_
11	باشد	بود#باش	VERB	V_SUB	Mood=Sub|Number=Sing|Person=3|Tense=Pres	10	cop	_	_
12	.	.	PUNCT	DELM	_	3	punct	_	_

~~~


