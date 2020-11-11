---
layout: base
title:  'Statistics of flat:foreign in UD_Italian-VIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-VIT: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="it_vit-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="it_vit-dep-flat-name.html">flat:name</a></tt>.

193 nodes (0%) are attached to their parents as `flat:foreign`.

193 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.98963730569948.

The following 13 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="it_vit-pos-X.html">X</a></tt>-<tt><a href="it_vit-pos-X.html">X</a></tt> (172; 89% instances), <tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_vit-pos-X.html">X</a></tt> (4; 2% instances), <tt><a href="it_vit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="it_vit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_vit-pos-X.html">X</a></tt> (3; 2% instances), <tt><a href="it_vit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_vit-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="it_vit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_vit-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="it_vit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_vit-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="it_vit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_vit-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="it_vit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_vit-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="it_vit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_vit-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="it_vit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_vit-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="it_vit-pos-X.html">X</a></tt>-<tt><a href="it_vit-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="it_vit-pos-X.html">X</a></tt>-<tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat:foreign	color:blue
1	"	"	PUNCT	FB	_	2	punct	_	SpaceAfter=No
2	la	il	X	SW	Foreign=Yes	0	root	_	_
3	bureautique	bureautique	X	SW	Foreign=Yes	2	flat:foreign	_	_
4	est	est	X	SW	Foreign=Yes	2	flat:foreign	_	_
5	facile	facile	X	SW	Foreign=Yes	2	flat:foreign	_	SpaceAfter=No
6	,	,	PUNCT	FF	_	2	punct	_	_
7	c'	c'	X	SW	Foreign=Yes	2	flat:foreign	_	SpaceAfter=No
8	est	est	X	SW	Foreign=Yes	2	flat:foreign	_	_
9	très	très	X	SW	Foreign=Yes	2	flat:foreign	_	_
10	facile	facile	X	SW	Foreign=Yes	2	flat:foreign	_	SpaceAfter=No
11	"	"	PUNCT	FB	_	2	punct	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:foreign	color:blue
1	Calcio	calcio	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
2	news	news	X	SW	Foreign=Yes	1	flat:foreign	_	SpaceAfter=No
3	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 46	bgColor:blue
# visual-style 46	fgColor:white
# visual-style 37	bgColor:blue
# visual-style 37	fgColor:white
# visual-style 37 46 flat:foreign	color:blue
1	Opinioni	opinione	NOUN	S	Gender=Fem|Number=Plur	0	root	_	_
2	non	non	ADV	BN	PronType=Neg	4	advmod	_	_
3	necessariamente	necessariamente	ADV	B	_	4	advmod	_	_
4	condivisibili	condivisibile	ADJ	A	Number=Plur	1	amod	_	SpaceAfter=No
5	,	,	PUNCT	FF	_	1	punct	_	_
6	ma	ma	ADV	B	_	10	cc	_	_
7	auspicabilmente	auspicabilmente	ADV	B	_	10	advmod	_	_
8	da	da	ADP	E	_	10	mark	_	_
9	non	non	ADV	BN	PronType=Neg	10	advmod	_	_
10	tacere	tacere	VERB	V	VerbForm=Inf	1	acl	_	SpaceAfter=No
11	,	,	PUNCT	FF	_	10	punct	_	_
12	soprattutto	soprattutto	ADV	B	_	32	advmod	_	_
13	quando	quando	SCONJ	CS	_	32	mark	_	_
14	in	in	ADP	E	_	17	case	_	_
15	lo	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
16	stesso	stesso	ADJ	A	Gender=Masc|Number=Sing	17	amod	_	_
17	giorno	giorno	NOUN	S	Gender=Masc|Number=Sing	32	obl	_	SpaceAfter=No
18	,	,	PUNCT	FF	_	17	punct	_	_
19	ironia	ironia	NOUN	S	Gender=Fem|Number=Sing	17	appos	_	_
20	di	di	ADP	E	_	22	case	_	_
21	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	22	det	_	_
22	sorte	sorte	NOUN	S	Gender=Fem|Number=Sing	19	nmod	_	SpaceAfter=No
23	,	,	PUNCT	FF	_	17	punct	_	_
24	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	26	det	_	_
25	<	<	PUNCT	FB	_	26	punct	_	SpaceAfter=No
26	Wall	Wall	PROPN	SP	_	32	nsubj	_	_
27	Street	Street	PROPN	SP	_	26	flat:name	_	_
28	Journal	Journal	PROPN	SP	_	26	flat:name	_	_
29	of	of	ADP	E	_	30	case	_	_
30	Europe	Europe	PROPN	SP	_	26	flat:name	_	SpaceAfter=No
31	>	>	PUNCT	FB	_	26	punct	_	_
32	titola	titolare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	ccomp	_	_
33	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	35	det	_	_
34	sua	suo	DET	AP	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	35	det:poss	_	_
35	spalla	spalla	NOUN	S	Gender=Fem|Number=Sing	32	obj	_	_
36	"	"	PUNCT	FB	_	37	punct	_	SpaceAfter=No
37	Italy	Italy	PROPN	SP	_	32	xcomp	_	SpaceAfter=No
38	's	's	PART	PART	_	37	flat:foreign	_	_
39	coalition	coalition	NOUN	SW	Foreign=Yes	37	flat:foreign	_	_
40	suffers	suffers	VERB	V	_	37	flat:foreign	_	_
41	as	as	CCONJ	CC	_	37	flat:foreign	_	_
42	"	"	PUNCT	FB	_	37	punct	_	SpaceAfter=No
43	fascist	fascist	NOUN	SW	Foreign=Yes	37	flat:foreign	_	SpaceAfter=No
44	"	"	PUNCT	FB	_	37	punct	_	_
45	tag	tag	VERB	V	_	37	flat:foreign	_	_
46	dogs	dogs	NOUN	SW	Foreign=Yes	37	flat:foreign	_	_
47	the	the	DET	RD	Definite=Def|PronType=Art	37	flat:foreign	_	_
48	national	national	ADJ	A	_	37	flat:foreign	_	_
49	alliance	alliance	X	SW	Foreign=Yes	37	flat:foreign	_	SpaceAfter=No
50	"	"	PUNCT	FB	_	37	punct	_	SpaceAfter=No
51	.	.	PUNCT	FS	_	1	punct	_	_

~~~


