---
layout: relation
title: 'mark:rel'
shortdef: 'adjectival, relativizer, and nominalizer GE'
udver: '2'
---

The `mark:rel` relation is reserved for three related uses of 嘅 _ge3_: adjectives, relative clauses, and nominalized clauses. 

### Adjectives [ADJ + 嘅 + NOUN]

When an adjective modifying a noun is followed by the particle 嘅 before the noun, the adjective is the head of the particle 嘅.

~~~ conllu
# visual-style 1 2 mark:rel	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	嚴重	_	ADJ	_	_	3	amod	_	grave
2	嘅	_	PART	_	_	1	mark:rel	_	_
3	問題	_	NOUN	_	_	0	root	_	problem

1	"grave	_	_	_	_	0	_	_	_
2	problem"	_	_	_	_	0	_	_	_

~~~

### Relative clauses [clause + 嘅 + NOUN]

When the particle 嘅 is used after a clause turning it into a relative clause that modifies the following noun, the particle is a `mark:rel` dependent of the main verb of the relative clause.

~~~ conllu
# visual-style 5 6 mark:rel	color:blue
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
1	阿明	_	PROPN	_	_	5	nsubj	_	Ming
2	喺	_	ADP	_	_	3	case	_	in
3	電視劇	_	NOUN	_	_	5	obl	_	TV-show
4	入面	_	ADP	_	_	3	case:loc	_	middle
5	戴	_	VERB	_	_	7	acl	_	wear
6	嘅	_	PART	_	_	5	mark:rel	_	REL
7	手鍊	_	NOUN	_	_	0	root	_	bracelet

1	"the	_	_	_	_	0	_	_	_
2	bracelet	_	_	_	_	0	_	_	_
3	that	_	_	_	_	0	_	_	_
4	Ming	_	_	_	_	0	_	_	_
5	wears	_	_	_	_	0	_	_	_
6	in	_	_	_	_	0	_	_	_
7	the	_	_	_	_	0	_	_	_
8	TV	_	_	_	_	0	_	_	_
9	show"	_	_	_	_	0	_	_	_

~~~

### Nominalized clauses [clause + 嘅]

When the particle 的 is used after a verb, predicate adjective, or object-less clause turning it into a nominal, the particle is annotated as a `mark:rel` dependent of the head of the nominalized clause.

~~~ conllu
# visual-style 2 3 mark:rel	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	佢哋	_	PRON	_	_	2	nsubj	_	3PL
2	寫	_	VERB	_	_	6	nsubj	_	write
3	嘅	_	PART	_	_	2	mark:rel	_	NMZR
4	唔	_	ADV	_	_	5	advmod	_	NEG
5	係	_	ADJ	_	_	6	cop	_	be
6	詩	_	NOUN	_	_	0	root	_	poetry

1	"What	_	_	_	_	0	_	_	_
2	they	_	_	_	_	0	_	_	_
3	write	_	_	_	_	0	_	_	_
4	is	_	_	_	_	0	_	_	_
5	not	_	_	_	_	0	_	_	_
6	poetry."	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated Út zář 29 18:41:26 CEST 2020 -->
