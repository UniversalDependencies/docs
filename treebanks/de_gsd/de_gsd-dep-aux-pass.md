---
layout: base
title:  'Statistics of aux:pass in UD_German-GSD'
udver: '2'
---

## Treebank Statistics: UD_German-GSD: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="de_gsd-dep-aux.html">aux</a></tt>.

3425 nodes (1%) are attached to their parents as `aux:pass`.

2253 instances of `aux:pass` (66%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.57401459854015.

The following 4 pairs of parts of speech are connected with `aux:pass`: <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-AUX.html">AUX</a></tt> (3414; 100% instances), <tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_gsd-pos-AUX.html">AUX</a></tt> (6; 0% instances), <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="de_gsd-pos-X.html">X</a></tt>-<tt><a href="de_gsd-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 aux:pass	color:blue
1	Dieses	dies	PRON	PDAT	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	det	_	_
2	Video	Video	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing	6	nsubj:pass	_	_
3	konnte	können	AUX	VMFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	aux	_	_
4	angeblich	angeblich	ADV	ADJD	_	5	advmod	_	_
5	nicht	nicht	PART	PTKNEG	Polarity=Neg	6	advmod	_	_
6	storniert	stornieren	VERB	VVPP	VerbForm=Part	0	root	_	_
7	werden	werden	AUX	VAINF	VerbForm=Inf|Voice=Pass	6	aux:pass	_	SpaceAfter=No
8	.	.	PUNCT	$.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 aux:pass	color:blue
1	Die	der	DET	ART	Case=Nom|Definite=Def|Gender=Masc|Number=Plur|PronType=Art	4	det	_	_
2	darüber	darüber	ADV	PAV	_	3	advmod	_	_
3	liegenden	liegend	ADJ	ADJA	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	4	amod	_	_
4	Räume	Raum	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur	7	nsubj:pass	_	_
5	wurden	werden	AUX	VAFIN	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	7	aux:pass	_	_
6	modern	modern	ADJ	ADJD	Degree=Pos	7	advmod	_	_
7	gestaltet	gestalten	ADJ	VVPP	Degree=Pos|VerbForm=Part	0	root	_	SpaceAfter=No
8	.	.	PUNCT	$.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 aux:pass	color:blue
1	Ist	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
2	echt	echt	ADV	ADV	_	5	advmod	_	_
3	die	der	DET	ART	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
4	beste	gut	ADJ	ADJA	Case=Nom|Degree=Sup|Gender=Fem|Number=Sing	5	amod	_	_
5	Behandlung	Behandlung	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
6	gewesen	sein	AUX	VAPP	VerbForm=Part	5	aux:pass	_	SpaceAfter=No
7	.	.	PUNCT	$.	_	5	punct	_	_

~~~


