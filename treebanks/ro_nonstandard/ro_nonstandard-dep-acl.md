---
layout: base
title:  'Statistics of acl in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `acl`

This relation is universal.

186 nodes (1%) are attached to their parents as `acl`.

182 instances of `acl` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.40322580645161.

The following 12 pairs of parts of speech are connected with `acl`: <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (92; 49% instances), <tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (66; 35% instances), <tt><a href="ro_nonstandard-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (14; 8% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="ro_nonstandard-pos-DET.html">DET</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ro_nonstandard-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro_nonstandard-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="ro_nonstandard-pos-X.html">X</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 acl	color:blue
1	Zicînd	zice	VERB	Vmg-----p	Polarity=Pos|VerbForm=Ger	0	root	_	ref=MATT2.2|SpaceAfter=No
2	:	:	PUNCT	COLON	_	4	punct	_	ref=MATT2.2
3	Unde	unde	ADV	Rw	PronType=Int,Rel	4	advmod	_	ref=MATT2.2
4	iaste	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	parataxis	_	ref=MATT2.2
5	cel	cel	DET	Tdmsr	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Dem	6	det	_	ref=MATT2.2
6	craiu	crai	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	4	nsubj	_	ref=MATT2.2
7	jidovesc	jidovesc	ADJ	Afpmsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	ref=MATT2.2
8	carele	care	PRON	Pw3msry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Int,Rel	10	nsubj:pass	_	ref=MATT2.2
9	au	avea	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres	10	aux	_	ref=MATT2.2
10	născut	naște	VERB	Vmp	VerbForm=Part	6	acl	_	ref=MATT2.2|SpaceAfter=No
11	?	?	PUNCT	QUEST	_	4	punct	_	ref=MATT2.2

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl	color:blue
1	Ferice	ferice	ADV	Rg	_	0	root	_	ref=MATT5.4
2	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	ref=MATT5.4
3	ceia	acela	PRON	Pd3mpr	Case=Acc,Nom|Gender=Masc|Number=Plur|Person=3|PronType=Dem	1	nmod:pmod	_	ref=MATT5.4
4	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	5	nsubj	_	ref=MATT5.4
5	plîng	plânge	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	acl	_	ref=MATT5.4|SpaceAfter=No
6	,	,	PUNCT	COMMA	_	10	punct	_	ref=MATT5.4
7	că	că	SCONJ	Csssp	Polarity=Pos	10	mark	_	ref=MATT5.4
8	să	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	10	expl:pv	_	ref=MATT5.4
9	vor	vrea	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres	10	aux	_	ref=MATT5.4
10	mîngîia	mângâia	VERB	Vmn	VerbForm=Inf	1	advcl	_	ref=MATT5.4|SpaceAfter=No
11	.	.	PUNCT	PERIOD	_	1	punct	_	ref=MATT5.4

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 acl	color:blue
1	Simon	Simon	PROPN	Npmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	0	root	_	ref=MATT10.4
2	Cananit	cananit	ADJ	Afpmsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	1	amod	_	ref=MATT10.4
3	și	și	CCONJ	Ccssp	Polarity=Pos	4	cc	_	ref=MATT10.4
4	Iuda	Iudă	PROPN	Npmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	1	conj	_	ref=MATT10.4
5	Iscariot	Iscariot	ADJ	Afpmsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	ref=MATT10.4|SpaceAfter=No
6	,	,	PUNCT	COMMA	_	9	punct	_	ref=MATT10.4
7	carele	care	PRON	Pw3msry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Int,Rel	9	nsubj	_	ref=MATT10.4
8	și	și	ADV	Rg	_	9	advmod	_	ref=MATT10.4
9	vîndu	vinde	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	acl	_	ref=MATT10.4
10	pre	pe	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	ref=MATT10.4
11	еl	el	PRON	Pp3msa--------s	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	9	nmod:pmod	_	ref=MATT10.4|SpaceAfter=No
12	.	.	PUNCT	PERIOD	_	1	punct	_	ref=MATT10.4

~~~


