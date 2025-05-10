---
layout: base
title:  'Statistics of nmod in UD_Nheengatu-CompLin'
udver: '2'
---

## Treebank Statistics: UD_Nheengatu-CompLin: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="yrl_complin-dep-nmod-poss.html">nmod:poss</a></tt>.

59 nodes (0%) are attached to their parents as `nmod`.

59 instances of `nmod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.93220338983051.

The following 11 pairs of parts of speech are connected with `nmod`: <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (31; 53% instances), <tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt>-<tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt> (9; 15% instances), <tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (5; 8% instances), <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt> (3; 5% instances), <tt><a href="yrl_complin-pos-NUM.html">NUM</a></tt>-<tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt> (3; 5% instances), <tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt>-<tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt> (2; 3% instances), <tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt>-<tt><a href="yrl_complin-pos-PROPN.html">PROPN</a></tt> (2; 3% instances), <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="yrl_complin-pos-NUM.html">NUM</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="yrl_complin-pos-PROPN.html">PROPN</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nmod	color:blue
1	Aé	aé	PRON	PRON	Case=Acc,Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	TokenRange=0:2
2	urasú	rasú	VERB	V	Mood=Ind|Person=3|VerbForm=Fin	0	root	_	TokenRange=3:8
3	pirá	pirá	NOUN	N	Number=Sing	2	obj	_	TokenRange=9:13
4	suka	uka	NOUN	N	Number=Sing|Number[psor]=Sing|Person[psor]=3|Rel=NCont	3	nmod	_	TokenRange=14:18
5	suí	suí	ADP	ADP	AdpType=Post	4	case	_	TokenRange=19:22
6	sukwera	sukwera	NOUN	N	Number=Sing|Number[psor]=Sing|Person[psor]=3|Rel=NCont	8	nsubj	_	TokenRange=23:30
7	waá	waá	PRON	REL	Number=Sing|PronType=Rel	6	nmod:poss	_	TokenRange=31:34
8	membeka	membeka	ADJ	A	_	3	acl:relcl	_	SpaceAfter=No|TokenRange=35:42
9	.	.	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No|TokenRange=42:43

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nmod	color:blue
1	Awá	awá	PRON	INT	PronType=Int	5	nsubj	_	TokenRange=0:3
2	taá	taá	PART	CQ	PartType=Int	5	advmod	_	TokenRange=4:7
3	penhẽ	penhẽ	PRON	PRON	Case=Acc,Nom|Number=Plur|Person=2|PronType=Prs	1	nmod	_	TokenRange=8:13
4	suí	suí	ADP	ADP	AdpType=Post	3	case	_	TokenRange=14:17
5	usú	sú	VERB	V	Mood=Ind|Person=3|VerbForm=Fin	0	root	_	_
6	putari	putari	AUX	AUXN	Compound=Yes|VerbForm=Inf	5	aux	_	_
7	?	?	PUNCT	PUNCT	_	5	punct	_	SpaceAfter=No|TokenRange=28:29

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nmod	color:blue
1	Yandé	yandé	PRON	PRON	Case=Acc,Nom|Number=Plur|Person=1|PronType=Prs	5	nsubj	_	SpaceAfter=No|TokenRange=0:5
2	,	,	PUNCT	PUNCT	_	3	punct	_	TokenRange=5:6
3	kunhã-itá	kunhã	NOUN	N	Number=Plur	1	nmod	_	SpaceAfter=No|TokenRange=7:16
4	,	,	PUNCT	PUNCT	_	3	punct	_	TokenRange=16:17
5	yayupika	yupika	VERB	V	Mood=Ind|Number=Plur|Person=1|VerbForm=Fin	0	root	_	TokenRange=18:26
6	kurí	kurí	PART	FUT	Tense=Fut	5	advmod	_	TokenRange=27:31
7	yané	yané	PRON	PRON2	Case=Gen|Number=Plur|Person=1|Poss=Yes|PronType=Prs	8	nmod:poss	_	TokenRange=32:36
8	mena-itá	mena	NOUN	N	Number=Plur	5	obj	_	SpaceAfter=No|TokenRange=37:45
9	!	!	PUNCT	PUNCT	_	5	punct	_	SpaceAfter=No|TokenRange=45:46

~~~


