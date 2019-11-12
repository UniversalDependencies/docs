---
layout: base
title:  'Statistics of cc in UD_German-HDT'
udver: '2'
---

## Treebank Statistics: UD_German-HDT: Relations: `cc`

This relation is universal.

75304 nodes (2%) are attached to their parents as `cc`.

75303 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.77953362371189.

The following 16 pairs of parts of speech are connected with `cc`: <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-CCONJ.html">CCONJ</a></tt> (37785; 50% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-CCONJ.html">CCONJ</a></tt> (20172; 27% instances), <tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_hdt-pos-CCONJ.html">CCONJ</a></tt> (8923; 12% instances), <tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_hdt-pos-CCONJ.html">CCONJ</a></tt> (4419; 6% instances), <tt><a href="de_hdt-pos-X.html">X</a></tt>-<tt><a href="de_hdt-pos-CCONJ.html">CCONJ</a></tt> (1450; 2% instances), <tt><a href="de_hdt-pos-AUX.html">AUX</a></tt>-<tt><a href="de_hdt-pos-CCONJ.html">CCONJ</a></tt> (766; 1% instances), <tt><a href="de_hdt-pos-NUM.html">NUM</a></tt>-<tt><a href="de_hdt-pos-CCONJ.html">CCONJ</a></tt> (542; 1% instances), <tt><a href="de_hdt-pos-PRON.html">PRON</a></tt>-<tt><a href="de_hdt-pos-CCONJ.html">CCONJ</a></tt> (537; 1% instances), <tt><a href="de_hdt-pos-ADV.html">ADV</a></tt>-<tt><a href="de_hdt-pos-CCONJ.html">CCONJ</a></tt> (516; 1% instances), <tt><a href="de_hdt-pos-PART.html">PART</a></tt>-<tt><a href="de_hdt-pos-CCONJ.html">CCONJ</a></tt> (102; 0% instances), <tt><a href="de_hdt-pos-DET.html">DET</a></tt>-<tt><a href="de_hdt-pos-CCONJ.html">CCONJ</a></tt> (51; 0% instances), <tt><a href="de_hdt-pos-ADP.html">ADP</a></tt>-<tt><a href="de_hdt-pos-CCONJ.html">CCONJ</a></tt> (23; 0% instances), <tt><a href="de_hdt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="de_hdt-pos-CCONJ.html">CCONJ</a></tt> (12; 0% instances), <tt><a href="de_hdt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="de_hdt-pos-CCONJ.html">CCONJ</a></tt> (4; 0% instances), <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc	color:blue
1	Anleitung	Anleitung	NOUN	NN	Gender=Fem|Number=Sing|Person=3	0	root	_	_
2	zum	zum	ADP	APPRART	AdpType=Prep|Case=Dat|PronType=Art	3	case	_	_
3	Kindesmißbrauch	Mißbrauch	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing|Person=3	1	nmod	_	_
4	und	und	CCONJ	KON	_	5	cc	_	_
5	Mord	Mord	NOUN	NN	Gender=Masc|Number=Sing|Person=3	3	conj	_	_
6	im	im	ADP	APPRART	AdpType=Prep|Case=Dat|PronType=Art	7	case	_	_
7	Internet	Internet	NOUN	NN	Case=Dat|Gender=Neut|Number=Sing|Person=3	1	nmod	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 cc	color:blue
1	Doch	Doch	CCONJ	KON	_	7	cc	_	_
2	die	die	DET	ART	Case=Nom|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	Sache	Sache	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	7	nsubj:pass	_	_
4	dürfte	dürfen	AUX	VMFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Mod	7	aux	_	_
5	noch	noch	ADV	ADV	_	7	advmod	_	_
6	nicht	nicht	PART	PTKNEG	Polarity=Neg	7	advmod	_	_
7	ausgestanden	ausstehen	VERB	VVPP	Aspect=Perf|VerbForm=Part	0	root	_	_
8	sein	sein	AUX	VAINF	VerbForm=Inf	7	aux:pass	_	_
9	.	.	PUNCT	$.	PunctType=Peri	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc	color:blue
1	Deutsche	deutsch	ADJ	ADJA	Degree=Pos|Gender=Fem|Number=Sing	2	amod	_	_
2	Bank	Bank	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	6	nsubj	_	_
3	24	24	NUM	CARD	Number=Plur|NumType=Card|Person=3	2	flat	_	_
4	und	und	CCONJ	KON	_	5	cc	_	_
5	Yahoo	Yahoo	PROPN	NE	Case=Nom|Number=Sing|Person=3	2	conj	_	_
6	kooperieren	kooperieren	VERB	VVFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


