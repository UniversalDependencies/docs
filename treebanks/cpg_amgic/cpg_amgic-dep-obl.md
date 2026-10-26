---
layout: base
title:  'Statistics of obl in UD_Cappadocian-AMGiC'
udver: '2'
---

## Treebank Statistics: UD_Cappadocian-AMGiC: Relations: `obl`

This relation is universal.

29 nodes (4%) are attached to their parents as `obl`.

16 instances of `obl` (55%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.41379310344828.

The following 6 pairs of parts of speech are connected with `obl`: <tt><a href="cpg_amgic-pos-VERB.html">VERB</a></tt>-<tt><a href="cpg_amgic-pos-NOUN.html">NOUN</a></tt> (20; 69% instances), <tt><a href="cpg_amgic-pos-ADV.html">ADV</a></tt>-<tt><a href="cpg_amgic-pos-NOUN.html">NOUN</a></tt> (5; 17% instances), <tt><a href="cpg_amgic-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cpg_amgic-pos-AUX.html">AUX</a></tt> (1; 3% instances), <tt><a href="cpg_amgic-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cpg_amgic-pos-NUM.html">NUM</a></tt> (1; 3% instances), <tt><a href="cpg_amgic-pos-ADP.html">ADP</a></tt>-<tt><a href="cpg_amgic-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="cpg_amgic-pos-ADV.html">ADV</a></tt>-<tt><a href="cpg_amgic-pos-PRON.html">PRON</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl	color:blue
1	táre	táre	PRON	PRON	PronType=Ind	3	nmod	_	#MG_:τάδε?_(cf._Kostakis_1968_p196)_indeclinable
2	tu	(ο)	DET	DET	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	3	det	_	_
3	spíči	spíči	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	4	obl	_	#Locative_meaning
4	éni	ímu	VERB	VERB	_	0	root	_	#existential_meaning_"there_is"
5	éna	énas	DET	DET	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	6	det	_	_
6	korítsi	korítsi	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Sing	4	nsubj	_	_
7	χošá	χošás	ADJ	ADJ	Case=Nom|Gender=Neut|Number=Sing	6	amod	_	OrigLang=tr|#No LC-induced morphosyntactic phenomenon but interesting postposition of the adjective

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obl	color:blue
1	na	na	AUX	Subj	_	2	aux	_	_
2	baγərtzísi	baγərdó	VERB	VERB	Aspect=Perf|Mood=Sub|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	8	csubj	_	_
3	kukuniós	kukuniós	NOUN	NOUN	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	2	punct	_	_
5	vráδin	vráδin	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	6	obl	_	_
6	ortá	ortá	ADV	ADV	_	2	advmod	_	LC=Yes|MorphSynC=FrGrEl|MorphSynSC=Post|OrigLang=tr|SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	6	punct	_	_
8	kaló	kalós	ADJ	ADJ	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
9	ren	ren	PART	Neg	_	8	advmod	_	_
10	'ne	ímu	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	LC=Yes|MorphSynC=MorphIn|MorphSynSC=CopNeg|#Compare_Turkish:değildir

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 obl	color:blue
1	Ce	ce	CCONJ	CCONJ	_	2	cc	_	_
2	eksévin	(ekvéno)	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	éna	ís	DET	DET	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	5	det	_	_
4	Dunyá	Dunyá	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	5	nmod	_	Orig=dünya|OrigLang=tr
5	Güzelí	Güzelí	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	_	Orig=güzel|OrigLang=tr|SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	2	punct	_	_
7	ce	ce	CCONJ	CCONJ	_	13	cc	_	_
8	as'	aso	ADP	ADP	_	11	case	_	cf. Cap. Lex.:απ' το > αθ' το > ασ' τό
9	ála	álos	ADJ	ADJ	Case=Acc|Gender=Neut|Number=Plur	11	amod	_	_
10	sa	o	DET	DET	Case=Acc|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	11	det	_	<τα?
11	δyo	δyo	NUM	NUM	NumType=Card	13	obl	_	_
12	daχá	daχá	ADV	ADV	_	13	advmod	_	LC=Yes|MorphSynC=FrGrEl|MorphSynSC=Quant|Orig=daha|OrigLang=tr
13	güzél	güzél	ADJ	ADJ	_	2	conj	_	Orig=güzel|OrigLang=tr
14	'ton	ímu	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	13	obl	_	LC=Yes|MorphSynC=SynIn|MorphSynSC=EnCop|SpaceAfter=No
15	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


