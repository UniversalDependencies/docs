---
layout: base
title:  'Statistics of det:predet in UD_Italian-KIParlaForest'
udver: '2'
---

## Treebank Statistics: UD_Italian-KIParlaForest: Relations: `det:predet`

This relation is a language-specific subtype of <tt><a href="it_kiparlaforest-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="it_kiparlaforest-dep-det-poss.html">det:poss</a></tt>.

32 nodes (0%) are attached to their parents as `det:predet`.

32 instances of `det:predet` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.125.

The following 2 pairs of parts of speech are connected with `det:predet`: <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-DET.html">DET</a></tt> (31; 97% instances), <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 det:predet	color:blue
1	mi	mi	PRON	_	Number=Sing|Person=1|PronType=Prs	2	iobj	_	Begin=636.952|Clitic=Yes|KID=424-0
2	sa	sapere	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	KID=424-1
3	che	che	SCONJ	_	_	5	mark	_	KID=424-2
4	dobbiam	dovere	AUX	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	5	aux	_	KID=424-3|Truncated=Yes
5	bippare	bippare	VERB	_	VerbForm=Inf	2	ccomp	_	KID=424-4
6	tutto	tutto	PRON	_	Gender=Masc|Number=Sing|PronType=Ind	5	obj	_	End=638.992|KID=424-5
7	tutti	tutto	DET	_	PronType=Ind	10	det:predet	_	Begin=639.222|KID=426-0
8	i	il	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	10	det	_	KID=426-1
9	due	due	NUM	_	NumType=Card	10	nummod	_	KID=426-2
10	minuti	minuto	NOUN	_	Gender=Masc|Number=Plur	6	appos	_	End=640.272|KID=426-3|OverlappingGroup=70

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 det:predet	color:blue
1	ma	ma	CCONJ	_	_	4	cc	_	Begin=1895.296|Intonation=Falling|KID=744-0
2	ne	ne	PRON	_	PronType=Prs	4	expl	_	KID=744-1
3	potete	potere	AUX	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	4	aux	_	KID=744-2
4	fare	fare	VERB	_	VerbForm=Inf	7	parataxis	_	KID=744-3
5	altre	altro	DET	_	PronType=Ind	6	amod	_	KID=744-4
6	cose	cosa	NOUN	_	Gender=Fem|Number=Plur	4	obj	_	KID=744-5
7	pare	parere	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	KID=744-6
8	che	che	SCONJ	_	_	9	mark	_	KID=744-7
9	abbia	avere	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	ccomp	_	KID=744-8
10	tutta	tutto	PRON	_	PronType=Ind	12	det:predet	_	KID=744-9
11	una	uno	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	12	det	_	KID=744-10
12	serie	serie	NOUN	_	Gender=Fem	9	obj	_	KID=744-11
13	di	di	ADP	_	_	14	case	_	KID=744-12
14	proprietà	proprietà	NOUN	_	Gender=Fem	12	nmod	_	End=1899.137|KID=744-13|Prolonged=Yes
15	antinfiammatoria	antinfiammatorio	ADJ	_	Gender=Fem|Number=Sing	14	amod	_	Begin=1899.814|KID=745-0
16	e	e	CCONJ	_	_	18	cc	_	KID=745-1
17	quindi	quindi	CCONJ	_	_	18	cc	_	KID=745-2
18	dicono	dire	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	15	conj	_	KID=745-3
19	che	che	SCONJ	_	_	20	mark	_	KID=745-4
20	vada	andare	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	ccomp	_	KID=745-5
21	bene	bene	ADV	_	_	20	advmod	_	KID=745-6
22	per	per	ADP	_	_	24	case	_	KID=745-7
23	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	24	det	_	KID=745-8
24	raffreddore	raffreddore	NOUN	_	Gender=Masc|Number=Sing	20	obl	_	Intonation=WeaklyRising|KID=745-9|Prolonged=Yes
25	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	26	det	_	KID=745-10
26	mal	male	NOUN	_	Gender=Masc|Number=Sing	20	obj	_	KID=745-11
27	di	di	ADP	_	_	28	case	_	KID=745-12
28	testa	testa	NOUN	_	Gender=Fem|Number=Sing	26	nmod	_	KID=745-13
29	tutto	tutto	ADJ	_	_	20	obl	_	KID=745-14
30	quanto	quanto	PRON	_	Gender=Masc|Number=Sing|PronType=Int	29	det	_	End=1904.838|Intonation=Falling|KID=745-15

~~~


