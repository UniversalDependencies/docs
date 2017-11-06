---
layout: base
title:  'Statistics of parataxis in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `parataxis`

This relation is universal.

59 nodes (0%) are attached to their parents as `parataxis`.

49 instances of `parataxis` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 12.0847457627119.

The following 8 pairs of parts of speech are connected with `parataxis`: <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (25; 42% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (21; 36% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (3; 5% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (3; 5% instances), <tt><a href="fr_sequoia-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 parataxis	color:blue
1	Imposé	imposer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
2	à	à	ADP	_	_	4	case	_	_
3	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	peuple	peuple	NOUN	_	Gender=Masc|Number=Sing	1	obl	_	_
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 parataxis	color:blue
1	"	"	PUNCT	_	_	5	punct	_	SpaceAfter=No
2	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	bataille	bataille	NOUN	_	Gender=Fem|Number=Sing	5	nsubj	_	_
4	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	dure	dur	ADJ	_	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
6	"	"	PUNCT	_	_	5	punct	_	SpaceAfter=No
7	,	,	PUNCT	_	_	5	punct	_	_
8	reconnaît	reconnaître	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	parataxis	_	SpaceAfter=No
9	-elle	il	PRON	_	Gender=Fem|Number=Sing|Person=3	8	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	_	_	5	punct	_	_

~~~


