---
layout: base
title:  'Statistics of obl:subj in UD_Tupinamba-TuDeT'
udver: '2'
---

## Treebank Statistics: UD_Tupinamba-TuDeT: Relations: `obl:subj`

This relation is a language-specific subtype of <tt><a href="tpn_tudet-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="tpn_tudet-dep-obl-obj.html">obl:obj</a></tt>.

33 nodes (1%) are attached to their parents as `obl:subj`.

19 instances of `obl:subj` (58%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.27272727272727.

The following 6 pairs of parts of speech are connected with `obl:subj`: <tt><a href="tpn_tudet-pos-VERB.html">VERB</a></tt>-<tt><a href="tpn_tudet-pos-NOUN.html">NOUN</a></tt> (15; 45% instances), <tt><a href="tpn_tudet-pos-VERB.html">VERB</a></tt>-<tt><a href="tpn_tudet-pos-PRON.html">PRON</a></tt> (11; 33% instances), <tt><a href="tpn_tudet-pos-VERB.html">VERB</a></tt>-<tt><a href="tpn_tudet-pos-PROPN.html">PROPN</a></tt> (3; 9% instances), <tt><a href="tpn_tudet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tpn_tudet-pos-NOUN.html">NOUN</a></tt> (2; 6% instances), <tt><a href="tpn_tudet-pos-VERB.html">VERB</a></tt>-<tt><a href="tpn_tudet-pos-ADP.html">ADP</a></tt> (1; 3% instances), <tt><a href="tpn_tudet-pos-VERB.html">VERB</a></tt>-<tt><a href="tpn_tudet-pos-DET.html">DET</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 obl:subj	color:blue
1	SãoSebastião	SãoSebastião	PROPN	propn	_	2	nmod	_	_
2	ʔara	ʔar	NOUN	n	Case=Ref	7	obl:obj	_	_
3	,	,	PUNCT	punct	_	2	punct	_	_
4	seʔõawera	eʔõ	NOUN	n	Case=Ref|Rel=NCont|Tense=Past	2	appos	_	_
5	,	,	PUNCT	punct	_	4	punct	_	_
6	Cristãos	Cristão	NOUN	n	_	7	obl:subj	_	_
7	ojmoete	ete	VERB	v	Person[obj]=3|Person[subj]=3|Voice=Cau	0	root	_	_
8	ojemotupana	tupa	VERB	v	Person=3|Reflex=Yes|VerbForm=Ger|Voice=Cau	7	advcl	_	tupã-ʔar-a

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 obl:subj	color:blue
1	Osoβasape	oβasa	VERB	vt	Int=Yes|Person[obj]=3|Person[subj]=3	0	root	_	_
2	ase	ase	PRON	pro	PronType=Prs	1	obl:subj	_	_
3	oemiʔurama	emiʔu	NOUN	n	Case=Ref|Nomzr=DevPass|Reflex=Yes|Tense=Fut	1	obl	_	_
4	?	?	PUNCT	punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 obl:subj	color:blue
1	tojpeʔa	peʔa	VERB	v	Mood=Per|Person[obj]=3|Person[subj]=3	6	ccomp	_	_
2	Tupã	Tupã	PROPN	propn	_	1	obl:subj	_	_
3	jeʔẽmemwã	jeʔẽmemwã	NOUN	n	_	1	obl:obj	_	_
4	ʃejuru	juru	NOUN	n	Number=Sing|Person=1|Rel=Cont	1	obl	_	_
5	swi	swi	ADP	posp	Rel=Cont	4	case	_	_
6	ojaβo	ʔi	VERB	v	Person=3|VerbForm=Ger	0	root	_	_

~~~


