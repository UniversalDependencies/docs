---
layout: base
title:  'Statistics of iobj:agent in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `iobj:agent`

This relation is a language-specific subtype of <tt><a href="pcm_nsc-dep-iobj.html">iobj</a></tt>.

4 nodes (0%) are attached to their parents as `iobj:agent`.

4 instances of `iobj:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5.

The following 2 pairs of parts of speech are connected with `iobj:agent`: <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt> (2; 50% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (2; 50% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 iobj:agent	color:blue
1	and	and	CCONJ	_	_	5	discourse	_	AlignBegin=102120|AlignEnd=102345|Gloss=and|SyllableCount=1
2	di	di	DET	_	Definite=Def|PronType=Art	3	det	_	AlignBegin=102345|AlignEnd=102570|Gloss=DEF.ART|SyllableCount=1
3	ting	ting	NOUN	_	_	5	nsubj	_	AlignBegin=102570|AlignEnd=102794|Gloss=thing|SyllableCount=1
4	be	be	AUX	_	PartType=Cop	5	cop	_	AlignBegin=102794|AlignEnd=103019|Gloss=be1|SyllableCount=1
5	sey	sey	SCONJ	_	_	0	root	_	AlignBegin=103019|AlignEnd=103244|Gloss=COMP|SyllableCount=1
6	wu~	X	X	_	_	5	discourse	_	AlignBegin=103244|AlignEnd=103469|Gloss=X|SyllableCount=1
7	//=	//=	X	_	_	24	dep	_	AlignBegin=103244|AlignEnd=103244|Gloss=PUNCT
8	no	no	AUX	_	Polarity=Neg	9	aux	_	AlignBegin=103469|AlignEnd=103694|Gloss=NEG|SyllableCount=1
9	matter	matter	VERB	_	_	24	advcl	_	AlignBegin=103694|AlignEnd=103919|Gloss=matter|SyllableCount=2
10	how	how	ADV	_	PronType=Int	9	iobj:agent	_	AlignBegin=103919|AlignEnd=104143|Gloss=how.Q|SyllableCount=1
11	you	you	PRON	_	Case=Nom|Person=2|PronType=Prs	12	nsubj	_	AlignBegin=104143|AlignEnd=104368|Gloss=NOM.2|SyllableCount=1
12	spend	spend	VERB	_	_	10	ccomp	_	AlignBegin=104368|AlignEnd=104593|Gloss=spend|SyllableCount=1
13	for	for	ADP	_	_	14	case	_	AlignBegin=104593|AlignEnd=104818|Gloss=for|SyllableCount=1
14	wedding	wedding	NOUN	_	_	12	obl:arg	_	AlignBegin=104818|AlignEnd=105043|Gloss=wedding|SyllableCount=2
15	<	<	X	_	_	9	dep	_	AlignBegin=105043|AlignEnd=105043|Gloss=PUNCT
16	di	di	DET	_	Definite=Def|PronType=Art	17	det	_	AlignBegin=105043|AlignEnd=105267|Gloss=DEF.ART|SyllableCount=1
17	truth	truth	NOUN	_	_	24	nsubj:outer	_	AlignBegin=105267|AlignEnd=105492|Gloss=truth|SyllableCount=1
18	be	be	AUX	_	PartType=Cop	24	cop	_	AlignBegin=105492|AlignEnd=105717|Gloss=be1|SyllableCount=1
19	sey	sey	SCONJ	_	_	24	mark	_	AlignBegin=105717|AlignEnd=105942|Gloss=COMP|SyllableCount=1
20	[	[	X	_	_	24	dep	_	AlignBegin=105942|AlignEnd=105942|Gloss=PUNCT
21	people	people	NOUN	_	Number=Plur	24	nsubj	_	AlignBegin=105942|AlignEnd=106167|Gloss=people.PL|SyllableCount=2
22	go	go	AUX	_	Aspect=Prosp	24	aux	_	AlignBegin=106167|AlignEnd=106391|Gloss=PROSP|SyllableCount=1
23	still	still	ADV	_	_	24	advmod	_	AlignBegin=106391|AlignEnd=106616|Gloss=still|SyllableCount=1
24	insist	insist	VERB	_	_	5	parataxis:conj	_	AlignBegin=106616|AlignEnd=106841|Gloss=insist|SyllableCount=2
25	sey	sey	SCONJ	_	PartType=Cop	29	mark	_	AlignBegin=106841|AlignEnd=107066|Gloss=COMP|SyllableCount=1
26	[	[	X	_	_	29	dep	_	AlignBegin=107066|AlignEnd=107066|Gloss=PUNCT
27	de	dem	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	29	nsubj	_	AlignBegin=107066|AlignEnd=107291|Gloss=NOM.PL.3|SyllableCount=1
28	no	no	AUX	_	Polarity=Neg	29	aux	_	AlignBegin=107291|AlignEnd=107516|Gloss=NEG|SyllableCount=1
29	get	get	VERB	_	_	24	ccomp	_	AlignBegin=107516|AlignEnd=107740|Gloss=get|SyllableCount=1
30	food	food	NOUN	_	_	29	obj	_	AlignBegin=107740|AlignEnd=107965|Gloss=food|SyllableCount=1
31	chop	chop	VERB	_	_	30	acl:relcl	_	AlignBegin=107965|AlignEnd=108190|Gloss=eat|SyllableCount=1
32	]	]	X	_	_	29	dep	_	AlignBegin=108190|AlignEnd=108190|Gloss=PUNCT
33	]	]	X	_	_	24	dep	_	AlignBegin=108190|AlignEnd=108190|Gloss=PUNCT
34	//	//	X	_	_	5	dep	_	AlignBegin=108190|AlignEnd=108190|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 iobj:agent	color:blue
1	and	and	CCONJ	_	_	3	discourse	_	AlignBegin=205100|AlignEnd=205308|Gloss=and|SyllableCount=1|WordContour=ml
2	we	we	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	3	nsubj	_	AlignBegin=205308|AlignEnd=205505|Gloss=NOM.PL.1|SyllableCount=1|WordContour=ll
3	win	win	VERB	_	_	0	root	_	AlignBegin=205505|AlignEnd=205830|Gloss=win|SyllableCount=1|WordContour=llm2
4	//=	//=	X	_	_	7	dep	_	AlignBegin=205830|AlignEnd=205860|Gloss=PUNCT
5	#	#	X	_	_	7	dep	_	AlignBegin=205860|AlignEnd=206320|Gloss=PUNCT
6	we	we	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	7	nsubj	_	AlignBegin=206320|AlignEnd=206470|Gloss=NOM.PL.1|SyllableCount=1|WordContour=mm
7	achieve	achieve	VERB	_	_	3	parataxis:conj	_	AlignBegin=206470|AlignEnd=207090|Gloss=achieve|SyllableCount=2|WordContour=llH3
8	>	>	X	_	_	11	dep	_	AlignBegin=207090|AlignEnd=207120|Gloss=PUNCT
9	#	#	X	_	_	11	dep	_	AlignBegin=207120|AlignEnd=207560|Gloss=PUNCT
10	no	no	AUX	_	Polarity=Neg	11	aux	_	AlignBegin=207560|AlignEnd=207670|Gloss=NEG|SyllableCount=1|WordContour=mm
11	matter	matter	VERB	_	_	7	advcl	_	AlignBegin=207670|AlignEnd=207930|Gloss=matter|SyllableCount=2|WordContour=mhH3
12	di	di	DET	_	Definite=Def|PronType=Art	13	det	_	AlignBegin=207930|AlignEnd=208010|Gloss=DEF.ART|SyllableCount=1|WordContour=hm
13	circumstance	circumstance	NOUN	_	_	11	iobj:agent	_	AlignBegin=208010|AlignEnd=208568|Gloss=circumstance|SyllableCount=3|WordContour=mmH3
14	wey	wey	SCONJ	_	_	16	mark	_	AlignBegin=208568|AlignEnd=208736|Gloss=REL|SyllableCount=1|WordContour=hm
15	we	we	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	16	nsubj	_	AlignBegin=208736|AlignEnd=208820|Gloss=NOM.PL.1|SyllableCount=1|WordContour=ml
16	see	see	VERB	_	_	13	acl:relcl	_	AlignBegin=208820|AlignEnd=209043|Gloss=see|SyllableCount=1|WordContour=lm
17	oursef	oursef	PRON	_	Case=Acc|Number=Plur|Person=1|PronType=Prs|Reflex=Yes	16	obj	_	AlignBegin=209043|AlignEnd=209510|Gloss=ACC.PL.1.REFL|SyllableCount=2|WordContour=ml
18	//	//	X	_	_	3	dep	_	AlignBegin=209510|AlignEnd=209540|Gloss=PUNCT

~~~


