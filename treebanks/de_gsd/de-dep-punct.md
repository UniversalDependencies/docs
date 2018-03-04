---
layout: base
title:  'Statistics of punct in UD_German'
udver: '2'
---

## Treebank Statistics: UD_German: Relations: `punct`

This relation is universal.

38295 nodes (13%) are attached to their parents as `punct`.

27705 instances of `punct` (72%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.37104060582321.

The following 24 pairs of parts of speech are connected with `punct`: <tt><a href="de-pos-VERB.html">VERB</a></tt>-<tt><a href="de-pos-PUNCT.html">PUNCT</a></tt> (17283; 45% instances), <tt><a href="de-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de-pos-PUNCT.html">PUNCT</a></tt> (9320; 24% instances), <tt><a href="de-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de-pos-PUNCT.html">PUNCT</a></tt> (7306; 19% instances), <tt><a href="de-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de-pos-PUNCT.html">PUNCT</a></tt> (2986; 8% instances), <tt><a href="de-pos-NUM.html">NUM</a></tt>-<tt><a href="de-pos-PUNCT.html">PUNCT</a></tt> (803; 2% instances), <tt><a href="de-pos-PRON.html">PRON</a></tt>-<tt><a href="de-pos-PUNCT.html">PUNCT</a></tt> (185; 0% instances), <tt><a href="de-pos-ADV.html">ADV</a></tt>-<tt><a href="de-pos-PUNCT.html">PUNCT</a></tt> (125; 0% instances), <tt><a href="de-pos-X.html">X</a></tt>-<tt><a href="de-pos-PUNCT.html">PUNCT</a></tt> (124; 0% instances), <tt><a href="de-pos-ADP.html">ADP</a></tt>-<tt><a href="de-pos-PUNCT.html">PUNCT</a></tt> (45; 0% instances), <tt><a href="de-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="de-pos-PUNCT.html">PUNCT</a></tt> (20; 0% instances), <tt><a href="de-pos-AUX.html">AUX</a></tt>-<tt><a href="de-pos-PUNCT.html">PUNCT</a></tt> (18; 0% instances), <tt><a href="de-pos-PART.html">PART</a></tt>-<tt><a href="de-pos-PUNCT.html">PUNCT</a></tt> (17; 0% instances), <tt><a href="de-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="de-pos-PUNCT.html">PUNCT</a></tt> (13; 0% instances), <tt><a href="de-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de-pos-X.html">X</a></tt> (11; 0% instances), <tt><a href="de-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de-pos-X.html">X</a></tt> (9; 0% instances), <tt><a href="de-pos-NUM.html">NUM</a></tt>-<tt><a href="de-pos-X.html">X</a></tt> (8; 0% instances), <tt><a href="de-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de-pos-PROPN.html">PROPN</a></tt> (7; 0% instances), <tt><a href="de-pos-DET.html">DET</a></tt>-<tt><a href="de-pos-PUNCT.html">PUNCT</a></tt> (4; 0% instances), <tt><a href="de-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de-pos-ADP.html">ADP</a></tt> (4; 0% instances), <tt><a href="de-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="de-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="de-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="de-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="de-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="de-pos-X.html">X</a></tt>-<tt><a href="de-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 punct	color:blue
1	Ich	ich	PRON	PPER	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	hatte	haben	VERB	VAFIN	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
3	Gelegenheit	Gelegenheit	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	2	obj	_	_
4	eines	ein	DET	ART	Case=Acc|Definite=Ind|Number=Plur|PronType=Art	6	det	_	_
5	seiner	sein	PRON	PPOSAT	Case=Acc|Gender[psor]=Masc,Neut|Number=Plur|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	6	det:poss	_	_
6	Seminare	Seminar	NOUN	NN	Case=Acc|Number=Plur	8	obj	_	_
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
1	Manasse	Manasse	PROPN	NN	Case=Nom|Number=Sing	5	nsubj	_	_
2	ist	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	ein	ein	DET	ART	Definite=Ind|PronType=Art	5	det	_	_
4	einzigartiger	einzigartig	ADJ	ADJA	Degree=Cmp,Pos	5	amod	_	_
5	Parfümeur	Parfümeur	NOUN	NN	_	0	root	_	SpaceAfter=No
6	.	.	PUNCT	$.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 punct	color:blue
1	Wenn	wenn	SCONJ	KOUS	_	6	mark	_	_
2	es	es	PRON	PPER	Case=Acc,Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	expl	_	_
3	schon	schon	ADV	ADV	_	6	advmod	_	_
4	Fastfood	Fastfood	NOUN	NN	Case=Nom|Number=Sing	6	nsubj	_	_
5	sein	sein	AUX	VAINF	VerbForm=Inf	6	aux	_	_
6	muss	müssen	VERB	VMFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	advcl	_	SpaceAfter=No
7	,	,	PUNCT	$,	_	10	punct	_	_
8	dann	dann	ADV	ADV	_	10	advmod	_	_
9	bei	bei	ADP	APPR	_	10	case	_	_
10	Jim	Jim	PROPN	NE	_	0	root	_	_
11	Block	Block	PROPN	NN	_	10	flat	_	SpaceAfter=No
12	.	.	PUNCT	$.	_	10	punct	_	_

~~~


