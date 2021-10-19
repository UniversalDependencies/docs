---
layout: base
title:  'Statistics of advcl in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `advcl`

This relation is universal.
There are 1 language-specific subtypes of `advcl`: <tt><a href="fr_spoken-dep-advcl-cleft.html">advcl:cleft</a></tt>.

413 nodes (1%) are attached to their parents as `advcl`.

221 instances of `advcl` (54%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.17433414043584.

The following 20 pairs of parts of speech are connected with `advcl`: <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (216; 52% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (49; 12% instances), <tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (41; 10% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt> (38; 9% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (14; 3% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (11; 3% instances), <tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (10; 2% instances), <tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt> (6; 1% instances), <tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="fr_spoken-pos-DET.html">DET</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-X.html">X</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 advcl	color:blue
1	si	si	SCONJ	_	_	4	mark	_	_
2	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	nsubj	_	_
3	t'	le	PRON	_	_	4	obj	_	_
4	embête	embêter	VERB	_	_	8	advcl	_	_
5	tu	il	PRON	_	Number=Sing|Person=2|PronType=Prs	8	nsubj	_	_
6	ne	ne	ADV	_	Polarity=Neg	8	advmod	_	_
7	le	le	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	obj	_	_
8	mets	mettre	VERB	_	Number=Sing|Person=2	0	root	_	_
9	pas	pas	ADV	_	Polarity=Neg	8	advmod	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 advcl	color:blue
1	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	expl:subj	_	_
2	y	y	PRON	_	Person=3|PronType=Prs	3	iobj	_	_
3	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	énormément	énormément	ADV	_	_	3	obj	_	_
5	euh	euh	INTJ	_	_	4	discourse	_	_
6	de	de	ADP	_	_	7	case	_	_
7	fois	fois	NOUN	_	_	4	obl:arg	_	_
8	où	où	PRON	_	_	10	advcl	_	_
9	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	10	nsubj	_	_
10	ira	aller	VERB	ETRE	_	7	acl:relcl	_	_
11	à	à	ADP	_	_	13	case	_	_
12	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	13	det	_	_
13	hôpital	hôpital	NOUN	_	Gender=Masc|Number=Sing	10	obl:arg	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 advcl	color:blue
1	quand	quand	SCONJ	_	_	4	mark	_	_
2	j'	il	PRON	_	Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
3	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	aux	_	_
4	aimé	aimer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	8	advcl	_	_
5	j'	il	PRON	_	Number=Sing|Person=1|PronType=Prs	8	nsubj	_	_
6	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	8	aux	_	_
7	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	8	cop	_	_
8	fidèle	fidèle	ADJ	_	Number=Sing	0	root	_	_
9	mh	mh	INTJ	_	_	8	discourse	_	_

~~~


