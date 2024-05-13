---
layout: base
title:  'Statistics of ccomp in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `ccomp`

This relation is universal.

465 nodes (1%) are attached to their parents as `ccomp`.

465 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.49677419354839.

The following 15 pairs of parts of speech are connected with `ccomp`: <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (336; 72% instances), <tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (38; 8% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (35; 8% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (29; 6% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (9; 2% instances), <tt><a href="fr_sequoia-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-DET.html">DET</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 ccomp	color:blue
1	Nul	nul	PRON	_	Gender=Masc|Number=Sing|PronType=Neg	3	nsubj	_	_
2	ne	ne	ADV	_	Polarity=Neg	3	advmod	_	_
3	sait	savoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	où	où	PRON	_	PronType=Int	7	iobj	_	_
5	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	piste	piste	NOUN	_	Gender=Fem|Number=Sing	7	nsubj	_	_
7	conduisait	conduire	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	ccomp	_	_
8	ensuite	ensuite	ADV	_	_	7	advmod	_	SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 ccomp	color:blue
1	Les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	2	det	_	_
2	policiers	policier	NOUN	_	Gender=Masc|Number=Plur	4	nsubj	_	_
3	ont	avoir	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	aux:tense	_	_
4	ouvert	ouvrir	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	enquête	enquête	NOUN	_	Gender=Fem|Number=Sing	4	obj	_	_
7	afin	afin	ADV	_	_	4	advmod	_	_
8	de	de	ADP	_	_	9	mark	_	_
9	déterminer	déterminer	VERB	_	VerbForm=Inf	7	ccomp	_	Subject=Instantiated
10	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	11	det	_	_
11	causes	cause	NOUN	_	Gender=Fem|Number=Plur	9	obj	_	_
12	exactes	exact	ADJ	_	Gender=Fem|Number=Plur	11	amod	_	_
13	de	de	ADP	_	_	15	case	_	_
14	cet	ce	DET	_	Gender=Masc|Number=Sing|PronType=Dem	15	det	_	_
15	incendie	incendie	NOUN	_	Gender=Masc|Number=Sing	11	nmod	_	SpaceAfter=No
16	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 ccomp	color:blue
1	Mais	mais	CCONJ	_	_	3	cc	_	_
2	je	moi	PRON	_	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	pense	penser	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	en	en	ADP	_	_	6	case	_	_
5	tout	tout	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	cas	cas	NOUN	_	Gender=Masc	3	obl:mod	_	_
7	que	que	SCONJ	_	_	11	mark	_	_
8	ces	ce	DET	_	Number=Plur|PronType=Dem	9	det	_	_
9	tests	test	NOUN	_	Gender=Masc|Number=Plur	11	nsubj	_	_
10	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
11	prometteurs	prometteur	ADJ	_	Gender=Masc|Number=Plur	3	ccomp	_	SpaceAfter=No
12	.	.	PUNCT	_	_	3	punct	_	_

~~~


