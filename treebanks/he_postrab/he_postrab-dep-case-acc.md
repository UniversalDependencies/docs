---
layout: base
title:  'Statistics of case:acc in UD_Hebrew-PostRab'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-PostRab: Relations: `case:acc`

This relation is a language-specific subtype of <tt><a href="he_postrab-dep-case.html">case</a></tt>.
There are also 1 other language-specific subtypes of `case`: <tt><a href="he_postrab-dep-case-gen.html">case:gen</a></tt>.

3 nodes (0%) are attached to their parents as `case:acc`.

3 instances of `case:acc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.66666666666667.

The following 2 pairs of parts of speech are connected with `case:acc`: <tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_postrab-pos-ADP.html">ADP</a></tt> (2; 67% instances), <tt><a href="he_postrab-pos-PROPN.html">PROPN</a></tt>-<tt><a href="he_postrab-pos-ADP.html">ADP</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 case:acc	color:blue
1	מ	מ	ADP	ADP	_	2	case	_	_
2	כאן	כאן	ADV	ADV	_	4	advmod	_	_
3	ואילך	ואילך	ADV	ADV	_	2	fixed	_	_
4	מתחיל	התחיל	VERB	VERB	Gender=Masc|Number=Sing|Person=1,2,3|Tense=Pres|VerbForm=Part	0	root	_	_
5	לסדר	סידר	VERB	VERB	VerbForm=Inf	4	xcomp	_	_
6	לפני	לפני	ADP	ADP	_	7	case	_	_
7	הם	הוא	PRON	PRON	Gender=Masc|Number=Plur|Person=3	5	obl	_	_
8	את	את	ADP	ADP	_	10	case:acc	_	_
9	ה	ה	DET	DET	_	10	det	_	_
10	מצות	מצווה	NOUN	NOUN	Gender=Fem|Number=Plur	5	obj	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 12 case:acc	color:blue
1	אין	אין	ADV	ADV	_	3	advmod	_	_
2	ה	ה	DET	DET	_	3	det	_	_
3	משל	משל	NOUN	NOUN	Gender=Masc|Number=Sing	6	nsubj	_	_
4	ה	ה	DET	DET	_	5	det	_	_
5	זה	זה	PRON	PRON	Gender=Masc|Number=Sing|Person=3	3	det	_	_
6	צודק	צדק	VERB	VERB	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
7	אלא	אלא	CCONJ	CCONJ	_	11	mark	_	_
8	אם	אם	SCONJ	SCONJ	_	7	fixed	_	_
9	כן	כן	ADV	ADV	_	7	fixed	_	_
10	אנו	הוא	PRON	PRON	Gender=Fem,Masc|Number=Plur|Person=1	11	nsubj	_	_
11	רואין	ראה	VERB	VERB	Gender=Masc|Number=Plur|Person=1,2,3|VerbForm=Part	6	advcl	_	_
12	את	את	ADP	ADP	_	14	case:acc	_	_
13	כל	כל	DET	DET	_	14	det	_	_
14	ישראל	ישראל	PROPN	PROPN	_	11	obj	_	_
15	כאילו	כאילו	SCONJ	SCONJ	_	17	mark	_	_
16	הם	הוא	PRON	PRON	Gender=Masc|Number=Plur|Person=3	17	cop	_	_
17	גוף	גוף	NOUN	NOUN	Gender=Masc|Number=Sing	14	nsubj	_	_
18	אחד	אחת	NUM	NUM	Gender=Masc|Number=Sing	17	nummod	_	_

~~~


