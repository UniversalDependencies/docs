---
layout: base
title:  'Statistics of det:poss in UD_German-GSD'
udver: '2'
---

## Treebank Statistics: UD_German-GSD: Relations: `det:poss`

This relation is a language-specific subtype of <tt><a href="de_gsd-dep-det.html">det</a></tt>.

2362 nodes (1%) are attached to their parents as `det:poss`.

2362 instances of `det:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.34377646062659.

The following 6 pairs of parts of speech are connected with `det:poss`: <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-DET.html">DET</a></tt> (2295; 97% instances), <tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_gsd-pos-DET.html">DET</a></tt> (43; 2% instances), <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-PRON.html">PRON</a></tt> (20; 1% instances), <tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_gsd-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="de_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="de_gsd-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="de_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="de_gsd-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det:poss	color:blue
1	Ich	ich	PRON	PPER	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	hatte	haben	VERB	VAFIN	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
3	Gelegenheit	Gelegenheit	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	2	obj	_	_
4	eines	ein	DET	PIS	Case=Acc|Definite=Ind|Gender=Neut|Number=Sing|PronType=Ind	6	det	_	_
5	seiner	sein	DET	PPOSAT	Case=Gen|Gender=Neut|Gender[psor]=Masc,Neut|Number=Plur|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	6	det:poss	_	_
6	Seminare	Seminar	NOUN	NN	Case=Gen|Gender=Neut|Number=Plur	8	obj	_	_
7	zu	zu	PART	PTKZU	_	8	mark	_	_
8	besuchen	besuchen	VERB	VVINF	VerbForm=Inf	3	xcomp	_	SpaceAfter=No
9	.	.	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det:poss	color:blue
1	Jetzt	jetzt	ADV	ADV	_	2	advmod	_	_
2	zieren	zieren	VERB	VVFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	keltische	keltisch	ADJ	ADJA	Case=Nom|Gender=Neut|Number=Plur	4	amod	_	_
4	Symbole	Symbol	NOUN	NN	Case=Nom|Gender=Neut|Number=Plur	2	nsubj	_	_
5	meinen	mein	DET	PPOSAT	Case=Acc|Gender=Masc|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	6	det:poss	_	_
6	Smart	smart	PROPN	NN	Case=Acc|Gender=Masc|Number=Sing	2	obj	_	NamedEntity=Yes
7	rund	rund	ADV	ADV	_	8	advmod	_	_
8	herum	herum	ADV	PTKVZ	_	2	advmod	_	SpaceAfter=No
9	.	.	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 det:poss	color:blue
1	Viele	viel	PRON	PIS	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur|PronType=Ind	4	nsubj	_	_
2	dieser	dies	PRON	PDAT	Case=Gen|Gender=Neut|Number=Plur|PronType=Dem	3	det	_	_
3	Kinder	Kind	NOUN	NN	Case=Gen|Gender=Neut|Number=Plur	1	nmod	_	_
4	leben	leben	VERB	VVFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	auf	auf	ADP	APPR	_	7	case	_	_
6	der	der	DET	ART	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	Straße	Straße	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing	4	obl	_	SpaceAfter=No
8	,	,	PUNCT	$,	_	11	punct	_	_
9	ihr	ihr	PRON	PPOSAT	Case=Nom|Gender=Masc|Number=Sing|Poss=Yes	10	det:poss	_	_
10	Verdienst	Verdienst	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	11	nsubj	_	_
11	sichert	sichern	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	conj	_	_
12	gerade	gerade	ADV	ADV	_	11	advmod	_	_
13	das	der	DET	ART	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	14	det	_	_
14	Überleben	Überleben	NOUN	NN	Case=Acc|Gender=Neut|Number=Sing	11	obj	_	SpaceAfter=No
15	.	.	PUNCT	$.	_	4	punct	_	_

~~~


