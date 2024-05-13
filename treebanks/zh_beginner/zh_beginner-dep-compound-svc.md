---
layout: base
title:  'Statistics of compound:svc in UD_Chinese-Beginner'
udver: '2'
---

## Treebank Statistics: UD_Chinese-Beginner: Relations: `compound:svc`

This relation is a language-specific subtype of <tt><a href="zh_beginner-dep-compound.html">compound</a></tt>.
There are also 1 other language-specific subtypes of `compound`: <tt><a href="zh_beginner-dep-compound-vv.html">compound:vv</a></tt>.

107 nodes (1%) are attached to their parents as `compound:svc`.

107 instances of `compound:svc` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.63551401869159.

The following 2 pairs of parts of speech are connected with `compound:svc`: <tt><a href="zh_beginner-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_beginner-pos-VERB.html">VERB</a></tt> (103; 96% instances), <tt><a href="zh_beginner-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_beginner-pos-NOUN.html">NOUN</a></tt> (4; 4% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound:svc	color:blue
1	他	他	PRON	_	Person=3	2	nsubj	_	SpaceAfter=No|Tone=1|Translit=tā
2	去	去	VERB	_	_	0	root	_	Grammar_Target=Yes|SpaceAfter=No|Tone=4|Translit=qù
3	上	上	VERB	_	_	2	compound:svc	_	SpaceAfter=No|Tone=4|Translit=shàng
4	课	课	NOUN	_	_	3	obj	_	SpaceAfter=No|Tone=4|Translit=kè
5	。	。	PUNCT	_	_	2	punct	_	SpaceAfter=No|Translit=。

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 compound:svc	color:blue
1	去年	去年	NOUN	_	_	3	obl:tmod	_	SpaceAfter=No|Tone=4_2|Translit=qù_nián
2	她	她	PRON	_	Person=3	3	nsubj	_	SpaceAfter=No|Tone=1|Translit=tā
3	去	去	VERB	_	_	0	root	_	Grammar_Target=Yes|SpaceAfter=No|Tone=4|Translit=qù
4	美国	美国	PROPN	_	_	3	obj	_	SpaceAfter=No|Tone=3_2|Translit=měi_guó
5	工作	工作	NOUN	_	_	3	compound:svc	_	SpaceAfter=No|Tone=1_4|Translit=gōng_zuò
6	了	了	AUX	_	_	5	aux	_	Gloss=PFV|SpaceAfter=No|Tone=5|Translit=le
7	几	几	NUM	_	NumType=Card	8	nummod	_	SpaceAfter=No|Tone=1|Translit=jī
8	个	个	NOUN	_	_	9	clf	_	Gloss=CLF|SpaceAfter=No|Tone=4|Translit=gè
9	月	月	NOUN	_	_	3	obl	_	SpaceAfter=No|Tone=4|Translit=yuè
10	。	。	PUNCT	_	_	3	punct	_	SpaceAfter=No|Translit=。

~~~


