---
layout: relation
title: 'advcl:cleft'
shortdef: 'clefted adverbial clause modifier'
udver: '2'
---

In Naija the advcl:cleft is used for clefted constructions.

Clefted elements can often be identified by the presence of the copulative particle na which is described in more details on the PART page. On the other hand naim, which is described on the ADV page, is often used as a marker in the second part of the cleft.

~~~ conllu
# visual-style 8 10 advcl:cleft	color:blue
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
1	na	na	AUX	_	PartType=Cop	2	cop	_	_
2	dere	dere	ADV	_	_	0	root	_	_
3	>+	>+	X	_	_	6	dep	_	_
4	you	you	PRON	_	Case=Nom|Person=2|PronType=Prs	6	nsubj	_	_
5	go	go	AUX	_	Aspect=Prosp	6	aux	_	_
6	hear	hear	VERB	_	_	2	advcl:cleft	_	_
7	di	di	DET	_	Definite=Def|PronType=Art	9	det	_	_
8	English	English	ADJ	_	_	9	amod	_	_
9	version	version	NOUN	_	_	6	obj	_	_
10	of	of	ADP	_	_	11	case	_	_
11	me	me	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	9	nmod	_	_

1	be	_	_	_	_	0	_	_	_
2	there	_	_	_	_	0	_	_	_
3	>+	_	_	_	_	0	_	_	_
4	you	_	_	_	_	0	_	_	_
5	go	_	_	_	_	0	_	_	_
6	hear	_	_	_	_	0	_	_	_
7	the	_	_	_	_	0	_	_	_
8	English	_	_	_	_	0	_	_	_
9	version	_	_	_	_	0	_	_	_
10	of	_	_	_	_	0	_	_	_
11	me	_	_	_	_	0	_	_	_

1	it	_	_	_	_	0	_	_	_
2	is	_	_	_	_	0	_	_	_
3	there	_	_	_	_	0	_	_	_
4	you	_	_	_	_	0	_	_	_
5	will	_	_	_	_	0	_	_	_
6	hear	_	_	_	_	0	_	_	_
7	the	_	_	_	_	0	_	_	_
8	English	_	_	_	_	0	_	_	_
9	version	_	_	_	_	0	_	_	_
10	of	_	_	_	_	0	_	_	_
11	me	_	_	_	_	0	_	_	_
~~~

The advcl:cleft relation is also used in questions containing interrogative words such as who or where. In such cases, the wh-word is annotated as the root, and is connected to the verb via an advcl:cleft relation.

~~~ conllu
# visual-style 8 10 advcl:cleft	color:blue
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white

1	#	#	X	_	_	3	dep	_	_
2	and	and	CCONJ	_	_	3	discourse	_	_
3	wetin	wetin	PRON	_	PronType=Int	0	root	_	_
4	dis	dis	DET	_	Number=Sing|PronType=Dem	5	det	_	_
5	company	company	NOUN	_	_	7	nsubj	_	_
6	dey	dey	AUX	_	Aspect=Imp	7	aux	_	_
7	deal	deal	VERB	_	_	3	advcl:cleft	_	_
8	on	on	ADP	_	_	7	iobj	_	_

1	#	_	_	_	_	0	_	_	_
2	and	_	_	_	_	0	_	_	_
3	what	_	_	_	_	0	_	_	_
4	this	_	_	_	_	0	_	_	_
5	company	_	_	_	_	0	_	_	_
6	be	_	_	_	_	0	_	_	_
7	deal	_	_	_	_	0	_	_	_
8	on	_	_	_	_	0	_	_	_

1	#	_	_	_	_	0	_	_	_
2	and	_	_	_	_	0	_	_	_
3	what	_	_	_	_	0	_	_	_
4	does	_	_	_	_	0	_	_	_
5	this	_	_	_	_	0	_	_	_
6	company	_	_	_	_	0	_	_	_
7	deal	_	_	_	_	0	_	_	_
8	with	_	_	_	_	0	_	_	_
~~~
