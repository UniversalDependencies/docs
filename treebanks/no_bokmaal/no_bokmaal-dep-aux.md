---
layout: base
title:  'Statistics of aux in UD_Norwegian-Bokmaal'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Bokmaal: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="no_bokmaal-dep-aux-pass.html">aux:pass</a></tt>.

8858 nodes (3%) are attached to their parents as `aux`.

8835 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.804696319711.

The following 9 pairs of parts of speech are connected with `aux`: <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-AUX.html">AUX</a></tt> (8143; 92% instances), <tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_bokmaal-pos-AUX.html">AUX</a></tt> (361; 4% instances), <tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_bokmaal-pos-AUX.html">AUX</a></tt> (252; 3% instances), <tt><a href="no_bokmaal-pos-ADP.html">ADP</a></tt>-<tt><a href="no_bokmaal-pos-AUX.html">AUX</a></tt> (32; 0% instances), <tt><a href="no_bokmaal-pos-ADV.html">ADV</a></tt>-<tt><a href="no_bokmaal-pos-AUX.html">AUX</a></tt> (29; 0% instances), <tt><a href="no_bokmaal-pos-PRON.html">PRON</a></tt>-<tt><a href="no_bokmaal-pos-AUX.html">AUX</a></tt> (21; 0% instances), <tt><a href="no_bokmaal-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_bokmaal-pos-AUX.html">AUX</a></tt> (10; 0% instances), <tt><a href="no_bokmaal-pos-DET.html">DET</a></tt>-<tt><a href="no_bokmaal-pos-AUX.html">AUX</a></tt> (8; 0% instances), <tt><a href="no_bokmaal-pos-NUM.html">NUM</a></tt>-<tt><a href="no_bokmaal-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux	color:blue
1	Dette	dette	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	0	root	_	_
2	uaktet	uaktet	SCONJ	_	_	8	mark	_	_
3	at	at	SCONJ	_	_	8	mark	_	_
4	også	også	ADV	_	_	5	advmod	_	_
5	han	han	PRON	_	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
6	selv	selv	DET	_	PronType=Prs	5	det	_	_
7	har	ha	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	underskrevet	underskrive	VERB	_	VerbForm=Part	1	advcl	_	_
9	dommen	dom	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	8	obj	_	SpaceAfter=No
10	.	$.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 aux	color:blue
1	Starten	start	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	5	nsubj	_	_
2	kunne	kunne	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	5	aux	_	_
3	ha	ha	AUX	_	VerbForm=Inf	5	aux	_	_
4	vært	være	AUX	_	VerbForm=Part	5	cop	_	_
5	bedre	god	ADJ	_	Degree=Cmp	0	root	_	SpaceAfter=No
6	.	$.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 aux	color:blue
1	125-årsdagen	125-årsdag	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	8	nsubj	_	_
2	i	i	ADP	_	_	3	case	_	_
3	dag	dag	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	1	nmod	_	_
4	må	måtte	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	8	aux	_	_
5	være	være	AUX	_	VerbForm=Inf	8	cop	_	_
6	en	en	DET	_	Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
7	blandet	blande	ADJ	_	Definite=Ind|Number=Sing|VerbForm=Part	8	amod	_	_
8	følelse	følelse	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
9	for	for	ADP	_	_	10	case	_	_
10	Høyre	Høyre	PROPN	_	_	8	obl	_	SpaceAfter=No
11	.	$.	PUNCT	_	_	8	punct	_	_

~~~


