---
layout: base
title:  'Statistics of parataxis in UD_Classical_Chinese-Kyoto'
udver: '2'
---

## Treebank Statistics: UD_Classical_Chinese-Kyoto: Relations: `parataxis`

This relation is universal.

4198 nodes (2%) are attached to their parents as `parataxis`.

4194 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.36803239637923.

The following 15 pairs of parts of speech are connected with `parataxis`: <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt> (3884; 93% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt> (201; 5% instances), <tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt> (41; 1% instances), <tt><a href="lzh_kyoto-pos-NUM.html">NUM</a></tt>-<tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt> (26; 1% instances), <tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt> (14; 0% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-PROPN.html">PROPN</a></tt> (10; 0% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-AUX.html">AUX</a></tt> (7; 0% instances), <tt><a href="lzh_kyoto-pos-ADV.html">ADV</a></tt>-<tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="lzh_kyoto-pos-PRON.html">PRON</a></tt>-<tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lzh_kyoto-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="lzh_kyoto-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="lzh_kyoto-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 parataxis	color:blue
1	君子	君子	NOUN	n,名詞,人,役割	_	3	nsubj	_	Gloss=lord|SpaceAfter=No
2	不	不	ADV	v,副詞,否定,無界	Polarity=Neg	3	advmod	_	Gloss=not|SpaceAfter=No
3	憂	憂	VERB	v,動詞,行為,態度	_	0	root	_	Gloss=worry|SpaceAfter=No
4	不	不	ADV	v,副詞,否定,無界	Polarity=Neg	5	advmod	_	Gloss=not|SpaceAfter=No
5	懼	懼	VERB	v,動詞,行為,態度	_	3	parataxis	_	Gloss=fear|SpaceAfter=No

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 parataxis	color:blue
1	與	與	VERB	v,動詞,行為,交流	_	0	root	_	Gloss=participate|SpaceAfter=No
2	人	人	NOUN	n,名詞,人,人	_	1	obj	_	Gloss=person|SpaceAfter=No
3	忠	忠	NOUN	n,名詞,描写,態度	_	1	parataxis	_	Gloss=loyal|SpaceAfter=No

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 parataxis	color:blue
1	為	爲	ADP	v,前置詞,源泉,*	_	5	case	_	Gloss=for|SpaceAfter=No
2	宮	宮	NOUN	n,名詞,固定物,建造物	Case=Loc	3	nmod	_	Gloss=palace|SpaceAfter=No
3	室	室	NOUN	n,名詞,固定物,建造物	Case=Loc	5	nmod	_	Gloss=room|SpaceAfter=No
4	之	之	SCONJ	p,助詞,接続,属格	_	3	case	_	Gloss='s|SpaceAfter=No
5	美	美	NOUN	n,名詞,描写,形質	_	0	root	_	Gloss=beauty|SpaceAfter=No
6	妻	妻	NOUN	n,名詞,人,関係	_	9	nsubj	_	Gloss=wife|SpaceAfter=No
7	妾	妾	NOUN	n,名詞,人,関係	_	6	conj	_	Gloss=concubine|SpaceAfter=No
8	之	之	SCONJ	p,助詞,接続,属格	_	6	case	_	Gloss='s|SpaceAfter=No
9	奉	奉	VERB	v,動詞,行為,動作	_	5	parataxis	_	Gloss=esteem|SpaceAfter=No

~~~


