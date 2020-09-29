---
layout: relation
title: 'obl:agent'
shortdef: 'agent in passive construction'
udver: '2'
---

The `obl:agent` relation is used to link an agent noun phrase to the main verb, where the agent substantive(_i.e._, noun, pronoun, proper noun, _etc._) is preceded by the function word 被 _bèi_ (tagged [ADP]()), known as the "long passive" construction.

~~~ conllu
# visual-style 3 2 obl:agent	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	被	_	ADP	_	_	2	case	_	by
2	我	_	PRON	_	_	3	obl:agent	_	1SG
3	扔掉	_	VERB	_	_	0	root	_	throw-away
4	了	_	PART	_	_	3	discourse:sp	_	SP

1	"It's	_	_	_	_	0	_	_	_
2	been	_	_	_	_	0	_	_	_
3	thrown	_	_	_	_	0	_	_	_
4	away	_	_	_	_	0	_	_	_
5	by	_	_	_	_	0	_	_	_
6	me."	_	_	_	_	0	_	_	_

~~~

For the "short passive" construction where the agent is absent, the function word 被 _bèi_ is treated as a passive auxiliary (tagged [AUX](); see [aux:pass]()).
<!-- Interlanguage links updated Út zář 29 18:41:32 CEST 2020 -->
