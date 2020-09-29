---
layout: relation
title: 'aux'
shortdef: 'auxiliary'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "yue/dep/aux.html"
udver: '2'
---

An auxiliary is a functional modifier of a verb that is tagged AUX. In Cantonese this relation is used for preverbal auxiliaries as well as post-verbal aspect markers. The passive auxiliary 被 _bei6_ used in the formal register, however, should use [aux:pass]().

Preverbal auxiliaries may precede the main verb immediately (1) or before other intervening material (2).

~~~ conllu
# visual-style 4 3 aux	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	你	_	PRON	_	_	4	nsubj	_	2SG
2	都	_	ADV	_	_	4	advmod	_	also
3	應該	_	AUX	_	_	4	aux	_	should
4	幫幫	_	VERB	_	_	0	root	_	help
5	佢哋	_	PRON	_	_	4	obj	_	3PL

1	"You	_	_	_	_	0	_	_	_
2	should	_	_	_	_	0	_	_	_
3	help	_	_	_	_	0	_	_	_
4	us,	_	_	_	_	0	_	_	_
5	too."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 4 2 aux	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	一定	_	ADV	_	_	4	advmod	_	certainly
2	要	_	AUX	_	_	4	aux	_	need
3	慢慢	_	ADV	_	_	4	advmod	_	slowly
4	做	_	VERB	_	_	0	root	_	do/work

1	"One	_	_	_	_	0	_	_	_
2	must	_	_	_	_	0	_	_	_
3	work	_	_	_	_	0	_	_	_
4	slowly."	_	_	_	_	0	_	_	_

~~~

Some preverbal auxiliaries may also stack next to each other, in which case the head of all the auxiliaries is still the main verb.

~~~ conllu
# visual-style 3 1 aux	color:blue
# visual-style 3 2 aux	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	應該	_	AUX	_	_	3	aux	_	should
2	可以	_	AUX	_	_	3	aux	_	can
3	做	_	VERB	_	_	0	root	_	do

1	"should	_	_	_	_	0	_	_	_
2	be	_	_	_	_	0	_	_	_
3	able	_	_	_	_	0	_	_	_
4	to	_	_	_	_	0	_	_	_
5	do"	_	_	_	_	0	_	_	_

~~~

有 _jau5_ and 冇 _mou5_ may also function as auxiliaries.

~~~ conllu
# visual-style 3 2 aux	color:blue
# visual-style 3 4 aux	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	你	_	PRON	_	_	3	nsubj	_	2SG
2	有	_	AUX	_	_	3	aux	_	PERF
3	入	_	VERB	_	_	0	root	_	enter
4	過	_	AUX	_	_	3	aux	_	EXP
5	秘密	_	ADJ	_	_	6	amod	_	secret
6	通道	_	NOUN	_	_	3	obj	_	tunnel

1	"You	_	_	_	_	0	_	_	_
2	have	_	_	_	_	0	_	_	_
3	entered	_	_	_	_	0	_	_	_
4	the	_	_	_	_	0	_	_	_
5	secret	_	_	_	_	0	_	_	_
6	tunnel	_	_	_	_	0	_	_	_
7	before."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 3 2 aux	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	我	_	PRON	_	_	3	nsubj	_	1SG
2	冇	_	AUX	_	_	3	aux	_	NEG.PERF
3	變	_	VERB	_	_	0	root	_	change

1	"I	_	_	_	_	0	_	_	_
2	haven't	_	_	_	_	0	_	_	_
3	changed."	_	_	_	_	0	_	_	_

~~~

Post-verbal aspect markers include 過 _guo3_ (experiential), 住 _zyu6_ (continuous), and 咗 _zo2_ (perfective), 緊 _gan2_ (progressive), 開 _hoi1_ (habitual), etc., which immediately follow the verb or predicate adjective it modifies, as seen in (4) and (6).

~~~ conllu
# visual-style 2 3 aux	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	我	_	PRON	_	_	2	nsubj	_	1SG
2	盯	_	VERB	_	_	0	root	_	stare
3	住	_	AUX	_	_	2	aux	_	CONT
4	佢	_	PRON	_	_	2	obj	_	3SG

1	"I'm	_	_	_	_	0	_	_	_
2	staring	_	_	_	_	0	_	_	_
3	at	_	_	_	_	0	_	_	_
4	him."	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated Út zář 29 20:31:44 CEST 2020 -->
