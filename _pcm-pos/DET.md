---
layout: postag
title: 'DET'
shortdef: 'determiner'
udver: '2'
---

Definition

Determiners are words that modify nouns or noun phrases and express the reference of the noun phrase in context. That is, a determiner may indicate whether the noun is referring to a definite or indefinite element of a class, to a closer or more distant element, to an element belonging to a specified person or thing, to a particular number or quantity, etc.

The determiners of Naija include :

- di (singular definite article)

~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	now	now	ADV	ADV	_	2	advmod	_	_
2	see	see	VERB	VERB	_	0	root	_	_
3	di	the	DET	DET	_	4	det	_	_
4	process	process	NOUN	NOUN	_	2	obj	_	_

1	now	_	_	_	_	0	_	_	_
2	see	_	_	_	_	0	_	_	_
3	the	_	_	_	_	0	_	_	_
4	process	_	_	_	_	0	_	_	_	

1	now	_	_	_	_	0	_	_	_
2	see	_	_	_	_	0	_	_	_
3	the	_	_	_	_	0	_	_	_
4	process	_	_	_	_	0	_	_	_	

~~~


- dem (the + plural)

~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
1	dem	they	PRON	PRON	_	4	nsubj	_	_
2	no	not	PART	PART	_	4	advmod	_	_
3	dey	be	AUX	AUX	_	4	aux	_	_
4	send	send	VERB	VERB	_	0	root	_	_	

1	they	_	_	_	_	0	_	_	_
2	not	_	_	_	_	0	_	_	_
3	be	_	_	_	_	0	_	_	_
4	send	_	_	_	_	0	_	_	_	

1	they	_	_	_	_	0	_	_	_
2	are	_	_	_	_	0	_	_	_
3	not	_	_	_	_	0	_	_	_
4	concerned	_	_	_	_	0	_	_	_	

~~~

- dis / dese (singular and plural demonstrative pronouns)

~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	na	na	PART	PART	_	2	cop	_	_
2	me	I	PRON	PRON	_	0	root	_	_
3	park	park	VERB	VERB	_	2	acl:cleft	_	_
4	dis	this	DET	DET	_	5	det	_	_	
5	car	car	NOUN	NOU	_	3	obj	_	_	

1	na	_	_	_	_	0	_	_	_
2	I	_	_	_	_	0	_	_	_
3	park	_	_	_	_	0	_	_	_
4	this	_	_	_	_	0	_	_	_	
5	car	_	_	_	_	0	_	_	_	

1	was	_	_	_	_	0	_	_	_
2	I	_	_	_	_	0	_	_	_
3	the	_	_	_	_	0	_	_	_
4	one	_	_	_	_	0	_	_	_	
5	who	_	_	_	_	0	_	_	_	
6	parked	_	_	_	_	0	_	_	_	
7	this	_	_	_	_	0	_	_	_	
8	car	_	_	_	_	0	_	_	_	

~~~

~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	so	so	ADV	ADV	_	4	advmod	_	_
2	dese	these	DET	DET	_	4	det	_	_
3	kind	kind	NOUN	NOUN	_	4	nmod	_	_
4	thing	thing	NOUN	NOUN	_	0	root	_	_	
5	no not	PART PART	_	6 advmod	_	_	
6	good good ADJ ADJ	_	4 amod	_	_	

1	so	_	_	_	_	0	_	_	_
2	these	_	_	_	_	0	_	_	_
3	kind	_	_	_	_	0	_	_	_
4	thing	_	_	_	_	0	_	_	_	
5	no	_	_	_	_	0	_	_	_	
6	good	_	_	_	_	0	_	_	_	

1	see	_	_	_	_	0	_	_	_
2	these	_	_	_	_	0	_	_	_
3	kind	_	_	_	_	0	_	_	_
4	of	_	_	_	_	0	_	_	_	
5	things	_	_	_	_	0	_	_	_	
6	are	_	_	_	_	0	_	_	_	
7	not	_	_	_	_	0	_	_	_	
8	good	_	_	_	_	0	_	_	_	

~~~
