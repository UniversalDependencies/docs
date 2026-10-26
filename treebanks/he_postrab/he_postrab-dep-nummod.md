---
layout: base
title:  'Statistics of nummod in UD_Hebrew-PostRab'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-PostRab: Relations: `nummod`

This relation is universal.

78 nodes (1%) are attached to their parents as `nummod`.

58 instances of `nummod` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.15384615384615.

The following 4 pairs of parts of speech are connected with `nummod`: <tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_postrab-pos-NUM.html">NUM</a></tt> (71; 91% instances), <tt><a href="he_postrab-pos-PRON.html">PRON</a></tt>-<tt><a href="he_postrab-pos-NUM.html">NUM</a></tt> (4; 5% instances), <tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="he_postrab-pos-NUM.html">NUM</a></tt>-<tt><a href="he_postrab-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nummod	color:blue
1	יותר	יותר	ADV	ADV	_	2	advmod	_	_
2	טוב	טוב	ADJ	ADJ	Gender=Masc|Number=Sing	0	root	_	_
3	ש	ש	SCONJ	SCONJ	_	4	mark	_	_
4	תספיק	הספיק	VERB	VERB	Gender=Fem|Number=Sing|Person=3|Tense=Fut	2	csubj	_	_
5	ל	ל	ADP	ADP	_	6	case	_	_
6	עניה	עני	NOUN	NOUN	Gender=Fem|Number=Sing	4	obl	_	_
7	א'	א	NUM	NUM	_	6	nummod	_	_
8	כל	כל	DET	DET	_	10	advmod	_	_
9	כך	כך	PRON	PRON	_	8	fixed	_	_
10	שמן	שמן	NOUN	NOUN	Gender=Masc|Number=Sing	4	obj	_	_
11	כדי	כדי	SCONJ	SCONJ	_	13	mark	_	_
12	ש	ש	SCONJ	SCONJ	_	11	fixed	_	_
13	תדליק	הדליק	VERB	VERB	Gender=Fem|Number=Sing|Person=3|Tense=Fut	10	advcl	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 nummod	color:blue
1	עד	עד	ADP	ADP	_	2	case	_	_
2	עכשיו	עכשיו	ADV	ADV	_	4	advmod	_	_
3	לא	לא	ADV	ADV	_	4	advmod	_	_
4	הכיר	הכיר	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Tense=Past	0	root	_	_
5	ב	ב	ADP	ADP	_	6	case	_	_
6	ה	הוא	PRON	PRON	Gender=Fem|Number=Sing|Person=3	4	obl	_	_
7	מתוך	מתוך	ADP	ADP	_	8	case	_	_
8	צניעות	צניעות	NOUN	NOUN	Gender=Fem|Number=Sing	4	obl	_	_
9	ש	ש	SCONJ	SCONJ	_	11	mark	_	_
10	ב	ב	ADP	ADP	_	11	case	_	_
11	שניה	שתיים	NUM	NUM	_	12	nummod	_	_
12	ם	הוא	PRON	PRON	Gender=Masc|Number=Plur|Person=3	8	acl:relcl	_	_
13	ו	ו	CCONJ	CCONJ	_	15	cc	_	_
14	עכשיו	עכשיו	ADV	ADV	_	15	advmod	_	_
15	הכיר	הכיר	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Tense=Past	4	conj	_	_
16	ב	ב	ADP	ADP	_	17	case	_	_
17	ה	הוא	PRON	PRON	Gender=Fem|Number=Sing|Person=3	15	obl	_	_
18	על	על	ADP	ADP	_	20	case	_	_
19	ידי	יד	NOUN	NOUN	Gender=Fem|Number=Plur	18	fixed	_	_
20	מעשה	מעשה	NOUN	NOUN	Gender=Masc|Number=Sing	15	obl	_	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 24 nummod	color:blue
1	ה	ה	DET	DET	_	2	det	_	_
2	משכים	השכים	VERB	VERB	Gender=Masc|Number=Sing|Person=1,2,3|VerbForm=Part	7	nsubj	_	_
3	להתחנן	התחנן	VERB	VERB	VerbForm=Inf	2	advcl	_	_
4	לפני	לפני	ADP	ADP	_	5	case	_	_
5	בורא	בורא	NOUN	NOUN	Gender=Masc|Number=Sing	3	obl	_	_
6	ו	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3	5	nmod:poss	_	_
7	יכוין	כיוון	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Tense=Fut	0	root	_	_
8	ל	ל	ADP	ADP	_	9	case	_	_
9	שעות	שעה	NOUN	NOUN	Gender=Fem|Number=Plur	7	obl	_	_
10	ש	ש	SCONJ	SCONJ	_	11	mark	_	_
11	משתנות	השתנה	VERB	VERB	Gender=Fem|Number=Plur|Person=1,2,3|VerbForm=Part	9	acl:relcl	_	_
12	ה	ה	DET	DET	_	13	det	_	_
13	משמרות	משמרת	NOUN	NOUN	Gender=Fem|Number=Plur	11	nsubj	_	_
14	ש	ש	SCONJ	SCONJ	_	19	mark	_	_
15	הן	הוא	PRON	PRON	Gender=Fem|Number=Plur|Person=3	19	nsubj:cop	_	_
16	ב	ב	ADP	ADP	_	17	case	_	_
17	שליש	שליש	NOUN	NOUN	Gender=Masc|Number=Sing	19	nummod	_	_
18	ה	ה	DET	DET	_	19	det	_	_
19	לילה	לילה	NOUN	NOUN	Gender=Masc|Number=Sing	13	acl:relcl	_	_
20	ו	ו	CCONJ	CCONJ	_	22	cc	_	_
21	ל	ל	ADP	ADP	_	22	case	_	_
22	סוף	סוף	NOUN	NOUN	Gender=Masc|Number=Sing	19	conj	_	_
23	שני	שני	NUM	NUM	Gender=Masc|Number=Dual	24	nummod	_	_
24	שלישי	שליש	NOUN	NOUN	Gender=Masc|Number=Plur	26	nummod	_	_
25	ה	ה	DET	DET	_	26	det	_	_
26	לילה	לילה	NOUN	NOUN	Gender=Masc|Number=Sing	22	compound:smixut	_	_
27	ו	ו	CCONJ	CCONJ	_	29	cc	_	_
28	ל	ל	ADP	ADP	_	29	case	_	_
29	סוף	סוף	NOUN	NOUN	Gender=Masc|Number=Sing	19	conj	_	_
30	ה	ה	DET	DET	_	31	det	_	_
31	לילה	לילה	NOUN	NOUN	Gender=Masc|Number=Sing	29	compound:smixut	_	_
32	ש	ש	SCONJ	SCONJ	_	48	mark	_	_
33	ה	ה	DET	DET	_	34	det	_	_
34	תפלה	תפילה	NOUN	NOUN	Gender=Fem|Number=Sing	48	nsubj	_	_
35	ש	ש	SCONJ	SCONJ	_	36	mark	_	_
36	יתפלל	התפלל	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Tense=Fut	34	acl:relcl	_	_
37	ב	ב	ADP	ADP	_	38	case	_	_
38	אותן	אותו	PRON	PRON	Gender=Fem|Number=Plur	40	det	_	_
39	ה	ה	DET	DET	_	40	det	_	_
40	שעות	שעה	NOUN	NOUN	Gender=Fem|Number=Plur	36	obl	_	_
41	על	על	ADP	ADP	_	43	case	_	_
42	ה	ה	DET	DET	_	43	det	_	_
43	חורבן	חורבן	NOUN	NOUN	Gender=Masc|Number=Sing	36	obl	_	_
44	ו	ו	CCONJ	CCONJ	_	47	cc	_	_
45	על	על	ADP	ADP	_	47	case	_	_
46	ה	ה	DET	DET	_	47	det	_	_
47	גלות	גלות	NOUN	NOUN	Gender=Fem|Number=Sing	43	conj	_	_
48	רצויה	רצוי	ADJ	ADJ	Gender=Fem|Number=Sing	7	advcl	_	_

~~~


