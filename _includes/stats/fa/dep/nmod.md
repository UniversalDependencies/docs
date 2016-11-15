

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Persian)

This relation is universal.
There are 1 language-specific subtypes of `nmod`: [nmod:poss]().

15983 nodes (10%) are attached to their parents as `nmod`.

10992 instances of `nmod` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.6016392416943.

The following 34 pairs of parts of speech are connected with `nmod`: [fa-pos/VERB]()-[fa-pos/NOUN]() (7449; 47% instances), [fa-pos/NOUN]()-[fa-pos/NOUN]() (4863; 30% instances), [fa-pos/ADJ]()-[fa-pos/NOUN]() (1899; 12% instances), [fa-pos/VERB]()-[fa-pos/PRON]() (602; 4% instances), [fa-pos/ADV]()-[fa-pos/NOUN]() (305; 2% instances), [fa-pos/NOUN]()-[fa-pos/PRON]() (202; 1% instances), [fa-pos/PRON]()-[fa-pos/NOUN]() (164; 1% instances), [fa-pos/NUM]()-[fa-pos/NOUN]() (144; 1% instances), [fa-pos/ADJ]()-[fa-pos/PRON]() (137; 1% instances), [fa-pos/NOUN]()-[fa-pos/NUM]() (51; 0% instances), [fa-pos/ADV]()-[fa-pos/PRON]() (45; 0% instances), [fa-pos/VERB]()-[fa-pos/NUM]() (23; 0% instances), [fa-pos/VERB]()-[fa-pos/VERB]() (15; 0% instances), [fa-pos/PRON]()-[fa-pos/PRON]() (14; 0% instances), [fa-pos/VERB]()-[fa-pos/ADV]() (14; 0% instances), [fa-pos/ADP]()-[fa-pos/NOUN]() (12; 0% instances), [fa-pos/ADJ]()-[fa-pos/NUM]() (9; 0% instances), [fa-pos/NUM]()-[fa-pos/PRON]() (7; 0% instances), [fa-pos/VERB]()-[fa-pos/X]() (5; 0% instances), [fa-pos/ADP]()-[fa-pos/NUM]() (3; 0% instances), [fa-pos/NOUN]()-[fa-pos/ADV]() (3; 0% instances), [fa-pos/AUX]()-[fa-pos/PRON]() (2; 0% instances), [fa-pos/NOUN]()-[fa-pos/VERB]() (2; 0% instances), [fa-pos/NUM]()-[fa-pos/NUM]() (2; 0% instances), [fa-pos/VERB]()-[fa-pos/ADJ]() (2; 0% instances), [fa-pos/ADJ]()-[fa-pos/ADJ]() (1; 0% instances), [fa-pos/ADJ]()-[fa-pos/ADV]() (1; 0% instances), [fa-pos/ADJ]()-[fa-pos/VERB]() (1; 0% instances), [fa-pos/ADV]()-[fa-pos/NUM]() (1; 0% instances), [fa-pos/INTJ]()-[fa-pos/PRON]() (1; 0% instances), [fa-pos/NOUN]()-[fa-pos/X]() (1; 0% instances), [fa-pos/PUNCT]()-[fa-pos/NOUN]() (1; 0% instances), [fa-pos/SCONJ]()-[fa-pos/NOUN]() (1; 0% instances), [fa-pos/VERB]()-[fa-pos/INTJ]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 3 nmod	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 nmod	color:blue
1	معمای	معما	NOUN	N_SING	Number=Sing	8	nsubj	_	_
2	جامعه	جامعه	NOUN	N_SING	Number=Sing	1	nmod:poss	_	_
3	ما	ما	PRON	PRO	Number=Plur|Person=1|PronType=Prs	2	nmod:poss	_	_
4	ریشه	_	NOUN	N_SING	Number=Sing	8	dobj	_	_
5	در	در	ADP	P	_	7	case	_	_
6	چه	چه	ADV	ADV_I	PronType=Int	7	det	_	_
7	چیز	چیز	NOUN	N_SING	Number=Sing	4	nmod	_	_
8	دارد	داشت#دار	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	0	root	_	_
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
12	نشده	کرد#کن	VERB	V_PP	Negative=Neg|Number=Sing|Person=3|VerbForm=Part	7	cop	_	_
13	است	است	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	12	aux	_	_
14	.	.	PUNCT	DELM	_	7	punct	_	_

~~~


