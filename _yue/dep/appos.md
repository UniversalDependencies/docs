---
layout: relation
title: 'appos'
shortdef: 'appositional modifier'
udver: '2'
---

An appositional modifier is a pronoun or noun (phrase) that follows and defines or modifies another noun (phrase). The dependent comes immediately after the head.

There are three situations in Cantonese for which we apply the `appos` relation. The classical example involves the appositional modifier defining the specific individual(s) which the first noun (phrase) refers to.

~~~ conllu
# visual-style 3 5 appos	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	我	_	PRON	_	_	3	nmod	_	1SG
2	嘅	_	PART	_	_	1	case	_	GEN
3	老闆娘	_	NOUN	_	_	0	root	_	female-boss
4	楊	_	PROPN	_	_	5	compound	_	Yeung
5	小姐	_	NOUN	_	_	3	appos	_	Ms.

1	"my	_	_	_	_	0	_	_	_
2	boss	_	_	_	_	0	_	_	_
3	Ms.	_	_	_	_	0	_	_	_
4	Yeung"	_	_	_	_	0	_	_	_

~~~

Apposition always goes from left to right. In the case that the secondary noun is in front, either [dislocated]() or [vocative]() may apply instead.

In the second situation, the second noun phrase describes (rather than specifies) the first noun phrase, usually indicating or emphasizing the number of participants/objects, and/or describing the relationship between the participants (e.g., 佢哋 兩 夫妻 / _keoi5dei6 loeng5 fu1cai1_ they two husband-wife "the two of them spouses").

~~~ conllu
# visual-style 1 3 appos	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	佢哋	_	PRON	_	_	4	nsubj	_	3PL
2	四	_	NUM	_	_	3	nummod	_	four
3	個	_	NOUN	_	_	1	appos	_	CL:generic
4	寫	_	VERB	_	_	0	root	_	write
5	嘅	_	PART	_	_	4	mark:rel	_	NMZR

1	"what	_	_	_	_	0	_	_	_
2	they	_	_	_	_	0	_	_	_
3	the	_	_	_	_	0	_	_	_
4	four	_	_	_	_	0	_	_	_
5	of	_	_	_	_	0	_	_	_
6	them	_	_	_	_	0	_	_	_
7	wrote"	_	_	_	_	0	_	_	_

~~~

In another situation, a noun indicating a reference location may be followed by a pronoun, such as 嗰邊 / _go2bin1_ 'there' and 呢度 / _ni1dou6_ 'here', indicating proximity to the speaker. These pronouns are treated as `appos` dependents of the noun preceding them.

~~~ conllu
# visual-style 3 4 appos	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	佢哋	_	PRON	_	_	2	nsubj	_	3PL
2	喺	_	VERB	_	_	0	root	_	be-at
3	門口	_	NOUN	_	_	2	obj	_	doorway
4	嗰邊	_	PRON	_	_	3	appos	_	there

1	"They're	_	_	_	_	0	_	_	_
2	by	_	_	_	_	0	_	_	_
3	the	_	_	_	_	0	_	_	_
4	doorway	_	_	_	_	0	_	_	_
5	over	_	_	_	_	0	_	_	_
6	there."	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated Pá kvě 14 11:08:51 CEST 2021 -->
