---
layout: relation
title: 'mark:rel'
shortdef: 'adjectival, relativizer, and nominalizer 的 DE'
udver: '2'
---

The `mark:rel` relation is reserved for three related uses of 的 _de_: adjectives, relative clauses, and nominalized clauses. 

### Adjectives [ADJ + 的 + NOUN]

When an adjective modifying a noun is followed by the particle 的 before the noun, the adjective is the head of the particle 的.

~~~ conllu
# visual-style 1 2 mark:rel	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	嚴重	_	ADJ	_	_	3	amod	_	grave
2	的	_	PART	_	_	1	mark:rel	_	_
3	問題	_	NOUN	_	_	0	root	_	problem

1	"grave	_	_	_	_	0	_	_	_
2	problem"	_	_	_	_	0	_	_	_

~~~

### Relative clauses [clause + 的 + NOUN]

When the particle 的 is used after a clause turning it into a relative clause that modifies the following noun, the particle is a `mark:rel` dependent of the main verb of the relative clause.

~~~ conllu
# visual-style 6 7 mark:rel	color:blue
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
1	木村	_	PROPN	_	_	6	nsubj	_	Kimura
2	在	_	ADP	_	_	3	case	_	in
3	劇	_	NOUN	_	_	6	obl	_	show
4	中	_	ADP	_	_	3	case:loc	_	middle
5	所	_	SCONJ	_	_	6	mark	_	REL
6	戴	_	VERB	_	_	8	acl	_	wear
7	的	_	PART	_	_	6	mark:rel	_	REL
8	手鍊	_	NOUN	_	_	0	root	_	bracelet

1	"the	_	_	_	_	0	_	_	_
2	bracelet	_	_	_	_	0	_	_	_
3	that	_	_	_	_	0	_	_	_
4	Kimura	_	_	_	_	0	_	_	_
5	wears	_	_	_	_	0	_	_	_
6	in	_	_	_	_	0	_	_	_
7	the	_	_	_	_	0	_	_	_
8	show"	_	_	_	_	0	_	_	_

~~~

### Nominalized clauses [clause + 的]

When the particle 的 is used after a verb, predicate adjective, or object-less clause turning it into a nominal, the particle is annotated as a `mark:rel` dependent of the head of the nominalized clause.

~~~ conllu
# visual-style 2 3 mark:rel	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	他們	_	PRON	_	_	2	nsubj	_	3PL
2	寫	_	VERB	_	_	6	nsubj	_	write
3	的	_	PART	_	_	2	mark:rel	_	NMZR
4	不	_	ADV	_	_	5	advmod	_	NEG
5	是	_	COP	_	_	6	cop	_	be
6	詩	_	NOUN	_	_	0	root	_	poetry

1	"What	_	_	_	_	0	_	_	_
2	they	_	_	_	_	0	_	_	_
3	write	_	_	_	_	0	_	_	_
4	is	_	_	_	_	0	_	_	_
5	not	_	_	_	_	0	_	_	_
6	poetry."	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated Út zář 29 20:43:21 CEST 2020 -->
