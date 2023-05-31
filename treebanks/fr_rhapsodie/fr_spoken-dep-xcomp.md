---
layout: base
title:  'Statistics of xcomp in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `xcomp`

This relation is universal.

580 nodes (2%) are attached to their parents as `xcomp`.

576 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.88793103448276.

The following 16 pairs of parts of speech are connected with `xcomp`: <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (516; 89% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt> (19; 3% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (15; 3% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt> (5; 1% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt> (3; 1% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	là	là	ADV	_	_	3	advmod	_	_
2	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	viens	venir	VERB	_	Number=Sing|Person=1	0	root	_	_
4	de	de	ADP	_	_	5	mark	_	_
5	faire	faire	VERB	_	VerbForm=Inf	3	xcomp	_	_
6	mes	son	DET	_	Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=1|PronType=Prs	8	det	_	_
7	des	un	DET	de	Definite=Ind|Number=Plur|PronType=Art	6	reparandum	_	_
8	vaccins	vaccin	NOUN	_	_	5	obj	_	_
9	par	par	ADP	_	_	10	case	_	_
10	exemple	exemple	NOUN	_	Gender=Masc|Number=Sing	3	obl:mod	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 xcomp	color:blue
1	mais	mais	CCONJ	_	_	2	cc	_	_
2	faut	falloir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	aussi	aussi	ADV	_	_	2	advmod	_	_
4	être	être	AUX	_	VerbForm=Inf	5	cop	_	_
5	réaliste	réaliste	ADJ	_	Number=Sing	2	xcomp	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	vous	il	PRON	_	Number=Plur|Person=2|PronType=Prs	2	nsubj	_	_
2	allez	aller	VERB	ETRE	Number=Plur|Person=2	0	root	_	_
3	être	être	AUX	_	VerbForm=Inf	4	cop	_	_
4	médecin	médecin	NOUN	_	Gender=Masc|Number=Sing	2	xcomp	_	_
5	en	en	ADP	_	_	6	case	_	_
6	France	France	PROPN	_	_	4	nmod	_	_
7	en	en	ADP	_	_	8	case	_	_
8	hôpital	hôpital	NOUN	_	Gender=Masc|Number=Sing	4	nmod	_	_

~~~


