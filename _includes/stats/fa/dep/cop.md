

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Persian)

This relation is universal.

4700 nodes (3%) are attached to their parents as `cop`.

4691 instances of `cop` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.40404255319149.

The following 7 pairs of parts of speech are connected with `cop`: [fa-pos/NOUN]()-[fa-pos/VERB]() (2251; 48% instances), [fa-pos/ADJ]()-[fa-pos/VERB]() (2148; 46% instances), [fa-pos/PRON]()-[fa-pos/VERB]() (132; 3% instances), [fa-pos/ADV]()-[fa-pos/VERB]() (103; 2% instances), [fa-pos/VERB]()-[fa-pos/VERB]() (34; 1% instances), [fa-pos/NUM]()-[fa-pos/VERB]() (29; 1% instances), [fa-pos/ADJ]()-[fa-pos/ADJ]() (3; 0% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 cop	color:blue
1	معاویه	معاویه	NOUN	N_SING	Number=Sing	2	nsubj	_	_
2	گفت	گفت#گو	VERB	V_PA	Number=Sing|Person=3|Tense=Past	0	root	_	_
3	:	:	PUNCT	DELM	_	2	punct	_	_
4	چقدر	چقدر	ADV	ADV_I	PronType=Int	14	advmod	_	_
5	در	در	ADP	P	_	6	case	_	_
6	دل	دل	NOUN	N_SING	Number=Sing	14	nmod	_	_
7	تو	تو	PRON	PRO	Number=Sing|Person=2|PronType=Prs	6	nmod:poss	_	_
8	از	از	ADP	P	_	9	case	_	_
9	دوستی	دوستی	NOUN	N_SING	Number=Sing	14	nmod	_	_
10	علی	علی	NOUN	N_SING	Number=Sing	9	nmod:poss	_	_
11	)	)	PUNCT	DELM	_	10	punct	_	_
12	ع	ع	NOUN	N_SING	Number=Sing	10	dep	_	_
13	(	(	PUNCT	DELM	_	10	punct	_	_
14	باقی	باقی	NOUN	N_SING	Number=Sing	2	ccomp	_	_
15	است	است	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	14	cop	_	_
16	؟	؟	PUNCT	DELM	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 cop	color:blue
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
12	نشده	کرد#کن	VERB	V_PP	Negative=Neg|Number=Sing|Person=3|VerbForm=Part	7	cop	_	_
13	است	است	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	12	aux	_	_
14	.	.	PUNCT	DELM	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 cop	color:blue
1	نکته	نکته	NOUN	N_SING	Number=Sing	3	nsubj	_	_
2	اصلی	اصلی	ADJ	ADJ	Degree=Pos	1	amod	_	_
3	همین	همین	PRON	PRO	Number=Sing|PronType=Dem	0	root	_	_
4	بود	بود	VERB	V_PA	Number=Sing|Person=3|Tense=Past	3	cop	_	_
5	.	.	PUNCT	DELM	_	3	punct	_	_

~~~


