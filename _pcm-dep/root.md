---
layout: relation
title: 'root'
shortdef: 'root'
udver: '2'
---

The `root` relation is used between the fake node ROOT (which is not represented explicitly in the CoNLL-U) at index 0, and the root of the sentence which is being analyzed. There should only be one node with the root dependency relation in every tree.

~~~ conllu
# visual-style 0 1 root	color:blue
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1 fgColor:white
0	ROOT	_	_	_	_	0	_	_	_
1	thank	thank	VERB	VERB	_	0	root	_	_
2	you	you	PRON	PRON	_	4	obj	_	_
3	very	very	ADV	ADV	_	4	advmod	_	_
4	much	much	ADV	ADV	_	1	advmod	_	_
~~~
