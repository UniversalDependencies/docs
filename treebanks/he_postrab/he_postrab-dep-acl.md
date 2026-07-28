---
layout: base
title:  'Statistics of acl in UD_Hebrew-PostRab'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-PostRab: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="he_postrab-dep-acl-relcl.html">acl:relcl</a></tt>.

12 nodes (0%) are attached to their parents as `acl`.

12 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.83333333333333.

The following 4 pairs of parts of speech are connected with `acl`: <tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_postrab-pos-VERB.html">VERB</a></tt> (7; 58% instances), <tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_postrab-pos-ADJ.html">ADJ</a></tt> (2; 17% instances), <tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt> (2; 17% instances), <tt><a href="he_postrab-pos-VERB.html">VERB</a></tt>-<tt><a href="he_postrab-pos-VERB.html">VERB</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 acl	color:blue
1	אין	אין	ADV	ADV	_	7	advcl	_	_
2	ל	ל	ADP	ADP	_	3	case	_	_
3	ו	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3	1	obl	_	_
4	דבר	דבר	NOUN	NOUN	Gender=Masc|Number=Sing	1	nsubj:cop	_	_
5	לעשות	עשה	VERB	VERB	VerbForm=Inf	4	acl	_	_
6	מחיצה	מחצה	NOUN	NOUN	Gender=Fem|Number=Sing	5	obj	_	_
7	מחזיר	החזיר	VERB	VERB	Gender=Masc|Number=Sing|Person=1,2,3|VerbForm=Part	0	root	_	_
8	פני	פנים	NOUN	NOUN	Gender=Masc|Number=Plur	7	obj	_	_
9	ו	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3	8	nmod:poss	_	_
10	ו	ו	CCONJ	CCONJ	_	11	cc	_	_
11	אוכל	אכל	VERB	VERB	Gender=Masc|Number=Sing|Person=1,2,3|VerbForm=Part	7	conj	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 20 acl	color:blue
1	אפילו	אפילו	ADV	ADV	_	3	advmod	_	_
2	אם	אם	SCONJ	SCONJ	_	3	mark	_	_
3	אוכל	אכל	VERB	VERB	Gender=Masc|Number=Sing|Person=1,2,3|VerbForm=Part	9	advcl	_	_
4	עם	עם	ADP	ADP	_	5	case	_	_
5	אחרים	אחר	ADJ	ADJ	Gender=Masc|Number=Plur	3	obl	_	_
6	ש	ש	SCONJ	SCONJ	_	7	mark	_	_
7	מברכין	בירך	VERB	VERB	Gender=Masc|Number=Plur|Person=1,2,3|VerbForm=Part	5	acl:relcl	_	_
8	לא	לא	ADV	ADV	_	9	advmod	_	_
9	יענה	ענה	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Tense=Fut	0	root	_	_
10	אחרי	אחרי	ADP	ADP	_	11	case	_	_
11	הם	הוא	PRON	PRON	Gender=Masc|Number=Plur|Person=3	9	obl	_	_
12	אמן	אמן	NOUN	NOUN	_	9	ccomp	_	_
13	ו	ו	CCONJ	CCONJ	_	14	cc	_	_
14	פטור	פטור	ADJ	ADJ	Gender=Masc|Number=Sing	9	conj	_	_
15	מ	מ	ADP	ADP	_	16	case	_	_
16	כל	כל	DET	DET	_	18	det	_	_
17	ה	ה	DET	DET	_	18	det	_	_
18	מצוות	מצווה	NOUN	NOUN	Gender=Fem|Number=Plur	14	obl	_	_
19	ה	ה	SCONJ	SCONJ	_	20	mark	_	_
20	אמורות	אמור	ADJ	ADJ	Gender=Fem|Number=Plur	18	acl	_	_
21	ב	ב	ADP	ADP	Definite=Def	22	case	_	_
22	תורה	תורה	NOUN	NOUN	Gender=Fem|Number=Sing	20	obl	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 13 acl	color:blue
1	ידוע	ידוע	ADJ	ADJ	Gender=Masc|Number=Sing	0	root	_	_
2	ה	ה	DET	DET	_	3	det	_	_
3	דבר	דבר	NOUN	NOUN	Gender=Masc|Number=Sing	1	nsubj:cop	_	_
4	ו	ו	CCONJ	CCONJ	_	5	cc	_	_
5	נגלה	גילה	VERB	VERB	Gender=Masc|Number=Sing|Person=1,2,3|VerbForm=Part	1	conj	_	ConjPush=Yes
6	ל	ל	ADP	ADP	_	7	case	_	_
7	כל	כל	NOUN	NOUN	_	1	obl	_	_
8	כי	כי	SCONJ	SCONJ	_	13	mark	_	_
9	ה	ה	DET	DET	_	10	det	_	_
10	אמונה	אמונה	NOUN	NOUN	Gender=Fem|Number=Sing	13	nsubj:cop	_	_
11	ה	ה	DET	DET	_	12	det	_	_
12	זו	זה	PRON	PRON	Gender=Fem|Number=Sing|Person=3	10	det	_	_
13	יסוד	יסוד	NOUN	NOUN	Gender=Masc|Number=Sing	3	acl	_	_
14	ה	ה	DET	DET	_	15	det	_	_
15	דת	דת	NOUN	NOUN	Gender=Fem|Number=Sing	13	compound:smixut	_	_
16	ו	ו	CCONJ	CCONJ	_	22	cc	_	_
17	אשר	אשר	SCONJ	SCONJ	_	19	mark	_	_
18	לא	לא	ADV	ADV	_	19	advmod	_	_
19	יאמין	האמין	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Tense=Fut	22	csubj	_	_
20	ב	ב	ADP	ADP	_	21	case	_	_
21	זה	זה	PRON	PRON	Gender=Masc|Number=Sing|Person=3	19	obl	_	_
22	כופר	כפר	VERB	VERB	Gender=Masc|Number=Sing|Person=1,2,3|Tense=Pres|VerbForm=Part	1	conj	_	_
23	ב	ב	ADP	ADP	Definite=Def	24	case	_	_
24	עיקר	עיקר	NOUN	NOUN	Gender=Masc|Number=Sing	22	obl	_	_
25	ו	ו	CCONJ	CCONJ	_	26	cc	_	_
26	אין	אין	VERB	VERB	_	22	conj	_	_
27	ל	ל	ADP	ADP	_	28	case	_	_
28	ו	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3	26	obl	_	_
29	חלק	חלק	NOUN	NOUN	Gender=Masc|Number=Sing	26	nsubj:cop	_	_
30	ו	ו	CCONJ	CCONJ	_	31	cc	_	_
31	זכות	זכות	NOUN	NOUN	Gender=Fem|Number=Sing	29	conj	_	_
32	עם	עם	ADP	ADP	_	33	case	_	_
33	ישראל	ישראל	PROPN	PROPN	_	26	obl	_	_

~~~


