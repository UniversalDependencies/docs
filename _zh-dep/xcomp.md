---
layout: relation
title: 'xcomp'
shortdef: 'open clausal complement'
udver: '2'
---

This document is a placeholder for the language-specific documentation
for `xcomp`.

The open clausal complement functions like an object of another verb, but unlike the [ccomp]() dependent, it obligatorily lacks an overt subject. More crucially, the absent or "silent" subject is coreferent with an argument outside of the clausal complement in a higher clause (this is also known as "obligatory control" in some linguistic literature). 

When the silent subject of `xcomp` is obligatorily coreferent with the subject of the higher clause, it is known as "subject control". Some matrix verbs that take a clausal complement with subject control include 準備 _zhǔnbèi_ "prepare", 打算 _dǎsuàn_ "plan", 決定 _juédìng_ "decide", 開始 _kāishǐ_ "start", 答應 _dāyìng_ "promise".

~~~ conllu
# visual-style 4 5 xcomp	color:blue
1	我	_	PRON	_	_	4	nsubj	_	1SG
2	早	_	ADV	_	_	4	advmod	_	early
3	就	_	ADV	_	_	4	advmod	_	then
4	打算	_	VERB	_	_	0	root	_	plan
5	換	_	VERB	_	_	4	xcomp	_	change
6	車	_	NOUN	_	_	5	obj	_	car

1	"I	_	_	_	_	0	_	_	_
2	already	_	_	_	_	0	_	_	_
3	planned	_	_	_	_	0	_	_	_
4	to	_	_	_	_	0	_	_	_
5	change	_	_	_	_	0	_	_	_
6	cars	_	_	_	_	0	_	_	_
7	early	_	_	_	_	0	_	_	_
8	on."	_	_	_	_	0	_	_	_

~~~

The matrix verb may require both a non-clausal object and a clausal complement:

~~~ conllu
# visual-style 2 4 xcomp	color:blue
1	我	_	PRON	_	_	2	nsubj	_	1SG
2	答應	_	VERB	_	_	0	root	_	promise
3	你	_	PRON	_	_	2	obj	_	2SG
4	買	_	VERB	_	_	2	xcomp	_	buy
5	那	_	DET	_	_	7	det	_	that
6	頭	_	NOUN	_	_	5	clf	_	CL:cattle
7	牛	_	NOUN	_	_	4	obj	_	cow

1	"I	_	_	_	_	0	_	_	_
2	promise	_	_	_	_	0	_	_	_
3	you	_	_	_	_	0	_	_	_
4	to	_	_	_	_	0	_	_	_
5	buy	_	_	_	_	0	_	_	_
6	that	_	_	_	_	0	_	_	_
7	cow."	_	_	_	_	0	_	_	_

~~~

In the case of "object control", the subject of the clausal complement is obligatorily coreferent with the direct object of the higher clause. Chinese “pivotal constructions” are considered to fall under this category. Some matrix verbs that may take a clausal complement with object control include 麻煩 _máfán_ "trouble", 勸 _quàn_ "advise", 派 _pài_ "dispatch", 求 _qiú_ "beg", 委託 _wěituō_ "entrust", 請 _qǐng_ "asl", 命令 _mìnglìng_ "order", 叫 _jiào_ "tell", 原諒 _yuánliàng_ "forgive", 恭喜 _gōngxǐ_ "congratulate", 批評 _pīpíng_ "criticize", among others (however, note that some of these verbs may also take just a non-clausal object).

~~~ conllu
# visual-style 2 7 xcomp	color:blue
1	我	_	PRON	_	_	2	nsubj	_	1SG
2	命令	_	VERB	_	_	0	root	_	order
3	你	_	PRON	_	_	2	obj	_	2SG
4	立刻	_	ADV	_	_	7	advmod	_	immediately
5	把	_	ADP	_	_	6	case	_	BA
6	腳	_	NOUN	_	_	7	obl:patient	_	leg
7	放	_	VERB	_	_	2	xcomp	_	put
8	下	_	VERB	_	_	7	compound:dir	_	go-down

1	"I	_	_	_	_	0	_	_	_
2	order	_	_	_	_	0	_	_	_
3	you	_	_	_	_	0	_	_	_
4	to	_	_	_	_	0	_	_	_
5	put	_	_	_	_	0	_	_	_
6	down	_	_	_	_	0	_	_	_
7	your	_	_	_	_	0	_	_	_
8	feet	_	_	_	_	0	_	_	_
9	immediately."	_	_	_	_	0	_	_	_

~~~

### Secondary predicates

