---
layout: base
title:  'Statistics of acl in UD_Bulgarian-BTB'
udver: '2'
---

## Treebank Statistics: UD_Bulgarian-BTB: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="bg_btb-dep-acl-relcl.html">acl:relcl</a></tt>.

527 nodes (0%) are attached to their parents as `acl`.

516 instances of `acl` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.81024667931689.

The following 19 pairs of parts of speech are connected with `acl`: <tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg_btb-pos-VERB.html">VERB</a></tt> (424; 80% instances), <tt><a href="bg_btb-pos-DET.html">DET</a></tt>-<tt><a href="bg_btb-pos-VERB.html">VERB</a></tt> (35; 7% instances), <tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt> (21; 4% instances), <tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg_btb-pos-ADJ.html">ADJ</a></tt> (13; 2% instances), <tt><a href="bg_btb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bg_btb-pos-VERB.html">VERB</a></tt> (8; 2% instances), <tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg_btb-pos-AUX.html">AUX</a></tt> (6; 1% instances), <tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg_btb-pos-ADV.html">ADV</a></tt> (4; 1% instances), <tt><a href="bg_btb-pos-DET.html">DET</a></tt>-<tt><a href="bg_btb-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="bg_btb-pos-NUM.html">NUM</a></tt>-<tt><a href="bg_btb-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="bg_btb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="bg_btb-pos-ADV.html">ADV</a></tt>-<tt><a href="bg_btb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="bg_btb-pos-DET.html">DET</a></tt>-<tt><a href="bg_btb-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="bg_btb-pos-DET.html">DET</a></tt>-<tt><a href="bg_btb-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="bg_btb-pos-DET.html">DET</a></tt>-<tt><a href="bg_btb-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg_btb-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg_btb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="bg_btb-pos-PART.html">PART</a></tt>-<tt><a href="bg_btb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="bg_btb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bg_btb-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="bg_btb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bg_btb-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 acl	color:blue
1	Той	аз	PRON	Ppe-os3m	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	2:nsubj|9:nsubj	_
2	иска	искам	VERB	Vpitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	съвет	съвет	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	2	obj	2:obj	SpaceAfter=No
4	,	,	PUNCT	punct	_	9	punct	9:punct	_
5	към	към	ADP	R	_	6	case	6:case	_
6	кого	кой	PRON	Pie-as-m	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing|PronType=Int	9	iobj	9:iobj	_
7	да	да	AUX	Tx	_	9	aux	9:aux	_
8	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	9	expl	9:expl	_
9	обърне	обърна-(се)	VERB	Vpptf-r3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl	3:acl	SpaceAfter=No
10	.	.	PUNCT	punct	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 acl	color:blue
1	Следствието	следствие	NOUN	Ncnsd	Definite=Def|Gender=Neut|Number=Sing	10	nsubj	10:nsubj	_
2	от	от	ADP	R	_	3	case	3:case	_
3	това	този	DET	Pde-os-n	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	1	nmod	1:nmod:от	SpaceAfter=No
4	,	,	PUNCT	punct	_	7	punct	7:punct	_
5	че	че	SCONJ	Cs	_	7	mark	7:mark	_
6	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	7:aux	_
7	заминал	замина	VERB	Vpptcao-smi	Aspect=Perf|Definite=Ind|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	3	acl	3:acl:че	SpaceAfter=No
8	,	,	PUNCT	punct	_	7	punct	7:punct	_
9	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	10:cop	_
10	очевидно	очевиден	ADJ	Ansi	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	0:root	SpaceAfter=No
11	.	.	PUNCT	punct	_	10	punct	10:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 acl	color:blue
1	Трето	трето	ADV	Dt	Degree=Pos	5	advmod	5:advmod	SpaceAfter=No
2	,	,	PUNCT	punct	_	1	punct	1:punct	_
3	не	не	PART	Tn	Polarity=Neg	5	advmod	5:advmod	_
4	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux:pass	5:aux:pass	_
5	изяснен	изясня-(се)	VERB	Vpptcv--smi	Aspect=Perf|Definite=Ind|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	0:root	_
6	въпросът	въпрос	NOUN	Ncmsf	Definite=Def|Gender=Masc|Number=Sing	5	nsubj:pass	5:nsubj:pass	_
7	чия	чий	DET	Pip--s-f	Gender=Fem|Number=Sing|PronType=Int	8	det	8:det	_
8	собственост	собственост	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	6	acl	6:acl	_
9	са	съм	AUX	Vxitf-r3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	8:cop	_
10	вноските	вноска	NOUN	Ncfpd	Definite=Def|Gender=Fem|Number=Plur	8	nsubj	8:nsubj	_
11	в	в	ADP	R	_	12	case	12:case	_
12	НОИ	нои	PROPN	Npmsi	Definite=Ind|Gender=Masc|Number=Sing	10	nmod	10:nmod:в	SpaceAfter=No
13	.	.	PUNCT	punct	_	5	punct	5:punct	_

~~~


