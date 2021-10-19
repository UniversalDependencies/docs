---
layout: base
title:  'Statistics of ccomp in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `ccomp`

This relation is universal.

273 nodes (1%) are attached to their parents as `ccomp`.

264 instances of `ccomp` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.32967032967033.

The following 22 pairs of parts of speech are connected with `ccomp`: <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (178; 65% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (26; 10% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt> (15; 5% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (10; 4% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt> (8; 3% instances), <tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (7; 3% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (7; 3% instances), <tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-DET.html">DET</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 ccomp	color:blue
1	euh	euh	INTJ	_	_	3	discourse	_	_
2	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	sais	savoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	pas	pas	ADV	_	Polarity=Neg	3	advmod	_	_
5	si	si	SCONJ	_	_	7	mark	_	_
6	vous	il	PRON	_	Number=Plur|Person=2|PronType=Prs	7	nsubj	_	_
7	voulez	vouloir	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	3	ccomp	_	_
8	savoir	savoir	VERB	_	VerbForm=Inf	7	xcomp	_	_
9	pourquoi	pourquoi	PRON	_	_	8	obj	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 12 ccomp	color:blue
1	même	même	ADV	_	_	6	advmod	_	_
2	à	à	ADP	_	_	4	case	_	_
3	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	nettoyage	nettoyage	NOUN	_	Gender=Masc|Number=Sing	1	obl:arg	_	_
5	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
6	crois	croire	VERB	_	Number=Sing|Person=1	0	root	_	_
7	que	que	SCONJ	_	_	12	mark	_	_
8	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	12	nsubj	_	_
9	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
10	pas	pas	ADV	_	Polarity=Neg	12	advmod	_	_
11	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	peine	peine	NOUN	_	Gender=Fem|Number=Sing	6	ccomp	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 ccomp	color:blue
1	et	et	CCONJ	_	_	4	cc	_	_
2	euh	euh	INTJ	_	_	4	discourse	_	_
3	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
4	pense	penser	VERB	_	Number=Sing|Person=1	0	root	_	_
5	que	que	SCONJ	_	_	10	mark	_	_
6	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	10	nsubj	_	_
7	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	_
8	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	10	cop	_	_
9	très	très	ADV	_	_	10	advmod	_	_
10	bénéfique	bénéfique	ADJ	_	Number=Sing	4	ccomp	_	_

~~~


