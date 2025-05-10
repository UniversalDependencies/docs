---
layout: base
title:  'Statistics of compound in UD_Azerbaijani-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Azerbaijani-TueCL: Relations: `compound`

This relation is universal.
There are 2 language-specific subtypes of `compound`: <tt><a href="az_tuecl-dep-compound-lvc.html">compound:lvc</a></tt>, <tt><a href="az_tuecl-dep-compound-redup.html">compound:redup</a></tt>.

12 nodes (1%) are attached to their parents as `compound`.

11 instances of `compound` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.08333333333333.

The following 3 pairs of parts of speech are connected with `compound`: <tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt> (10; 83% instances), <tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="az_tuecl-pos-ADV.html">ADV</a></tt> (1; 8% instances), <tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound	color:blue
1	O	o	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	çalışdı	çalış	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
3	kı	ki	SCONJ	_	_	9	mark	_	_
4	siqar	siqar	NOUN	_	Case=Nom|Number=Sing	5	compound	_	_
5	çekmə	çek	VERB	_	VerbForm=Vnoun	9	xcomp	_	_
6	və	və	CCONJ	_	_	8	cc	_	_
7	əlkol	alkol	NOUN	_	Case=Nom|Number=Sing	8	obj	_	_
8	içməni	iç	VERB	_	Case=Acc|Number=Sing|VerbForm=Vnoun	5	conj	_	_
9	tərkidə	tərk	VERB	_	Mood=Sub|Number=Sing|Person=3	2	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound	color:blue
1	Deniz	Deniz	PROPN	_	Case=Nom|Number=Sing	3	nsubj	_	_
2	gec	gec	ADV	_	_	3	advmod	_	_
3	yatsa	yat	VERB	_	Mood=Cnd|Number=Sing|Person=3	6	advcl	_	_
4	mədrəsəyə	mədrəsə	NOUN	_	Case=Dat|Number=Sing	6	obl	_	_
5	gec	gec	ADV	_	_	6	compound	_	_
6	qalacax	qal	VERB	_	Aspect=Prosp|Mood=Ind|Number=Sing|Person=3|Tense=Fut	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 compound	color:blue
1	Gecəni	Gecə	NOUN	_	Case=Acc|Number=Sing	2	obj	_	_
2	qalan	qal	VERB	_	Tense=Pres|VerbForm=Part	3	acl	_	_
3	qonax	qonax	NOUN	_	Case=Nom|Number=Sing	5	nsubj	_	_
4	qapını	qapı	NOUN	_	Case=Acc|Number=Sing	5	obj	_	_
5	çalmışdı	çal	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
6	,	,	PUNCT	_	_	5	punct	_	_
7	amma	amma	CCONJ	_	_	13	cc	_	_
8	ev	ev	NOUN	_	Case=Nom|Number=Sing	9	nmod	_	_
9	sahab	sahab	NOUN	_	_	13	nsubj	_	_
10	sil	sil	VERB	_	_	13	compound:lvc	_	SpaceAfter=No
11	-	-	PUNCT	_	_	10	punct	_	SpaceAfter=No
12	süpür	süpür	VERB	_	Case=Nom|Number=Sing	10	compound	_	_
13	elirdi	elə	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Tense=Past	5	conj	_	_
14	və	və	CCONJ	_	_	20	cc	_	_
15	resturandan	restauran	NOUN	_	Case=Abl|Number=Sing	17	obl	_	_
16	sifariş	sifariş	NOUN	_	Case=Nom|Number=Sing	17	obj	_	_
17	verən	ver	VERB	_	Tense=Pres|VerbForm=Part	18	nmod	_	_
18	qəza	qəza	NOUN	_	Case=Nom|Number=Sing	20	nsubj	_	_
19	hələ	hələ	ADV	_	_	20	advmod	_	_
20	gələcəgidi	gəl	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut	5	conj	_	SpaceAfter=No
21	.	.	PUNCT	_	_	5	punct	_	_

~~~


