---
layout: base
title:  'Statistics of acl in UD_Hausa-SouthernAutogramm'
udver: '2'
---

## Treebank Statistics: UD_Hausa-SouthernAutogramm: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="ha_southernautogramm-dep-acl-relcl.html">acl:relcl</a></tt>.

18 nodes (0%) are attached to their parents as `acl`.

12 instances of `acl` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 5 pairs of parts of speech are connected with `acl`: <tt><a href="ha_southernautogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ha_southernautogramm-pos-VERB.html">VERB</a></tt> (8; 44% instances), <tt><a href="ha_southernautogramm-pos-PRON.html">PRON</a></tt>-<tt><a href="ha_southernautogramm-pos-VERB.html">VERB</a></tt> (4; 22% instances), <tt><a href="ha_southernautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="ha_southernautogramm-pos-VERB.html">VERB</a></tt> (4; 22% instances), <tt><a href="ha_southernautogramm-pos-PRON.html">PRON</a></tt>-<tt><a href="ha_southernautogramm-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="ha_southernautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="ha_southernautogramm-pos-AUX.html">AUX</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 acl	color:blue
1	koː	koː	CCONJ	_	_	3	discourse	_	AlignBegin=22510|AlignEnd=22648|Gloss=or
2	zaːkà	_	AUX	zaːsù/zâːsu	Gender=Masc|Person=2|Tense=Fut	3	aux	_	AlignBegin=22786|AlignEnd=22924|Gloss=2Masc.Fut
3	taɓàː	taɓ-	VERB	_	_	0	root	_	AlignBegin=22924|AlignEnd=23062|Gloss=touch
4	mîn	mîn	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	3	iobj	_	AlignBegin=23062|AlignEnd=23200|Gloss=1Sing.Dat
5	irin	iriː	NOUN	_	Definite=Cons	3	obj	_	AlignBegin=23200|AlignEnd=23269|Gloss=type.Cons
6	zaman	zaun-	VERB	_	_	5	acl	_	AlignBegin=23338|AlignEnd=23407|Gloss=stay
7	dà	dà	SCONJ	_	_	9	mark	_	AlignBegin=23476|AlignEnd=23614|Gloss=COMP
8	kukà	_	AUX	sukà/sunkà	Aspect=PerfBkg|Number=Plur|Person=2	9	aux	_	AlignBegin=23614|AlignEnd=23752|Background=Yes|Gloss=2Plur.Perf.Bkg
9	yi	yi	VERB	_	_	6	acl:relcl	_	AlignBegin=23752|AlignEnd=23890|Gloss=do
10	dà	dà	ADP	_	_	11	case	_	AlignBegin=23890|AlignEnd=24028|Gloss=with
11	ita	ita	PRON	_	Gender=Fem|Person=3|PronType=Prs	9	obl:arg	_	AlignBegin=24028|AlignEnd=24166|Gloss=3Fem.Nom
12	?//	?//	PUNCT	_	_	3	punct	_	AlignBegin=24166|AlignEnd=24310|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 acl	color:blue
1	ìdan	ìdan	SCONJ	_	_	3	mark	_	AlignBegin=562427|AlignEnd=562643|Gloss=if
2	mukà	_	AUX	sukà/sunkà	Aspect=PerfBkg|Number=Plur|Person=1	3	aux	_	AlignBegin=562643|AlignEnd=562859|Background=Yes|Gloss=1Plur.Perf.Bkg
3	ɗiːbàː	ɗiːbàː	VERB	_	_	7	acl	_	AlignBegin=562859|AlignEnd=563075|Gloss=scoop_out
4	dà	dà	ADP	_	_	5	case	_	AlignBegin=563075|AlignEnd=563291|Gloss=with
5	jènèr̃etòː	jènèr̃etòː	NOUN	_	Foreign=Yes	3	obl:arg	_	AlignBegin=563291|AlignEnd=563507|Gloss=generator|Lang=en
6	<	<	PUNCT	_	_	3	punct	_	AlignBegin=563507|AlignEnd=563726|Gloss=PUNCT
7	shiː	shiː	PRON	_	Case=Nom|Gender=Masc|Person=3|PronType=Prs	0	root	_	AlignBegin=563726|AlignEnd=563884|Gloss=3Masc.Nom
8	mukèː	_	AUX	kèː/kà	Aspect=ProgBkg|Number=Plur|Person=1	9	aux	_	AlignBegin=563884|AlignEnd=564042|Background=Yes|Gloss=1Plur.Prog.Bkg
9	baː	baː	VERB	_	_	7	advcl:cleft	_	AlignBegin=564042|AlignEnd=564200|Gloss=give|wordform=bâː
10	sù	su	PRON	_	Number=Plur|Person=3|PronType=Prs	9	iobj	_	AlignBegin=564200|AlignEnd=564358|Gloss=3Plur
11	wânnan	wânnan	DET	_	Definite=Def	12	det	_	AlignBegin=564358|AlignEnd=564516|Gloss=Def
12	ruwân	ruwaː	NOUN	_	Definite=Def	9	obj	_	AlignBegin=564516|AlignEnd=564595|Gloss=water.Def
13	kèːnan	kèːnan/aC	PART	_	_	12	advmod	_	AlignBegin=564674|AlignEnd=564832|Background=Yes|Gloss=Ident/Foc.Bkg
14	//	//	PUNCT	_	_	7	punct	_	AlignBegin=564990|AlignEnd=565151|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 acl	color:blue
1	anàː	_	AUX	nàː	Aspect=Prog|Person=4	2	aux	_	AlignBegin=78420|AlignEnd=78618|Gloss=4.Prog
2	ròːƙon	roːƙ-	VERB	_	Definite=Cons|ExtPos=NOUN|VerbForm=Vnoun	0	root	_	AlignBegin=78618|AlignEnd=78684|Gloss=beg.Vnoun.Cons|wordform=ròːƙoː
3	=kà	=kà	PRON	_	Gender=Masc|Person=3|PronType=Prs	2	nmod	_	AlignBegin=78750|AlignEnd=78816|Gloss=2Masc
4	neː	neː/naː	PART	_	_	3	advmod	_	AlignBegin=78816|AlignEnd=79014|Gloss=Ident/Foc
5	maː	maː	PART	_	_	3	discourse	_	AlignBegin=79014|AlignEnd=79212|Gloss=even
6	kà	_	AUX	sù	Aspect=Aor|Gender=Masc|Person=2	7	aux	_	AlignBegin=79212|AlignEnd=79410|Gloss=2Masc.Aor
7	sàyaː	sày-	VERB	_	_	2	acl	_	AlignBegin=79410|AlignEnd=79608|Gloss=buy
8	//	//	PUNCT	_	_	2	punct	_	AlignBegin=79608|AlignEnd=79808|Gloss=PUNCT

~~~


