---
layout: base
title:  'Statistics of xcomp in UD_Upper_Sorbian'
udver: '2'
---

## Treebank Statistics: UD_Upper_Sorbian: Relations: `xcomp`

This relation is universal.

90 nodes (1%) are attached to their parents as `xcomp`.

83 instances of `xcomp` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.75555555555556.

The following 8 pairs of parts of speech are connected with `xcomp`: <tt><a href="hsb-pos-VERB.html">VERB</a></tt>-<tt><a href="hsb-pos-VERB.html">VERB</a></tt> (71; 79% instances), <tt><a href="hsb-pos-VERB.html">VERB</a></tt>-<tt><a href="hsb-pos-NOUN.html">NOUN</a></tt> (7; 8% instances), <tt><a href="hsb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hsb-pos-NOUN.html">NOUN</a></tt> (4; 4% instances), <tt><a href="hsb-pos-VERB.html">VERB</a></tt>-<tt><a href="hsb-pos-ADJ.html">ADJ</a></tt> (3; 3% instances), <tt><a href="hsb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hsb-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="hsb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hsb-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="hsb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hsb-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="hsb-pos-VERB.html">VERB</a></tt>-<tt><a href="hsb-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	Pod	pod	ADP	_	_	2	case	_	_
2	biologiju	biologija	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	4	obl	_	_
3	móžemy	móc	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|VerbType=Mod	0	root	_	_
4	dać	dać	VERB	_	VerbForm=Inf	3	xcomp	_	_
5	dalše	dalši	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	6	amod	_	_
6	wědomosće	wědomosć	NOUN	_	Case=Acc|Gender=Fem|Number=Plur	4	obj	_	SpaceAfter=No
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 xcomp	color:blue
1	Kralojo	kral	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	4	nsubj	_	_
2	tuteje	tutón	DET	_	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	3	det	_	_
3	doby	doba	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	1	nmod	_	_
4	mjenowachu	mjenować	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	so	so	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	4	expl:pv	_	_
6	lugal	lugal	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	4	xcomp	_	_
7	(	(	PUNCT	_	_	11	punct	_	SpaceAfter=No
8	=	=	PUNCT	_	_	11	punct	_	_
9	"	"	PUNCT	_	_	11	punct	_	SpaceAfter=No
10	wulki	wulki	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	11	amod	_	_
11	čłowjek	čłowjek	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	6	appos	_	SpaceAfter=No
12	"	"	PUNCT	_	_	11	punct	_	SpaceAfter=No
13	)	)	PUNCT	_	_	11	punct	_	SpaceAfter=No
14	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 xcomp	color:blue
1	Jeho	jeho	DET	_	Gender[psor]=Masc,Neut|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	2	det	_	_
2	tradicije	tradicija	NOUN	_	Case=Nom|Gender=Fem|Number=Plur	6	nsubj	_	_
3	jako	jako	SCONJ	_	_	5	mark	_	_
4	zwonkauniwersitne	zwonkauniwersitny	ADJ	_	Case=Nom|Gender=Neut|Number=Sing	5	amod	_	_
5	slědźenišćo	slědźenišćo	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	2	xcomp	_	_
6	złožuja	złožować	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	so	so	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	6	expl:pv	_	_
8	na	na	ADP	_	_	9	case	_	_
9	Institut	Institut	PROPN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	6	obj	_	_
10	za	za	ADP	_	_	12	case	_	_
11	serbski	serbski	ADJ	_	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	12	amod	_	_
12	ludospyt	ludospyt	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	9	nmod	_	SpaceAfter=No
13	,	,	PUNCT	_	_	19	punct	_	_
14	kotryž	kotryž	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	19	nsubj	_	_
15	bě	być	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	19	aux	_	_
16	so	so	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	19	expl:pass	_	_
17	lěta	lěto	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	19	obl	_	_
18	1951	1951	NUM	_	NumType=Card	17	nummod	_	_
19	załožił	załožić	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	9	acl	_	_
20	a	a	CCONJ	_	_	36	cc	_	_
21	wot	wot	ADP	_	_	22	case	_	_
22	1952	1952	NUM	_	NumType=Card	36	nummod	_	_
23	do	do	ADP	_	_	24	case	_	_
24	1991	1991	NUM	_	NumType=Card	36	nummod	_	_
25	Němskej	němski	ADJ	_	Case=Dat|Gender=Fem|Number=Sing	26	amod	_	_
26	akademiji	akademija	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	36	obl	_	_
27	wědomosćow	wědomosć	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	26	nmod	_	_
28	(	(	PUNCT	_	_	32	punct	_	SpaceAfter=No
29	wot	wot	ADP	_	_	30	case	_	_
30	1972	1972	NUM	_	NumType=Card	32	nummod	_	SpaceAfter=No
31	:	:	PUNCT	_	_	32	punct	_	_
32	Akademiji	akademija	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	26	nmod	_	_
33	wědomosćow	wědomosć	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	32	nmod	_	_
34	NDR	NDR	PROPN	_	Abbr=Yes|Case=Gen|Gender=Fem|Number=Sing	32	nmod	_	SpaceAfter=No
35	)	)	PUNCT	_	_	32	punct	_	_
36	přisłušał	přisłušeć	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	19	conj	_	SpaceAfter=No
37	.	.	PUNCT	_	_	6	punct	_	_

~~~


