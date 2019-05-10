---
layout: base
title:  'Statistics of nsubj:pass in UD_Classical_Chinese-Kyoto'
udver: '2'
---

## Treebank Statistics: UD_Classical_Chinese-Kyoto: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="lzh_kyoto-dep-nsubj.html">nsubj</a></tt>.

6 nodes (0%) are attached to their parents as `nsubj:pass`.

6 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.16666666666667.

The following 4 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-NOUN.html">NOUN</a></tt> (2; 33% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-PART.html">PART</a></tt> (2; 33% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-PRON.html">PRON</a></tt> (1; 17% instances), <tt><a href="lzh_kyoto-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_kyoto-pos-PROPN.html">PROPN</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:pass	color:blue
1	百	百	NUM	n,数詞,数字,*	_	2	compound	_	Gloss=hundred|SpaceAfter=No
2	姓	姓	NOUN	n,名詞,人,人	_	6	nsubj:pass	_	Gloss=people|SpaceAfter=No
3	之	之	SCONJ	p,助詞,接続,属格	_	2	case	_	Gloss='s|SpaceAfter=No
4	不	不	ADV	v,副詞,否定,無界	Polarity=Neg	5	advmod	_	Gloss=not|SpaceAfter=No
5	見	見	AUX	v,助動詞,受動,*	Voice=Pass	6	aux	_	Gloss=[PASS]|SpaceAfter=No
6	保	保	VERB	v,動詞,行為,交流	_	7	csubj	_	Gloss=protect|SpaceAfter=No
7	為	爲	VERB	v,動詞,行為,生産	_	0	root	_	Gloss=make|SpaceAfter=No
8	不	不	ADV	v,副詞,否定,無界	Polarity=Neg	9	advmod	_	Gloss=not|SpaceAfter=No
9	用	用	VERB	v,動詞,行為,動作	_	7	ccomp	_	Gloss=use|SpaceAfter=No
10	恩	恩	NOUN	n,名詞,可搬,成果物	_	9	obj	_	Gloss=benevolence|SpaceAfter=No
11	焉	焉	PRON	n,代名詞,指示,*	PronType=Dem	9	obl	_	Gloss=there|SpaceAfter=No

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nsubj:pass	color:blue
1	勞	勞	VERB	v,動詞,描写,境遇	Degree=Pos	3	acl	_	Gloss=work|SpaceAfter=No
2	力	力	NOUN	n,名詞,不可譲,身体	_	1	obj	_	Gloss=strength|SpaceAfter=No
3	者	者	PART	p,助詞,提示,*	_	4	nsubj:pass	_	Gloss=that-which|SpaceAfter=No
4	治	治	VERB	v,動詞,行為,動作	_	0	root	_	Gloss=govern|SpaceAfter=No
5	於	於	ADP	v,前置詞,基盤,*	_	6	case	_	Gloss=at|SpaceAfter=No
6	人	人	NOUN	n,名詞,人,人	_	4	obl	_	Gloss=person|SpaceAfter=No

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 nsubj:pass	color:blue
1	夫子	夫子	NOUN	n,名詞,人,人	_	4	nsubj	_	Gloss=master|SpaceAfter=No
2	何	何	PRON	n,代名詞,疑問,*	PronType=Int	3	obj	_	Gloss=what|SpaceAfter=No
3	以	以	VERB	v,動詞,行為,動作	_	4	advcl	_	Gloss=use|SpaceAfter=No
4	知	知	VERB	v,動詞,行為,動作	_	0	root	_	Gloss=know|SpaceAfter=No
5	其	其	PRON	n,代名詞,人称,起格	Person=3|PronType=Prs	8	nsubj:pass	_	Gloss=[3PRON]|SpaceAfter=No
6	將	將	ADV	v,副詞,時相,将来	AdvType=Tim|Tense=Fut	8	advmod	_	Gloss=about-to|SpaceAfter=No
7	見	見	AUX	v,助動詞,受動,*	Voice=Pass	8	aux	_	Gloss=[PASS]|SpaceAfter=No
8	殺	殺	VERB	v,動詞,行為,動作	_	4	ccomp	_	Gloss=kill|SpaceAfter=No

~~~


