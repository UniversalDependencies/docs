---
layout: base
title:  'Statistics of nummod in UD_Persian'
udver: '2'
---

## Treebank Statistics: UD_Persian: Relations: `nummod`

This relation is universal.

2875 nodes (2%) are attached to their parents as `nummod`.

2520 instances of `nummod` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33147826086957.

The following 13 pairs of parts of speech are connected with `nummod`: <tt><a href="fa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fa-pos-NUM.html">NUM</a></tt> (2380; 83% instances), <tt><a href="fa-pos-NUM.html">NUM</a></tt>-<tt><a href="fa-pos-NUM.html">NUM</a></tt> (216; 8% instances), <tt><a href="fa-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fa-pos-NUM.html">NUM</a></tt> (114; 4% instances), <tt><a href="fa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fa-pos-ADJ.html">ADJ</a></tt> (78; 3% instances), <tt><a href="fa-pos-VERB.html">VERB</a></tt>-<tt><a href="fa-pos-NUM.html">NUM</a></tt> (35; 1% instances), <tt><a href="fa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fa-pos-NOUN.html">NOUN</a></tt> (24; 1% instances), <tt><a href="fa-pos-ADP.html">ADP</a></tt>-<tt><a href="fa-pos-NUM.html">NUM</a></tt> (18; 1% instances), <tt><a href="fa-pos-ADV.html">ADV</a></tt>-<tt><a href="fa-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="fa-pos-PRON.html">PRON</a></tt>-<tt><a href="fa-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="fa-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fa-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fa-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fa-pos-VERB.html">VERB</a></tt>-<tt><a href="fa-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fa-pos-X.html">X</a></tt>-<tt><a href="fa-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	از	از	ADP	P	_	2	case	_	_
2	بنی‌هاشم	_	NOUN	N_SING	Number=Sing	7	nmod	_	_
3	هم	هم	SCONJ	CON	_	7	advmod	_	_
4	حتی	حتی	ADV	ADV	_	7	advmod	_	_
5	یک	یک	NUM	NUM	NumType=Card	6	nummod	_	_
6	نفر	نفر	NOUN	N_SING	Number=Sing	7	nsubj	_	_
7	حاضر	حاضر	ADJ	ADJ	Degree=Pos	0	root	_	_
8	به	به	ADP	P	_	9	case	_	_
9	بیعت	بیعت	NOUN	N_SING	Number=Sing	7	nmod	_	_
10	با	با	ADP	P	_	11	case	_	_
11	یزید	یزید	NOUN	N_SING	Number=Sing	9	nmod	_	_
12	نشده	کرد#کن	AUX	V_PP	Number=Sing|Person=3|Polarity=Neg|VerbForm=Part	7	cop	_	_
13	است	است	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	12	aux	_	SpaceAfter=No
14	.	.	PUNCT	DELM	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 nummod	color:blue
1	مزرعه‌ای	_	NOUN	N_SING	Number=Sing	0	root	_	_
2	که	که	SCONJ	CON	_	5	mark	_	_
3	در	در	ADP	P	_	4	case	_	_
4	عقیق	_	NOUN	N_SING	Number=Sing	5	obl	_	_
5	بود	بود#باش	VERB	V_PA	Number=Sing|Person=3|Tense=Past	1	acl:relcl	_	_
6	و	و	CCONJ	CON	_	12	cc	_	_
7	درآمد	درآمد	NOUN	N_SING	Number=Sing	12	nsubj	_	_
8	آن	آن	PRON	PRO	Number=Sing|PronType=Dem	7	nmod:poss	_	_
9	سالی	سال	NOUN	N_SING	Number=Sing	12	obj	_	_
10	هشت	هشت	NUM	NUM	NumType=Card	11	nummod	_	_
11	هزار	هزار	NUM	NUM	NumType=Card	12	compound	_	_
12	دینار	_	NOUN	N_SING	Number=Sing	5	conj	_	_
13	بود	بود#باش	AUX	V_PA	Number=Sing|Person=3|Tense=Past	12	cop	_	SpaceAfter=No
14	.	.	PUNCT	DELM	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	در	در	ADP	P	_	2	case	_	_
2	لایحه	لایحه	NOUN	N_SING	Number=Sing	6	obl	_	_
3	۵	۵	NUM	NUM	NumType=Card	4	nummod	_	_
4	ساله	ساله	ADJ	ADJ	Degree=Pos	2	amod	_	_
5	سوم	سوم	ADJ	ADJ	Degree=Pos	2	amod	_	_
6	می‌بینیم	دید#بین	VERB	V_PRS	Number=Plur|Person=1|Tense=Pres	0	root	_	_
7	که	که	SCONJ	CON	_	13	mark	_	_
8	این	این	DET	DET	_	9	det	_	_
9	اتکا	اتکاء	NOUN	N_SING	Number=Sing	13	nsubj	_	_
10	به	به	ADP	P	_	12	case	_	_
11	۸۵	۸۵	NUM	NUM	NumType=Card	12	nummod	_	_
12	درصد	درصد	NOUN	N_SING	Number=Sing	13	obl	_	_
13	رسیده	رسید#رس	VERB	V_PP	Number=Sing|Person=3|VerbForm=Part	6	ccomp	_	_
14	است	است	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	13	aux	_	SpaceAfter=No
15	.	.	PUNCT	DELM	_	6	punct	_	_

~~~


