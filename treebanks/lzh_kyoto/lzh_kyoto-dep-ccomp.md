---
layout: base
title:  'Statistics of ccomp in UD_Classical_Chinese-Kyoto'
udver: '2'
---

## Treebank Statistics: UD_Classical_Chinese-Kyoto: Relations: `ccomp`

This relation is universal.

6776 nodes (2%) are attached to their parents as `ccomp`.

6745 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.53659976387249.

The following 10 pairs of parts of speech are connected with `ccomp`: <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt> (6476; 96% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt> (213; 3% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-PROPN.html">PROPN</a></tt> (22; 0% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-AUX.html">AUX</a></tt> (14; 0% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-NUM.html">NUM</a></tt> (12; 0% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-PART.html">PART</a></tt> (11; 0% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-PRON.html">PRON</a></tt> (11; 0% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-ADV.html">ADV</a></tt> (10; 0% instances), <tt><a href="lzh_kyoto-pos-AUX.html">AUX</a></tt>-<tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt> (6; 0% instances), <tt><a href="lzh_kyoto-pos-ADV.html">ADV</a></tt>-<tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt> (1; 0% instances).


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
1	賜	賜	VERB	v,動詞,行為,交流	_	0	root	_	Gloss=bestow|SpaceAfter=No
2	興	興	PROPN	n,名詞,人,名	NameType=Giv	1	obj	_	Gloss=[given-name]|SpaceAfter=No
3	名	名	NOUN	n,名詞,不可譲,属性	_	4	nsubj	_	Gloss=name|SpaceAfter=No
4	弘正	弘正	PROPN	n,名詞,人,名	NameType=Giv	1	ccomp	_	Gloss=[given-name]|SpaceAfter=No

~~~


