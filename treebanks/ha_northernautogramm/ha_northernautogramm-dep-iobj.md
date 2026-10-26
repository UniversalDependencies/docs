---
layout: base
title:  'Statistics of iobj in UD_Hausa-NorthernAutogramm'
udver: '2'
---

## Treebank Statistics: UD_Hausa-NorthernAutogramm: Relations: `iobj`

This relation is universal.

243 nodes (2%) are attached to their parents as `iobj`.

243 instances of `iobj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 6 pairs of parts of speech are connected with `iobj`: <tt><a href="ha_northernautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="ha_northernautogramm-pos-PRON.html">PRON</a></tt> (228; 94% instances), <tt><a href="ha_northernautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="ha_northernautogramm-pos-NOUN.html">NOUN</a></tt> (8; 3% instances), <tt><a href="ha_northernautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="ha_northernautogramm-pos-PART.html">PART</a></tt> (4; 2% instances), <tt><a href="ha_northernautogramm-pos-AUX.html">AUX</a></tt>-<tt><a href="ha_northernautogramm-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ha_northernautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="ha_northernautogramm-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="ha_northernautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="ha_northernautogramm-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 iobj	color:blue
1	à	yà	AUX	_	Mood=Sub|Person=4	2	aux	_	AlignBegin=42940|AlignEnd=43722|Gloss=4.Sub
2	baː	baː	VERB	_	_	0	root	_	AlignBegin=43722|AlignEnd=44504|Gloss=give
3	sù	su	PRON	_	Number=Plur|Person=3|PronType=Prs	2	iobj	_	AlignBegin=44504|AlignEnd=45286|Gloss=3Plur
4	taːsù	taːsù	PRON	_	Case=Gen|Number=Plur|Person=3|PronType=Prs	5	nmod:poss	_	AlignBegin=45286|AlignEnd=46068|Gloss=3Plur.Gen
5	takàrdaː	takàrdaː	NOUN	_	_	2	obj	_	AlignBegin=46068|AlignEnd=46850|Gloss=paper
6	|c	|c	PUNCT	_	_	8	punct	_	AlignBegin=46850|AlignEnd=47632|Gloss=PUNCT
7	sù	yà	AUX	_	Mood=Sub|Number=Plur|Person=3	8	aux	_	AlignBegin=46850|AlignEnd=47632|Gloss=3Plur.Sub
8	zamnàː	zamn-	VERB	_	_	2	conj	_	AlignBegin=47632|AlignEnd=48414|Gloss=stay/sit
9	Galmaːwaː	Galmaːwaː	PROPN	_	_	8	obl	_	AlignBegin=48414|AlignEnd=49196|Gloss=Galmaːwaː
10	//	//	PUNCT	_	_	2	punct	_	AlignBegin=49196|AlignEnd=49980|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 iobj	color:blue
1	kullun	kullun	ADV	_	_	4	advmod	_	AlignBegin=170420|AlignEnd=170580|Gloss=always
2	<	<	PUNCT	_	_	1	punct	_	AlignBegin=170580|AlignEnd=170740|Gloss=PUNCT
3	shì	yà	AUX	_	Gender=Masc|Mood=Sub|Person=3	4	aux	_	AlignBegin=170740|AlignEnd=170900|Gloss=3Masc.Sub
4	bâː	baː	VERB	_	_	0	root	_	AlignBegin=170900|AlignEnd=171060|Gloss=give
5	ɗan	ɗaː	NOUN	_	Definite=Cons|Gender=Masc	4	iobj	_	AlignBegin=171060|AlignEnd=171220|Gloss=child.Masc.Cons
6	dumèn	dumèː	NOUN	_	Definite=Cons|Gender=Masc	5	compound	_	AlignBegin=171220|AlignEnd=171380|Gloss=pumpkin.Masc.Cons
7	nan	nan	DET	_	Deixis=ProxH|PronType=Dem	5	det	_	AlignBegin=171380|AlignEnd=171540|Gloss=ProxH
8	ruwaː	ruwaː	NOUN	_	Number=Plur	4	obj	_	AlignBegin=171540|AlignEnd=171700|Gloss=water.Plur
9	hay	har	SCONJ	_	_	11	mark	_	AlignBegin=171700|AlignEnd=171860|Gloss=until
10	yah	yaː	AUX	_	Aspect=Perf|Gender=Masc|Person=3	11	aux	_	AlignBegin=171860|AlignEnd=172020|Gloss=3Masc.Perf.Rel|Relative=Yes
11	hitoː	fit-	VERB	_	_	4	advcl	_	AlignBegin=172020|AlignEnd=172180|Gloss=come_out
12	//	//	PUNCT	_	_	4	punct	_	AlignBegin=172180|AlignEnd=172340|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 iobj	color:blue
1	"	"	PUNCT	_	_	6	punct	_	Gloss=PUNCT
2	in	in	SCONJ	_	_	3	mark	_	Gloss=if
3	baːbù	baːbù	PART	_	PartType=Pred|Polarity=Neg	6	advcl	_	Gloss=there_is.Neg
4	kuma	kuma	PART	_	PartType=Top	3	discourse	_	Gloss=too
5	ìn	yà	AUX	_	Mood=Sub|Person=1	6	aux	_	Gloss=1Sing.Sub
6	bâː	baː	VERB	_	_	0	root	_	Gloss=give
7	mài	mài	PART	_	Number=Sing|PartType=Der	6	iobj	_	Gloss=owner_of.Sing
8	maulòː	maulòː	NOUN	_	Gender=Masc	7	compound	_	Gloss=guitar.Masc
9	"	"	PUNCT	_	_	6	punct	_	Gloss=PUNCT|SpaceAfter=No
10	.	.	PUNCT	_	_	6	punct	_	Gloss=PUNCT

~~~


