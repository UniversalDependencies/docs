

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Persian)

This relation is a language-specific subtype of [nmod]().

17249 nodes (11%) are attached to their parents as `nmod:poss`.

17233 instances of `nmod:poss` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.23212939880573.

The following 28 pairs of parts of speech are connected with `nmod:poss`: [fa-pos/NOUN]()-[fa-pos/NOUN]() (14027; 81% instances), [fa-pos/NOUN]()-[fa-pos/PRON]() (2306; 13% instances), [fa-pos/ADJ]()-[fa-pos/NOUN]() (443; 3% instances), [fa-pos/PRON]()-[fa-pos/PRON]() (163; 1% instances), [fa-pos/NOUN]()-[fa-pos/ADV]() (65; 0% instances), [fa-pos/ADJ]()-[fa-pos/PRON]() (54; 0% instances), [fa-pos/ADV]()-[fa-pos/NOUN]() (42; 0% instances), [fa-pos/PRON]()-[fa-pos/NOUN]() (33; 0% instances), [fa-pos/NOUN]()-[fa-pos/NUM]() (18; 0% instances), [fa-pos/ADV]()-[fa-pos/PRON]() (12; 0% instances), [fa-pos/NOUN]()-[fa-pos/X]() (11; 0% instances), [fa-pos/ADP]()-[fa-pos/NOUN]() (10; 0% instances), [fa-pos/VERB]()-[fa-pos/NOUN]() (9; 0% instances), [fa-pos/SCONJ]()-[fa-pos/NOUN]() (8; 0% instances), [fa-pos/VERB]()-[fa-pos/PRON]() (8; 0% instances), [fa-pos/NOUN]()-[fa-pos/ADJ]() (7; 0% instances), [fa-pos/NOUN]()-[fa-pos/VERB]() (6; 0% instances), [fa-pos/DET]()-[fa-pos/NOUN]() (5; 0% instances), [fa-pos/NOUN]()-[fa-pos/DET]() (5; 0% instances), [fa-pos/NUM]()-[fa-pos/NOUN]() (5; 0% instances), [fa-pos/X]()-[fa-pos/NOUN]() (5; 0% instances), [fa-pos/ADJ]()-[fa-pos/NUM]() (1; 0% instances), [fa-pos/ADJ]()-[fa-pos/VERB]() (1; 0% instances), [fa-pos/ADP]()-[fa-pos/PRON]() (1; 0% instances), [fa-pos/ADV]()-[fa-pos/ADV]() (1; 0% instances), [fa-pos/NOUN]()-[fa-pos/SCONJ]() (1; 0% instances), [fa-pos/VERB]()-[fa-pos/ADV]() (1; 0% instances), [fa-pos/X]()-[fa-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nmod:poss	color:blue
1	به	_	ADP	P	_	3	case	_	_
2	هر	_	DET	DET	_	3	det	_	_
3	حال	_	NOUN	N_SING	Number=Sing	10	nmod	_	_
4	ما	_	PRON	PRO	Number=Plur|Person=1|PronType=Prs	10	nsubj	_	_
5	در	_	ADP	P	_	6	case	_	_
6	انتظار	_	NOUN	N_SING	Number=Sing	10	nmod	_	_
7	تشکیل	_	NOUN	N_SING	Number=Sing	6	nmod:poss	_	_
8	مجلس	_	NOUN	N_SING	Number=Sing	7	nmod:poss	_	_
9	ششم	_	ADJ	ADJ	Degree=Pos	8	amod	_	_
10	هستیم	_	VERB	V_PRS	Number=Plur|Person=1|Tense=Pres	0	root	_	_
11	.	_	PUNCT	DELM	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nmod:poss	color:blue
1	معمای	_	NOUN	N_SING	Number=Sing	8	nsubj	_	_
2	جامعه	_	NOUN	N_SING	Number=Sing	1	nmod:poss	_	_
3	ما	_	PRON	PRO	Number=Plur|Person=1|PronType=Prs	2	nmod:poss	_	_
4	ریشه	_	NOUN	N_SING	Number=Sing	8	dobj	_	_
5	در	_	ADP	P	_	7	case	_	_
6	چه	_	ADV	ADV_I	PronType=Int	7	det	_	_
7	چیز	_	NOUN	N_SING	Number=Sing	4	nmod	_	_
8	دارد	_	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	0	root	_	_
9	؟	_	PUNCT	DELM	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 nmod:poss	color:blue
1	همه	_	PRON	PRO	PronType=Tot	2	det	_	_
2	بوستان	_	NOUN	N_SING	Number=Sing	6	nsubj	_	_
3	زیر	_	ADP	P	_	4	case	_	_
4	برگ	_	NOUN	N_SING	Number=Sing	6	nmod	_	_
5	گل	_	NOUN	N_SING	Number=Sing	4	nmod:poss	_	_
6	است	_	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	0	root	_	_
7	،	_	PUNCT	DELM	_	6	punct	_	_
8	همه	_	PRON	PRO	PronType=Tot	9	det	_	_
9	کوه	_	NOUN	N_SING	Number=Sing	10	nsubj	_	_
10	پر	_	ADJ	ADJ	Degree=Pos	6	conj	_	_
11	لاله	_	NOUN	N_SING	Number=Sing	10	nmod:poss	_	_
12	و	_	CONJ	CON	_	11	cc	_	_
13	سنبل	_	NOUN	N_SING	Number=Sing	11	conj	_	_
14	است	_	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	10	cop	_	_
15	.	_	PUNCT	DELM	_	6	punct	_	_

~~~


