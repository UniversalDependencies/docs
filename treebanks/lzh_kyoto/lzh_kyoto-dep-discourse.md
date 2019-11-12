---
layout: base
title:  'Statistics of discourse in UD_Classical_Chinese-Kyoto'
udver: '2'
---

## Treebank Statistics: UD_Classical_Chinese-Kyoto: Relations: `discourse`

This relation is universal.
There are 1 language-specific subtypes of `discourse`: <tt><a href="lzh_kyoto-dep-discourse-sp.html">discourse:sp</a></tt>.

239 nodes (0%) are attached to their parents as `discourse`.

239 instances of `discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.65690376569038.

The following 11 pairs of parts of speech are connected with `discourse`: <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-PART.html">PART</a></tt> (184; 77% instances), <tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lzh_kyoto-pos-PART.html">PART</a></tt> (20; 8% instances), <tt><a href="lzh_kyoto-pos-PART.html">PART</a></tt>-<tt><a href="lzh_kyoto-pos-PART.html">PART</a></tt> (8; 3% instances), <tt><a href="lzh_kyoto-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lzh_kyoto-pos-PART.html">PART</a></tt> (7; 3% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-INTJ.html">INTJ</a></tt> (6; 3% instances), <tt><a href="lzh_kyoto-pos-PRON.html">PRON</a></tt>-<tt><a href="lzh_kyoto-pos-PART.html">PART</a></tt> (5; 2% instances), <tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lzh_kyoto-pos-INTJ.html">INTJ</a></tt> (3; 1% instances), <tt><a href="lzh_kyoto-pos-NUM.html">NUM</a></tt>-<tt><a href="lzh_kyoto-pos-PART.html">PART</a></tt> (3; 1% instances), <tt><a href="lzh_kyoto-pos-ADV.html">ADV</a></tt>-<tt><a href="lzh_kyoto-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="lzh_kyoto-pos-AUX.html">AUX</a></tt>-<tt><a href="lzh_kyoto-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="lzh_kyoto-pos-PRON.html">PRON</a></tt>-<tt><a href="lzh_kyoto-pos-INTJ.html">INTJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 discourse	color:blue
1	仁	仁	NOUN	n,名詞,描写,態度	_	2	nmod	_	Gloss=benevolence|SpaceAfter=No
2	者	者	PART	p,助詞,提示,*	_	6	nsubj	_	Gloss=that-which|SpaceAfter=No
3	其	其	PART	p,助詞,句頭,*	_	4	discourse	_	Gloss=[modal-particle]|SpaceAfter=No
4	言	言	VERB	v,動詞,行為,伝達	_	6	nsubj	_	Gloss=speak|SpaceAfter=No
5	也	也	PART	p,助詞,提示,*	_	4	mark	_	Gloss=that-which|SpaceAfter=No
6	訒	訒	VERB	v,動詞,描写,態度	Degree=Pos	0	root	_	Gloss=stammer|SpaceAfter=No

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 discourse	color:blue
1	樂	樂	VERB	v,動詞,行為,態度	VerbForm=Part	3	amod	_	Gloss=enjoy|SpaceAfter=No
2	只	只	PART	p,助詞,句頭,*	_	3	discourse	_	Gloss=[modal-particle]|SpaceAfter=No
3	君子	君子	NOUN	n,名詞,人,役割	_	6	nsubj	_	Gloss=lord|SpaceAfter=No
4	民	民	NOUN	n,名詞,人,人	_	6	nmod	_	Gloss=people|SpaceAfter=No
5	之	之	SCONJ	p,助詞,接続,属格	_	4	case	_	Gloss='s|SpaceAfter=No
6	父	父	NOUN	n,名詞,人,関係	_	0	root	_	Gloss=father|SpaceAfter=No
7	母	母	NOUN	n,名詞,人,関係	_	6	flat	_	Gloss=mother|SpaceAfter=No

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 discourse	color:blue
1	夫	夫	PART	p,助詞,句頭,*	_	3	discourse	_	Gloss=[modal-particle]|SpaceAfter=No
2	孝	孝	NOUN	n,名詞,描写,態度	_	3	nmod	_	Gloss=filial|SpaceAfter=No
3	者	者	PART	p,助詞,提示,*	_	14	nsubj	_	Gloss=that-which|SpaceAfter=No
4	善	善	ADV	v,動詞,描写,態度	Degree=Pos|VerbForm=Conv	5	advmod	_	Gloss=good|SpaceAfter=No
5	繼	繼	VERB	v,動詞,行為,得失	_	14	acl	_	Gloss=continue|SpaceAfter=No
6	人	人	NOUN	n,名詞,人,人	_	8	nmod	_	Gloss=person|SpaceAfter=No
7	之	之	SCONJ	p,助詞,接続,属格	_	6	case	_	Gloss='s|SpaceAfter=No
8	志	志	NOUN	n,名詞,思考,*	_	5	obj	_	Gloss=aim|SpaceAfter=No
9	善	善	ADV	v,動詞,描写,態度	Degree=Pos|VerbForm=Conv	10	advmod	_	Gloss=good|SpaceAfter=No
10	述	述	VERB	v,動詞,行為,伝達	_	5	conj	_	Gloss=transmit|SpaceAfter=No
11	人	人	NOUN	n,名詞,人,人	_	13	nmod	_	Gloss=person|SpaceAfter=No
12	之	之	SCONJ	p,助詞,接続,属格	_	11	case	_	Gloss='s|SpaceAfter=No
13	事	事	NOUN	n,名詞,可搬,成果物	_	10	obj	_	Gloss=affair|SpaceAfter=No
14	者	者	PART	p,助詞,提示,*	_	0	root	_	Gloss=that-which|SpaceAfter=No
15	也	也	PART	p,助詞,句末,*	_	14	discourse:sp	_	Gloss=[final-particle]|SpaceAfter=No

~~~


