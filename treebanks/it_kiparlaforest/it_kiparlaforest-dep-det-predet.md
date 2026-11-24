---
layout: base
title:  'Statistics of det:predet in UD_Italian-KIParlaForest'
udver: '2'
---

## Treebank Statistics: UD_Italian-KIParlaForest: Relations: `det:predet`

This relation is a language-specific subtype of <tt><a href="it_kiparlaforest-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="it_kiparlaforest-dep-det-poss.html">det:poss</a></tt>.

43 nodes (0%) are attached to their parents as `det:predet`.

43 instances of `det:predet` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.23255813953488.

The following 3 pairs of parts of speech are connected with `det:predet`: <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-DET.html">DET</a></tt> (41; 95% instances), <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt>-<tt><a href="it_kiparlaforest-pos-DET.html">DET</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 det:predet	color:blue
1	mi	mi	PRON	_	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	2	iobj	_	Begin=636.952|KID=424-0
2	sa	sapere	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	KID=424-1
3	che	che	SCONJ	_	_	5	mark	_	KID=424-2
4	dobbiam	dovere	AUX	_	_	5	aux	_	KID=424-3|Truncated=Yes
5	bippare	bippare	VERB	_	_	2	ccomp	_	KID=424-4
6	tutto	tutto	PRON	_	Gender=Masc|Number=Sing|PronType=Ind	5	obj	_	End=638.992|KID=424-5
7	tutti	tutto	DET	_	Gender=Masc|Number=Plur|PronType=Tot	10	det:predet	_	Begin=639.222|KID=426-0
8	i	il	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	10	det	_	KID=426-1
9	due	due	NUM	_	NumType=Card	10	nummod	_	KID=426-2
10	minuti	minuto	NOUN	_	Gender=Masc|Number=Plur	6	conj:reform	_	End=640.272|KID=426-3|OverlappingGroup=70

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 12 det:predet	color:blue
1	eh	eh	INTJ	_	_	6	discourse:filler	_	Begin=1893.981|KID=743-0|Prolonged=Yes|ProsodicLink=Yes
2	mh	mh	INTJ	_	_	6	discourse:filler	_	End=1894.926|KID=743-1
3	ma	ma	CCONJ	_	_	6	cc	_	Begin=1895.296|Intonation=Falling|KID=744-0
4	ne	ne	PRON	_	Clitic=Yes|PronType=Prs	6	expl	_	KID=744-1
5	potete	potere	AUX	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	6	aux	_	KID=744-2
6	fare	fare	VERB	_	VerbForm=Inf	9	parataxis	_	KID=744-3
7	altre	altro	DET	_	PronType=Ind	8	amod	_	KID=744-4
8	cose	cosa	NOUN	_	Gender=Fem|Number=Plur	6	obj	_	KID=744-5
9	pare	parere	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	KID=744-6
10	che	che	SCONJ	_	_	11	mark	_	KID=744-7
11	abbia	avere	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	ccomp	_	KID=744-8
12	tutta	tutto	PRON	_	Gender=Fem|Number=Sing|PronType=Ind	14	det:predet	_	KID=744-9
13	una	uno	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	14	det	_	KID=744-10
14	serie	serie	NOUN	_	Gender=Fem	11	obj	_	KID=744-11
15	di	di	ADP	_	_	16	case	_	KID=744-12
16	proprietà	proprietà	NOUN	_	Gender=Fem	14	nmod	_	End=1899.137|KID=744-13|Prolonged=Yes
17	antinfiammatoria	antinfiammatorio	ADJ	_	_	16	amod	_	Begin=1899.814|KID=745-0
18	e	e	CCONJ	_	_	20	cc	_	KID=745-1
19	quindi	quindi	CCONJ	_	_	20	cc	_	KID=745-2
20	dicono	dire	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	conj	_	KID=745-3
21	che	che	SCONJ	_	_	22	mark	_	KID=745-4
22	vada	andare	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	ccomp	_	KID=745-5
23	bene	bene	ADV	_	_	22	advmod	_	KID=745-6
24	per	per	ADP	_	_	26	case	_	KID=745-7
25	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	26	det	_	KID=745-8
26	raffreddore	raffreddore	NOUN	_	Gender=Masc|Number=Sing	22	obl	_	Intonation=WeaklyRising|KID=745-9|Prolonged=Yes
27	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	28	det	_	KID=745-10
28	mal	male	NOUN	_	Gender=Masc	26	conj	_	KID=745-11
29	di	di	ADP	_	_	30	case	_	KID=745-12
30	testa	testa	NOUN	_	Gender=Fem|Number=Sing	28	nmod	_	KID=745-13
31	tutto	tutto	ADJ	_	Gender=Masc|Number=Sing	26	conj	_	KID=745-14
32	quanto	quanto	PRON	_	Gender=Masc|Number=Sing|PronType=Rel	31	det	_	End=1904.838|Intonation=Falling|KID=745-15

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 det:predet	color:blue
1	in	in	ADP	_	_	2	case	_	Begin=80.748|KID=42-0
2	sostituzione	sostituzione	NOUN	_	Gender=Fem|Number=Sing	0	root	_	Coconstruct=nmod::BOA1003_41::5|KID=42-1
3	di	di	ADP	_	_	6	case	_	Head=position|KID=42-2
4	tutta	tutto	DET	_	Gender=Fem|Number=Sing|PronType=Tot	6	det:predet	_	Head=position|KID=42-3
5	la	il	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	reparandum	_	Head=word|KID=42-4
6	la	la	PRON	_	Clitic=Yes|Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	nmod	_	End=82.687|Intonation=WeaklyRising|KID=42-5|Promotion=det|Scrap=Yes

~~~


