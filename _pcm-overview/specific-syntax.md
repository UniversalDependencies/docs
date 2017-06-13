---
layout: base
title:  'Syntax'
permalink: pcm/overview/specific-syntax.html
udver: '2'
---

# Specific constructions

## na

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

+ cas particulier: root (?)


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	poor	poor	ADJ	ADJ	_	2	amod	_	_
2	man	man	NOUN	NOUN	_	3	nmod	_	_
3	prayer	prayer	NOUN	NOUN	_	4	nsubj	_	_
4	na	na	VERB	PART	_	0	root	_	_
5	God	God	PROPN	PROPN	_	6	nsubj	_	_
6	dey	be	AUX	AUX	_	4	parataxis:obj	_	_
~~~
