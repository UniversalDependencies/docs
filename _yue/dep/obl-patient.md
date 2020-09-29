---
layout: relation
title: 'obl:patient'
shortdef: 'object in ZOENG construction'
udver: '2'
---

The relation `obl:patient` is used for the ZOENG construction (similar to the Mandarin BA construction), where objects marked (and raised to preverbal-position) by 將 _zoeng1_ take the main verb as their head, while the objects themselves serve as the head of 將 _zoeng1_ (tagged as ADP).

~~~ conllu
# visual-style 4 3 obl:patient	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	將	_	ADP	_	_	3	case	_	ZOENG
2	件	_	NOUN	_	_	3	det	_	CLF
3	事	_	NOUN	_	_	4	obl:patient	_	matter
4	搞	_	VERB	_	_	0	root	_	make
5	清楚	_	ADJ	_	_	4	compound:vv	_	clear

1	"make	_	_	_	_	0	_	_	_
2	the	_	_	_	_	0	_	_	_
3	matter	_	_	_	_	0	_	_	_
4	clear"	_	_	_	_	0	_	_	_

~~~

<!-- Interlanguage links updated Út zář 29 20:43:25 CEST 2020 -->
