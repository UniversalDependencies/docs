---
layout: base
title:  'Statistics of flat in UD_Slovenian-SSJ'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SSJ: Relations: `flat`

This relation is universal.
There are 2 language-specific subtypes of `flat`: <tt><a href="sl_ssj-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="sl_ssj-dep-flat-name.html">flat:name</a></tt>.

176 nodes (0%) are attached to their parents as `flat`.

176 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.89772727272727.

The following 7 pairs of parts of speech are connected with `flat`: <tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt>-<tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt> (162; 92% instances), <tt><a href="sl_ssj-pos-SYM.html">SYM</a></tt>-<tt><a href="sl_ssj-pos-SYM.html">SYM</a></tt> (9; 5% instances), <tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt>-<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="sl_ssj-pos-X.html">X</a></tt>-<tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="sl_ssj-pos-X.html">X</a></tt>-<tt><a href="sl_ssj-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat	color:blue
1	(	(	PUNCT	Z	_	2	punct	_	NER=O|SpaceAfter=No
2	Družina	družina	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	0	root	_	NER=B-org|SpaceAfter=No
3	,	,	PUNCT	Z	_	4	punct	_	NER=O
4	15.	15.	NUM	Mdo	NumForm=Digit|NumType=Ord	2	nummod	_	NER=O
5	7.	7.	NUM	Mdo	NumForm=Digit|NumType=Ord	4	flat	_	NER=O
6	1990	1990	NUM	Mdc	NumForm=Digit|NumType=Card	4	flat	_	NER=O|SpaceAfter=No
7	,	,	PUNCT	Z	_	8	punct	_	NER=O
8	1	1	NUM	Mdc	NumForm=Digit|NumType=Card	2	nummod	_	NER=O|SpaceAfter=No
9	)	)	PUNCT	Z	_	2	punct	_	NER=O

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 flat	color:blue
1	"	"	PUNCT	Z	_	5	punct	_	NER=O|SpaceAfter=No
2	Zakaj	zakaj	ADV	Rgp	Degree=Pos	5	advmod	_	NER=O
3	pa	pa	CCONJ	Cc	_	5	advmod	_	NER=O
4	ne	ne	PART	Q	Polarity=Neg	5	advmod	_	NER=O
5	paziš	paziti	VERB	Vmpr2s	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	NER=O|SpaceAfter=No
6	,	,	PUNCT	Z	_	8	punct	_	NER=O
7	kam	kam	ADV	Rgp	Degree=Pos	8	advmod	_	NER=O
8	odlagaš	odlagati	VERB	Vmpr2s	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	5	ccomp	_	NER=O
9	&	&	SYM	Z	_	13	amod	_	NER=O|SpaceAfter=No
10	#	#	SYM	Z	_	9	flat	_	NER=O|SpaceAfter=No
11	@	@	SYM	Z	_	9	flat	_	NER=O|SpaceAfter=No
12	%	%	SYM	Z	_	9	flat	_	NER=O
13	papirje	papir	NOUN	Ncmpa	Case=Acc|Gender=Masc|Number=Plur	8	obj	_	NER=O|SpaceAfter=No
14	,	,	PUNCT	Z	_	16	punct	_	NER=O
15	za	za	ADP	Sa	Case=Acc	16	case	_	NER=O
16	vraga	vrag	NOUN	Ncmsay	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	5	discourse	_	NER=O|SpaceAfter=No
17	?	?	PUNCT	Z	_	5	punct	_	NER=O

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat	color:blue
1	MARIJA	Marija	PROPN	Npfsn	Case=Nom|Gender=Fem|Number=Sing	0	root	_	NER=B-per
2	ZIDANŠEK	Zidanšek	PROPN	Npfsn	Case=Nom|Gender=Fem|Number=Sing	1	flat:name	_	NER=I-per|SpaceAfter=No
3	,	,	PUNCT	Z	_	4	punct	_	NER=O
4	Hotunje	Hotunje	PROPN	Npfpn	Case=Nom|Gender=Fem|Number=Plur	1	appos	_	NER=B-loc
5	34	34	NUM	Mdc	NumForm=Digit|NumType=Card	4	nummod	_	NER=I-loc
6	A	A	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	5	flat	_	NER=I-loc|SpaceAfter=No
7	,	,	PUNCT	Z	_	9	punct	_	NER=I-loc
8	3232	3232	NUM	Mdc	NumForm=Digit|NumType=Card	9	nummod	_	NER=I-loc
9	Ponikva	Ponikva	PROPN	Npfsn	Case=Nom|Gender=Fem|Number=Sing	4	appos	_	NER=I-loc|SpaceAfter=No
10	;	;	PUNCT	Z	_	11	punct	_	NER=O
11	TIM	Tim	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	1	list	_	NER=B-per
12	TIMOTEJ	Timotej	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	11	flat:name	_	NER=I-per
13	AMBROŽ	Ambrož	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	11	flat:name	_	NER=I-per|SpaceAfter=No
14	,	,	PUNCT	Z	_	15	punct	_	NER=O
15	Bratov	brat	NOUN	Ncmdg	Case=Gen|Gender=Masc|Number=Dual	11	appos	_	NER=B-loc
16	Hvalič	Hvalič	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	15	nmod	_	NER=I-loc
17	8	8	NUM	Mdc	NumForm=Digit|NumType=Card	15	nummod	_	NER=I-loc|SpaceAfter=No
18	,	,	PUNCT	Z	_	21	punct	_	NER=I-loc
19	5000	5000	NUM	Mdc	NumForm=Digit|NumType=Card	21	nummod	_	NER=I-loc
20	Nova	nov	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	21	amod	_	NER=I-loc
21	Gorica	Gorica	PROPN	Npfsn	Case=Nom|Gender=Fem|Number=Sing	15	appos	_	NER=I-loc|SpaceAfter=No
22	;	;	PUNCT	Z	_	23	punct	_	NER=O
23	RAMONA	Ramona	PROPN	Npfsn	Case=Nom|Gender=Fem|Number=Sing	1	list	_	NER=B-per
24	FRAS	Fras	PROPN	Npfsn	Case=Nom|Gender=Fem|Number=Sing	23	flat:name	_	NER=I-per|SpaceAfter=No
25	,	,	PUNCT	Z	_	27	punct	_	NER=O
26	Tovarniška	tovarniški	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	27	amod	_	NER=B-loc
27	c.	c.	X	Y	Abbr=Yes	23	appos	_	NER=I-loc
28	63	63	NUM	Mdc	NumForm=Digit|NumType=Card	27	nummod	_	NER=I-loc|SpaceAfter=No
29	,	,	PUNCT	Z	_	31	punct	_	NER=I-loc
30	2215	2215	NUM	Mdc	NumForm=Digit|NumType=Card	31	nummod	_	NER=I-loc
31	Ceršak	Ceršak	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	27	appos	_	NER=I-loc|SpaceAfter=No
32	;	;	PUNCT	Z	_	33	punct	_	NER=O
33	BORIS	Boris	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	1	list	_	NER=B-per
34	LANJŠČEK	Lanjšček	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	33	flat:name	_	NER=I-per|SpaceAfter=No
35	,	,	PUNCT	Z	_	36	punct	_	NER=O
36	Prešernova	Prešernov	ADJ	Aspfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Poss=Yes	33	appos	_	NER=B-loc
37	59	59	NUM	Mdc	NumForm=Digit|NumType=Card	36	nummod	_	NER=I-loc|SpaceAfter=No
38	,	,	PUNCT	Z	_	41	punct	_	NER=I-loc
39	9000	9000	NUM	Mdc	NumForm=Digit|NumType=Card	41	nummod	_	NER=I-loc
40	Murska	murski	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	41	amod	_	NER=I-loc
41	Sobota	Sobota	PROPN	Npfsn	Case=Nom|Gender=Fem|Number=Sing	36	appos	_	NER=I-loc|SpaceAfter=No
42	;	;	PUNCT	Z	_	1	punct	_	NER=O

~~~


