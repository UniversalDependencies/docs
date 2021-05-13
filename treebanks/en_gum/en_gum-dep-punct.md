---
layout: base
title:  'Statistics of punct in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `punct`

This relation is universal.

17731 nodes (13%) are attached to their parents as `punct`.

11058 instances of `punct` (62%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.0256612712199.

The following 17 pairs of parts of speech are connected with `punct`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (8138; 46% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (3725; 21% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (1725; 10% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (1411; 8% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (1163; 7% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (585; 3% instances), <tt><a href="en_gum-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (402; 2% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (203; 1% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (115; 1% instances), <tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (72; 0% instances), <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (59; 0% instances), <tt><a href="en_gum-pos-AUX.html">AUX</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (44; 0% instances), <tt><a href="en_gum-pos-ADP.html">ADP</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (32; 0% instances), <tt><a href="en_gum-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (31; 0% instances), <tt><a href="en_gum-pos-PART.html">PART</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (20; 0% instances), <tt><a href="en_gum-pos-DET.html">DET</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (4; 0% instances), <tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 punct	color:blue
1	His	his	PRON	PRP$	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	2	nmod:poss	2:nmod:poss	Discourse=preparation:20->21|Entity=(abstract-34(person-3-Lord_Byron)
2	lack	lack	NOUN	NN	Number=Sing	7	nsubj:pass	7:nsubj:pass	_
3	of	of	ADP	IN	_	4	case	4:case	_
4	moderation	moderation	NOUN	NN	Number=Sing	2	nmod	2:nmod:of	Entity=(abstract-35)abstract-34)
5	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	aux:pass	7:aux:pass	_
6	not	not	PART	RB	Polarity=Neg	7	advmod	7:advmod	_
7	restricted	restrict	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
8	to	to	ADP	IN	_	10	case	10:case	_
9	physical	physical	ADJ	JJ	Degree=Pos	10	amod	10:amod	Entity=(event-36
10	exercise	exercise	NOUN	NN	Number=Sing	7	obl	7:obl:to	Entity=event-36)|SpaceAfter=No
11	.	.	PUNCT	.	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 punct	color:blue
1	In	in	ADP	IN	_	3	case	3:case	Discourse=elaboration:70->65
2	his	his	PRON	PRP$	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	3	nmod:poss	3:nmod:poss	Entity=(abstract-96(person-90)
3	memory	memory	NOUN	NN	Number=Sing	5	obl	5:obl:in	Entity=abstract-96)
4	Byron	Byron	PROPN	NNP	Number=Sing	5	nsubj	5:nsubj	Entity=(person-3-Lord_Byron)
5	composed	compose	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
6	Thyrza	Thyrza	PROPN	NNP	Number=Sing	5	obj	5:obj	Entity=(abstract-97)|SpaceAfter=No
7	,	,	PUNCT	,	_	9	punct	9:punct	_
8	a	a	DET	DT	Definite=Ind|PronType=Art	9	det	9:det	Entity=(abstract-97
9	series	series	NOUN	NN	Number=Sing	6	appos	6:appos	_
10	of	of	ADP	IN	_	11	case	11:case	_
11	elegies	elegy	NOUN	NNS	Number=Plur	9	nmod	9:nmod:of	Entity=abstract-97)|SpaceAfter=No
12	.	.	PUNCT	.	_	5	punct	5:punct	_
13	[	[	PUNCT	-LRB-	_	14	punct	14:punct	Discourse=evidence:71->70|SpaceAfter=No
14	25	25	NUM	CD	NumForm=Digit|NumType=Card	5	dep	5:dep	Entity=(abstract-98)|SpaceAfter=No
15	]	]	PUNCT	-RRB-	_	14	punct	14:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 punct	color:blue
1	Digital	Digital	ADJ	NNP	Degree=Pos	2	amod	2:amod	Discourse=preparation:1->57|Entity=(place-1(abstract-2-Digital_humanities
2	Humanities	Humanity	PROPN	NNPS	Number=Plur	3	compound	3:compound	Entity=abstract-2-Digital_humanities)
3	Clinics	Clinic	PROPN	NNPS	Number=Plur	0	root	0:root	Entity=place-1)
4	-	-	PUNCT	:	_	3	punct	3:punct	_

~~~


