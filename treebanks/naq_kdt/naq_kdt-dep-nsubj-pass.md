---
layout: base
title:  'Statistics of nsubj:pass in UD_Khoekhoe-KDT'
udver: '2'
---

## Treebank Statistics: UD_Khoekhoe-KDT: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="naq_kdt-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="naq_kdt-dep-nsubj-outer.html">nsubj:outer</a></tt>.

159 nodes (1%) are attached to their parents as `nsubj:pass`.

133 instances of `nsubj:pass` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.81132075471698.

The following 3 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="naq_kdt-pos-VERB.html">VERB</a></tt>-<tt><a href="naq_kdt-pos-PRON.html">PRON</a></tt> (89; 56% instances), <tt><a href="naq_kdt-pos-VERB.html">VERB</a></tt>-<tt><a href="naq_kdt-pos-NOUN.html">NOUN</a></tt> (58; 36% instances), <tt><a href="naq_kdt-pos-VERB.html">VERB</a></tt>-<tt><a href="naq_kdt-pos-PROPN.html">PROPN</a></tt> (12; 8% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nsubj:pass	color:blue
1	ǃGâibahe	ǃgâi	VERB	_	Voice=ApplPass	0	root	0:root	_
2	ts	_	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=2|PronType=Prs	1	nsubj:pass	1:nsubj:pass	_
3	nî	nî	AUX	FUT	Tense=Fut	1	aux	1:aux	_
4	î	î	SCONJ	_	_	9	mark	9:mark	_
5	ta	_	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	nsubj	9:nsubj	_
6	aibe	aibe	ADV	_	_	9	advmod	9:advmod	_
7	ti	ti	DET	1SG.POSS	Number=Sing|Person=1|Poss=Yes|PronType=Prs	8	nmod:poss	8:nmod:poss	_
8	ǁgûna	ǁgû	NOUN	_	Case=Acc|Gender=Neut|Number=Plur|Person=3	9	obj	9:obj	_
9	ū	ū	VERB	_	Voice=Act	1	ccomp	1:ccomp	SpaceAfter=No
10	?	?	PUNCT	_	_	1	punct	1:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:pass	color:blue
1	Nē	nē	DET	PROX	Deixis=Prox|PronType=Dem	2	det	2:det	_
2	ferf-i	ferf	NOUN	_	Case=Nom|Gender=Neut|Number=Sing|Person=3	4	nsubj:pass	4:nsubj:pass	_
3	nî	nî	AUX	FUT	Tense=Fut	4	aux	4:aux	_
4	ǁgaiǁgaihe	ǁgaiǁgai	VERB	_	Voice=Pass	8	ccomp	8:ccomp	_
5	ǃkhaisa	ǃkhais	SCONJ	COMPL	Case=Acc	4	mark	4:mark	_
6	ta	_	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	8	nsubj	8:nsubj	_
7	ge	ge	AUX	DECL	Mood=Ind	8	aux	8:aux	_
8	ǂgao	ǂgao	VERB	_	Voice=Act	0	root	0:root	_
9	tama	tama	PART	NEG	Polarity=Neg	8	advmod	8:advmod	_
10	hâ	hâ	AUX	PFV	Aspect=Perf	8	aux	8:aux	SpaceAfter=No
11	.	.	PUNCT	_	_	8	punct	8:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 nsubj:pass	color:blue
1	Petrub	Petru	PROPN	_	Case=Nom|Gender=Masc|Number=Sing|Person=3	6	nsubj:pass	6:nsubj:pass	_
2	ge	ge	AUX	DECL	Mood=Ind	6	aux	6:aux	_
3	dīsi	dīsi	NUM	_	NumType=Card	4	nummod	4:nummod	_
4	eurogu	euro	NOUN	_	Gender=Masc|Number=Plur|Person=3	6	obl:agent	6:obl:agent	_
5	xa	xa	ADP	_	_	4	case	4:case	_
6	ǃgaubahe	ǃgau	VERB	_	Voice=ApplPass	0	root	0:root	_
7	hâ	hâ	AUX	PFV	Aspect=Perf	6	aux	6:aux	SpacesAfter=\n

~~~


