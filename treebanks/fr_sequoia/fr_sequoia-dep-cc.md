---
layout: base
title:  'Statistics of cc in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `cc`

This relation is universal.

1651 nodes (2%) are attached to their parents as `cc`.

1651 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.58691701998789.

The following 13 pairs of parts of speech are connected with `cc`: <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-CCONJ.html">CCONJ</a></tt> (820; 50% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-CCONJ.html">CCONJ</a></tt> (469; 28% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-CCONJ.html">CCONJ</a></tt> (125; 8% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-CCONJ.html">CCONJ</a></tt> (123; 7% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-CCONJ.html">CCONJ</a></tt> (28; 2% instances), <tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_sequoia-pos-CCONJ.html">CCONJ</a></tt> (23; 1% instances), <tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_sequoia-pos-CCONJ.html">CCONJ</a></tt> (23; 1% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt> (19; 1% instances), <tt><a href="fr_sequoia-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_sequoia-pos-CCONJ.html">CCONJ</a></tt> (8; 0% instances), <tt><a href="fr_sequoia-pos-DET.html">DET</a></tt>-<tt><a href="fr_sequoia-pos-CCONJ.html">CCONJ</a></tt> (5; 0% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-ADP.html">ADP</a></tt> (4; 0% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc	color:blue
1	DENOMINATION	dénomination	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
2	DE	de	ADP	_	_	4	case	_	_
3	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	MEDICAMENT	médicament	NOUN	_	Gender=Masc|Number=Sing	1	nmod	_	_
5	ET	et	CCONJ	_	_	6	cc	_	_
6	VOIE(S)	voie	NOUN	_	Gender=Fem	1	conj	_	_
7	D'	de	ADP	_	_	8	case	_	SpaceAfter=No
8	ADMINISTRATION	administration	NOUN	_	Gender=Fem|Number=Sing	6	nmod	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 cc	color:blue
1	Et	et	CCONJ	_	_	5	cc	_	_
2	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	3	det	_	SpaceAfter=No
3	acte	acte	NOUN	_	Gender=Masc|Number=Sing	5	nsubj	_	_
4	malveillant	malveillant	ADJ	_	Gender=Masc|Number=Sing	3	amod	_	_
5	figure	figurer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	parmi	parmi	ADP	_	_	8	case	_	_
7	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	8	det	_	_
8	hypothèses	hypothèse	NOUN	_	Gender=Fem|Number=Plur	5	obl	_	SpaceAfter=No
9	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cc	color:blue
1	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	finale	finale	NOUN	_	Gender=Fem|Number=Sing	4	nsubj	_	_
3	se	se	PRON	_	Person=3|Reflex=Yes	4	expl	_	_
4	joua	jouer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	entre	entre	ADP	_	_	6	case	_	_
6	Utrecht	Utrecht	PROPN	_	_	4	obl	_	_
7	et	et	CCONJ	_	_	8	cc	_	_
8	Soleuvre	Soleuvre	PROPN	_	_	6	conj	_	SpaceAfter=No
9	.	.	PUNCT	_	_	4	punct	_	_

~~~


