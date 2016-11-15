

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Persian)

This relation is a language-specific subtype of [cc]().

49 nodes (0%) are attached to their parents as `cc:preconj`.

47 instances of `cc:preconj` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.26530612244898.

The following 8 pairs of parts of speech are connected with `cc:preconj`: [fa-pos/VERB]()-[fa-pos/SCONJ]() (17; 35% instances), [fa-pos/ADP]()-[fa-pos/SCONJ]() (14; 29% instances), [fa-pos/NOUN]()-[fa-pos/SCONJ]() (7; 14% instances), [fa-pos/ADJ]()-[fa-pos/SCONJ]() (6; 12% instances), [fa-pos/ADV]()-[fa-pos/SCONJ]() (2; 4% instances), [fa-pos/ADJ]()-[fa-pos/ADJ]() (1; 2% instances), [fa-pos/NOUN]()-[fa-pos/ADV]() (1; 2% instances), [fa-pos/PRON]()-[fa-pos/SCONJ]() (1; 2% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 14 cc:preconj	color:blue
1	در	در	ADP	P	_	2	case	_	_
2	اسلام	اسلام	NOUN	N_SING	Number=Sing	6	nmod	_	_
3	همان	همان	DET	DET	_	6	mark	_	_
4	طور	طور	NOUN	N_SING	Number=Sing	3	mwe	_	_
5	که	که	CONJ	CON	_	4	mwe	_	_
6	گفته	گفت#گو	VERB	V_PP	Number=Sing|Person=3|VerbForm=Part	10	advcl	_	_
7	شد	کرد#کن	VERB	V_PA	Number=Sing|Person=3|Tense=Past	6	auxpass	_	_
8	هم	هم	SCONJ	CON	_	10	cc:preconj	_	_
9	نرمش	نرمش	NOUN	N_SING	Number=Sing	10	nsubj	_	_
10	است	است	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	0	root	_	_
11	هم	هم	CONJ	CON	_	10	cc	_	_
12	شدت	شدت	NOUN	N_SING	Number=Sing	10	conj	_	_
13	،	،	PUNCT	DELM	_	10	punct	_	_
14	هم	هم	SCONJ	CON	_	16	cc:preconj	_	_
15	تولی	تولی	NOUN	N_SING	Number=Sing	16	nsubj	_	_
16	است	است	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	10	conj	_	_
17	و	و	CONJ	CON	_	16	cc	_	_
18	هم	هم	CONJ	CON	_	17	mwe	_	_
19	تبری	تبری	NOUN	N_SING	Number=Sing	16	conj	_	_
20	.	.	PUNCT	DELM	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 cc:preconj	color:blue
1	او	او	PRON	PRO	Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	حافظ	حافظ	NOUN	N_SING	Number=Sing	0	root	_	_
3	و	و	CONJ	CON	_	2	cc	_	_
4	نگهدارندهٔ	_	NOUN	N_SING	Number=Sing	2	conj	_	_
5	ضابطه	_	NOUN	N_SING	Number=Sing	4	nmod:poss	_	_
6	و	و	CONJ	CON	_	5	cc	_	_
7	قانون	قانون	NOUN	N_SING	Number=Sing	5	conj	_	_
8	بود	بود#باش	VERB	V_PA	Number=Sing|Person=3|Tense=Past	2	cop	_	_
9	؛	؛	PUNCT	DELM	_	2	punct	_	_
10	نمی‌گذاشت	گذاشت#گذار	VERB	V_PA	Number=Sing|Person=3|Tense=Past	2	conj	_	_
11	قانون	قانون	NOUN	N_SING	Number=Sing	12	nsubj	_	_
12	نقض	نقض	NOUN	N_SING	Number=Sing	10	ccomp	_	_
13	بشود	کرد#کن	VERB	V_SUB	Mood=Sub|Number=Sing|Person=3|Tense=Pres	12	cop	_	_
14	؛	؛	PUNCT	DELM	_	12	punct	_	_
15	چه	چه	SCONJ	CON	_	16	cc:preconj	_	_
16	توسط	توسط	ADP	P	_	17	case	_	_
17	خود	خود	PRON	PRO	Number=Sing|Person=3|PronType=Prs|Reflex=Yes	12	nmod	_	_
18	ش	او	PRON	PRO	Number=Sing|Person=3|PronType=Prs	17	nmod:poss	_	_
19	،	،	PUNCT	DELM	_	17	punct	_	_
20	و	و	CONJ	CON	_	17	cc	_	_
21	چه	چه	SCONJ	CON	_	22	advmod	_	_
22	توسط	توسط	ADP	P	_	23	case	_	_
23	دیگران	دیگری	PRON	PRO	PronType=Ind	17	conj	_	_
24	.	.	PUNCT	DELM	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc:preconj	color:blue
1	تو	تو	PRON	PRO	Number=Sing|Person=2|PronType=Prs	4	nsubj	_	_
2	،	،	PUNCT	DELM	_	4	punct	_	_
3	هم	هم	SCONJ	CON	_	4	cc:preconj	_	_
4	میخانه	میخانه	NOUN	N_SING	Number=Sing	0	root	_	_
5	ما	ما	PRON	PRO	Number=Plur|Person=1|PronType=Prs	4	nmod:poss	_	_
6	یی	_	VERB	V_PRS	_	4	cop	_	_
7	و	و	CONJ	CON	_	4	cc	_	_
8	هم	هم	CONJ	CON	_	7	mwe	_	_
9	باده	باده	NOUN	N_SING	Number=Sing	4	conj	_	_
10	ما	ما	PRON	PRO	Number=Plur|Person=1|PronType=Prs	9	nmod:poss	_	_
11	.	.	PUNCT	DELM	_	4	punct	_	_

~~~


