---
layout: base
title:  'Statistics of nsubj:pass in UD_Persian'
udver: '2'
---

## Treebank Statistics: UD_Persian: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="fa-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="fa-dep-nsubj-nc.html">nsubj:nc</a></tt>.

149 nodes (0%) are attached to their parents as `nsubj:pass`.

149 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 9.85234899328859.

The following 7 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="fa-pos-VERB.html">VERB</a></tt>-<tt><a href="fa-pos-NOUN.html">NOUN</a></tt> (104; 70% instances), <tt><a href="fa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fa-pos-NOUN.html">NOUN</a></tt> (23; 15% instances), <tt><a href="fa-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fa-pos-NOUN.html">NOUN</a></tt> (17; 11% instances), <tt><a href="fa-pos-VERB.html">VERB</a></tt>-<tt><a href="fa-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="fa-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fa-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="fa-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fa-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fa-pos-VERB.html">VERB</a></tt>-<tt><a href="fa-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 nsubj:pass	color:blue
1	اولین	اولین	ADJ	ADJ_SUP	Degree=Sup	2	amod	_	_
2	سیاره	سیاره	NOUN	N_SING	Number=Sing	7	nsubj:pass	_	_
3	خارج	خارج	ADP	P	_	5	case	_	_
4	از	از	ADP	P	_	3	fixed	_	_
5	منظومه	منظومه	NOUN	N_SING	Number=Sing	2	nmod	_	_
6	شمسی	شمسی	ADJ	ADJ	Degree=Pos	5	amod	_	_
7	دیده	دید	VERB	V_PP	Number=Sing|Person=3|VerbForm=Part	0	root	_	_
8	شد	کرد#کن	VERB	V_PA	Number=Sing|Person=3|Tense=Past	7	aux:pass	_	SpaceAfter=No
9	.	.	PUNCT	DELM	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 1 nsubj:pass	color:blue
1	منابع	منبع	NOUN	N_PL	Number=Plur	10	nsubj:pass	_	_
2	غذایی	غذا	ADJ	ADJ	Degree=Pos	1	amod	_	_
3	کربوهیدرات‌ها	_	NOUN	N_PL	Number=Plur	1	nmod:poss	_	_
4	به	به	ADP	P	_	6	case	_	_
5	دو	دو	NUM	NUM	NumType=Card	6	nummod	_	_
6	دسته	دسته	NOUN	N_SING	Number=Sing	10	nmod	_	_
7	گیاهی	گیاهی	ADJ	ADJ	Degree=Pos	6	amod	_	_
8	و	و	CCONJ	CON	_	9	cc	_	_
9	جانوری	_	ADJ	ADJ	Degree=Pos	7	conj	_	_
10	تقسیم	تقسیم	NOUN	N_SING	Number=Sing	0	root	_	_
11	می‌شوند	کرد#کن	AUX	V_PRS	Number=Plur|Person=3|Tense=Pres	10	cop	_	SpaceAfter=No
12	.	.	PUNCT	DELM	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nsubj:pass	color:blue
1	دست	دست	NOUN	N_SING	Number=Sing	5	nsubj:pass	_	_
2	به	به	ADP	P	_	3	case	_	_
3	طرف	طرف	NOUN	N_SING	Number=Sing	5	nmod	_	_
4	کیف	کیف	NOUN	N_SING	Number=Sing	3	nmod:poss	_	_
5	دراز	دراز	ADJ	ADJ	Degree=Pos	0	root	_	_
6	شده	کرد#کن	AUX	V_PP	Number=Sing|Person=3|VerbForm=Part	5	cop	_	_
7	است	است	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	6	aux	_	_
8	و	و	CCONJ	CON	_	14	cc	_	_
9	آن	آن	PRON	PRO	Number=Sing|PronType=Dem	14	obj	_	_
10	را	را	PART	CLITIC	_	9	case	_	_
11	به	به	ADP	P	_	12	case	_	_
12	جانب	جانب	NOUN	N_SING	Number=Sing	14	obl	_	_
13	خود	خود	PRON	PRO	Number=Sing|Person=3|PronType=Prs|Reflex=Yes	12	nmod:poss	_	_
14	می‌کشد	کشید#کش	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	5	conj	_	SpaceAfter=No
15	.	.	PUNCT	DELM	_	5	punct	_	_

~~~


