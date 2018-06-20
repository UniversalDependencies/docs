---
layout: base
title:  'Statistics of aux:pass in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="ro_nonstandard-dep-aux.html">aux</a></tt>.

355 nodes (0%) are attached to their parents as `aux:pass`.

311 instances of `aux:pass` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.27323943661972.

The following 4 pairs of parts of speech are connected with `aux:pass`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-AUX.html">AUX</a></tt> (345; 97% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (6; 2% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-AUX.html">AUX</a></tt> (3; 1% instances), <tt><a href="ro_nonstandard-pos-AUX.html">AUX</a></tt>-<tt><a href="ro_nonstandard-pos-AUX.html">AUX</a></tt> (1; 0% instances).


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
1	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	ref=ACTS_1.14.content
2	rugăciune	rugăciune	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	4	obl	_	ref=ACTS_1.14.content
3	era	fi	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	aux:pass	_	ref=ACTS_1.14.content
4	cuprinşi	cuprins	VERB	Vmp--pm-p	Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part	0	root	_	ref=ACTS_1.14.content|SpaceAfter=No
5	.	.	PUNCT	PERIOD	_	4	punct	_	ref=ACTS_1.14.content

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


