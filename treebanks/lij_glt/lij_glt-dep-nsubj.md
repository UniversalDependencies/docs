---
layout: base
title:  'Statistics of nsubj in UD_Ligurian-GLT'
udver: '2'
---

## Treebank Statistics: UD_Ligurian-GLT: Relations: `nsubj`

This relation is universal.
There are 2 language-specific subtypes of `nsubj`: <tt><a href="lij_glt-dep-nsubj-outer.html">nsubj:outer</a></tt>, <tt><a href="lij_glt-dep-nsubj-pass.html">nsubj:pass</a></tt>.

387 nodes (6%) are attached to their parents as `nsubj`.

335 instances of `nsubj` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.55555555555556.

The following 17 pairs of parts of speech are connected with `nsubj`: <tt><a href="lij_glt-pos-VERB.html">VERB</a></tt>-<tt><a href="lij_glt-pos-PRON.html">PRON</a></tt> (217; 56% instances), <tt><a href="lij_glt-pos-VERB.html">VERB</a></tt>-<tt><a href="lij_glt-pos-NOUN.html">NOUN</a></tt> (66; 17% instances), <tt><a href="lij_glt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lij_glt-pos-PRON.html">PRON</a></tt> (25; 6% instances), <tt><a href="lij_glt-pos-VERB.html">VERB</a></tt>-<tt><a href="lij_glt-pos-PROPN.html">PROPN</a></tt> (21; 5% instances), <tt><a href="lij_glt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lij_glt-pos-PRON.html">PRON</a></tt> (14; 4% instances), <tt><a href="lij_glt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lij_glt-pos-NOUN.html">NOUN</a></tt> (9; 2% instances), <tt><a href="lij_glt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lij_glt-pos-NOUN.html">NOUN</a></tt> (7; 2% instances), <tt><a href="lij_glt-pos-PRON.html">PRON</a></tt>-<tt><a href="lij_glt-pos-PRON.html">PRON</a></tt> (6; 2% instances), <tt><a href="lij_glt-pos-PRON.html">PRON</a></tt>-<tt><a href="lij_glt-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="lij_glt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lij_glt-pos-PROPN.html">PROPN</a></tt> (4; 1% instances), <tt><a href="lij_glt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lij_glt-pos-PROPN.html">PROPN</a></tt> (4; 1% instances), <tt><a href="lij_glt-pos-ADV.html">ADV</a></tt>-<tt><a href="lij_glt-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="lij_glt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lij_glt-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="lij_glt-pos-ADV.html">ADV</a></tt>-<tt><a href="lij_glt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="lij_glt-pos-NUM.html">NUM</a></tt>-<tt><a href="lij_glt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="lij_glt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lij_glt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="lij_glt-pos-VERB.html">VERB</a></tt>-<tt><a href="lij_glt-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj	color:blue
1	E	e	CCONJ	_	_	3	cc	_	_
2	quelli	quello	PRON	_	Gender=Masc|Number=Plur|PronType=Dem	3	nsubj	_	_
3	mòllan	mollâ	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	tòsto	tòsto	ADV	_	_	3	advmod	_	_
5	e	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	6	det	_	_
6	ræ	ræ	NOUN	_	Gender=Fem|Number=Plur	3	obj	_	SpaceAfter=No
7	,	,	PUNCT	_	_	11	punct	_	_
8	e	e	CCONJ	_	_	11	cc	_	_
9	se	se	PRON	_	Person=3|PronType=Prs	11	expl:pv	_	_
10	ghe	ghe	PRON	_	Person=3|PronType=Prs	11	iobj	_	_
11	mettan	mette	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	conj	_	_
12	apreuvo	apreuvo	ADV	_	_	11	advmod	_	SpaceAfter=No
13	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nsubj	color:blue
1	Incomensa	incomensâ	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	l'	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	SpaceAfter=No
3	evangëio	evangëio	NOUN	_	Gender=Masc|Number=Sing	1	nsubj	_	_
4	de	de	ADP	_	_	5	case	_	_
5	Gexù	Gexù	PROPN	_	Gender=Masc|Number=Sing	3	nmod	_	_
6	Cristo	Cristo	PROPN	_	Gender=Masc|Number=Sing	5	flat	_	SpaceAfter=No
7	,	,	PUNCT	_	_	9	punct	_	_
8	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	Figgio	figgio	NOUN	_	Gender=Masc|Number=Sing	5	appos	_	_
10	de	de	ADP	_	_	12	case	_	_
11	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	Segnô	Segnô	PROPN	_	Gender=Masc|Number=Sing	9	nmod	_	SpaceAfter=No
13	.	.	PUNCT	_	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 nsubj	color:blue
1	Sta	sto	PRON	_	Gender=Fem|Number=Sing|PronType=Dem	7	nsubj	_	_
2	chì	chì	ADV	_	_	1	advmod	_	_
3	a	o	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	expl	_	_
4	dovieiva	dovei	AUX	_	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin	7	aux	_	_
5	ëse	ëse	AUX	_	Tense=Pres|VerbForm=Inf	7	cop	_	_
6	unna	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	zöna	zöna	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
8	de	de	ADP	_	_	9	case	_	_
9	restoranti	restorante	NOUN	_	Gender=Masc|Number=Plur	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	7	punct	_	_

~~~


