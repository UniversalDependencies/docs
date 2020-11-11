---
layout: base
title:  'Statistics of vocative in UD_German-GSD'
udver: '2'
---

## Treebank Statistics: UD_German-GSD: Relations: `vocative`

This relation is universal.

5 nodes (0%) are attached to their parents as `vocative`.

3 instances of `vocative` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.8.

The following 4 pairs of parts of speech are connected with `vocative`: <tt><a href="de_gsd-pos-INTJ.html">INTJ</a></tt>-<tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt> (2; 40% instances), <tt><a href="de_gsd-pos-INTJ.html">INTJ</a></tt>-<tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt> (1; 20% instances), <tt><a href="de_gsd-pos-PART.html">PART</a></tt>-<tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt> (1; 20% instances), <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 vocative	color:blue
1	Hallo	hallo	INTJ	ITJ	_	0	root	_	_
2	Herr	Herr	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	1	vocative	_	_
3	Mark	Mark	PROPN	NE	Case=Nom|Gender=Masc|Number=Sing	2	flat	_	SpaceAfter=No|NamedEntity=Yes
4	,	,	PUNCT	$,	_	1	punct	_	_
5	ich	ich	PRON	PPER	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
6	nenne	nennen	VERB	VVFIN	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	1	conj	_	_
7	Sie	Sie|sie	PRON	PPER	Case=Acc|Number=Plur|Person=3|PronType=Prs	6	obj	_	_
8	jezt	jezt	ADV	ADV	_	9	advmod	_	_
9	so	so	ADV	ADV	_	6	advmod	_	_
10	und	und	CCONJ	KON	_	6	cc	_	_
11	nicht	nicht	PART	PTKNEG	Polarity=Neg	6	advmod	_	_
12	mit	mit	ADP	APPR	_	15	case	_	_
13	ihrem	ihr	DET	PPOSAT	Case=Dat|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	15	det:poss	_	_
14	richtigen	richtig	ADJ	ADJA	Case=Dat|Gender=Masc|Number=Sing	15	amod	_	_
15	Namen	Name	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing	6	obl	_	SpaceAfter=No
16	.	.	PUNCT	$.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 vocative	color:blue
1	Hallo	hallo	INTJ	ITJ	_	0	root	_	_
2	G	G	PROPN	NE	Case=Nom|Number=Sing	5	nmod	_	NamedEntity=Yes
3	&	&	SYM	NE	_	4	cc	_	_
4	W	W	PROPN	NE	Case=Nom|Number=Sing	2	conj	_	NamedEntity=Yes
5	Team	Team	PROPN	NN	Case=Nom|Gender=Neut|Number=Sing	1	vocative	_	SpaceAfter=No|NamedEntity=Yes
6	,	,	PUNCT	$,	_	8	punct	_	_
7	vielen	viel	DET	PIAT	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing|PronType=Ind	8	amod	_	_
8	Dank	Dank	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	1	conj	_	_
9	nochmal	nochmal	ADV	ADV	_	8	advmod	_	_
10	für	für	ADP	APPR	_	15	case	_	_
11	die	der	DET	ART	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
12	schnelle	schnell	ADJ	ADJA	Case=Acc|Gender=Fem|Number=Sing	15	amod	_	_
13	und	und	CCONJ	KON	_	14	cc	_	_
14	kompetente	kompetent	ADJ	ADJA	Case=Acc|Gender=Fem|Number=Sing	12	conj	_	_
15	Bürovermietung	Bürovermietung	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	8	nmod	_	SpaceAfter=No
16	.	.	PUNCT	$.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 vocative	color:blue
1	Danke	danke	PART	PTKANT	_	0	root	_	_
2	Rosemarie	Rosemarie	PROPN	NN	Case=Nom|Gender=Fem|Number=Sing	1	vocative	_	SpaceAfter=No|NamedEntity=Yes
3	!	!	PUNCT	$.	_	1	punct	_	_
4	:-)	:-)	SYM	NE	Case=Nom|Gender=Masc|Number=Sing	1	dep	_	_

~~~


