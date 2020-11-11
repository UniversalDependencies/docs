---
layout: base
title:  'Statistics of punct in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `punct`

This relation is universal.

14940 nodes (13%) are attached to their parents as `punct`.

9059 instances of `punct` (61%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.09598393574297.

The following 17 pairs of parts of speech are connected with `punct`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (6811; 46% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (3227; 22% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (1589; 11% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (1351; 9% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (941; 6% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (444; 3% instances), <tt><a href="en_gum-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (154; 1% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (123; 1% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (109; 1% instances), <tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (47; 0% instances), <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (38; 0% instances), <tt><a href="en_gum-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (33; 0% instances), <tt><a href="en_gum-pos-AUX.html">AUX</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (30; 0% instances), <tt><a href="en_gum-pos-ADP.html">ADP</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (22; 0% instances), <tt><a href="en_gum-pos-PART.html">PART</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (15; 0% instances), <tt><a href="en_gum-pos-DET.html">DET</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (4; 0% instances), <tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 punct	color:blue
1	His	his	PRON	PRP$	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	2	nmod:poss	_	Discourse=preparation:20->21|Entity=(abstract-34(person-3)
2	lack	lack	NOUN	NN	Number=Sing	7	nsubj:pass	_	_
3	of	of	ADP	IN	_	4	case	_	_
4	moderation	moderation	NOUN	NN	Number=Sing	2	nmod	_	Entity=(abstract-35)abstract-34)
5	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	aux:pass	_	_
6	not	not	PART	RB	Polarity=Neg	7	advmod	_	_
7	restricted	restrict	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	_
8	to	to	ADP	IN	_	10	case	_	_
9	physical	physical	ADJ	JJ	Degree=Pos	10	amod	_	Entity=(event-36
10	exercise	exercise	NOUN	NN	Number=Sing	7	obl	_	Entity=event-36)|SpaceAfter=No
11	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 punct	color:blue
1	In	in	ADP	IN	_	3	case	_	Discourse=elaboration:70->65
2	his	his	PRON	PRP$	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	3	nmod:poss	_	Entity=(abstract-96(person-90)
3	memory	memory	NOUN	NN	Number=Sing	5	obl	_	Entity=abstract-96)
4	Byron	Byron	PROPN	NNP	Number=Sing	5	nsubj	_	Entity=(person-3)
5	composed	compose	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
6	Thyrza	Thyrza	PROPN	NNP	Number=Sing	5	obj	_	Entity=(abstract-97)|SpaceAfter=No
7	,	,	PUNCT	,	_	9	punct	_	_
8	a	a	DET	DT	Definite=Ind|PronType=Art	9	det	_	Entity=(abstract-97
9	series	series	NOUN	NN	Number=Sing	6	appos	_	_
10	of	of	ADP	IN	_	11	case	_	_
11	elegies	elegy	NOUN	NNS	Number=Plur	9	nmod	_	Entity=abstract-97)|SpaceAfter=No
12	.	.	PUNCT	.	_	5	punct	_	_
13	[	[	PUNCT	-LSB-	_	14	punct	_	Discourse=evidence:71->70|SpaceAfter=No
14	25	25	NUM	CD	NumType=Card	5	dep	_	Entity=(abstract-98)|SpaceAfter=No
15	]	]	PUNCT	-RSB-	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 punct	color:blue
1	Digital	Digital	PROPN	NNP	Number=Sing	2	amod	_	Discourse=preparation:1->57|Entity=(place-1(abstract-2
2	Humanities	Humanities	PROPN	NNP	Number=Sing	3	compound	_	Entity=abstract-2)
3	Clinics	Clinic	PROPN	NNPS	Number=Plur	0	root	_	Entity=place-1)
4	-	-	PUNCT	:	_	3	punct	_	_

~~~


