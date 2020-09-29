---
layout: relation
title: 'vocative'
shortdef: 'vocative'
udver: '2'
---

We use the `vocative` relation when the speaker of the sentence calls the addressee by their name or appellation, which depends on the head of the main clause.

~~~ conllu
# visual-style 3 1 vocative	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	爺爺	_	NOUN	_	_	3	vocative	_	grandpa
2	，	_	PUNCT	_	_	1	punct	_	_
3	是	_	VERB	_	_	0	root	_	be
4	不	_	ADV	_	_	5	advmod	_	NEG
5	是	_	VERB	_	_	3	conj	_	be
6	很	_	ADV	_	_	7	advmod	_	very
7	累	_	ADJ	_	_	3	ccomp	_	tired
8	？	_	PUNCT	_	_	3	punct	_	_

1	"Grandpa,	_	_	_	_	0	_	_	_
2	you're	_	_	_	_	0	_	_	_
3	tired,	_	_	_	_	0	_	_	_
4	aren't	_	_	_	_	0	_	_	_
5	you?"	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 2 5 vocative	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	你	_	PRON	_	_	2	nsubj	_	2SG
2	放心	_	VERB	_	_	0	root	_	rest-assured
3	吧	_	PART	_	_	2	discourse:sp	_	SP
4	，	_	PUNCT	_	_	5	punct	_	_
5	校長	_	NOUN	_	_	2	vocative	_	principal

1	"Rest	_	_	_	_	0	_	_	_
2	assured,	_	_	_	_	0	_	_	_
3	Principal."	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated Út zář 29 20:23:45 CEST 2020 -->
