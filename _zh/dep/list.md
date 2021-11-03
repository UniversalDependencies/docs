---
layout: relation
title: 'list'
shortdef: 'list'
udver: '2'
---

The list relation is used for chains of comparable items. In lists with more than two items, all items of the list should modify the first one. Informal and web texts often contain passages which are meant to be interpreted as lists but are parsed as single sentences. Email signatures often contain these structures, in the form of contact information: the different contact information items are labeled as `list`; the key-value pair relations are labeled as [`appos`]().

~~~ conllu
# visual-style 1 2 list	color:blue
# visual-style 1 5 list	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
1	李四	_	PROPN	_	_	0	root	_	Lǐ-Sì
2	電話	_	NOUN	_	_	1	list	_	phone
3	：	_	PUNCT	_	_	4	punct	_	_
4	2540-5654	_	NOUN	_	_	2	appos	_	_
5	電郵	_	NOUN	_	_	1	list	_	e-mail
6	：	_	PUNCT	_	_	7	punct	_	_
7	lisi@lisimail.com	_	NOUN	_	_	5	appos	_	_

1	"Lǐ	_	_	_	_	0	_	_	_
2	Sì	_	_	_	_	0	_	_	_
3	Phone:	_	_	_	_	0	_	_	_
4	2540-5654	_	_	_	_	0	_	_	_
5	E-mail:	_	_	_	_	0	_	_	_
6	lisi@lisimail.com"	_	_	_	_	0	_	_	_

~~~

Another place where `list` has been used is for a sequence of attributes or descriptive terms used as the title line of a review (such as product or restaurant reviews, etc.:

~~~ conllu
# visual-style 1 5 list	color:blue
# visual-style 1 8 list	color:blue
# visual-style 1 11 list	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
1	難吃	_	ADJ	_	_	0	root	_	unsavory
2	，	_	PUNCT	_	_	5	punct	_	_
3	服務	_	NOUN	_	_	4	compound	_	service
4	態度	_	NOUN	_	_	5	nsubj	_	attitude
5	差	_	ADJ	_	_	1	list	_	poor
6	，	_	PUNCT	_	_	8	punct	_	_
7	環境	_	NOUN	_	_	8	nsubj	_	atmosphere
8	差劣	_	ADJ	_	_	1	list	_	poor
9	，	_	PUNCT	_	_	11	punct	_	_
10	價錢	_	NOUN	_	_	11	nsubj	_	price
11	昂貴	_	ADJ	_	_	1	list	_	expensive

1	"unsavory,	_	_	_	_	0	_	_	_
2	poor	_	_	_	_	0	_	_	_
3	service,	_	_	_	_	0	_	_	_
4	poor	_	_	_	_	0	_	_	_
5	atmosphere,	_	_	_	_	0	_	_	_
6	expensive"	_	_	_	_	0	_	_	_

~~~

However, `list` should not be over-used. If a construction can be easily analyzed using the grammatical relations of standard sentences, such as when there is overt coordination, then it should be analyzed with these more standard relations, even if it is laid out as a list typographically.
<!-- Interlanguage links updated St lis 3 20:58:56 CET 2021 -->
