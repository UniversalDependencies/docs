---
layout: relation
title: 'obl:agent'
shortdef: 'agent in passive construction'
udver: '2'
---

The `obl:agent` relation is used to link an agent noun phrase to the main verb, where the agent noun appears preverbally and is preceded by the function word 畀 _bei2_ (tagged ADP and treated as a [case]() dependent of the agent; the variant character 俾 is also common).

~~~ conllu
# visual-style 3 2 obl:agent	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	畀	_	ADP	_	_	2	case	_	by
2	我	_	PRON	_	_	3	obl:agent	_	1SG
3	抌	_	VERB	_	_	0	root	_	throw-away
4	咗	_	AUX	_	_	3	aux	_	PERF

1	"It's	_	_	_	_	0	_	_	_
2	been	_	_	_	_	0	_	_	_
3	thrown	_	_	_	_	0	_	_	_
4	away	_	_	_	_	0	_	_	_
5	by	_	_	_	_	0	_	_	_
6	me."	_	_	_	_	0	_	_	_

~~~

If the agent is unknown or unspecified, the noun 人 / _jan4_ 'person' is used. In Cantonese, the agent cannot be omitted and the agent marker cannot be used singly (unlike in Mandarin).

~~~ conllu
# visual-style 3 2 obl:agent	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	畀	_	ADP	_	_	2	case	_	by
2	人	_	PRON	_	_	3	obl:agent	_	person
3	抌	_	VERB	_	_	0	root	_	throw-away
4	咗	_	AUX	_	_	3	aux	_	PERF

1	"It's	_	_	_	_	0	_	_	_
2	been	_	_	_	_	0	_	_	_
3	thrown	_	_	_	_	0	_	_	_
4	away	_	_	_	_	0	_	_	_
5	/	_	_	_	_	0	_	_	_
6	Somebody	_	_	_	_	0	_	_	_
7	threw	_	_	_	_	0	_	_	_
8	it	_	_	_	_	0	_	_	_
9	away."	_	_	_	_	0	_	_	_

~~~

However, due to Mandarin and standard written Chinese influence, the Mandarin 被 / _bèi_ (_bei6_ in Cantonese) is sometimes used in formal registers such as in newscasts, in which case if it is followed by an agent noun, it is treated the same way as the Cantonese 畀 / _bei2_ here, as a prepositional noun marker. Otherwise, if it is used singly without an agent noun, it is treated as a passive auxiliary (see [AUX]() and [aux]().
<!-- Interlanguage links updated St lis 3 20:59:05 CET 2021 -->
