---
layout: base
title:  'Statistics of cc in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `cc`

This relation is universal.

1655 nodes (2%) are attached to their parents as `cc`.

1655 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.56374622356495.

The following 14 pairs of parts of speech are connected with `cc`: <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-CCONJ.html">CCONJ</a></tt> (824; 50% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-CCONJ.html">CCONJ</a></tt> (470; 28% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-CCONJ.html">CCONJ</a></tt> (124; 7% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-CCONJ.html">CCONJ</a></tt> (111; 7% instances), <tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_sequoia-pos-CCONJ.html">CCONJ</a></tt> (29; 2% instances), <tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_sequoia-pos-CCONJ.html">CCONJ</a></tt> (27; 2% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-CCONJ.html">CCONJ</a></tt> (25; 2% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt> (19; 1% instances), <tt><a href="fr_sequoia-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="fr_sequoia-pos-SYM.html">SYM</a></tt> (9; 1% instances), <tt><a href="fr_sequoia-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_sequoia-pos-CCONJ.html">CCONJ</a></tt> (8; 0% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-ADP.html">ADP</a></tt> (4; 0% instances), <tt><a href="fr_sequoia-pos-DET.html">DET</a></tt>-<tt><a href="fr_sequoia-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (1; 0% instances).


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
8	hypothèses	hypothèse	NOUN	_	Gender=Fem|Number=Plur	5	obl:arg	_	SpaceAfter=No
9	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 cc	color:blue
1	Y	y	PRON	_	Person=3	3	case	_	ExtPos=ADP
2	compris	compris	ADJ	_	Gender=Masc	1	fixed	_	_
3	fractures	fracture	NOUN	_	Gender=Fem|Number=Plur	0	root	_	_
4	cliniques	clinique	ADJ	_	Number=Plur	3	amod	_	_
5	vertébrales	vertébral	ADJ	_	Gender=Fem|Number=Plur	3	amod	_	SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	_
7	dorsales	dorsal	ADJ	_	Gender=Fem|Number=Plur	5	conj	_	_
8	et	et	CCONJ	_	_	9	cc	_	_
9	lombaires	lombaire	ADJ	_	Number=Plur	5	conj	_	_

~~~


