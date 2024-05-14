---
layout: base
title:  'Statistics of nmod:emph in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `nmod:emph`

This relation is a language-specific subtype of <tt><a href="pcm_nsc-dep-nmod.html">nmod</a></tt>.
There are also 3 other language-specific subtypes of `nmod`: <tt><a href="pcm_nsc-dep-nmod-appos.html">nmod:appos</a></tt>, <tt><a href="pcm_nsc-dep-nmod-periph.html">nmod:periph</a></tt>, <tt><a href="pcm_nsc-dep-nmod-poss.html">nmod:poss</a></tt>.

19 nodes (0%) are attached to their parents as `nmod:emph`.

19 instances of `nmod:emph` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.52631578947368.

The following 5 pairs of parts of speech are connected with `nmod:emph`: <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (11; 58% instances), <tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (3; 16% instances), <tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (3; 16% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-X.html">X</a></tt> (1; 5% instances), <tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pcm_nsc-pos-X.html">X</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 nmod:emph	color:blue
1	#	#	X	_	_	8	dep	_	AlignBegin=152470|AlignEnd=153020|Gloss=PUNCT
2	different	different	ADJ	_	_	3	amod	_	AlignBegin=153020|AlignEnd=153310|Gloss=different
3	kind	kind	NOUN	_	_	8	nsubj	_	AlignBegin=153310|AlignEnd=153480|Gloss=kind
4	of	of	ADP	_	_	5	case	_	AlignBegin=153480|AlignEnd=153650|Gloss=of
5	tings	tings	NOUN	_	Number=Plur	3	nmod	_	AlignBegin=153650|AlignEnd=154000|Gloss=thing.PL
6	like	like	ADP	_	_	7	case	_	AlignBegin=154000|AlignEnd=154141|Gloss=like
7	dat	dat	PRON	_	Number=Sing|PronType=Dem	5	nmod:emph	_	AlignBegin=154141|AlignEnd=154318|Gloss=SG.DEM
8	dey	dey	VERB	_	VerbType=Cop	0	root	_	AlignBegin=154318|AlignEnd=154470|Gloss=be
9	you	you	PRON	_	Case=Nom|Person=2|PronType=Prs	10	nsubj	_	AlignBegin=154500|AlignEnd=154660|Gloss=NOM.2
10	know	know	VERB	_	_	8	parataxis:discourse	_	AlignBegin=154660|AlignEnd=154760|Gloss=know
11	//	//	X	_	_	8	dep	_	AlignBegin=154790|AlignEnd=154890|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nmod:emph	color:blue
1	#	#	X	_	_	4	dep	_	AlignBegin=300480|AlignEnd=300700|Gloss=PUNCT
2	im	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	AlignBegin=300700|AlignEnd=300860|Gloss=NOM.SG.3
3	mahnsef	mahnsef	PRON	_	PronType=Prs|Reflex=Yes	2	nmod:emph	_	AlignBegin=300860|AlignEnd=301220|Gloss=itself
4	gain	gain	VERB	_	_	0	root	_	AlignBegin=301220|AlignEnd=301400|Gloss=gain
5	for	for	ADP	_	_	7	case	_	AlignBegin=301400|AlignEnd=301570|ExtPos=ADP|Gloss=for|PhraseType=Idiom
6	inside	inside	ADP	_	_	5	fixed	_	AlignBegin=301570|AlignEnd=301880|Gloss=inside
7	am	am	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	4	obl:arg	_	AlignBegin=301880|AlignEnd=301953|Gloss=ACC.SG.3
8	//	//	X	_	_	4	dep	_	AlignBegin=301953|AlignEnd=301983|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 nmod:emph	color:blue
1	#	#	X	_	_	6	dep	_	AlignBegin=181100|AlignEnd=182065|Gloss=PUNCT
2	her	her	PRON	_	Gender=Fem|Number=Sing|Person=3|Poss=Yes	3	nmod:poss	_	AlignBegin=182065|AlignEnd=182158|Gloss=F.SG.3.POSS
3	name	name	NOUN	_	_	6	nsubj	_	AlignBegin=182158|AlignEnd=182370|Gloss=name
4	na	na	AUX	_	PartType=Cop	6	cop	_	AlignBegin=182370|AlignEnd=182700|Gloss=be
5	#	#	X	_	_	6	dep	_	AlignBegin=182700|AlignEnd=182980|Gloss=PUNCT
6	Deborah	Deborah	PROPN	_	_	0	root	_	AlignBegin=182980|AlignEnd=183340|Gloss=Deborah
7	like	like	ADP	_	_	8	case	_	AlignBegin=183340|AlignEnd=183500|Gloss=like
8	dat	dat	PRON	_	Number=Sing|PronType=Dem	6	nmod:emph	_	AlignBegin=183500|AlignEnd=183790|Gloss=SG.DEM
9	//	//	X	_	_	6	dep	_	AlignBegin=183790|AlignEnd=183820|Gloss=PUNCT

~~~


