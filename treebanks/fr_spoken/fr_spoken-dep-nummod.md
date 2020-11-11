---
layout: base
title:  'Statistics of nummod in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `nummod`

This relation is universal.

161 nodes (0%) are attached to their parents as `nummod`.

150 instances of `nummod` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.29192546583851.

The following 6 pairs of parts of speech are connected with `nummod`: <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-NUM.html">NUM</a></tt> (148; 92% instances), <tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_spoken-pos-NUM.html">NUM</a></tt> (6; 4% instances), <tt><a href="fr_spoken-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_spoken-pos-NUM.html">NUM</a></tt> (3; 2% instances), <tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_spoken-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_spoken-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_spoken-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	trois	trois	NUM	_	Number=Plur	2	nummod	_	_
2	policiers	policier	NOUN	_	Gender=Masc|Number=Plur	0	root	_	_
3	blessés	blesser	ADJ	_	_	2	amod	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 22 nummod	color:blue
1	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	crois	croire	VERB	_	Number=Sing|Person=1	0	root	_	_
3	qu'	que	SCONJ	_	_	14	mark	_	_
4	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	expl:subj	_	_
5	y	y	PRON	_	Person=3|PronType=Prs	6	obl:arg	_	_
6	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	advcl	_	_
7	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	expl:subj	_	_
8	y	y	PRON	_	Person=3|PronType=Prs	9	obl:arg	_	_
9	a	avoir	VERB	conj:reform	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	reparandum	_	_
10	quelques	quelque	ADJ	_	_	11	amod	_	_
11	années	année	NOUN	_	Gender=Fem|Number=Plur	9	obj	_	_
12	ils	il	PRON	_	Gender=Masc|Number=Plur|Person=3|PronType=Prs	14	nsubj	_	_
13	avaient	avoir	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	14	aux	_	_
14	dit	dire	VERB	_	_	2	ccomp:obj	_	_
15	que	que	SCONJ	_	_	19	mark	_	_
16	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	17	det	_	_
17	immobilier	immobilier	NOUN	_	Gender=Masc|Number=Sing	19	nsubj	_	_
18	avait	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	19	aux	_	_
19	augmenté	augmenter	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	14	ccomp:obj	_	_
20	d'	de	ADP	_	_	23	case	_	_
21	environ	environ	ADV	_	_	22	advmod	_	_
22	neuf	neuf	NUM	_	Number=Plur	23	nummod	_	_
23	pour	pour	ADP	_	_	19	obl:mod	_	ExtPos=NOUN|PhraseType=Idiom
24	cent	cent	NUM	_	Number=Plur	23	fixed	_	_
25	à	à	ADP	_	_	26	case	_	_
26	Paris	Paris	PROPN	_	_	19	obl:mod	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	pa~	pa~	SCONJ	_	_	0	root	_	_
2	parce	parce	SCONJ	_	_	8	mark	_	ExtPos=SCONJ|PhraseType=Idiom
3	que	que	SCONJ	_	_	2	fixed	_	_
4	à	à	ADP	_	_	6	case	_	_
5	trente	trente	NUM	_	Number=Plur	6	nummod	_	_
6	mille	mille	NUM	_	Number=Plur	8	obl:mod	_	_
7	vous	il	PRON	_	Number=Plur|Person=2|PronType=Prs	8	nsubj	_	_
8	êtes	être	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	1	reparandum	_	_
9	dans	dans	ADP	_	_	8	dep:comp	_	_
10	dans	dans	ADP	_	_	9	reparandum	_	_
11	encore	encore	ADV	_	_	12	advmod	_	_
12	dans	dans	ADP	_	_	10	reparandum	_	_
13	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
14	dans	dans	ADP	_	_	16	case	_	_
15	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	raison~	raison~	NOUN	_	_	12	reparandum	_	_
17	enfin	enfin	ADV	_	_	16	discourse	_	_
18	dans	dans	ADP	_	_	19	case	_	_
19	l~	l~	X	_	_	16	reparandum	_	_

~~~


