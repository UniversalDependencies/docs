---
layout: base
title:  'Statistics of punct in UD_German-GSD'
udver: '2'
---

## Treebank Statistics: UD_German-GSD: Relations: `punct`

This relation is universal.

38511 nodes (13%) are attached to their parents as `punct`.

22349 instances of `punct` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.7248058996131.

The following 17 pairs of parts of speech are connected with `punct`: <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-PUNCT.html">PUNCT</a></tt> (18589; 48% instances), <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-PUNCT.html">PUNCT</a></tt> (8791; 23% instances), <tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_gsd-pos-PUNCT.html">PUNCT</a></tt> (6228; 16% instances), <tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_gsd-pos-PUNCT.html">PUNCT</a></tt> (2993; 8% instances), <tt><a href="de_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="de_gsd-pos-PUNCT.html">PUNCT</a></tt> (901; 2% instances), <tt><a href="de_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="de_gsd-pos-PUNCT.html">PUNCT</a></tt> (348; 1% instances), <tt><a href="de_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="de_gsd-pos-PUNCT.html">PUNCT</a></tt> (239; 1% instances), <tt><a href="de_gsd-pos-X.html">X</a></tt>-<tt><a href="de_gsd-pos-PUNCT.html">PUNCT</a></tt> (151; 0% instances), <tt><a href="de_gsd-pos-DET.html">DET</a></tt>-<tt><a href="de_gsd-pos-PUNCT.html">PUNCT</a></tt> (130; 0% instances), <tt><a href="de_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="de_gsd-pos-PUNCT.html">PUNCT</a></tt> (40; 0% instances), <tt><a href="de_gsd-pos-PART.html">PART</a></tt>-<tt><a href="de_gsd-pos-PUNCT.html">PUNCT</a></tt> (35; 0% instances), <tt><a href="de_gsd-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="de_gsd-pos-PUNCT.html">PUNCT</a></tt> (31; 0% instances), <tt><a href="de_gsd-pos-AUX.html">AUX</a></tt>-<tt><a href="de_gsd-pos-PUNCT.html">PUNCT</a></tt> (18; 0% instances), <tt><a href="de_gsd-pos-SYM.html">SYM</a></tt>-<tt><a href="de_gsd-pos-PUNCT.html">PUNCT</a></tt> (9; 0% instances), <tt><a href="de_gsd-pos-INTJ.html">INTJ</a></tt>-<tt><a href="de_gsd-pos-PUNCT.html">PUNCT</a></tt> (4; 0% instances), <tt><a href="de_gsd-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="de_gsd-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="de_gsd-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="de_gsd-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 punct	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 punct	color:blue
1	Manasse	Manasse	PROPN	NN	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	NamedEntity=Yes
2	ist	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	ein	ein	DET	ART	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
4	einzigartiger	einzigartig	ADJ	ADJA	Case=Nom|Gender=Masc|Number=Sing	5	amod	_	_
5	Parfümeur	Parfümeur	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	$.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 punct	color:blue
1	Wenn	wenn	SCONJ	KOUS	_	6	mark	_	_
2	es	es	PRON	PPER	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	expl	_	_
3	schon	schon	ADV	ADV	_	6	advmod	_	_
4	Fastfood	Fastfood	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	_
5	sein	sein	AUX	VAINF	VerbForm=Inf	6	aux	_	_
6	muss	müssen	VERB	VMFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	advcl	_	SpaceAfter=No
7	,	,	PUNCT	$,	_	6	punct	_	_
8	dann	dann	ADV	ADV	_	10	advmod	_	_
9	bei	bei	ADP	APPR	_	10	case	_	_
10	Jim	Jim	PROPN	NE	Case=Dat|Gender=Masc|Number=Sing	0	root	_	NamedEntity=Yes
11	Block	Block	PROPN	NN	Case=Dat|Gender=Masc|Number=Sing	10	flat	_	SpaceAfter=No|NamedEntity=Yes
12	.	.	PUNCT	$.	_	10	punct	_	_

~~~


