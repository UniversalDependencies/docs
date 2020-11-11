---
layout: base
title:  'Statistics of aux:pass in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="ro_nonstandard-dep-aux.html">aux</a></tt>.

1329 nodes (0%) are attached to their parents as `aux:pass`.

1204 instances of `aux:pass` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.28216704288939.

The following 3 pairs of parts of speech are connected with `aux:pass`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-AUX.html">AUX</a></tt> (1315; 99% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-AUX.html">AUX</a></tt> (12; 1% instances), <tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_nonstandard-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 aux:pass	color:blue
1	Despre	despre	ADP	Spca	AdpType=Prep|Case=Acc|Compound=Yes	2	case	_	ref=MATT22.16.content
2	dajdea	dajdie	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	4	nmod:pmod	_	ref=MATT22.16.content
3	împăratului	împărat	NOUN	Ncmsoy	Case=Dat,Gen|Definite=Def|Gender=Masc|Number=Sing	2	nmod	_	ref=MATT22.16.content
4	întrebat	întreba	VERB	Vmp--sm-p	Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part	0	root	_	ref=MATT22.16.content
5	fu	fi	AUX	Vais3s	Mood=Ind|Number=Sing|Person=3|Tense=Past	4	aux:pass	_	ref=MATT22.16.content
6	Hristos	Hristos	PROPN	Npmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	4	nsubj:pass	_	ref=MATT22.16.content|SpaceAfter=No
7	.	.	PUNCT	PERIOD	_	4	punct	_	ref=MATT22.16.content

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:pass	color:blue
1	Și	și	CCONJ	Ccssp	Polarity=Pos	4	cc	_	ref=MARC13.13
2	veți	vrea	AUX	Vaip2p	Mood=Ind|Number=Plur|Person=2|Tense=Pres	4	aux	_	ref=MARC13.13
3	fi	fi	AUX	Van	VerbForm=Inf	4	aux:pass	_	ref=MARC13.13
4	urîți	urât	NOUN	Ncmprn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Plur	0	root	_	ref=MARC13.13
5	tuturora	tot	PRON	Pi3-po	Case=Dat,Gen|Number=Plur|Person=3|PronType=Ind	4	iobj	_	ref=MARC13.13
6	pentru	pentru	ADP	Spca	AdpType=Prep|Case=Acc|Compound=Yes	7	case	_	ref=MARC13.13
7	numele	nume	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	4	obl	_	ref=MARC13.13
8	Mieu	Mieu	ADJ	Afpmsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	ref=MARC13.13|SpaceAfter=No
9	.	.	PUNCT	PERIOD	_	4	punct	_	ref=MARC13.13

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 aux:pass	color:blue
1	Şi	și	CCONJ	Ccssp	Polarity=Pos	3	cc	_	ref=PAVEL_EFES_4.30
2	nu	nu	ADV	Qz	Polarity=Neg	3	advmod	_	ref=PAVEL_EFES_4.30
3	întristareți	întrista	VERB	Vmm-2p---l	Mood=Imp|Number=Plur|Person=2|Variant=Long|VerbForm=Fin	0	root	_	ref=PAVEL_EFES_4.30
4	pre	pe	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	ref=PAVEL_EFES_4.30
5	Duhul	duh	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	3	nmod:pmod	_	ref=PAVEL_EFES_4.30
6	Sfînt	sfânt	ADJ	Afpmsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	5	amod	_	ref=PAVEL_EFES_4.30
7	al	al	DET	Tsmsr	Case=Acc,Nom|Gender=Masc|Number=Sing|Poss=Yes|PronType=Art	9	det	_	ref=PAVEL_EFES_4.30
8	lui	-ul	DET	Tf-so	Case=Dat,Gen|Definite=Def|Number=Sing|PronType=Art	9	det	_	ref=PAVEL_EFES_4.30
9	Dumnezău	Dumnezeu	PROPN	Npmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	5	nmod	_	ref=PAVEL_EFES_4.30
10	pren	prin	ADP	Spca	AdpType=Prep|Case=Acc|Compound=Yes	11	case	_	ref=PAVEL_EFES_4.30
11	carele	care	PRON	Pw3msry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Int,Rel	13	obl	_	ref=PAVEL_EFES_4.30
12	sînteți	fi	AUX	Vaip2p	Mood=Ind|Number=Plur|Person=2|Tense=Pres	13	aux:pass	_	ref=PAVEL_EFES_4.30
13	sămnați	semna	ADJ	Afpmprn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	5	acl	_	ref=PAVEL_EFES_4.30
14	spre	spre	ADP	Spsa	AdpType=Prep|Case=Acc	15	case	_	ref=PAVEL_EFES_4.30
15	zuoa	zi	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	13	obl	_	ref=PAVEL_EFES_4.30
16	răscumpărării	răscumpărare	NOUN	Ncfsoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	15	nmod	_	ref=PAVEL_EFES_4.30|SpaceAfter=No
17	.	.	PUNCT	PERIOD	_	3	punct	_	ref=PAVEL_EFES_4.30

~~~


