---
layout: base
title:  'Statistics of compound:redup in UD_Hebrew-PostRab'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-PostRab: Relations: `compound:redup`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `compound`: <tt><a href="he_postrab-dep-compound-smixut.html">compound:smixut</a></tt>, <tt><a href="he_postrab-dep-compound-svc.html">compound:svc</a></tt>.

2 nodes (0%) are attached to their parents as `compound:redup`.

1 instances of `compound:redup` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `compound:redup`: <tt><a href="he_postrab-pos-VERB.html">VERB</a></tt>-<tt><a href="he_postrab-pos-ADV.html">ADV</a></tt> (1; 50% instances), <tt><a href="he_postrab-pos-VERB.html">VERB</a></tt>-<tt><a href="he_postrab-pos-VERB.html">VERB</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 compound:redup	color:blue
1	ו	ו	CCONJ	CCONJ	_	2	cc	_	_
2	תדע	ידע	VERB	VERB	Gender=Masc|Number=Sing|Person=2|Tense=Fut	0	root	_	_
3	ש	ש	SCONJ	SCONJ	_	5	mark	_	_
4	היתה	היה	AUX	AUX	Gender=Fem|Number=Sing|Person=3|Tense=Past	5	cop	_	_
5	רגילה	רגיל	ADJ	ADJ	Gender=Fem|Number=Sing	2	ccomp	_	_
6	לראות	ראה	VERB	VERB	VerbForm=Inf	5	xcomp	_	_
7	ש	ש	SCONJ	SCONJ	_	10	mark	_	_
8	הרי	הרי	ADV	ADV	_	7	fixed	_	_
9	מנוח	מנוח	PROPN	PROPN	Gender=Masc|Number=Sing	10	nsubj	_	_
10	ראה	ראה	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Tense=Past	2	advcl	_	_
11	ה	ה	DET	DET	_	12	det	_	_
12	מלאך	מלאך	NOUN	NOUN	Gender=Masc|Number=Sing	10	obj	_	_
13	פעם	פעם	NOUN	NOUN	Gender=Fem|Number=Sing	10	obl:tmod	_	_
14	אחת	אחת	NUM	NUM	Gender=Fem|Number=Sing	13	nummod	_	_
15	ו	ו	CCONJ	CCONJ	_	16	cc	_	_
16	אמר	אמר	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Tense=Past	10	conj	_	ConjPush=Yes
17	מות	מות	ADV	ADV	_	18	compound:redup	_	_
18	נמות	מת	VERB	VERB	Gender=Fem,Masc|Number=Plur|Person=1|Tense=Fut	16	ccomp	_	_
19	ו	ו	CCONJ	CCONJ	_	21	cc	_	_
20	זו	זה	PRON	PRON	Gender=Fem|Number=Sing|Person=3	21	nsubj	_	_
21	ראת	ראה	VERB	VERB	Gender=Fem|Number=Sing|Person=3|Tense=Past	10	conj	_	_
22	ארבעה	ארבע	NUM	NUM	Gender=Masc|Number=Plur	21	obj	_	_
23	זה	זה	PRON	PRON	Gender=Masc|Number=Sing|Person=3	21	parataxis	_	_
24	אחר	אחר	ADP	ADP	_	23	case	_	_
25	זה	זה	PRON	PRON	Gender=Masc|Number=Sing|Person=3	23	orphan	_	זה-זה
26	ו	ו	CCONJ	CCONJ	_	28	cc	_	_
27	לא	לא	ADV	ADV	_	28	advmod	_	_
28	חרדה	חרד	VERB	VERB	Gender=Fem|Number=Sing|Person=3|Tense=Past	21	conj	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 compound:redup	color:blue
1	ו	ו	CCONJ	CCONJ	_	2	cc	_	_
2	יש	יש	VERB	VERB	_	0	root	_	_
3	לומר	אמר	VERB	VERB	VerbForm=Inf	2	csubj	_	_
4	ד	ד	SCONJ	SCONJ	_	7	mark	_	_
5	רב	רב	NOUN	NOUN	Gender=Masc|Number=Sing	7	nsubj	_	_
6	כהנא	כהנא	PROPN	PROPN	Gender=Masc|Number=Sing	5	flat	_	_
7	סבר	סבר	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Tense=Past	3	ccomp	_	_
8	ד	ד	SCONJ	SCONJ	_	11	mark	_	_
9	רבי	רבי	NOUN	NOUN	Gender=Masc|Number=Sing	11	nsubj	_	_
10	יוסי	יוסי	PROPN	PROPN	Gender=Masc|Number=Sing	9	flat	_	_
11	יליף	ילף	VERB	VERB	Gender=Masc|Number=Sing|Person=3	7	ccomp	_	_
12	מ	מ	ADP	ADP	_	13	case	_	_
13	בשל	בשל	VERB	VERB	Gender=Masc|Number=Sing	11	obl	_	Citation=Yes
14	מבושל	בושל	VERB	VERB	Gender=Masc|Number=Sing	13	compound:redup	_	_
15	ד	ד	SCONJ	SCONJ	_	17	mark	_	_
16	בישול	בישול	NOUN	NOUN	Gender=Masc|Number=Sing	17	nsubj	_	_
17	מבטל	ביטל	VERB	VERB	Gender=Masc|Number=Sing|Person=1,2,3|VerbForm=Part	11	advcl	_	_
18	אפייה	אפייה	NOUN	NOUN	Gender=Fem|Number=Sing	17	obj	_	_

~~~


