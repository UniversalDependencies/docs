---
layout: relation
title: 'root'
shortdef: 'root'
udver: '2'
---

The `root` relation is used between the fake node ROOT (which is not represented explicitly in the CoNLL-U) at index 0, and the root of the sentence which is being analyzed. There should only be one node with the `root` dependency relation in every tree.

~~~ conllu
# visual-style 1 2 root	color:blue
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1 fgColor:white
1	ROOT	_	_	_	_	0	_	_	_
2	thank	thank	VERB	VERB	_	1	root	_	_
3	you	you	PRON	PRON	_	2	obj	_	_
4	very	very	ADV	ADV	_	5	advmod	_	_
5	much	much	ADV	ADV	_	2	advmod	_	_
~~~
<!-- Interlanguage links updated Út zář 29 20:32:02 CEST 2020 -->
