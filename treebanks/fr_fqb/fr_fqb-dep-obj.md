---
layout: base
title:  'Statistics of obj in UD_French-FQB'
udver: '2'
---

## Treebank Statistics: UD_French-FQB: Relations: `obj`

This relation is universal.

867 nodes (4%) are attached to their parents as `obj`.

628 instances of `obj` (72%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.45444059976932.

The following 10 pairs of parts of speech are connected with `obj`: <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt> (601; 69% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt> (113; 13% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt> (66; 8% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-PROPN.html">PROPN</a></tt> (66; 8% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-X.html">X</a></tt> (16; 2% instances), <tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obj	color:blue
1	Puis	pouvoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
2	-je	il	PRON	_	Number=Sing|Person=1	1	nsubj	_	_
3	avoir	avoir	VERB	_	VerbForm=Inf	1	xcomp	_	_
4	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	aide	aide	NOUN	_	Number=Sing	3	obj	_	_
6	à	à	ADP	_	_	8	case	_	_
7	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	logement	logement	NOUN	_	Gender=Masc|Number=Sing	5	nmod	_	_
9	?	?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 obj	color:blue
1	Comment	comment	ADV	_	PronType=Int	7	advmod	_	_
2	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	Caf	Caf	NOUN	_	_	4	nsubj	_	_
4	peut	pouvoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
5	-elle	il	PRON	_	Gender=Fem|Number=Sing|Person=3	4	expl:subj	_	_
6	m'	le/lui	PRON	_	Number=Sing|Person=1	7	obj	_	SpaceAfter=No
7	aider	aider	VERB	_	VerbForm=Inf	4	xcomp	_	_
8	?	?	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 obj	color:blue
1	Combien	combien	ADV	_	PronType=Int	4	obj	_	_
2	d'	de	ADP	_	_	3	case	_	SpaceAfter=No
3	étages	étage	NOUN	_	Gender=Masc|Number=Plur	1	obl:arg	_	_
4	ont	avoir	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	6	det	_	_
6	tours	tour	NOUN	_	Number=Plur	4	nsubj	_	_
7	jumelles	jumeau	ADJ	_	Gender=Fem|Number=Plur	6	amod	_	_
8	?	?	PUNCT	_	_	4	punct	_	_

~~~


