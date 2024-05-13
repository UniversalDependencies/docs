---
layout: base
title:  'Statistics of obl:arg in UD_Zaar-Autogramm'
udver: '2'
---

## Treebank Statistics: UD_Zaar-Autogramm: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="say_autogramm-dep-obl.html">obl</a></tt>.

236 nodes (1%) are attached to their parents as `obl:arg`.

235 instances of `obl:arg` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.1228813559322.

The following 12 pairs of parts of speech are connected with `obl:arg`: <tt><a href="say_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="say_autogramm-pos-NOUN.html">NOUN</a></tt> (121; 51% instances), <tt><a href="say_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="say_autogramm-pos-PRON.html">PRON</a></tt> (43; 18% instances), <tt><a href="say_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="say_autogramm-pos-PROPN.html">PROPN</a></tt> (22; 9% instances), <tt><a href="say_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="say_autogramm-pos-ADV.html">ADV</a></tt> (18; 8% instances), <tt><a href="say_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="say_autogramm-pos-VERB.html">VERB</a></tt> (17; 7% instances), <tt><a href="say_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="say_autogramm-pos-ADP.html">ADP</a></tt> (5; 2% instances), <tt><a href="say_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="say_autogramm-pos-X.html">X</a></tt> (3; 1% instances), <tt><a href="say_autogramm-pos-X.html">X</a></tt>-<tt><a href="say_autogramm-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="say_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="say_autogramm-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="say_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="say_autogramm-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="say_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="say_autogramm-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="say_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="say_autogramm-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 obl:arg	color:blue
1	éy	éy	INTJ	_	_	7	discourse	_	AlignBegin=174223|AlignEnd=174328|Gloss=indeed
2	<	<	PUNCT	_	_	1	punct	_	AlignBegin=174328|AlignEnd=174433|Gloss=PUNCT
3	kyáː	_	AUX	yáː	Mood=Cnd|Number=Sing|Person=2	4	aux	_	AlignBegin=174433|AlignEnd=174543|Gloss=2Sing.Cnd
4	mân	mán	VERB	_	_	7	parataxis	_	AlignBegin=174543|AlignEnd=174653|Gloss=come
5	<	<	PUNCT	_	_	4	punct	_	AlignBegin=174653|AlignEnd=174763|Gloss=PUNCT
6	ká	_	AUX	a	Number=Plur|Person=2|Tense=Fut	7	aux	_	AlignBegin=174763|AlignEnd=174953|Gloss=2Plur.Fut
7	mán	mán	VERB	_	_	0	root	_	AlignBegin=174953|AlignEnd=175143|Gloss=come
8	fi	fî	VERB	_	_	7	compound	_	AlignBegin=175143|AlignEnd=175333|Gloss=do
9	maːndə	maːndə	NOUN	_	_	8	obj	_	AlignBegin=175333|AlignEnd=175525|Gloss=fight
10	tə́	tə́	ADP	_	_	11	case	_	AlignBegin=175525|AlignEnd=175658|Gloss=with
11	kúni	kúni	NOUN	_	_	8	obl:arg	_	AlignBegin=175658|AlignEnd=175724|Gloss=boy
12	=âtn	=atn	PRON	_	Number=Sing|Person=1|Poss=Yes|PronType=Prs	11	nmod:poss	_	AlignBegin=175724|AlignEnd=175791|Gloss=1Sing.Gen
13	//	//	PUNCT	_	_	7	punct	_	AlignBegin=175791|AlignEnd=175923|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obl:arg	color:blue
1	kúníː	kúni	NOUN	_	Deixis=Remt	3	nsubj	_	AlignBegin=128571|AlignEnd=128687|Gloss=boy
2	àː	_	AUX	àː	Aspect=Perf|Number=Sing|Person=3	3	aux	_	AlignBegin=128803|AlignEnd=129035|Gloss=3Sing.Perf
3	məs	məs	VERB	_	_	0	root	_	AlignBegin=129035|AlignEnd=129267|Gloss=die
4	ɓas	ɓas	ADP	_	_	5	case	_	AlignBegin=129267|AlignEnd=129383|Gloss=of
5	=mə	=mə	PRON	_	Number=Sing|Person=1|PronType=Prs	3	obl:arg	_	AlignBegin=129383|AlignEnd=129499|Gloss=1Sing.Obj
6	sòːséy	sòːséy	ADV	_	_	3	advmod	_	AlignBegin=129499|AlignEnd=129731|Gloss=quite
7	//	//	PUNCT	_	_	3	punct	_	AlignBegin=129731|AlignEnd=129966|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obl:arg	color:blue
1	dàgà	dàgà	ADP	_	_	2	case	_	AlignBegin=24095|AlignEnd=24262|Gloss=from
2	Ɓóngaː	Ɓóngaː	PROPN	_	_	5	obl	_	AlignBegin=24262|AlignEnd=24429|Gloss=B'onga
3	<	<	PUNCT	_	_	2	punct	_	AlignBegin=24429|AlignEnd=24596|Gloss=PUNCT
4	má	_	AUX	a	Number=Plur|Person=1|Tense=Fut	5	aux	_	AlignBegin=24596|AlignEnd=24763|Gloss=1Plur.Fut
5	ɲol	ɲol	VERB	_	_	0	root	_	AlignBegin=24763|AlignEnd=24931|Gloss=go_out
6	séː	séː	ADP	_	_	7	case	_	AlignBegin=24931|AlignEnd=25202|Gloss=until
7	Kində	Kində	PROPN	_	_	5	obl:arg	_	AlignBegin=25202|AlignEnd=25473|Gloss=Kində
8	//	//	PUNCT	_	_	5	punct	_	AlignBegin=25473|AlignEnd=25745|Gloss=PUNCT

~~~


