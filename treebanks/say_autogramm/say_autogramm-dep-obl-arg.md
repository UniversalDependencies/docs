---
layout: base
title:  'Statistics of obl:arg in UD_Zaar-Autogramm'
udver: '2'
---

## Treebank Statistics: UD_Zaar-Autogramm: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="say_autogramm-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="say_autogramm-dep-obl-agent.html">obl:agent</a></tt>.

326 nodes (2%) are attached to their parents as `obl:arg`.

321 instances of `obl:arg` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.04294478527607.

The following 11 pairs of parts of speech are connected with `obl:arg`: <tt><a href="say_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="say_autogramm-pos-NOUN.html">NOUN</a></tt> (189; 58% instances), <tt><a href="say_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="say_autogramm-pos-PRON.html">PRON</a></tt> (49; 15% instances), <tt><a href="say_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="say_autogramm-pos-ADV.html">ADV</a></tt> (25; 8% instances), <tt><a href="say_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="say_autogramm-pos-PROPN.html">PROPN</a></tt> (25; 8% instances), <tt><a href="say_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="say_autogramm-pos-VERB.html">VERB</a></tt> (25; 8% instances), <tt><a href="say_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="say_autogramm-pos-ADP.html">ADP</a></tt> (4; 1% instances), <tt><a href="say_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="say_autogramm-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="say_autogramm-pos-ADV.html">ADV</a></tt>-<tt><a href="say_autogramm-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="say_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="say_autogramm-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="say_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="say_autogramm-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="say_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="say_autogramm-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 obl:arg	color:blue
1	éy	éy	INTJ	_	_	7	discourse	_	AlignBegin=174223|AlignEnd=174328|Gloss=indeed
2	<	<	PUNCT	_	_	1	punct	_	AlignBegin=174328|AlignEnd=174433|Gloss=PUNCT
3	kyáː	yǎː	AUX	_	Mood=Cnd|Number=Sing|Person=2	4	aux	_	AlignBegin=174433|AlignEnd=174543|Gloss=2Sing.Cnd
4	mân	mán	VERB	_	_	7	advcl	_	AlignBegin=174543|AlignEnd=174653|Gloss=come
5	<	<	PUNCT	_	_	4	punct	_	AlignBegin=174653|AlignEnd=174763|Gloss=PUNCT
6	ká	a	AUX	_	Number=Plur|Person=2|Tense=Fut	7	aux	_	AlignBegin=174763|AlignEnd=174953|Gloss=2Plur.Fut
7	mán	mán	VERB	_	_	0	root	_	AlignBegin=174953|AlignEnd=175143|Gloss=come
8	fí	fi	VERB	_	_	7	compound	_	AlignBegin=175143|AlignEnd=175333|Gloss=do
9	ni	ni	PART	_	PartType=Adv	8	compound:prt	_	AlignBegin=175143|AlignEnd=175333|Gloss=Inch|Inchoative=Yes
10	maːndə	maːndə	NOUN	_	_	8	obj	_	AlignBegin=175333|AlignEnd=175525|Gloss=fight
11	tə́	tə́	ADP	_	_	12	case	_	AlignBegin=175525|AlignEnd=175658|Gloss=with
12	kúɲêtn	kúni	NOUN	_	Number=Sing|Person=1	8	obl:arg	_	AlignBegin=175658|AlignEnd=175724|Gloss=boy.1SingGen
13	//	//	PUNCT	_	_	7	punct	_	AlignBegin=175791|AlignEnd=175923|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obl:arg	color:blue
1	kúníː	kúni	NOUN	_	Deixis=Remt	3	nsubj	_	AlignBegin=128571|AlignEnd=128687|Gloss=boy.Remt
2	àː	áː	AUX	_	Aspect=Perf|Number=Sing|Person=3	3	aux	_	AlignBegin=128803|AlignEnd=129035|Gloss=3Sing.Perf
3	məs	məs	VERB	_	_	0	root	_	AlignBegin=129035|AlignEnd=129267|Gloss=die
4	ɓas	ɓas	ADP	_	_	5	case	_	AlignBegin=129267|AlignEnd=129383|Gloss=of
5	əm	mə	PRON	_	Number=Sing|Person=1|PronType=Prs	3	obl:arg	_	AlignBegin=129383|AlignEnd=129499|Gloss=1Sing.Acc|wordform==əm
6	sòːséy	sòːséy	ADV	_	_	3	advmod	_	AlignBegin=129499|AlignEnd=129731|Gloss=quite
7	//	//	PUNCT	_	_	3	punct	_	AlignBegin=129731|AlignEnd=129966|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 obl:arg	color:blue
1	mə̀	tə̀	AUX	_	Mood=Sub|Number=Plur|Person=1	2	aux	_	AlignBegin=324754|AlignEnd=324974|Gloss=1Plur.Sub
2	kòk	kok	VERB	_	_	0	root	_	AlignBegin=324974|AlignEnd=325194|Gloss=branch_off
3	mə̀	tə̀	AUX	_	Mood=Sub|Number=Plur|Person=1	4	aux	_	AlignBegin=325194|AlignEnd=325414|Gloss=1Plur.Sub
4	ʃìː	ʃiː	VERB	_	_	2	parataxis	_	AlignBegin=325414|AlignEnd=325634|Gloss=get_down
5	ɗòː	ɗôː	ADV	_	PronType=Int	4	obl:arg	_	AlignBegin=325634|AlignEnd=325854|Gloss=where
6	?//	?//	PUNCT	_	_	2	punct	_	AlignBegin=325854|AlignEnd=326076|Gloss=PUNCT

~~~