Note that the complement may be simply a nominal predicate, where the structure should not be confused with a ditransitive verb requiring a direct object and an indirect object, such as the example below. This is also known as a "secondary predicate" or "small clause" in the linguistic literature.

~~~ conllu
# visual-style 1 4 xcomp	color:blue
1	叫	_	VERB	_	_	0	root	_	call
2	我	_	PRON	_	_	1	obj	_	1SG
3	羅	_	PROPN	_	_	4	compound	_	Luo
4	先生	_	NOUN	_	_	1	xcomp	_	Mr.

1	"Call	_	_	_	_	0	_	_	_
2	me	_	_	_	_	0	_	_	_
3	Mr.	_	_	_	_	0	_	_	_
4	Luo."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 2 4 xcomp	color:blue
1	d她	_	PRON	_	_	2	nsubj	_	3SG.F
2	d當	_	VERB	_	_	0	root	_	consider
3	d我	_	PRON	_	_	2	obj	_	1SG
4	d傻瓜	_	NOUN	_	_	2	xcomp	_	fool

1	"She	_	_	_	_	0	_	_	_
2	considers	_	_	_	_	0	_	_	_
3	me	_	_	_	_	0	_	_	_
4	a	_	_	_	_	0	_	_	_
5	fool."	_	_	_	_	0	_	_	_

~~~

### In "extent compound" constructions

Additionally, `xcomp` is used when the clause following a V-得 extent compound (see [compound:ext]()) is missing a subject.

~~~ conllu
# visual-style 2 4 xcomp	color:blue
1	我	_	PRON	_	_	2	nsubj	_	1SG
2	説	_	VERB	_	_	0	root	_	say
3	得	_	PART	_	_	2	compound:ext	_	DE
4	對	_	ADJ	_	_	2	xcomp	_	correct

1	"You	_	_	_	_	0	_	_	_
2	said	_	_	_	_	0	_	_	_
3	it	_	_	_	_	0	_	_	_
4	correctly."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 2 5 xcomp	color:blue
1	我	_	PRON	_	_	2	nsubj	_	1SG
2	熱	_	ADJ	_	_	0	root	_	hot
3	得	_	PART	_	_	2	compound:ext	_	DE
4	想	_	AUX	_	_	5	aux	_	want
5	吐	_	VERB	_	_	2	xcomp	_	vomit
6	了	_	PART	_	_	5	discourse:sp	_	SP

1	"I'm	_	_	_	_	0	_	_	_
2	so	_	_	_	_	0	_	_	_
3	hot	_	_	_	_	0	_	_	_
4	I	_	_	_	_	0	_	_	_
5	want	_	_	_	_	0	_	_	_
6	to	_	_	_	_	0	_	_	_
7	vomit."	_	_	_	_	0	_	_	_

~~~

### Raising constructions

A small class of predicate adjectives, such as 容易 _róngyì_ "easy", 難 _nán_ "difficult", 可能 _kěnéng_ "possible", take a clausal complement in which its subject or object is in the subject or topic position of the main clause.

~~~ conllu
# visual-style 3 4 xcomp	color:blue
1	他	_	PRON	_	_	3	nsubj	_	3SG
2	很	_	ADV	_	_	3	advmod	_	very
3	容易	_	ADJ	_	_	0	root	_	easy
4	忘記	_	VERB	_	_	3	xcomp	_	forget
5	事情	_	NOUN	_	_	4	obj	_	things

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

The predicate of the clausal complement is linked to the predicate adjective as an `xcomp` dependent, whereas the noun phrase preceding the predicate adjective is treated as its subject (`nsubj`) regardless of whether it can be understood to be the subject or object of the clausal complement.

### `ccomp` vs. object-control `xcomp`

Since both `ccomp` and object-control `xcomp` may both contain an argument between the matrix verb and the embedded verb, confusion may arise as to which relation is appropriate. 

We adopt a test from Chao (1968) which allows one to separate "clausal objects" (`ccomp`) from "pivotal constructions" (object-control `xcomp`). In the case of `ccomp`, it is grammatical to dislocate the matrix verb with its subject to the end, while the same operation on an `xcomp` sentence would result in ungrammaticality:

<b>`ccomp`</b> | <b>`xcomp`</b>
-------------- | --------------
_他 認為_ 你 有 禮貌 | _他 请_ 你 帮忙
3SG consider 2SG have politeness | 3SG ask 2SG help
"He thinks you're polite" | "He asked you to help"
OKAY: 你 有 禮貌, _他 認為_ | BAD: * 你 帮忙, _他 请_

### References

- Chao, Yuan Ren. 1968. A Grammar of Spoken Chinese. University of California Press.
