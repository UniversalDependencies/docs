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
3	過嚟	_	VERB	_	_	0	root	_	come-over
4	吖	_	PART	_	_	3	discourse:sp	_	SP

1	"Grandpa,	_	_	_	_	0	_	_	_
2	come	_	_	_	_	0	_	_	_
3	over	_	_	_	_	0	_	_	_
4	here!"	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 2 5 vocative	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	你	_	PRON	_	_	2	nsubj	_	2SG
2	放心	_	VERB	_	_	0	root	_	rest-assured
3	啦	_	PART	_	_	2	discourse:sp	_	SP
4	，	_	PUNCT	_	_	5	punct	_	_
5	校長	_	NOUN	_	_	2	vocative	_	principal

1	"Rest	_	_	_	_	0	_	_	_
2	assured,	_	_	_	_	0	_	_	_
3	Principal."	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated Pá kvě 14 11:09:22 CEST 2021 -->
