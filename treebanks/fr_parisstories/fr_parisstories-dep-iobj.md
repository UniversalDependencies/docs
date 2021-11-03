---
layout: base
title:  'Statistics of iobj in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `iobj`

This relation is universal.

390 nodes (1%) are attached to their parents as `iobj`.

332 instances of `iobj` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.53846153846154.

The following 14 pairs of parts of speech are connected with `iobj`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (330; 85% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt> (18; 5% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt> (13; 3% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt> (10; 3% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-DET.html">DET</a></tt> (4; 1% instances), <tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt> (2; 1% instances), <tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 iobj	color:blue
1	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	sais	savoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	8	discourse	_	_
3	plus	plus	ADV	_	_	2	advmod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	2	punct	_	_
5	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	8	nsubj	_	_
6	en	en	PRON	_	Person=3|PronType=Prs	8	iobj	_	_
7	avait	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	aux	_	_
8	fait	faire	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
9	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	8	advmod	_	ExtPos=ADV|Idiom=Yes
10	fois	fois	NOUN	_	Gender=Fem|Number=Sing	9	fixed	_	InIdiom=Yes
11	ensemble	ensemble	ADV	_	_	8	advmod	_	_
12	?	?	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 iobj	color:blue
1	oui	oui	INTJ	_	_	5	discourse	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	mais	mais	CCONJ	_	_	5	cc	_	_
4	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
5	passait	passer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
6	aussi	aussi	ADV	_	_	5	advmod	_	_
7	dans	dans	ADP	_	_	5	iobj	_	Scrap=Yes|SpaceAfter=No
8	,	,	PUNCT	_	_	10	punct	_	_
9	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	_
10	passait	passer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	5	reparandum	_	_
11	aussi	aussi	ADV	_	_	10	advmod	_	_
12	dans	dans	ADP	_	_	14	case	_	_
13	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	clip	clip	NOUN	_	Gender=Masc|Number=Sing	10	obl:arg	_	SpaceAfter=No
15	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 iobj	color:blue
1	hop	hop	INTJ	_	_	6	discourse	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	euh	euh	INTJ	_	_	6	discourse	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
6	décide	décider	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
7	d'	d'	ADP	_	_	8	mark	_	SpaceAfter=No
8	aller	aller	VERB	_	VerbForm=Inf	6	xcomp	_	_
9	là-bas	là-bas	ADV	_	_	8	iobj	_	SpaceAfter=No
10	.	.	PUNCT	_	_	6	punct	_	_

~~~


