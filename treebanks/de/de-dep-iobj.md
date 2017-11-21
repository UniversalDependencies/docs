---
layout: base
title:  'Statistics of iobj in UD_German'
udver: '2'
---

## Treebank Statistics: UD_German: Relations: `iobj`

This relation is universal.

1276 nodes (0%) are attached to their parents as `iobj`.

750 instances of `iobj` (59%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.99529780564263.

The following 20 pairs of parts of speech are connected with `iobj`: <tt><a href="de-pos-VERB.html">VERB</a></tt>-<tt><a href="de-pos-NOUN.html">NOUN</a></tt> (545; 43% instances), <tt><a href="de-pos-VERB.html">VERB</a></tt>-<tt><a href="de-pos-PRON.html">PRON</a></tt> (466; 37% instances), <tt><a href="de-pos-VERB.html">VERB</a></tt>-<tt><a href="de-pos-PROPN.html">PROPN</a></tt> (144; 11% instances), <tt><a href="de-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de-pos-NOUN.html">NOUN</a></tt> (33; 3% instances), <tt><a href="de-pos-AUX.html">AUX</a></tt>-<tt><a href="de-pos-NOUN.html">NOUN</a></tt> (27; 2% instances), <tt><a href="de-pos-AUX.html">AUX</a></tt>-<tt><a href="de-pos-PRON.html">PRON</a></tt> (27; 2% instances), <tt><a href="de-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de-pos-PRON.html">PRON</a></tt> (13; 1% instances), <tt><a href="de-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de-pos-PROPN.html">PROPN</a></tt> (5; 0% instances), <tt><a href="de-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="de-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="de-pos-PRON.html">PRON</a></tt>-<tt><a href="de-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="de-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="de-pos-ADV.html">ADV</a></tt>-<tt><a href="de-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="de-pos-ADV.html">ADV</a></tt>-<tt><a href="de-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="de-pos-AUX.html">AUX</a></tt>-<tt><a href="de-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="de-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="de-pos-PART.html">PART</a></tt>-<tt><a href="de-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="de-pos-PART.html">PART</a></tt>-<tt><a href="de-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="de-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="de-pos-VERB.html">VERB</a></tt>-<tt><a href="de-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 iobj	color:blue
1	Kann	können	AUX	VMFIN	Mood=Ind|Tense=Pres|VerbForm=Fin	8	aux	_	_
2	mich	ich	PRON	PPER	Case=Acc|Number=Sing|Person=1|PronType=Prs	8	obj	_	_
3	der	der	DET	ART	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
4	ersten	erst	ADJ	ADJA	Case=Dat|Degree=Pos|Gender=Fem|Number=Sing|NumType=Ord	5	amod	_	_
5	Bewertung	Bewertung	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing	8	iobj	_	_
6	überhaupt	überhaupt	ADV	ADV	_	7	advmod	_	_
7	nicht	nicht	PART	PTKNEG	Polarity=Neg	8	advmod	_	_
8	anschließen	anschließen	VERB	VVINF	VerbForm=Inf	0	root	_	SpaceAfter=No
9	.	.	PUNCT	$.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 9 iobj	color:blue
1	Also	also	ADV	ADV	_	3	advmod	_	_
2	ich	ich	PRON	PPER	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	bin	sein	VERB	VAFIN	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	öfter	öfter	ADV	ADV	_	3	advmod	_	_
5	hier	hier	ADV	ADV	_	3	advmod	_	SpaceAfter=No
6	,	,	PUNCT	$,	_	3	punct	_	_
7	da	da	SCONJ	KOUS	_	13	mark	_	_
8	es	es	PRON	PPER	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	13	nsubj	_	_
9	mir	ich	PRON	PRF	Case=Dat|Number=Sing|Person=1|PronType=Prs|Reflex=Yes	13	iobj	_	_
10	hier	hier	ADV	ADV	_	13	advmod	_	_
11	sehr	sehr	ADV	ADV	_	12	advmod	_	_
12	gut	gut	ADV	ADJD	_	13	advmod	_	_
13	gefällt	fällen	VERB	VVPP	VerbForm=Part	3	advcl	_	SpaceAfter=No
14	!	!	PUNCT	$.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 iobj	color:blue
1	Die	der	DET	ART	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	SPD	SPD	PROPN	NE	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
3	begegnet	begegnen	VERB	VVFIN	Number=Sing|Person=3|VerbForm=Fin	0	root	_	_
4	Lafontaine	Lafontaine	PROPN	NE	Case=Dat|Number=Sing	3	iobj	_	_
5	skeptisch	skeptisch	ADV	ADJD	_	3	advmod	_	SpaceAfter=No
6	.	.	PUNCT	$.	_	3	punct	_	_

~~~


