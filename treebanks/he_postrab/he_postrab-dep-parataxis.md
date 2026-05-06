---
layout: base
title:  'Statistics of parataxis in UD_Hebrew-PostRab'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-PostRab: Relations: `parataxis`

This relation is universal.

26 nodes (0%) are attached to their parents as `parataxis`.

16 instances of `parataxis` (62%) are left-to-right (parent precedes child).
Average distance between parent and child is 15.0769230769231.

The following 10 pairs of parts of speech are connected with `parataxis`: <tt><a href="he_postrab-pos-VERB.html">VERB</a></tt>-<tt><a href="he_postrab-pos-VERB.html">VERB</a></tt> (10; 38% instances), <tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_postrab-pos-VERB.html">VERB</a></tt> (3; 12% instances), <tt><a href="he_postrab-pos-VERB.html">VERB</a></tt>-<tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt> (3; 12% instances), <tt><a href="he_postrab-pos-VERB.html">VERB</a></tt>-<tt><a href="he_postrab-pos-PRON.html">PRON</a></tt> (3; 12% instances), <tt><a href="he_postrab-pos-VERB.html">VERB</a></tt>-<tt><a href="he_postrab-pos-ADV.html">ADV</a></tt> (2; 8% instances), <tt><a href="he_postrab-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_postrab-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_postrab-pos-INTJ.html">INTJ</a></tt> (1; 4% instances), <tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_postrab-pos-NUM.html">NUM</a></tt> (1; 4% instances), <tt><a href="he_postrab-pos-PROPN.html">PROPN</a></tt>-<tt><a href="he_postrab-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="he_postrab-pos-VERB.html">VERB</a></tt>-<tt><a href="he_postrab-pos-AUX.html">AUX</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 3 parataxis	color:blue
1	קטנה	קטן	ADJ	ADJ	Gender=Fem|Number=Sing	12	nsubj	_	_
2	אפילו	אפילו	CCONJ	CCONJ	_	3	mark	_	_
3	אין	אין	VERB	VERB	_	12	parataxis	_	_
4	ל	ל	ADP	ADP	_	5	case	_	_
5	ה	הוא	PRON	PRON	Gender=Fem|Number=Sing|Person=3	3	obl	_	_
6	אב	אב	NOUN	NOUN	Gender=Masc|Number=Sing	3	nsubj	_	_
7	או	או	CCONJ	CCONJ	_	9	cc	_	_
8	ש	ש	SCONJ	SCONJ	_	9	mark	_	_
9	נשאת	נשא	VERB	VERB	Gender=Fem|Number=Sing|Person=3|Tense=Past	3	conj	_	_
10	אינה	אינו	ADV	ADV	_	12	advmod	_	_
11	יכולה	יכל	AUX	AUX	Gender=Fem|Number=Sing|Person=1,2,3|VerbForm=Part	12	aux	_	_
12	לעשות	עשה	VERB	VERB	VerbForm=Inf	0	root	_	_
13	שליח	שליח	NOUN	NOUN	Gender=Masc|Number=Sing	12	obj	_	_
14	קבלה	קבלה	NOUN	NOUN	Gender=Fem|Number=Sing	13	compound:smixut	_	_
15	אבל	אבל	CCONJ	CCONJ	_	18	cc	_	_
16	אבי	אב	NOUN	NOUN	Gender=Masc|Number=Sing	19	nsubj	_	_
17	ה	הוא	PRON	PRON	Gender=Fem|Number=Sing|Person=3	16	nmod:poss	_	_
18	יכול	יכל	AUX	AUX	Gender=Masc|Number=Sing|Person=1,2,3|VerbForm=Part	19	aux	_	_
19	לעשות	עשה	VERB	VERB	VerbForm=Inf	12	conj	_	_
20	ו	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3	19	obj	_	_
21	אם	אם	SCONJ	SCONJ	_	22	mark	_	_
22	היא	הוא	PRON	PRON	Gender=Fem|Number=Sing|Person=3	23	nsubj	_	_
23	ארוסה	ארוס	NOUN	NOUN	Gender=Fem|Number=Sing	19	advcl	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 parataxis	color:blue
1	ו	ו	CCONJ	CCONJ	_	5	cc	_	_
2	ב	ב	ADP	ADP	_	3	case	_	_
3	ה	הוא	PRON	PRON	Gender=Fem|Number=Sing|Person=3	5	obl	_	_
4	אנו	הוא	PRON	PRON	Gender=Fem,Masc|Number=Plur|Person=1	5	nsubj	_	_
5	מקדישים	הקדיש	VERB	VERB	Gender=Masc|Number=Plur|Person=1,2,3|VerbForm=Part	0	root	_	_
6	קדושת	קדושה	NOUN	NOUN	Gender=Fem|Number=Sing	5	obj	_	_
7	ו	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3	6	nmod:poss	_	_
8	יתברך	התברך	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Tense=Fut	6	parataxis	_	_
9	ב	ב	ADP	ADP	_	10	case	_	_
10	חזרת	חזרה	NOUN	NOUN	Gender=Fem|Number=Sing	5	obl	_	_
11	ה	ה	DET	DET	_	12	det	_	_
12	שליח	שליח	NOUN	NOUN	_	10	compound:smixut	_	_
13	ציבור	ציבור	NOUN	NOUN	Gender=Masc|Number=Sing	12	compound:smixut	_	_
14	כ	כ	ADP	ADP	_	15	case	_	_
15	מלאכי	מלאך	NOUN	NOUN	Gender=Masc|Number=Plur	5	obl	_	_
16	מעלה	מעלה	NOUN	NOUN	_	15	compound:smixut	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 21 parataxis	color:blue
1	עוד	עוד	ADV	ADV	_	2	advmod	_	_
2	יש	יש	VERB	VERB	_	0	root	_	_
3	זמנים	זמן	NOUN	NOUN	Gender=Masc|Number=Plur	2	nsubj:cop	_	_
4	אחרים	אחר	ADJ	ADJ	Gender=Masc|Number=Plur	3	amod	_	_
5	ש	ש	SCONJ	SCONJ	_	9	mark	_	_
6	אין	אין	ADV	ADV	_	9	advmod	_	_
7	ה	ה	DET	DET	_	8	det	_	_
8	אשה	אשה	NOUN	NOUN	Gender=Fem|Number=Sing	9	nsubj	_	_
9	קובעת	קבע	VERB	VERB	Gender=Fem|Number=Sing|Person=1,2,3|VerbForm=Part	3	acl:relcl	_	_
10	ב	ב	ADP	ADP	_	11	case	_	_
11	הן	הוא	PRON	PRON	Gender=Masc|Number=Plur|Person=3	9	obl	_	_
12	וסת	וסת	NOUN	NOUN	Gender=Masc|Number=Sing	9	obj	_	_
13	ו	ו	CCONJ	CCONJ	_	15	cc	_	_
14	לא	לא	ADV	ADV	_	15	advmod	_	_
15	חוששת	חשש	VERB	VERB	Gender=Fem|Number=Sing|Person=1,2,3|VerbForm=Part	9	conj	_	_
16	ל	ל	ADP	ADP	_	17	case	_	_
17	ו	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3	15	obl	_	_
18	ו	ו	CCONJ	CCONJ	_	21	cc	_	_
19	אפילו	אפילו	ADV	ADV	_	21	advmod	_	_
20	ב	ב	ADP	ADP	Definite=Def	21	case	_	_
21	זמן	זמן	NOUN	NOUN	Gender=Masc|Number=Sing	2	parataxis	_	_
22	ה	ה	DET	DET	_	23	det	_	_
23	זה	זה	PRON	PRON	Gender=Masc|Number=Sing|Person=3	21	det	_	_
24	כגון	כגון	ADP	ADP	_	26	case	_	_
25	ב	ב	ADP	ADP	_	26	case	_	_
26	ימי	יום	NOUN	NOUN	Gender=Masc|Number=Plur	3	nmod	_	_
27	עבור	עיבור	NOUN	NOUN	Gender=Masc|Number=Sing	26	compound:smixut	_	_
28	ה	הוא	PRON	PRON	Gender=Fem|Number=Sing|Person=3	27	nmod:poss	_	_
29	ו	ו	CCONJ	CCONJ	_	30	cc	_	_
30	ימי	יום	NOUN	NOUN	Gender=Masc|Number=Plur	26	conj	_	_
31	מיניקת	מניקה	NOUN	NOUN	Gender=Fem|Number=Sing	30	compound:smixut	_	_
32	ה	הוא	PRON	PRON	Gender=Fem|Number=Sing|Person=3	31	nmod	_	_
33	כמו	כמו	ADP	ADP	_	35	mark	_	_
34	ש	ש	SCONJ	SCONJ	_	33	fixed	_	_
35	יתבאר	התבאר	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Tense=Fut	2	advcl	_	_
36	ב	ב	ADP	ADP	_	37	case	_	_
37	עזרת	עזרה	NOUN	NOUN	Gender=Fem|Number=Sing	35	obl	_	_
38	ה'	ה'	PROPN	PROPN	Number=Sing	37	compound:smixut	_	_

~~~


