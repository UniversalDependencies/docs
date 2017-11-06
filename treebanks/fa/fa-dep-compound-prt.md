---
layout: base
title:  'Statistics of compound:prt in UD_Persian'
udver: '2'
---

## Treebank Statistics: UD_Persian: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="fa-dep-compound.html">compound</a></tt>.
There are also 1 other language-specific subtypes of `compound`: <tt><a href="fa-dep-compound-lvc.html">compound:lvc</a></tt>.

103 nodes (0%) are attached to their parents as `compound:prt`.

102 instances of `compound:prt` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.10679611650485.

The following 5 pairs of parts of speech are connected with `compound:prt`: <tt><a href="fa-pos-VERB.html">VERB</a></tt>-<tt><a href="fa-pos-ADP.html">ADP</a></tt> (94; 91% instances), <tt><a href="fa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fa-pos-ADP.html">ADP</a></tt> (4; 4% instances), <tt><a href="fa-pos-VERB.html">VERB</a></tt>-<tt><a href="fa-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="fa-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fa-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="fa-pos-ADP.html">ADP</a></tt>-<tt><a href="fa-pos-ADP.html">ADP</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound:prt	color:blue
1	می‌گویند	گفت#گو	VERB	V_PRS	Number=Plur|Person=3|Tense=Pres	0	root	_	_
2	مردگان	مرده	NOUN	N_PL	Number=Plur	6	nsubj	_	_
3	دیگر	دیگر	ADV	ADV_NEG	Polarity=Neg	6	advmod	_	_
4	دم	_	NOUN	N_SING	Number=Sing	6	compound:lvc	_	_
5	بر	بر	ADP	PREV	_	6	compound:prt	_	_
6	نمی‌آورند	_	VERB	V_PRS	Number=Plur|Person=3|Polarity=Neg|Tense=Pres	1	ccomp	_	_
7	و	و	CCONJ	CON	_	12	cc	_	_
8	دیگر	دیگر	ADV	ADV_NEG	Polarity=Neg	12	advmod	_	_
9	دهانی	دهان	NOUN	N_SING	Number=Sing	12	obj	_	_
10	و	و	CCONJ	CON	_	11	cc	_	_
11	صدایی	صدا	NOUN	N_SING	Number=Sing	9	conj	_	_
12	ندارند	داشت#دار	VERB	V_PRS	Number=Plur|Person=3|Polarity=Neg|Tense=Pres	6	conj	_	SpaceAfter=No
13	.	.	PUNCT	DELM	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 compound:prt	color:blue
1	وی	وی	PRON	PRO	Number=Sing|Person=3|PronType=Prs	16	nsubj	_	_
2	میزان	میزان	NOUN	N_SING	Number=Sing	16	obj	_	_
3	سرمایه‌گذاری	سرمایه‌گذاری	NOUN	N_SING	Number=Sing	2	nmod:poss	_	_
4	برای	برای	ADP	P	_	6	case	_	_
5	این	این	DET	DET	_	6	det	_	_
6	واحدها	واحد	NOUN	N_PL	Number=Plur	3	nmod	_	_
7	را	را	PART	CLITIC	_	2	case	_	_
8	شش	شش	NUM	NUM	NumType=Card	9	nummod	_	_
9	هزار	هزار	NUM	NUM	NumType=Card	12	nummod	_	_
10	و	و	CCONJ	CON	_	11	cc	_	_
11	۶۵۰	۶۵۰	NUM	NUM	NumType=Card	9	conj	_	_
12	میلیارد	میلیارد	NOUN	N_SING	Number=Sing	13	compound	_	_
13	ریال	ریال	NOUN	N_SING	Number=Sing	16	obl	_	_
14	بر	بر	ADP	PREV	_	15	compound:prt	_	_
15	آورد	آورد#آور	NOUN	N_SING	Number=Sing	16	compound:lvc	_	_
16	کرد	کرد#کن	VERB	V_PA	Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
17	.	.	PUNCT	DELM	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 30 28 compound:prt	color:blue
1	بیرن	بیرن	NOUN	N_SING	Number=Sing	10	nsubj	_	_
2	از	از	ADP	P	_	4	case	_	_
3	یک	یک	NUM	NUM	NumType=Card	4	nummod	_	_
4	گزارش	گزارش	NOUN	N_SING	Number=Sing	10	obl	_	_
5	۲۰۰	۲۰۰	NUM	NUM	NumType=Card	6	nummod	_	_
6	صفحه‌ای	صفحه	ADJ	ADJ	Degree=Pos	4	amod	_	_
7	بسیار	بسیار	ADV	ADV	_	8	advmod	_	_
8	مهم	مهم	ADJ	ADJ	Degree=Pos	4	amod	_	_
9	نام	نام	NOUN	N_SING	Number=Sing	10	compound:lvc	_	_
10	برد	برد#بر	VERB	V_PA	Number=Sing|Person=3|Tense=Past	0	root	_	_
11	که	که	SCONJ	CON	_	30	mark	_	_
12	به	به	ADP	P	_	13	case	_	_
13	دلیل	دلیل	NOUN	N_SING	Number=Sing	30	obl	_	_
14	وجود	وجود	NOUN	N_SING	Number=Sing	13	nmod:poss	_	_
15	اسامی	اسم	NOUN	N_PL	Number=Plur	14	nmod:poss	_	_
16	برخی	برخی	DET	DET	_	17	det	_	_
17	ایرانیان	ایرانی	NOUN	N_PL	Number=Plur	15	nmod:poss	_	_
18	که	که	SCONJ	CON	_	23	mark	_	_
19	هنوز	هنوز	ADV	ADV	_	23	advmod	_	_
20	در	در	ADP	P	_	21	case	_	_
21	قید	قید	NOUN	N_SING	Number=Sing	23	obl	_	_
22	حیات	حیات	NOUN	N_SING	Number=Sing	21	nmod:poss	_	_
23	هستند	هست	VERB	V_PRS	Number=Plur|Person=3|Tense=Pres	17	acl:relcl	_	_
24	سیا	سیا	NOUN	N_SING	Number=Sing	30	nsubj	_	_
25	از	از	ADP	P	_	26	case	_	_
26	انتشار	انتشار	NOUN	N_SING	Number=Sing	30	obl	_	_
27	آن	آن	PRON	PRO	Number=Sing|PronType=Dem	26	nmod:poss	_	_
28	سر	سر	NOUN	N_SING	Number=Sing	30	compound:prt	_	_
29	باز	باز	ADP	PREV	_	28	fixed	_	_
30	می‌زند	زد#زن	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	10	ccomp	_	SpaceAfter=No
31	.	.	PUNCT	DELM	_	10	punct	_	_

~~~


