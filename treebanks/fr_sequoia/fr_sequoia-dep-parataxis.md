---
layout: base
title:  'Statistics of parataxis in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `parataxis`

This relation is universal.

145 nodes (0%) are attached to their parents as `parataxis`.

134 instances of `parataxis` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 12.7655172413793.

The following 18 pairs of parts of speech are connected with `parataxis`: <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (52; 36% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (27; 19% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (18; 12% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (9; 6% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (9; 6% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (7; 5% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (5; 3% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 parataxis	color:blue
1	Imposé	imposer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
2	à	à	ADP	_	_	4	case	_	_
3	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	peuple	peuple	NOUN	_	Gender=Masc|Number=Sing	1	obl:arg	_	_
5	irakien	irakien	ADJ	_	Gender=Masc|Number=Sing	4	amod	_	SpaceAfter=No
6	,	,	PUNCT	_	_	1	punct	_	_
7	devrais	devoir	VERB	_	Mood=Cnd|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	1	parataxis	_	SpaceAfter=No
8	-je	il	PRON	_	Number=Sing|Person=1	7	nsubj	_	_
9	dire	dire	VERB	_	VerbForm=Inf	7	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 parataxis	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	président	président	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
3	Simon	Simon	PROPN	_	Gender=Masc|Number=Sing	2	flat:name	_	_
4	:	:	PUNCT	_	_	2	punct	_	_
5	rien	rien	PRON	_	Number=Sing	8	nsubj	_	_
6	ne	ne	ADV	_	Polarity=Neg	8	advmod	_	_
7	lui	lui	PRON	_	Number=Sing|Person=3	8	iobj	_	_
8	échappe	échapper	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	parataxis	_	_
9	!	!	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 parataxis	color:blue
1	À	à	ADP	_	_	6	advmod	_	EXTPOS=ADV|MWE=au_moins
2	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	1	fixed	_	_
3	moins	moins	ADV	_	_	1	fixed	_	_
4	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
5	nouvelle	nouveau	ADJ	_	Gender=Fem|Number=Sing	6	amod	_	_
6	fracture	fracture	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
7	vertébrale	vertébral	ADJ	_	Gender=Fem|Number=Sing	6	amod	_	_
8	(	(	PUNCT	_	_	6	punct	_	SpaceAfter=No
9	0-3	0-3	NUM	_	NumType=Card	10	nummod	_	_
10	ans	an	NOUN	_	Gender=Masc|Number=Plur	6	parataxis	_	SpaceAfter=No
11	)	)	PUNCT	_	_	6	punct	_	_

~~~


