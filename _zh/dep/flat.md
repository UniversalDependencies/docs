---
layout: relation
title: 'flat'
shortdef: 'flat multiword expression'
udver: '2'
---

The `flat` relation is used to link names without internal structure (unlikely in Chinese names but may be found in fully transliterated foreign names; see 1), foreign phrases whose syntactic structure is not known or not meant to be analyzed (2), and dates (3). The first word is the head of all other words.

~~~ conllu
# visual-style 1 3 flat	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	弗羅倫斯	_	PROPN	_	_	0	root	_	Florence
2	·	_	PUNCT	_	_	3	punct	_	_
3	南丁格爾	_	PROPN	_	_	1	flat	_	Nightingale

1	"Florence	_	_	_	_	0	_	_	_
2	Nightingale"	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 7 8 flat	color:blue
# visual-style 7 9 flat	color:blue
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
1	他	_	PRON	_	_	4	nsubj	_	3SG.M
2	用	_	ADP	_	_	3	case	_	in
3	克林貢語	_	NOUN	_	_	4	obl	_	Klingon
4	説	_	VERB	_	_	0	root	_	say
5	：	_	PUNCT	_	_	7	punct	_	_
6	「	_	PUNCT	_	_	7	punct	_	_
7	lupDujHomwIj	_	X	_	_	4	parataxis	_	_
8	luteb	_	X	_	_	7	flat	_	_
9	gharghmey	_	X	_	_	7	flat	_	_
10	。	_	PUNCT	_	_	7	punct	_	_
11	」	_	PUNCT	_	_	7	punct	_	_

1	"He	_	_	_	_	0	_	_	_
2	said	_	_	_	_	0	_	_	_
3	in	_	_	_	_	0	_	_	_
4	Klingon,	_	_	_	_	0	_	_	_
5	'lupDujHomwIj	_	_	_	_	0	_	_	_
6	luteb	_	_	_	_	0	_	_	_
7	gharghmey.'	_	_	_	_	0	_	_	_
8	"	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 1 2 flat	color:blue
# visual-style 1 3 flat	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	2012年	_	NOUN	_	_	0	root	_	year-2012
2	5月	_	NOUN	_	_	1	flat	_	month-5
3	6日	_	NOUN	_	_	1	flat	_	day-6

1	"6	_	_	_	_	0	_	_	_
2	May	_	_	_	_	0	_	_	_
3	2012"	_	_	_	_	0	_	_	_

~~~
<!-- Interlanguage links updated Út zář 29 20:23:32 CEST 2020 -->
