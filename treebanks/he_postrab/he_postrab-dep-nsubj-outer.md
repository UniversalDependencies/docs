---
layout: base
title:  'Statistics of nsubj:outer in UD_Hebrew-PostRab'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-PostRab: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="he_postrab-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="he_postrab-dep-nsubj-cop.html">nsubj:cop</a></tt>.

10 nodes (0%) are attached to their parents as `nsubj:outer`.

10 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.3.

The following 3 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="he_postrab-pos-VERB.html">VERB</a></tt>-<tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt> (7; 70% instances), <tt><a href="he_postrab-pos-VERB.html">VERB</a></tt>-<tt><a href="he_postrab-pos-PRON.html">PRON</a></tt> (2; 20% instances), <tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_postrab-pos-PRON.html">PRON</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 1 nsubj:outer	color:blue
1	מנהג	מנהג	NOUN	NOUN	Gender=Masc|Number=Sing	11	nsubj:outer	_	_
2	ה	ה	DET	DET	_	3	det	_	_
3	עולם	עולם	NOUN	NOUN	Gender=Masc|Number=Sing	1	compound:smixut	_	_
4	ש	ש	SCONJ	SCONJ	_	7	mark	_	_
5	על	על	ADP	ADP	_	7	case	_	_
6	ידי	יד	NOUN	NOUN	Gender=Fem|Number=Plur	5	fixed	_	_
7	טורח	טורח	NOUN	NOUN	Gender=Masc|Number=Sing	11	obl	_	_
8	ה	ה	DET	DET	_	9	det	_	_
9	דרך	דרך	NOUN	NOUN	Gender=Fem|Number=Sing	7	compound:smixut	_	_
10	אדם	אדם	NOUN	NOUN	Gender=Masc|Number=Sing	11	nsubj	_	_
11	מתבזה	התבזה	VERB	VERB	Gender=Masc|Number=Sing|Person=1,2,3|VerbForm=Part	0	root	_	_
12	ו	ו	CCONJ	CCONJ	_	14	cc	_	_
13	זאת	זה	PRON	PRON	Gender=Fem|Number=Sing|Person=3	14	nsubj	_	_
14	עמדה	עמד	VERB	VERB	Gender=Fem|Number=Sing|Person=3|Tense=Past	11	conj	_	_
15	ב	ב	ADP	ADP	_	16	case	_	_
16	יופי	יופי	NOUN	NOUN	Gender=Masc|Number=Sing	14	obl	_	_
17	ה	הוא	PRON	PRON	Gender=Fem|Number=Sing|Person=3	16	nmod:poss	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:outer	color:blue
1	אני	הוא	PRON	PRON	Gender=Fem,Masc|Number=Sing|Person=1	4	nsubj:outer	_	_
2	הוא	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3	4	cop	_	_
3	ש	ש	SCONJ	SCONJ	_	4	mark	_	_
4	יש	יש	VERB	VERB	_	0	root	_	_
5	דיי	די	ADV	ADV	_	4	nsubj:cop	_	_
6	ב	ב	ADP	ADP	_	7	case	_	_
7	אלהות	אלהות	NOUN	NOUN	Gender=Masc|Number=Sing	4	obl	_	nsent
8	י	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=1	7	nmod:poss	_	_
9	ל	ל	ADP	ADP	_	11	case	_	_
10	כל	כל	DET	DET	_	11	det	_	_
11	בריה	בריה	NOUN	NOUN	Gender=Fem|Number=Sing	4	obl	_	NSent=Yes
12	לפיכך	לפיכך	CCONJ	CCONJ	_	13	cc	_	_
13	התהלך	התהלך	VERB	VERB	Gender=Masc|Mood=Imp|Number=Sing|Person=2	4	conj	_	_
14	לפנ	לפני	ADP	ADP	_	15	case	_	_
15	י	הוא	PRON	PRON	Gender=Fem,Masc|Number=Sing|Person=1	13	obl	_	_
16	ו	ו	CCONJ	CCONJ	_	17	cc	_	_
17	אהיה	היה	VERB	VERB	Gender=Fem,Masc|Number=Sing|Person=1|Tense=Fut	13	conj	_	_
18	ל	ל	ADP	ADP	_	19	case	_	_
19	ך	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=2	17	obl	_	_
20	ל	ל	ADP	ADP	_	21	case	_	_
21	אלוה	אלוה	NOUN	NOUN	Gender=Masc|Number=Sing	17	obl	_	_
22	ו	ו	CCONJ	CCONJ	_	24	cc	_	_
23	ל	ל	ADP	ADP	_	24	case	_	_
24	פטרון	פטרון	NOUN	NOUN	Gender=Masc|Number=Sing	21	conj	_	_

