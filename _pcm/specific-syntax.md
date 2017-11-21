---
layout: base
title:  'Syntax'
udver: '2'
---

# Specific constructions

+ Particles
  - [Copulative particle of focalization](#Na)
  - [Negative construction](#Neg)
+ [Double object construction](#DoubleObj)
+ [Serial verb construction](#SVC)
+ [Cleft sentences](#Clefts)
+ [Dislocations](#Disl)
+ Paratactic constructions
  - [Juxtaposition](#Jux)
  - [Reported Speech](#Speech)


<a name="Na"></a>

### Copulative particle of focalization

In Naija _na_ is a copulative particle of focalization (often used in [clefts](#Clefts)). It is usually a cop-dependent of its head :

~~~ conllu
# visual-style 3 2 cop	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	but	but	CCONJ	CCONJ	_	3	cc	_	_
2	na	na	PART	PART	_	3	cop	_	_
3	landlord	landlord	NOUN	NOUN	_	0	root	_	_
4	dem	PL	PART	PART	_	3	det	_	_
5	di	the	DET	DET	_	6	det	_	_
6	matter	matter	NOUN	NOUN	_	8	nsubj	_	_
7	come	come	AUX	AUX	_	8	aux	_	_
8	concern	concern	VERB	VERB	_	3	acl:cleft	_	_
9	well	well	ADV	ADV	_	8	advmod	_	_
10	well	well	ADV	ADV	_	9	compound:redup	_	_
11	o	o	PART	PART	_	10	advmod:emph	_	_

1	but	_	_	_	_	0	_	_	_
2	be	_	_	_	_	0	_	_	_
3	landlord 	_	_	_	_	0	_	_	_
4	PL	_	_	_	_	0	_	_	_
5	the	_	_	_	_	0	_	_	_
6	matter	_	_	_	_	0	_	_	_
7	REAL	_	_	_	_	0	_	_	_
8	concern	_	_	_	_	0	_	_	_
9	well	_	_	_	_	0	_	_	_
10	well	_	_	_	_	0	_	_	_
11	EMP	_	_	_	_	0	_	_	_


1	but	_	_	_	_	0	_	_	_
2	it	_	_	_	_	0	_	_	_
3	is 	_	_	_	_	0	_	_	_
4	the	_	_	_	_	0	_	_	_
5	landlords	_	_	_	_	0	_	_	_
6	who	_	_	_	_	0	_	_	_
7	are	_	_	_	_	0	_	_	_
8	really	_	_	_	_	0	_	_	_
9	affected	_	_	_	_	0	_	_	_
10	by	_	_	_	_	0	_	_	_
11	this	_	_	_	_	0	_	_	_
12	matter	_	_	_	_	0	_	_	_
~~~

However, when the complement of the copula is clausal and contains its own subject, the _na_ copula becomes the head so as to avoid having two nsubj dependents for the head of the complement:

~~~ conllu
# visual-style 0 4 root	color:blue
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
0	ROOT	_	_	_	_	0	_	_	_
1	poor	poor	ADJ	ADJ	_	2	amod	_	_
2	man	man	NOUN	NOUN	_	3	nmod	_	_
3	prayer	prayer	NOUN	NOUN	_	4	nsubj	_	_
4	na	na	VERB	PART	_	0	root	_	_
5	God	God	PROPN	PROPN	_	6	nsubj	_	_
6	dey	be	AUX	AUX	_	4	parataxis:obj	_	_

1	poor	_	_	_	_	0	_	_	_
2	man	_	_	_	_	0	_	_	_
3	prayer 	_	_	_	_	0	_	_	_
4	be	_	_	_	_	0	_	_	_
5	god	_	_	_	_	0	_	_	_
6	be	_	_	_	_	0	_	_	_

1	The	_	_	_	_	0	_	_	_
2	prayer	_	_	_	_	0	_	_	_
3	of 	_	_	_	_	0	_	_	_
4	poor	_	_	_	_	0	_	_	_
5	men	_	_	_	_	0	_	_	_
6	is	_	_	_	_	0	_	_	_
7	God	_	_	_	_	0	_	_	_
8	exists	_	_	_	_	0	_	_	_

~~~

<a name="Neg"></a>

### Negative construction

Negation is marked with the particule <i>no</i> before a verb, an auxiliary or an adjective.

~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	Im	he	PRON	PRON	_	3	nsubj	_	_
2	no	not	PART	PART	_	3	advmod	_	_
3	see	see	VERB	VERB	_	0	root	_	_
4	you	you	PRON	PRON	_	3	obj	_	_

1	he	_	_	_	_	0	_	_	_
2	not	_	_	_	_	0	_	_	_
3	see 	_	_	_	_	0	_	_	_
4	you	_	_	_	_	0	_	_	_

1	he	_	_	_	_	0	_	_	_
2	does	_	_	_	_	0	_	_	_
3	not 	_	_	_	_	0	_	_	_
4	see	_	_	_	_	0	_	_	_
5	you	_	_	_	_	0	_	_	_

~~~




<a name="DoubleObj"></a>

### Double object construction

~~~ conllu
# visual-style 3 4 obj	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5 7 obj	color:blue
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
1	God	God	PROPN	PROPN	_	3	nsubj	_	_
2	just	just	ADV	ADV	_	3	advmod	_	_
3	carry	carry	VERB	VERB	_	0	root	_	_
4	am	he	PRON	PRON	_	3	obj	_	_
5	give	give	VERB	VERB	_	3	compound:svc	_	_
6	dat	that	DET	PRON	_	7	det	_	_
7	pastor	pastor	NOUN	NOUN	_	5	obj	_	_

1	God	_	_	_	_	0	_	_	_
2	just	_	_	_	_	0	_	_	_
3	carry 	_	_	_	_	0	_	_	_
4	it	_	_	_	_	0	_	_	_
5	give	_	_	_	_	0	_	_	_
6	that	_	_	_	_	0	_	_	_
7	pastor	_	_	_	_	0	_	_	_

1	God	_	_	_	_	0	_	_	_
2	just	_	_	_	_	0	_	_	_
3	gave 	_	_	_	_	0	_	_	_
4	it	_	_	_	_	0	_	_	_
5	to	_	_	_	_	0	_	_	_
6	the	_	_	_	_	0	_	_	_
7	pastor	_	_	_	_	0	_	_	_

~~~

<a name="SVC"></a>

### Serial Verb Constructions

In a Serial Verb Construction (SVC), several verbs are combined to describe the same action. These verbs share their subject, but not necessarily their objects.

~~~ conllu
# visual-style 2 4 compound:svc	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	dem	them	PRON	PRON	_	2	nsubj	_
2	enter	enter	VERB	VERB	_	0	root	_	_
3	bus	bus	NOUN	NOUN	_	2	obj	_	_
4	go	go	VERB	VERB	_	2	compound:svc	_	_
5	work	work	NOUN	NOUN	_	4	obj	_	_

1	they	_	_	_	_	0	_	_	_
2	enter	_	_	_	_	0	_	_	_
3	bus	_	_	_	_	0	_	_	_
4	go	_	_	_	_	0	_	_	_
5	work	_	_	_	_	0	_	_	_

1	They	_	_	_	_	0	_	_	_
2	take	_	_	_	_	0	_	_	_
3	the	_	_	_	_	0	_	_	_
4	bus	_	_	_	_	0	_	_	_
5	to	_	_	_	_	0	_	_	_
6	work	_	_	_	_	0	_	_	_
~~~

In Naija this type of construction is not limited to verbs, it can also involve adjectives.

~~~ conllu
# visual-style 3 4 compound:svc	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	di	the	DET	DET	_	2	det	_	_
2	guy	guy	NOUN	NOUN	_	3	nsubj	_	_
3	fine	fine	ADJ	ADJ	_	0	root	_	_
4	reach	arrive	VERB	VERB	_	3	compound:svc	_	_
5	me	I	PRON	PRON	_	4	obj	_	_

1	the	_	_	_	_	0	_	_	_
2	guy	_	_	_	_	0	_	_	_
3	fine	_	_	_	_	0	_	_	_
4	reach	_	_	_	_	0	_	_	_
5	me	_	_	_	_	0	_	_	_

1	Is	_	_	_	_	0	_	_	_
2	the	_	_	_	_	0	_	_	_
3	guy	_	_	_	_	0	_	_	_
4	as	_	_	_	_	0	_	_	_
5	handsome	_	_	_	_	0	_	_	_
6	as	_	_	_	_	0	_	_	_
7	I	_	_	_	_	0	_	_	_
8	am	_	_	_	_	0	_	_	_

~~~


#### Comparatives

In Naija, comparatives follow the same pattern as SVCs, with the adjective acting like a verb, followed by the verb “pass” which is its dependent.

~~~ conllu
# visual-style 11 12 compound:svc	color:blue
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
1	na	na	PART	PART	_	3	cop	_	_
2	di	the	DET	DET	_	3	det	_	_
3	time	time	NOUN NOUN	_	0	root	_	_
4	wey	where	SCONJ	SCONJ	_	6	mark	_	_
5	dem	they	PRON	PRON	_	6	nsubj	_	_
6	drink	drink	VERB	VERB	_	3	acl:relcl	_	_
7	na	na	PART	PART	_	11	mark	_	_
8	im	he	PRON	PRON	_	7	goeswith	_	_
9	dem	they	PRON	PRON	_	11	nsubj	_	_
10	dey	be	AUX	AUX	_	11	aux	_	_
11	sharp	sharp	ADJ	ADJ	_	3	acl:cleft	_	_
12	pass	pass	VERB	VERB	_	11	compound:svc	_	_

1	be	_	_	_	_	0	_	_	_
2	the	_	_	_	_	0	_	_	_
3	time 	_	_	_	_	0	_	_	_
4	where	_	_	_	_	0	_	_	_
5	they	_	_	_	_	0	_	_	_
6	drink	_	_	_	_	0	_	_	_
7	be	_	_	_	_	0	_	_	_
8	he	_	_	_	_	0	_	_	_
9	they	_	_	_	_	0	_	_	_
10	CONT	_	_	_	_	0	_	_	_
11	sharp	_	_	_	_	0	_	_	_
12	pass	_	_	_	_	0	_	_	_

1	it	_	_	_	_	0	_	_	_
2	is	_	_	_	_	0	_	_	_
3	when 	_	_	_	_	0	_	_	_
4	they	_	_	_	_	0	_	_	_
5	have	_	_	_	_	0	_	_	_
6	taken	_	_	_	_	0	_	_	_
7	alcohol	_	_	_	_	0	_	_	_
8	that	_	_	_	_	0	_	_	_
9	they	_	_	_	_	0	_	_	_
10	are	_	_	_	_	0	_	_	_
11	sharper	_	_	_	_	0	_	_	_

~~~


<a name="Clefts"></a>

### Cleft sentences

A cleft sentence is a complex sentence (one having a main clause and a dependent clause) that has a meaning that could be expressed by a simple sentence. Clefts typically put a particular constituent into focus.

In Naija, two links are used for cleft sentences :

- [ccomp:cleft]() is used when a clause or an adverb is clefted

~~~ conllu
# visual-style 2 6 ccomp:cleft	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
1	na	na	PART	PART	_	2	cop	_	_
2	why	why	ADV	ADV	_	0	root	_	_
3	drink	drink	VERB	VERB	_	6	csubj	_	_
4	drive	drive	VERB	VERB	_	3	compound:svc	_	_
5	no	not	PART	PART	_	6	advmod	_	_
6	good	good	ADJ	ADJ	_	2	ccomp:cleft	_	_

1	be	_	_	_	_	0	_	_	_
2	why	_	_	_	_	0	_	_	_
3	drink 	_	_	_	_	0	_	_	_
4	drive	_	_	_	_	0	_	_	_
5	not	_	_	_	_	0	_	_	_
6	good	_	_	_	_	0	_	_	_

1	That	_	_	_	_	0	_	_	_
2	is	_	_	_	_	0	_	_	_
3	why 	_	_	_	_	0	_	_	_
4	drunk	_	_	_	_	0	_	_	_
5	driving	_	_	_	_	0	_	_	_
6	is	_	_	_	_	0	_	_	_
7	not	_	_	_	_	0	_	_	_
8	good	_	_	_	_	0	_	_	_

~~~

- [acl:cleft]() is used when a nominal is clefted.

~~~ conllu
# visual-style 3 4 acl:cleft	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	na	na	PART	PART	_	3	cop	_	_
2	our	our	PRON	PRON	_	3	nmod:pass	_	_
3	right	right	NOUN	NOUN	_	0	root	_	_
4	be	be	VERB	VERB	_	3	acl:cleft	_	_
5	dat	that	PRON	PRON	_	4	nsubj	_	_

1	be	_	_	_	_	0	_	_	_
2	our	_	_	_	_	0	_	_	_
3	right 	_	_	_	_	0	_	_	_
4	be	_	_	_	_	0	_	_	_
5	that	_	_	_	_	0	_	_	_

1	It	_	_	_	_	0	_	_	_
2	is	_	_	_	_	0	_	_	_
3	our 	_	_	_	_	0	_	_	_
4	right	_	_	_	_	0	_	_	_

~~~

In Naija cleft sentences are sometimes marked using the _na_ particle and _naim_ adverb as follows:

+ na [main] [dependent]
+ naim [main] [dependent]
+ na [main] naim [dependent]

Sometimes however, they are not marked as in the example below :

~~~ conllu
# visual-style 1 10 ccomp:cleft	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
1	wetin	wetin	PRON	_	_	4	acl:relcl	_	_
2	I	I	PRON	_	_	4	nsubj	_	_
3	dey	dey	AUX	_	_	4	aux	_	_
4	follow	follow	VERB	_	_	0	root	_	_
5	you	you	PRON	_	_	4	obj	_	_
6	yarn	yarn	VERB	_	_	4	compound:svc	_	_
7	dose	dose	DET	_	_	8	det	_	_
8	people	people	NOUN	_	_	10	dislocated	_	_
9	na	na	PART	_	_	10	cop	_	_
10	tutorial	tutorial	NOUN	_	_	1	ccomp:cleft	_	_
11	dem	dem	PRON	_	_	12	nsubj	_	_
12	come	come	VERB	_	_	10	acl:cleft	_	_
13	do	do	VERB	_	_	12	xcomp	_	_

1	what	_	_	_	_	0	_	_	_
2	I	_	_	_	_	0	_	_	_
3	CONT 	_	_	_	_	0	_	_	_
4	follow	_	_	_	_	0	_	_	_
5	you	_	_	_	_	0	_	_	_
6	talk	_	_	_	_	0	_	_	_
7	those	_	_	_	_	0	_	_	_
8	people	_	_	_	_	0	_	_	_
9	be	_	_	_	_	0	_	_	_
10	tutorial	_	_	_	_	0	_	_	_
11	they	_	_	_	_	0	_	_	_
12	come	_	_	_	_	0	_	_	_
13	do	_	_	_	_	0	_	_	_
~~~

<a name="Disl"></a>

### Dislocations

Dislocated constituents (it can be an argument or an adjunct) are found outside of the boundaries of the clause they belong to. This is marked prosodically. This type of construction is annoted with the link [dislocated]().

~~~ conllu
# visual-style 11 1 dislocated	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
1	tyre	tyre	NOUN	NOUN	_	11	dislocated	_	_
2	wey	that	SCONJ	SCONJ	_	4	mark	_	_
3	don	have	AUX	AUX	_	4	aux	_	_
4	expire	expire	VERB	VERB	_	1	acl:relcl	_	_
5	in	in	ADP	ADP	_	8	case	_	_
6	di	the	DET	DET	_	8	det	_	_
7	first	first	ADJ	ADJ	_	8	amod	_	_
8	place	place	NOUN	NOUN	_	4	obl:ad	_	_
9	dem	they	PRON	PRON	_	11	nsubj	_	_
10	go	will	AUX	AUX	_	11	aux	_	_
11	fold	fold	VERB	VERB	_	0	root	_	_
12	am	he	PRON	PRON	_	11	obj	_	_

1	tyre	_	_	_	_	0	_	_	_
2	that	_	_	_	_	0	_	_	_
3	have 	_	_	_	_	0	_	_	_
4	expire	_	_	_	_	0	_	_	_
5	in	_	_	_	_	0	_	_	_
6	the	_	_	_	_	0	_	_	_
7	first	_	_	_	_	0	_	_	_
8	place	_	_	_	_	0	_	_	_
9	they	_	_	_	_	0	_	_	_
10	will	_	_	_	_	0	_	_	_
11	fold	_	_	_	_	0	_	_	_
12	it	_	_	_	_	0	_	_	_

1	Tires	_	_	_	_	0	_	_	_
2	that	_	_	_	_	0	_	_	_
3	have 	_	_	_	_	0	_	_	_
4	expired	_	_	_	_	0	_	_	_
5	in	_	_	_	_	0	_	_	_
6	the	_	_	_	_	0	_	_	_
7	first	_	_	_	_	0	_	_	_
8	place	_	_	_	_	0	_	_	_
9	they	_	_	_	_	0	_	_	_
10	will	_	_	_	_	0	_	_	_
11	fold	_	_	_	_	0	_	_	_
12	it	_	_	_	_	0	_	_	_

~~~

### Paratactic constructions

<a name="Jux"></a>

#### Juxtaposition

The clauses are juxtaposed when they are independent from one another. It is often the case in parallel constructions which are used for sequential construction in Naija. This type of construction is similar to coordinated conjuncts and therefore annotated as a special type of coordination: [parataxis:conj]().

~~~ conllu
# visual-style 3 7 parataxis:conj	color:blue
# visual-style 3 11 parataxis:conj	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
1	you	you	PRON	PRON	_	3	nsubj	_	_
2	go	will	AUX	AUX	_	3	aux	_	_
3	wash	wash	VERB	VERB	_	0	root	_	_
4	plate	plate	NOUN	NOUN	_	3	obj	_	_
5	you	you	PRON	PRON	_	7	nsubj	_	_
6	go	will	AUX	AUX	_	7	aux	_	_
7	do	do	VERB	VERB	_	3	parataxis:conj	_	_
8	everything	everything	NOUN	NOUN	_	7	obj	_	_
9	you	you	PRON	PRON	_	11	nsubj	_	_
10	go	will	AUX	AUX	_	11	aux	_	_
11	sweep	sweep	VERB	VERB	_	3	parataxis:conj	_	_
12	floor	floor	NOUN	NOUN	_	11	obj	_	_

1	you	_	_	_	_	0	_	_	_
2	PROSP	_	_	_	_	0	_	_	_
3	wash 	_	_	_	_	0	_	_	_
4	plate	_	_	_	_	0	_	_	_
5	you	_	_	_	_	0	_	_	_
6	will	_	_	_	_	0	_	_	_
7	do	_	_	_	_	0	_	_	_
8	everything	_	_	_	_	0	_	_	_
9	you	_	_	_	_	0	_	_	_
10	PROSP	_	_	_	_	0	_	_	_
11	sweep	_	_	_	_	0	_	_	_
12	floor	_	_	_	_	0	_	_	_

1	you	_	_	_	_	0	_	_	_
2	will	_	_	_	_	0	_	_	_
3	wash 	_	_	_	_	0	_	_	_
4	the	_	_	_	_	0	_	_	_
5	plate	_	_	_	_	0	_	_	_
6	you	_	_	_	_	0	_	_	_
7	will	_	_	_	_	0	_	_	_
8	do	_	_	_	_	0	_	_	_
9	everything	_	_	_	_	0	_	_	_
10	you	_	_	_	_	0	_	_	_
11	will	_	_	_	_	0	_	_	_
12	sweep	_	_	_	_	0	_	_	_
13	the	_	_	_	_	0	_	_	_
14	floor	_	_	_	_	0	_	_	_


~~~

<a name="Speech"></a>

#### Reported Speech

- indirect speech

In naija, indirect speech is often introduced by the subordinate conjunction "sey" and the link [ccomp]() is used.

~~~ conllu
# visual-style 3 8 ccomp	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
1	dem	they	PRON	PRON	_	3	nsubj	_	_
2	just	just	ADV	ADV	_	3	advmod	_	_
3	tell	tell	VERB	VERB	_	0	root	_	_
4	am	he	PRON	PRON	_	3	iobj	_	_
5	sey	that	SCONJ	SCONJ	_	8	mark	_	_
6	im	he	PRON	PRON	_	7	nmod:poss	_	_
7	daughter	daughter	NOUN	NOUN	_	8	nsubj	_	_
8	fall	fall	VERB	VERB	_	3	ccomp	_	_

1	they	_	_	_	_	0	_	_	_
2	just	_	_	_	_	0	_	_	_
3	tell 	_	_	_	_	0	_	_	_
4	him	_	_	_	_	0	_	_	_
5	that	_	_	_	_	0	_	_	_
6	his	_	_	_	_	0	_	_	_
7	daughter	_	_	_	_	0	_	_	_
8	fall	_	_	_	_	0	_	_	_

1	they	_	_	_	_	0	_	_	_
2	just	_	_	_	_	0	_	_	_
3	told 	_	_	_	_	0	_	_	_
4	him	_	_	_	_	0	_	_	_
5	that	_	_	_	_	0	_	_	_
6	his	_	_	_	_	0	_	_	_
7	daughter	_	_	_	_	0	_	_	_
8	fell	_	_	_	_	0	_	_	_

~~~

- direct speech

For direct speech, the link [parataxis:obj]() is used. Direct speech can be identified through the use of first person pronouns and interjections.

~~~ conllu
# visual-style 2 6 parataxis:obj	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
1	dem	they	PRON	PRON	_	2	nsubj	_	_
2	say	say	VERB	VERB	_	0	root	_	_
3	"ah"	"ah"	INTJ	INTJ	_	6	discourse	_	_
4	"ah"	"ah"	INTJ	INTJ	_	3	goeswith	_	_
5	who	who	PRON	PRON	_	6	nsubj	_	_
6	kill	kill	VERB	VERB	_	2	parataxis:obj	_	_
7	dis	this	DET	DET	_	8	det	_	_
8	animal	animal	NOUN	NOUN	_	6	obj	_	_


1	They	_	_	_	_	0	_	_	_
2	say	_	_	_	_	0	_	_	_
3	ah	_	_	_	_	0	_	_	_
4	ah	_	_	_	_	0	_	_	_
5	who	_	_	_	_	0	_	_	_
6	kill	_	_	_	_	0	_	_	_
7	this	_	_	_	_	0	_	_	_
8	animal	_	_	_	_	0	_	_	_

1	They	_	_	_	_	0	_	_	_
2	say	_	_	_	_	0	_	_	_
3	"ah"	_	_	_	_	0	_	_	_
4	"ah"	_	_	_	_	0	_	_	_
5	who	_	_	_	_	0	_	_	_
6	killed	_	_	_	_	0	_	_	_
7	this	_	_	_	_	0	_	_	_
8	animal	_	_	_	_	0	_	_	_

~~~


