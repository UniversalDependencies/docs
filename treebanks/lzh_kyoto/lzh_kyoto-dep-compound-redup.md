---
layout: base
title:  'Statistics of compound:redup in UD_Classical_Chinese-Kyoto'
udver: '2'
---

## Treebank Statistics: UD_Classical_Chinese-Kyoto: Relations: `compound:redup`

This relation is a language-specific subtype of <tt><a href="lzh_kyoto-dep-compound.html">compound</a></tt>.

124 nodes (0%) are attached to their parents as `compound:redup`.

124 instances of `compound:redup` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `compound:redup`: <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt> (108; 87% instances), <tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt> (15; 12% instances), <tt><a href="lzh_kyoto-pos-ADV.html">ADV</a></tt>-<tt><a href="lzh_kyoto-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound:redup	color:blue
1	硜	硜	VERB	v,動詞,描写,形質	Degree=Pos	0	root	_	Gloss=block-headed|SpaceAfter=No
2	硜	硜	VERB	v,動詞,描写,形質	Degree=Pos	1	compound:redup	_	Gloss=block-headed|SpaceAfter=No
3	然	然	PART	p,接尾辞,*,*	_	1	fixed	_	Gloss=[suffix]|SpaceAfter=No

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound:redup	color:blue
1	旦	旦	NOUN	n,名詞,天象,気象	_	0	root	_	Gloss=sunrise|SpaceAfter=No
2	旦	旦	NOUN	n,名詞,天象,気象	_	1	compound:redup	_	Gloss=sunrise|SpaceAfter=No
3	而	而	CCONJ	p,助詞,接続,並列	_	4	cc	_	Gloss=and|SpaceAfter=No
4	伐	伐	VERB	v,動詞,行為,交流	_	1	conj	_	Gloss=hew|SpaceAfter=No
5	之	之	PRON	n,代名詞,人称,止格	Person=3|PronType=Prs	4	obj	_	Gloss=[3PRON]|SpaceAfter=No

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 compound:redup	color:blue
1	雖	雖	ADV	v,副詞,判断,逆接	_	7	advmod	_	Gloss=although|SpaceAfter=No
2	然	然	VERB	v,動詞,描写,態度	Degree=Pos|VerbForm=Conv	7	advmod	_	Gloss=like-this|SpaceAfter=No
3	欲	欲	AUX	v,助動詞,願望,*	Mood=Des	7	aux	_	Gloss=wish|SpaceAfter=No
4	常	常	ADV	v,副詞,時相,恒常	AdvType=Tim	7	advmod	_	Gloss=usually|SpaceAfter=No
5	常	常	ADV	v,副詞,時相,恒常	AdvType=Tim	4	compound:redup	_	Gloss=usually|SpaceAfter=No
6	而	而	CCONJ	p,助詞,接続,並列	_	7	advmod	_	Gloss=and|SpaceAfter=No
7	見	見	VERB	v,動詞,行為,動作	_	0	root	_	Gloss=see|SpaceAfter=No
8	之	之	PRON	n,代名詞,人称,止格	Person=3|PronType=Prs	7	obj	_	Gloss=[3PRON]|SpaceAfter=No

~~~


