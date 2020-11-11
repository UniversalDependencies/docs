---
layout: base
title:  'Statistics of nmod:poss in UD_Faroese-FarPaHC'
udver: '2'
---

## Treebank Statistics: UD_Faroese-FarPaHC: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="fo_farpahc-dep-nmod.html">nmod</a></tt>.

950 nodes (2%) are attached to their parents as `nmod:poss`.

779 instances of `nmod:poss` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.06736842105263.

The following 10 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="fo_farpahc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fo_farpahc-pos-PRON.html">PRON</a></tt> (606; 64% instances), <tt><a href="fo_farpahc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fo_farpahc-pos-PROPN.html">PROPN</a></tt> (199; 21% instances), <tt><a href="fo_farpahc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fo_farpahc-pos-NOUN.html">NOUN</a></tt> (121; 13% instances), <tt><a href="fo_farpahc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fo_farpahc-pos-PRON.html">PRON</a></tt> (14; 1% instances), <tt><a href="fo_farpahc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fo_farpahc-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="fo_farpahc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fo_farpahc-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="fo_farpahc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fo_farpahc-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fo_farpahc-pos-AUX.html">AUX</a></tt>-<tt><a href="fo_farpahc-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fo_farpahc-pos-PRON.html">PRON</a></tt>-<tt><a href="fo_farpahc-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fo_farpahc-pos-VERB.html">VERB</a></tt>-<tt><a href="fo_farpahc-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nmod:poss	color:blue
1	og	_	CCONJ	CONJ	_	7	cc	_	SpaceAfter=No
2	"	_	PUNCT	"	_	1	punct	_	_
3	umsjónarstarv	_	NOUN	N-A	Case=Acc|Definite=Ind|Number=Sing	7	obj	_	_
4	hans	_	PRON	PRO-G	Case=Gen	3	nmod:poss	_	_
5	skal	_	AUX	MDPI	Mood=Ind|Tense=Pres	7	aux	_	_
6	annar	_	PRON	OTHER-N	Case=Nom	7	nsubj	_	_
7	taka	_	VERB	VB	VerbForm=Inf	0	root	_	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	_	SpaceAfter=No
9	"	_	PUNCT	"	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nmod:poss	color:blue
1	Í	_	ADP	P	_	2	case	_	_
2	navni	_	NOUN	N-D	Case=Dat|Definite=Ind|Number=Sing	8	obl	_	_
3	Jesu	_	PROPN	NPR-G	Case=Gen|Definite=Ind|Number=Sing	2	nmod:poss	_	_
4	Krists	_	PROPN	NPR-G	Case=Gen|Definite=Ind|Number=Sing	3	flat:name	_	_
5	úr	_	ADP	P	_	6	case	_	_
6	Nasaret	_	PROPN	NPR-D	Case=Dat|Definite=Ind|Number=Sing	3	obl	_	SpaceAfter=No
7	,	,	PUNCT	,	_	6	punct	_	_
8	statt	_	VERB	VBI	Mood=Imp	0	root	_	_
9	upp	_	ADP	RP	_	8	compound:prt	_	_
10	og	_	CCONJ	CONJ	_	11	cc	_	_
11	gakk	_	VERB	VBI	Mood=Imp	8	conj	_	OriginalHead=0|SpaceAfter=No
12	!	!	PUNCT	.	_	11	punct	_	SpaceAfter=No
13	"	_	PUNCT	"	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 nmod:poss	color:blue
1	Men	_	CCONJ	CONJ	_	4	cc	_	_
2	vit	_	PRON	PRO-N	Case=Nom	4	nsubj	_	_
3	vilja	_	AUX	MDPI	Mood=Ind|Tense=Pres	4	aux	_	_
4	halda	_	VERB	VB	VerbForm=Inf	0	root	_	_
5	trúliga	_	ADV	ADV	Degree=Pos	4	advmod	_	_
6	á	_	ADP	RP	_	4	compound:prt	_	_
7	í	_	ADP	P	_	8	case	_	_
8	bönini	_	NOUN	N-D	Case=Dat|Definite=Ind|Number=Sing	11	obl	_	_
9	og	_	CCONJ	CONJ	_	11	cc	_	_
10	í	_	ADP	P	_	11	case	_	_
11	tænastu	_	NOUN	N-D	Case=Dat|Definite=Ind|Number=Sing	4	obl	_	_
12	orðsins	_	NOUN	N-G	Case=Gen|Definite=Ind|Number=Sing	11	nmod:poss	_	SpaceAfter=No
13	.	.	PUNCT	.	_	12	punct	_	SpaceAfter=No
14	"	_	PUNCT	"	_	13	punct	_	_

~~~


