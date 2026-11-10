---
layout: base
title:  'Statistics of expl:pv in UD_Old_East_Slavic-Birchbark'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Birchbark: Relations: `expl:pv`

This relation is a language-specific subtype of <tt><a href="orv_birchbark-dep-expl.html">expl</a></tt>.

84 nodes (0%) are attached to their parents as `expl:pv`.

65 instances of `expl:pv` (77%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.67857142857143.

The following 2 pairs of parts of speech are connected with `expl:pv`: <tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_birchbark-pos-PRON.html">PRON</a></tt> (83; 99% instances), <tt><a href="orv_birchbark-pos-X.html">X</a></tt>-<tt><a href="orv_birchbark-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 expl:pv	color:blue
1	а	а	CCONJ	CONJ	_	4	cc	_	wf="а"|addr="141:6"
2	цто	что	PRON	APRO,indef,nom	Case=Nom|Gender=Neut|Number=Sing|PronType=Ind	4	nsubj	_	wf="цто"|addr="141:6"
3	сѧ	сѧ	PRON	_	Case=Acc|Clitic=Yes|PronType=Prs|Reflex=Yes	4	expl:pv	_	wf="ся"|addr="141:6"
4	подите	подѣꙗтисѧ	VERB	V,nonpast,sg,3p	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	9	dislocated	_	wf="подите"|comment="tense_nonpast"|addr="141:6"
5	намо	мы	PRON	SPRO,pl,1p,dat,ton	Case=Dat|Number=Plur|Person=1|PronType=Prs	4	iobj	_	wf="намо"|comment="clitic_ton"|addr="141:6"
6	в	въ	ADP	PR,gvrn:loc	_	7	case	_	wf="в"|comment="gvrn:loc"|addr="141:6"
7	озери	озеро	NOUN	S,n,sg,loc	Case=Loc|Gender=Neut|Number=Sing	4	obl	_	wf="озери"|addr="141:6"
8	присл{л}а<lbr/>въши	прислати	VERB	V,partcp,praet,act,sg,f,nom,no_agr	Case=Nom|Gender=Fem|Number=Sing|Tense=Past|Typo=Yes|VerbForm=Part|Voice=Act	9	advcl	_	wf="присллавъши"|comment="incorrect,no_agr"|addr="141:6"
9	възмете	взѧти	VERB	V,nonpast,sg?,3p?	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	wf="възмете"|comment="tense_nonpast,sg?,3p?,person_unsure"|comment="alt_ana:lemma=взѧти:gr=V,nonpast,pl?,2p?"|line_id="7"|addr="141:7"

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 expl:pv	color:blue
1	аче	аче	SCONJ	CONJ,in_CONJ	_	5	mark	_	wf="аче"|comment="in_compound_CONJ"|addr="793:3"
2	ти	ты	PRON	SPRO?,sg,2p,dat?,cl?	Case=Dat|Clitic=Yes|Number=Sing|Person=2|PronType=Prs	5	iobj	_	wf="ти"|comment="SPRO?,dat?,cl?,case_unsure"|comment="alt_ana:lemma=ти:gr=PART,in_CONJ"|addr="793:3"
3	сѧ	сѧ	PRON	_	Case=Acc|Clitic=Yes|PronType=Prs|Reflex=Yes	5	expl:pv	_	wf="ся"|comment="lemma_unsure"|addr="793:3"
4	…	…	PUNCT	_	_	5	punct	_	wf="…"|line_id="4"|addr="793:4"
5	…ти	_	X	NONLEX	_	9	advcl	_	wf="…ти"|addr="793:4"
6	а	а	CCONJ	CONJ	_	9	cc	_	wf="а"|addr="793:4"
7	[с]амъ	самъ	DET	APRO,sg,m,nom	Case=Nom|Gender=Masc|Number=Sing|PronType=Emp	9	obl	_	wf="самъ"|addr="793:4"
8	не	не	PART	PART	Polarity=Neg	9	advmod	_	wf="не"|addr="793:4"
9	мог(и)	мочи	VERB	V,imper,sg,2p	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	0	root	_	wf="моги"|addr="793:4"
10	…	…	PUNCT	_	_	9	punct	_	wf="…"|addr="793:4"
11	(…)	(…)	PUNCT	_	_	9	punct	_	wf="…"|line_id="5"|addr="793:5"

~~~


