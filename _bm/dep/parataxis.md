---
layout: relation
title: 'parataxis'
shortdef: 'parataxis'
udver: '2'
---

The relation `parataxis` is used for a pair of what could have been standalone sentences, but which are being treated together as a single sentence.



~~~ conllu
# visual-style 3 6 parataxis	color:blue
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
1	mansakè	màsakɛ̀	NOUN	_	_	3	nsubj	_	_
2	dò	dɔ́	DET	_	_	1	det	_	_
3	don	dòn	VERB	_	_	0	root	_	_
4	kurun	kùrun	NOUN	_	_	6	nsubj	_	_
5	dò	dɔ́	DET	_	_	4	det	_	_
6	bè	bɛ́	VERB	_	_	3	parataxis	_	_
7	a	à	PRON	_	_	6	obl	_	_
8	rò	rɔ́	ADP	_	_	7	case	_	_
9	.	.	PUNCT	_	_	3	punct	_	_

~~~
'There is a king, he has a boat'.

The relation [parataxis:obj]() link is used for a direct speech.

~~~ conllu
# visual-style 2 4 parataxis:obj	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
1	a	à	PRON	_	_	2	nsubj	_	_
2	ko	kó	VERB	_	_	0	root	_	_
3	baasi	báasi	NOUN	_	_	4	nsubj	_	_
4	tè	tɛ́	VERB	_	_	2	parataxis:obj	_	_
5	.	.	PUNCT	_	_	2	punct	_	_

~~~
'He said: "There is no problem"'.
<!-- Interlanguage links updated Út zář 29 20:43:26 CEST 2020 -->
