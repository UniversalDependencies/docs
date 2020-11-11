---
layout: base
title:  'Statistics of nsubj:pass in UD_Belarusian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Belarusian-HSE: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="be_hse-dep-nsubj.html">nsubj</a></tt>.

495 nodes (0%) are attached to their parents as `nsubj:pass`.

295 instances of `nsubj:pass` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.48686868686869.

The following 14 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (371; 75% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-PRON.html">PRON</a></tt> (66; 13% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-PROPN.html">PROPN</a></tt> (29; 6% instances), <tt><a href="be_hse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-ADJ.html">ADJ</a></tt> (5; 1% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-DET.html">DET</a></tt> (5; 1% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-NUM.html">NUM</a></tt> (5; 1% instances), <tt><a href="be_hse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="be_hse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="be_hse-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="be_hse-pos-ADV.html">ADV</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="be_hse-pos-NUM.html">NUM</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nsubj:pass	color:blue
1	Затрыманыя	затрымаць	VERB	VBNL	Aspect=Perf|Case=Nom|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
2	трое	трое	NUM	CD	Case=Nom|NumType=Sets	1	nummod:gov	_	_
3	ўдзельнікаў	удзельнік	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	1	nsubj:pass	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nsubj:pass	color:blue
1	У	у	ADP	IN	_	3	case	_	_
2	2016	2016	ADJ	ORD	_	3	amod	_	_
3	годзе	год	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	6	obl	_	_
4	яны	яны	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	6	nsubj:pass	_	_
5	былі	быць	AUX	VBC	Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	6	aux:pass	_	_
6	аслабленыя	аслабіць	VERB	VBNH	Aspect=Perf|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 nsubj:pass	color:blue
1	Вызвалены	вызваліць	VERB	VBNL	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
2	затрыманы	затрымаць	VERB	VBNH	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	9	acl	_	_
3	ў	у	ADP	IN	_	4	case	_	_
4	справе	справа	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	2	obl	_	_
5	«	«	PUNCT	PUNCT	_	7	punct	_	SpaceAfter=No
6	Белага	белы	ADJ	JJL	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	_
7	Легіёну	Легіён	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	SpaceAfter=No
8	»	»	PUNCT	PUNCT	_	7	punct	_	_
9	Сяргей	Сяргей	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	1	nsubj:pass	_	_
10	Стрыбульскі	Стрыбульскі	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	9	flat:name	_	_

~~~


