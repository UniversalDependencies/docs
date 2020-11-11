---
layout: base
title:  'Statistics of compound:prt in UD_German-HDT'
udver: '2'
---

## Treebank Statistics: UD_German-HDT: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="de_hdt-dep-compound.html">compound</a></tt>.

20645 nodes (1%) are attached to their parents as `compound:prt`.

19476 instances of `compound:prt` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.73548074594333.

The following 7 pairs of parts of speech are connected with `compound:prt`: <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-ADP.html">ADP</a></tt> (20167; 98% instances), <tt><a href="de_hdt-pos-AUX.html">AUX</a></tt>-<tt><a href="de_hdt-pos-ADP.html">ADP</a></tt> (247; 1% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt> (186; 1% instances), <tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_hdt-pos-ADP.html">ADP</a></tt> (32; 0% instances), <tt><a href="de_hdt-pos-AUX.html">AUX</a></tt>-<tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt> (6; 0% instances), <tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 compound:prt	color:blue
1	"	"	PUNCT	$(	PunctType=Brck	4	punct	_	_
2	Diesen	dies	DET	PDAT	Case=Dat|Number=Plur|PronType=Dem	3	det	_	_
3	Gerüchten	Gerücht	NOUN	NN	Case=Dat|Gender=Neut|Number=Plur|Person=3	4	obj	_	_
4	liegt	liegen	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	eine	eine	DET	ART	Case=Nom|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
6	unseriöse	unseriöse	ADJ	ADJA	Gender=Fem|Number=Sing	7	amod	_	_
7	Recherche	Recherche	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	4	nsubj	_	_
8	zugrunde	zugrunde	ADP	PTKVZ	PartType=Vbp	4	compound:prt	_	_
9	.	.	PUNCT	$.	PunctType=Peri	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 compound:prt	color:blue
1	Das	Das	PRON	PDS	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Dem	2	obj	_	_
2	haben	haben	AUX	VAFIN	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	wir	wir	PRON	PPER	Case=Nom|Number=Plur|Person=1|PronType=Prs	2	nsubj	_	_
4	jetzt	jetzt	ADV	ADV	_	2	advmod	_	_
5	auch	auch	ADV	ADV	_	7	advmod	_	_
6	in	in	ADP	APPR	AdpType=Prep|Case=Dat	7	case	_	_
7	Deutschland	Deutschland	PROPN	NE	Case=Dat|Number=Sing|Person=3	2	obl	_	_
8	vor	vor	ADP	PTKVZ	PartType=Vbp	2	compound:prt	_	_
9	"	"	PUNCT	$(	PunctType=Brck	2	punct	_	_
10	,	,	PUNCT	$,	PunctType=Comm	11	punct	_	_
11	sagte	sagen	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	parataxis	_	_
12	Schmid	Schmid	PROPN	NE	Case=Nom|Number=Sing|Person=3	11	nsubj	_	_
13	.	.	PUNCT	$.	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 compound:prt	color:blue
1	Die	Die	DET	ART	Case=Nom|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	Expo-Gesellschaft	Gesellschaft	NOUN	NN	Gender=Fem|Number=Sing|Person=3	7	nsubj	_	_
3	kann	können	AUX	VMFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Mod	7	aux	_	_
4	einem	ein	PRON	PIS	Case=Dat|Gender=Neut|Number=Sing|Person=3|PronType=Ind,Neg,Tot	7	obj	_	_
5	langsam	langsam	ADJ	ADJD	Degree=Pos|Variant=Short	7	advmod	_	_
6	leid	leid	ADJ	ADJD	Degree=Pos|Variant=Short	7	compound:prt	_	_
7	tun	tun	VERB	VVINF	VerbForm=Inf	0	root	_	_
8	.	.	PUNCT	$.	PunctType=Peri	7	punct	_	_

~~~


