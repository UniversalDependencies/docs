

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Persian)

This relation is a language-specific subtype of [det]().

43 nodes (0%) are attached to their parents as `det:predet`.

43 instances of `det:predet` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.02325581395349.

The following 4 pairs of parts of speech are connected with `det:predet`: [fa-pos/NOUN]()-[fa-pos/DET]() (27; 63% instances), [fa-pos/NOUN]()-[fa-pos/ADV]() (8; 19% instances), [fa-pos/NOUN]()-[fa-pos/PRON]() (6; 14% instances), [fa-pos/NOUN]()-[fa-pos/ADJ]() (2; 5% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 det:predet	color:blue
1	از	از	ADP	P	_	4	case	_	_
2	سراسر	سراسر	DET	DET	_	4	det:predet	_	_
3	این	این	DET	DET	_	4	det	_	_
4	سرزمین	سرزمین	NOUN	N_SING	Number=Sing	10	obl	_	_
5	بوی	بوی	NOUN	N_SING	Number=Sing	10	nsubj	_	_
6	عشق	عشق	NOUN	N_SING	Number=Sing	5	nmod:poss	_	_
7	و	و	CCONJ	CON	_	8	cc	_	_
8	لطف	لطف	NOUN	N_SING	Number=Sing	6	conj	_	_
9	بر	بر	ADP	PREV	_	10	compound:prt	_	_
10	می‌خیزد	خاست#خیز	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
11	.	.	PUNCT	DELM	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 det:predet	color:blue
1	وی	وی	PRON	PRO	Number=Sing|Person=3|PronType=Prs	12	nsubj	_	_
2	که	که	SCONJ	CON	_	7	mark	_	_
3	هیچ	هیچ	ADV	ADV_NEG	Polarity=Neg	5	det:predet	_	_
4	گونه	گونه	NOUN	N_SING	Number=Sing	5	det	_	_
5	سلاحی	سلاح	NOUN	N_SING	Number=Sing	7	obj	_	_
6	حمل	حمل	NOUN	N_SING	Number=Sing	7	compound:lvc	_	_
7	نمی‌کرد	_	VERB	V_PA	Number=Sing|Person=3|Tense=Past	1	acl:relcl	_	SpaceAfter=No
8	،	،	PUNCT	DELM	_	12	punct	_	_
9	توسط	توسط	ADP	P	_	10	case	_	_
10	پلیس	پلیس	NOUN	N_SING	Number=Sing	12	nmod	_	_
11	بروکسل	_	NOUN	N_SING	Number=Sing	10	nmod:poss	_	_
12	دستگیر	دستگیر	ADJ	ADJ	Degree=Pos	0	root	_	_
13	شد	کرد#کن	AUX	V_PA	Number=Sing|Person=3|Tense=Past	12	cop	_	SpaceAfter=No
14	.	.	PUNCT	DELM	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 22 det:predet	color:blue
1	پیرمرد	پیرمرد	NOUN	N_SING	Number=Sing	9	dislocated	_	_
2	خود	خود	PRON	PRO	Number=Sing|Person=3|PronType=Prs|Reflex=Yes	9	nsubj	_	_
3	ش	او	PRON	PRO	Number=Sing|Person=3|PronType=Prs	2	nmod:poss	_	_
4	که	که	SCONJ	CON	_	7	mark	_	_
5	گوش	گوش	NOUN	N_SING	Number=Sing	7	obj	_	_
6	شنوا	شنوا	ADJ	ADJ	Degree=Pos	5	amod	_	_
7	نداشت	داشت#دار	VERB	V_PA	Number=Sing|Person=3|Tense=Past	2	acl:relcl	_	_
8	فکر	فکر	NOUN	N_SING	Number=Sing	9	compound:lvc	_	_
9	می‌کرد	کرد#کن	VERB	V_PA	Number=Sing|Person=3|Tense=Past	0	root	_	_
10	ما	ما	PRON	PRO	Number=Plur|Person=1|PronType=Prs	12	nsubj	_	_
11	هم	هم	SCONJ	CON	_	12	advmod	_	_
12	نمی‌شنویم	شنید#شنو	VERB	V_PRS	Number=Plur|Person=1|Polarity=Neg|Tense=Pres	9	ccomp	_	SpaceAfter=No
13	،	،	PUNCT	DELM	_	19	punct	_	_
14	یا	یا	CCONJ	CON	_	19	cc	_	_
15	این	این	PRON	PRO	Number=Sing|PronType=Dem	14	fixed	_	_
16	که	که	CCONJ	CON	_	14	fixed	_	_
17	می‌خواست	خواست#خواه	VERB	V_PA	Number=Sing|Person=3|Tense=Past	19	aux	_	_
18	طعنه	طعنه	NOUN	N_SING	Number=Sing	19	compound:lvc	_	_
19	بزند	زد#زن	VERB	V_SUB	Mood=Sub|Number=Sing|Person=3|Tense=Pres	12	conj	_	_
20	و	و	CCONJ	CON	_	21	cc	_	_
21	بگوید	گفت#گو	VERB	V_SUB	Mood=Sub|Number=Sing|Person=3|Tense=Pres	19	conj	_	_
22	همه	همه	PRON	PRO	PronType=Tot	24	det:predet	_	_
23	این	این	DET	DET	_	24	det	_	_
24	حرفهایی	حرف	NOUN	N_PL	Number=Plur	34	nsubj	_	_
25	که	که	SCONJ	CON	_	33	mark	_	_
26	شما	شما	PRON	PRO	Number=Plur|Person=2|PronType=Prs	33	nsubj	_	_
27	در	در	ADP	P	_	28	case	_	_
28	باب	باب	NOUN	N_SING	Number=Sing	33	obl	_	_
29	قنات	قنات	NOUN	N_SING	Number=Sing	28	nmod:poss	_	_
30	در	در	ADP	P	_	32	case	_	_
31	ین	این	DET	DET	_	32	det	_	_
32	میکروفون	میکروفون	NOUN	N_SING	Number=Sing	33	obl	_	_
33	می‌زنید	زد#زن	VERB	V_PRS	Number=Plur|Person=2|Tense=Pres	24	acl:relcl	_	_
34	چیزی	چیز	NOUN	N_SING	Number=Sing	21	ccomp	_	_
35	است	است	AUX	V_PRS	Number=Sing|Person=3|Tense=Pres	34	cop	_	_
36	از	از	ADP	P	_	37	case	_	_
37	نوع	نوع	NOUN	N_SING	Number=Sing	34	nmod	_	_
38	همین	همین	DET	DET	_	39	det	_	_
39	پف‌ها	پف	NOUN	N_PL	Number=Plur	37	nmod:poss	_	SpaceAfter=No
40	.	.	PUNCT	DELM	_	9	punct	_	_

~~~


