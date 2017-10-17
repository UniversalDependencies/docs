

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Persian)

This relation is universal.
There are 1 language-specific subtypes of `flat`: [flat:foreign]().

2908 nodes (2%) are attached to their parents as `flat`.

2908 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.08459422283356.

The following 14 pairs of parts of speech are connected with `flat`: [fa-pos/NOUN]()-[fa-pos/NOUN]() (2809; 97% instances), [fa-pos/X]()-[fa-pos/NOUN]() (31; 1% instances), [fa-pos/ADJ]()-[fa-pos/NOUN]() (18; 1% instances), [fa-pos/NOUN]()-[fa-pos/X]() (14; 0% instances), [fa-pos/X]()-[fa-pos/X]() (10; 0% instances), [fa-pos/ADV]()-[fa-pos/NOUN]() (8; 0% instances), [fa-pos/NOUN]()-[fa-pos/NUM]() (5; 0% instances), [fa-pos/NOUN]()-[fa-pos/ADJ]() (3; 0% instances), [fa-pos/NOUN]()-[fa-pos/VERB]() (3; 0% instances), [fa-pos/ADV]()-[fa-pos/PRON]() (2; 0% instances), [fa-pos/NUM]()-[fa-pos/NOUN]() (2; 0% instances), [fa-pos/ADP]()-[fa-pos/NOUN]() (1; 0% instances), [fa-pos/NOUN]()-[fa-pos/ADV]() (1; 0% instances), [fa-pos/PRON]()-[fa-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat	color:blue
1	نامه‌	نامه	NOUN	N_SING	Number=Sing	9	nsubj	_	_
2	اش	او	PRON	PRO	Number=Sing|Person=3|PronType=Prs	1	nmod:poss	_	_
3	به	به	ADP	P	_	4	case	_	_
4	امام	امام	NOUN	N_SING	Number=Sing	9	nmod	_	_
5	حسین	حسین	NOUN	N_SING	Number=Sing	4	flat	_	SpaceAfter=No
6	)	)	PUNCT	DELM	_	5	punct	_	_
7	ع	ع	NOUN	N_SING	Number=Sing	5	dep	_	_
8	(	(	PUNCT	DELM	_	5	punct	_	SpaceAfter=No
9	محترمانه‌تر	محترمانه	ADJ	ADJ_CMPR	Degree=Cmp	0	root	_	_
10	از	از	ADP	P	_	11	case	_	_
11	دیگران	دیگری	PRON	PRO	PronType=Ind	9	nmod	_	_
12	بود	بود	AUX	V_PA	Number=Sing|Person=3|Tense=Past	9	cop	_	SpaceAfter=No
13	.	.	PUNCT	DELM	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 flat	color:blue
1	قدحی	قدح	NOUN	N_SING	Number=Sing	2	obj	_	_
2	خواست	خواست#خواه	VERB	V_PA	Number=Sing|Person=3|Tense=Past	0	root	_	_
3	و	و	CCONJ	CON	_	4	cc	_	_
4	نوشید	نوشید#نوش	VERB	V_PA	Number=Sing|Person=3|Tense=Past	2	conj	_	_
5	و	و	CCONJ	CON	_	6	cc	_	_
6	گفت	گفت#گو	VERB	V_PA	Number=Sing|Person=3|Tense=Past	4	conj	_	SpaceAfter=No
7	:	:	PUNCT	DELM	_	6	punct	_	_
8	ای	ای	INTJ	INT	_	9	det	_	_
9	ابا	ابا	X	FW	_	13	vocative	_	_
10	عبدالله	عبدالله	NOUN	N_SING	Number=Sing	9	flat	_	_
11	تو	تو	PRON	PRO	Number=Sing|Person=2|PronType=Prs	13	nsubj	_	_
12	هم	هم	SCONJ	CON	_	13	advmod	_	_
13	بنوش	نوشید#نوش	VERB	V_IMP	Mood=Imp|Number=Sing|Person=2	6	ccomp	_	SpaceAfter=No
14	!	!	PUNCT	DELM	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat	color:blue
1	احمد	احمد	NOUN	N_SING	Number=Sing	4	nsubj	_	_
2	کمی	کم	ADV	ADV	_	4	advmod	_	_
3	سر	سر	NOUN	N_SING	Number=Sing	4	compound:lvc	_	_
4	برمی‌دارد	_	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	0	root	_	_
5	و	و	CCONJ	CON	_	7	cc	_	_
6	زیرچشمی	زیرچشمی	ADV	ADV	_	7	advmod	_	_
7	مواظب	مواظب	ADJ	ADJ	Degree=Pos	4	conj	_	_
8	حسینی	حسینی	NOUN	N_SING	Number=Sing	7	flat	_	_
9	است	است	AUX	V_PRS	Number=Sing|Person=3|Tense=Pres	7	cop	_	_
10	و	و	CCONJ	CON	_	11	cc	_	_
11	کنجکاو	_	ADJ	ADJ	Degree=Pos	7	conj	_	_
12	پاسخ	پاسخ	NOUN	N_SING	Number=Sing	11	nmod:poss	_	_
13	وی	وی	PRON	PRO	Number=Sing|Person=3|PronType=Prs	12	nmod:poss	_	SpaceAfter=No
14	.	.	PUNCT	DELM	_	4	punct	_	_

~~~


