---
layout: base
title:  'Statistics of ccomp in UD_Basque-BDT'
udver: '2'
---

## Treebank Statistics: UD_Basque-BDT: Relations: `ccomp`

This relation is universal.

1192 nodes (1%) are attached to their parents as `ccomp`.

644 instances of `ccomp` (54%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.0260067114094.

The following 19 pairs of parts of speech are connected with `ccomp`: <tt><a href="eu_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="eu_bdt-pos-VERB.html">VERB</a></tt> (894; 75% instances), <tt><a href="eu_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="eu_bdt-pos-NOUN.html">NOUN</a></tt> (119; 10% instances), <tt><a href="eu_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="eu_bdt-pos-ADJ.html">ADJ</a></tt> (100; 8% instances), <tt><a href="eu_bdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eu_bdt-pos-VERB.html">VERB</a></tt> (15; 1% instances), <tt><a href="eu_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="eu_bdt-pos-ADV.html">ADV</a></tt> (15; 1% instances), <tt><a href="eu_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="eu_bdt-pos-DET.html">DET</a></tt> (15; 1% instances), <tt><a href="eu_bdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="eu_bdt-pos-VERB.html">VERB</a></tt> (8; 1% instances), <tt><a href="eu_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="eu_bdt-pos-X.html">X</a></tt> (6; 1% instances), <tt><a href="eu_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="eu_bdt-pos-PRON.html">PRON</a></tt> (5; 0% instances), <tt><a href="eu_bdt-pos-ADV.html">ADV</a></tt>-<tt><a href="eu_bdt-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="eu_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="eu_bdt-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="eu_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="eu_bdt-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="eu_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="eu_bdt-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="eu_bdt-pos-ADV.html">ADV</a></tt>-<tt><a href="eu_bdt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="eu_bdt-pos-AUX.html">AUX</a></tt>-<tt><a href="eu_bdt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="eu_bdt-pos-DET.html">DET</a></tt>-<tt><a href="eu_bdt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="eu_bdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eu_bdt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="eu_bdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eu_bdt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="eu_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="eu_bdt-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 ccomp	color:blue
1	Beraz	beraz	CCONJ	_	_	8	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	idazten	idatzi	VERB	_	Case=Ine|VerbForm=Fin	6	advcl	_	_
4	ere	ere	CCONJ	_	_	3	advmod	_	_
5	lehenago	lehenago	ADV	_	_	6	advmod	_	_
6	hasi	hasi	VERB	_	Aspect=Perf|VerbForm=Part	8	ccomp	_	_
7	nintzela	izan	AUX	_	Mood=Ind|Number[abs]=Sing|Person[abs]=1|VerbForm=Fin	6	aux	_	_
8	esan	esan	VERB	_	VerbForm=Inf	0	root	_	_
9	liteke	edin	AUX	_	Mood=Pot|Number[abs]=Sing|Person[abs]=3|VerbForm=Fin	8	aux	_	ReconstructedLemma=Yes|SpaceAfter=No
10	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 ccomp	color:blue
1	-	-	PUNCT	_	_	3	punct	_	_
2	Nork	nor	PRON	_	PronType=Int	3	nsubj	_	_
3	esan	esan	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	_
4	du	edun	AUX	_	Mood=Ind|Number[abs]=Sing|Number[erg]=Sing|Person[abs]=3|Person[erg]=3|VerbForm=Fin	3	aux	_	ReconstructedLemma=Yes
5	ezin	ezin	NOUN	_	Animacy=Inan|Case=Abs|Definite=Ind	3	ccomp	_	_
6	gintezkeela	edin	AUX	_	Mood=Pot|Number[abs]=Plur|Person[abs]=1|VerbForm=Fin	5	aux	_	ReconstructedLemma=Yes
7	etor	etorri	VERB	_	VerbForm=Inf	5	xcomp	_	SpaceAfter=No
8	?	?	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 ccomp	color:blue
1	Ikusiz	ikusi	VERB	_	Case=Ins|Definite=Ind|VerbForm=Part	0	root	_	SpaceAfter=No
2	,	,	PUNCT	_	_	5	punct	_	_
3	epe	epe	NOUN	_	_	5	obl	_	_
4	luzean	luze	ADJ	_	Case=Ine|Definite=Def|Number=Sing	3	amod	_	_
5	egiten	egin	VERB	_	Aspect=Imp|VerbForm=Inf	7	acl	_	_
6	diren	izan	AUX	_	Mood=Ind|Number[abs]=Plur|Person[abs]=3|VerbForm=Fin	5	aux	_	_
7	amortizamenduak	amortiza+!mendu	NOUN	_	Case=Abs|Definite=Def|Number=Plur	9	nsubj	_	_
8	direla	izan	AUX	_	Aspect=Prog|Mood=Ind|Number[abs]=Plur|Person[abs]=3|VerbForm=Fin	9	cop	_	_
9	holakoak	holako	ADJ	_	Case=Abs|Definite=Def|Number=Plur	1	ccomp	_	SpaceAfter=No
10	.	.	PUNCT	_	_	1	punct	_	_

~~~


