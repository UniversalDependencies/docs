

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Persian)

This relation is universal.

9184 nodes (6%) are attached to their parents as `amod`.

8573 instances of `amod` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.10496515679443.

The following 14 pairs of parts of speech are connected with `amod`: [fa-pos/NOUN]()-[fa-pos/ADJ]() (8987; 98% instances), [fa-pos/NOUN]()-[fa-pos/ADV]() (103; 1% instances), [fa-pos/ADJ]()-[fa-pos/ADJ]() (51; 1% instances), [fa-pos/NOUN]()-[fa-pos/NUM]() (8; 0% instances), [fa-pos/PRON]()-[fa-pos/ADJ]() (8; 0% instances), [fa-pos/NUM]()-[fa-pos/ADJ]() (6; 0% instances), [fa-pos/NOUN]()-[fa-pos/NOUN]() (5; 0% instances), [fa-pos/ADV]()-[fa-pos/ADJ]() (4; 0% instances), [fa-pos/NOUN]()-[fa-pos/VERB]() (4; 0% instances), [fa-pos/VERB]()-[fa-pos/ADJ]() (4; 0% instances), [fa-pos/ADV]()-[fa-pos/ADV]() (1; 0% instances), [fa-pos/DET]()-[fa-pos/ADJ]() (1; 0% instances), [fa-pos/NOUN]()-[fa-pos/INTJ]() (1; 0% instances), [fa-pos/X]()-[fa-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 amod	color:blue
1	به	به	ADP	P	_	3	case	_	_
2	هر	هر	DET	DET	_	3	det	_	_
3	حال	حال	NOUN	N_SING	Number=Sing	10	nmod	_	_
4	ما	ما	PRON	PRO	Number=Plur|Person=1|PronType=Prs	10	nsubj	_	_
5	در	در	ADP	P	_	6	case	_	_
6	انتظار	انتظار	NOUN	N_SING	Number=Sing	10	nmod	_	_
7	تشکیل	تشکیل	NOUN	N_SING	Number=Sing	6	nmod:poss	_	_
8	مجلس	مجلس	NOUN	N_SING	Number=Sing	7	nmod:poss	_	_
9	ششم	ششم	ADJ	ADJ	Degree=Pos	8	amod	_	_
10	هستیم	هست	VERB	V_PRS	Number=Plur|Person=1|Tense=Pres	0	root	_	_
11	.	.	PUNCT	DELM	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
1	از	از	ADP	P	_	3	case	_	_
2	چنین	چنین	ADV	ADV	_	3	amod	_	_
3	واقعه‌ای	واقعه	NOUN	N_SING	Number=Sing	9	nmod	_	_
4	جز	جز	ADP	P	_	5	case	_	_
5	براندازان	_	NOUN	N_PL	Number=Plur	9	nmod	_	_
6	چه	چه	ADV	ADV_I	PronType=Int	7	det	_	_
7	کسی	کس	NOUN	N_SING	Number=Sing	9	nsubj	_	_
8	سود	_	NOUN	N_SING	Number=Sing	9	compound:lvc	_	_
9	می‌برد	برد#بر	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	0	root	_	_
10	؟	؟	PUNCT	DELM	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 amod	color:blue
1	بنابراین	بنابراین	SCONJ	CON	_	8	advmod	_	_
2	برنده	برنده	ADJ	ADJ	Degree=Pos	8	nsubj	_	_
3	اصلی	اصلی	ADJ	ADJ	Degree=Pos	2	amod	_	_
4	این	این	DET	DET	_	5	det	_	_
5	افزایش	افزایش	NOUN	N_SING	Number=Sing	2	nmod:poss	_	_
6	قیمت	قیمت	NOUN	N_SING	Number=Sing	5	nmod:poss	_	_
7	،	،	PUNCT	DELM	_	8	punct	_	_
8	آمریکا	آمریکا	NOUN	N_SING	Number=Sing	0	root	_	_
9	خواهد	خواست#خواه	AUX	V_AUX	Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	10	aux	_	_
10	بود	بود	VERB	V_PA	Number=Sing|Person=3|Tense=Past	8	cop	_	_
11	.	.	PUNCT	DELM	_	8	punct	_	_

~~~


