---
layout: base
title:  'Statistics of mark in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `mark`

This relation is universal.

1113 nodes (3%) are attached to their parents as `mark`.

1112 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.54267744833783.

The following 19 pairs of parts of speech are connected with `mark`: <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-SCONJ.html">SCONJ</a></tt> (528; 47% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt> (397; 36% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-SCONJ.html">SCONJ</a></tt> (55; 5% instances), <tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_spoken-pos-SCONJ.html">SCONJ</a></tt> (51; 5% instances), <tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_spoken-pos-SCONJ.html">SCONJ</a></tt> (18; 2% instances), <tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_spoken-pos-SCONJ.html">SCONJ</a></tt> (16; 1% instances), <tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt> (12; 1% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-CCONJ.html">CCONJ</a></tt> (10; 1% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt> (7; 1% instances), <tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_spoken-pos-SCONJ.html">SCONJ</a></tt> (5; 0% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt> (4; 0% instances), <tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_spoken-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_spoken-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_spoken-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-DET.html">DET</a></tt>-<tt><a href="fr_spoken-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 mark	color:blue
1	euh	euh	INTJ	_	_	3	discourse	_	_
2	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	sais	savoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	pas	pas	ADV	_	Polarity=Neg	3	advmod	_	_
5	si	si	SCONJ	_	_	7	mark	_	_
6	vous	il	PRON	_	Number=Plur|Person=2|PronType=Prs	7	nsubj	_	_
7	voulez	vouloir	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	3	ccomp:obj	_	_
8	savoir	savoir	VERB	_	VerbForm=Inf	7	xcomp:obj	_	_
9	pourquoi	pourquoi	PRON	_	_	8	obj	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 mark	color:blue
1	là	là	ADV	_	_	3	advmod	_	_
2	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	viens	venir	VERB	_	Number=Sing|Person=1	0	root	_	_
4	de	de	ADP	_	_	5	mark	_	_
5	faire	faire	VERB	_	VerbForm=Inf	3	xcomp:obl	_	_
6	mes	son	DET	_	Number=Plur|Person=3|PossNumber=Sing|PossPerson=1|PronType=Prs	8	det	_	_
7	des	un	DET	de	Definite=Ind|Number=Plur|PronType=Art	6	reparandum	_	_
8	vaccins	vaccin	NOUN	_	_	5	obj	_	_
9	par	par	ADP	_	_	10	case	_	_
10	exemple	exemple	NOUN	_	Gender=Masc|Number=Sing	3	obl:mod	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 mark	color:blue
1	mais	mais	CCONJ	_	_	7	cc	_	_
2	euh	euh	INTJ	_	_	7	discourse	_	_
3	que	que	SCONJ	_	_	7	mark	_	_
4	ce	ce	PRON	_	_	7	nsubj	_	_
5	soient	être	AUX	_	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
6	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	7	det	_	_
7	habits	habits	NOUN	_	_	0	root	_	_
8	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	9	det	_	_
9	vacances	vacance	NOUN	_	Gender=Fem|Number=Plur	7	conj	_	_
10	euh	euh	INTJ	_	_	9	discourse	_	_
11	euh	euh	INTJ	_	_	9	discourse	_	_

~~~


