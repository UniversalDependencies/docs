---
layout: base
title:  'Statistics of obl:arg in UD_German-HDT'
udver: '2'
---

## Treebank Statistics: UD_German-HDT: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="de_hdt-dep-obl.html">obl</a></tt>.

9933 nodes (0%) are attached to their parents as `obl:arg`.

6929 instances of `obl:arg` (70%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.82452431289641.

The following 21 pairs of parts of speech are connected with `obl:arg`: <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt> (4844; 49% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-PRON.html">PRON</a></tt> (3227; 32% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt> (976; 10% instances), <tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_hdt-pos-PRON.html">PRON</a></tt> (295; 3% instances), <tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt> (131; 1% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-DET.html">DET</a></tt> (120; 1% instances), <tt><a href="de_hdt-pos-DET.html">DET</a></tt>-<tt><a href="de_hdt-pos-PRON.html">PRON</a></tt> (82; 1% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-X.html">X</a></tt> (54; 1% instances), <tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt> (47; 0% instances), <tt><a href="de_hdt-pos-AUX.html">AUX</a></tt>-<tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt> (32; 0% instances), <tt><a href="de_hdt-pos-AUX.html">AUX</a></tt>-<tt><a href="de_hdt-pos-PRON.html">PRON</a></tt> (32; 0% instances), <tt><a href="de_hdt-pos-ADV.html">ADV</a></tt>-<tt><a href="de_hdt-pos-DET.html">DET</a></tt> (28; 0% instances), <tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_hdt-pos-DET.html">DET</a></tt> (24; 0% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt> (14; 0% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-NUM.html">NUM</a></tt> (10; 0% instances), <tt><a href="de_hdt-pos-ADV.html">ADV</a></tt>-<tt><a href="de_hdt-pos-PRON.html">PRON</a></tt> (7; 0% instances), <tt><a href="de_hdt-pos-AUX.html">AUX</a></tt>-<tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt> (4; 0% instances), <tt><a href="de_hdt-pos-AUX.html">AUX</a></tt>-<tt><a href="de_hdt-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="de_hdt-pos-AUX.html">AUX</a></tt>-<tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="de_hdt-pos-X.html">X</a></tt>-<tt><a href="de_hdt-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl:arg	color:blue
1	"	"	PUNCT	$(	PunctType=Brck	4	punct	_	_
2	Diesen	dieser	DET	PDAT	Case=Dat|Number=Plur|PronType=Dem	3	det	_	_
3	Gerüchten	Gerücht	NOUN	NN	Case=Dat|Gender=Neut|Number=Plur	4	obl:arg	_	_
4	liegt	liegen	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	eine	ein	DET	ART	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing|NumType=Card|PronType=Art	7	det	_	_
6	unseriöse	unseriöse	ADJ	ADJA	Gender=Fem|Number=Sing	7	amod	_	_
7	Recherche	Recherche	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
8	zugrunde	zugrunde	ADP	PTKVZ	PartType=Vbp	4	compound:prt	_	_
9	.	.	PUNCT	$.	PunctType=Peri	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obl:arg	color:blue
1	Gleiches	gleich	ADJ	ADJA	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	2	obj	_	_
2	melden	melden	VERB	VVFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	uns	wir	PRON	PPER	Case=Dat|Number=Plur|Person=1|PronType=Prs	2	obl:arg	_	_
4	Leser	Leser	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur	2	nsubj	_	_
5	aus	aus	ADP	APPR	AdpType=Prep|Case=Dat	8	case	_	_
6	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	8	det	_	_
7	ganzen	ganz	ADJ	ADJA	Case=Dat|Degree=Pos|Gender=Neut|Number=Sing	8	amod	_	_
8	Bundesgebiet	Gebiet	NOUN	NN	Case=Dat|Gender=Neut|Number=Sing	4	nmod	_	_
9	.	.	PUNCT	$.	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obl:arg	color:blue
1	Netscape	Netscape	PROPN	NE	Case=Dat|Number=Sing	2	obl:arg	_	_
2	droht	drohen	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	derweil	derweil	ADV	ADV	_	2	advmod	_	_
4	noch	noch	ADV	ADV	_	7	advmod	_	_
5	von	von	ADP	APPR	AdpType=Prep|Case=Dat	7	case	_	_
6	anderer	anderer	DET	ADJA	Case=Dat|Gender=Fem|Number=Sing|PronType=Ind	7	det	_	_
7	Seite	Seite	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing	2	obl	_	_
8	Ungemach	Ungemach	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing	2	nsubj	_	_
9	.	.	PUNCT	$.	PunctType=Peri	2	punct	_	_

~~~


