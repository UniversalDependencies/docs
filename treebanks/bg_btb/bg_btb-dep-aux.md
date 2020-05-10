---
layout: base
title:  'Statistics of aux in UD_Bulgarian-BTB'
udver: '2'
---

## Treebank Statistics: UD_Bulgarian-BTB: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="bg_btb-dep-aux-pass.html">aux:pass</a></tt>.

5295 nodes (3%) are attached to their parents as `aux`.

5199 instances of `aux` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.43059490084986.

The following 9 pairs of parts of speech are connected with `aux`: <tt><a href="bg_btb-pos-VERB.html">VERB</a></tt>-<tt><a href="bg_btb-pos-AUX.html">AUX</a></tt> (4965; 94% instances), <tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg_btb-pos-AUX.html">AUX</a></tt> (140; 3% instances), <tt><a href="bg_btb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bg_btb-pos-AUX.html">AUX</a></tt> (93; 2% instances), <tt><a href="bg_btb-pos-AUX.html">AUX</a></tt>-<tt><a href="bg_btb-pos-AUX.html">AUX</a></tt> (44; 1% instances), <tt><a href="bg_btb-pos-ADV.html">ADV</a></tt>-<tt><a href="bg_btb-pos-AUX.html">AUX</a></tt> (29; 1% instances), <tt><a href="bg_btb-pos-PRON.html">PRON</a></tt>-<tt><a href="bg_btb-pos-AUX.html">AUX</a></tt> (9; 0% instances), <tt><a href="bg_btb-pos-DET.html">DET</a></tt>-<tt><a href="bg_btb-pos-AUX.html">AUX</a></tt> (7; 0% instances), <tt><a href="bg_btb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bg_btb-pos-AUX.html">AUX</a></tt> (7; 0% instances), <tt><a href="bg_btb-pos-NUM.html">NUM</a></tt>-<tt><a href="bg_btb-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux	color:blue
1	На	на	ADP	R	_	2	case	2:case	_
2	заека	заек	NOUN	Ncmsh	Definite=Def|Gender=Masc|Number=Sing	4	iobj	4:iobj	_
3	му	аз	PRON	Ppetds3m	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	expl	4:expl	_
4	омръзна	омръзне-ми	VERB	Vnpif-o3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	да	да	AUX	Tx	_	6	aux	6:aux	_
6	студува	студувам	VERB	Vpiif-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	csubj	4:csubj	SpaceAfter=No
7	.	.	PUNCT	punct	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux	color:blue
1	Бил	съм	AUX	Vxitcat-smi	Aspect=Imp|Definite=Ind|Gender=Masc|Mood=Ind|Number=Sing|VerbForm=Part|Voice=Act	3	cop	3:cop	_
2	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	3:aux	_
3	разузнавач	разузнавач	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	0	root	0:root	_
4	в	в	ADP	R	_	5	case	5:case	_
5	ДС	дс	PROPN	Npfsi	Definite=Ind|Gender=Fem|Number=Sing	3	nmod	3:nmod:в	SpaceAfter=No
6	.	.	PUNCT	punct	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 aux	color:blue
1	Да	да	AUX	Tx	_	3	aux	3:aux	_
2	бях	съм	AUX	Vxitf-t1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	3	cop	3:cop	_
3	по-млад	млад	ADJ	Amsi	Definite=Ind|Degree=Cmp|Gender=Masc|Number=Sing	5	advcl	5:advcl	SpaceAfter=No
4	,	,	PUNCT	punct	_	3	punct	3:punct	_
5	щях	ща	VERB	Vpitf-m1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	да	да	AUX	Tx	_	7	aux	7:aux	_
7	отида	отида-(си)	VERB	Vppif-r1s	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	5	xcomp	5:xcomp	_
8	в	в	ADP	R	_	9	case	9:case	_
9	гората	гора	NOUN	Ncfsd	Definite=Def|Gender=Fem|Number=Sing	7	iobj	7:iobj	_
10	да	да	AUX	Tx	_	12	aux	12:aux	_
11	ти	аз	PRON	Ppetds2	Case=Dat|Number=Sing|Person=2|PronType=Prs	12	iobj	12:iobj	_
12	уловя	уловя-(се)	VERB	Vpptf-r1s	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	7	advcl	7:advcl	_
13	едно	един	DET	Pfe-os-ni	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing|PronType=Ind	14	det	14:det	_
14	славейче	славейче	NOUN	Ncnsi	Definite=Ind|Gender=Neut|Number=Sing	12	obj	12:obj	SpaceAfter=No
15	.	.	PUNCT	punct	_	5	punct	5:punct	_

~~~


