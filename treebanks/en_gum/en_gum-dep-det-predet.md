---
layout: base
title:  'Statistics of det:predet in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `det:predet`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-det.html">det</a></tt>.

198 nodes (0%) are attached to their parents as `det:predet`.

198 instances of `det:predet` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.30808080808081.

The following 6 pairs of parts of speech are connected with `det:predet`: <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (184; 93% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (8; 4% instances), <tt><a href="en_gum-pos-DET.html">DET</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 det:predet	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	nsubj	5:nsubj|8:nsubj	Discourse=elaboration-additional:45->37:7:ref-prs-387-396,418|Entity=(75-abstract-new-nnnnn-cf5-5,8-disc(44-abstract-giv:act-nnsnn-cf1*-1-ana)|PDTB=Hypophora:Hypophora:_:_:405-417:418-495
2	's	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	5:cop	_
3	both	both	DET	PDT	PronType=Tot	5	det:predet	5:det:predet	Entity=(44-abstract-giv:act-nnsnn-cf1*-3,6-coref
4	a	a	DET	DT	Definite=Ind|PronType=Art	5	det	5:det	Entity=(73-event-giv:act-ssssn-cf2-2-coref
5	waiver	waiver	NOUN	NN	Number=Sing	0	root	0:root	Entity=73)|MSeg=waiv-er
6	and	and	CCONJ	CC	_	8	cc	8:cc	_
7	a	a	DET	DT	Definite=Ind|PronType=Art	8	det	8:det	Entity=(74-event-giv:act-ssssn-cf3-2-coref
8	modification	modification	NOUN	NN	Number=Sing	5	conj	5:conj:and	Entity=74)44)75)|MSeg=mod-ification|SpaceAfter=No
9	,	,	PUNCT	,	_	11	punct	11:punct	_
10	Justice	Justice	PROPN	NNP	Number=Sing	11	nmod:desc	11:nmod:desc	Entity=(76-person-new-nnnnn-cf4-1,2-coref-Clarence_Thomas|MSeg=Just-ice
11	Thomas	Thomas	PROPN	NNP	Number=Sing	5	vocative	5:vocative	Entity=76)|SpaceAfter=No
12	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det:predet	color:blue
1	Keep	keep	VERB	VB	Mood=Imp|Person=2|VerbForm=Fin	0	root	0:root	Discourse=joint-other_m:51->3:2:grf-seq-
2	track	track	NOUN	NN	Number=Sing	1	obj	1:obj	_
3	of	of	ADP	IN	_	5	case	5:case	_
4	all	all	DET	PDT	PronType=Tot	5	det:predet	5:det:predet	Entity=(83-abstract-new-nnnnn-cf2-2-sgl
5	your	your	PRON	PRP$	Case=Gen|Number=Sing|Person=2|Poss=Yes|PronType=Prs|Typo=Yes	2	nmod	2:nmod:of	CorrectForm=your words.|Entity=(5-person-giv:act-n____-cf1*-1-ana)83)|XML=<sic ana:::"your words."></sic>

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det:predet	color:blue
1	You	you	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	2	nsubj	2:nsubj	Discourse=organization-phatic:157->158:0:_|Entity=(28-person-giv:inact-nnnnn-cf2-1-ana)
2	know	know	VERB	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	8	parataxis	8:parataxis	_
3	all	all	DET	PDT	PronType=Tot	4	det:predet	4:det:predet	Discourse=elaboration-additional:158->156:0:_|Entity=(102-person-new-nnnnn-cf1-5-coref
4	the	the	DET	DT	Definite=Def|PronType=Art	7	reparandum	7:reparandum	_
5	all	all	DET	PDT	PronType=Tot	7	det:predet	7:det:predet	_
6	these	this	DET	DT	Number=Plur|PronType=Dem	7	det	7:det	_
7	artists	artist	NOUN	NNS	Number=Plur	8	nsubj	8:nsubj	Entity=102)|MSeg=artist-s
8	put	put	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
9	their	their	PRON	PRP$	Case=Gen|Number=Plur|Person=3|Poss=Yes|PronType=Prs	8	obj	8:obj	Entity=(102-person-giv:act-nnnnn-cf1-1-ana)
10	—	—	PUNCT	:	_	8	punct	8:punct	_

~~~