~~~


~~~ conllu
# visual-style 33	bgColor:blue
# visual-style 33	fgColor:white
# visual-style 37	bgColor:blue
# visual-style 37	fgColor:white
# visual-style 37 33 nsubj:outer	color:blue
1	היו	היה	AUX	AUX	Gender=Fem,Masc|Number=Plur|Person=3|Tense=Past	7	cop	_	_
2	ה	ה	DET	DET	_	3	det	_	_
3	חיטים	חיטה	NOUN	NOUN	Gender=Fem|Number=Plur	7	nsubj:cop	_	_
4	ב	ב	ADP	ADP	Definite=Def	5	case	_	_
5	מדינה	מדינה	NOUN	NOUN	Gender=Fem|Number=Sing	3	nmod	_	_
6	ד	ד	NUM	NUM	_	7	nummod	_	_
7	סאין	סאה	NOUN	NOUN	Gender=Fem|Number=Plur	16	advcl	_	_
8	ב	ב	ADP	ADP	_	9	case	_	_
9	סלע	סלע	NOUN	NOUN	Gender=Masc|Number=Sing	7	nmod	_	_
10	ו	ו	CCONJ	CCONJ	_	12	cc	_	_
11	ב	ב	ADP	ADP	Definite=Def	12	case	_	_
12	כפרים	כפר	NOUN	NOUN	Gender=Masc|Number=Plur	5	conj	_	_
13	שש	שש	NUM	NUM	Gender=Fem|Number=Sing	7	conj	_	_
14	ב	ב	ADP	ADP	_	15	case	_	_
15	סלע	סלע	NOUN	NOUN	Gender=Masc|Number=Sing	13	nmod	_	_
16	מותר	מותר	ADJ	ADJ	Gender=Masc|Number=Sing	0	root	_	_
17	ליתן	נתן	VERB	VERB	VerbForm=Inf	16	csubj	_	_
18	סלע	סלע	NOUN	NOUN	Gender=Masc|Number=Sing	17	obj	_	_
19	ל	ל	ADP	ADP	Definite=Def	20	case	_	_
20	תגר	תגר	NOUN	NOUN	Gender=Masc|Number=Sing	17	obl	_	_
21	כדי	כדי	SCONJ	SCONJ	_	23	mark	_	_
22	ש	ש	SCONJ	SCONJ	_	21	fixed	_	_
23	יביא	הביא	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Tense=Fut	17	advcl	_	_
24	שש	שש	NUM	NUM	Gender=Fem|Number=Sing	25	nummod	_	_
25	סאין	סאה	NOUN	NOUN	Gender=Fem|Number=Plur	23	obj	_	_
26	מ	מ	ADP	ADP	_	28	case	_	_
27	ה	ה	DET	DET	_	28	det	_	_
28	כפר	כפר	NOUN	NOUN	Gender=Masc|Number=Sing	23	obl	_	_
29	ל	ל	ADP	ADP	_	30	case	_	_
30	זמן	זמן	NOUN	NOUN	Gender=Masc|Number=Sing	23	obl	_	_
31	פלוני	פלוני	NOUN	NOUN	Gender=Masc|Number=Sing	30	appos	_	_
32	ו	ו	CCONJ	CCONJ	_	33	cc	_	_
33	הוא	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3	37	nsubj:outer	_	_
34	ש	ש	SCONJ	SCONJ	_	37	mark	_	_
35	יהיו	היה	AUX	AUX	Gender=Fem,Masc|Number=Plur|Person=3|Tense=Fut	37	cop	_	_
36	ב	ב	ADP	ADP	_	37	case	_	_
37	אחריות	אחריות	NOUN	NOUN	Gender=Fem|Number=Sing	16	conj	_	_
38	לוקח	לוקח	NOUN	NOUN	Gender=Masc|Number=Sing	37	compound:smixut	_	_
39	אם	אם	SCONJ	SCONJ	_	40	mark	_	_
40	נגנבו	נגנב	VERB	VERB	Gender=Fem,Masc|Number=Plur|Person=3|Tense=Past	37	advcl	_	_
41	או	או	CCONJ	CCONJ	_	42	cc	_	_
42	נאבדו	נאבד	VERB	VERB	Gender=Fem,Masc|Number=Plur|Person=3|Tense=Past	40	conj	_	_
43	ב	ב	ADP	ADP	Definite=Def	44	case	_	_
44	דרך	דרך	NOUN	NOUN	Gender=Fem|Number=Sing	42	obl	_	_

~~~


