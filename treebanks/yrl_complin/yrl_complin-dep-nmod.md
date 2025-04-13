---
layout: base
title:  'Statistics of nmod in UD_Nheengatu-CompLin'
udver: '2'
---

## Treebank Statistics: UD_Nheengatu-CompLin: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="yrl_complin-dep-nmod-poss.html">nmod:poss</a></tt>.

51 nodes (0%) are attached to their parents as `nmod`.

51 instances of `nmod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.88235294117647.

The following 11 pairs of parts of speech are connected with `nmod`: <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (27; 53% instances), <tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt>-<tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt> (7; 14% instances), <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt> (3; 6% instances), <tt><a href="yrl_complin-pos-NUM.html">NUM</a></tt>-<tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt> (3; 6% instances), <tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (3; 6% instances), <tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt>-<tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt> (2; 4% instances), <tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt>-<tt><a href="yrl_complin-pos-PROPN.html">PROPN</a></tt> (2; 4% instances), <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="yrl_complin-pos-NUM.html">NUM</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="yrl_complin-pos-PROPN.html">PROPN</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nmod	color:blue
1	Aé	aé	PRON	PRON	Number=Sing|Person=3|PronType=Prs	2	nsubj	_	TokenRange=0:2
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
3	penhẽ	penhẽ	PRON	PRON	Number=Plur|Person=2|PronType=Prs	1	nmod	_	TokenRange=8:13
4	suí	suí	ADP	ADP	AdpType=Post	3	case	_	TokenRange=14:17
5	usú	sú	VERB	V	Mood=Ind|Person=3|VerbForm=Fin	0	root	_	_
6	putari	putari	AUX	AUXN	Compound=Yes|VerbForm=Inf	5	aux	_	_
7	?	?	PUNCT	PUNCT	_	5	punct	_	SpaceAfter=No|TokenRange=28:29

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 nmod	color:blue
1	Ti	ti	PART	NEG	PartType=Neg|Polarity=Neg	4	advmod	_	TokenRange=0:2
2	ana	ana	PART	PFV	Aspect=Perf	4	advmod	_	TokenRange=3:6
3	kurí	kurí	PART	FUT	Tense=Fut	4	advmod	_	TokenRange=7:11
4	yayuká	yuká	VERB	V	Mood=Ind|Number=Plur|Person=1|VerbForm=Fin	0	root	_	TokenRange=12:18
5	penhẽ	penhẽ	PRON	PRON	Number=Plur|Person=2|PronType=Prs	4	obj	_	SpaceAfter=No|TokenRange=19:24
6	,	,	PUNCT	PUNCT	_	8	punct	_	TokenRange=24:25
7	maãresé	maãresé	SCONJ	SCONJR	_	8	mark	_	TokenRange=26:33
8	yakwáu	kwáu	VERB	V	Mood=Ind|Number=Plur|Person=1|VerbForm=Fin	4	advcl	_	TokenRange=34:40
9	ana	ana	PART	PFV	Aspect=Perf	8	advmod	_	TokenRange=41:44
10	kuíri	kuíri	ADV	ADVT	AdvType=Tim	8	advmod	_	TokenRange=45:50
11	penhẽ	penhẽ	PRON	PRON	Number=Plur|Person=2|PronType=Prs	12	nsubj	_	TokenRange=51:56
12	mira	mira	NOUN	N	Number=Sing	8	ccomp	_	TokenRange=57:61
13	yané	yané	PRON	PRON2	Case=Gen|Number=Plur|Person=1|PronType=Prs	12	nmod	_	TokenRange=62:66
14	yawé	yawé	ADP	ADP	AdpType=Post	13	case	_	SpaceAfter=No|TokenRange=67:71
15	.	.	PUNCT	PUNCT	_	4	punct	_	SpaceAfter=No|TokenRange=71:72

~~~


