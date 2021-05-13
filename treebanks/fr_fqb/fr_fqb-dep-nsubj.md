---
layout: base
title:  'Statistics of nsubj in UD_French-FQB'
udver: '2'
---

## Treebank Statistics: UD_French-FQB: Relations: `nsubj`

This relation is universal.
There are 2 language-specific subtypes of `nsubj`: <tt><a href="fr_fqb-dep-nsubj-caus.html">nsubj:caus</a></tt>, <tt><a href="fr_fqb-dep-nsubj-pass.html">nsubj:pass</a></tt>.

2163 nodes (9%) are attached to their parents as `nsubj`.

1278 instances of `nsubj` (59%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.5709662505779.

The following 17 pairs of parts of speech are connected with `nsubj`: <tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt> (525; 24% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt> (454; 21% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt> (432; 20% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-PROPN.html">PROPN</a></tt> (312; 14% instances), <tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt> (152; 7% instances), <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt> (134; 6% instances), <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt> (33; 2% instances), <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-PROPN.html">PROPN</a></tt> (27; 1% instances), <tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt> (21; 1% instances), <tt><a href="fr_fqb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt> (20; 1% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt> (18; 1% instances), <tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt> (11; 1% instances), <tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_fqb-pos-PROPN.html">PROPN</a></tt> (10; 0% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-X.html">X</a></tt> (6; 0% instances), <tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_fqb-pos-PROPN.html">PROPN</a></tt> (4; 0% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 nsubj	color:blue
1	Quel	quel	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
4	plus	plus	ADV	_	_	5	advmod	_	_
5	grand	grand	ADJ	_	Gender=Masc|Number=Sing	6	amod	_	_
6	pays	pays	NOUN	_	Gender=Masc	1	nsubj	_	_
7	exportateur	exportateur	NOUN	_	Gender=Fem|Number=Sing	6	nmod	_	_
8	de	de	ADP	_	_	9	case	_	_
9	pétrole	pétrole	NOUN	_	Gender=Masc|Number=Sing	7	nmod	_	_
10	brut	brut	ADJ	_	Gender=Masc|Number=Sing	9	amod	_	_
11	?	?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 nsubj	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nsubj	color:blue
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


