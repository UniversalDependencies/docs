---
layout: base
title:  'Statistics of discourse:sp in UD_Classical_Chinese-Kyoto'
udver: '2'
---

## Treebank Statistics: UD_Classical_Chinese-Kyoto: Relations: `discourse:sp`

This relation is a language-specific subtype of <tt><a href="lzh_kyoto-dep-discourse.html">discourse</a></tt>.

7464 nodes (3%) are attached to their parents as `discourse:sp`.

7459 instances of `discourse:sp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.17390139335477.

The following 12 pairs of parts of speech are connected with `discourse:sp`: <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-PART.html">PART</a></tt> (5563; 75% instances), <tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lzh_kyoto-pos-PART.html">PART</a></tt> (1368; 18% instances), <tt><a href="lzh_kyoto-pos-PART.html">PART</a></tt>-<tt><a href="lzh_kyoto-pos-PART.html">PART</a></tt> (194; 3% instances), <tt><a href="lzh_kyoto-pos-PRON.html">PRON</a></tt>-<tt><a href="lzh_kyoto-pos-PART.html">PART</a></tt> (117; 2% instances), <tt><a href="lzh_kyoto-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lzh_kyoto-pos-PART.html">PART</a></tt> (84; 1% instances), <tt><a href="lzh_kyoto-pos-NUM.html">NUM</a></tt>-<tt><a href="lzh_kyoto-pos-PART.html">PART</a></tt> (69; 1% instances), <tt><a href="lzh_kyoto-pos-AUX.html">AUX</a></tt>-<tt><a href="lzh_kyoto-pos-PART.html">PART</a></tt> (45; 1% instances), <tt><a href="lzh_kyoto-pos-ADV.html">ADV</a></tt>-<tt><a href="lzh_kyoto-pos-PART.html">PART</a></tt> (18; 0% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-INTJ.html">INTJ</a></tt> (3; 0% instances), <tt><a href="lzh_kyoto-pos-ADP.html">ADP</a></tt>-<tt><a href="lzh_kyoto-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="lzh_kyoto-pos-INTJ.html">INTJ</a></tt>-<tt><a href="lzh_kyoto-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="lzh_kyoto-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="lzh_kyoto-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 discourse:sp	color:blue
1	天	天	NOUN	n,名詞,制度,場	Case=Loc	2	compound	_	Gloss=heaven|SpaceAfter=No
2	下	下	NOUN	n,名詞,固定物,関係	Case=Loc	3	nsubj	_	Gloss=down|SpaceAfter=No
3	歸	歸	VERB	v,動詞,行為,移動	_	0	root	_	Gloss=return|SpaceAfter=No
4	仁	仁	NOUN	n,名詞,描写,態度	_	3	obj	_	Gloss=benevolence|SpaceAfter=No
5	焉	焉	PART	p,助詞,句末,*	_	3	discourse:sp	_	Gloss=[final-particle]|SpaceAfter=No

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 discourse:sp	color:blue
1	四	四	NUM	n,数詞,数字,*	_	2	nummod	_	Gloss=four|SpaceAfter=No
2	海	海	NOUN	n,名詞,固定物,地形	Case=Loc	4	nmod	_	Gloss=sea|SpaceAfter=No
3	之	之	SCONJ	p,助詞,接続,属格	_	2	case	_	Gloss='s|SpaceAfter=No
4	內	內	NOUN	n,名詞,固定物,関係	Case=Loc	6	nsubj	_	Gloss=inside|SpaceAfter=No
5	皆	皆	ADV	v,副詞,範囲,総括	_	6	advmod	_	Gloss=all|SpaceAfter=No
6	兄	兄	NOUN	n,名詞,人,関係	_	0	root	_	Gloss=elder-brother|SpaceAfter=No
7	弟	弟	NOUN	n,名詞,人,関係	_	6	flat	_	Gloss=younger-brother|SpaceAfter=No
8	也	也	PART	p,助詞,句末,*	_	6	discourse:sp	_	Gloss=[final-particle]|SpaceAfter=No

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 discourse:sp	color:blue
1	管	管	PROPN	n,名詞,人,姓氏	NameType=Sur	4	nsubj	_	Gloss=[surname]|SpaceAfter=No
2	仲	仲	PROPN	n,名詞,人,名	NameType=Giv	1	flat	_	Gloss=[given-name]|SpaceAfter=No
3	非	非	ADV	v,副詞,否定,体言否定	Polarity=Neg	4	advmod	_	Gloss=[negator-of-nouns]|SpaceAfter=No
4	仁	仁	NOUN	n,名詞,描写,態度	_	5	acl	_	Gloss=benevolence|SpaceAfter=No
5	者	者	PART	p,助詞,提示,*	_	0	root	_	Gloss=that-which|SpaceAfter=No
6	與	與	PART	p,助詞,句末,*	_	5	discourse:sp	_	Gloss=[Q]|SpaceAfter=No

~~~


