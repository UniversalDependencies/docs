---
layout: relation
title:  'obl:poss'
shortdef : 'oblique modifier specifying possessor'
udver: '2'
---

The relation `obl:poss` is used for possessor modifiers.
When attached to verbs (even if nominalized but tagged [VERB]()), an [obl]() relation is needed, rather than [nmod]().

~~~ conllu
# sent_id = n01093025
# text = เหล่านักอนุรักษ์ยินดีกับการประกาศของคณะกรรมาธิการ
# text_en = Conservationists welcomed the commission’s announcement.
1	เหล่า	_	NOUN	NN	_	4	nsubj	_	SpaceAfter=No
2	นัก	_	NOUN	NN	_	1	compound	_	SpaceAfter=No
3	อนุรักษ์	_	VERB	VV	_	2	acl	_	SpaceAfter=No
4	ยินดี	_	VERB	VV	_	0	root	_	SpaceAfter=No
5	กับ	_	ADP	IN	_	6	case	_	SpaceAfter=No
6	การประกาศ	_	VERB	VV	_	4	obl	_	SpaceAfter=No
7	ของ	_	ADP	IN	_	8	case	_	SpaceAfter=No
8	คณะ	_	NOUN	NN	_	6	obl:poss	_	SpaceAfter=No
9	กรรมาธิการ	_	NOUN	NN	_	8	compound	_	_

~~~

<!-- Interlanguage links updated Čt lis 12 09:43:35 CET 2020 -->
