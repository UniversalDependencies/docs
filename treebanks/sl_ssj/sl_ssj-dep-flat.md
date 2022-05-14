---
layout: base
title:  'Statistics of flat in UD_Slovenian-SSJ'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SSJ: Relations: `flat`

This relation is universal.
There are 2 language-specific subtypes of `flat`: <tt><a href="sl_ssj-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="sl_ssj-dep-flat-name.html">flat:name</a></tt>.

179 nodes (0%) are attached to their parents as `flat`.

179 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.88268156424581.

The following 7 pairs of parts of speech are connected with `flat`: <tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt>-<tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt> (162; 91% instances), <tt><a href="sl_ssj-pos-SYM.html">SYM</a></tt>-<tt><a href="sl_ssj-pos-SYM.html">SYM</a></tt> (9; 5% instances), <tt><a href="sl_ssj-pos-X.html">X</a></tt>-<tt><a href="sl_ssj-pos-X.html">X</a></tt> (3; 2% instances), <tt><a href="sl_ssj-pos-X.html">X</a></tt>-<tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt>-<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt> (1; 1% instances).


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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat	color:blue
1	Druga	drug	ADJ	Mlpfsn	Case=Nom|Gender=Fem|Number=Sing	2	amod	_	NER=O
2	skupina	skupina	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	NER=O
3	ima	imeti	VERB	Vmpr3s-n	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	NER=O
4	manjše	majhen	ADJ	Agcmpa	Case=Acc|Degree=Cmp|Gender=Masc|Number=Plur	5	amod	_	NER=O
5	plodove	plod	NOUN	Ncmpa	Case=Acc|Gender=Masc|Number=Plur	3	obj	_	NER=O
6	(	(	PUNCT	Z	_	7	punct	_	NER=O|SpaceAfter=No
7	C.	C.	X	Y	Abbr=Yes	5	appos	_	NER=O
8	pepo	pepo	X	Xf	Foreign=Yes	7	flat	_	NER=O|SpaceAfter=No
9	)	)	PUNCT	Z	_	7	punct	_	NER=O
10	-	-	PUNCT	Z	_	12	punct	_	NER=O
11	poletne	poleten	ADJ	Agpfpa	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	12	amod	_	NER=O
12	buče	buča	NOUN	Ncfpa	Case=Acc|Gender=Fem|Number=Plur	7	appos	_	NER=O|SpaceAfter=No
13	.	.	PUNCT	Z	_	3	punct	_	NER=O

~~~


