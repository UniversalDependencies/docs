---
layout: base
title:  'Statistics of ccomp in UD_Bulgarian'
udver: '2'
---

## Treebank Statistics: UD_Bulgarian: Relations: `ccomp`

This relation is universal.

2191 nodes (1%) are attached to their parents as `ccomp`.

2010 instances of `ccomp` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.68370607028754.

The following 15 pairs of parts of speech are connected with `ccomp`: <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-VERB.html">VERB</a></tt> (1872; 85% instances), <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-ADJ.html">ADJ</a></tt> (104; 5% instances), <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-NOUN.html">NOUN</a></tt> (104; 5% instances), <tt><a href="bg-pos-PART.html">PART</a></tt>-<tt><a href="bg-pos-VERB.html">VERB</a></tt> (41; 2% instances), <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-ADV.html">ADV</a></tt> (37; 2% instances), <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-DET.html">DET</a></tt> (10; 0% instances), <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-PRON.html">PRON</a></tt> (9; 0% instances), <tt><a href="bg-pos-PART.html">PART</a></tt>-<tt><a href="bg-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="bg-pos-PART.html">PART</a></tt>-<tt><a href="bg-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="bg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bg-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="bg-pos-ADP.html">ADP</a></tt>-<tt><a href="bg-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="bg-pos-PART.html">PART</a></tt>-<tt><a href="bg-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 ccomp	color:blue
1	Двете	два	NUM	Mcfpd	Definite=Def|Gender=Fem|Number=Plur|NumType=Card	2	nummod	_	_
2	сестри	сестра	NOUN	Ncfpi	Definite=Ind|Gender=Fem|Number=Plur	3	nsubj	_	_
3	започнаха	започна	VERB	Vpptf-o3p	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	да	да	AUX	Tx	_	6	aux	_	_
5	си	се	PRON	Ppxtd	Case=Dat|PronType=Prs|Reflex=Yes	6	expl	_	_
6	шепнат	шепна	VERB	Vpitf-r3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp	_	_
7	още	още	ADV	Dq	Degree=Pos	8	advmod	_	_
8	по-ниско	ниско	ADV	Dm	Degree=Cmp	6	advmod	_	SpaceAfter=No
9	.	.	PUNCT	punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 ccomp	color:blue
1	-	-	PUNCT	punct	_	5	punct	_	_
2	Ти	аз	PRON	Ppe-os2	Case=Nom|Number=Sing|Person=2|PronType=Prs	4	nsubj	_	_
3	си	съм	AUX	Vxitf-r2s	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
4	весела	весел	ADJ	Afsi	Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	5	ccomp	_	_
5	изглежда	изглежда	VERB	Vniif-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
6	.	.	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 ccomp	color:blue
1	Теодосий	теодосий	PROPN	Npmsi	Definite=Ind|Gender=Masc|Number=Sing	6	nsubj	_	_
2	вече	вече	ADV	Dt	Degree=Pos	6	advmod	_	_
3	не	не	PART	Tn	Polarity=Neg	6	advmod	_	_
4	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
5	наш	наш	DET	Pszl-s1mi	Definite=Ind|Gender=Masc|Number=Sing|Person=1|Poss=Yes|PronType=Prs	6	det	_	_
6	проблем	проблем	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	8	ccomp	_	SpaceAfter=No
7	,	,	PUNCT	punct	_	6	punct	_	_
8	казаха	кажа	VERB	Vpptf-o3p	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
9	от	от	ADP	R	_	10	case	_	_
10	НИС	нис	PROPN	Npmsh	Definite=Def|Gender=Masc|Number=Sing	8	obl	_	_

~~~


