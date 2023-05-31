---
layout: base
title:  'Statistics of obl:obj in UD_Tupinamba-TuDeT'
udver: '2'
---

## Treebank Statistics: UD_Tupinamba-TuDeT: Relations: `obl:obj`

This relation is a language-specific subtype of <tt><a href="tpn_tudet-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="tpn_tudet-dep-obl-subj.html">obl:subj</a></tt>.

42 nodes (1%) are attached to their parents as `obl:obj`.

23 instances of `obl:obj` (55%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.14285714285714.

The following 5 pairs of parts of speech are connected with `obl:obj`: <tt><a href="tpn_tudet-pos-VERB.html">VERB</a></tt>-<tt><a href="tpn_tudet-pos-NOUN.html">NOUN</a></tt> (31; 74% instances), <tt><a href="tpn_tudet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tpn_tudet-pos-NOUN.html">NOUN</a></tt> (4; 10% instances), <tt><a href="tpn_tudet-pos-VERB.html">VERB</a></tt>-<tt><a href="tpn_tudet-pos-PRON.html">PRON</a></tt> (3; 7% instances), <tt><a href="tpn_tudet-pos-VERB.html">VERB</a></tt>-<tt><a href="tpn_tudet-pos-PROPN.html">PROPN</a></tt> (3; 7% instances), <tt><a href="tpn_tudet-pos-VERB.html">VERB</a></tt>-<tt><a href="tpn_tudet-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 obl:obj	color:blue
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
# visual-style 1 2 obl:obj	color:blue
1	Ejmoiŋokatu	ikó	NOUN	n	Case=Loc|Intens=Yes|Number=Sing|Person=2|Voice=Cau	0	root	_	_
2	ʃeʔaŋa	ʔaŋ	NOUN	n	Case=Ref|Number[psor]=Sing|Person[psor]=1	1	obl:obj	_	_
3	,	,	PUNCT	punct	_	1	punct	_	_
4	paʔi	paʔi	NOUN	n	_	6	nmod	_	_
5	Tupã	Tupã	PROPN	propn	_	4	compound	_	_
6	reko	ikó	NOUN	n	Rel=Cont	1	advcl	_	_
7	rupi	upi	ADP	posp	Rel=Cont	6	case	_	_
8	.	.	PUNCT	punct	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obl:obj	color:blue
1	maʔepe	maʔe	PRON	pron	_	2	obl:obj	_	_
2	ojmeʔeŋ	meʔeŋ	VERB	vt	Person[obj]=3|Person[subj]=3	0	root	_	_
3	iʔekatwape	ʔekatuaβ	NOUN	n	Rel=NCont	2	obl	_	_
4	?	?	PUNCT	punct	_	2	punct	_	_

~~~


