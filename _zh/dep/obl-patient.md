---
layout: relation
title: 'obl:patient'
shortdef: 'object in BA construction'
udver: '2'
---

The relation `obl:patient` is used for the Mandarin "BA construction" (also known as the "disposal construction"). Objects marked (and raised to preverbal-position) by 把 _bǎ_ or the more formal version 將 _jiāng_ take the main verb as their head, while the objects themselves serve as the head of 把 _bǎ_ or 將 _jiāng_ (tagged as [ADP]()).

~~~ conllu
# visual-style 3 2 obl:patient	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	把	_	ADP	_	_	2	case	_	Translit=bǎ|Gloss=BA
2	它	_	PRON	_	_	3	obl:patient	_	Translit=tā|Gloss=3SG.N
3	印	_	VERB	_	_	0	root	_	Translit=yìn|Gloss=print
4	出來	_	VERB	_	_	3	compound:dir	_	Translit=chūlái|Gloss=come-out

1	"print	_	_	_	_	0	_	_	_
2	it	_	_	_	_	0	_	_	_
3	out"	_	_	_	_	0	_	_	_

~~~

<!-- Interlanguage links updated Út zář 29 20:32:00 CEST 2020 -->
