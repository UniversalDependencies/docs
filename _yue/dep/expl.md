---
layout: relation
title: 'expl'
shortdef: 'expletive'
udver: '2'
---

In Cantonese, expletive (1) and pleonastic (2) uses of the pronoun 佢 / _keoi5_ (3SG) are labelled as `expl` dependents of the head of a clause. In expletive uses, the pronoun does not refer to an actual person or object but it is required in the sentence otherwise it would become ungrammatical. In the pleonastic case, the pronoun is used immediately after a noun and refers back to it in a redundant way.

~~~ conllu
# visual-style 1 3 expl	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	喊	_	VERB	_	_	0	root	_	cry
2	飽	_	ADJ	_	_	1	compound:vv	_	full
3	佢	_	PRON	_	_	1	expl	_	yesterday
4	啦	_	PART	_	_	1	discourse:sp	_	SP

1	"Go	_	_	_	_	0	_	_	_
2	ahead	_	_	_	_	0	_	_	_
3	and	_	_	_	_	0	_	_	_
4	cry	_	_	_	_	0	_	_	_
5	it	_	_	_	_	0	_	_	_
6	all	_	_	_	_	0	_	_	_
7	out."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 1 5 expl	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	抌	_	VERB	_	_	0	root	_	discard
2	晒	_	PART	_	_	1	compound:quant	_	all
3	啲	_	NOUN	_	_	4	det	_	CL:plural
4	嘢	_	NOUN	_	_	1	obj	_	stuff
5	佢	_	PRON	_	_	1	expl	_	3SG
6	啦	_	PART	_	_	1	discourse:sp	_	SP

1	"Just	_	_	_	_	0	_	_	_
2	throw	_	_	_	_	0	_	_	_
3	all	_	_	_	_	0	_	_	_
4	the	_	_	_	_	0	_	_	_
5	stuff	_	_	_	_	0	_	_	_
6	away!"	_	_	_	_	0	_	_	_

~~~

### References

- Matthews, Stephen and Virginia Yip. 2011. Cantonese: A Comprehensive Grammar, 2nd ed. Routledge.
<!-- Interlanguage links updated St lis 3 20:58:53 CET 2021 -->
