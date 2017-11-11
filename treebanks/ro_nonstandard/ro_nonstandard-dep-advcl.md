---
layout: base
title:  'Statistics of advcl in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `advcl`

This relation is universal.
There are 1 language-specific subtypes of `advcl`: <tt><a href="ro_nonstandard-dep-advcl-tcl.html">advcl:tcl</a></tt>.

569 nodes (3%) are attached to their parents as `advcl`.

401 instances of `advcl` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.15289982425308.

The following 20 pairs of parts of speech are connected with `advcl`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (468; 82% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (24; 4% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt> (15; 3% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (15; 3% instances), <tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (11; 2% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt> (9; 2% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="ro_nonstandard-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="ro_nonstandard-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-INTJ.html">INTJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 advcl	color:blue
1	Aceasta	acesta	PRON	Pd3fsr	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Dem	3	nsubj	_	ref=MATT1.22
2	tot	tot	ADV	Rg	_	3	advmod	_	ref=MATT1.22
3	fu	fi	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	ref=MATT1.22
4	ca	ca	ADV	Rg	_	7	mark	_	ref=MATT1.22
5	să	să	PART	Qs	PartType=Sub	4	fixed	_	ref=MATT1.22
6	să	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	7	expl:pass	_	ref=MATT1.22
7	împle	umple	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	3	advcl	_	ref=MATT1.22
8	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	9	obj	_	ref=MATT1.22
9	zice	zice	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	mark	_	ref=MATT1.22
10	Domnul	domn	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	9	nsubj	_	ref=MATT1.22
11	pre	pe	ADP	Spsa	AdpType=Prep|Case=Acc	12	case	_	ref=MATT1.22
12	prorocul	proroc	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	9	obl	_	ref=MATT1.22
13	zicînd	zice	VERB	Vmg-----p	Polarity=Pos|VerbForm=Ger	9	advcl	_	ref=MATT1.22|SpaceAfter=No
14	:	:	PUNCT	COLON	_	3	punct	_	ref=MATT1.22

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 advcl	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 8 advcl	color:blue
1	Deci	deci	CCONJ	Cccsp	Compound=Yes|Polarity=Pos	13	cc	_	ref=MATT6.22|SpaceAfter=No
2	,	,	PUNCT	COMMA	_	8	punct	_	ref=MATT6.22
3	de	de	SCONJ	Csssp	Polarity=Pos	8	mark	_	ref=MATT6.22
4	va	vrea	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	5	aux	_	ref=MATT6.22
5	fi	fi	VERB	Vmn	VerbForm=Inf	8	cop	_	ref=MATT6.22
6	ochiul	ochi	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	8	nsubj	_	ref=MATT6.22
7	tău	tău	DET	Ds2ms-s	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=2|Poss=Yes|PronType=Prs	6	det	_	ref=MATT6.22
8	curat	curat	ADJ	Afpmsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	13	advcl	_	ref=MATT6.22|SpaceAfter=No
9	,	,	PUNCT	COMMA	_	8	punct	_	ref=MATT6.22
10	tot	tot	DET	Di3msr	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Ind	11	det	_	ref=MATT6.22
11	trupul	trup	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	13	nsubj	_	ref=MATT6.22
12	tău	tău	DET	Ds2ms-s	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=2|Poss=Yes|PronType=Prs	11	det	_	ref=MATT6.22
13	luminat	lumina	VERB	Vmp--sm-p	Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part	0	root	_	ref=MATT6.22
14	va	vrea	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	15	aux	_	ref=MATT6.22
15	fi	fi	VERB	Vmn	VerbForm=Inf	13	cop	_	ref=MATT6.22|SpaceAfter=No
16	.	.	PUNCT	PERIOD	_	13	punct	_	ref=MATT6.22

~~~


