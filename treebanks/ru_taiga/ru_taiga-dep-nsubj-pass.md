---
layout: base
title:  'Statistics of nsubj:pass in UD_Russian-Taiga'
udver: '2'
---

## Treebank Statistics: UD_Russian-Taiga: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="ru_taiga-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="ru_taiga-dep-nsubj-outer.html">nsubj:outer</a></tt>.

6892 nodes (0%) are attached to their parents as `nsubj:pass`.

4678 instances of `nsubj:pass` (68%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.9024956471271.

The following 14 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (5297; 77% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (989; 14% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-DET.html">DET</a></tt> (256; 4% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (151; 2% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-NOUN.html">NOUN</a></tt> (85; 1% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (49; 1% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-PRON.html">PRON</a></tt> (25; 0% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-NUM.html">NUM</a></tt> (11; 0% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt> (11; 0% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-X.html">X</a></tt> (6; 0% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-PROPN.html">PROPN</a></tt> (5; 0% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="ru_taiga-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_taiga-pos-SYM.html">SYM</a></tt> (3; 0% instances), <tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_taiga-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nsubj:pass	color:blue
1	Двери	дверь	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	5	nsubj:pass	_	_
2	и	и	CCONJ	_	_	3	cc	_	_
3	окна	окно	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Plur	1	conj	_	_
4	были	быть	AUX	_	Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	5	aux:pass	_	feat="Transit=Intr"|_
5	открыты	открыть	VERB	_	Aspect=Perf|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	feat="Transit=Tran"|_
6	настежь	настежь	ADV	_	Degree=Pos	5	advmod	_	SpaceAfter=No
7	.	.	PUNCT	_	_	5	punct	_	_

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
5	ловится	ловиться	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	SpaceAfter=No
6	?	?	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:pass	color:blue
1	Весь	весь	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Tot	2	nsubj:pass	_	_
2	сделан	сделать	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
3	из	из	ADP	_	_	4	case	_	_
4	металлолома	металлолом	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	obl	_	SpaceAfter=No
5	.	.	PUNCT	_	_	2	punct	_	_

~~~


