---
layout: base
title:  'Statistics of acl in UD_Cappadocian-AMGiC'
udver: '2'
---

## Treebank Statistics: UD_Cappadocian-AMGiC: Relations: `acl`

This relation is universal.

2 nodes (0%) are attached to their parents as `acl`.

2 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.5.

The following 2 pairs of parts of speech are connected with `acl`: <tt><a href="cpg_amgic-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cpg_amgic-pos-ADV.html">ADV</a></tt> (1; 50% instances), <tt><a href="cpg_amgic-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cpg_amgic-pos-VERB.html">VERB</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 acl	color:blue
1	Vavás	vavás	NOUN	NOUN	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
2	čis	(e)γó	PRON	PRON	Case=Gen|Clitic=Yes|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	1	nmod	_	_
3	éršiti	érxumu	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	3	punct	_	_
5	náftši	(anávo)	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	parataxis	_	_
6	ta	(ο)	DET	DET	Case=Acc|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	7	det	_	_
7	ksíla	ksílo	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Plur	5	obj	_	_
8	op'	op'	ADP	ADP	_	10	case	_	_
9	čin	(ο)	DET	DET	Case=Acc|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	10	det	_	_
10	iréan	iréa	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	5	obl	_	_
11	óči	óči	SCONJ	_	_	13	mark	_	_
12	kóri	kóri	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	13	nsubj	_	_
13	apés'	apésu	ADV	ADV	_	10	acl	_	_#this is the predicate of the complement clause which in turn depends on iréan, a tricky syntactic case here
14	tun	(e)γó	PRON	PRON	Case=Acc|Clitic=Yes|Number=Plur|Person=3|PronType=Prs	13	obl	_	_
15	éni	ímu	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	13	cop	_	_
16	deyí	deyí	SCONJ	_	_	10	mark	_	LC=YES|MorphSynC=FrGrEl|MorphSynSC=ConjSub

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl	color:blue
1	Qujumǰís	qujumǰís	NOUN	NOUN	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	OrigLang=tr
2	sorí	soró	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	čin	(o)	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	enékan	enéka	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	2	obj	_	_
5	du	(e)γó	PRON	PRON	Case=Gen|Clitic=Yes|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	4	nmod	_	_
6	kimizméni	(kimámi)	VERB	VERB	Aspect=Perf|Case=Acc|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	4	acl	_	_
7	zuliás	zuliá	NOUN	NOUN	Case=Gen|Gender=Fem|Number=Sing	9	obl	_	_
8	čis	(e)γó	PRON	PRON	Case=Gen|Clitic=Yes|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	7	nmod	_	_
9	depé	depé	ADV	ADV	_	6	advmod	_	LC=YES|MorphSynC=FrGrEl|MorphSynSC=Post|OrigLang=tr|SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


