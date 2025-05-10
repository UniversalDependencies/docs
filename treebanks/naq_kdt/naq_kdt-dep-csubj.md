---
layout: base
title:  'Statistics of csubj in UD_Khoekhoe-KDT'
udver: '2'
---

## Treebank Statistics: UD_Khoekhoe-KDT: Relations: `csubj`

This relation is universal.
There are 2 language-specific subtypes of `csubj`: <tt><a href="naq_kdt-dep-csubj-outer.html">csubj:outer</a></tt>, <tt><a href="naq_kdt-dep-csubj-pass.html">csubj:pass</a></tt>.

14 nodes (0%) are attached to their parents as `csubj`.

8 instances of `csubj` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.35714285714286.

The following 3 pairs of parts of speech are connected with `csubj`: <tt><a href="naq_kdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="naq_kdt-pos-VERB.html">VERB</a></tt> (7; 50% instances), <tt><a href="naq_kdt-pos-VERB.html">VERB</a></tt>-<tt><a href="naq_kdt-pos-VERB.html">VERB</a></tt> (6; 43% instances), <tt><a href="naq_kdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="naq_kdt-pos-ADJ.html">ADJ</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 csubj	color:blue
1	ǃGâi	ǃgâi	ADJ	_	_	0	root	0:root	_
2	a	a	AUX	COP.PRS	Tense=Pres	1	cop	1:cop	_
3	satsa	sa	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=2|PronType=Prs	5	obj	5:obj	_
4	ǁkhawa	ǁkhawa	ADV	_	_	5	advmod	5:advmod	_
5	mû	mû	VERB	_	Voice=Act	1	csubj	1:csubj	_
6	sa	s	SCONJ	NMLZ	Case=Acc	5	mark	5:mark	_
7	.	.	PUNCT	_	_	1	punct	1:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 3 csubj	color:blue
1	Sats	sa	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=2|PronType=Prs	3	nsubj	3:nsubj	_
2	ge	ge	AUX	DECL	Mood=Ind	3	aux	3:aux	_
3	dī	dī	VERB	_	Voice=Act	16	csubj	16:csubj	_
4	s	s	SCONJ	NMLZ	Case=Nom	3	mark	3:mark	_
5	tama	tama	PART	_	ExtPos=CCONJ|Polarity=Neg	10	cc	10:cc	_
6	s	_	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	5	fixed	5:fixed	_
7	ka	ka	AUX	POT	Mood=Pot	5	fixed	5:fixed	_
8	i	i	AUX	COP.NPRS	Tense=Fut,Past,RecPast	5	fixed	5:fixed	_
9	o	o	ADV	_	_	5	fixed	5:fixed	_
10	dī	dī	VERB	_	Voice=Act	3	conj	3:conj|16:csubj	_
11	tama	tama	PART	NEG	Polarity=Neg	10	advmod	10:advmod	_
12	hâ	hâ	AUX	PFV	Aspect=Perf	10	aux	10:aux	_
13	s	s	SCONJ	NMLZ	Case=Nom	10	mark	10:mark	_
14	ge	ge	AUX	DECL	Mood=Ind	16	aux	16:aux	_
15	ǂâibasen-e	ǂâibasen	NOUN	_	Case=Acc|Gender=Neut|Number=Sing|Person=3	16	obj	16:obj	_
16	ūhâ	ūhâ	VERB	_	Voice=Act	0	root	0:root	_
17	tama	tama	PART	NEG	Polarity=Neg	16	advmod	16:advmod	SpaceAfter=No
18	.	.	PUNCT	_	_	16	punct	16:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 csubj	color:blue
1	ǃGāsa	ǃgāsa	ADJ	_	_	0	root	0:root	_
2	i	_	PRON	_	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	1	expl:impers	1:expl:impers	_
3	ge	ge	AUX	DECL	Mood=Ind	1	aux	1:aux	_
4	nî	nî	AUX	FUT	Tense=Fut	1	aux	1:aux	_
5	nē	nē	DET	PROX	Deixis=Prox|PronType=Dem	6	det	6:det	_
6	xūn	xū	NOUN	_	Case=Nom|Gender=Neut|Number=Plur|Person=3	8	nsubj	8:nsubj	_
7	a	a	AUX	COP.PRS	Tense=Pres	8	cop	8:cop	_
8	ǁawosa	ǁawosa	ADJ	_	_	1	csubj	1:csubj	_
9	ǃkhaisa	ǃkhais	SCONJ	COMPL	Case=Acc	8	mark	8:mark	SpaceAfter=No
10	.	.	PUNCT	_	_	1	punct	1:punct	SpacesAfter=\n

~~~


