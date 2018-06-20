---
layout: base
title:  'Statistics of compound:dir in UD_Chinese-HK'
udver: '2'
---

## Treebank Statistics: UD_Chinese-HK: Relations: `compound:dir`

This relation is a language-specific subtype of <tt><a href="zh_hk-dep-compound.html">compound</a></tt>.
There are also 3 other language-specific subtypes of `compound`: <tt><a href="zh_hk-dep-compound-ext.html">compound:ext</a></tt>, <tt><a href="zh_hk-dep-compound-vo.html">compound:vo</a></tt>, <tt><a href="zh_hk-dep-compound-vv.html">compound:vv</a></tt>.

25 nodes (0%) are attached to their parents as `compound:dir`.

25 instances of `compound:dir` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.12.

The following 3 pairs of parts of speech are connected with `compound:dir`: <tt><a href="zh_hk-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_hk-pos-VERB.html">VERB</a></tt> (23; 92% instances), <tt><a href="zh_hk-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_hk-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="zh_hk-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_hk-pos-NOUN.html">NOUN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound:dir	color:blue
1	小心	_	ADJ	_	_	0	root	_	SpaceAfter=No
2	別	_	AUX	_	_	3	aux	_	SpaceAfter=No
3	跌	_	VERB	_	_	1	parataxis	_	SpaceAfter=No
4	出來	_	VERB	_	_	3	compound:dir	_	SpaceAfter=No
5	！	_	PUNCT	_	_	3	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound:dir	color:blue
1	乖乖	_	ADV	_	_	2	advmod	_	SpaceAfter=No
2	坐	_	VERB	_	_	0	root	_	SpaceAfter=No
3	下	_	ADV	_	_	2	compound:dir	_	SpaceAfter=No
4	吧	_	PART	_	_	2	discourse:sp	_	SpaceAfter=No
5	！	_	PUNCT	_	_	2	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 compound:dir	color:blue
1	又	_	ADV	_	_	2	advmod	_	SpaceAfter=No
2	曬	_	VERB	_	_	0	root	_	SpaceAfter=No
3	黑	_	ADJ	_	_	2	compound:vv	_	SpaceAfter=No
4	番黎	_	NOUN	_	_	2	compound:dir	_	SpaceAfter=No
5	喇	_	PART	_	_	2	discourse:sp	_	SpaceAfter=No
6	，	_	PUNCT	_	_	7	punct	_	SpaceAfter=No
7	哈哈	_	INTJ	_	_	2	discourse	_	SpaceAfter=No
8	！	_	PUNCT	_	_	2	punct	_	SpaceAfter=No

~~~


