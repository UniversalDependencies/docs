---
layout: base
title:  'Statistics of nmod:poss in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="de_pud-dep-nmod.html">nmod</a></tt>.

49 nodes (0%) are attached to their parents as `nmod:poss`.

49 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.51020408163265.

The following 4 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt> (25; 51% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-PRON.html">PRON</a></tt> (14; 29% instances), <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (9; 18% instances), <tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_pud-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:poss	color:blue
1	Und	und	CCONJ	CC	_	3	cc	_	_
2	was	was	PRON	WP	Case=Nom|Gender=Neut|Number=Sing|PronType=Int,Rel	3	nsubj	_	_
3	ist	sein	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	mit	mit	ADP	IN	_	6	case	_	_
5	Australiens	Australien	PROPN	NNP	Case=Gen|Gender=Neut|Number=Sing	6	nmod:poss	_	_
6	Position	Position	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing	3	obl	_	SpaceAfter=No
7	?	?	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 nmod:poss	color:blue
1	An	an	ADP	IN	_	3	case	_	_
2	diesem	dieser	DET	DT	Case=Dat|Gender=Masc|Number=Sing|PronType=Dem	3	det	_	_
3	Morgen	Morgen	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing	4	obl	_	_
4	traf	treffen	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
5	sich	sich	PRON	PRP	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	4	obj	_	_
6	Papst	Papst	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
7	Franziskus	Franziskus	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing	6	appos	_	_
8	mit	mit	ADP	IN	_	9	case	_	_
9	Mark	Mark	PROPN	NNP	Case=Dat|Gender=Masc|Number=Sing	4	obl	_	_
10	Zuckerberg	Zuckerberg	PROPN	NNP	Case=Dat|Gender=Masc|Number=Sing	9	flat:name	_	_
11	und	und	CCONJ	CC	_	13	cc	_	_
12	dessen	der	PRON	DT	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem,Rel	13	nmod:poss	_	_
13	Frau	Frau	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing	9	conj	_	_
14	in	in	ADP	IN	_	16	case	_	_
15	der	der	DET	DT	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
16	Casa	Casa	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing	4	obl	_	Proper=True
17	Santa	Santa	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	18	amod	_	InflectionType=Strong|Proper=True
18	Maria	Maria	PROPN	NNP	Case=Nom|Gender=Fem|Number=Sing	16	appos	_	SpaceAfter=No
19	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:poss	color:blue
1	Diese	dieser	DET	DT	Case=Nom|Number=Plur|PronType=Dem	11	nsubj	_	_
2	waren	sein	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Past	11	aux	_	_
3	bis	bis	ADP	IN	_	6	case	_	_
4	nach	nach	ADP	IN	_	6	case	_	_
5	Smith'	Smith	NOUN	''	Case=Gen|Number=Sing	6	nmod:poss	_	_
6	Tod	Tod	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing	11	obl	_	_
7	fast	fast	ADV	RB	Degree=Pos	8	advmod	_	_
8	vollkommen	vollkommen	ADV	RB	Degree=Pos	11	advmod	_	_
9	in	in	ADP	IN	_	10	case	_	_
10	Vergessenheit	Vergessenheit	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	11	obl	_	_
11	geraten	geraten	VERB	VBN	Tense=Past	0	root	_	SpaceAfter=No
12	.	.	PUNCT	.	_	11	punct	_	_

~~~


