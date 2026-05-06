---
layout: base
title:  'Statistics of compound:svc in UD_Hebrew-PostRab'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-PostRab: Relations: `compound:svc`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `compound`: <tt><a href="he_postrab-dep-compound-redup.html">compound:redup</a></tt>, <tt><a href="he_postrab-dep-compound-smixut.html">compound:smixut</a></tt>.

8 nodes (0%) are attached to their parents as `compound:svc`.

8 instances of `compound:svc` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.125.

The following 1 pairs of parts of speech are connected with `compound:svc`: <tt><a href="he_postrab-pos-VERB.html">VERB</a></tt>-<tt><a href="he_postrab-pos-VERB.html">VERB</a></tt> (8; 100% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 compound:svc	color:blue
1	צא	יצא	VERB	VERB	Gender=Masc|Mood=Imp|Number=Sing|Person=2	0	root	_	_
2	ו	ו	CCONJ	CCONJ	_	1	cc	_	_
3	חשוב	חשב	VERB	VERB	Gender=Masc|Mood=Imp|Number=Sing|Person=2	1	compound:svc	_	_
4	שנותי	שנה	NOUN	NOUN	Gender=Fem|Number=Plur	3	obj	_	_
5	ו	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3	4	nmod:poss	_	_
6	של	של	ADP	ADP	_	7	case	_	_
7	מתושלח	מתושלח	PROPN	PROPN	Gender=Masc|Number=Sing	5	appos	_	_
8	ו	ו	CCONJ	CCONJ	_	9	cc	_	_
9	תמצא	מצא	VERB	VERB	Gender=Masc|Number=Sing|Person=2|Tense=Fut	1	conj	_	_
10	ש	ש	SCONJ	SCONJ	_	12	mark	_	_
11	הם	הוא	PRON	PRON	Gender=Masc|Number=Plur|Person=3	12	nsubj	_	_
12	כלים	כלה	VERB	VERB	Gender=Masc|Number=Plur|Person=1,2,3|VerbForm=Part	9	ccomp	_	_
13	ב	ב	ADP	ADP	_	14	case	_	_
14	שנת	שנה	NOUN	NOUN	Gender=Fem|Number=Sing	12	obl	_	_
15	ת"ר	ת"ר	NUM	NUM	_	16	nummod	_	_
16	שנה	שנה	NOUN	NOUN	Gender=Fem|Number=Sing	14	compound:smixut	_	_
17	ל	ל	ADP	ADP	_	18	case	_	_
18	חיי	חיים	NOUN	NOUN	Gender=Masc|Number=Plur	16	nmod	_	_
19	נח	נח	PROPN	PROPN	Gender=Masc|Number=Sing	18	compound:smixut	_	_

~~~


