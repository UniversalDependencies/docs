---
layout: base
title:  'Statistics of nsubj:outer in UD_Bulgarian-BTB'
udver: '2'
---

## Treebank Statistics: UD_Bulgarian-BTB: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="bg_btb-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="bg_btb-dep-nsubj-pass.html">nsubj:pass</a></tt>.

2 nodes (0%) are attached to their parents as `nsubj:outer`.

2 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 17.5.

The following 2 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg_btb-pos-PRON.html">PRON</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 2 nsubj:outer	color:blue
1	Вторият	втори	ADJ	Momsf	Definite=Def|Degree=Pos|Gender=Masc|Number=Sing|NumType=Ord	2	amod	2:amod	_
2	интерес	интерес	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	26	nsubj:outer	7:nsubj|26:nsubj:outer	_
3	на	на	ADP	R	_	4	case	4:case	_
4	България	българия	PROPN	Npfsi	Definite=Ind|Gender=Fem|Number=Sing	2	nmod	2:nmod:на	SpaceAfter=No
5	,	,	PUNCT	punct	_	7	punct	7:punct	_
6	който	който	PRON	Pre-os-m	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	7	nsubj	2:ref	_
7	продиктува	продиктувам	VERB	Vpptf-o3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	acl:relcl	2:acl:relcl	_
8	формирането	формиране	NOUN	Ncnsd	Definite=Def|Gender=Neut|Number=Sing	7	obj	7:obj	_
9	на	на	ADP	R	_	11	case	11:case	_
10	тази	този	DET	Pde-os-f	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	11	det	11:det	_
11	позиция	позиция	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	8	nmod	8:nmod:на	_
12	бе	съм	AUX	Vxitf-t3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	26	cop	26:cop	SpaceAfter=No
13	,	,	PUNCT	punct	_	26	punct	26:punct	_
14	че	че	SCONJ	Cs	_	26	mark	26:mark	_
15	ние	аз	PRON	Ppe-op1	Case=Nom|Number=Plur|Person=1|PronType=Prs	26	nsubj:outer	26:nsubj:outer	_
16	сме	съм	AUX	Vxitf-r1p	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	26	cop	26:cop	_
17	категорично	категорично	ADV	Dd	Degree=Pos	26	advmod	26:advmod	_
18	против	против	ADP	R	_	26	case	26:case	_
19	националния	национален	ADJ	Amsh	Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	20	amod	20:amod	_
20	суверенитет	суверенитет	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	26	nsubj	26:nsubj	_
21	на	на	ADP	R	_	23	case	23:case	_
22	една	един	DET	Pfe-os-fi	Definite=Ind|Gender=Fem|Number=Sing|PronType=Ind	23	det	23:det	_
23	страна	страна	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	20	nmod	20:nmod:на	_
24	да	да	AUX	Tx	_	26	aux	26:aux	_
25	бъде	бъда	AUX	Vyptf-r3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	26	cop	26:cop	_
26	оправдание	оправдание	NOUN	Ncnsi	Definite=Ind|Gender=Neut|Number=Sing	0	root	0:root	_
27	за	за	ADP	R	_	29	case	29:case	_
28	етнически	етнически	ADJ	Amsi	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	29	amod	29:amod	_
29	геноцид	геноцид	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	26	nmod	26:nmod:за	SpaceAfter=No
30	.	.	PUNCT	punct	_	26	punct	26:punct	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 15 nsubj:outer	color:blue
1	Вторият	втори	ADJ	Momsf	Definite=Def|Degree=Pos|Gender=Masc|Number=Sing|NumType=Ord	2	amod	2:amod	_
2	интерес	интерес	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	26	nsubj:outer	7:nsubj|26:nsubj:outer	_
3	на	на	ADP	R	_	4	case	4:case	_
4	България	българия	PROPN	Npfsi	Definite=Ind|Gender=Fem|Number=Sing	2	nmod	2:nmod:на	SpaceAfter=No
5	,	,	PUNCT	punct	_	7	punct	7:punct	_
6	който	който	PRON	Pre-os-m	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	7	nsubj	2:ref	_
7	продиктува	продиктувам	VERB	Vpptf-o3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	acl:relcl	2:acl:relcl	_
8	формирането	формиране	NOUN	Ncnsd	Definite=Def|Gender=Neut|Number=Sing	7	obj	7:obj	_
9	на	на	ADP	R	_	11	case	11:case	_
10	тази	този	DET	Pde-os-f	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	11	det	11:det	_
11	позиция	позиция	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	8	nmod	8:nmod:на	_
12	бе	съм	AUX	Vxitf-t3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	26	cop	26:cop	SpaceAfter=No
13	,	,	PUNCT	punct	_	26	punct	26:punct	_
14	че	че	SCONJ	Cs	_	26	mark	26:mark	_
15	ние	аз	PRON	Ppe-op1	Case=Nom|Number=Plur|Person=1|PronType=Prs	26	nsubj:outer	26:nsubj:outer	_
16	сме	съм	AUX	Vxitf-r1p	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	26	cop	26:cop	_
17	категорично	категорично	ADV	Dd	Degree=Pos	26	advmod	26:advmod	_
18	против	против	ADP	R	_	26	case	26:case	_
19	националния	национален	ADJ	Amsh	Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	20	amod	20:amod	_
20	суверенитет	суверенитет	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	26	nsubj	26:nsubj	_
21	на	на	ADP	R	_	23	case	23:case	_
22	една	един	DET	Pfe-os-fi	Definite=Ind|Gender=Fem|Number=Sing|PronType=Ind	23	det	23:det	_
23	страна	страна	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	20	nmod	20:nmod:на	_
24	да	да	AUX	Tx	_	26	aux	26:aux	_
25	бъде	бъда	AUX	Vyptf-r3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	26	cop	26:cop	_
26	оправдание	оправдание	NOUN	Ncnsi	Definite=Ind|Gender=Neut|Number=Sing	0	root	0:root	_
27	за	за	ADP	R	_	29	case	29:case	_
28	етнически	етнически	ADJ	Amsi	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	29	amod	29:amod	_
29	геноцид	геноцид	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	26	nmod	26:nmod:за	SpaceAfter=No
30	.	.	PUNCT	punct	_	26	punct	26:punct	_

~~~


