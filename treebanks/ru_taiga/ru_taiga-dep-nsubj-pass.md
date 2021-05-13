---
layout: base
title:  'Statistics of nsubj:pass in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="ru_taiga-dep-nsubj.html">nsubj</a></tt>.

590 nodes (0%) are attached to their parents as `nsubj:pass`.

417 instances of `nsubj:pass` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.37966101694915.

The following 9 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (457; 77% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (96; 16% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (11; 2% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-DET.html">DET</a></tt> (9; 2% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (5; 1% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-SYM.html">SYM</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj:pass	color:blue
1	Либеральные	либеральный	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	2	amod	_	_
2	сердца	сердце	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Plur	3	nsubj:pass	_	_
3	разбиты	разбить	VERB	_	Aspect=Perf|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
4	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nsubj:pass	color:blue
1	Что	что	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Int	5	nsubj:pass	_	_
2	у	у	ADP	_	_	3	case	_	_
3	нас	мы	PRON	_	Case=Gen|Number=Plur|Person=1|PronType=Prs	5	obl	_	_
4	сейчас	сейчас	ADV	_	Degree=Pos|PronType=Dem	5	advmod	_	_
5	ловится	ловить	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
6	?	?	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nsubj:pass	color:blue
1	Рома	Рома	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	5	nsubj:pass	_	_
2	один	один	NUM	_	Case=Nom|Gender=Masc|Number=Sing|NumForm=Word|NumType=Card	5	xcomp	_	_
3	за	за	ADP	_	_	4	case	_	_
4	5х	5	NUM	_	Animacy=Anim|Case=Acc|NumForm=Combi|NumType=Sets	2	nmod	_	_
5	считается	считать	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
6	😂	😂	SYM	_	_	5	discourse	_	_

~~~


