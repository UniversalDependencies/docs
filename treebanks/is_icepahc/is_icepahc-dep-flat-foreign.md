---
layout: base
title:  'Statistics of flat:foreign in UD_Icelandic-IcePaHC'
udver: '2'
---

## Treebank Statistics: UD_Icelandic-IcePaHC: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="is_icepahc-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="is_icepahc-dep-flat-name.html">flat:name</a></tt>.

900 nodes (0%) are attached to their parents as `flat:foreign`.

900 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.48666666666667.

The following 16 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="is_icepahc-pos-X.html">X</a></tt>-<tt><a href="is_icepahc-pos-X.html">X</a></tt> (733; 81% instances), <tt><a href="is_icepahc-pos-VERB.html">VERB</a></tt>-<tt><a href="is_icepahc-pos-X.html">X</a></tt> (62; 7% instances), <tt><a href="is_icepahc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_icepahc-pos-X.html">X</a></tt> (29; 3% instances), <tt><a href="is_icepahc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="is_icepahc-pos-X.html">X</a></tt> (18; 2% instances), <tt><a href="is_icepahc-pos-DET.html">DET</a></tt>-<tt><a href="is_icepahc-pos-X.html">X</a></tt> (14; 2% instances), <tt><a href="is_icepahc-pos-X.html">X</a></tt>-<tt><a href="is_icepahc-pos-PROPN.html">PROPN</a></tt> (13; 1% instances), <tt><a href="is_icepahc-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="is_icepahc-pos-X.html">X</a></tt> (8; 1% instances), <tt><a href="is_icepahc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="is_icepahc-pos-X.html">X</a></tt> (7; 1% instances), <tt><a href="is_icepahc-pos-PRON.html">PRON</a></tt>-<tt><a href="is_icepahc-pos-X.html">X</a></tt> (6; 1% instances), <tt><a href="is_icepahc-pos-NUM.html">NUM</a></tt>-<tt><a href="is_icepahc-pos-X.html">X</a></tt> (3; 0% instances), <tt><a href="is_icepahc-pos-ADV.html">ADV</a></tt>-<tt><a href="is_icepahc-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="is_icepahc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="is_icepahc-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="is_icepahc-pos-ADP.html">ADP</a></tt>-<tt><a href="is_icepahc-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="is_icepahc-pos-AUX.html">AUX</a></tt>-<tt><a href="is_icepahc-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="is_icepahc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="is_icepahc-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="is_icepahc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="is_icepahc-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:foreign	color:blue
1	Assumptio	assumptio	X	FW	Foreign=Yes	0	root	_	IFD_tag=e
2	sancte	sancte	X	FW	Foreign=Yes	1	flat:foreign	_	IFD_tag=e
3	Marie	marie	X	FW	Foreign=Yes	1	flat:foreign	_	IFD_tag=e|SpaceAfter=No
4	.	.	PUNCT	.	_	3	punct	_	IFD_tag=.

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 flat:foreign	color:blue
1	"	"	PUNCT	"	_	4	punct	_	IFD_tag="
2	Svanur	svanur	PROPN	NPR-N	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	4	nsubj	_	IFD_tag=nken-s
3	einn	einn	DET	ONE-N	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	2	det	_	IFD_tag=lkensf
4	syngur	syngja	VERB	VBPI	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	IFD_tag=sfg3en
5	hér	hér	ADV	ADV	_	4	advmod	_	IFD_tag=aa
6	fugla	fugl	NOUN	NS-G	Case=Gen|Definite=Ind|Gender=Masc|Number=Plur	7	nmod:poss	_	IFD_tag=nkfe
7	best	vel	ADV	ADVS	Degree=Sup	4	advmod	_	IFD_tag=aae|SpaceAfter=No
8	"	"	PUNCT	"	_	7	punct	_	IFD_tag="
9	et.	et.	X	FW	_	4	flat:foreign	_	IFD_tag=x|SpaceAfter=No
10	.	.	PUNCT	.	_	9	punct	_	IFD_tag=.

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 flat:foreign	color:blue
1	En	en	CCONJ	CONJ	_	3	cc	_	IFD_tag=c
2	biskup	biskup	NOUN	N-N	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	3	nsubj	_	IFD_tag=nken
3	klagaði	klaga	VERB	VBDI	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	IFD_tag=sfg3eþ
4	upp	upp	ADP	RP	_	3	compound:prt	_	IFD_tag=aa
5	á	á	ADP	P	_	6	case	_	IFD_tag=ao
6	Barð	barð	PROPN	NPR-A	Case=Acc|Definite=Ind|Gender=Neut|Number=Sing	3	obl	_	IFD_tag=nheo-s|SpaceAfter=No
7	,	,	PUNCT	,	_	6	punct	_	IFD_tag
8	svo	svo	ADV	ADVR	_	3	advmod	_	IFD_tag=aa
9	sem	sem	SCONJ	C	_	8	fixed	_	IFD_tag=c
10	kirkjueign	kirkjueign	NOUN	N-N	Case=Dat|Definite=Ind|Gender=Fem|Number=Sing	8	advcl	_	IFD_tag=nveþ
11	og	og	CCONJ	CONJ	_	10	cc	_	IFD_tag=c
12	beneficium	beneficium	X	FW	Case=Dat|Definite=Ind|Gender=Fem|Number=Plur	10	flat:foreign	_	IFD_tag=nvfþ|SpaceAfter=No
13	.	.	PUNCT	.	_	12	punct	_	IFD_tag=.

~~~


