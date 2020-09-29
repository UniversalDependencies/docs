---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of noun'
udver: '2'
---

`acl` is used for clauses that modify a noun (in contrast to [advcl]() which is used for clauses that modify a predicate). Clausal modifiers may precede the noun, and may be formed with (1) or without (2) the relativizer 嘅 _ge3_. They may also be postnominal, in which case they are simply juxtaposed after the noun without any linking function words (3-5).

~~~ conllu
# visual-style 4 2 acl	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	人	_	NOUN	_	_	2	nsubj	_	people
2	講	_	VERB	_	_	4	acl	_	say
3	嘅	_	PART	_	_	2	mark:rel	_	REL
4	話	_	NOUN	_	_	0	root	_	words

1	"words	_	_	_	_	0	_	_	_
2	(that)	_	_	_	_	0	_	_	_
3	people	_	_	_	_	0	_	_	_
4	say"	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 3 1 acl	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	治	_	VERB	_	_	3	acl	_	cure
2	病	_	NOUN	_	_	1	obj	_	illnesses
3	方面	_	NOUN	_	_	5	nmod	_	aspect
4	嘅	_	PART	_	_	3	case	_	GEN
5	問題	_	NOUN	_	_	0	root	_	matter

1	"the	_	_	_	_	0	_	_	_
2	matter	_	_	_	_	0	_	_	_
3	regarding	_	_	_	_	0	_	_	_
4	the	_	_	_	_	0	_	_	_
5	aspect	_	_	_	_	0	_	_	_
6	of	_	_	_	_	0	_	_	_
7	curing	_	_	_	_	0	_	_	_
8	illnesses"	_	_	_	_	0	_	_	_

~~~

Postnominal clausal modifiers (known as "descriptive clauses" in Mandarin in Li & Thompson, 1981) are headed by V2 in a [(NP1) V1 NP2 V2-clause] structure, where NP2 (i.e., the second noun phrase) is the direct object of V1 and the V2-clause describes information regarding NP2. This analysis is contingent on the [(NP1) V1 NP2 V2-clause] sequence being a single sentence with one intonational phrase and no pause in between.

~~~ conllu
# visual-style 2 3 acl	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	有	_	VERB	_	_	0	root	_	exist
2	機會	_	NOUN	_	_	1	obj	_	chance
3	學壞	_	VERB	_	_	2	acl	_	learn-bad

1	"There's	_	_	_	_	0	_	_	_
2	a	_	_	_	_	0	_	_	_
3	chance	_	_	_	_	0	_	_	_
4	of	_	_	_	_	0	_	_	_
5	learning	_	_	_	_	0	_	_	_
6	from	_	_	_	_	0	_	_	_
7	bad	_	_	_	_	0	_	_	_
8	people."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 4 6 acl	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
1	我哋	_	PRON	_	_	3	nsubj	_	1PL
2	突然間	_	ADV	_	_	3	advmod	_	suddenly
3	有	_	VERB	_	_	0	root	_	have
4	嘢	_	NOUN	_	_	3	obj	_	things
5	要	_	AUX	_	_	6	aux	_	need
6	做	_	VERB	_	_	4	acl	_	do

1	"We	_	_	_	_	0	_	_	_
2	suddenly	_	_	_	_	0	_	_	_
3	have	_	_	_	_	0	_	_	_
4	things	_	_	_	_	0	_	_	_
5	that	_	_	_	_	0	_	_	_
6	need	_	_	_	_	0	_	_	_
7	attending	_	_	_	_	0	_	_	_
8	to."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 5 6 acl	color:blue
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
1	我	_	PRON	_	_	3	nsubj	_	1SG
2	琴日	_	NOUN	_	_	3	obl:tmod	_	yesterday
3	收	_	VERB	_	_	0	root	_	receive
4	到	_	VERB	_	_	3	compound:vv	_	arrive
5	信	_	NOUN	_	_	3	obj	_	letter
6	話	_	VERB	_	_	5	acl	_	say
7	我	_	PRON	_	_	8	nmod	_	1SG
8	户口	_	NOUN	_	_	9	nsubj	_	account
9	冇	_	VERB	_	_	6	ccomp	_	not-have
10	錢	_	NOUN	_	_	9	obj	_	money
11	嘑	_	PART	_	_	9	discourse:sp	_	SP

1	"I	_	_	_	_	0	_	_	_
2	received	_	_	_	_	0	_	_	_
3	a	_	_	_	_	0	_	_	_
4	letter	_	_	_	_	0	_	_	_
5	yesterday	_	_	_	_	0	_	_	_
6	saying	_	_	_	_	0	_	_	_
7	that	_	_	_	_	0	_	_	_
8	my	_	_	_	_	0	_	_	_
9	bank	_	_	_	_	0	_	_	_
10	account	_	_	_	_	0	_	_	_
11	is	_	_	_	_	0	_	_	_
12	empty."	_	_	_	_	0	_	_	_

~~~

### References

- Li, Charles N., and Sandra A. Thompson. 1981. Mandarin Chinese: A Functional Reference Grammar. University of California Press.
<!-- Interlanguage links updated Út zář 29 20:43:06 CEST 2020 -->
