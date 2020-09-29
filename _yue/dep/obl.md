---
layout: relation
title: 'obl'
shortdef: 'oblique nominal'
udver: '2'
---

The `obl` relation is used for nominals functioning as a non-core argument or adjunct of a predicate, where the nominal may include some nominal marker. In Mandarin Chinese this may include prepositional phrases (1), and a few preverbal coverb phrases where we treat the coverbs as prepositions instead of verbs (these are coverbs where verbal marking is not allowed, such as 為咗 / _wai4zo5_ 'for, for the sake of', 由 / _jau4_ 'from'; see 2 and 3). In each of these situations, the nominal is an `obl` dependent of the predicate, and governs its marker (tagged as ADP in all cases) in a `case` relation. 

For nominals introduced by 畀 _bei2_ and 將 _zoeng1_ in preverbal position, see [obl:agent]() and [obl:patient](), respectively.

The relation can also be used for nominals that don’t include a nominal marker, specifically locational pronouns and nouns, such as 呢度 / _ni1dou6_ "here", 	嗰度 / _go2dou6_ "there", 前面 / _cin4min6_ "front side" (4). For temporal nouns functioning as adjuncts, see [obl:tmod]().

~~~ conllu
# visual-style 2 7 obl	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
1	佢	_	PRON	_	_	2	nsubj	_	3SG
2	寄	_	VERB	_	_	0	root	_	mail
3	咗	_	AUX	_	_	2	aux	_	PERF
4	封	_	NOUN	_	_	5	det	_	CL:letter
5	信	_	NOUN	_	_	2	obj	_	letter
6	畀	_	ADP	_	_	7	case	_	to
7	我哋	_	PRON	_	_	2	obl	_	3PL

1	"She	_	_	_	_	0	_	_	_
2	sent	_	_	_	_	0	_	_	_
3	a	_	_	_	_	0	_	_	_
4	letter	_	_	_	_	0	_	_	_
5	to	_	_	_	_	0	_	_	_
6	us."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 7 3 obl	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
1	佢	_	PRON	_	_	7	nsubj	_	3SG
2	為咗	_	ADP	_	_	3	case	_	for
3	錢	_	NOUN	_	_	7	obl	_	money
4	乜嘢 	_	PRON	_	_	7	dislocated	_	anything
5	都	_	ADV	_	_	7	advmod	_	also
6	肯	_	AUX	_	_	7	aux	_	be-willing
7	做	_	VERB	_	_	0	root	_	do

1	"He's	_	_	_	_	0	_	_	_
2	willing	_	_	_	_	0	_	_	_
3	to	_	_	_	_	0	_	_	_
4	do	_	_	_	_	0	_	_	_
5	anything	_	_	_	_	0	_	_	_
6	for	_	_	_	_	0	_	_	_
7	money."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 3 2 obl	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	由	_	ADP	_	_	2	case	_	toward
2	呢邊	_	PRON	_	_	3	obl	_	this-side
3	行	_	VERB	_	_	0	root	_	walk
4	過去	_	VERB	_	_	3	compound:dir	_	go-over
5	就	_	ADV	_	_	6	advmod	_	then
6	見	_	VERB	_	_	3	conj	_	see
7	到	_	VERB	_	_	6	compound:vv	_	arrive
8	嘅	_	PART	_	_	6	discourse:sp	_	SP
9	喇	_	PART	_	_	6	discourse:sp	_	SP

1	"Walk	_	_	_	_	0	_	_	_
2	over	_	_	_	_	0	_	_	_
3	from	_	_	_	_	0	_	_	_
4	this	_	_	_	_	0	_	_	_
5	side	_	_	_	_	0	_	_	_
6	and	_	_	_	_	0	_	_	_
7	you'll	_	_	_	_	0	_	_	_
8	see	_	_	_	_	0	_	_	_
9	it."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 5 3 obl	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	佢	_	PRON	_	_	2	nsubj	_	3SG
2	話	_	VERB	_	_	0	root	_	say
3	呢度	_	PRON	_	_	5	obl	_	here
4	細菌	_	NOUN	_	_	5	nsubj	_	bacteria
5	多	_	ADJ	_	_	2	ccomp	_	many

1	"He	_	_	_	_	0	_	_	_
2	says	_	_	_	_	0	_	_	_
3	there	_	_	_	_	0	_	_	_
4	are	_	_	_	_	0	_	_	_
5	a	_	_	_	_	0	_	_	_
6	lot	_	_	_	_	0	_	_	_
7	of	_	_	_	_	0	_	_	_
8	bacteria	_	_	_	_	0	_	_	_
9	here."	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated Út zář 29 18:41:32 CEST 2020 -->
