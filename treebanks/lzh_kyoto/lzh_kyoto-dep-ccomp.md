---
layout: base
title:  'Statistics of ccomp in UD_Classical_Chinese-Kyoto'
udver: '2'
---

## Treebank Statistics: UD_Classical_Chinese-Kyoto: Relations: `ccomp`

This relation is universal.

1907 nodes (1%) are attached to their parents as `ccomp`.

1880 instances of `ccomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.31253277399056.

The following 8 pairs of parts of speech are connected with `ccomp`: <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt> (1837; 96% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt> (50; 3% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-AUX.html">AUX</a></tt> (12; 1% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-PART.html">PART</a></tt> (3; 0% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 ccomp	color:blue
1	請	請	VERB	v,動詞,行為,交流	_	0	root	_	Gloss=request|SpaceAfter=No
2	問	問	VERB	v,動詞,行為,伝達	_	1	ccomp	_	Gloss=ask|SpaceAfter=No
3	其	其	PRON	n,代名詞,人称,起格	Person=3|PronType=Prs	4	det	_	Gloss=[3PRON]|SpaceAfter=No
4	目	目	NOUN	n,名詞,可搬,成果物	_	2	obj	_	Gloss=item|SpaceAfter=No

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 ccomp	color:blue
1	何	何	PRON	n,代名詞,疑問,*	PronType=Int	2	obj	_	Gloss=what|SpaceAfter=No
2	以	以	VERB	v,動詞,行為,動作	_	3	advcl	_	Gloss=use|SpaceAfter=No
3	謂	謂	VERB	v,動詞,行為,伝達	_	0	root	_	Gloss=speak-to|SpaceAfter=No
4	仁	仁	NOUN	n,名詞,描写,態度	_	5	nsubj	_	Gloss=benevolence|SpaceAfter=No
5	內	內	NOUN	n,名詞,固定物,関係	Case=Loc	3	ccomp	_	Gloss=inside|SpaceAfter=No
6	義	義	NOUN	n,名詞,描写,態度	_	7	nsubj	_	Gloss=righteousness|SpaceAfter=No
7	外	外	NOUN	n,名詞,固定物,関係	Case=Loc	5	conj	_	Gloss=outside|SpaceAfter=No
8	也	也	PART	p,助詞,句末,*	_	3	discourse:sp	_	Gloss=[final-particle]|SpaceAfter=No

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 ccomp	color:blue
1	患	患	VERB	v,動詞,行為,態度	_	0	root	_	Gloss=trouble|SpaceAfter=No
2	其	其	PRON	n,代名詞,人称,起格	Person=3|PronType=Prs	4	nsubj	_	Gloss=[3PRON]|SpaceAfter=No
3	不	不	ADV	v,副詞,否定,無界	Polarity=Neg	4	advmod	_	Gloss=not|SpaceAfter=No
4	能	能	AUX	v,助動詞,可能,*	Mood=Pot	1	ccomp	_	Gloss=can|SpaceAfter=No
5	也	也	PART	p,助詞,句末,*	_	1	discourse:sp	_	Gloss=[final-particle]|SpacesAfter=\n

~~~


