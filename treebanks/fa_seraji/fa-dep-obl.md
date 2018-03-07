---
layout: base
title:  'Statistics of obl in UD_Persian'
udver: '2'
---

## Treebank Statistics: UD_Persian: Relations: `obl`

This relation is universal.

8113 nodes (5%) are attached to their parents as `obl`.

7940 instances of `obl` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.07876247997042.

The following 10 pairs of parts of speech are connected with `obl`: <tt><a href="fa-pos-VERB.html">VERB</a></tt>-<tt><a href="fa-pos-NOUN.html">NOUN</a></tt> (7437; 92% instances), <tt><a href="fa-pos-VERB.html">VERB</a></tt>-<tt><a href="fa-pos-PRON.html">PRON</a></tt> (601; 7% instances), <tt><a href="fa-pos-VERB.html">VERB</a></tt>-<tt><a href="fa-pos-NUM.html">NUM</a></tt> (23; 0% instances), <tt><a href="fa-pos-VERB.html">VERB</a></tt>-<tt><a href="fa-pos-VERB.html">VERB</a></tt> (15; 0% instances), <tt><a href="fa-pos-VERB.html">VERB</a></tt>-<tt><a href="fa-pos-ADV.html">ADV</a></tt> (14; 0% instances), <tt><a href="fa-pos-AUX.html">AUX</a></tt>-<tt><a href="fa-pos-NOUN.html">NOUN</a></tt> (12; 0% instances), <tt><a href="fa-pos-VERB.html">VERB</a></tt>-<tt><a href="fa-pos-X.html">X</a></tt> (5; 0% instances), <tt><a href="fa-pos-AUX.html">AUX</a></tt>-<tt><a href="fa-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="fa-pos-VERB.html">VERB</a></tt>-<tt><a href="fa-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="fa-pos-VERB.html">VERB</a></tt>-<tt><a href="fa-pos-INTJ.html">INTJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 3 obl	color:blue
1	به	به	ADP	P	_	3	case	_	_
2	هر	هر	DET	DET	_	3	det	_	_
3	حال	حال	NOUN	N_SING	Number=Sing	10	obl	_	_
4	ما	ما	PRON	PRO	Number=Plur|Person=1|PronType=Prs	10	nsubj	_	_
5	در	در	ADP	P	_	6	case	_	_
6	انتظار	انتظار	NOUN	N_SING	Number=Sing	10	obl	_	_
7	تشکیل	تشکیل	NOUN	N_SING	Number=Sing	6	nmod:poss	_	_
8	مجلس	مجلس	NOUN	N_SING	Number=Sing	7	nmod:poss	_	_
9	ششم	ششم	ADJ	ADJ	Degree=Pos	8	amod	_	_
10	هستیم	هست	VERB	V_PRS	Number=Plur|Person=1|Tense=Pres	0	root	_	SpaceAfter=No
11	.	.	PUNCT	DELM	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 obl	color:blue
1	باید	بایست#باید	AUX	V_AUX	VerbForm=Inf	5	aux	_	_
2	برای	برای	ADP	P	_	3	case	_	_
3	آن	آن	PRON	PRO	Number=Sing|PronType=Dem	5	obl	_	_
4	چاره‌ای	_	NOUN	N_SING	Number=Sing	5	obj	_	_
5	اندیشید	_	VERB	V_PA	Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
6	.	.	PUNCT	DELM	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 obl	color:blue
1	من	من	PRON	PRO	Number=Sing|Person=1|PronType=Prs	8	nsubj	_	_
2	در	در	ADP	P	_	3	case	_	_
3	یکی	یک	NUM	NUM	NumType=Card	8	obl	_	_
4	از	از	ADP	P	_	5	case	_	_
5	کشورهای	کشور	NOUN	N_PL	Number=Plur	3	nmod	_	_
6	اروپایی	اروپایی	ADJ	ADJ	Degree=Pos	5	amod	_	_
7	زندگی	زندگی	NOUN	N_SING	Number=Sing	8	compound:lvc	_	_
8	می‌کنم	کرد#کن	VERB	V_PRS	Number=Sing|Person=1|Tense=Pres	0	root	_	SpaceAfter=No
9	.	.	PUNCT	DELM	_	8	punct	_	_

~~~


