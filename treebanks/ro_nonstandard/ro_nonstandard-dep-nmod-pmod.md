---
layout: base
title:  'Statistics of nmod:pmod in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `nmod:pmod`

This relation is a language-specific subtype of <tt><a href="ro_nonstandard-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="ro_nonstandard-dep-nmod-agent.html">nmod:agent</a></tt>, <tt><a href="ro_nonstandard-dep-nmod-tmod.html">nmod:tmod</a></tt>.

333 nodes (2%) are attached to their parents as `nmod:pmod`.

292 instances of `nmod:pmod` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.35435435435435.

The following 15 pairs of parts of speech are connected with `nmod:pmod`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-feat-PRON.html">PRON</a></tt> (160; 48% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (97; 29% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PROPN.html">PROPN</a></tt> (52; 16% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-feat-PRON.html">PRON</a></tt> (6; 2% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_nonstandard-feat-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="ro_nonstandard-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nmod:pmod	color:blue
1	Atunci	atunci	ADV	Rg	_	2	advmod:tmod	_	ref=MATT 3.15
2	lăsă	lăsa	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	ref=MATT 3.15
3	pre	pe	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	ref=MATT 3.15
4	El	el	PRON	Pp3msr 	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nmod:pmod	_	ref=MATT 3.15
5	.	.	PUNCT	PERIOD	_	2	punct	_	ref=MATT 3.15

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nmod:pmod	color:blue
1	Că	că	SCONJ	Csssp	Polarity=Pos	3	mark	_	ref=MATT 5.12
2	aşa	așa	ADV	Rg	_	3	advmod	_	ref=MATT 5.12
3	goniia	goni	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	ref=MATT 5.12
4	pre	pe	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	ref=MATT 5.12
5	proroci	proroc	NOUN	Ncmprn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Plur	3	nmod:pmod	_	ref=MATT 5.12
6	carii	care	PRON	Pw3mpr	Case=Acc,Nom|Gender=Masc|Number=Plur|Person=3|PronType=Int,Rel	7	nsubj	_	ref=MATT 5.12
7	era	fi	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	5	acl	_	ref=MATT 5.12
8	mainte	mai_înainte	ADV	Rg	_	7	advmod:tmod	_	ref=MATT 5.12
9	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	ref=MATT 5.12
10	voi	tu	PRON	Pp2-pa--------s	Case=Acc|Number=Plur|Person=2|PronType=Prs|Strength=Strong	8	nmod:pmod	_	ref=MATT 5.12
11	.	.	PUNCT	PERIOD	_	3	punct	_	ref=MATT 5.12

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nmod:pmod	color:blue
1	Ezechiia	Ezechiia	PROPN	Npmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	2	nsubj	_	ref=MATT 1.10
2	născu	naște	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	ref=MATT 1.10
3	pre	pe	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	ref=MATT 1.10
4	Manasia	Manasia	PROPN	Npmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	2	nmod:pmod	_	ref=MATT 1.10
5	,	,	PUNCT	COMMA	_	8	punct	_	ref=MATT 1.10
6	iară	iar	CCONJ	Ccssp	Polarity=Pos	8	cc	_	ref=MATT 1.10
7	Manasiia	Manasiia	PROPN	Npmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	8	nsubj	_	ref=MATT 1.10
8	născu	naște	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	ref=MATT 1.10
9	pre	pe	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	ref=MATT 1.10
10	Amon	Amon	PROPN	Npmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	8	nmod:pmod	_	ref=MATT 1.10
11	.	.	PUNCT	PERIOD	_	2	punct	_	ref=MATT 1.10

~~~


