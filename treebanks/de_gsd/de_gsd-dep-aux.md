---
layout: base
title:  'Statistics of aux in UD_German-GSD'
udver: '2'
---

## Treebank Statistics: UD_German-GSD: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="de_gsd-dep-aux-pass.html">aux:pass</a></tt>.

3282 nodes (1%) are attached to their parents as `aux`.

2203 instances of `aux` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.19530773918342.

The following 9 pairs of parts of speech are connected with `aux`: <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-AUX.html">AUX</a></tt> (3178; 97% instances), <tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_gsd-pos-AUX.html">AUX</a></tt> (64; 2% instances), <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-AUX.html">AUX</a></tt> (32; 1% instances), <tt><a href="de_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="de_gsd-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="de_gsd-pos-AUX.html">AUX</a></tt>-<tt><a href="de_gsd-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="de_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="de_gsd-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="de_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="de_gsd-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="de_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="de_gsd-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_gsd-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 aux	color:blue
1	Habe	haben	AUX	VAFIN	Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	aux	_	_
2	die	der	DET	ART	Case=Nom|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	4	det	_	_
3	bestellten	bestellt	ADJ	ADJA	Case=Nom|Gender=Neut|Number=Plur	4	amod	_	_
4	Artikel	Artikel	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	6	obj	_	_
5	prompt	prompt	ADV	ADJD	_	6	advmod	_	_
6	erhalten	erhalten	VERB	VVPP	VerbForm=Part	0	root	_	SpaceAfter=No
7	.	.	PUNCT	$.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux	color:blue
1	Man	man	PRON	PIS	Case=Nom|Definite=Ind|Number=Sing|PronType=Ind	3	nsubj	_	_
2	darf	dürfen	AUX	VMFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	gespannt	spannen	ADJ	ADJD	_	0	root	_	_
4	sein	sein	AUX	VAINF	VerbForm=Inf	3	cop	_	SpaceAfter=No
5	.	.	PUNCT	$.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 aux	color:blue
1	Das	der	DET	ART	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	2	det	_	_
2	Modell	Modell	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing	7	nsubj	_	_
3	Magdeburg	Magdeburg	PROPN	NE	Case=Nom|Gender=Neut|Number=Sing	2	flat	_	NamedEntity=Yes
4	muß	müssen	AUX	VMFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
5	noch	noch	ADV	ADV	_	6	advmod	_	_
6	nicht	nicht	PART	PTKNEG	Polarity=Neg	7	advmod	_	_
7	Endstation	Endstation	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
8	sein	sein	AUX	VAINF	VerbForm=Inf	7	cop	_	SpaceAfter=No
9	.	.	PUNCT	$.	_	7	punct	_	_

~~~


