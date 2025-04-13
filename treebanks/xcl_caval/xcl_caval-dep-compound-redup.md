---
layout: base
title:  'Statistics of compound:redup in UD_Classical_Armenian-CAVaL'
udver: '2'
---

## Treebank Statistics: UD_Classical_Armenian-CAVaL: Relations: `compound:redup`

This relation is a language-specific subtype of <tt><a href="xcl_caval-dep-compound.html">compound</a></tt>.

48 nodes (0%) are attached to their parents as `compound:redup`.

48 instances of `compound:redup` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.02083333333333.

The following 5 pairs of parts of speech are connected with `compound:redup`: <tt><a href="xcl_caval-pos-ADV.html">ADV</a></tt>-<tt><a href="xcl_caval-pos-ADV.html">ADV</a></tt> (30; 63% instances), <tt><a href="xcl_caval-pos-NOUN.html">NOUN</a></tt>-<tt><a href="xcl_caval-pos-NOUN.html">NOUN</a></tt> (11; 23% instances), <tt><a href="xcl_caval-pos-NUM.html">NUM</a></tt>-<tt><a href="xcl_caval-pos-NUM.html">NUM</a></tt> (4; 8% instances), <tt><a href="xcl_caval-pos-ADJ.html">ADJ</a></tt>-<tt><a href="xcl_caval-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="xcl_caval-pos-PROPN.html">PROPN</a></tt>-<tt><a href="xcl_caval-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 compound:redup	color:blue
1	Նա	նա	PRON	_	Case=Nom|Deixis=Remt|Number=Sing|PronType=Dem	3	nsubj	_	Translit=Na|LTranslit=na|Gloss=he/she/it/that
2	պատասխանի	պատասխանի	NOUN	_	Case=Acc|Number=Sing	3	obj	_	Translit=patasxani|LTranslit=patasxani|Gloss=answer
3	ետ	տալ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Translit=et|LTranslit=tal|Gloss=give
4	եւ	եւ	CCONJ	_	_	5	cc	_	Translit=ew|LTranslit=ew|Gloss=and
5	ասէ	ասել	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	SpaceAfter=No|Translit=asē|LTranslit=asel|Gloss=say
6	՝	՝	PUNCT	_	_	9	punct	_	Translit=;|LTranslit=;
7	ամէն	ամէն	ADV	_	_	9	advmod	_	Translit=amēn|LTranslit=amēn|Gloss=verily
8	ամէն	ամէն	ADV	_	_	7	compound:redup	_	Translit=amēn|LTranslit=amēn|Gloss=verily
9	ասեմ	ասել	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp	_	Translit=asem|LTranslit=asel|Gloss=say
10	ձեզ	դուք	PRON	_	Case=Dat|Number=Plur|Person=2|PronType=Prs	9	iobj	_	SpaceAfter=No|Translit=jez|LTranslit=dowkʻ|Gloss=you_(pl.)
11	՝	՝	PUNCT	_	_	14	punct	_	Translit=;|LTranslit=;
12	թե	թե	SCONJ	_	_	14	mark	_	Translit=tʻe|LTranslit=tʻe|Gloss=whether
13	ոչ	ոչ	PART	_	Polarity=Neg	14	advmod	_	Translit=očʻ|LTranslit=očʻ|Gloss=not
14	գիտեմ	գիտել	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	9	ccomp	_	Translit=gitem|LTranslit=gitel|Gloss=know
15	զ	զ	ADP	_	Definite=Def	16	case	_	SpaceAfter=No|Translit=z|LTranslit=z
16	ձեզ	դու	PRON	_	Case=Acc|Number=Sing|Person=2|PronType=Prs	14	obj	_	SpaceAfter=No|Translit=jez|LTranslit=dow|Gloss=you_(sg.)
17	:	:	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound:redup	color:blue
1	Եւ	եւ	CCONJ	_	_	2	cc	_	Translit=Ew|LTranslit=ew|Gloss=and
2	հրամայեաց	հրամայել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Translit=hramayeacʻ|LTranslit=hramayel|Gloss=order
3	նոցա	նա	PRON	_	Case=Dat|Deixis=Remt|Number=Plur|PronType=Dem	2	iobj	_	Translit=nocʻa|LTranslit=na|Gloss=he/she/it/that
4	բազմել	բազմել	VERB	_	VerbForm=Inf	2	xcomp	_	Translit=bazmel|LTranslit=bazmel|Gloss=sit
5	երախանս	երախան	NOUN	_	Case=Acc|Number=Plur	4	obj	_	Translit=eraxans|LTranslit=eraxan|Gloss=assembly
6	երախանս	երախան	NOUN	_	Case=Acc|Number=Plur	5	compound:redup	_	Translit=eraxans|LTranslit=eraxan|Gloss=assembly
7	ի	ի	ADP	_	_	10	case	_	Translit=i|LTranslit=i|LId=ի-1|Gloss=to
8	վերայ	վերայ	ADV	_	_	7	fixed	_	Translit=veray|LTranslit=veray|Gloss=above
9	դալար	դալար	ADJ	_	Case=Nom|Number=Sing	10	amod	_	Translit=dalar|LTranslit=dalar|Gloss=green
10	խոտոյ	խոտ	NOUN	_	Case=Gen|Number=Sing	4	obl	_	SpaceAfter=No|Translit=xotoy|LTranslit=xot|Gloss=grass
11	՝	՝	PUNCT	_	_	2	punct	_	Translit=;|LTranslit=;

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 compound:redup	color:blue
1	Ասէ	ասել	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Translit=Asē|LTranslit=asel|Gloss=say
2	ց	ց	ADP	_	_	3	case	_	SpaceAfter=No|Translit=cʻ|LTranslit=cʻ|Gloss=to
3	աշակերտս	աշակերտ	NOUN	_	Case=Acc|Number=Plur	1	obl:arg	_	SpaceAfter=No|Translit=ašakerts|LTranslit=ašakert|Gloss=disciple
4	ն	ն	DET	_	Definite=Def|Deixis=Remt|PronType=Art	3	det	_	SpaceAfter=No|Translit=n|LTranslit=n|Gloss=that
5	՝	՝	PUNCT	_	_	6	punct	_	Translit=;|LTranslit=;
6	բազմեցուցէք	բազմեցուցանել	VERB	_	Aspect=Perf|Mood=Imp|Number=Plur|Person=2|VerbForm=Fin|Voice=Cau	1	ccomp	_	Translit=bazmecʻowcʻēkʻ|LTranslit=bazmecʻowcʻanel|Gloss=multiply
7	զ	զ	ADP	_	Definite=Def	8	case	_	SpaceAfter=No|Translit=z|LTranslit=z
8	դոսա	դա	PRON	_	Case=Acc|Deixis=Med|Number=Plur|PronType=Dem	6	obj	_	Translit=dosa|LTranslit=da|Gloss=that_one
9	դասս	դաս	NOUN	_	Case=Acc|Number=Plur	6	obl	_	Translit=dass|LTranslit=das|Gloss=lesson
10	դասս	դաս	NOUN	_	Case=Acc|Number=Plur	9	compound:redup	_	SpaceAfter=No|Translit=dass|LTranslit=das|Gloss=lesson
11	:	:	PUNCT	_	_	12	punct	_	Translit=.|LTranslit=.
12	յիսուն	յիսուն	NUM	_	Case=Acc|Number=Sing|NumType=Dist	6	nummod	_	Translit=yisown|LTranslit=yisown|Gloss=fifty
13	յիսուն	յիսուն	NUM	_	Case=Acc|Number=Sing|NumType=Dist	12	compound:redup	_	SpaceAfter=No|Translit=yisown|LTranslit=yisown|Gloss=fifty
14	:	:	PUNCT	_	_	1	punct	_	Translit=.|LTranslit=.

~~~


