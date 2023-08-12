---
layout: base
title:  'Statistics of acl in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="en_gentle-dep-acl-relcl.html">acl:relcl</a></tt>.

154 nodes (1%) are attached to their parents as `acl`.

152 instances of `acl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.20779220779221.

The following 13 pairs of parts of speech are connected with `acl`: <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> (115; 75% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt> (13; 8% instances), <tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> (6; 4% instances), <tt><a href="en_gentle-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> (5; 3% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-SYM.html">SYM</a></tt> (4; 3% instances), <tt><a href="en_gentle-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="en_gentle-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="en_gentle-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_gentle-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_gentle-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="en_gentle-pos-X.html">X</a></tt>-<tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 acl	color:blue
1	Next	next	ADJ	JJ	Degree=Pos	2	amod	2:amod	Discourse=explanation-evidence:82->80:1|Entity=(114-time-acc:com-cf1-2-coref|XML=<hi rend:::"italic">
2	week	week	NOUN	NN	Number=Sing	7	nsubj	7:nsubj	Entity=114)
3	would	would	AUX	MD	VerbForm=Fin	7	aux	7:aux	_
4	be	be	AUX	VB	VerbForm=Inf	7	cop	7:cop	_
5	a	a	DET	DT	Definite=Ind|PronType=Art	7	det	7:det	Entity=(114-time-giv:act-cf1-3-pred
6	good	good	ADJ	JJ	Degree=Pos	7	amod	7:amod	_
7	time	time	NOUN	NN	Number=Sing	0	root	0:root	_
8	to	to	PART	TO	_	9	mark	9:mark	Discourse=purpose-attribute:83->82:0
9	meet	meet	VERB	VB	VerbForm=Inf	7	acl	7:acl:to	Entity=114)|SpaceAfter=No
10	.	.	PUNCT	.	_	7	punct	7:punct	XML=</hi>

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 acl	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	2:det	Discourse=ROOT:20:0|Entity=(20-abstract-new-cf5-11-disc(14-person-giv:inact-cf3-2-coref
2	angels	angel	NOUN	NNS	Number=Plur	11	nsubj	11:nsubj|12:nsubj:xsubj	Entity=14)|SpaceAfter=No
3	,	,	PUNCT	,	_	7	punct	7:punct	_
4	not	not	PART	RB	Polarity=Neg	7	advmod	7:advmod	_
5	half	half	ADV	RB	Degree=Pos|NumForm=Word|NumType=Frac	7	advmod	7:advmod	_
6	so	so	ADV	RB	_	7	advmod	7:advmod	_
7	happy	happy	ADJ	JJ	Degree=Pos	2	acl	2:acl	_
8	in	in	ADP	IN	_	9	case	9:case	_
9	heaven	heaven	NOUN	NN	Number=Sing	7	obl	7:obl:in	Entity=(15-place-giv:inact-cf4-1-coref-Heaven)|SpaceAfter=No
10	,	,	PUNCT	,	_	2	punct	2:punct	_
11	Went	went	VERB	VBD	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
12	envying	envy	VERB	VBG	VerbForm=Ger	11	xcomp	11:xcomp	_
13	her	she	PRON	PRP	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	12	obj	12:obj	Entity=(1-person-giv:act-cf1*-1-ana)
14	and	and	CCONJ	CC	_	15	cc	15:cc	_
15	me	I	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	13	conj	12:obj|13:conj:and	Entity=(10-person-giv:act-cf2-1-ana)20)
16	—	—	PUNCT	:	_	11	punct	11:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 acl	color:blue
1	14.	14.	X	LS	_	2	dep	2:dep	Discourse=joint-list_m:174->156:0|XML=<ref target:::"/databases/install-postgres-with-docker.md">
2	Install	install	VERB	VB	Mood=Imp|Person=2|VerbForm=Fin	0	root	0:root	_
3	and	and	CCONJ	CC	_	4	cc	4:cc	_
4	Run	run	VERB	VB	Mood=Imp|Person=2|VerbForm=Fin	2	conj	2:conj:and	_
5	PostgreSQL	PostgreSQL	PROPN	NNP	Number=Sing	2	obj	2:obj|4:obj	Entity=(243-abstract-new-cf2-1-sgl-PostgreSQL)
6	using	use	VERB	VBG	VerbForm=Ger	5	acl	5:acl	_
7	Docker	Docker	PROPN	NNP	Number=Sing	6	obj	6:obj	Entity=(242-abstract-giv:act-cf1*-1-coref-Docker_%28software%29)|XML=</ref>

~~~


