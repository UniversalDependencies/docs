---
layout: base
title:  'Statistics of det in UD_Norwegian-Nynorsk'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Nynorsk: Relations: `det`

This relation is universal.

14135 nodes (5%) are attached to their parents as `det`.

13932 instances of `det` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.61365405022993.

The following 12 pairs of parts of speech are connected with `det`: <tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsk-pos-DET.html">DET</a></tt> (12746; 90% instances), <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-DET.html">DET</a></tt> (807; 6% instances), <tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsk-pos-DET.html">DET</a></tt> (182; 1% instances), <tt><a href="no_nynorsk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsk-pos-DET.html">DET</a></tt> (158; 1% instances), <tt><a href="no_nynorsk-pos-DET.html">DET</a></tt>-<tt><a href="no_nynorsk-pos-DET.html">DET</a></tt> (149; 1% instances), <tt><a href="no_nynorsk-pos-NUM.html">NUM</a></tt>-<tt><a href="no_nynorsk-pos-DET.html">DET</a></tt> (72; 1% instances), <tt><a href="no_nynorsk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt> (8; 0% instances), <tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt> (7; 0% instances), <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="no_nynorsk-pos-DET.html">DET</a></tt>-<tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="no_nynorsk-pos-NUM.html">NUM</a></tt>-<tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="no_nynorsk-pos-X.html">X</a></tt>-<tt><a href="no_nynorsk-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Ein	ein	DET	det	Gender=Masc|PronType=Art	2	det	_	_
2	avocado	avokado	NOUN	subst	Definite=Ind|Gender=Masc	0	root	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Det	det	DET	det	Gender=Neut|PronType=Dem	2	det	_	_
2	enklaste	enkel	ADJ	adj	Degree=Sup	0	root	_	SpaceAfter=No
3	...	$...	PUNCT	clb	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 det	color:blue
1	Dei	dei	PRON	pron	Animacy=Hum|Case=Nom|Number=Plur|Person=3|PronType=Prs	3	nsubj	_	_
2	får	få	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	svare	svare	VERB	verb	VerbForm=Inf	0	root	_	_
4	for	for	ADP	prep	_	5	case	_	_
5	seg	seg	PRON	pron	Case=Acc|PronType=Prs	3	obl	_	_
6	sjølve	sjølve	DET	det	PronType=Prs	5	det	_	SpaceAfter=No
7	.	$.	PUNCT	clb	_	3	punct	_	_

~~~


