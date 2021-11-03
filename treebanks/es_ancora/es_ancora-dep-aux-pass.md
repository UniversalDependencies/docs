---
layout: base
title:  'Statistics of aux:pass in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="es_ancora-dep-aux.html">aux</a></tt>.

13 nodes (0%) are attached to their parents as `aux:pass`.

13 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (13; 100% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 aux:pass	color:blue
1	Eramos	ser	AUX	vmip1p0	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	2	aux:pass	2:aux:pass	_
2	considerados	considerar	VERB	vmp00pm	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	11	ccomp	11:ccomp	_
3	como	como	SCONJ	cs	_	4	mark	4:mark	_
4	gente	gente	NOUN	ncfs000	Gender=Fem|Number=Sing	2	xcomp	2:xcomp	ClusterId=CESS-CAST-P-20000302-34-c11|ClusterType=Gen|MentionSpan=4-8
5	que	que	PRON	pr0cn000	PronType=Int,Rel	6	nsubj	6:nsubj	ClusterId=CESS-CAST-P-20000302-34-c11|ClusterType=Gen|MentionSpan=5|MentionMisc=CorefType:ident
6	hacía	hacer	VERB	vmii3s0	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	acl	4:acl	_
7	su	su	DET	dp3cs0	Number=Sing|Person=3|Poss=Yes|PronType=Prs	8	det	8:det	_
8	vida	vida	NOUN	ncfs000	Gender=Fem|Number=Sing	6	obj	6:obj	ClusterId=CESS-CAST-P-20000302-34-s9.sn.42|ClusterType=Gen|MentionSpan=7-8
9	"	"	PUNCT	fe	PunctType=Quot	2	punct	2:punct	SpaceAfter=No
10	,	,	PUNCT	fc	PunctType=Comm	2	punct	2:punct	_
11	matizó	matizar	VERB	vmis3s0	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	SpaceAfter=No
12	.	.	PUNCT	fp	PunctType=Peri	11	punct	11:punct	_

~~~


