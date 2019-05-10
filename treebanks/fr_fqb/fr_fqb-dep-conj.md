---
layout: base
title:  'Statistics of conj in UD_French-FQB'
udver: '2'
---

## Treebank Statistics: UD_French-FQB: Relations: `conj`

This relation is universal.

108 nodes (0%) are attached to their parents as `conj`.

108 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.48148148148148.

The following 16 pairs of parts of speech are connected with `conj`: <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt> (41; 38% instances), <tt><a href="fr_fqb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_fqb-pos-PROPN.html">PROPN</a></tt> (28; 26% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt> (16; 15% instances), <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt> (6; 6% instances), <tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt> (3; 3% instances), <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-PROPN.html">PROPN</a></tt> (3; 3% instances), <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="fr_fqb-pos-DET.html">DET</a></tt>-<tt><a href="fr_fqb-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fr_fqb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_fqb-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="fr_fqb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 conj	color:blue
1	Pourquoi	pourquoi	ADV	_	PronType=Int	2	advmod	_	_
2	demander	demander	VERB	_	VerbForm=Inf	0	root	_	_
3	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	nom	nom	NOUN	_	Gender=Masc|Number=Sing	2	obj	_	_
5	et	et	CCONJ	_	_	7	cc	_	_
6	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	7	det	_	SpaceAfter=No
7	adresse	adresse	NOUN	_	Gender=Fem|Number=Sing	4	conj	_	_
8	de	de	ADP	_	_	10	case	_	_
9	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	10	det	_	SpaceAfter=No
10	employeur	employeur	NOUN	_	Gender=Masc|Number=Sing	4	nmod	_	_
11	?	?	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 conj	color:blue
1	Combien	combien	ADV	_	PronType=Int	4	obl:arg	_	_
2	de	de	ADP	_	_	3	case	_	_
3	temps	temps	NOUN	_	Gender=Masc	1	obl:arg	_	_
4	dure	durer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	voyage	voyage	NOUN	_	Gender=Masc|Number=Sing	4	nsubj	_	_
7	entre	entre	ADP	_	_	8	case	_	_
8	Tokyo	Tokyo	PROPN	_	Gender=Masc|Number=Sing	6	nmod	_	_
9	et	et	CCONJ	_	_	10	cc	_	_
10	Niigata	Niigata	PROPN	_	_	8	conj	_	_
11	?	?	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 conj	color:blue
1	Je	il	PRON	_	Number=Sing|Person=1	2	nsubj	_	_
2	vais	aller	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	devenir	devenir	VERB	_	VerbForm=Inf	2	xcomp	_	_
4	salarié	salarié	NOUN	_	Gender=Masc|Number=Sing	3	xcomp	_	_
5	et	et	CCONJ	_	_	7	cc	_	_
6	je	il	PRON	_	Number=Sing|Person=1	7	nsubj	_	_
7	garde	garder	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	conj	_	_
8	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
9	même	même	ADJ	_	Number=Sing	10	amod	_	_
10	logement	logement	NOUN	_	Gender=Masc|Number=Sing	7	obj	_	SpaceAfter=No
11	.	.	PUNCT	_	_	2	punct	_	_

~~~


