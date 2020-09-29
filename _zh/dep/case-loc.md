---
layout: relation
title: 'case:loc'
shortdef: 'postpositional localizer'
udver: '2'
---

We treat localizers (方位詞 _fāngwèicí_) as postpositions which typically denote spatial locations analogous to adpositions or case markers in some languages, although a few localizers have further grammaticalized functions denoting temporal and other non-spatial concepts. (See [ADP]() for a list of localizers.)

The head of the localizer is the noun or the main verb of the clause preceding it. Localizers are always tagged [ADP]() (adposition). When it follows a noun, it receives the `case:loc` relation label. But if it follows a clause and acts as a subordinator, it receives the [mark]() relation (but retains the tag [ADP]()).

~~~ conllu
# visual-style 4 5 case:loc	color:blue
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	放	_	VERB	_	_	0	root	_	put
2	在	_	ADP	_	_	4	case	_	on
3	你	_	PRON	_	_	4	nmod	_	2SG
4	桌	_	NOUN	_	_	1	obl	_	table
5	上	_	ADP	_	_	4	case:loc	_	above

1	"put	_	_	_	_	0	_	_	_
2	it	_	_	_	_	0	_	_	_
3	on	_	_	_	_	0	_	_	_
4	your	_	_	_	_	0	_	_	_
5	desk"	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated Út zář 29 20:31:45 CEST 2020 -->
