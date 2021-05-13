---
layout: base
title:  'Statistics of ccomp in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `ccomp`

This relation is universal.

335 nodes (0%) are attached to their parents as `ccomp`.

335 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.91940298507463.

The following 11 pairs of parts of speech are connected with `ccomp`: <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (241; 72% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (34; 10% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (25; 7% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (23; 7% instances), <tt><a href="fr_sequoia-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-DET.html">DET</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 ccomp	color:blue
1	Nul	nul	PRON	_	Gender=Masc|Number=Sing	3	nsubj	_	_
2	ne	ne	ADV	_	Polarity=Neg	3	advmod	_	_
3	sait	savoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	où	où	ADV	_	PronType=Int	7	obl:arg	_	_
5	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	piste	piste	NOUN	_	Gender=Fem|Number=Sing	7	nsubj	_	_
7	conduisait	conduire	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	ccomp	_	_
8	ensuite	ensuite	ADV	_	_	7	advmod	_	SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 ccomp	color:blue
1	Mais	mais	CCONJ	_	_	3	cc	_	_
2	je	il	PRON	_	Number=Sing|Person=1	3	nsubj	_	_
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


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 ccomp	color:blue
1	Je	il	PRON	_	Number=Sing|Person=1	3	nsubj	_	_
2	ne	ne	ADV	_	Polarity=Neg	3	advmod	_	_
3	pense	penser	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	vraiment	vraiment	ADV	_	_	5	advmod	_	_
5	pas	pas	ADV	_	Polarity=Neg	3	advmod	_	_
6	que	que	SCONJ	_	_	10	mark	_	_
7	cela	cela	PRON	_	Number=Sing|PronType=Dem	10	nsubj	_	_
8	soit	être	AUX	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
9	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	problème	problème	NOUN	_	Gender=Masc|Number=Sing	3	ccomp	_	SpaceAfter=No
11	.	.	PUNCT	_	_	3	punct	_	_

~~~


