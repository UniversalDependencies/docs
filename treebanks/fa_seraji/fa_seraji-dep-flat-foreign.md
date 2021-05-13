---
layout: base
title:  'Statistics of flat:foreign in UD_Persian-Seraji'
udver: '2'
---

## Treebank Statistics: UD_Persian-Seraji: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="fa_seraji-dep-flat.html">flat</a></tt>.

168 nodes (0%) are attached to their parents as `flat:foreign`.

168 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.14285714285714.

The following 7 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="fa_seraji-pos-X.html">X</a></tt>-<tt><a href="fa_seraji-pos-X.html">X</a></tt> (162; 96% instances), <tt><a href="fa_seraji-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fa_seraji-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="fa_seraji-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="fa_seraji-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="fa_seraji-pos-X.html">X</a></tt>-<tt><a href="fa_seraji-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fa_seraji-pos-X.html">X</a></tt>-<tt><a href="fa_seraji-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="fa_seraji-pos-X.html">X</a></tt>-<tt><a href="fa_seraji-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fa_seraji-pos-X.html">X</a></tt>-<tt><a href="fa_seraji-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:foreign	color:blue
1	عدی	_	NOUN	N_SING	Number=Sing	2	nsubj	_	_
2	گفت	گفت#گو	VERB	V_PA	Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
3	:	:	PUNCT	DELM	_	4	punct	_	_
4	قلوبنا	_	X	FW	_	2	ccomp	_	_
5	لیست	لیست	X	FW	_	4	flat:foreign	_	_
6	بیدک	_	X	FW	_	5	flat:foreign	_	_
7	معاویه	معاویه	X	FW	_	6	flat:foreign	_	SpaceAfter=No
8	.	.	PUNCT	DELM	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 flat:foreign	color:blue
1	خداوند	خداوند	NOUN	N_SING	Number=Sing	7	nsubj	_	_
2	متعال	متعال	ADJ	ADJ	Degree=Pos	1	amod	_	_
3	در	در	ADP	P	_	4	case	_	_
4	توصیف	توصیف	NOUN	N_SING	Number=Sing	7	obl	_	_
5	پیامبر	پیامبر	NOUN	N_SING	Number=Sing	4	nmod:poss	_	_
6	اکرم	اکرم	ADJ	ADJ	Degree=Pos	5	amod	_	_
7	می‌فرماید	فرمود#فرما	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
8	:	:	PUNCT	DELM	_	9	punct	_	_
9	بالمؤمنین	بالمؤمنین	X	FW	_	7	ccomp	_	_
10	رإف	رإف	ADJ	ADJ	Degree=Pos	9	flat:foreign	_	_
11	رحیم	رحیم	X	FW	_	10	flat:foreign	_	SpaceAfter=No
12	.	.	PUNCT	DELM	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 33	bgColor:blue
# visual-style 33	fgColor:white
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 32 33 flat:foreign	color:blue
1	احمدالحسن	احمدالحسن	NOUN	N_SING	Number=Sing	2	nsubj	_	_
2	گفت	گفت#گو	VERB	V_PA	Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
3	:	:	PUNCT	DELM	_	6	punct	_	_
4	این	این	PRON	PRO	Number=Sing|PronType=Dem	6	nsubj	_	_
5	یک	یک	NUM	NUM	NumType=Card	6	nummod	_	_
6	روش	روش	NOUN	N_SING	Number=Sing	2	ccomp	_	_
7	تهذیب	تهذیب	NOUN	N_SING	Number=Sing	6	nmod:poss	_	_
8	نفس	نفس	NOUN	N_SING	Number=Sing	7	nmod:poss	_	_
9	و	و	CCONJ	CON	_	10	cc	_	_
10	ایثار	ایثار	NOUN	N_SING	Number=Sing	7	conj	_	_
11	به	به	ADP	P	_	12	case	_	_
12	نفس	نفس	NOUN	N_SING	Number=Sing	10	nmod	_	_
13	و	و	CCONJ	CON	_	14	cc	_	_
14	گذشت	گذشت	NOUN	N_SING	Number=Sing	10	conj	_	_
15	عارفانه	عارفانه	ADJ	ADJ	Degree=Pos	14	amod	_	_
16	است	است	AUX	V_PRS	Number=Sing|Person=3|Tense=Pres	6	cop	_	SpaceAfter=No
17	،	،	PUNCT	DELM	_	25	punct	_	_
18	و	و	CCONJ	CON	_	25	cc	_	_
19	بعد	بعد	ADV	ADV_TIME	Case=Tem	25	advmod	_	_
20	به	به	ADP	P	_	21	case	_	_
21	مناسبت	مناسب	NOUN	N_SING	Number=Sing	25	obl	_	_
22	شعر	شعر	NOUN	N_SING	Number=Sing	25	obj	_	_
23	متنبی	متنبی	ADJ	ADJ	Degree=Pos	22	amod	_	_
24	را	را	PART	CLITIC	_	22	case	_	_
25	خواند	خواند#خوان	VERB	V_PA	Number=Sing|Person=3|Tense=Past	6	conj	_	_
26	که	که	SCONJ	CON	_	25	dep	_	SpaceAfter=No
27	:	:	PUNCT	DELM	_	28	punct	_	_
28	کل	کل	X	FW	_	25	ccomp	_	_
29	یرید	یرید	X	FW	_	28	flat:foreign	_	_
30	رجاله	رجاله	X	FW	_	29	flat:foreign	_	_
31	لحیاته	لحیاته	X	FW	_	30	flat:foreign	_	_
32	یا	یا	CCONJ	CON	_	31	flat:foreign	_	_
33	من	من	X	FW	_	32	flat:foreign	_	_
34	یرید	یرید	X	FW	_	33	flat:foreign	_	_
35	حیاته	حیاته	X	FW	_	34	flat:foreign	_	_
36	لرجاله	لرجاله	X	FW	_	35	flat:foreign	_	SpaceAfter=No
37	.	.	PUNCT	DELM	_	2	punct	_	_

~~~


