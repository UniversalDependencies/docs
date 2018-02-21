---
layout: base
title:  'Syntax'
udver: '2'
---

# Specific constructions

+ [Dislocations](#Disl)
+ [Reported Speech](#Speech)


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

<a name="Speech"></a>

### Reported Speech

- indirect speech

In Bambara, indirect speech is often introduced by the subordinate conjunction "ko" and the link [ccomp]() is used.

- direct speech

For direct speech, the link [parataxis:obj]() is used. Direct speech can be identified through the use of first person pronouns and interjections.



