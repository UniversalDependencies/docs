

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Persian)

This relation is universal.

105 nodes (0%) are attached to their parents as `neg`.

101 instances of `neg` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.18095238095238.

The following 5 pairs of parts of speech are connected with `neg`: [fa-pos/NOUN]()-[fa-pos/ADV]() (46; 44% instances), [fa-pos/ADJ]()-[fa-pos/ADV]() (26; 25% instances), [fa-pos/ADP]()-[fa-pos/ADV]() (25; 24% instances), [fa-pos/ADV]()-[fa-pos/ADV]() (5; 5% instances), [fa-pos/PRON]()-[fa-pos/ADV]() (3; 3% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 neg	color:blue
1	آیا	_	SCONJ	CON	_	11	advmod	_	_
2	علی	_	NOUN	N_SING	Number=Sing	11	nsubj	_	_
3	)	_	PUNCT	DELM	_	2	punct	_	_
4	ع	_	NOUN	N_SING	Number=Sing	2	dep	_	_
5	(	_	PUNCT	DELM	_	2	punct	_	_
6	بر	_	ADP	P	_	8	case	_	_
7	غیر	_	ADV	ADV_NEG	Negative=Neg	8	neg	_	_
8	دین	_	NOUN	N_SING	Number=Sing	11	nmod	_	_
9	پسرعموی	_	NOUN	N_SING	Number=Sing	8	nmod:poss	_	_
10	ش	_	PRON	PRO	Number=Sing|Person=3|PronType=Prs	9	nmod:poss	_	_
11	بود	_	VERB	V_PA	Number=Sing|Person=3|Tense=Past	0	root	_	_
12	؟	_	PUNCT	DELM	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 neg	color:blue
1	البته	_	ADV	ADV	_	7	advmod	_	_
2	فقط	_	ADV	ADV	_	7	advmod	_	_
3	در	_	ADP	P	_	4	case	_	_
4	محدوده	_	NOUN	N_SING	Number=Sing	7	nmod	_	_
5	قانون	_	NOUN	N_SING	Number=Sing	4	nmod:poss	_	_
6	نه	_	ADV	ADV_NEG	Negative=Neg	7	neg	_	_
7	تندتر	_	ADJ	ADJ_CMPR	Degree=Cmp	0	root	_	_
8	و	_	CONJ	CON	_	7	cc	_	_
9	نه	_	ADV	ADV_NEG	Negative=Neg	10	neg	_	_
10	کندتر	_	ADJ	ADJ_CMPR	Degree=Cmp	7	conj	_	_
11	و	_	CONJ	CON	_	10	cc	_	_
12	نه	_	ADV	ADV_NEG	Negative=Neg	13	neg	_	_
13	زیادتر	_	ADJ	ADJ_CMPR	Degree=Cmp	10	conj	_	_
14	و	_	CONJ	CON	_	13	cc	_	_
15	نه	_	ADV	ADV_NEG	Negative=Neg	16	neg	_	_
16	کمتر	_	ADJ	ADJ_CMPR	Degree=Cmp	13	conj	_	_
17	.	_	PUNCT	DELM	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 neg	color:blue
1	همچنین	_	CONJ	CON	_	15	cc	_	_
2	آنطور	_	ADV	ADV	_	15	nmod	_	_
3	که	_	SCONJ	CON	_	4	mark	_	_
4	می‌بایست	_	AUX	V_AUX	VerbForm=Inf	2	acl:relcl	_	_
5	مورد	_	ADP	P	_	6	case	_	_
6	مطالعهٔ	_	NOUN	N_SING	Number=Sing	15	nmod	_	_
7	علما	_	NOUN	N_PL	Number=Plur	6	nmod:poss	_	_
8	و	_	CONJ	CON	_	7	cc	_	_
9	فضل‌ا	_	NOUN	N_PL	Number=Plur	7	conj	_	_
10	غیر	_	ADV	ADV_NEG	Negative=Neg	11	neg	_	_
11	از	_	ADP	P	_	12	case	_	_
12	احمد	_	NOUN	N_SING	Number=Sing	15	nmod	_	_
13	گلچین	_	NOUN	N_SING	Number=Sing	12	name	_	_
14	قرار	_	NOUN	N_SING	Number=Sing	15	compound:lvc	_	_
15	نگرفته‌اند	_	VERB	V_PP	Negative=Neg|Number=Plur|Person=3|VerbForm=Part	0	root	_	_
16	.	_	PUNCT	DELM	_	15	punct	_	_

~~~


