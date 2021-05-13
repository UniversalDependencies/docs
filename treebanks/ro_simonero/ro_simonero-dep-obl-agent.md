---
layout: base
title:  'Statistics of obl:agent in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="ro_simonero-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="ro_simonero-dep-obl-pmod.html">obl:pmod</a></tt>.

577 nodes (0%) are attached to their parents as `obl:agent`.

577 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.58578856152513.

The following 12 pairs of parts of speech are connected with `obl:agent`: <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (441; 76% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (56; 10% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-PROPN.html">PROPN</a></tt> (40; 7% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (14; 2% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (10; 2% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-X.html">X</a></tt> (6; 1% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-X.html">X</a></tt> (3; 1% instances), <tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:agent	color:blue
1	Tipul	tip	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	4	nsubj:pass	_	_
2	1	1	NUM	Mc-s-d	Number=Sing|NumForm=Digit|NumType=Card	1	nummod	_	_
3	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
4	inhibat	inhiba	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
5	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	_
6	propiltiouracil	propiltiouracil	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	4	obl:agent	_	BioNERLabel=B-CHEM
7	și	și	CCONJ	Crssp	Polarity=Pos	8	cc	_	_
8	acidul	acid	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	6	conj	_	BioNERLabel=B-CHEM
9	iopanoic	iopanoic	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	8	amod	_	BioNERLabel=I-CHEM|SpaceAfter=No
10	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 obl:agent	color:blue
1	Diagnosticul	diagnostic	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	6	nsubj:pass	_	_
2	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	_
3	hipertiroidism	hipertiroidism	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	1	nmod	_	BioNERLabel=B-DISO
4	manifest	manifest	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	_
5	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux:pass	_	_
6	confirmat	confirma	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
7	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	_
8	asocierea	asociere	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	6	obl:agent	_	_
9	unui	un	DET	Timso	Case=Gen|Gender=Masc|Number=Sing|PronType=Ind	10	det	_	_
10	nivel	nivel	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	8	nmod	_	_
11	crescut	crescut	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	10	acl	_	_
12	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	13	case	_	_
13	fT4	fT4	NOUN	Yn	Abbr=Yes	11	obl:agent	_	BioNERLabel=B-CHEM|SpaceAfter=No
14	.	.	PUNCT	PERIOD	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 obl:agent	color:blue
1	Un	un	DET	Timsr	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	3	det	_	_
2	alt	alt	DET	Di3ms----e	Gender=Masc|Number=Sing|Person=3|Position=Prenom|PronType=Ind	3	det	_	_
3	procedeu	procedeu	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	8	nsubj:pass	_	_
4	utilizat	utilizat	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	_
5	a	avea	AUX	Va--3s	Number=Sing|Person=3	8	aux	_	_
6	fost	fi	AUX	Vap--sm	Gender=Masc|Number=Sing|VerbForm=Part	8	aux:pass	_	_
7	cel	acela	PRON	Pd3msr	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Dem	8	det	_	_
8	descris	descrie	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
9	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	_
10	Judd	Judd	PROPN	Np	_	8	obl:agent	_	SpaceAfter=No
11	.	.	PUNCT	PERIOD	_	8	punct	_	_

~~~


