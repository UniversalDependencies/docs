---
layout: base
title:  'Statistics of obj in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `obj`

This relation is universal.

870 nodes (4%) are attached to their parents as `obj`.

520 instances of `obj` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.78735632183908.

The following 13 pairs of parts of speech are connected with `obj`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (561; 64% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-feat-PRON.html">PRON</a></tt> (283; 33% instances), <tt><a href="ro_nonstandard-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PROPN.html">PROPN</a></tt> (5; 1% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-ADP.html">ADP</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-feat-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-feat-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obj	color:blue
1	Irod	Irod	PROPN	Npmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	2	nsubj	_	ref=MATT 2.16.content
2	pierdu	pierde	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	ref=MATT 2.16.content
3	coconii	cocon	NOUN	Ncmpry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur	2	obj	_	ref=MATT 2.16.content
4	.	.	PUNCT	PERIOD	_	2	punct	_	ref=MATT 2.16.content

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 obj	color:blue
1	Și	și	CCONJ	Ccssp	Polarity=Pos	12	cc	_	ref=MATT 5.41
2	să	să	PART	Qs	PartType=Sub	5	mark	_	ref=MATT 5.41
3	te-	tu	PRON	Pp2-sa--------w	Case=Acc|Number=Sing|Person=2|PronType=Prs|Strength=Weak	5	obj	_	ref=MATT 5.41
4	are	avea	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres	5	aux	_	ref=MATT 5.41
5	sili	sili	VERB	Vmn	Mood=Inf|VerbForm=Fin	12	advcl	_	ref=MATT 5.41
6	cineva	cineva	PRON	Pi3msr	Case=Acc,Nom||Gender=Masc|Number=Sing|Person=3|PronType=Ind	5	nsubj	_	ref=MATT 5.41
7	o	un	DET	Tifsr	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	8	det	_	ref=MATT 5.41
8	milă	milă	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	5	iobj	_	ref=MATT 5.41
9	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	ref=MATT 5.41
10	loc	loc	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	8	nmod	_	ref=MATT 5.41
11	,	,	PUNCT	COMMA	_	5	punct	_	ref=MATT 5.41
12	pasă	păsa	VERB	Vmm-2s--p	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|VerbForm=Fin	0	root	_	ref=MATT 5.41
13	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	14	case	_	ref=MATT 5.41
14	el	el	PRON	Pp3msa--------s 	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	12	obl	_	ref=MATT 5.41
15	doao	doi	NUM	Mcfp-l	Gender=Fem|Number=Plur|NumForm=Word|NumType=Card	12	iobj	_	ref=MATT 5.41
16	.	.	PUNCT	PERIOD	_	12	punct	_	ref=MATT 5.41

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 obj	color:blue
1	Și	și	CCONJ	Ccssp	Polarity=Pos	2	cc	_	ref=MATT 12.49
2	tinse	întinde	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	ref=MATT 12.49
3	mîna	mână	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	2	obj	_	ref=MATT 12.49
4	lui	el	PRON	Pp3mso	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nmod	_	ref=MATT 12.49
5	spre	spre	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	ref=MATT 12.49
6	ucenicii	ucenic	NOUN	Ncmpry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur	2	obl	_	ref=MATT 12.49
7	Săi	său	DET	Ds3mp-s	Gender=Masc|Number=Plur|Number[psor]=Sing|Person=3|PronType=Poss	6	det	_	ref=MATT 12.49
8	,	,	PUNCT	COMMA	_	9	punct	_	ref=MATT 12.49
9	zise	zice	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	ref=MATT 12.49
10	:	:	PUNCT	COLON	_	11	punct	_	ref=MATT 12.49
11	Iaca	iaca	INTJ	I	_	9	parataxis	_	ref=MATT 12.49
12	muma	mamă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	11	obj	_	ref=MATT 12.49
13	Mea	meu	DET	Ds1fsrs	Case=Acc,Nom|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=1|PronType=Poss	12	det	_	ref=MATT 12.49
14	şi	și	CCONJ	Ccssp	Polarity=Pos	15	cc	_	ref=MATT 12.49
15	fraţii	frate	NOUN	Ncmpry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur	12	conj	_	ref=MATT 12.49
16	Miei	meu	DET	Ds3mp-s	Gender=Masc|Number=Plur|Number[psor]=Sing|Person=3|PronType=Poss	15	det	_	ref=MATT 12.49
17	.	.	PUNCT	PERIOD	_	2	punct	_	ref=MATT 12.49

~~~


