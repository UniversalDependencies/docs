---
layout: base
title:  'Statistics of csubj:outer in UD_Classical_Chinese-Kyoto'
udver: '2'
---

## Treebank Statistics: UD_Classical_Chinese-Kyoto: Relations: `csubj:outer`

This relation is a language-specific subtype of <tt><a href="lzh_kyoto-dep-csubj.html">csubj</a></tt>.
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="lzh_kyoto-dep-csubj-pass.html">csubj:pass</a></tt>.

48 nodes (0%) are attached to their parents as `csubj:outer`.

48 instances of `csubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.70833333333333.

The following 6 pairs of parts of speech are connected with `csubj:outer`: <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt> (35; 73% instances), <tt><a href="lzh_kyoto-pos-AUX.html">AUX</a></tt>-<tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt> (4; 8% instances), <tt><a href="lzh_kyoto-pos-NUM.html">NUM</a></tt>-<tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt> (4; 8% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-PART.html">PART</a></tt> (2; 4% instances), <tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 csubj:outer	color:blue
1	雨	雨	NOUN	n,名詞,天象,気象	_	4	nsubj	_	Gloss=rain|SpaceAfter=No
2	露	露	NOUN	n,名詞,天象,気象	_	1	conj	_	Gloss=dew|SpaceAfter=No
3	之	之	SCONJ	p,助詞,接続,属格	_	1	case	_	Gloss='s|SpaceAfter=No
4	養	養	VERB	v,動詞,行為,動作	_	9	csubj:outer	_	Gloss=support|SpaceAfter=No
5	人	人	NOUN	n,名詞,人,人	_	6	nmod	_	Gloss=person|SpaceAfter=No
6	事	事	NOUN	n,名詞,可搬,成果物	_	9	nsubj	_	Gloss=affair|SpaceAfter=No
7	之	之	SCONJ	p,助詞,接続,属格	_	6	case	_	Gloss='s|SpaceAfter=No
8	不	不	ADV	v,副詞,否定,無界	Polarity=Neg	9	advmod	_	Gloss=not|SpaceAfter=No
9	齊	齊	VERB	v,動詞,行為,動作	_	0	root	_	Gloss=arrange|SpaceAfter=No
10	也	也	PART	p,助詞,句末,*	_	9	discourse:sp	_	Gloss=[final-particle]|SpaceAfter=No

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 csubj:outer	color:blue
1	行	行	VERB	v,動詞,行為,移動	_	6	csubj:outer	_	Gloss=go|SpaceAfter=No
2	止	止	VERB	v,動詞,行為,動作	_	1	conj	_	Gloss=stop|SpaceAfter=No
3	非	非	ADV	v,副詞,否定,体言否定	Polarity=Neg	6	advmod	_	Gloss=[negator-of-nouns]|SpaceAfter=No
4	人	人	NOUN	n,名詞,人,人	_	6	nsubj	_	Gloss=person|SpaceAfter=No
5	所	所	PART	p,助詞,接続,体言化	_	6	mark	_	Gloss=that-which|SpaceAfter=No
6	能	能	AUX	v,助動詞,可能,*	Mood=Pot	0	root	_	Gloss=can|SpaceAfter=No
7	也	也	PART	p,助詞,句末,*	_	6	discourse:sp	_	Gloss=[final-particle]|SpaceAfter=No

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 csubj:outer	color:blue
1	屯	屯	VERB	v,動詞,行為,設置	_	5	csubj:outer	_	SpaceAfter=No
2	余	余	PRON	n,代名詞,人称,他	Person=1|PronType=Prs	3	det	_	Gloss=[1PRON]|SpaceAfter=No
3	車	車	NOUN	n,名詞,可搬,乗り物	_	1	obj	_	Gloss=cart|SpaceAfter=No
4	其	其	PRON	n,代名詞,人称,起格	Person=3|PronType=Prs	5	nsubj	_	Gloss=[3PRON]|SpaceAfter=No
5	千	千	NUM	n,数詞,数字,*	_	0	root	_	Gloss=thousand|SpaceAfter=No
6	乘	乘	NOUN	n,名詞,可搬,乗り物	_	5	clf	_	Gloss=vehicle|SpaceAfter=No
7	兮	兮	PART	p,助詞,句末,*	_	5	discourse:sp	_	Gloss=[filler-character]|SpaceAfter=No

~~~


