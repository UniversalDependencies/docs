---
layout: base
title:  'Statistics of nummod in UD_Slovenian-SSJ'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SSJ: Relations: `nummod`

This relation is universal.

4309 nodes (2%) are attached to their parents as `nummod`.

2946 instances of `nummod` (68%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.4339754003249.

The following 10 pairs of parts of speech are connected with `nummod`: <tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt> (3405; 79% instances), <tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt> (547; 13% instances), <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt> (135; 3% instances), <tt><a href="sl_ssj-pos-X.html">X</a></tt>-<tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt> (99; 2% instances), <tt><a href="sl_ssj-pos-SYM.html">SYM</a></tt>-<tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt> (92; 2% instances), <tt><a href="sl_ssj-pos-ADV.html">ADV</a></tt>-<tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt> (13; 0% instances), <tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt>-<tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt> (10; 0% instances), <tt><a href="sl_ssj-pos-DET.html">DET</a></tt>-<tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt>-<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nummod	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 nummod	color:blue
1	Caplan	Caplan	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	0	root	_	NER=B-per|SpaceAfter=No
2	,	,	PUNCT	Z	_	1	punct	_	NER=I-per
3	R.	R.	X	Y	Abbr=Yes	1	flat:name	_	NER=I-per
4	(	(	PUNCT	Z	_	5	punct	_	NER=O|SpaceAfter=No
5	1996	1996	NUM	Mdc	NumForm=Digit|NumType=Card	1	nummod	_	NER=O|SpaceAfter=No
6	)	)	PUNCT	Z	_	5	punct	_	NER=O|SpaceAfter=No
7	:	:	PUNCT	Z	_	8	punct	_	NER=O
8	Post	post	X	Xf	Foreign=Yes	1	appos	_	NER=B-misc|SpaceAfter=No
9	-	-	PUNCT	Z	_	8	punct	_	NER=I-misc|SpaceAfter=No
10	Mortem	mortem	X	Xf	Foreign=Yes	8	flat:foreign	_	NER=I-misc
11	on	on	X	Xf	Foreign=Yes	8	flat:foreign	_	NER=I-misc
12	UNPROFOR	Unprofor	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	8	flat:foreign	_	NER=I-misc|SpaceAfter=No
13	.	.	PUNCT	Z	_	1	punct	_	NER=O

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nummod	color:blue
1	Vsakič	vsakič	ADV	Rgp	Degree=Pos	7	advmod	_	_
2	ko	ko	SCONJ	Cs	_	4	mark	_	_
3	ji	on	PRON	Pp3fsd--y	Case=Dat|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Variant=Short	4	iobj	_	_
4	odrežejo	odrezati	VERB	Vmer3p	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	advcl	_	_
5	glavo	glava	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	4	obj	_	SpaceAfter=No
6	,	,	PUNCT	Z	_	4	punct	_	_
7	zrasteta	zrasti	VERB	Vmer3d	Aspect=Perf|Mood=Ind|Number=Dual|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	dve	dva	NUM	Mlcfdn	Case=Nom|Gender=Fem|Number=Dual|NumForm=Word|NumType=Card	9	nummod	_	_
9	novi	nov	ADJ	Agpfdn	Case=Nom|Degree=Pos|Gender=Fem|Number=Dual	7	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	Z	_	7	punct	_	_

~~~


