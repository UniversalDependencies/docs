

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Persian)

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: [nsubj:nc]().

8839 nodes (6%) are attached to their parents as `nsubj`.

8768 instances of `nsubj` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.17988460233058.

The following 32 pairs of parts of speech are connected with `nsubj`: [fa-pos/VERB]()-[fa-pos/NOUN]() (4600; 52% instances), [fa-pos/NOUN]()-[fa-pos/NOUN]() (1311; 15% instances), [fa-pos/ADJ]()-[fa-pos/NOUN]() (1246; 14% instances), [fa-pos/VERB]()-[fa-pos/PRON]() (914; 10% instances), [fa-pos/NOUN]()-[fa-pos/PRON]() (223; 3% instances), [fa-pos/ADJ]()-[fa-pos/PRON]() (163; 2% instances), [fa-pos/PRON]()-[fa-pos/NOUN]() (103; 1% instances), [fa-pos/ADV]()-[fa-pos/NOUN]() (64; 1% instances), [fa-pos/VERB]()-[fa-pos/NUM]() (41; 0% instances), [fa-pos/VERB]()-[fa-pos/ADJ]() (35; 0% instances), [fa-pos/NUM]()-[fa-pos/NOUN]() (23; 0% instances), [fa-pos/NOUN]()-[fa-pos/NUM]() (19; 0% instances), [fa-pos/NOUN]()-[fa-pos/DET]() (10; 0% instances), [fa-pos/VERB]()-[fa-pos/ADV]() (9; 0% instances), [fa-pos/ADJ]()-[fa-pos/NUM]() (8; 0% instances), [fa-pos/ADV]()-[fa-pos/PRON]() (8; 0% instances), [fa-pos/NOUN]()-[fa-pos/ADJ]() (8; 0% instances), [fa-pos/PRON]()-[fa-pos/PRON]() (8; 0% instances), [fa-pos/VERB]()-[fa-pos/X]() (8; 0% instances), [fa-pos/PRON]()-[fa-pos/NUM]() (7; 0% instances), [fa-pos/NOUN]()-[fa-pos/ADV]() (6; 0% instances), [fa-pos/ADJ]()-[fa-pos/ADJ]() (5; 0% instances), [fa-pos/NUM]()-[fa-pos/PRON]() (4; 0% instances), [fa-pos/PRON]()-[fa-pos/ADJ]() (4; 0% instances), [fa-pos/VERB]()-[fa-pos/DET]() (4; 0% instances), [fa-pos/ADJ]()-[fa-pos/ADV]() (2; 0% instances), [fa-pos/ADJ]()-[fa-pos/DET]() (1; 0% instances), [fa-pos/ADV]()-[fa-pos/ADJ]() (1; 0% instances), [fa-pos/ADV]()-[fa-pos/X]() (1; 0% instances), [fa-pos/DET]()-[fa-pos/NUM]() (1; 0% instances), [fa-pos/NOUN]()-[fa-pos/X]() (1; 0% instances), [fa-pos/PUNCT]()-[fa-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 nsubj	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 nsubj	color:blue
1	گفت	گفت#گو	VERB	V_PA	Number=Sing|Person=3|Tense=Past	0	root	_	_
2	:	:	PUNCT	DELM	_	1	punct	_	_
3	تمام	تمام	DET	DET	_	4	det	_	_
4	محبت	_	NOUN	N_SING	Number=Sing	9	nsubj	_	_
5	او	او	PRON	PRO	Number=Sing|Person=3|PronType=Prs	4	nmod:poss	_	_
6	در	در	ADP	P	_	7	case	_	_
7	دل	دل	NOUN	N_SING	Number=Sing	9	nmod	_	_
8	م	من	PRON	PRO	Number=Sing|Person=1|PronType=Prs	7	nmod:poss	_	_
9	باقی	باقی	NOUN	N_SING	Number=Sing	1	ccomp	_	_
10	است	است	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	9	cop	_	_
11	.	.	PUNCT	DELM	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nsubj	color:blue
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


