---
layout: base
title:  'Statistics of nummod in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `nummod`

This relation is universal.

5663 nodes (1%) are attached to their parents as `nummod`.

4138 instances of `nummod` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.28730354935547.

The following 12 pairs of parts of speech are connected with `nummod`: <tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (4442; 78% instances), <tt><a href="es_ancora-pos-DET.html">DET</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (753; 13% instances), <tt><a href="es_ancora-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (198; 3% instances), <tt><a href="es_ancora-pos-ADV.html">ADV</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (170; 3% instances), <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (54; 1% instances), <tt><a href="es_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (23; 0% instances), <tt><a href="es_ancora-pos-NUM.html">NUM</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (14; 0% instances), <tt><a href="es_ancora-pos-ADP.html">ADP</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_ancora-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_ancora-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Anthoney	Anthoney	PROPN	PROPN	_	3	nsubj	_	MWE=Anthoney_Mngani|MWEPOS=PROPN
2	Mngani	Mngani	PROPN	PROPN	_	1	flat	_	_
3	tenía	tener	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
4	29	29	NUM	NUM	NumForm=Digit	5	nummod	_	_
5	años	año	NOUN	NOUN	Gender=Masc|Number=Plur	3	obj	_	SpaceAfter=No
6	.	.	PUNCT	PUNCT	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nummod	color:blue
1	Y	y	CCONJ	CCONJ	_	7	advmod	_	_
2	a	a	ADP	ADP	AdpType=Prep	5	case	_	_
3	los	el	DET	DET	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	5	det	_	_
4	dos	dos	NUM	NUM	Number=Plur|NumType=Card	3	nummod	_	_
5	días	día	NOUN	NOUN	Gender=Masc|Number=Plur	7	obl	_	_
6	la	él	PRON	PRON	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
7	desmienten	desmentir	VERB	VERB	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
8	.	.	PUNCT	PUNCT	PunctType=Peri	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 nummod	color:blue
1	Helio	Helio	PROPN	PROPN	_	0	root	_	MWE=Helio_Castro_Neves|MWEPOS=PROPN
2	Castro	Castro	PROPN	PROPN	_	1	flat	_	_
3	Neves	Neves	PROPN	PROPN	_	1	flat	_	_
4	(	(	PUNCT	PUNCT	PunctSide=Ini|PunctType=Brck	5	punct	_	SpaceAfter=No
5	Reynard/Honda	Reynard/Honda	PROPN	PROPN	_	1	flat	_	SpaceAfter=No
6	)	)	PUNCT	PUNCT	PunctSide=Fin|PunctType=Brck	5	punct	_	_
7	2	2	NUM	NUM	NumForm=Digit	1	nummod	_	SpaceAfter=No
8	.	.	PUNCT	PUNCT	PunctType=Peri	1	punct	_	_

~~~


