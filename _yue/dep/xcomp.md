---
layout: relation
title: 'xcomp'
shortdef: 'open clausal complement'
udver: '2'
---

The open clausal complement functions like an object of another verb, but unlike the [ccomp]() dependent, it obligatorily lacks an overt subject. More crucially, the absent or "silent" subject is coreferent with an argument outside of the clausal complement in a higher clause (this is also known as "obligatory control" in some linguistic literature). 

When the silent subject of `xcomp` is obligatorily coreferent with the subject of the higher clause, it is known as "subject control". Some matrix verbs that take a clausal complement with subject control include 準備 / _zeon2bei6_ "prepare", 打算 / _daa2syun3_ "plan", 決定 / _kyut3ding6_ "decide", 開始 / _hoi1ci2_ "start", 應承 / _jing1sing4_ "promise".

~~~ conllu
# visual-style 4 6 xcomp	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
1	我	_	PRON	_	_	4	nsubj	_	1SG
2	一早	_	ADV	_	_	4	advmod	_	early／from-the-beginning
3	就	_	ADV	_	_	4	advmod	_	then
4	決定	_	VERB	_	_	0	root	_	decide
5	咗	_	AUX	_	_	4	aux	_	PERF
6	換	_	VERB	_	_	4	xcomp	_	change
7	車	_	NOUN	_	_	6	obj	_	car
8	啦	_	PART	_	_	4	discourse:sp	_	SP

1	"I	_	_	_	_	0	_	_	_
2	already	_	_	_	_	0	_	_	_
3	decided	_	_	_	_	0	_	_	_
4	to	_	_	_	_	0	_	_	_
5	change	_	_	_	_	0	_	_	_
6	cars	_	_	_	_	0	_	_	_
7	from	_	_	_	_	0	_	_	_
8	the	_	_	_	_	0	_	_	_
9	very	_	_	_	_	0	_	_	_
10	beginning."	_	_	_	_	0	_	_	_

~~~

The matrix verb may require both a non-clausal object and a clausal complement:

~~~ conllu
# visual-style 2 6 xcomp	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
1	我	_	PRON	_	_	2	nsubj	_	1SG
2	應承	_	VERB	_	_	0	root	_	promise
3	你	_	PRON	_	_	2	obj	_	2SG
4	以後	_	NOUN	_	_	6	obl:tmod	_	from-now-on
5	唔	_	ADV	_	_	6	advmod	_	NEG
6	講	_	VERB	_	_	2	xcomp	_	say
7	大話	_	NOUN	_	_	6	obj	_	lie

1	"I	_	_	_	_	0	_	_	_
2	promise	_	_	_	_	0	_	_	_
3	you	_	_	_	_	0	_	_	_
4	I	_	_	_	_	0	_	_	_
5	won't	_	_	_	_	0	_	_	_
6	tell	_	_	_	_	0	_	_	_
7	any	_	_	_	_	0	_	_	_
8	more	_	_	_	_	0	_	_	_
9	lies	_	_	_	_	0	_	_	_
10	from	_	_	_	_	0	_	_	_
11	now	_	_	_	_	0	_	_	_
12	on."	_	_	_	_	0	_	_	_

~~~

In the case of "object control", the subject of the clausal complement is obligatorily coreferent with the direct object of the higher clause. Many Chinese “pivotal constructions” are considered to fall under this category. Some matrix verbs that may take a clausal complement with object control include 勸 / _hyun3_ "advise", 派 / _paai3_ "dispatch", 求 / _kau4_ "beg", / 託 _tok3_ "entrust", 叫 / _giu3_ "tell", 恭喜 / _gung1hei2_ "congratulate", among others (however, note that some of these verbs may also take just a non-clausal object).

~~~ conllu
# visual-style 2 7 xcomp	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
1	我	_	PRON	_	_	2	nsubj	_	1SG
2	勸	_	VERB	_	_	0	root	_	advise
3	你	_	PRON	_	_	2	obj	_	2SG
4	諗	_	VERB	_	_	2	xcomp	_	think
5	清楚	_	ADJ	_	_	4	compound:vv	_	clear
6	先	_	ADV	_	_	4	advmod	_	first
7	啦	_	PART	_	_	4	discourse:sp	_	leg

1	"I	_	_	_	_	0	_	_	_
2	advise	_	_	_	_	0	_	_	_
3	you	_	_	_	_	0	_	_	_
4	to	_	_	_	_	0	_	_	_
5	think	_	_	_	_	0	_	_	_
6	clearly	_	_	_	_	0	_	_	_
7	first."	_	_	_	_	0	_	_	_

~~~

### Secondary predicates

Note that the complement may be simply a nominal predicate, where the structure should not be confused with a ditransitive verb requiring a direct object and an indirect object, such as the examples below. This is also known as a "secondary predicate" or "small clause" in the linguistic literature.

~~~ conllu
# visual-style 1 4 xcomp	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	叫	_	VERB	_	_	0	root	_	call
2	我	_	PRON	_	_	1	obj	_	1SG
3	羅	_	PROPN	_	_	4	compound	_	Law
4	生	_	NOUN	_	_	1	xcomp	_	Mr.
5	啦	_	PART	_	_	1	discourse:sp	_	SP

