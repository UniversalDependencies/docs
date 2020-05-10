---
layout: base
title:  'Statistics of obl:lvc in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `obl:lvc`

This relation is a language-specific subtype of .
There are also 3 other language-specific subtypes of `obl`: <tt><a href="pcm_nsc-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="pcm_nsc-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="pcm_nsc-dep-obl-mod.html">obl:mod</a></tt>.

4 nodes (0%) are attached to their parents as `obl:lvc`.

4 instances of `obl:lvc` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 2 pairs of parts of speech are connected with `obl:lvc`: <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (3; 75% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 obl:lvc	color:blue
1	#	#	PUNCT	_	_	5	punct	_	AlignBegin=232840|AlignEnd=233460|Gloss=PUNCT
2	ehe	ehe	INTJ	_	_	5	discourse	_	AlignBegin=233460|AlignEnd=233704|Gloss=ehe
3	dis	dis	DET	_	Number=Sing|PronType=Dem	4	det	_	AlignBegin=233734|AlignEnd=234012|Gloss=SG.PROX.DEM
4	ting	ting	NOUN	_	_	5	nsubj	_	AlignBegin=234012|AlignEnd=234250|Gloss=thing
5	take	take	VERB	_	_	0	root	_	AlignBegin=234250|AlignEnd=234584|Gloss=take
6	me	me	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	5	obj	_	AlignBegin=234584|AlignEnd=234719|Gloss=ACC.SG.1
7	like	like	ADP	_	_	9	case	_	AlignBegin=234719|AlignEnd=234960|Gloss=like
8	three	three	NUM	_	NumType=Card	9	nummod:det	_	AlignBegin=234960|AlignEnd=235138|Gloss=three.CARD
9	weeks	week	NOUN	_	Number=Plur	5	obl:lvc	_	AlignBegin=235138|AlignEnd=235238|Gloss=week.PL
10	>	>	PUNCT	_	_	18	punct	_	AlignBegin=235238|AlignEnd=235268|Gloss=PUNCT
11	as	as	ADP	_	_	18	case	_	AlignBegin=235268|AlignEnd=235423|EXTPOS=ADP|Gloss=as
12	in	in	ADP	_	_	11	fixed	_	AlignBegin=235423|AlignEnd=235533|Gloss=in
13	only	only	ADV	_	_	18	advmod	_	AlignBegin=235563|AlignEnd=235870|Gloss=only
14	two	two	NUM	_	NumType=Card	15	compound	_	AlignBegin=235870|AlignEnd=235959|Gloss=two.CARD
15	hundred	hundred	NUM	_	NumType=Card	18	nummod:det	_	AlignBegin=235959|AlignEnd=236027|Gloss=hundred.CARD
16	and	and	CCONJ	_	_	17	cc	_	AlignBegin=236027|AlignEnd=236130|Gloss=and
17	fifty	fifty	NUM	_	NumType=Card	15	conj	_	AlignBegin=236130|AlignEnd=236456|Gloss=fifty.CARD
18	naira	naira	NOUN	_	_	5	dislocated	_	AlignBegin=236456|AlignEnd=236770|Gloss=naira
19	//	//	PUNCT	_	_	5	punct	_	AlignBegin=236770|AlignEnd=236800|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 18 obl:lvc	color:blue
1	#	#	PUNCT	_	_	13	punct	_	AlignBegin=37000|AlignEnd=37440|Gloss=PUNCT
2	if	if	SCONJ	_	_	5	mark	_	AlignBegin=37440|AlignEnd=37660|Gloss=if
3	na	na	AUX	_	PartType=Cop	5	cop	_	AlignBegin=37660|AlignEnd=37820|Gloss=be
4	dat	dat	DET	_	Number=Sing|PronType=Dem	5	det	_	AlignBegin=37820|AlignEnd=37990|Gloss=SG.DIST.DEM
5	place	place	NOUN	_	_	13	advcl:periph	_	AlignBegin=37990|AlignEnd=38170|Gloss=place
6	>+	>+	PUNCT	_	_	10	punct	_	AlignBegin=38200|AlignEnd=38280|Gloss=PUNCT
7	wey	when	SCONJ	_	_	10	mark	_	AlignBegin=38200|AlignEnd=38280|Gloss=when
8	you	you	PRON	_	Case=Nom|Person=2|PronType=Prs	10	nsubj	_	AlignBegin=38280|AlignEnd=38340|Gloss=NOM.2
9	go	go	AUX	_	Aspect=Prosp	10	aux	_	AlignBegin=38340|AlignEnd=38460|Gloss=PROSP
10	see	see	VERB	_	_	5	advcl:cleft	_	AlignBegin=38460|AlignEnd=38750|Gloss=see
11	<	<	PUNCT	_	_	5	punct	_	AlignBegin=38750|AlignEnd=38780|Gloss=PUNCT
12	#	#	PUNCT	_	_	5	punct	_	AlignBegin=38780|AlignEnd=39100|Gloss=PUNCT
13	go	go	VERB	_	_	0	root	_	AlignBegin=39100|AlignEnd=39280|Gloss=go
14	see	see	VERB	_	_	13	xcomp	_	AlignBegin=39280|AlignEnd=39480|Gloss=see
15	hotel	hotel	NOUN	_	_	14	obj	_	AlignBegin=39480|AlignEnd=39790|Gloss=hotel
16	now	now	ADV	_	_	14	advmod	_	AlignBegin=39790|AlignEnd=40060|Gloss=now
17	for	for	ADP	_	_	18	case	_	AlignBegin=40060|AlignEnd=40290|Gloss=for
18	GRA	GRA	PROPN	_	_	14	obl:lvc	_	AlignBegin=40290|AlignEnd=40850|Gloss=GRA
19	!//	!//	PUNCT	_	_	13	punct	_	AlignBegin=40850|AlignEnd=40880|Gloss=PUNCT

~~~


