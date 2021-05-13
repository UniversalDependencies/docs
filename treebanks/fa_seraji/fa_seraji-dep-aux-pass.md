---
layout: base
title:  'Statistics of aux:pass in UD_Persian-Seraji'
udver: '2'
---

## Treebank Statistics: UD_Persian-Seraji: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="fa_seraji-dep-aux.html">aux</a></tt>.

217 nodes (0%) are attached to their parents as `aux:pass`.

216 instances of `aux:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.08755760368664.

The following 3 pairs of parts of speech are connected with `aux:pass`: <tt><a href="fa_seraji-pos-VERB.html">VERB</a></tt>-<tt><a href="fa_seraji-pos-VERB.html">VERB</a></tt> (198; 91% instances), <tt><a href="fa_seraji-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fa_seraji-pos-VERB.html">VERB</a></tt> (18; 8% instances), <tt><a href="fa_seraji-pos-AUX.html">AUX</a></tt>-<tt><a href="fa_seraji-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 aux:pass	color:blue
1	هرگاه	_	ADV	ADV_TIME	Case=Tem	5	advmod	_	_
2	او	او	PRON	PRO	Number=Sing|Person=3|PronType=Prs	5	obj	_	_
3	را	را	PART	CLITIC	_	2	case	_	_
4	یاد	یاد	NOUN	N_SING	Number=Sing	5	compound:lvc	_	_
5	می‌کنم	_	VERB	V_PRS	Number=Sing|Person=1|Tense=Pres	0	root	_	SpaceAfter=No
6	،	،	PUNCT	DELM	_	12	punct	_	_
7	بر	بر	ADP	P	_	9	case	_	_
8	آن	آن	DET	DET	_	9	det	_	_
9	محبت	_	NOUN	N_SING	Number=Sing	12	obl	_	_
10	و	و	CCONJ	CON	_	11	cc	_	_
11	دوستی	دوستی	NOUN	N_SING	Number=Sing	9	conj	_	_
12	افزوده	افزوده	VERB	V_PP	Number=Sing|Person=3|VerbForm=Part	5	ccomp	_	_
13	می‌شود	کرد#کن	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	12	aux:pass	_	SpaceAfter=No
14	.	.	PUNCT	DELM	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 17 aux:pass	color:blue
1	با	با	ADP	P	_	2	case	_	_
2	شروع	شروع	NOUN	N_SING	Number=Sing	16	nmod	_	_
3	ثبت	ثبت	NOUN	N_SING	Number=Sing	2	nmod:poss	_	_
4	نام	نام	NOUN	N_SING	Number=Sing	3	fixed	_	_
5	تلفن	تلفن	NOUN	N_SING	Number=Sing	4	nmod:poss	_	_
6	همراه	همراه	NOUN	N_SING	Number=Sing	5	flat	_	SpaceAfter=No
7	،	،	PUNCT	DELM	_	2	punct	_	_
8	از	از	ADP	P	_	9	case	_	_
9	رونق	رونق	NOUN	N_SING	Number=Sing	16	nmod	_	_
10	بازار	بازار	NOUN	N_SING	Number=Sing	9	nmod:poss	_	_
11	سکه	سکه	NOUN	N_SING	Number=Sing	10	nmod:poss	_	_
12	طلا	طلا	NOUN	N_SING	Number=Sing	11	nmod:poss	_	_
13	در	در	ADP	P	_	14	case	_	_
14	تهران	تهران	NOUN	N_SING	Number=Sing	12	nmod	_	_
15	نیز	نیز	SCONJ	CON	_	16	advmod	_	_
16	کاسته	_	ADJ	ADJ_INO	Number=Sing|Person=3|VerbForm=Part	0	root	_	_
17	شد	کرد#کن	VERB	V_PA	Number=Sing|Person=3|Tense=Past	16	aux:pass	_	SpaceAfter=No
18	.	.	PUNCT	DELM	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 aux:pass	color:blue
1	حالا	حالا	ADV	ADV_TIME	Case=Tem	12	advmod	_	_
2	در	در	ADP	P	_	4	case	_	_
3	این	این	DET	DET	_	4	det	_	_
4	سریال	_	NOUN	N_SING	Number=Sing	12	obl	_	_
5	که	که	SCONJ	CON	_	7	mark	_	_
6	آدمی	آدم	NOUN	N_SING	Number=Sing	7	nsubj:pass	_	_
7	استحاله	_	ADJ	ADJ	Degree=Pos	4	acl:relcl	_	_
8	شده	کرد#کن	AUX	V_PP	Number=Sing|Person=3|VerbForm=Part	7	cop	_	_
9	باشد	بود#باش	VERB	V_SUB	Mood=Sub|Number=Sing|Person=3|Tense=Pres	8	aux:pass	_	SpaceAfter=No
10	،	،	PUNCT	DELM	_	4	punct	_	_
11	وجود	وجود	NOUN	N_SING	Number=Sing	12	compound:lvc	_	_
12	ندارد	داشت#دار	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
13	.	.	PUNCT	DELM	_	12	punct	_	_

~~~


