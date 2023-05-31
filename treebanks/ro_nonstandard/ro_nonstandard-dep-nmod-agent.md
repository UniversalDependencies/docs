---
layout: base
title:  'Statistics of nmod:agent in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `nmod:agent`

This relation is a language-specific subtype of <tt><a href="ro_nonstandard-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="ro_nonstandard-dep-nmod-pmod.html">nmod:pmod</a></tt>, <tt><a href="ro_nonstandard-dep-nmod-tmod.html">nmod:tmod</a></tt>.

535 nodes (0%) are attached to their parents as `nmod:agent`.

431 instances of `nmod:agent` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.78130841121495.

The following 11 pairs of parts of speech are connected with `nmod:agent`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (311; 58% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (109; 20% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PROPN.html">PROPN</a></tt> (101; 19% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="ro_nonstandard-pos-AUX.html">AUX</a></tt>-<tt><a href="ro_nonstandard-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nmod:agent	color:blue
1	Să	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Strength=Weak	2	expl:pass	_	ref=MARC1.12.content
2	ispiteaște	ispiti	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	ref=MARC1.12.content
3	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	ref=MARC1.12.content
4	diiavolul	diavol	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	2	nmod:agent	_	ref=MARC1.12.content|SpaceAfter=No
5	.	.	PUNCT	PERIOD	_	2	punct	_	ref=MARC1.12.content

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 nmod:agent	color:blue
1	Și	și	CCONJ	Ccssp	Polarity=Pos	10	cc	_	ref=MATT19.9
2	cine	cine	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	4	nsubj	_	ref=MATT19.9
3	va	vrea	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	aux	_	ref=MATT19.9
4	lua	lua	VERB	Vmn	VerbForm=Inf	10	csubj	_	ref=MATT19.9
5	lăsată	lăsa	VERB	Vmp--sf-p--r	Case=Acc,Nom|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part	4	xcomp	_	ref=MATT19.9
6	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	ref=MATT19.9
7	altul	altul	PRON	Pi3msr	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Ind	5	nmod:agent	_	ref=MATT19.9|SpaceAfter=No
8	,	,	PUNCT	COMMA	_	4	punct	_	ref=MATT19.9
9	curvie	curvie	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	10	obj	_	ref=MATT19.9
10	face	face	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	ref=MATT19.9|SpaceAfter=No
11	.	.	PUNCT	PERIOD	_	10	punct	_	ref=MATT19.9

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 nmod:agent	color:blue
1	Ca	ca	ADV	Rg	_	4	mark	_	ref=MATT4.14
2	să	să	PART	Qs	PartType=Sub	1	fixed	_	ref=MATT4.14
3	să	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	4	expl:pv	_	ref=MATT4.14
4	împle	umple	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	ref=MATT4.14
5	ce-	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	7	obj	_	ref=MATT4.14|SpaceAfter=No
6	au	avea	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres	7	aux	_	ref=MATT4.14
7	zis	zice	VERB	Vmp	VerbForm=Part	4	csubj	_	ref=MATT4.14
8	pre	pe	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	ref=MATT4.14
9	Isaiia	Isaiia	PROPN	Npmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	7	nmod:agent	_	ref=MATT4.14
10	prorocul	proroc	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	9	appos	_	ref=MATT4.14
11	zicînd	zice	VERB	Vmg-----p	Polarity=Pos|VerbForm=Ger	7	advcl	_	ref=MATT4.14|SpaceAfter=No
12	:	:	PUNCT	COLON	_	11	punct	_	ref=MATT4.14

~~~


