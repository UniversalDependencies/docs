---
layout: base
title:  'Syntax'
permalink: pcm/overview/specific-syntax.html
udver: '2'
---

# Specific constructions

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

### Serial Verb Constructions

#### Comparatives

In Naija, comparatives follow the same pattern as SVCs, with the adjective acting like a verb, followed by the verb “pass” which is its dependant.

~~~ conllu
# visual-style 11 12 obj	color:blue
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

1	na	_	_	_	_	0	_	_	_
2	the	_	_	_	_	0	_	_	_
3	time 	_	_	_	_	0	_	_	_
4	where	_	_	_	_	0	_	_	_
5	they	_	_	_	_	0	_	_	_
6	drink	_	_	_	_	0	_	_	_
7	na	_	_	_	_	0	_	_	_
8	he	_	_	_	_	0	_	_	_
9	they	_	_	_	_	0	_	_	_
10	be	_	_	_	_	0	_	_	_
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


#### Superlatives

### Clefts

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

1	na	_	_	_	_	0	_	_	_
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

- [acl:cleft]() in other cases.

~~~ conllu
# visual-style 3 4 ccomp:cleft	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	na	na	PART	PART	_	3	cop	_	_
2	our	our	PRON	PRON	_	3	nmod:pass	_	_
3	right	right	NOUN	NOUN	_	0	root	_	_
4	be	be	VERB	VERB	_	3	acl:cleft	_	_
5	dat	that	PRON	PRON	_	4	nsubj	_	_

1	na	_	_	_	_	0	_	_	_
2	our	_	_	_	_	0	_	_	_
3	right 	_	_	_	_	0	_	_	_
4	be	_	_	_	_	0	_	_	_
5	that	_	_	_	_	0	_	_	_

1	It	_	_	_	_	0	_	_	_
2	is	_	_	_	_	0	_	_	_
3	our 	_	_	_	_	0	_	_	_
4	right	_	_	_	_	0	_	_	_

~~~

We can also note that the “na” particle is used as a mark of focalization.

### Dislocations

### Paratactic constructions

#### Juxtaposition

#### Reported Speech

- indirect speech 

In naija, indirect speech are often introduced by the subordinate conjunction "sey" and the link [ccomp]() is used.

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
4	he	_	_	_	_	0	_	_	_
5	that	_	_	_	_	0	_	_	_
6	he	_	_	_	_	0	_	_	_
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

For direct speech, the link [parataxis:obj]() is used.

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

### na

+ copulative particle of focalization

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
11	o	yo	PART	PART	_	10	advmod:emph	_	_

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
11	yo	_	_	_	_	0	_	_	_	

~~~

- root

When the complement of the copula is clausal and contains its own subject, the copula becomes the head so as to avoid having two nsubj dependents for the head of the complement.

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
~~~

### negative construction

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
