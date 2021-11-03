---
layout: base
title:  'Statistics of nummod in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `nummod`

This relation is universal.

5650 nodes (1%) are attached to their parents as `nummod`.

4144 instances of `nummod` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.30230088495575.

The following 9 pairs of parts of speech are connected with `nummod`: <tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (4450; 79% instances), <tt><a href="es_ancora-pos-DET.html">DET</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (744; 13% instances), <tt><a href="es_ancora-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (195; 3% instances), <tt><a href="es_ancora-pos-ADV.html">ADV</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (167; 3% instances), <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (54; 1% instances), <tt><a href="es_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (25; 0% instances), <tt><a href="es_ancora-pos-NUM.html">NUM</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (13; 0% instances), <tt><a href="es_ancora-pos-ADP.html">ADP</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Anthoney	Anthoney	PROPN	np0000p	_	3	nsubj	3:nsubj	MWE=Anthoney_Mngani|MWEPOS=PROPN|ClusterId=3LB-CAST-n1-1-s3.sn.2|ClusterType=Spec.person|MentionSpan=1-2
2	Mngani	Mngani	PROPN	_	_	1	flat	1:flat	_
3	tenía	tener	VERB	vmii3s0	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	0:root	_
4	29	29	NUM	_	NumForm=Digit|NumType=Card	5	nummod	5:nummod	_
5	años	año	NOUN	ncmp000	Gender=Masc|Number=Plur	3	obj	3:obj	SpaceAfter=No
6	.	.	PUNCT	fp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nummod	color:blue
1	Y	y	CCONJ	cc	_	7	advmod	7:advmod	_
2	a	a	ADP	sps00	_	5	case	5:case	_
3	los	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	5	det	5:det	_
4	dos	dos	NUM	dn0cp0	Number=Plur|NumType=Card	3	nummod	3:nummod	_
5	días	día	NOUN	ncmp000	Gender=Masc|Number=Plur	7	obl	7:obl	_
6	la	él	PRON	pp3fsa00	Case=Acc|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	7	obj	7:obj	_
7	desmienten	desmentir	VERB	vmip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	SpaceAfter=No
8	.	.	PUNCT	fp	PunctType=Peri	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 nummod	color:blue
1	Helio	Helio	PROPN	np0000p	_	0	root	0:root	MWE=Helio_Castro_Neves|MWEPOS=PROPN|ClusterId[1]=CESS-CAST-A-20000618-14736-s12.sn.2|ClusterType[1]=Spec.person|MentionSpan[1]=1-6|ClusterId[2]=CESS-CAST-A-20000618-14736-c16|ClusterType[2]=Spec.person|MentionSpan[2]=1-3|MentionMisc[2]=CorefType:ident
2	Castro	Castro	PROPN	_	_	1	flat	1:flat	_
3	Neves	Neves	PROPN	_	_	1	flat	1:flat	_
4	(	(	PUNCT	fpa	PunctSide=Ini|PunctType=Brck	5	punct	5:punct	SpaceAfter=No
5	Reynard/Honda	Reynard/Honda	PROPN	np0000o	_	1	flat	1:flat	SpaceAfter=No|ClusterId=CESS-CAST-A-20000618-14736-c1|ClusterType=Spec.organization|MentionSpan=4-6|MentionMisc=CorefType:ident
6	)	)	PUNCT	fpt	PunctSide=Fin|PunctType=Brck	5	punct	5:punct	_
7	2	2	NUM	_	NumForm=Digit|NumType=Card	1	nummod	1:nummod	SpaceAfter=No
8	.	.	PUNCT	fp	PunctType=Peri	1	punct	1:punct	_

~~~


