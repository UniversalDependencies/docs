

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Persian)

This relation is universal.

4164 nodes (3%) are attached to their parents as `mark`.

4159 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.4978386167147.

The following 26 pairs of parts of speech are connected with `mark`: [fa-pos/VERB]()-[fa-pos/SCONJ]() (2661; 64% instances), [fa-pos/NOUN]()-[fa-pos/SCONJ]() (634; 15% instances), [fa-pos/ADJ]()-[fa-pos/SCONJ]() (599; 14% instances), [fa-pos/VERB]()-[fa-pos/ADP]() (111; 3% instances), [fa-pos/VERB]()-[fa-pos/ADV]() (35; 1% instances), [fa-pos/NOUN]()-[fa-pos/ADP]() (25; 1% instances), [fa-pos/ADV]()-[fa-pos/SCONJ]() (21; 1% instances), [fa-pos/ADJ]()-[fa-pos/ADP]() (17; 0% instances), [fa-pos/VERB]()-[fa-pos/DET]() (10; 0% instances), [fa-pos/NOUN]()-[fa-pos/ADV]() (8; 0% instances), [fa-pos/NUM]()-[fa-pos/SCONJ]() (8; 0% instances), [fa-pos/ADJ]()-[fa-pos/ADV]() (6; 0% instances), [fa-pos/PRON]()-[fa-pos/SCONJ]() (5; 0% instances), [fa-pos/VERB]()-[fa-pos/PRON]() (5; 0% instances), [fa-pos/ADJ]()-[fa-pos/DET]() (4; 0% instances), [fa-pos/NOUN]()-[fa-pos/DET]() (4; 0% instances), [fa-pos/AUX]()-[fa-pos/SCONJ]() (2; 0% instances), [fa-pos/ADJ]()-[fa-pos/PRON]() (1; 0% instances), [fa-pos/ADP]()-[fa-pos/ADV]() (1; 0% instances), [fa-pos/ADP]()-[fa-pos/SCONJ]() (1; 0% instances), [fa-pos/ADV]()-[fa-pos/ADP]() (1; 0% instances), [fa-pos/NOUN]()-[fa-pos/ADJ]() (1; 0% instances), [fa-pos/NUM]()-[fa-pos/ADV]() (1; 0% instances), [fa-pos/PUNCT]()-[fa-pos/SCONJ]() (1; 0% instances), [fa-pos/VERB]()-[fa-pos/ADJ]() (1; 0% instances), [fa-pos/VERB]()-[fa-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 7 mark	color:blue
1	معاویه	_	NOUN	N_SING	Number=Sing	2	nsubj	_	_
2	گفت	_	VERB	V_PA	Number=Sing|Person=3|Tense=Past	0	root	_	_
3	:	_	PUNCT	DELM	_	2	punct	_	_
4	من	_	PRON	PRO	Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
5	تصمیم	_	NOUN	N_SING	Number=Sing	6	compound:lvc	_	_
6	دارم	_	VERB	V_PRS	Number=Sing|Person=1|Tense=Pres	2	ccomp	_	_
7	که	_	SCONJ	CON	_	15	mark	_	_
8	نام	_	NOUN	N_SING	Number=Sing	15	dobj	_	_
9	و	_	CONJ	CON	_	8	cc	_	_
10	یاد	_	NOUN	N_SING	Number=Sing	8	conj	_	_
11	او	_	PRON	PRO	Number=Sing|Person=3|PronType=Prs	10	nmod:poss	_	_
12	را	_	PART	CLITIC	_	8	case	_	_
13	از	_	ADP	P	_	15	case	_	_
14	بین	_	ADP	P	_	13	mwe	_	_
15	ببرم	_	VERB	V_SUB	Mood=Sub|Number=Sing|Person=1|Tense=Pres	6	ccomp	_	_
16	.	_	PUNCT	DELM	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 mark	color:blue
1	در	_	ADP	P	_	2	case	_	_
2	نامه	_	NOUN	N_SING	Number=Sing	4	nmod	_	_
3	ات	_	PRON	PRO	Number=Sing|Person=2|PronType=Prs	2	nmod:poss	_	_
4	نوشته‌ای	_	VERB	V_PP	Number=Sing|Person=2|VerbForm=Part	0	root	_	_
5	که	_	SCONJ	CON	_	6	mark	_	_
6	متوجه	_	NOUN	N_SING	Number=Sing	4	ccomp	_	_
7	خود	_	PRON	PRO	Number=Sing|Person=3|PronType=Prs|Reflex=Yes	6	nmod:poss	_	_
8	ت	_	PRON	PRO	Number=Sing|Person=2|PronType=Prs	7	nmod:poss	_	_
9	و	_	CONJ	CON	_	7	cc	_	_
10	دین	_	NOUN	N_SING	Number=Sing	7	conj	_	_
11	ت	_	PRON	PRO	Number=Sing|Person=2|PronType=Prs	10	nmod:poss	_	_
12	و	_	CONJ	CON	_	10	cc	_	_
13	امت	_	NOUN	N_SING	Number=Sing	10	conj	_	_
14	محمد	_	NOUN	N_SING	Number=Sing	13	nmod:poss	_	_
15	)	_	PUNCT	DELM	_	14	punct	_	_
16	ص	_	NOUN	N_SING	Number=Sing	14	dep	_	_
17	(	_	PUNCT	DELM	_	14	punct	_	_
18	باش	_	VERB	V_IMP	Mood=Imp|Number=Sing|Person=2	6	cop	_	_
19	.	_	PUNCT	DELM	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 mark	color:blue
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


