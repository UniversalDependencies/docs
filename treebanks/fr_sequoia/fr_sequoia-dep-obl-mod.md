---
layout: base
title:  'Statistics of obl:mod in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `obl:mod`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `obl`: <tt><a href="fr_sequoia-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="fr_sequoia-dep-obl-arg.html">obl:arg</a></tt>.

2353 nodes (3%) are attached to their parents as `obl:mod`.

1682 instances of `obl:mod` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.25329366765831.

The following 21 pairs of parts of speech are connected with `obl:mod`: <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (1745; 74% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (179; 8% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (133; 6% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (116; 5% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (57; 2% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (50; 2% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt> (25; 1% instances), <tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (11; 0% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (9; 0% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (6; 0% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="fr_sequoia-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 obl:mod	color:blue
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


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 obl:mod	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	procès	procès	NOUN	_	Gender=Masc|Number=Sing	3	nsubj	_	_
3	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	lieu	lieu	NOUN	_	Gender=Masc|Number=Sing	3	obj	_	_
5	à	à	ADP	_	_	6	case	_	_
6	Brazzaville	Brazzaville	PROPN	_	Gender=Masc|Number=Sing	3	obl:arg	_	_
7	en	en	ADP	_	_	8	case	_	_
8	2005	2005	NUM	_	NumType=Card	3	obl:mod	_	SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:mod	color:blue
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


