

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Persian)

This relation is universal.

4112 nodes (3%) are attached to their parents as `ccomp`.

4102 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.733219844358.

The following 36 pairs of parts of speech are connected with `ccomp`: [fa-pos/VERB]()-[fa-pos/VERB]() (1938; 47% instances), [fa-pos/VERB]()-[fa-pos/NOUN]() (485; 12% instances), [fa-pos/VERB]()-[fa-pos/ADJ]() (448; 11% instances), [fa-pos/NOUN]()-[fa-pos/VERB]() (361; 9% instances), [fa-pos/ADJ]()-[fa-pos/VERB]() (311; 8% instances), [fa-pos/PRON]()-[fa-pos/VERB]() (87; 2% instances), [fa-pos/ADJ]()-[fa-pos/NOUN]() (81; 2% instances), [fa-pos/NOUN]()-[fa-pos/NOUN]() (81; 2% instances), [fa-pos/NOUN]()-[fa-pos/ADJ]() (77; 2% instances), [fa-pos/ADJ]()-[fa-pos/ADJ]() (73; 2% instances), [fa-pos/VERB]()-[fa-pos/ADV]() (33; 1% instances), [fa-pos/VERB]()-[fa-pos/PRON]() (22; 1% instances), [fa-pos/PRON]()-[fa-pos/ADJ]() (19; 0% instances), [fa-pos/ADV]()-[fa-pos/VERB]() (17; 0% instances), [fa-pos/VERB]()-[fa-pos/X]() (17; 0% instances), [fa-pos/PRON]()-[fa-pos/NOUN]() (14; 0% instances), [fa-pos/ADJ]()-[fa-pos/PRON]() (6; 0% instances), [fa-pos/NOUN]()-[fa-pos/PRON]() (5; 0% instances), [fa-pos/NUM]()-[fa-pos/VERB]() (5; 0% instances), [fa-pos/VERB]()-[fa-pos/NUM]() (5; 0% instances), [fa-pos/ADJ]()-[fa-pos/ADV]() (3; 0% instances), [fa-pos/ADV]()-[fa-pos/ADJ]() (3; 0% instances), [fa-pos/NUM]()-[fa-pos/NOUN]() (3; 0% instances), [fa-pos/ADV]()-[fa-pos/NOUN]() (2; 0% instances), [fa-pos/DET]()-[fa-pos/VERB]() (2; 0% instances), [fa-pos/NOUN]()-[fa-pos/X]() (2; 0% instances), [fa-pos/NUM]()-[fa-pos/ADJ]() (2; 0% instances), [fa-pos/PRON]()-[fa-pos/NUM]() (2; 0% instances), [fa-pos/AUX]()-[fa-pos/ADJ]() (1; 0% instances), [fa-pos/AUX]()-[fa-pos/VERB]() (1; 0% instances), [fa-pos/NOUN]()-[fa-pos/ADV]() (1; 0% instances), [fa-pos/NOUN]()-[fa-pos/PART]() (1; 0% instances), [fa-pos/PRON]()-[fa-pos/ADV]() (1; 0% instances), [fa-pos/VERB]()-[fa-pos/AUX]() (1; 0% instances), [fa-pos/VERB]()-[fa-pos/INTJ]() (1; 0% instances), [fa-pos/VERB]()-[fa-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 ccomp	color:blue
1	بخوانید	_	VERB	V_SUB	Mood=Sub|Number=Plur|Person=2|Tense=Pres	0	root	_	_
2	از	_	ADP	P	_	3	case	_	_
3	آن	_	PRON	PRO	Number=Sing|PronType=Dem	5	nmod	_	_
4	دفاع	_	NOUN	N_SING	Number=Sing	5	compound:lvc	_	_
5	نکرد	_	VERB	V_PA	Number=Sing|Person=3|Tense=Past	1	ccomp	_	_
6	.	_	PUNCT	DELM	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 14 ccomp	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 ccomp	color:blue
1	در	_	ADP	P	_	3	case	_	_
2	مورد	_	ADP	P	_	1	mwe	_	_
3	عبدالله‌بن‌زبیر	_	NOUN	N_SING	Number=Sing	5	nmod	_	_
4	سفارش	_	NOUN	N_SING	Number=Sing	5	compound:lvc	_	_
5	می‌کند	_	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	0	root	_	_
6	که	_	SCONJ	CON	_	8	mark	_	_
7	کاملاً	_	ADV	ADV	_	8	advmod	_	_
8	مواظب	_	ADJ	ADJ	Degree=Pos	5	ccomp	_	_
9	او	_	PRON	PRO	Number=Sing|Person=3|PronType=Prs	8	nmod:poss	_	_
10	باش	_	VERB	V_IMP	Mood=Imp|Number=Sing|Person=2	8	cop	_	_
11	.	_	PUNCT	DELM	_	5	punct	_	_

~~~


