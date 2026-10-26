---
layout: base
title:  'Statistics of csubj in UD_Javanese-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Javanese-CSUI: Relations: `csubj`

This relation is universal.
There are 2 language-specific subtypes of `csubj`: <tt><a href="jv_csui-dep-csubj-outer.html">csubj:outer</a></tt>, <tt><a href="jv_csui-dep-csubj-pass.html">csubj:pass</a></tt>.

30 nodes (0%) are attached to their parents as `csubj`.

19 instances of `csubj` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.

The following 7 pairs of parts of speech are connected with `csubj`: <tt><a href="jv_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="jv_csui-pos-VERB.html">VERB</a></tt> (16; 53% instances), <tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jv_csui-pos-VERB.html">VERB</a></tt> (5; 17% instances), <tt><a href="jv_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="jv_csui-pos-VERB.html">VERB</a></tt> (4; 13% instances), <tt><a href="jv_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="jv_csui-pos-ADJ.html">ADJ</a></tt> (2; 7% instances), <tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jv_csui-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="jv_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="jv_csui-pos-X.html">X</a></tt>-<tt><a href="jv_csui-pos-ADJ.html">ADJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 csubj	color:blue
1	Maca	waca	VERB	_	Voice=Act	4	csubj	_	_
2	kuwi	kuwi	DET	_	Polite=Infm|PronType=Dem	1	det	_	_
3	bisa	bisa	AUX	_	Polite=Infm	4	aux	_	_
4	mjembarake	jembar	VERB	_	Voice=Act	0	root	_	_
5	kawruh	kawruh	NOUN	_	Number=Sing	4	obj	_	SpaceAfter=No
6	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 csubj	color:blue
1	Yu	yu	PROPN	_	_	4	nsubj	_	_
2	Tuminah	tuminah	PROPN	_	_	1	flat:name	_	_
3	banjur	banjur	ADV	_	Polite=Infm	4	advmod	_	_
4	mbacutake	bacut	VERB	_	Voice=Act	0	root	_	_
5	sing	sing	PRON	_	Polite=Infm|PronType=Rel	6	nsubj	_	_
6	mindah	pindah	VERB	_	Voice=Act	7	csubj	_	_
7	blek	blek	NOUN	_	Number=Sing	4	obj	_	SpaceAfter=No
8	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 csubj	color:blue
1	Entuk	entuk	VERB	_	Voice=Act	8	csubj	_	_
2	dhuwit	dhuwit	NOUN	_	Number=Sing	1	obj	_	_
3	nanging	nanging	CCONJ	_	Polite=Infm	6	cc	_	_
4	raga	raga	NOUN	_	Number=Sing	6	nsubj	_	_
5	mu	mu	PRON	_	Number=Sing|Person=2|Polite=Infm|PronType=Prs	4	nmod:poss	_	_
6	rusak	rusak	NUM	_	NumType=Card	1	conj	_	_
7	ora	ora	PART	_	Polarity=Neg|Polite=Infm	8	advmod	_	_
8	becik	becik	ADJ	_	_	0	root	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


