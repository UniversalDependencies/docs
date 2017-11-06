---
layout: base
title:  'Statistics of discourse:sp in UD_Chinese-HK'
udver: '2'
---

## Treebank Statistics: UD_Chinese-HK: Relations: `discourse:sp`

This relation is a language-specific subtype of <tt><a href="zh_hk-dep-discourse.html">discourse</a></tt>.

97 nodes (5%) are attached to their parents as `discourse:sp`.

97 instances of `discourse:sp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.08247422680412.

The following 6 pairs of parts of speech are connected with `discourse:sp`: <tt><a href="zh_hk-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_hk-pos-PART.html">PART</a></tt> (82; 85% instances), <tt><a href="zh_hk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_hk-pos-PART.html">PART</a></tt> (8; 8% instances), <tt><a href="zh_hk-pos-PRON.html">PRON</a></tt>-<tt><a href="zh_hk-pos-PART.html">PART</a></tt> (3; 3% instances), <tt><a href="zh_hk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="zh_hk-pos-PART.html">PART</a></tt> (2; 2% instances), <tt><a href="zh_hk-pos-AUX.html">AUX</a></tt>-<tt><a href="zh_hk-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="zh_hk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_hk-pos-PART.html">PART</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 discourse:sp	color:blue
1	該	_	AUX	_	_	2	aux	_	SpaceAfter=No
2	取	_	VERB	_	_	6	dislocated	_	SpaceAfter=No
3	走	_	VERB	_	_	2	compound:vv	_	SpaceAfter=No
4	的	_	PART	_	_	2	mark:rel	_	SpaceAfter=No
5	都	_	ADV	_	_	6	advmod	_	SpaceAfter=No
6	取	_	VERB	_	_	0	root	_	SpaceAfter=No
7	走	_	VERB	_	_	6	compound:vv	_	SpaceAfter=No
8	了	_	PART	_	_	6	discourse:sp	_	SpaceAfter=No
9	！	_	PUNCT	_	_	6	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 discourse:sp	color:blue
1	這些	_	PRON	_	_	3	nsubj	_	SpaceAfter=No
2	都	_	ADV	_	_	3	advmod	_	SpaceAfter=No
3	沒用	_	ADJ	_	_	0	root	_	SpaceAfter=No
4	了	_	PART	_	_	3	discourse:sp	_	SpaceAfter=No
5	吧	_	PART	_	_	3	discourse:sp	_	SpaceAfter=No
6	？	_	PUNCT	_	_	3	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 discourse:sp	color:blue
1	這些	_	PRON	_	_	0	root	_	SpaceAfter=No
2	呢	_	PART	_	_	1	discourse:sp	_	SpaceAfter=No
3	？	_	PUNCT	_	_	1	punct	_	SpaceAfter=No

~~~


