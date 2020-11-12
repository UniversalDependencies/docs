---
layout: relation
title: 'obl'
shortdef: 'oblique nominal'
udver: '2'
---

The `obl` relation is used for nominals functioning as a non-core argument or adjunct of a predicate, where the nominal may include some nominal marker. In Mandarin Chinese this may include prepositional phrases (1), preverbal coverb phrases where we treat the coverbs as prepositions (2), and comparative objects introduced by 比 _bǐ_ (3). In each of these situations, the nominal is an `obl` dependent of the predicate, and governs its marker (tagged as [ADP]() in all cases) in a [`case`]() relation. For nominals introduced by 被 _bèi_ and 把 _bǎ_, see [obl:agent]() and [obl:patient](), respectively.

The relation can also be used for nominals that don’t include a nominal marker, specifically locational pronouns and nouns, such as 這裡 / _zhèlǐ_ "here", 那裡 / _nàlǐ_ "there", 前面 / _qiánmiàn_ "front side" (4). For temporal nouns functioning as adjuncts, see [obl:tmod]().

~~~ conllu
# visual-style 3 6 obl	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
1	一定	_	ADV	_	_	2	advmod	_	certainly
2	是	_	VERB	_	_	0	root	_	be
3	還	_	VERB	_	_	2	ccomp	_	return
4	車子	_	NOUN	_	_	3	obj	_	car
5	給	_	ADP	_	_	6	case	_	to
6	我們	_	PRON	_	_	3	obl	_	3PL

1	"He	_	_	_	_	0	_	_	_
2	will	_	_	_	_	0	_	_	_
3	certainly	_	_	_	_	0	_	_	_
4	return	_	_	_	_	0	_	_	_
5	the	_	_	_	_	0	_	_	_
6	car	_	_	_	_	0	_	_	_
7	to	_	_	_	_	0	_	_	_
8	us."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 7 5 obl	color:blue
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
1	你	_	PRON	_	_	3	nmod	_	2SG
2	的	_	PART	_	_	1	case	_	GEN
3	系列	_	NOUN	_	_	7	nsubj	_	series
4	幫	_	ADP	_	_	5	case	_	for
5	我	_	PRON	_	_	7	obl	_	me
6	多	_	ADV	_	_	7	advmod	_	more
7	賺	_	VERB	_	_	0	root	_	earn
8	了	_	AUX	_	_	7	aux	_	PERF
9	不少	_	DET	_	_	10	det	_	little
10	佣金	_	NOUN	_	_	7	obj	_	commission

1	"Your	_	_	_	_	0	_	_	_
2	(product)	_	_	_	_	0	_	_	_
3	series	_	_	_	_	0	_	_	_
4	earned	_	_	_	_	0	_	_	_
5	me	_	_	_	_	0	_	_	_
6	quite	_	_	_	_	0	_	_	_
7	a	_	_	_	_	0	_	_	_
8	bit	_	_	_	_	0	_	_	_
9	commission."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 7 4 obl	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
1	我們	_	PRON	_	_	7	nsubj	_	1PL
2	應該	_	AUX	_	_	7	aux	_	should
3	比	_	ADP	_	_	4	case	_	COMP
4	他們	_	PRON	_	_	7	obl	_	3PL
5	更	_	ADV	_	_	6	advmod	_	more
6	早	_	ADJ	_	_	7	advmod	_	early
7	到達	_	VERB	_	_	0	root	_	arrive
8	公司	_	NOUN	_	_	7	obj	_	company

1	"We	_	_	_	_	0	_	_	_
2	should	_	_	_	_	0	_	_	_
3	arrive	_	_	_	_	0	_	_	_
4	at	_	_	_	_	0	_	_	_
5	the	_	_	_	_	0	_	_	_
6	company	_	_	_	_	0	_	_	_
7	earlier	_	_	_	_	0	_	_	_
8	than	_	_	_	_	0	_	_	_
9	they	_	_	_	_	0	_	_	_
10	will."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 5 3 obl	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	他	_	PRON	_	_	2	nsubj	_	3SG.M
2	説	_	VERB	_	_	0	root	_	say
3	這裡	_	PRON	_	_	5	obl	_	here
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

<!-- Interlanguage links updated Čt lis 12 09:43:35 CET 2020 -->
