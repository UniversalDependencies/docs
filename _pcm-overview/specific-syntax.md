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

#### Superlatives

### Clefts

### Dislocations

### Paratactic constructions

#### Juxtaposition

#### Reported Speech

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
