

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Persian)

This relation is universal.

2564 nodes (2%) are attached to their parents as `nummod`.

2245 instances of `nummod` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33385335413417.

The following 13 pairs of parts of speech are connected with `nummod`: [fa-pos/NOUN]()-[fa-pos/NUM]() (2126; 83% instances), [fa-pos/NUM]()-[fa-pos/NUM]() (186; 7% instances), [fa-pos/ADJ]()-[fa-pos/NUM]() (94; 4% instances), [fa-pos/NOUN]()-[fa-pos/ADJ]() (78; 3% instances), [fa-pos/VERB]()-[fa-pos/NUM]() (30; 1% instances), [fa-pos/NOUN]()-[fa-pos/NOUN]() (24; 1% instances), [fa-pos/ADP]()-[fa-pos/NUM]() (17; 1% instances), [fa-pos/ADV]()-[fa-pos/NUM]() (3; 0% instances), [fa-pos/PRON]()-[fa-pos/NUM]() (2; 0% instances), [fa-pos/ADJ]()-[fa-pos/ADJ]() (1; 0% instances), [fa-pos/NOUN]()-[fa-pos/PRON]() (1; 0% instances), [fa-pos/VERB]()-[fa-pos/NOUN]() (1; 0% instances), [fa-pos/X]()-[fa-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	از	از	ADP	P	_	2	case	_	_
2	بنی‌هاشم	_	NOUN	N_SING	Number=Sing	7	nmod	_	_
3	هم	هم	SCONJ	CON	_	7	advmod	_	_
4	حتی	حتی	ADV	ADV	_	7	advmod	_	_
5	یک	یک	NUM	NUM	NumType=Card	6	nummod	_	_
6	نفر	نفر	NOUN	N_SING	Number=Sing	7	nsubj	_	_
7	حاضر	حاضر	ADJ	ADJ	Degree=Pos	0	root	_	_
8	به	به	ADP	P	_	9	case	_	_
9	بیعت	بیعت	NOUN	N_SING	Number=Sing	7	nmod	_	_
10	با	با	ADP	P	_	11	case	_	_
11	یزید	یزید	NOUN	N_SING	Number=Sing	9	nmod	_	_
12	نشده	کرد#کن	AUX	V_PP	Number=Sing|Person=3|Polarity=Neg|VerbForm=Part	7	cop	_	_
13	است	است	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	12	aux	_	SpaceAfter=No
14	.	.	PUNCT	DELM	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 nummod	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	برو	رفت#رو	VERB	V_IMP	Mood=Imp|Number=Sing|Person=2	0	root	_	_
2	هر	هر	DET	DET	_	3	det	_	_
3	وقت	وقت	NOUN	N_SING	Number=Sing	5	nsubj	_	_
4	۱۶	۱۶	NUM	NUM	NumType=Card	5	nummod	_	_
5	ساله	ساله	ADJ	ADJ	Degree=Pos	1	conj	_	_
6	شدی	_	AUX	V_PA	Number=Sing|Person=2|Tense=Past	5	cop	_	_
7	بیا	آمد#آ	VERB	V_IMP	Mood=Imp|Number=Sing|Person=2	5	ccomp	_	SpaceAfter=No
8	.	.	PUNCT	DELM	_	1	punct	_	_

~~~


