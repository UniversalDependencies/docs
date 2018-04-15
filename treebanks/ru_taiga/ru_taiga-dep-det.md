---
layout: base
title:  'Statistics of det in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `det`

This relation is universal.

481 nodes (2%) are attached to their parents as `det`.

443 instances of `det` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.35550935550936.

The following 9 pairs of parts of speech are connected with `det`: <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-DET.html">DET</a></tt> (437; 91% instances), <tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_taiga-pos-DET.html">DET</a></tt> (18; 4% instances), <tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_taiga-pos-DET.html">DET</a></tt> (17; 4% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="ru_taiga-pos-ADP.html">ADP</a></tt>-<tt><a href="ru_taiga-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="ru_taiga-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ru_taiga-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Все	весь	DET	_	Case=Nom|Number=Plur	2	det	_	_
2	вопросы	вопрос	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	0	root	_	_
3	по	по	ADP	_	_	4	case	_	_
4	телефону	телефон	NOUN	_	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing	2	orphan	_	_
5	87778830353	87778830353	NUM	_	_	4	nummod:entity	_	SpaceAfter=No
6	!	!	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 det	color:blue
1	...	...	PUNCT	_	_	5	punct	_	SpaceAfter=No
2	ВЫ	вы	PRON	_	Case=Nom|Number=Plur|Person=2	5	nsubj	_	_
3	ВЕДЬ	ведь	PART	_	_	2	advmod	_	_
4	ВСЕ	весь	DET	_	Case=Nom|Number=Plur	2	det	_	_
5	ХОТЕЛИ	хотеть	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	ПРАВДЫ	правда	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	5	obj	_	SpaceAfter=No
7	!	!	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 det	color:blue
1	Того	тот	DET	_	Case=Gen|Gender=Masc|Number=Sing	3	det	_	_
2	же	же	PART	_	_	1	advmod	_	_
3	Юрия	Юрий	PROPN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	0	root	_	_
4	Семина	Семин	PROPN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	3	flat:name	_	SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	_	_
6	моего	мой	DET	_	Case=Gen|Gender=Masc|Number=Sing	7	det	_	_
7	земляка	земляк	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	3	appos	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


