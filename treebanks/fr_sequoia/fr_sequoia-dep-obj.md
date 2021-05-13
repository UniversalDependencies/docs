---
layout: base
title:  'Statistics of obj in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `obj`

This relation is universal.
There are 1 language-specific subtypes of `obj`: <tt><a href="fr_sequoia-dep-obj-agent.html">obj:agent</a></tt>.

2227 nodes (3%) are attached to their parents as `obj`.

1980 instances of `obj` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.42568477772789.

The following 6 pairs of parts of speech are connected with `obj`: <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (1836; 82% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (283; 13% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (76; 3% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt> (19; 1% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (7; 0% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (6; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obj	color:blue
1	M.	monsieur	NOUN	_	Gender=Masc|Number=Sing	3	nsubj	_	_
2	Hosneld	Hosneld	PROPN	_	_	1	flat:name	_	_
3	avait	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
4	44	44	NUM	_	NumType=Card	5	nummod	_	_
5	ans	an	NOUN	_	Gender=Masc|Number=Plur	3	obj	_	SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obj	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 obj	color:blue
1	N'	ne	ADV	_	Polarity=Neg	2	advmod	_	SpaceAfter=No
2	utilisez	utiliser	VERB	_	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
3	jamais	jamais	ADV	_	Polarity=Neg	2	advmod	_	_
4	Angiox	Angiox	PROPN	_	_	2	obj	_	_
5	:	:	PUNCT	_	_	2	punct	_	_

~~~


