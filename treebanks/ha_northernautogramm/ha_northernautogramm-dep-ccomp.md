---
layout: base
title:  'Statistics of ccomp in UD_Hausa-NorthernAutogramm'
udver: '2'
---

## Treebank Statistics: UD_Hausa-NorthernAutogramm: Relations: `ccomp`

This relation is universal.

63 nodes (1%) are attached to their parents as `ccomp`.

63 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.82539682539683.

The following 6 pairs of parts of speech are connected with `ccomp`: <tt><a href="ha_northernautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="ha_northernautogramm-pos-VERB.html">VERB</a></tt> (55; 87% instances), <tt><a href="ha_northernautogramm-pos-PART.html">PART</a></tt>-<tt><a href="ha_northernautogramm-pos-VERB.html">VERB</a></tt> (3; 5% instances), <tt><a href="ha_northernautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="ha_northernautogramm-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="ha_northernautogramm-pos-AUX.html">AUX</a></tt>-<tt><a href="ha_northernautogramm-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="ha_northernautogramm-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ha_northernautogramm-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="ha_northernautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="ha_northernautogramm-pos-AUX.html">AUX</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 ccomp	color:blue
1	suː	suː	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	3	dislocated	_	AlignBegin=40250|AlignEnd=40477|Gloss=3Plur.Nom
2	sunkà	_	AUX	yaC	Aspect=Perf|Number=Plur|Person=3	3	aux	_	AlignBegin=40477|AlignEnd=40704|Background=Yes|Gloss=3Plur.Perf.Bkg
3	cêː	cêː	VERB	_	_	0	root	_	AlignBegin=40704|AlignEnd=40931|Gloss=say
4	sun	_	AUX	yaː	Aspect=Perf|Number=Plur|Person=3	5	aux	_	AlignBegin=40931|AlignEnd=41158|Gloss=3Plur.Perf
5	gàji	gaz-	VERB	_	_	3	ccomp	_	AlignBegin=41158|AlignEnd=41385|Gloss=get_tired
6	dà	dà	ADP	_	_	7	case	_	AlignBegin=41385|AlignEnd=41612|Gloss=with
7	bìyam	bi	VERB	_	Definite=Cons|ExtPos=NOUN|Gender=Fem|VerbForm=Vnoun	5	obl:arg	_	AlignBegin=41612|AlignEnd=41839|Gloss=follow.Vnoun.Fem.Cons
8	mutàːneː	mùtunèː	NOUN	_	Number=Plur	7	nmod	_	AlignBegin=41839|AlignEnd=42066|Gloss=human.Plur
9	//	//	PUNCT	_	_	3	punct	_	AlignBegin=42066|AlignEnd=42290|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 15 ccomp	color:blue
1	ɗan	ɗaː	ADJ	_	Definite=Cons|Gender=Masc	2	amod	_	AlignBegin=253727|AlignEnd=253894|Gloss=small.Masc.Cons
2	gùdaː-gudàn	gùdaː	NOUN	_	Definite=Def|Gender=Masc	11	dislocated	_	AlignBegin=253894|AlignEnd=254061|Gloss=one_only.Masc.Def
3	ga	ga	DET	_	Deixis=Prox	2	det	_	AlignBegin=254061|AlignEnd=254228|Gloss=Prox
4	dà	dà	SCONJ	_	_	7	mark	_	AlignBegin=254228|AlignEnd=254395|Gloss=REL
5	ad	_	AUX	aC	_	7	cop	_	AlignBegin=254395|AlignEnd=254562|Background=Yes|Gloss=Pred/Loc.Bkg
6	dà	dà	ADP	_	_	7	case	_	AlignBegin=254562|AlignEnd=254729|Gloss=with
7	saurat	sauraː	NOUN	_	Definite=Cons|Gender=Fem	2	acl:relcl	_	AlignBegin=254729|AlignEnd=254896|Gloss=remains.Fem.Cons
8	=tà	=ta	PRON	_	Gender=Fem|Person=3|PronType=Prs	7	nmod	_	AlignBegin=254729|AlignEnd=254896|Gloss=3Fem.Gen
9	kuma	kuma	ADV	_	_	2	advmod	_	AlignBegin=254896|AlignEnd=255063|Gloss=also
10	<	<	PUNCT	_	_	2	punct	_	AlignBegin=255063|AlignEnd=255230|Gloss=PUNCT
11	gàː	gàː	PART	_	_	0	root	_	AlignBegin=255230|AlignEnd=255397|Gloss=here_is
12	shi	shi	PRON	_	Gender=Masc|Person=3|PronType=Prs	11	nsubj	_	AlignBegin=255397|AlignEnd=255564|Gloss=3Masc
13	yâu	yâu	ADV	_	_	15	advmod	_	AlignBegin=255564|AlignEnd=255731|Gloss=today
14	zâːshi	_	AUX	zaː	Gender=Masc|Person=3|Tense=Fut	15	aux	_	AlignBegin=255731|AlignEnd=255898|Gloss=Fut
15	mutuwàː	mat-	VERB	_	ExtPos=NOUN|Gender=Fem|VerbForm=Vnoun	11	ccomp	_	AlignBegin=256065|AlignEnd=256232|Gloss=die.Vnoun.Fem
16	//	//	PUNCT	_	_	11	punct	_	AlignBegin=256232|AlignEnd=256400|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 ccomp	color:blue
1	kàreː	kàreː	NOUN	_	Gender=Masc	3	nsubj	_	AlignBegin=137500|AlignEnd=137724|Gloss=dog.Masc
2	yac	_	AUX	yaC	Aspect=Perf|Gender=Masc|Person=3	3	aux	_	AlignBegin=137724|AlignEnd=137948|Background=Yes|Gloss=3Masc.Perf.Bkg
3	cêː	cêː	VERB	_	_	0	root	_	AlignBegin=137948|AlignEnd=138172|Gloss=say
4	mai	mai	PRON	_	Case=Ben|Gender=Masc|Person=3|PronType=Prs	3	iobj	_	AlignBegin=138172|AlignEnd=138396|Gloss=3Masc.Ben
5	[	[	PUNCT	_	_	7	punct	_	AlignBegin=138396|AlignEnd=138620|Gloss=PUNCT
6	kanàː	_	AUX	nàː	Gender=Masc|Person=2	7	aux	_	AlignBegin=138620|AlignEnd=138844|Gloss=2Masc.Imp
7	gàyyaː	gàyyaː	NOUN	_	Gender=Fem	3	ccomp	_	AlignBegin=138844|AlignEnd=139068|Gloss=communal_hunting.Fem
8	//=	//=	PUNCT	_	_	11	punct	_	AlignBegin=139068|AlignEnd=139292|Gloss=PUNCT
9	ìn	_	AUX	shì	Aspect=Aor|Number=Sing|Person=1	10	aux	_	AlignBegin=139292|AlignEnd=139516|Gloss=1Sing.Aor
10	ji	ji	VERB	_	_	11	parataxis	_	AlignBegin=139516|AlignEnd=139740|Gloss=hear
11	baːbù	baːbù	PART	_	Polarity=Neg	7	parataxis	_	AlignBegin=139740|AlignEnd=139964|Gloss=there_is.Neg
12	dàːmisàː	dàːmisàː	NOUN	_	Gender=Fem	11	nsubj	_	AlignBegin=139964|AlignEnd=140188|Gloss=leopard.Fem
13	?//]	?//]	PUNCT	_	_	7	punct	_	AlignBegin=140188|AlignEnd=140412|Gloss=PUNCT
14	//	//	PUNCT	_	_	3	punct	_	AlignBegin=140412|AlignEnd=140640|Gloss=PUNCT

~~~


