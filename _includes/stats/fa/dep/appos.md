

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Persian)

This relation is universal.

586 nodes (0%) are attached to their parents as `appos`.

576 instances of `appos` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.21843003412969.

The following 22 pairs of parts of speech are connected with `appos`: [fa-pos/NOUN]()-[fa-pos/NOUN]() (501; 85% instances), [fa-pos/VERB]()-[fa-pos/NOUN]() (24; 4% instances), [fa-pos/ADJ]()-[fa-pos/NOUN]() (12; 2% instances), [fa-pos/PRON]()-[fa-pos/NOUN]() (10; 2% instances), [fa-pos/NOUN]()-[fa-pos/NUM]() (7; 1% instances), [fa-pos/NOUN]()-[fa-pos/ADJ]() (5; 1% instances), [fa-pos/NOUN]()-[fa-pos/VERB]() (5; 1% instances), [fa-pos/NOUN]()-[fa-pos/PRON]() (3; 1% instances), [fa-pos/ADJ]()-[fa-pos/ADJ]() (2; 0% instances), [fa-pos/ADV]()-[fa-pos/NOUN]() (2; 0% instances), [fa-pos/ADV]()-[fa-pos/VERB]() (2; 0% instances), [fa-pos/NOUN]()-[fa-pos/ADV]() (2; 0% instances), [fa-pos/X]()-[fa-pos/NOUN]() (2; 0% instances), [fa-pos/ADJ]()-[fa-pos/PRON]() (1; 0% instances), [fa-pos/ADJ]()-[fa-pos/X]() (1; 0% instances), [fa-pos/ADV]()-[fa-pos/ADV]() (1; 0% instances), [fa-pos/NOUN]()-[fa-pos/X]() (1; 0% instances), [fa-pos/PRON]()-[fa-pos/ADV]() (1; 0% instances), [fa-pos/PRON]()-[fa-pos/VERB]() (1; 0% instances), [fa-pos/VERB]()-[fa-pos/ADJ]() (1; 0% instances), [fa-pos/VERB]()-[fa-pos/PRON]() (1; 0% instances), [fa-pos/VERB]()-[fa-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 appos	color:blue
1	اما	_	CONJ	CON	_	8	cc	_	_
2	اکثریت	_	NOUN	N_SING	Number=Sing	8	nsubj	_	_
3	مردم	_	NOUN	N_SING	Number=Sing	2	nmod:poss	_	_
4	،	_	PUNCT	DELM	_	2	punct	_	_
5	بویژه	_	ADV	ADV	_	6	advmod	_	_
6	بنی‌هاشم	_	NOUN	N_SING	Number=Sing	2	appos	_	_
7	مقاومت	_	NOUN	N_SING	Number=Sing	8	compound:lvc	_	_
8	می‌کنند	_	VERB	V_PRS	Number=Plur|Person=3|Tense=Pres	0	root	_	_
9	.	_	PUNCT	DELM	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 appos	color:blue
1	این	_	DET	DET	_	2	det	_	_
2	مورد	_	NOUN	N_SING	Number=Sing	10	dobj	_	_
3	را	را	PART	CLITIC	_	2	case	_	_
4	که	که	SCONJ	CON	_	6	mark	_	_
5	شما	_	PRON	PRO	Number=Plur|Person=2|PronType=Prs	6	nsubj	_	_
6	گفتید	_	VERB	V_PA	Number=Plur|Person=2|Tense=Past	2	acl:relcl	_	_
7	من	_	PRON	PRO	Number=Sing|Person=1|PronType=Prs	10	nsubj	_	_
8	دو	_	NUM	NUM	NumType=Card	9	nummod	_	_
9	بخش	_	NOUN	N_SING	Number=Sing	10	compound:lvc	_	_
10	می‌کنم	_	VERB	V_PRS	Number=Sing|Person=1|Tense=Pres	0	root	_	_
11	:	_	PUNCT	DELM	_	10	punct	_	_
12	تصویربرداری	_	NOUN	N_SING	Number=Sing	10	appos	_	_
13	و	و	CONJ	CON	_	12	cc	_	_
14	مونتاژ	_	NOUN	N_SING	Number=Sing	12	conj	_	_
15	.	_	PUNCT	DELM	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 4 appos	color:blue
1	این	_	DET	DET	_	2	det	_	_
2	آدمها	_	NOUN	N_PL	Number=Plur	11	nsubj	_	_
3	،	_	PUNCT	DELM	_	11	punct	_	_
4	آدمهای	_	NOUN	N_PL	Number=Plur	11	appos	_	_
5	سری	_	NOUN	N_SING	Number=Sing	4	nmod:poss	_	_
6	جدید	_	ADJ	ADJ	Degree=Pos	5	amod	_	_
7	،	_	PUNCT	DELM	_	11	punct	_	_
8	به	به	ADP	P	_	10	case	_	_
9	هیچ	_	ADV	ADV_NEG	Negative=Neg	10	det	_	_
10	وجه	_	NOUN	N_SING	Number=Sing	11	nmod	_	_
11	خوب	_	ADJ	ADJ	Degree=Pos	0	root	_	_
12	نیستند	_	VERB	V_PRS	Negative=Neg|Number=Plur|Person=3|Tense=Pres	11	cop	_	_
13	و	و	CONJ	CON	_	11	cc	_	_
14	بد	_	ADJ	ADJ	Degree=Pos	11	conj	_	_
15	نیستند	_	VERB	V_PRS	Negative=Neg|Number=Plur|Person=3|Tense=Pres	14	cop	_	_
16	و	و	CONJ	CON	_	14	cc	_	_
17	نمی‌توانیم	_	VERB	V_PRS	Negative=Neg|Number=Plur|Person=1|Tense=Pres	19	aux	_	_
18	قضاوت	_	NOUN	N_SING	Number=Sing	19	compound:lvc	_	_
19	کنیم	_	VERB	V_SUB	Mood=Sub|Number=Plur|Person=1|Tense=Pres	14	conj	_	_
20	این	_	PRON	PRO	Number=Sing|PronType=Dem	21	nsubj	_	_
21	خوب	_	ADJ	ADJ	Degree=Pos	19	ccomp	_	_
22	است	_	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	21	cop	_	_
23	یا	یا	CONJ	CON	_	21	cc	_	_
24	بد	_	ADJ	ADJ	Degree=Pos	21	conj	_	_
25	.	_	PUNCT	DELM	_	11	punct	_	_

~~~


