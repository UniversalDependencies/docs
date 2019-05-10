---
layout: base
title:  'Statistics of expl in UD_French-FQB'
udver: '2'
---

## Treebank Statistics: UD_French-FQB: Relations: `expl`

This relation is universal.

741 nodes (3%) are attached to their parents as `expl`.

664 instances of `expl` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.16869095816464.

The following 4 pairs of parts of speech are connected with `expl`: <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt> (491; 66% instances), <tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_fqb-pos-PART.html">PART</a></tt> (234; 32% instances), <tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt> (9; 1% instances), <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt> (7; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 expl	color:blue
1	à	à	ADP	_	_	2	case	_	_
2	combien	combien	ADV	_	PronType=Int	4	obl:arg	_	_
3	s'	le/lui	PRON	_	Person=3|Reflex=Yes	4	expl	_	SpaceAfter=No
4	élève	élever	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	mon	son	DET	_	Number=Sing|Poss=Yes	6	det	_	_
6	aide	aide	NOUN	_	Number=Sing	4	nsubj	_	_
7	à	à	ADP	_	_	9	case	_	_
8	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	logement	logement	NOUN	_	Gender=Masc|Number=Sing	6	nmod	_	_
10	?	?	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 expl	color:blue
1	Pour	pour	ADP	_	_	3	case	_	_
2	quelle	quel	DET	_	Gender=Fem|Number=Sing|PronType=Int	3	det	_	_
3	compagnie	compagnie	NOUN	_	Gender=Fem|Number=Sing	6	obl:mod	_	_
4	Marty	Marty	PROPN	_	Gender=Masc|Number=Sing	6	nsubj	_	_
5	McKewon	McKewon	PROPN	_	_	4	flat:name	_	_
6	travaille	travailler	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
7	-t	t	PART	_	_	8	expl	_	SpaceAfter=No
8	-il	il	PRON	_	Gender=Masc|Number=Sing|Person=3	6	expl	_	_
9	?	?	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 expl	color:blue
1	Les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	2	det	_	_
2	réponses	réponse	NOUN	_	Gender=Fem|Number=Plur	5	nsubj	_	_
3	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	SpaceAfter=No
4	-elles	il	PRON	_	Gender=Fem|Number=Plur|Person=3	5	expl	_	_
5	confidentielles	confidentiel	ADJ	_	Gender=Fem|Number=Plur	0	root	_	_
6	?	?	PUNCT	_	_	5	punct	_	_

~~~


