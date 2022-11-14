---
layout: base
title:  'Statistics of nmod:poss in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="pcm_nsc-dep-nmod.html">nmod</a></tt>.

1895 nodes (1%) are attached to their parents as `nmod:poss`.

1895 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.21477572559367.

The following 9 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (1861; 98% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (7; 0% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (7; 0% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (6; 0% instances), <tt><a href="pcm_nsc-pos-X.html">X</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 nmod:poss	color:blue
1	#	#	X	_	_	14	dep	_	AlignBegin=58309|AlignEnd=58814|Gloss=PUNCT
2	den	den	ADV	_	_	14	advmod	_	AlignBegin=58814|AlignEnd=59000|Gloss=den|LeftOverlap=False|RightOverlap=False|Syl1=mm|SyllableCount=1|WordContour=mm
3	<	<	X	_	_	2	dep	_	AlignBegin=59000|AlignEnd=59000|Gloss=PUNCT
4	ending	ending	NOUN	_	_	14	obl:mod	_	AlignBegin=59000|AlignEnd=59369|Gloss=end|LeftOverlap=False|RightOverlap=True|Syl1=mh|Syl2=hh|Syl3=hm|SyllableCount=2|WordContour=mh
5	of	of	ADP	_	_	7	case	_	AlignBegin=59369|AlignEnd=59585|Gloss=of|LeftOverlap=True|RightOverlap=False|Syl1=hm|SyllableCount=1|WordContour=hm
6	di	di	DET	_	Definite=Def|PronType=Art	7	det	_	AlignBegin=59585|AlignEnd=59679|Gloss=DEF.ART|LeftOverlap=False|RightOverlap=False|Syl1=mm|SyllableCount=1|WordContour=mm
7	year	year	NOUN	_	_	4	nmod	_	AlignBegin=59679|AlignEnd=59986|Gloss=year|LeftOverlap=False|RightOverlap=False|Syl1=hm|SyllableCount=1|WordContour=ml
8	<	<	X	_	_	4	dep	_	AlignBegin=59986|AlignEnd=59986|Gloss=PUNCT
9	#	#	X	_	_	4	dep	_	AlignBegin=59986|AlignEnd=60261|Gloss=PUNCT
10	de	dem	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	14	nsubj	_	AlignBegin=60261|AlignEnd=60331|Gloss=NOM.PL.3|LeftOverlap=False|RightOverlap=False|Syl1=ll|SyllableCount=1|WordContour=ll
11	go	go	AUX	_	Aspect=Prosp	14	aux	_	AlignBegin=60331|AlignEnd=60391|Gloss=PROSP|LeftOverlap=False|RightOverlap=False|Syl1=ll|SyllableCount=1|WordContour=ll
12	con	con	AUX	_	Aspect=Cons	14	aux	_	AlignBegin=60391|AlignEnd=60601|Gloss=CONS|LeftOverlap=False|RightOverlap=False|Syl1=mm|SyllableCount=1|WordContour=mh
13	dey	dey	AUX	_	Aspect=Imp	14	aux	_	AlignBegin=60601|AlignEnd=60771|Gloss=IPFV|LeftOverlap=False|RightOverlap=False|Syl1=mm|SyllableCount=1|WordContour=mm
14	pay	pay	VERB	_	_	0	root	_	AlignBegin=60771|AlignEnd=60970|Gloss=pay|LeftOverlap=False|RightOverlap=False|Syl1=mm|SyllableCount=1|WordContour=mm
15	us	us	PRON	_	Case=Acc|Number=Plur|Person=1|PronType=Prs	14	iobj	_	AlignBegin=60970|AlignEnd=61240|Gloss=ACC.PL.1|LeftOverlap=False|RightOverlap=False|Syl1=mm|SyllableCount=1|WordContour=ml
16	#	#	X	_	_	18	dep	_	AlignBegin=61240|AlignEnd=61442|Gloss=PUNCT
17	our	our	PRON	_	Number=Plur|Person=1|Poss=Yes	18	nmod:poss	_	AlignBegin=61442|AlignEnd=61671|Gloss=PL.1.POSS|LeftOverlap=False|RightOverlap=False|Syl1=ll|Syl2=ll|SyllableCount=2|WordContour=ll
18	money	money	NOUN	_	_	14	obj	_	AlignBegin=61671|AlignEnd=61971|Gloss=money|LeftOverlap=False|RightOverlap=False|Syl1=ll|Syl2=mm|SyllableCount=2|WordContour=lm
19	//	//	X	_	_	14	dep	_	AlignBegin=61971|AlignEnd=61971|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nmod:poss	color:blue
1	your	your	ADJ	_	Person=2|Poss=Yes	3	nmod:poss	_	AlignBegin=88830|AlignEnd=89071|Gloss=POSS.2|SyllableCount=1
2	own	own	ADJ	_	_	3	amod	_	AlignBegin=89071|AlignEnd=89313|Gloss=own|SyllableCount=1
3	level	level	NOUN	_	_	4	nsubj	_	AlignBegin=89313|AlignEnd=89554|Gloss=level|SyllableCount=2
4	high	high	ADJ	_	_	0	root	_	AlignBegin=89554|AlignEnd=89796|ExtPos=VERB|Gloss=high|SyllableCount=1
5	o	o	PART	_	PartType=Disc	4	advmod	_	AlignBegin=89796|AlignEnd=90037|Gloss=EMPH|SyllableCount=1
6	//	//	X	_	_	4	dep	_	AlignBegin=90037|AlignEnd=90037|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:poss	color:blue
1	but	but	CCONJ	_	_	5	discourse	_	AlignBegin=145280|AlignEnd=145478|Gloss=but|SyllableCount=1
2	no	no	AUX	_	Polarity=Neg	5	aux	_	AlignBegin=145478|AlignEnd=145675|Gloss=NEG|SyllableCount=1
3	be	be	AUX	_	PartType=Cop	5	cop	_	AlignBegin=145675|AlignEnd=145872|Gloss=be1|SyllableCount=1
4	people	people	NOUN	_	Number=Plur	5	nmod:poss	_	AlignBegin=145872|AlignEnd=146070|Gloss=people.PL|SyllableCount=2
5	fault	fault	NOUN	_	_	0	root	_	AlignBegin=146070|AlignEnd=146268|Gloss=fault|SyllableCount=1
6	like	like	ADP	_	_	7	case	_	AlignBegin=146268|AlignEnd=146465|Gloss=like|SyllableCount=1
7	dat	dat	PRON	_	Number=Sing	5	obl:mod	_	AlignBegin=146465|AlignEnd=146662|Gloss=SG.DEM|SyllableCount=1
8	now	now	ADV	_	_	7	advmod	_	AlignBegin=146662|AlignEnd=146860|Gloss=now|SyllableCount=1
9	//	//	X	_	_	5	dep	_	AlignBegin=146860|AlignEnd=146860|Gloss=PUNCT

~~~


