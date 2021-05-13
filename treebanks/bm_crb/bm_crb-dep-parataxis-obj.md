---
layout: base
title:  'Statistics of parataxis:obj in UD_Bambara-CRB'
udver: '2'
---

## Treebank Statistics: UD_Bambara-CRB: Relations: `parataxis:obj`

This relation is a language-specific subtype of <tt><a href="bm_crb-dep-parataxis.html">parataxis</a></tt>.

289 nodes (2%) are attached to their parents as `parataxis:obj`.

289 instances of `parataxis:obj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.47058823529412.

The following 8 pairs of parts of speech are connected with `parataxis:obj`: <tt><a href="bm_crb-pos-VERB.html">VERB</a></tt>-<tt><a href="bm_crb-pos-VERB.html">VERB</a></tt> (220; 76% instances), <tt><a href="bm_crb-pos-VERB.html">VERB</a></tt>-<tt><a href="bm_crb-pos-INTJ.html">INTJ</a></tt> (25; 9% instances), <tt><a href="bm_crb-pos-VERB.html">VERB</a></tt>-<tt><a href="bm_crb-pos-PROPN.html">PROPN</a></tt> (17; 6% instances), <tt><a href="bm_crb-pos-VERB.html">VERB</a></tt>-<tt><a href="bm_crb-pos-NOUN.html">NOUN</a></tt> (14; 5% instances), <tt><a href="bm_crb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bm_crb-pos-NOUN.html">NOUN</a></tt> (6; 2% instances), <tt><a href="bm_crb-pos-VERB.html">VERB</a></tt>-<tt><a href="bm_crb-pos-PRON.html">PRON</a></tt> (5; 2% instances), <tt><a href="bm_crb-pos-ADV.html">ADV</a></tt>-<tt><a href="bm_crb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="bm_crb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bm_crb-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 parataxis:obj	color:blue
1	A	_	PRON	_	_	2	nsubj	_	_
2	fɔ	_	VERB	_	_	0	root	_	_
3	ko	_	PART	_	_	5	discourse	_	_
4	u	_	PRON	_	_	5	nsubj	_	_
5	delila	_	VERB	_	_	2	parataxis:obj	_	SpaceAfter=No
6	,	_	PUNCT	_	_	11	punct	_	_
7	ko	_	PART	_	_	11	discourse	_	_
8	maa	_	NOUN	_	_	11	nsubj	_	_
9	caman	_	ADJ	_	_	8	amod	_	_
10	bɛ	bɛ	AUX	_	Aspect=Imp|Polarity=Pos	11	aux	_	Gloss=IPFV.AFF
11	tɛmɛ	_	VERB	_	_	2	parataxis	_	_
12	sira	_	NOUN	_	_	11	obl	_	_
13	in	_	DET	_	_	12	det	_	_
14	fɛ	_	ADP	_	_	12	case	_	_
15	yen	_	ADV	_	_	11	obl	_	SpaceAfter=No
16	.	_	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 parataxis:obj	color:blue
1	dugumasa	dùgumasa	NOUN	n	_	4	nsubj	_	Gloss=roi|Morf=roi,terre,roi
2	ye	ye	AUX	pm	Aspect=Perf|Polarity=Pos|Valency=2	4	aux	_	Gloss=PFV.TR
3	i	í	PRON	pers	PronType=Prs	4	obj	_	Gloss=REFL
4	kanto	kánto	VERB	v	_	0	root	_	Gloss=s'adresser|Morf=s'adresser,cou,rester|SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	_	Gloss=,
6	a	à	PRON	pers	Number=Sing|Person=3|PronType=Prs	7	nsubj	_	Gloss=3SG
7	ko	kó	VERB	cop	_	4	parataxis	_	Gloss=
8	yoo	yó	INTJ	intj	_	7	parataxis:obj	_	Gloss=salut|SpaceAfter=No
9	!	!	PUNCT	_	_	7	punct	_	Gloss=!

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 parataxis:obj	color:blue
1	Sonsannin	_	NOUN	_	_	11	vocative	_	SpaceAfter=No
2	,	_	PUNCT	_	_	1	punct	_	_
3	n'	_	SCONJ	_	_	6	mark	_	_
4	a	_	PRON	_	_	6	nsubj	_	_
5	bɛ	bɛ	AUX	_	Aspect=Imp|Polarity=Pos	6	aux	_	Gloss=IPFV.AFF
6	wele	_	VERB	_	_	11	advcl	_	_
7	ko	_	PART	_	_	8	discourse	_	_
8	Jaason	_	PROPN	_	_	6	parataxis:obj	_	SpaceAfter=No
9	,	_	PUNCT	_	_	6	punct	_	_
10	o	_	PRON	_	_	11	nsubj	_	_
11	lafilila	_	VERB	_	_	0	root	_	_
12	kojugu	_	ADV	_	_	11	obl	_	SpaceAfter=No
13	.	_	PUNCT	_	_	11	punct	_	_

~~~


