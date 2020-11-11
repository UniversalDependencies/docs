---
layout: base
title:  'Statistics of obl:arg in UD_French-FQB'
udver: '2'
---

## Treebank Statistics: UD_French-FQB: Relations: `obl:arg`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `obl`: <tt><a href="fr_fqb-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="fr_fqb-dep-obl-mod.html">obl:mod</a></tt>.

552 nodes (2%) are attached to their parents as `obl:arg`.

279 instances of `obl:arg` (51%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.63768115942029.

The following 10 pairs of parts of speech are connected with `obl:arg`: <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt> (221; 40% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt> (153; 28% instances), <tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt> (95; 17% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-PROPN.html">PROPN</a></tt> (33; 6% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt> (28; 5% instances), <tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt> (15; 3% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-ADP.html">ADP</a></tt> (3; 1% instances), <tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_fqb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 obl:arg	color:blue
1	à	à_partir_de	ADP	_	_	4	case	_	ExtPos=ADP
2	partir	_	VERB	_	VerbForm=Inf	1	fixed	_	_
3	de	_	ADP	_	_	1	fixed	_	_
4	quand	quand	ADV	_	PronType=Int	7	obl:mod	_	_
5	puis	pouvoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
6	-je	il	PRON	_	Number=Sing|Person=1	5	nsubj	_	_
7	bénéficier	bénéficier	VERB	_	VerbForm=Inf	5	xcomp	_	_
8	d'	de	ADP	_	_	10	case	_	SpaceAfter=No
9	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	aide	aide	NOUN	_	Number=Sing	7	obl:arg	_	_
11	à	à	ADP	_	_	13	case	_	_
12	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	logement	logement	NOUN	_	Gender=Masc|Number=Sing	10	nmod	_	_
14	?	?	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 obl:arg	color:blue
1	à	à	ADP	_	_	2	case	_	_
2	combien	combien	ADV	_	PronType=Int	4	obl:arg	_	_
3	s'	le/lui	PRON	_	Person=3|Reflex=Yes	4	expl:comp	_	SpaceAfter=No
4	élève	élever	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	mon	son	DET	_	Number=Sing|Poss=Yes	6	det	_	_
6	aide	aide	NOUN	_	Number=Sing	4	nsubj	_	_
7	à	à	ADP	_	_	9	case	_	_
8	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	logement	logement	NOUN	_	Gender=Masc|Number=Sing	6	nmod	_	_
10	?	?	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obl:arg	color:blue
1	Combien	combien	ADV	_	PronType=Int	4	obj	_	_
2	d'	de	ADP	_	_	3	case	_	SpaceAfter=No
3	étages	étage	NOUN	_	Gender=Masc|Number=Plur	1	obl:arg	_	_
4	ont	avoir	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	6	det	_	_
6	tours	tour	NOUN	_	Number=Plur	4	nsubj	_	_
7	jumelles	jumeau	ADJ	_	Gender=Fem|Number=Plur	6	amod	_	_
8	?	?	PUNCT	_	_	4	punct	_	_

~~~


