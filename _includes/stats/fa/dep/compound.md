

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Persian)

This relation is universal.
There are 2 language-specific subtypes of `compound`: [compound:lvc](), [compound:prt]().

270 nodes (0%) are attached to their parents as `compound`.

256 instances of `compound` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.4037037037037.

The following 10 pairs of parts of speech are connected with `compound`: [fa-pos/NOUN]()-[fa-pos/NUM]() (163; 60% instances), [fa-pos/NOUN]()-[fa-pos/NOUN]() (86; 32% instances), [fa-pos/NUM]()-[fa-pos/NUM]() (5; 2% instances), [fa-pos/ADJ]()-[fa-pos/NOUN]() (4; 1% instances), [fa-pos/NOUN]()-[fa-pos/ADJ]() (4; 1% instances), [fa-pos/VERB]()-[fa-pos/NOUN]() (3; 1% instances), [fa-pos/ADJ]()-[fa-pos/NUM]() (2; 1% instances), [fa-pos/ADP]()-[fa-pos/NOUN]() (1; 0% instances), [fa-pos/ADV]()-[fa-pos/NOUN]() (1; 0% instances), [fa-pos/VERB]()-[fa-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 compound	color:blue
1	مزرعه‌ای	_	NOUN	N_SING	Number=Sing	0	root	_	_
2	که	که	SCONJ	CON	_	5	mark	_	_
3	در	در	ADP	P	_	4	case	_	_
4	عقیق	_	NOUN	N_SING	Number=Sing	5	obl	_	_
5	بود	بود#باش	VERB	V_PA	Number=Sing|Person=3|Tense=Past	1	acl:relcl	_	_
6	و	و	CCONJ	CON	_	12	cc	_	_
7	درآمد	درآمد	NOUN	N_SING	Number=Sing	12	nsubj	_	_
8	آن	آن	PRON	PRO	Number=Sing|PronType=Dem	7	nmod:poss	_	_
9	سالی	سال	NOUN	N_SING	Number=Sing	12	obj	_	_
10	هشت	هشت	NUM	NUM	NumType=Card	11	nummod	_	_
11	هزار	هزار	NUM	NUM	NumType=Card	12	compound	_	_
12	دینار	_	NOUN	N_SING	Number=Sing	5	conj	_	_
13	بود	بود#باش	AUX	V_PA	Number=Sing|Person=3|Tense=Past	12	cop	_	SpaceAfter=No
14	.	.	PUNCT	DELM	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 compound	color:blue
1	چنان	چنان	ADV	ADV	_	13	advmod	_	_
2	که	که	CCONJ	CON	_	1	fixed	_	_
3	امام	امام	NOUN	N_SING	Number=Sing	13	nsubj	_	_
4	حسین	حسین	NOUN	N_SING	Number=Sing	3	flat	_	SpaceAfter=No
5	)	)	PUNCT	DELM	_	4	punct	_	_
6	ع	ع	NOUN	N_SING	Number=Sing	4	dep	_	_
7	(	(	PUNCT	DELM	_	4	punct	_	SpaceAfter=No
8	به	به	ADP	P	_	9	case	_	_
9	فرزدق	_	NOUN	N_SING	Number=Sing	13	obl	_	_
10	چهار	چهار	NUM	NUM	NumType=Card	11	nummod	_	_
11	صد	صد	NOUN	N_SING	Number=Sing	12	compound	_	_
12	دینار	_	NOUN	N_SING	Number=Sing	13	obj	_	_
13	داد	داد#ده	VERB	V_PA	Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
14	.	.	PUNCT	DELM	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 10 compound	color:blue
1	در	در	ADP	P	_	2	case	_	_
2	استان	استان	NOUN	N_SING	Number=Sing	17	obl	_	_
3	گلستان	گلستان	NOUN	N_SING	Number=Sing	2	flat	_	_
4	۴۳۰	۴۳۰	NUM	NUM	NumType=Card	5	nummod	_	_
5	هزار	هزار	NUM	NUM	NumType=Card	6	compound	_	_
6	هکتار	هکتار	NOUN	N_SING	Number=Sing	7	nmod	_	_
7	جنگل	جنگل	NOUN	N_SING	Number=Sing	17	nsubj	_	_
8	و	و	CCONJ	CON	_	15	cc	_	_
9	یک	یک	NUM	NUM	NumType=Card	10	nummod	_	_
10	میلیون	میلیون	NUM	NUM	NumType=Card	13	compound	_	_
11	و	و	CCONJ	CON	_	12	cc	_	_
12	۳۰۰	۳۰۰	NUM	NUM	NumType=Card	10	conj	_	_
13	هزار	هزار	NUM	NUM	NumType=Card	14	nummod	_	_
14	هکتار	هکتار	NOUN	N_SING	Number=Sing	15	nmod	_	_
15	مرتع	مرتع	NOUN	N_SING	Number=Sing	7	conj	_	_
16	وجود	وجود	NOUN	N_SING	Number=Sing	17	compound:lvc	_	_
17	دارد	داشت#دار	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
18	.	.	PUNCT	DELM	_	17	punct	_	_

~~~


