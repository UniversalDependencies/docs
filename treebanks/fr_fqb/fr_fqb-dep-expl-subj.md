---
layout: base
title:  'Statistics of expl:subj in UD_French-FQB'
udver: '2'
---

## Treebank Statistics: UD_French-FQB: Relations: `expl:subj`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `expl`: <tt><a href="fr_fqb-dep-expl-comp.html">expl:comp</a></tt>.

331 nodes (1%) are attached to their parents as `expl:subj`.

254 instances of `expl:subj` (77%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.14803625377644.

The following 3 pairs of parts of speech are connected with `expl:subj`: <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt> (315; 95% instances), <tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt> (9; 3% instances), <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt> (7; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 expl:subj	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 expl:subj	color:blue
1	Les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	2	det	_	_
2	réponses	réponse	NOUN	_	Gender=Fem|Number=Plur	5	nsubj	_	_
3	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	SpaceAfter=No
4	-elles	il	PRON	_	Gender=Fem|Number=Plur|Person=3	5	expl:subj	_	_
5	confidentielles	confidentiel	ADJ	_	Gender=Fem|Number=Plur	0	root	_	_
6	?	?	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 expl:subj	color:blue
1	De	de	ADP	_	_	3	case	_	_
2	quel	quel	DET	_	Gender=Masc|Number=Sing|PronType=Int	3	det	_	_
3	parti	parti	NOUN	_	Gender=Masc|Number=Sing	9	nmod	_	_
4	politique	politique	ADJ	_	Number=Sing	3	amod	_	_
5	Rudolf	Rudolf	PROPN	_	Gender=Masc|Number=Sing	9	nsubj	_	_
6	Scharping	Scharping	PROPN	_	_	5	flat:name	_	_
7	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	SpaceAfter=No
8	-il	il	PRON	_	Gender=Masc|Number=Sing|Person=3	9	expl:subj	_	_
9	membre	membre	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
10	?	?	PUNCT	_	_	9	punct	_	_

~~~