1	"Call	_	_	_	_	0	_	_	_
2	me	_	_	_	_	0	_	_	_
3	Mr.	_	_	_	_	0	_	_	_
4	Law."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 2 4 xcomp	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	佢	_	PRON	_	_	2	nsubj	_	3SG
2	當	_	VERB	_	_	0	root	_	consider
3	我	_	PRON	_	_	2	obj	_	1SG
4	傻瓜	_	NOUN	_	_	2	xcomp	_	fool

1	"She	_	_	_	_	0	_	_	_
2	considers	_	_	_	_	0	_	_	_
3	me	_	_	_	_	0	_	_	_
4	a	_	_	_	_	0	_	_	_
5	fool."	_	_	_	_	0	_	_	_

~~~

### In "extent compound" constructions

Additionally, `xcomp` is used when the predicate or clause following a V-得/到 extent compound (see [compound:ext]()) is lacking its local subject.

~~~ conllu
# visual-style 2 4 xcomp	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	你	_	PRON	_	_	2	nsubj	_	1SG
2	講	_	VERB	_	_	0	root	_	say
3	得	_	PART	_	_	2	compound:ext	_	EXT
4	啱	_	ADJ	_	_	2	xcomp	_	correct

1	"You	_	_	_	_	0	_	_	_
2	said	_	_	_	_	0	_	_	_
3	it	_	_	_	_	0	_	_	_
4	correctly."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 2 5 xcomp	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	我	_	PRON	_	_	2	nsubj	_	1SG
2	熱	_	ADJ	_	_	0	root	_	hot
3	到	_	PART	_	_	2	compound:ext	_	EXT
4	想	_	AUX	_	_	5	aux	_	want
5	嘔	_	VERB	_	_	2	xcomp	_	vomit
6	呀	_	PART	_	_	5	discourse:sp	_	SP

1	"I'm	_	_	_	_	0	_	_	_
2	so	_	_	_	_	0	_	_	_
3	hot	_	_	_	_	0	_	_	_
4	I	_	_	_	_	0	_	_	_
5	want	_	_	_	_	0	_	_	_
6	to	_	_	_	_	0	_	_	_
7	vomit."	_	_	_	_	0	_	_	_

~~~

### Raising constructions

A small class of predicate adjectives, including 容易 _jung4ji6_ "easy", 難 _naan4_ "difficult", 可能 _ho2nang4_ "possible", take a clausal complement in which its subject or object is in the subject or topic position of the main clause.

~~~ conllu
# visual-style 3 4 xcomp	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	佢	_	PRON	_	_	3	nsubj	_	3SG
2	好	_	ADV	_	_	3	advmod	_	very
3	容易	_	ADJ	_	_	0	root	_	easy
4	唔記得	_	VERB	_	_	3	xcomp	_	forget
5	嘢	_	NOUN	_	_	4	obj	_	things

1	"It	_	_	_	_	0	_	_	_
2	is	_	_	_	_	0	_	_	_
3	easy	_	_	_	_	0	_	_	_
4	for	_	_	_	_	0	_	_	_
5	him	_	_	_	_	0	_	_	_
6	to	_	_	_	_	0	_	_	_
7	forget	_	_	_	_	0	_	_	_
8	things.	_	_	_	_	0	_	_	_
9	/	_	_	_	_	0	_	_	_
10	He	_	_	_	_	0	_	_	_
11	forgets	_	_	_	_	0	_	_	_
12	things	_	_	_	_	0	_	_	_
13	easily."	_	_	_	_	0	_	_	_

~~~

The predicate of the clausal complement is linked to the predicate adjective as an `xcomp` dependent, whereas the noun phrase preceding the predicate adjective is treated as its syntactic subject (`nsubj`) regardless of whether it can be semantically understood to be the subject or object of the clausal complement.

### `ccomp` vs. object-control `xcomp`

Since both `ccomp` and object-control `xcomp` may both contain an argument between the matrix verb and the embedded verb, confusion may arise as to which relation is appropriate. 

We adopt a test from Chao (1968) -- originally for Mandarin but apparently applicable to Cantonese as well -- which allows one to separate "clausal objects" (`ccomp`) from "pivotal constructions" (object-control `xcomp`). In the case of `ccomp`, it is grammatical to dislocate the matrix verb with its subject to the end, while the same operation on an `xcomp` sentence would likely result in ungrammaticality:

**`ccomp`** |   | **`xcomp`**
----------- | - | -----------
_佢 覺得_ 你 有 禮貌 | | _我 勸_ 你 諗 清楚 先
3SG think 2SG have politeness | | 1SG advise 2SG think clear first
"He thinks you're polite" | | "I advise you to think clearly first"
OKAY: 你 有 禮貌, _佢 覺得_ | | BAD: * 你 諗 清楚 先, _我 勸_

### References

- Chao, Yuan Ren. 1968. A Grammar of Spoken Chinese. University of California Press.

<!-- Interlanguage links updated Pá kvě 14 11:09:23 CEST 2021 -->
