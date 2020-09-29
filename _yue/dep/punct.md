---
layout: relation
title: 'punct'
shortdef: 'punctuation'
udver: '2'
---

This relation is used for all punctuation symbols.

~~~ conllu
# visual-style 2 4 punct	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	我哋	_	PRON	_	_	2	nsubj	_	3PL
2	走	_	VERB	_	_	0	root	_	go
3	喇	_	PART	_	_	2	discourse:sp	_	SP
4	！	_	PUNCT	_	_	2	punct	_	_

1	"Let's	_	_	_	_	0	_	_	_
2	go!"	_	_	_	_	0	_	_	_

~~~

We follow the official [UD principles](http://universaldependencies.org/u/dep/punct.html) in determining the head of punctuation marks:

1. A punctuation mark separating coordinated units is attached to the following conjunct.
2. A punctuation mark preceding or following a subordinated unit is attached to this unit.
3. Within the relevant unit, a punctuation mark is attached at the highest possible node that preserves projectivity.
4. Paired punctuation marks (e.g. quotes and brackets, sometimes also dashes, commas and other) should be attached to the same word unless that would create non-projectivity. This word is usually the head of the phrase enclosed in the paired punctuation.

~~~ conllu
# visual-style 5 4 punct	color:blue
# visual-style 8 6 punct	color:blue
# visual-style 2 9 punct	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
1	我哋	_	PRON	_	_	2	nsubj	_	3PL
2	有	_	VERB	_	_	0	root	_	have
3	蘋果	_	NOUN	_	_	2	obj	_	apples
4	、	_	PUNCT	_	_	5	punct	_	_
5	梨	_	NOUN	_	_	3	conj	_	pears
6	、	_	PUNCT	_	_	8	punct	_	_
7	同	_	CCONJ	_	_	8	cc	_	and
8	香蕉	_	NOUN	_	_	3	conj	_	bananas
9	。	_	PUNCT	_	_	2	punct	_	_

1	"We	_	_	_	_	0	_	_	_
2	have	_	_	_	_	0	_	_	_
3	apples,	_	_	_	_	0	_	_	_
4	pears,	_	_	_	_	0	_	_	_
5	and	_	_	_	_	0	_	_	_
6	bananas."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 2 5 punct	color:blue
# visual-style 8 11 punct	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
1	雖然	_	SCONJ	_	_	2	mark	_	although
2	遲	_	ADJ	_	_	8	advcl	_	late
3	咗	_	AUX	_	_	2	aux	_	PERF
4	啲	_	ADV	_	_	2	advmod	_	a-bit
5	，	_	PUNCT	_	_	2	punct	_	_
6	但係	_	CCONJ	_	_	8	cc	_	but
7	仲	_	ADV	_	_	8	advmod	_	still
8	有	_	VERB	_	_	0	root	_	have
9	機會	_	NOUN	_	_	8	obj	_	chance
10	嘅	_	PART	_	_	8	discourse:sp	_	SP
11	。	_	PUNCT	_	_	8	punct	_	_

1	"Although	_	_	_	_	0	_	_	_
2	it's	_	_	_	_	0	_	_	_
3	a	_	_	_	_	0	_	_	_
4	bit	_	_	_	_	0	_	_	_
5	late,	_	_	_	_	0	_	_	_
6	there's	_	_	_	_	0	_	_	_
7	still	_	_	_	_	0	_	_	_
8	a	_	_	_	_	0	_	_	_
9	chance."	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 2 1 punct	color:blue
# visual-style 2 3 punct	color:blue
# visual-style 8 4 punct	color:blue
# visual-style 8 7 punct	color:blue
# visual-style 8 9 punct	color:blue
# visual-style 8 10 punct	color:blue
# visual-style 17 18 punct	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
1	《	_	PUNCT	_	_	2	punct	_	_
2	紅樓夢	_	PROPN	_	_	17	nsubj	_	Dream-of-the-Red-Chamber
3	》	_	PUNCT	_	_	2	punct	_	_
4	，	_	PUNCT	_	_	8	punct	_	_
5	原	_	ADJ	_	_	6	amod	_	original
6	名	_	NOUN	_	_	8	nsubj	_	name
7	《	_	PUNCT	_	_	8	punct	_	_
8	石頭記	_	PROPN	_	_	2	parataxis	_	Records-of-the-Stone
9	》	_	PUNCT	_	_	8	punct	_	_
10	，	_	PUNCT	_	_	8	punct	_	_
11	係	_	VERB	_	_	17	cop	_	be
12	中國	_	PROPN	_	_	15	nmod	_	China
13	四	_	NUM	_	_	15	nummod	_	four
14	大	_	ADJ	_	_	15	amod	_	big
15	小説	_	NOUN	_	_	17	nmod	_	novel
16	之	_	PART	_	_	15	case	_	GEN
17	一	_	NUM	_	_	0	root	_	one
18	。	_	PUNCT	_	_	17	punct	_	_

1	"Dream	_	_	_	_	0	_	_	_
2	of	_	_	_	_	0	_	_	_
3	the	_	_	_	_	0	_	_	_
4	Red	_	_	_	_	0	_	_	_
5	Chamber,	_	_	_	_	0	_	_	_
6	originally	_	_	_	_	0	_	_	_
7	titled	_	_	_	_	0	_	_	_
8	Records	_	_	_	_	0	_	_	_
9	of	_	_	_	_	0	_	_	_
10	the	_	_	_	_	0	_	_	_
11	Stone,	_	_	_	_	0	_	_	_
12	is	_	_	_	_	0	_	_	_
13	one	_	_	_	_	0	_	_	_
14	of	_	_	_	_	0	_	_	_
15	China's	_	_	_	_	0	_	_	_
16	four	_	_	_	_	0	_	_	_
17	great	_	_	_	_	0	_	_	_
18	novels."	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated Út zář 29 20:23:43 CEST 2020 -->
