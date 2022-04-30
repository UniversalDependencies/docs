---
layout: base
title:  'Statistics of expl:pv in UD_German-HDT'
udver: '2'
---

## Treebank Statistics: UD_German-HDT: Relations: `expl:pv`

This relation is a language-specific subtype of <tt><a href="de_hdt-dep-expl.html">expl</a></tt>.

10468 nodes (0%) are attached to their parents as `expl:pv`.

6275 instances of `expl:pv` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.88842185708827.

The following 2 pairs of parts of speech are connected with `expl:pv`: <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-PRON.html">PRON</a></tt> (10450; 100% instances), <tt><a href="de_hdt-pos-AUX.html">AUX</a></tt>-<tt><a href="de_hdt-pos-PRON.html">PRON</a></tt> (18; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 expl:pv	color:blue
1	Man	Man	PRON	PIS	Case=Nom|Number=Sing|Person=3|PronType=Ind,Neg,Tot	8	nsubj	_	_
2	wolle	wollen	AUX	VMFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Mod	8	aux	_	_
3	sich	sich	PRON	PRF	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	8	expl:pv	_	_
4	nur	nur	ADV	ADV	_	8	advmod	_	_
5	für	für	ADP	APPR	AdpType=Prep	7	case	_	_
6	alle	all	DET	PIDAT	Case=Acc|Number=Plur|Person=3	7	det	_	_
7	Eventualitäten	Eventualitäten	NOUN	NN	Case=Acc|Person=3	8	obl	_	_
8	rüsten	rüsten	VERB	VVINF	VerbForm=Inf	0	root	_	_
9	.	.	PUNCT	$.	PunctType=Peri	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 expl:pv	color:blue
1	Erholt	erholen	ADJ	ADJD	Degree=Pos|Variant=Short	2	advmod	_	_
2	hat	haben	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	sich	sich	PRON	PRF	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	2	expl:pv	_	_
4	das	das	DET	ART	Case=Nom|Gender=Neut|Number=Sing|PronType=Art	5	det	_	_
5	Unternehmen	Unternehmen	NOUN	NN	Gender=Neut|Number=Sing|Person=3	2	nsubj	_	_
6	davon	davon	ADV	PROAV	_	2	advmod	_	_
7	bislang	bislang	ADV	ADV	_	2	advmod	_	_
8	offensichtlich	offensichtlich	ADJ	ADJD	Degree=Pos|Variant=Short	2	advmod	_	_
9	nicht	nicht	PART	PTKNEG	Polarity=Neg	2	advmod	_	_
10	:	:	PUNCT	$.	PunctType=Peri	2	punct	_	_

~~~


