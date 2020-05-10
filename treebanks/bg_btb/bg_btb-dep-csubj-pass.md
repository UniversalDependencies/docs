---
layout: base
title:  'Statistics of csubj:pass in UD_Bulgarian-BTB'
udver: '2'
---

## Treebank Statistics: UD_Bulgarian-BTB: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="bg_btb-dep-csubj.html">csubj</a></tt>.

90 nodes (0%) are attached to their parents as `csubj:pass`.

81 instances of `csubj:pass` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.67777777777778.

The following 5 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="bg_btb-pos-VERB.html">VERB</a></tt>-<tt><a href="bg_btb-pos-VERB.html">VERB</a></tt> (67; 74% instances), <tt><a href="bg_btb-pos-VERB.html">VERB</a></tt>-<tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt> (18; 20% instances), <tt><a href="bg_btb-pos-VERB.html">VERB</a></tt>-<tt><a href="bg_btb-pos-ADJ.html">ADJ</a></tt> (3; 3% instances), <tt><a href="bg_btb-pos-VERB.html">VERB</a></tt>-<tt><a href="bg_btb-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="bg_btb-pos-VERB.html">VERB</a></tt>-<tt><a href="bg_btb-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 csubj:pass	color:blue
1	Който	който	PRON	Pre-os-m	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	2	nsubj	5:ref	_
2	търси	търся	VERB	Vpitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	csubj:pass	5:csubj:pass|8:nsubj	_
3	съвършенство	съвършенство	NOUN	Ncnsi	Definite=Ind|Gender=Neut|Number=Sing	2	obj	2:obj	SpaceAfter=No
4	,	,	PUNCT	punct	_	2	punct	2:punct	_
5	осъден	осъдя	VERB	Vpptcv--smi	Aspect=Perf|Definite=Ind|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	0:root|2:nsubj	_
6	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	5:aux	_
7	да	да	AUX	Tx	_	8	aux	8:aux	_
8	създава	създавам	VERB	Vpitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	advcl	5:advcl	_
9	само	само	ADV	Dd	Degree=Pos	10	advmod	10:advmod	_
10	фрагменти	фрагмент	NOUN	Ncmpi	Definite=Ind|Gender=Masc|Number=Plur	8	obj	8:obj	SpaceAfter=No
11	.	.	PUNCT	punct	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 csubj:pass	color:blue
1	Очаква	очаквам	VERB	Vpitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	1	expl	1:expl	_
3	цената	цена	NOUN	Ncfsd	Definite=Def|Gender=Fem|Number=Sing	9	nsubj	9:nsubj	_
4	му	мой	PRON	Psot--3--m	Person=3|Poss=Yes|PronType=Prs	3	det	3:det	_
5	да	да	AUX	Tx	_	9	aux	9:aux	_
6	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	9:cop	_
7	около	около	ADP	R	_	9	case	9:case	_
8	6700	6700	NUM	Mc-pi	Definite=Ind|Number=Plur|NumType=Card	9	nummod	9:nummod	_
9	лири	лира	NOUN	Ncfpi	Definite=Ind|Gender=Fem|Number=Plur	1	csubj:pass	1:csubj:pass	_
10	стерлинги	стерлинг	NOUN	Ncmpi	Definite=Ind|Gender=Masc|Number=Plur	9	nmod	9:nmod	SpaceAfter=No
11	.	.	PUNCT	punct	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 csubj:pass	color:blue
1	Смяташе	смятам	VERB	Vpitf-m3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	1	expl	1:expl	_
3	тогава	тогава	ADV	Pdt	PronType=Dem	1	advmod	1:advmod	SpaceAfter=No
4	,	,	PUNCT	punct	_	10	punct	10:punct	_
5	че	че	SCONJ	Cs	_	10	mark	10:mark	_
6	монетарната	монетарен	ADJ	Afsd	Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	7	amod	7:amod	_
7	реформа	реформа	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	10	nsubj	10:nsubj	_
8	ще	ще	AUX	Tx	_	10	aux	10:aux	_
9	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	10:cop	_
10	достатъчна	достатъчен	ADJ	Afsi	Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	1	csubj:pass	1:csubj:pass	SpaceAfter=No
11	.	.	PUNCT	punct	_	1	punct	1:punct	_

~~~


