

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Persian)

This relation is a language-specific subtype of [nmod]().

17358 nodes (11%) are attached to their parents as `nmod:poss`.

17342 instances of `nmod:poss` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.23487729001037.

The following 28 pairs of parts of speech are connected with `nmod:poss`: [fa-pos/NOUN]()-[fa-pos/NOUN]() (14108; 81% instances), [fa-pos/NOUN]()-[fa-pos/PRON]() (2328; 13% instances), [fa-pos/ADJ]()-[fa-pos/NOUN]() (444; 3% instances), [fa-pos/PRON]()-[fa-pos/PRON]() (167; 1% instances), [fa-pos/NOUN]()-[fa-pos/ADV]() (65; 0% instances), [fa-pos/ADJ]()-[fa-pos/PRON]() (54; 0% instances), [fa-pos/ADV]()-[fa-pos/NOUN]() (42; 0% instances), [fa-pos/PRON]()-[fa-pos/NOUN]() (33; 0% instances), [fa-pos/NOUN]()-[fa-pos/NUM]() (18; 0% instances), [fa-pos/ADV]()-[fa-pos/PRON]() (11; 0% instances), [fa-pos/NOUN]()-[fa-pos/X]() (11; 0% instances), [fa-pos/ADP]()-[fa-pos/NOUN]() (10; 0% instances), [fa-pos/VERB]()-[fa-pos/NOUN]() (10; 0% instances), [fa-pos/NOUN]()-[fa-pos/ADJ]() (9; 0% instances), [fa-pos/SCONJ]()-[fa-pos/NOUN]() (8; 0% instances), [fa-pos/VERB]()-[fa-pos/PRON]() (8; 0% instances), [fa-pos/DET]()-[fa-pos/NOUN]() (5; 0% instances), [fa-pos/NOUN]()-[fa-pos/DET]() (5; 0% instances), [fa-pos/NOUN]()-[fa-pos/VERB]() (5; 0% instances), [fa-pos/NUM]()-[fa-pos/NOUN]() (5; 0% instances), [fa-pos/X]()-[fa-pos/NOUN]() (5; 0% instances), [fa-pos/ADJ]()-[fa-pos/NUM]() (1; 0% instances), [fa-pos/ADJ]()-[fa-pos/VERB]() (1; 0% instances), [fa-pos/ADP]()-[fa-pos/PRON]() (1; 0% instances), [fa-pos/ADV]()-[fa-pos/ADV]() (1; 0% instances), [fa-pos/NOUN]()-[fa-pos/SCONJ]() (1; 0% instances), [fa-pos/VERB]()-[fa-pos/ADV]() (1; 0% instances), [fa-pos/X]()-[fa-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nmod:poss	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nmod:poss	color:blue
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
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 nmod:poss	color:blue
1	همه	همه	PRON	PRO	PronType=Tot	2	det	_	_
2	بوستان	بوستان	NOUN	N_SING	Number=Sing	6	nsubj	_	_
3	زیر	زیر	ADP	P	_	4	case	_	_
4	برگ	برگ	NOUN	N_SING	Number=Sing	6	nmod	_	_
5	گل	گل	NOUN	N_SING	Number=Sing	4	nmod:poss	_	_
6	است	است	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	0	root	_	_
7	،	،	PUNCT	DELM	_	6	punct	_	_
8	همه	همه	PRON	PRO	PronType=Tot	9	det	_	_
9	کوه	کوه	NOUN	N_SING	Number=Sing	10	nsubj	_	_
10	پر	پر	ADJ	ADJ	Degree=Pos	6	conj	_	_
11	لاله	لاله	NOUN	N_SING	Number=Sing	10	nmod:poss	_	_
12	و	و	CONJ	CON	_	11	cc	_	_
13	سنبل	سنبل	NOUN	N_SING	Number=Sing	11	conj	_	_
14	است	است	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	10	cop	_	_
15	.	.	PUNCT	DELM	_	6	punct	_	_

~~~


