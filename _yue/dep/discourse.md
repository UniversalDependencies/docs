---
layout: relation
title: 'discourse'
shortdef: 'discourse element'
udver: '2'
---

The discourse relation is used for interjections (words tagged [INTJ]()) and other discourse particles or words which are not clearly linked to the syntactic structure of the sentence except in a discursive sense. However, if an interjected element is clausal (including tag questions and words with a sentence-final particle or single words that are verbs or predicate adjectives), it should be given the relation [parataxis]().

~~~ conllu
# visual-style 4 1 discourse	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	哦	_	INTJ	_	_	4	discourse	_	oh
2	，	_	PUNCT	_	_	1	punct	_	_
3	不過	_	ADV	_	_	4	advmod	_	but
4	要	_	VERB	_	_	0	root	_	require
5	三	_	NUM	_	_	6	nummod	_	three
6	年	_	NOUN	_	_	4	obj	_	CL:years

1	"Okay,	_	_	_	_	0	_	_	_
2	but	_	_	_	_	0	_	_	_
3	it'll	_	_	_	_	0	_	_	_
4	take	_	_	_	_	0	_	_	_
5	three	_	_	_	_	0	_	_	_
6	years."	_	_	_	_	0	_	_	_

~~~

Some discourse markers appear at the end of an utterance/clause/sentence, but should not be confused with sentence-final particles ([discourse:sp]()) even if there is no pause before it. These include 吓 _haa2_, 吓嗎 _haa6maa2_, 吓話 _haa6waa2_, 呵 _ho2_.

~~~ conllu
# visual-style 3 7 discourse	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
1	你	_	PRON	_	_	3	nsubj	_	2SG
2	唔	_	ADV	_	_	3	advmod	_	NEG
3	食	_	VERB	_	_	0	root	_	eat
4	㗎	_	PART	_	_	3	discourse:sp	_	SP
5	喇	_	PART	_	_	3	discourse:sp	_	SP
6	，	_	PUNCT	_	_	7	punct	_	_
7	呵	_	PART	_	_	3	discourse	_	(tag-particle)
8	？	_	PUNCT	_	_	3	punct	_	_

1	"You're	_	_	_	_	0	_	_	_
2	not	_	_	_	_	0	_	_	_
3	eating,	_	_	_	_	0	_	_	_
4	isn't	_	_	_	_	0	_	_	_
5	that	_	_	_	_	0	_	_	_
6	so?"	_	_	_	_	0	_	_	_

~~~

Particles 呀 _aa3_, 呀 _aa4_, 呢 _ne1/le1_, 喎 _wo3_ may occur after a topic in sentence-initial position; these have homophonous counterparts in sentence-final particles but should not be confused with them, and should be labelled `discourse` rather than [discourse:sp]().

~~~ conllu
# visual-style 1 2 discourse	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	臭豆腐	_	NOUN	_	_	4	dislocated	_	stinky-tofu
2	呀	_	PART	_	_	1	discourse	_	PART
3	，	_	PUNCT	_	_	1	punct	_	_
4	冇	_	VERB	_	_	0	root	_	not-exist
5	人	_	NOUN	_	_	4	obj	_	person
6	食	_	VERB	_	_	5	acl	_	eat
7	㗎	_	PART	_	_	4	discourse:sp	_	SP

1	"Stinky	_	_	_	_	0	_	_	_
2	tofu	_	_	_	_	0	_	_	_
3	--	_	_	_	_	0	_	_	_
4	nobody	_	_	_	_	0	_	_	_
5	eats	_	_	_	_	0	_	_	_
6	that."	_	_	_	_	0	_	_	_

~~~

Additionally, 呀 _aa3_ and 喇 _laa1_ may be used to offset items in a list. In this case, they should depend on the items that are conjuncts or that form the list, whether these conjuncts are nouns, phrases, or predicates.

~~~ conllu
# visual-style 3 4 discourse	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6 7 discourse	color:blue
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
1	呢度	_	PRON	_	_	2	obl	_	here
2	有	_	VERB	_	_	0	root	_	exist
3	芒果	_	NOUN	_	_	2	obj	_	mango
4	喇	_	PART	_	_	3	discourse	_	PART
5	，	_	PUNCT	_	_	6	punct	_	_
6	龍眼	_	VERB	_	_	3	conj	_	longan
7	喇	_	PART	_	_	6	discourse	_	SP
8	，	_	PUNCT	_	_	10	punct	_	_
9	同埋	_	CCONJ	_	_	10	cc	_	and
10	荔枝	_	NOUN	_	_	3	conj	_	lychee

1	"There	_	_	_	_	0	_	_	_
2	are	_	_	_	_	0	_	_	_
3	mangoes,	_	_	_	_	0	_	_	_
4	longans,	_	_	_	_	0	_	_	_
5	and	_	_	_	_	0	_	_	_
6	lychees	_	_	_	_	0	_	_	_
7	here."	_	_	_	_	0	_	_	_

~~~

The particle 呢 _ne1/le1_ can also be used as a hesitation marker.

~~~ conllu
# visual-style 1 2 discourse	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4 5 discourse	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	我	_	PRON	_	_	7	nsubj	_	here
2	呢	_	PART	_	_	1	discourse	_	PART
3	，	_	PUNCT	_	_	1	punct	_	_
4	琴日	_	NOUN	_	_	7	obl:tmod	_	yesterday
5	呢	_	PART	_	_	4	discourse	_	PART
6	，	_	PUNCT	_	_	5	punct	_	_
7	見	_	VERB	_	_	0	root	_	see
8	到	_	VERB	_	_	7	compound:vv	_	arrive
9	隻	_	NOUN	_	_	10	det	_	CL
10	老鼠	_	NOUN	_	_	7	obj	_	mouse
11	呀	_	PART	_	_	7	discourse:sp	_	SP
12	！	_	PUNCT	_	_	7	punct	_	_

1	"I,	_	_	_	_	0	_	_	_
2	uh...	_	_	_	_	0	_	_	_
3	yesterday...	_	_	_	_	0	_	_	_
4	saw	_	_	_	_	0	_	_	_
5	a	_	_	_	_	0	_	_	_
6	mouse!"	_	_	_	_	0	_	_	_

~~~

### References

- Matthews, Stephen and Virginia Yip. 2011. Cantonese: A Comprehensive Grammar, 2nd ed. Routledge.
<!-- Interlanguage links updated Čt lis 12 09:43:24 CET 2020 -->
