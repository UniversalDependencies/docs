

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Persian)

This relation is universal.
There are 1 language-specific subtypes of `nmod`: [nmod:poss]().

6941 nodes (5%) are attached to their parents as `nmod`.

4265 instances of `nmod` (61%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.02751764875378.

The following 25 pairs of parts of speech are connected with `nmod`: [fa-pos/NOUN]()-[fa-pos/NOUN]() (4258; 61% instances), [fa-pos/ADJ]()-[fa-pos/NOUN]() (1678; 24% instances), [fa-pos/ADV]()-[fa-pos/NOUN]() (278; 4% instances), [fa-pos/NOUN]()-[fa-pos/PRON]() (184; 3% instances), [fa-pos/PRON]()-[fa-pos/NOUN]() (142; 2% instances), [fa-pos/NUM]()-[fa-pos/NOUN]() (130; 2% instances), [fa-pos/ADJ]()-[fa-pos/PRON]() (126; 2% instances), [fa-pos/NOUN]()-[fa-pos/NUM]() (47; 1% instances), [fa-pos/ADV]()-[fa-pos/PRON]() (42; 1% instances), [fa-pos/PRON]()-[fa-pos/PRON]() (14; 0% instances), [fa-pos/ADJ]()-[fa-pos/NUM]() (10; 0% instances), [fa-pos/ADP]()-[fa-pos/NOUN]() (9; 0% instances), [fa-pos/NUM]()-[fa-pos/PRON]() (7; 0% instances), [fa-pos/ADP]()-[fa-pos/NUM]() (3; 0% instances), [fa-pos/NOUN]()-[fa-pos/ADV]() (2; 0% instances), [fa-pos/NOUN]()-[fa-pos/VERB]() (2; 0% instances), [fa-pos/ADJ]()-[fa-pos/ADJ]() (1; 0% instances), [fa-pos/ADJ]()-[fa-pos/ADV]() (1; 0% instances), [fa-pos/ADJ]()-[fa-pos/VERB]() (1; 0% instances), [fa-pos/ADV]()-[fa-pos/NUM]() (1; 0% instances), [fa-pos/INTJ]()-[fa-pos/PRON]() (1; 0% instances), [fa-pos/NOUN]()-[fa-pos/X]() (1; 0% instances), [fa-pos/NUM]()-[fa-pos/NUM]() (1; 0% instances), [fa-pos/PUNCT]()-[fa-pos/NOUN]() (1; 0% instances), [fa-pos/SCONJ]()-[fa-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 nmod	color:blue
1	معمای	معما	NOUN	N_SING	Number=Sing	8	nsubj	_	_
2	جامعه	جامعه	NOUN	N_SING	Number=Sing	1	nmod:poss	_	_
3	ما	ما	PRON	PRO	Number=Plur|Person=1|PronType=Prs	2	nmod:poss	_	_
4	ریشه	_	NOUN	N_SING	Number=Sing	8	obj	_	_
5	در	در	ADP	P	_	7	case	_	_
6	چه	چه	ADV	ADV_I	PronType=Int	7	det	_	_
7	چیز	چیز	NOUN	N_SING	Number=Sing	4	nmod	_	_
8	دارد	داشت#دار	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
9	؟	؟	PUNCT	DELM	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 nmod	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nmod	color:blue
1	روزی	روز	NOUN	N_SING	Number=Sing	13	advmod	_	_
2	عدی‌بن‌حاتم	_	NOUN	N_SING	Number=Sing	13	nsubj	_	_
3	بعد	بعد	ADV	ADV_TIME	Case=Tem	13	advmod	_	_
4	از	از	ADP	P	_	5	case	_	_
5	شهادت	_	NOUN	N_SING	Number=Sing	3	nmod	_	_
6	علی	علی	NOUN	N_SING	Number=Sing	5	nmod:poss	_	SpaceAfter=No
7	)	)	PUNCT	DELM	_	6	punct	_	_
8	ع	ع	NOUN	N_SING	Number=Sing	6	dep	_	_
9	(	(	PUNCT	DELM	_	6	punct	_	SpaceAfter=No
10	به	به	ADP	P	_	12	case	_	_
11	نزد	نزد	ADP	P	_	10	fixed	_	_
12	معاویه	معاویه	NOUN	N_SING	Number=Sing	13	obl	_	_
13	رفت	رفت#رو	VERB	V_PA	Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
14	.	.	PUNCT	DELM	_	13	punct	_	_

~~~


