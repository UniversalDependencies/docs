---
layout: base
title:  'Statistics of nsubj in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `nsubj`

This relation is universal.
There are 2 language-specific subtypes of `nsubj`: <tt><a href="fr_sequoia-dep-nsubj-caus.html">nsubj:caus</a></tt>, <tt><a href="fr_sequoia-dep-nsubj-pass.html">nsubj:pass</a></tt>.

2858 nodes (4%) are attached to their parents as `nsubj`.

2755 instances of `nsubj` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.68579426172148.

The following 21 pairs of parts of speech are connected with `nsubj`: <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (1100; 38% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (1094; 38% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (215; 8% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (132; 5% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (114; 4% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (69; 2% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (57; 2% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (25; 1% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (11; 0% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (11; 0% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (8; 0% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (8; 0% instances), <tt><a href="fr_sequoia-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="fr_sequoia-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj	color:blue
1	M.	monsieur	NOUN	_	Gender=Masc|Number=Sing	3	nsubj	_	_
2	Hosneld	Hosneld	PROPN	_	_	1	flat:name	_	_
3	avait	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
4	44	44	NUM	_	NumType=Card	5	nummod	_	_
5	ans	an	NOUN	_	Gender=Masc|Number=Plur	3	obj	_	SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Nous	il	PRON	_	Number=Plur|Person=1	2	nsubj	_	_
2	devrions	devoir	VERB	_	Mood=Cnd|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	prendre	prendre	VERB	_	VerbForm=Inf	2	xcomp	_	_
4	cela	cela	PRON	_	Number=Sing|PronType=Dem	3	obj	_	_
5	à	à	ADP	_	_	7	case	_	_
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	sérieux	sérieux	ADJ	_	Gender=Masc	3	obl:arg	_	SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj	color:blue
1	L'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	2	det	_	SpaceAfter=No
2	EBM	EBM	PROPN	_	Number=Sing	4	nsubj	_	_
3	s'	se	PRON	_	Person=3|Reflex=Yes	4	expl:comp	_	SpaceAfter=No
4	inclina	incliner	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	devant	devant	ADP	_	_	6	case	_	_
6	Joeuf	Joeuf	PROPN	_	Gender=Masc|Number=Sing	4	obl:mod	_	_
7	par	par	ADP	_	_	8	case	_	_
8	70-61	70-61	NOUN	_	NumType=Card	4	obl:mod	_	SpaceAfter=No
9	.	.	PUNCT	_	_	4	punct	_	_

~~~


