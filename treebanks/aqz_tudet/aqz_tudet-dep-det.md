---
layout: base
title:  'Statistics of det in UD_Akuntsu-TuDeT'
udver: '2'
---

## Treebank Statistics: UD_Akuntsu-TuDeT: Relations: `det`

This relation is universal.

7 nodes (1%) are attached to their parents as `det`.

4 instances of `det` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `det`: <tt><a href="aqz_tudet-pos-PRON.html">PRON</a></tt>-<tt><a href="aqz_tudet-pos-PRON.html">PRON</a></tt> (3; 43% instances), <tt><a href="aqz_tudet-pos-ADV.html">ADV</a></tt>-<tt><a href="aqz_tudet-pos-PRON.html">PRON</a></tt> (2; 29% instances), <tt><a href="aqz_tudet-pos-DET.html">DET</a></tt>-<tt><a href="aqz_tudet-pos-PRON.html">PRON</a></tt> (2; 29% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	i	i	PRON	pron	Person=3	2	det	_	_
2	no	no	PRON	pron	PronType=Ind	4	parataxis	_	_
3	,	,	PUNCT	punct	_	2	punct	_	_
4	ikora	kora	VERB	vt	Person=3	0	root	_	_
5	en	en	PRON	pron	Number=Sing|Person=2|PronType=Prs	4	nsubj	_	_
6	.	.	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 det	color:blue
1	ebapa	ebapa	ADV	n	_	7	advmod	_	_
2	no	no	PRON	pron	PronType=Ind	1	det	_	_
3	,	,	PUNCT	punct	_	1	punct	_	_
4	ebapa	ebapa	ADV	n	_	1	conj	_	_
5	no	no	PRON	pron	PronType=Ind	4	det	_	_
6	,	,	PUNCT	punct	_	4	punct	_	_
7	teita	ita	VERB	vi	Person=3|Reflex=Yes	0	root	_	_
8	.	.	PUNCT	punct	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 det	color:blue
1	tojẽpit	tojẽpit	NOUN	n	_	6	nsubj	_	_
2	,	,	PUNCT	punct	_	1	punct	_	_
3	jẽ	jẽ	DET	dem	Deixis=Prox	1	parataxis	_	_
4	no	no	PRON	pron	PronType=Ind	3	det	_	_
5	,	,	PUNCT	punct	_	4	punct	_	_
6	iat	at	VERB	vt	Person=3	0	root	_	_
7	.	.	PUNCT	punct	_	6	punct	_	_

~~~


