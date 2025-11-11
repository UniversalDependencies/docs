---
layout: base
title:  'Statistics of csubj in UD_Hausa-SouthernAutogramm'
udver: '2'
---

## Treebank Statistics: UD_Hausa-SouthernAutogramm: Relations: `csubj`

This relation is universal.

4 nodes (0%) are attached to their parents as `csubj`.

2 instances of `csubj` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.25.

The following 3 pairs of parts of speech are connected with `csubj`: <tt><a href="ha_southernautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="ha_southernautogramm-pos-VERB.html">VERB</a></tt> (2; 50% instances), <tt><a href="ha_southernautogramm-pos-AUX.html">AUX</a></tt>-<tt><a href="ha_southernautogramm-pos-VERB.html">VERB</a></tt> (1; 25% instances), <tt><a href="ha_southernautogramm-pos-PART.html">PART</a></tt>-<tt><a href="ha_southernautogramm-pos-VERB.html">VERB</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 csubj	color:blue
1	kuma	kuma	PART	_	PartType=Top	5	discourse	_	AlignBegin=128720|AlignEnd=128740|Gloss=too
2	mân	mân	VERB	_	_	5	csubj	_	AlignBegin=128740|AlignEnd=1287490|Gloss=fat.Cons|wordform=mâi
3	shaːnuː	shaːnuː	NOUN	_	Definite=Ind|Number=Plur	2	compound	_	AlignBegin=1287590|AlignEnd=1287680|Gloss=cow.Plur
4	nàː	_	AUX	nàː	Aspect=Prog	5	aux	_	AlignBegin=1287780|AlignEnd=1287970|Gloss=Prog
5	gyaːrà	gyaːr-	VERB	_	_	0	root	_	AlignBegin=1287970|AlignEnd=1288160|Gloss=repair
6	jìkiː	jìkiː	NOUN	_	Definite=Ind	5	obj	_	AlignBegin=1288160|AlignEnd=1288360|Gloss=body
7	//	//	PUNCT	_	_	5	punct	_	AlignBegin=1288360|AlignEnd=1288550|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 csubj	color:blue
1	yaː	_	AUX	yaː	Aspect=Perf|Gender=Masc|Person=3	4	reparandum	_	AlignBegin=1568060|AlignEnd=1568220|Gloss=3Masc.Perf
2	yaː	_	AUX	yaː	Aspect=Perf|Gender=Masc|Person=3	4	reparandum	_	AlignBegin=1568220|AlignEnd=1568380|Gloss=3Masc.Perf
3	||	||	PUNCT	_	_	2	punct	_	AlignBegin=1568380|AlignEnd=1568540|Gloss=PUNCT
4	yaː	_	AUX	yaː	Aspect=Perf|Gender=Masc|Person=3	0	root	_	AlignBegin=1568540|AlignEnd=1568770|Gloss=3Masc.Perf
5	ɗan	ɗan	ADV	_	_	6	advmod	_	AlignBegin=1568770|AlignEnd=1568990|Gloss=DIM
6	coːkàraː	coːkar-	VERB	_	_	4	csubj	_	AlignBegin=1568990|AlignEnd=1569220|Gloss=dabble
7	zâi	_	AUX	zâi	Gender=Masc|Person=3|Tense=Fut	8	aux	_	AlignBegin=1569220|AlignEnd=1569440|Gloss=3Masc.Fut
8	taːshì	taːs-	VERB	_	_	4	parataxis	_	AlignBegin=1569440|AlignEnd=1569660|Gloss=rise
9	yà	_	AUX	ø	Aspect=Aor|Gender=Masc|Person=3	10	aux	_	AlignBegin=1569660|AlignEnd=1569890|Gloss=3Masc.Aor
10	tàfi	taf-	VERB	_	_	8	conj	_	AlignBegin=1569890|AlignEnd=1570110|Gloss=go
11	//	//	PUNCT	_	_	4	punct	_	AlignBegin=1570110|AlignEnd=1570330|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj	color:blue
1	gàː	gàː	PART	_	PartType=Pred	0	root	_	AlignBegin=1438360|AlignEnd=1438520|Gloss=here_is
2	mài	mài	ADP	_	Number=Sing	3	mark	_	AlignBegin=1438520|AlignEnd=1438680|Gloss=having|Linker=Yes
3	kiɗàː	kiɗ-	VERB	_	VerbForm=Vnoun	1	csubj	_	AlignBegin=1438680|AlignEnd=1438830|Gloss=beat_drum.Vnoun
4	//=	//=	PUNCT	_	_	1	punct	_	AlignBegin=1438830|AlignEnd=1438990|Gloss=PUNCT
5	yà	_	AUX	ø	Aspect=Aor|Gender=Masc|Person=3	6	aux	_	AlignBegin=1438990|AlignEnd=1439140|Gloss=3Masc.Aor
6	yi	yi	VERB	_	_	1	parataxis	_	AlignBegin=1439140|AlignEnd=143930|Gloss=do
7	ta	ta	PART	_	Aspect=Iter|PartType=Adv	6	compound:prt	_	AlignBegin=143930|AlignEnd=1439460|Gloss=Iter
8	mulmùlaːwàː	mulmul-	VERB	_	ExtPos=NOUN|VerbForm=Vnoun	6	xcomp	_	AlignBegin=1439460|AlignEnd=1439530|Gloss=knead.Vnoun|wordform=mulmùlaː
9	//=	//=	PUNCT	_	_	6	punct	_	AlignBegin=1439610|AlignEnd=1439770|Gloss=PUNCT
10	yanàː	_	AUX	nàː	Aspect=Prog|Gender=Masc|Person=3	11	aux	_	AlignBegin=1439770|AlignEnd=1440010|Gloss=3Masc.Prog
11	jeːfàːwaː	jeːf-	VERB	_	ExtPos=NOUN|VerbForm=Vnoun	6	parataxis	_	AlignBegin=1440010|AlignEnd=1440130|Gloss=throw.Vnoun|wordform=jeːfàː
12	//	//	PUNCT	_	_	1	punct	_	AlignBegin=1440250|AlignEnd=1440480|Gloss=PUNCT

~~~


