---
layout: base
title:  'Statistics of dep in UD_Spanish-COSER'
udver: '2'
---

## Treebank Statistics: UD_Spanish-COSER: Relations: `dep`

This relation is universal.

2 nodes (0%) are attached to their parents as `dep`.

1 instances of `dep` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 2 pairs of parts of speech are connected with `dep`: <tt><a href="es_coser-pos-ADP.html">ADP</a></tt>-<tt><a href="es_coser-pos-X.html">X</a></tt> (1; 50% instances), <tt><a href="es_coser-pos-VERB.html">VERB</a></tt>-<tt><a href="es_coser-pos-X.html">X</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 dep	color:blue
1	en	en	ADP	_	_	4	parataxis	_	_
2	cuan	cuan	X	_	_	1	dep	_	SpaceAfter=No
3	...	...	PUNCT	_	PunctType=Comm	1	punct	_	_
4	económicamente	económicamente	ADV	_	_	0	root	_	_
5	sí	sí	INTJ	_	_	4	advcl	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 dep	color:blue
1	Apar	apar	X	fs	_	4	dep	_	SpaceAfter=No
2	,	,	PUNCT	fc	PunctType=Comm	1	punct	_	_
3	¿	¿	PUNCT	fia	PunctSide=Ini|PunctType=Qest	4	punct	_	SpaceAfter=No
4	Ves	ver	VERB	np00000	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
5	?	?	PUNCT	fit	PunctSide=Fin|PunctType=Qest	4	punct	_	_

~~~


