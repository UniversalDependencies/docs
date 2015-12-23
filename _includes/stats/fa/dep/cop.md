

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Persian)

This relation is universal.

4665 nodes (3%) are attached to their parents as `cop`.

4656 instances of `cop` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.41329046087889.

The following 8 pairs of parts of speech are connected with `cop`: [fa-pos/NOUN]()-[fa-pos/VERB]() (2240; 48% instances), [fa-pos/ADJ]()-[fa-pos/VERB]() (2123; 46% instances), [fa-pos/PRON]()-[fa-pos/VERB]() (130; 3% instances), [fa-pos/ADV]()-[fa-pos/VERB]() (106; 2% instances), [fa-pos/VERB]()-[fa-pos/VERB]() (33; 1% instances), [fa-pos/NUM]()-[fa-pos/VERB]() (29; 1% instances), [fa-pos/ADJ]()-[fa-pos/ADJ]() (3; 0% instances), [fa-pos/DET]()-[fa-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 cop	color:blue
1	معاویه	_	NOUN	N_SING	Number=Sing	2	nsubj	_	_
2	گفت	_	VERB	V_PA	Number=Sing|Person=3|Tense=Past	0	root	_	_
3	:	_	PUNCT	DELM	_	2	punct	_	_
4	چقدر	_	ADV	ADV_I	PronType=Int	14	advmod	_	_
5	در	_	ADP	P	_	6	case	_	_
6	دل	_	NOUN	N_SING	Number=Sing	14	nmod	_	_
7	تو	_	PRON	PRO	Number=Sing|Person=2|PronType=Prs	6	nmod:poss	_	_
8	از	_	ADP	P	_	9	case	_	_
9	دوستی	_	NOUN	N_SING	Number=Sing	14	nmod	_	_
10	علی	_	NOUN	N_SING	Number=Sing	9	nmod:poss	_	_
11	)	_	PUNCT	DELM	_	10	punct	_	_
12	ع	_	NOUN	N_SING	Number=Sing	10	dep	_	_
13	(	_	PUNCT	DELM	_	10	punct	_	_
14	باقی	_	NOUN	N_SING	Number=Sing	2	ccomp	_	_
15	است	_	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	14	cop	_	_
16	؟	_	PUNCT	DELM	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 cop	color:blue
1	از	_	ADP	P	_	2	case	_	_
2	بنی‌هاشم	_	NOUN	N_SING	Number=Sing	7	nmod	_	_
3	هم	_	SCONJ	CON	_	7	advmod	_	_
4	حتی	_	ADV	ADV	_	7	advmod	_	_
5	یک	_	NUM	NUM	NumType=Card	6	nummod	_	_
6	نفر	_	NOUN	N_SING	Number=Sing	7	nsubj	_	_
7	حاضر	_	ADJ	ADJ	Degree=Pos	0	root	_	_
8	به	_	ADP	P	_	9	case	_	_
9	بیعت	_	NOUN	N_SING	Number=Sing	7	nmod	_	_
10	با	_	ADP	P	_	11	case	_	_
11	یزید	_	NOUN	N_SING	Number=Sing	9	nmod	_	_
12	نشده	_	VERB	V_PP	Negative=Neg|Number=Sing|Person=3|VerbForm=Part	7	cop	_	_
13	است	_	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	12	aux	_	_
14	.	_	PUNCT	DELM	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 cop	color:blue
1	نکته	_	NOUN	N_SING	Number=Sing	3	nsubj	_	_
2	اصلی	_	ADJ	ADJ	Degree=Pos	1	amod	_	_
3	همین	_	PRON	PRO	Number=Sing|PronType=Dem	0	root	_	_
4	بود	_	VERB	V_PA	Number=Sing|Person=3|Tense=Past	3	cop	_	_
5	.	_	PUNCT	DELM	_	3	punct	_	_

~~~


