---
layout: relation
title: 'csubj'
shortdef: 'clausal subject'
udver: '2'
---

The `csubj` relation is used when the subject of a clause is a clause in itself. 

~~~ conllu
# visual-style 3 6 csubj        color:blue
# visual-style 3        bgColor:blue
# visual-style 3        fgColor:white
# visual-style 6        bgColor:blue
# visual-style 6        fgColor:white
1	a	à	PRON	pers	_	3	nsubj	_	_
2	ka	ká	AUX	pm	_	3	aux	_	_
3	gèlèn	gɛ̀lɛn	VERB	vq/adj	_	0	conj	_	_
4	a	à	PRON	pers	_	6	nsubj	_	_
5	ka	ká	AUX	pm	_	6	aux	_	_
6	balo	bálo	VERB	v	_	3	csubj	_	_
7	.	.	PUNCT	_	_	3	punct	_	_

~~~
'It is difficult to feed him'.
<!-- Interlanguage links updated Út zář 29 20:31:49 CEST 2020 -->
